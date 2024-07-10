import React from 'react';
import { ImageFieldValue, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';

interface LinkItem {
  id: string;
  name: string;
  link: {
    jsonValue: {
      value: LinkField;
    };
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
  SiteStructure.Footer.Footer & {
    fields: {
      data: { item: Item };
    };
  };

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component footer ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  const footerColumns = props?.fields?.data?.item?.footerColumns.items;
  const footerLogo = props?.fields?.data?.item.footerLogo;
  if (props?.fields) {
    return (
      <div
        className={`component footer w-full px-0 ${
          props?.params?.styles !== undefined ? props?.params?.styles : ''
        }`}
        id={id ? id : ''}
      >
        <div data-component="authorable/general/footer" className="flex flex-col">
          <div className="p-ml pb-s m-auto w-full max-w-screen-xl">
            <div className="flex flex-wrap justify-start md:justify-between gap-xl sm:gap-l md:gap-[50px] lg:gap-[62px] xl:gap-[162px] sm:w-[344px] md:w-auto">
              <div>
                <ImageWrapper field={{ value: footerLogo?.jsonValue.value }} />
              </div>
              <div className="flex justify-between flex-wrap gap-m sm:gap-ml mmd:gap-xl mml:gap-[140px] lg:gap-[204px] xl:gap-[216px] sm:w-[312px] md:w-auto">
                {footerColumns?.map((groupLabel, index) => {
                  const links = groupLabel?.columnLinks?.items;
                  return (
                    <React.Fragment key={index}>
                      <div className="text-left">
                        <RichTextWrapper
                          className="font-modern text-gray text-xs font-bold capitalize"
                          tag="h3"
                          field={{ value: groupLabel?.name }}
                        />
                        <ul className="flex flex-col">
                          {links?.map((link, index) => (
                            <li className="p-xxs list-none -ml-m" key={index}>
                              <LinkWrapper
                                className="font-modern text-gray text-xs font-bold capitalize"
                                suppressNewTabIcon={true}
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
