import {
  GetStaticComponentProps,
  ImageFieldValue,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';
import FooterQuery from './Footer.graphql';
import React from 'react';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import graphQLClientFactory from 'lib/graphql-client-factory';
interface LinkItem {
  id: string;
  name: string;
  link: {
    jsonValue: LinkField;
  };
}

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

export type FooterProps = ComponentProps &
  SiteStructure.Footer.Footer & { FooterData: { item: Item } };

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component footer ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  const { item } = props?.FooterData;
  const footerColumns = item?.footerColumns.items;
  const footerLogo = item?.footerLogo;

  if (item) {
    return (
      <div
        className={`component footer w-full px-0 ${
          props?.params?.styles !== undefined ? props?.params?.styles : ''
        }`}
        id={id ? id : ''}
      >
        <div data-component="authorable/general/footer" className="flex flex-col">
          <div className="p-ml pb-s m-auto w-full max-w-screen-xl">
            <div className="flex flex-wrap justify-start md:justify-between gap-xl sm:gap-l md:gap-[70px]  sm:w-[344px] md:w-auto">
              <div>
                <ImageWrapper field={{ value: footerLogo?.jsonValue.value }} />
              </div>
              <div className="flex justify-between flex-wrap gap-m sm:gap-ml mmd:gap-xl mml:gap-[140px]  sm:w-[312px] md:w-auto">
                {footerColumns?.map((groupLabel, index) => {
                  const links = groupLabel?.columnLinks?.items;
                  return (
                    <React.Fragment key={index}>
                      <div className="text-left">
                        <RichTextWrapper
                          className="font-modern text-black text-xs  font-bold capitalize"
                          tag="h3"
                          field={{ value: groupLabel?.name }}
                        />
                        <ul className="flex flex-col">
                          {links?.map((link, index) => (
                            <li className="p-xxs list-none -ml-m" key={index}>
                              <LinkWrapper
                                className="font-modern text-black text-xs font-bold capitalize"
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
          <hr className="w-full border border-gray" />
        </div>
      </div>
    );
  }

  return <FooterDefaultComponent {...props} />;
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
