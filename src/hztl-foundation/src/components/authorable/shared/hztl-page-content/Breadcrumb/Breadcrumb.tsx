import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { BreadcrumbDataType } from './Breadcrumb.types';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
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
                    itm?.Title?.jsonValue?.value &&
                    itm?.pageUrl?.link && (
                      <li key={index} className={`py-[10px] px-[12px]`}>
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
                          className="flex items-center underline"
                        >
                          <div className="ml-[12px]">
                            <SvgIcon icon={'arrow-right'} className="w-auto h-auto" />
                          </div>
                        </LinkWrapper>
                      </li>
                    )
                  );
                })}
              {Title?.jsonValue?.value && (
                <li className={`py-[10px] flex items-center `} aria-current="true">
                  <Text
                    encode={false}
                    field={{
                      value: Title?.jsonValue?.value,
                    }}
                    tag="span"
                  />
                  <SvgIcon icon={'arrow-right'} className="w-auto h-auto pl-[12px]" />
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
      </div>
    </div>
  );
};

export default Breadcrumb;
