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
    base: ['px-3', 'pt-14', 'mdlg:col-span-4', 'mdlg:!px-0'], // TODO: The '!' here should not be necessary, but again, gobs of extra SCSS in a Tailwind project.
    contentContainer: [
      'flex',
      'flex-col',
      'm-auto',
      'w-full',
      'mdlg:flex',
      'mdlg:flex-row',
      'mdlg:gap-40',
    ],
    hr: ['border-b', 'border-b-theme-black'],
    linkListContainer: [
      'gap-x-16',
      'gap-y-11',
      'grid',
      'grid-cols-2',
      'grow',
      'mb-3',
      'mdlg:grid-cols-4',
      'mdlg:gap-x-10',
      'xl:gap-x-40',
    ],
    linkListItem: ['p-2', 'first:p-0'],
    linkListLink: ['capitalize', 'font-bold', 'font-modern'],
    linkListTitle: ['capitalize', 'font-bold', 'font-modern'],
    logoContainer: ['mb-24', 'mdlg:mb-0'],
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
  const { item } = props?.FooterData || {};
  const { RenderingIdentifier } = props?.params || {};

  const footerColumns = item?.footerColumns.items;
  const footerLogo = item?.footerLogo;

  /*
   * Rendering
   */

  if (!item) {
    return <></>;
  }

  const extendedTailwindVariants = tv({
    extend: TAILWIND_VARIANTS,
    slots: {
      base: [props?.params?.styles],
    },
  });

  const {
    base,
    contentContainer,
    hr,
    linkListContainer,
    linkListItem,
    linkListLink,
    linkListTitle,
    logoContainer,
  } = extendedTailwindVariants();

  return (
    <div
      data-component="authorable/shared/site-structure/footer"
      className={base()}
      id={RenderingIdentifier}
    >
      <div className={contentContainer()}>
        <div className={logoContainer()}>
          <ImageWrapper field={footerLogo?.jsonValue} />
        </div>
        <div className={linkListContainer()}>
          {footerColumns?.map((groupLabel: FooterColumn) => {
            const links = groupLabel?.columnLinks?.items;

            return (
              <ul key={groupLabel?.id}>
                <li className={linkListItem()}>
                  <RichTextWrapper
                    className={linkListTitle()}
                    field={{ value: groupLabel?.name }}
                    tag="h3"
                  />
                </li>
                {links?.map((link) => (
                  <li className={linkListItem()} key={link?.link?.jsonValue?.value?.id as string}>
                    <LinkWrapper className={linkListLink()} field={link?.link?.jsonValue} />
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
      <hr className={hr()} />
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const graphQLClient = graphQLClientFactory({});

  const result = await graphQLClient.request<unknown>(FooterQuery, {
    datasource: rendering.dataSource,
    itemID: layoutData?.sitecore?.route?.itemId,
    language: layoutData?.sitecore?.context?.language,
    params: rendering.params,
  });

  return { FooterData: result };
};
