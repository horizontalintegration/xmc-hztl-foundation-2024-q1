// Global
import {
  GetStaticComponentProps,
  ImageFieldValue,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import graphQLClientFactory from 'lib/graphql-client-factory';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import FooterQuery from './Footer.graphql';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

interface FooterColumn {
  id: string;
  name: string;
  columnLinks: {
    items: LinkItem[];
  };
}

interface FooterLogo {
  jsonValue: {
    value: ImageFieldValue;
  };
  alt: string;
}

interface Item {
  id: string;
  path: string;
  footerLogo: FooterLogo;
  footerColumns: {
    items: FooterColumn[];
  };
}

interface LinkItem {
  id: string;
  name: string;
  link: {
    jsonValue: LinkField;
  };
}

export type FooterProps = ComponentProps &
  SiteStructure.Footer.Footer & { FooterData: { item: Item } };

const footerStyles = tv({
  slots: {
    base: ['component', 'footer', 'px-0', 'w-full'],
    columnContainer: [
      'flex-wrap',
      'flex',
      'gap-xl',
      'justify-start',
      'lg:gap-[62px]',
      'md:gap-[50px]',
      'md:justify-between',
      'md:w-auto',
      'sm:gap-l',
      'sm:w-[344px]',
      'xl:gap-[162px]',
    ],
    columnContent: [
      'flex justify-between',
      'flex-wrap',
      'gap-m',
      'lg:gap-[204px]',
      'md:w-auto',
      'mmd:gap-xl',
      'mml:gap-[140px]',
      'sm:gap-ml',
      'sm:w-[312px]',
      'xl:gap-[216px]',
    ],
    contentColumn: ['m-auto', 'max-w-screen-xl', 'p-ml', 'pb-s', 'w-full'],
    contentContainer: ['flex', 'flex-col'],
    hRule: ['border border-gray', 'w-full'],
    isEmptyHint: ['is-empty-hint'],
    linkColumnContainer: ['text-left'],
    linkColumnList: ['flex', 'flex-col'],
    linkColumnListItem: ['list-none -ml-m', 'p-xxs'],
    linkColumnListItemLink: ['capitalize', 'font-bold', 'font-modern', 'text-gray', 'text-xs'],
    linkColumnTitle: ['capitalize', 'font-bold', 'font-modern', 'text-gray', 'text-xs'],
  },
});

const FooterDefaultComponent = (props: FooterProps): JSX.Element => {
  const { styles } = props?.params || {};

  const { base, isEmptyHint } = footerStyles();

  return (
    <div className={base({ className: styles })}>
      <span className={isEmptyHint()}>Footer</span>
    </div>
  );
};

export const Default = (props: FooterProps): JSX.Element => {
  const { item } = props?.FooterData || {};
  const { footerColumns, footerLogo } = item || {};
  const { RenderingIdentifier, styles } = props?.params || {};

  /*
   * Tailwind Variants
   */

  const {
    base,
    columnContainer,
    columnContent,
    contentColumn,
    contentContainer,
    hRule,
    linkColumnContainer,
    linkColumnList,
    linkColumnListItem,
    linkColumnListItemLink,
    linkColumnTitle,
  } = footerStyles();

  if (!item) return <FooterDefaultComponent {...props} />;

  /*
   * RENDERING
   */

  return (
    <div className={base({ className: styles })} id={RenderingIdentifier || ''}>
      <div className={contentContainer()} data-component="authorable/shared/site-structure/footer">
        <div className={contentColumn()}>
          <div className={columnContainer()}>
            <div>
              <ImageWrapper field={{ value: footerLogo?.jsonValue.value }} />
            </div>
            <div className={columnContent()}>
              {footerColumns?.items?.map((footerColumn) => {
                const links = footerColumn?.columnLinks?.items;

                return (
                  <React.Fragment key={footerColumn?.id}>
                    <div className={linkColumnContainer()}>
                      <RichTextWrapper
                        className={linkColumnTitle()}
                        field={{ value: footerColumn?.name }}
                        tag="h3"
                      />
                      <ul className={linkColumnList()}>
                        {links?.map((link) => (
                          <li className={linkColumnListItem()} key={link?.id}>
                            <LinkWrapper
                              className={linkColumnListItemLink()}
                              field={link?.link?.jsonValue}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <hr className={hRule()} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const graphQLClient = graphQLClientFactory({});
  const result = await graphQLClient.request<unknown>(FooterQuery, {
    datasource: rendering.dataSource,
    params: rendering.params,
    language: layoutData?.sitecore?.context?.language,
    itemID: layoutData?.sitecore?.route?.itemId,
  });
  return { FooterData: result };
};
