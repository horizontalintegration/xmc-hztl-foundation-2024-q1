// Global
import { GetStaticComponentProps, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import React from 'react';

// Lib

// Local
import { BreadcrumbDataType } from './Breadcrumb.types';
import BreadcrumbQuery from './Breadcrumb.graphql';
import LinkWrapper from 'helpers/LinkWrapper/LinkWrapper';
import config from 'temp/config';

const Breadcrumb = (staticProps: BreadcrumbDataType): JSX.Element => {
  const { ancestors, Title } = staticProps?.staticProps?.currentPage || {};

  const { componentName, dataSource } = staticProps?.rendering || {};

  return (
    <div>
      <div data-component="authorable/landmarks/breadcrumbs" data-testid="breadcrumbs">
        <div>
          <nav aria-label="Breadcrumb">
            <ol className="flex">
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
                      <li key={index}>
                        <LinkWrapper
                          field={{
                            value: {
                              href: itm?.pageUrl?.link,
                              text: itm?.Title?.jsonValue?.value,
                              title: itm?.Title?.jsonValue?.value,
                            },
                          }}
                          gtmEvent={{
                            event: 'link',
                            type: 'breadcrumb',
                            'gtm.element.dataset.gtmDatasourceId': dataSource,
                            'gtm.element.dataset.gtmComponentName': componentName,
                          }}
                        />
                      </li>
                    )
                  );
                })}
              <li>
                <Text
                  encode={false}
                  field={{
                    value: Title?.jsonValue?.value,
                  }}
                  tag="span"
                />
              </li>
            </ol>
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
