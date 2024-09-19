// Global
import { GetStaticComponentProps, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import graphqlClientFactory from 'lib/graphql-client-factory';

// Local
import { BreadcrumbDataType } from './Breadcrumb.types';
import BreadcrumbQuery from './Breadcrumb.graphql';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { SvgIcon } from 'helpers/SvgIcon';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component'],
    currentPage: [
      'flex',
      'items-center',
      'list-none',
      'my-6',
      'text-theme-darkgrey',
      'md:my-0',
      'md:p-0',
      'md:py-3',
    ],
    icon: ['h-auto', 'w-auto'],
    iconContainer: ['ml-3'],
    linkWrapper: ['flex', 'font-bold', 'items-center', 'text-theme-black', 'underline'],
    list: ['flex', 'gap-2', 'items-center', 'list', 'm-3', 'md:m-0'],
    listItem: ['list-none'],
  },
});

export const Default = (staticProps: BreadcrumbDataType): JSX.Element => {
  const { ancestors, Title } = staticProps?.staticProps?.currentPage || {};
  const { componentName, dataSource } = staticProps?.rendering || {};

  const { base, currentPage, icon, iconContainer, list, linkWrapper, listItem } =
    TAILWIND_VARIANTS();

  /*
   * Rendering
   */

  return (
    <div
      className={base()}
      data-component="authorable/shared/hztml-page-content/breadcrumb"
      data-testid="breadcrumbs"
    >
      <nav aria-label="Breadcrumb">
        <ul className={list()}>
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
                  <li className={listItem()} key={index}>
                    <LinkWrapper
                      className={linkWrapper()}
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
                      <div className={iconContainer()}>
                        <SvgIcon
                          className={icon()}
                          fill="none"
                          icon="arrow-right"
                          size="xxs"
                          viewBox="0 0 24 24"
                        />
                      </div>
                    </LinkWrapper>
                  </li>
                )
              );
            })}
          <li aria-current="true" className={currentPage()}>
            <Text
              encode={false}
              field={{
                value: Title?.jsonValue?.value,
              }}
              tag="span"
            />
          </li>
        </ul>
      </nav>
      <div
        style={{
          // TODO: Extract this to the Tailwind config.
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) -4.17%, #FFF 104.17%)',
        }}
      />
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const graphQLClient = graphqlClientFactory({});

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
