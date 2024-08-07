// Global
import { GetStaticComponentProps, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import graphqlClientFactory from 'lib/graphql-client-factory';

// Local
import { BreadcrumbDataType } from './Breadcrumb.types';
import BreadcrumbQuery from './Breadcrumb.graphql';
import MissingDataSource from 'helpers/EditingHelpText/MissingDataSource';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { SvgIcon } from 'helpers/SvgIconWrapper';

/*
 * Tailwind Variants
 */

const tailwindVariants = tv({
  slots: {
    base: ['component'],
    iconStyles: ['h-auto', 'stroke-gray', 'w-auto'],
    iconWrapper: ['ml-xs'],
    linkWrapperStyles: ['flex', 'font-bold', 'items-center', 'text-black', 'text-xs', 'underline'],
    listItemLinkWrapper: ['list-none', 'px-xs', 'py-xs'],
    listItemTextWrapper: ['flex', 'items-center', 'list-none', '-ml-xxxs', 'py-xs'],
    listWrapper: ['items-center', 'list', 'md:flex'],
  },
});

export const Default = (staticProps: BreadcrumbDataType): JSX.Element => {
  const { ancestors, Title } = staticProps?.staticProps?.currentPage || {};
  const { componentName, dataSource } = staticProps?.rendering || {};

  const {
    base,
    iconStyles,
    iconWrapper,
    linkWrapperStyles,
    listItemLinkWrapper,
    listItemTextWrapper,
    listWrapper,
  } = tailwindVariants();

  /*
   * Rendering
   */

  if (!staticProps?.staticProps) {
    return <MissingDataSource {...staticProps} usesGraphQL={true} />;
  }

  return (
    <>
      {Title?.jsonValue?.value && ancestors.length && (
        <div
          className={base()}
          data-component="authorable/shared/hztml-page-content/breadcrumb"
          data-testid="breadcrumbs"
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

                  const { pageUrl, Title } = itm || {};

                  return (
                    pageUrl?.link &&
                    Title?.jsonValue?.value && (
                      // TODO: Replace 'index' as they key with...something else. (At current, no guaranteed unique values are available as part of "itm".)
                      <li className={listItemLinkWrapper()} key={index}>
                        <LinkWrapper
                          className={linkWrapperStyles()}
                          field={{
                            value: {
                              href: pageUrl?.link,
                              text: Title?.jsonValue?.value,
                              title: Title?.jsonValue?.value,
                            },
                          }}
                          gtmEvent={{
                            event: 'link',
                            type: 'breadcrumb',
                            'gtm.element.dataset.gtmDatasourceId': dataSource,
                            'gtm.element.dataset.gtmComponentName': componentName,
                          }}
                        >
                          <div className={iconWrapper()}>
                            <SvgIcon className={iconStyles()} icon="arrow-right" />
                          </div>
                        </LinkWrapper>
                      </li>
                    )
                  );
                })}
              {Title?.jsonValue?.value && ancestors.length && (
                <li aria-current="true" className={listItemTextWrapper()}>
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
          />
        </div>
      )}
    </>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const { pageState } = layoutData?.sitecore?.context || {};

  const graphQLClient = graphqlClientFactory({});

  if (['normal', 'preview'].includes(pageState || ''))
    return 'Component is not available in Experience Editor';

  const result = await graphQLClient.request<unknown>(BreadcrumbQuery, {
    datasource: rendering.dataSource,
    itemID: layoutData?.sitecore?.route?.itemId,
    language: layoutData?.sitecore?.context?.language,
    params: rendering.params,
  });

  return {
    staticProps: result,
  };
};
