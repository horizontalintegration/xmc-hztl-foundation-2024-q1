import React from 'react';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';
import { Data } from 'src/.generated/Foundation.HztlFoundation.model';

export type FooterProps = ComponentProps & SiteStructure.Footer.Footer;

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component footer ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  if (props?.fields) {
    return (
      <div className={`component footer ${props?.params?.styles}`} id={id ? id : undefined}>
        <div data-component="authorable/general/footer" className="flex flex-col">
          <div className="p-[40px] pb-[16px] flex justify-center flex-wrap gap-[80px]">
            <div>
              <ImageWrapper field={props?.fields?.footerLogo} />
            </div>
            <div className="flex justify-center gap-[80px] flex-wrap">
              {props?.fields?.footerColumns?.map((groupLabel, index) => {
                const links = groupLabel?.fields?.columnLinks as (Item & Data.Links.GenericLink)[];
                return (
                  <React.Fragment key={index}>
                    <div className="text-center md:text-left">
                      <RichTextWrapper
                        className="font-modern text-[#2F2D2E] text-[16px] font-[700] not-italic leading-normal capitalize"
                        tag="h3"
                        field={{ value: groupLabel?.displayName }}
                      />
                      <ul className="flex flex-col">
                        {links?.map((link, index) => (
                          <li className="p-[8px]" key={index}>
                            <LinkWrapper
                              className="font-modern text-[#2F2D2E] text-[16px] font-[700] not-italic leading-normal capitalize"
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
          <hr className="w-full border-[1px] border-[#2F2D2e]" />
        </div>
      </div>
    );
  }

  return <FooterDefaultComponent {...props} />;
};
