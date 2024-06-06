import React from 'react';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';

interface Fields {
  Logo: ImageField;
  NavigationMenu: {
    name: string;
    displayName: Field<string>;
    children: {
      name: string;
      displayName: Field<string>;
      fields: {
        Link: LinkField;
      };
    }[];
  }[];
}

export type FooterTopProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const FooterTopDefaultComponent = (props: FooterTopProps): JSX.Element => (
  <div className={`component footer top ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">FooterTop</span>
    </div>
  </div>
);

export const Default = (props: FooterTopProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  if (props?.fields) {
    return (
      <div className={`component footer top ${props?.params?.styles}`} id={id ? id : undefined}>
        <div data-component="authorable/general/footer-top" className="flex flex-col">
          <div className="p-[40px] pb-[16px] flex justify-center flex-wrap gap-[80px]">
            <div>
              <ImageWrapper field={props?.fields?.Logo} />
            </div>
            <div className="flex justify-center gap-[80px] flex-wrap">
              {props?.fields?.NavigationMenu.map((groupLabel, index) => (
                <React.Fragment key={index}>
                  <div className="text-center md:text-left">
                    <RichTextWrapper
                      className="font-modern text-[#2F2D2E] text-[16px] font-[700] not-italic leading-normal capitalize"
                      tag="h3"
                      field={groupLabel.displayName}
                    />
                    <ul className="flex flex-col">
                      {groupLabel.children.map((link, index) => (
                        <li className="p-[8px]" key={index}>
                          <LinkWrapper
                            className="font-modern text-[#2F2D2E] text-[16px] font-[700] not-italic leading-normal capitalize"
                            suppressNewTabIcon={true}
                            field={link.fields.Link}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <hr className="w-full border-[1px] border-[#2F2D2e]" />
        </div>
      </div>
    );
  }

  return <FooterTopDefaultComponent {...props} />;
};
