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

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['col-span-2'],
    column: [],
    container: ['m-auto max-w-screen-xl'],
    content: [
      'flex',
      'flex-wrap',
      'gap-20',
      'justify-start',
      'md:gap-10',
      'md:justify-between',
      'md:w-auto',
      'sm:gap-10',
    ],
    contentWrapper: ['w-full mmd:w-fit'],
    divider: ['bg-black', 'w-full', 'opacity-100'],
    linkWrapper: ['capitalize', 'font-bold', 'font-modern', 'py-2', 'text-theme-black text-xs'],
    menuItem: ['p-2'],
    menuList: ['flex', 'flex-col'],
    section: [
      'flex',
      'flex-wrap',
      'gap-6',
      'justify-between',
      'lg:gap-20',
      'md:w-auto',
      'md:gap-20',
      'sm:gap-8',
    ],
    textWrapper: [
      'capitalize',
      'font-bold',
      'font-modern',
      'pb-3',
      'pt-1.5',
      'text-theme-black',
      'text-xs',
    ],
    wrapper: ['px-4', 'py-10', 'w-full', 'ml:px-20'],
  },
});

interface FooterColumn {
  id: string;
  columnLinks: {
    items: LinkItem[];
  };
  name: string;
}

interface FooterLogo {
  alt: string;
  jsonValue: {
    value: ImageFieldValue;
  };
}

interface Item {
  footerColumns: {
    items: FooterColumn[];
  };
  footerLogo: FooterLogo;
  id: string;
  path: string;
}

interface LinkItem {
  id: string;
  link: {
    jsonValue: LinkField;
  };
  name: string;
}

export type FooterProps = ComponentProps &
  SiteStructure.Footer.Footer & { FooterData: { item: Item } };

export const Default = (props: FooterProps): JSX.Element => {
  const { item } = props?.FooterData;
  const { RenderingIdentifier } = props?.params || {};

  const footerColumns = item?.footerColumns.items;
  const footerLogo = item?.footerLogo;

  const {
    base,
    container,
    wrapper,
    content,
    contentWrapper,
    column,
    textWrapper,
    menuList,
    menuItem,
    linkWrapper,
    divider,
  } = TAILWIND_VARIANTS();

  /*
   * Rendering
   */

  if (!item) {
    return <></>;
  }

  return (
    <div
      className={`${base()} ${props?.params?.styles !== undefined ? props?.params?.styles : ''}`}
      id={RenderingIdentifier}
    >
      <div data-component="authorable/shared/site-structure/footer">
        <div className={container()}>
          <div className={wrapper()}>
            <div className={content()}>
              <div className={contentWrapper()}>
                <ImageWrapper field={{ value: footerLogo?.jsonValue.value }} />
              </div>
              {footerColumns?.map((groupLabel: FooterColumn) => {
                const links = groupLabel?.columnLinks?.items;

                return (
                  <div className={column()} key={groupLabel?.id}>
                    <RichTextWrapper
                      className={textWrapper()}
                      field={{ value: groupLabel?.name }}
                      tag="h3"
                    />
                    <ul className={menuList()}>
                      {links?.map((link) => (
                        <li className={menuItem()} key={link?.link?.jsonValue?.value?.id as string}>
                          <LinkWrapper className={linkWrapper()} field={link?.link?.jsonValue} />
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className={divider()} />
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
