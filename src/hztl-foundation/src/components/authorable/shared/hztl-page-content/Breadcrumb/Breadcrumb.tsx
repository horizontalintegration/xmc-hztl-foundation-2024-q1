import React from 'react';
import { GetStaticComponentProps, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import { BreadcrumbDataType } from './Breadcrumb.types';
import config from 'temp/config';
import BreadcrumbQuery from './Breadcrumb.graphql';

// Helper
import { SvgIcon } from 'helpers/SvgIconWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';

const Breadcrumb = (staticProps: BreadcrumbDataType): JSX.Element => {
  const { ancestors, Title } = staticProps?.staticProps?.currentPage || {};
  const { componentName, dataSource } = staticProps?.rendering || {};

  return (
    <>
      {Title?.jsonValue?.value && ancestors.length > 0 && (
        <div data-component="authorable/General/breadcrumbs" data-testid="breadcrumbs">
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
                    itm?.Title?.jsonValue?.value &&
                    itm?.pageUrl?.link && (
                      <li key={index} className={`py-xs px-xs list-none`}>
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
                          className="flex items-center underline text-xs font-bold"
                        >
                          <div className="ml-xs">
                            <SvgIcon icon={'arrow-right'} className="w-auto h-auto stroke-gray" />
                          </div>
                        </LinkWrapper>
                      </li>
                    )
                  );
                })}
              {Title?.jsonValue?.value && ancestors.length > 0 && (
                <li className={`py-xs flex items-center list-none -ml-xxxs`} aria-current="true">
                  <Text
                    encode={false}
                    field={{
                      value: Title?.jsonValue?.value,
                    }}
                    tag="span"
                  />
                </li>
              )}
            </ul>
          </nav>
          <div
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) -4.17%, #FFF 104.17%)',
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Breadcrumb;

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  if (
    layoutData?.sitecore?.context?.pageState == 'normal' ||
    layoutData?.sitecore?.context?.pageState == 'preview'
  ) {
    const result = await graphQLClient.request<unknown>(BreadcrumbQuery, {
      datasource: rendering.dataSource,
      params: rendering.params,
      language: layoutData?.sitecore?.context?.language,
      itemID: layoutData?.sitecore?.route?.itemId,
    });
    return {
      staticProps: result,
    };
  }
  return 'Component is not available in Experience Editor';
};
