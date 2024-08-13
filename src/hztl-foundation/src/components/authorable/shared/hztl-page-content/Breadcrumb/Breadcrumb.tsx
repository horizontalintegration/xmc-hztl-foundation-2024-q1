import React from 'react';
import { GetStaticComponentProps, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { BreadcrumbDataType } from './Breadcrumb.types';
import BreadcrumbQuery from './Breadcrumb.graphql';

// Helper
import { SvgIcon } from 'helpers/SvgIconWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import graphqlClientFactory from 'lib/graphql-client-factory';

export const Default = (staticProps: BreadcrumbDataType): JSX.Element => {
  const { ancestors, Title } = staticProps?.staticProps?.currentPage || {};
  const { componentName, dataSource } = staticProps?.rendering || {};

  return (
    <>
      {Title?.jsonValue?.value && ancestors.length > 0 && (
        <div
          data-component="authorable/General/breadcrumbs"
          data-testid="breadcrumbs"
          className="component px-0 pb-l"
        >
          <nav aria-label="Breadcrumb">
            <ul className="flex flex-wrap md:items-center list !m-0 gap-xs">
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
                      <li key={index} className={`list-none !ml-0`}>
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
                          className="flex text-black items-center underline text-xs font-bold"
                        >
                          <div className="ml-xs">
                            <SvgIcon className="stroke-black" icon="arrow-right" size="xs" />
                          </div>
                        </LinkWrapper>
                      </li>
                    )
                  );
                })}
              {Title?.jsonValue?.value && ancestors.length > 0 && (
                <li
                  className={`flex items-center list-none !ml-0 text-xs text-dark-gray`}
                  aria-current="true"
                >
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
              // TODO: Extract this to the Tailwind config.
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) -4.17%, #FFF 104.17%)',
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const graphQLClient = graphqlClientFactory({});
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
