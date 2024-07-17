import React from 'react';

import { GetStaticComponentProps, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';
import { Data } from 'src/.generated/Foundation.HztlFoundation.model';
import FooterQuery from './Footer.graphql';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import config from 'temp/config';

export type FooterProps = ComponentProps & SiteStructure.Footer.Footer;

const FooterDefaultComponent = (FooterData: FooterProps): JSX.Element => (
  <div className={`component footer ${FooterData?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (FooterData: FooterProps): JSX.Element => {
  const id = FooterData?.params?.RenderingIdentifier;
  if (FooterData?.fields) {
    return (
      <div
        className={`component footer w-full px-0 ${
          FooterData?.params?.styles !== undefined ? FooterData?.params?.styles : ''
        }`}
        id={id ? id : ''}
      >
        <div data-component="authorable/general/footer" className="flex flex-col">
          <div className="p-ml pb-s m-auto w-full max-w-screen-xl">
            <div className="flex flex-wrap justify-start md:justify-between gap-xl sm:gap-l md:gap-[50px] lg:gap-[62px] xl:gap-[162px] sm:w-[344px] md:w-auto">
              <div>
                <ImageWrapper field={FooterData?.fields?.footerLogo} />
              </div>
              <div className="flex justify-between flex-wrap gap-m sm:gap-ml mmd:gap-xl mml:gap-[140px] lg:gap-[204px] xl:gap-[216px] sm:w-[312px] md:w-auto">
                {FooterData?.fields?.footerColumns?.map((groupLabel, index) => {
                  const links = groupLabel?.fields?.columnLinks as (Item &
                    Data.Links.GenericLink)[];
                  return (
                    <React.Fragment key={index}>
                      <div className="text-left">
                        <RichTextWrapper
                          className="font-modern text-gray text-xs font-bold capitalize"
                          tag="h3"
                          field={{ value: groupLabel?.displayName }}
                        />
                        <ul className="flex flex-col">
                          {links?.map((link, index) => (
                            <li className="p-xxs list-none -ml-m" key={index}>
                              <LinkWrapper
                                className="font-modern text-gray text-xs font-bold capitalize"
                                suppressNewTabIcon={true}
                                field={link?.fields?.link}
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

  return <FooterDefaultComponent {...FooterData} />;
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  if (
    layoutData?.sitecore?.context?.pageState == 'normal' ||
    layoutData?.sitecore?.context?.pageState == 'preview'
  ) {
    const result = await graphQLClient.request<unknown>(FooterQuery, {
      datasource: rendering.dataSource,
      params: rendering.params,
      language: layoutData?.sitecore?.context?.language,
      itemID: layoutData?.sitecore?.route?.itemId,
    });
    return {
      FooterData: result,
    };
  }
  return 'Component is not available in Experience Editor';
};
