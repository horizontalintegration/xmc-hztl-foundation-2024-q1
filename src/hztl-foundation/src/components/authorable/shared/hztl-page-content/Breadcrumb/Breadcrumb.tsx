/* eslint-disable prettier/prettier */
// Global
import { GetStaticComponentProps, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import React from 'react';
// Local
import { BreadcrumbDataType } from './Breadcrumb.types';
import BreadcrumbQuery from './Breadcrumb.graphql';
import LinkWrapper from 'helpers/LinkWrapper/LinkWrapper';
import config from 'temp/config';
import { SvgIcon } from 'helpers/SvgIconWrapper';

const Breadcrumb = (staticProps: BreadcrumbDataType): JSX.Element => {
  const { ancestors, Title } = staticProps?.staticProps?.currentPage || {};

  const { componentName, dataSource } = staticProps?.rendering || {};

  return (
    <div>
      <div data-component="authorable/landmarks/breadcrumbs" data-testid="breadcrumbs">
        <div>
          <nav aria-label="Breadcrumb">
            <ul className="md:flex items-center list">
              {ancestors
                ?.slice()
                .reverse()
                .map((itm, index: React.Key | null | undefined) => {
                  let hideBreadcrumb = false;
                  itm?.disabledLinkNames?.names?.map((disitm) => {
                    if (disitm?.field?.disabled?.value === 'breadcrumb') hideBreadcrumb = true;
                  });
                  if (hideBreadcrumb) return;
                  return (
                    itm?.Title?.jsonValue?.value && (
                      <li key={index} className={`p-[10px]`}>
                        <LinkWrapper
                          field={{
                            value: {
                              href: itm?.pageUrl?.link,
                              text: itm?.Title?.jsonValue?.value,
                              title: itm?.Title?.jsonValue?.value,
                            },
                          }}
                          tabIndex={0}
                          gtmEvent={{
                            event: 'link',
                            type: 'breadcrumb',
                            'gtm.element.dataset.gtmDatasourceId': dataSource,
                            'gtm.element.dataset.gtmComponentName': componentName,
                          }}
                          className="flex items-center underline"
                        >
                          <SvgIcon icon={'arrow-right'} className="h-[15px] w-[15px] ml-[10px]" />
                        </LinkWrapper>
                      </li>
                    )
                  );
                })}
              <li className={`p-[10px] flex items-center `}>
                <Text
                  encode={false}
                  field={{
                    value: Title?.jsonValue?.value,
                  }}
                  tag="span"
                />
                <SvgIcon icon={'arrow-right'} className="h-[15px] w-[15px] ml-[10px]" />
              </li>
            </ul>
          </nav>
          <div
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) -4.17%, #FFF 104.17%)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });
  const result = await graphQLClient.request<unknown>(BreadcrumbQuery, {
    datasource: rendering.dataSource,
    params: rendering.params,
    language: layoutData?.sitecore?.context?.language,
    itemID: layoutData?.sitecore?.route?.itemId,
  });
  return {
    staticProps: result,
  };
};

