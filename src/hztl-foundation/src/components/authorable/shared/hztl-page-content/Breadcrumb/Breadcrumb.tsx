import React from 'react';
import { GetStaticComponentProps, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { BreadcrumbDataType } from './Breadcrumb.types';
import BreadcrumbQuery from './Breadcrumb.graphql';

// Helper
import { SvgIcon } from 'helpers/SvgIconWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import graphqlClientFactory from 'lib/graphql-client-factory';
import { tv } from 'tailwind-variants';
import MissingDataSource from 'helpers/EditingHelpText/MissingDataSource';

const tailwindVariants = tv({
  slots: {
    base: ['component'],
    listWrapper: ['md:flex', 'items-center', 'list'],
    listItemLinkWrapper: ['py-xs', 'px-xs', 'list-none'],
    linkWrapperStyles: ['flex', 'text-black', 'items-center', 'underline', 'text-xs', 'font-bold'],
    iconWrapper: ['ml-xs'],
    iconStyles: ['w-auto', 'h-auto', 'stroke-gray'],
    listItemTextWrapper: ['py-xs flex items-center list-none -ml-xxxs'],
  },
});

export const Default = (staticProps: BreadcrumbDataType): JSX.Element => {
  if (!staticProps?.staticProps) {
    return <MissingDataSource {...staticProps} usesGraphQL={true} />;
  }

  const { ancestors, Title } = staticProps?.staticProps?.currentPage || {};
  const { componentName, dataSource } = staticProps?.rendering || {};

  const {
    base,
    listWrapper,
    listItemLinkWrapper,
    linkWrapperStyles,
    iconWrapper,
    iconStyles,
    listItemTextWrapper,
  } = tailwindVariants();

  return (
    <>
      {Title?.jsonValue?.value && ancestors.length > 0 && (
        <div
          data-component="authorable/General/breadcrumbs"
          data-testid="breadcrumbs"
          className={base()}
        >
          <nav aria-label="Breadcrumb">
            <ul className={listWrapper()}>
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
                      <li key={index} className={listItemLinkWrapper()}>
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
                          className={linkWrapperStyles()}
                        >
                          <div className={iconWrapper()}>
                            <SvgIcon icon={'arrow-right'} className={iconStyles()} />
                          </div>
                        </LinkWrapper>
                      </li>
                    )
                  );
                })}
              {Title?.jsonValue?.value && ancestors.length > 0 && (
                <li className={listItemTextWrapper()} aria-current="true">
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
