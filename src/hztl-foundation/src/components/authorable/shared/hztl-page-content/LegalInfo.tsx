import React from 'react';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  CopyrightInfo: Field<string>;
  NavigationMenu: {
    name: string;
    displayName: Field<string>;
    fields: {
      Link: LinkField;
    };
  }[];
}

export type LegalInfoProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const LegalInfoDefaultComponent = (props: LegalInfoProps): JSX.Element => (
  <div className={`component legal info ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Legal Info</span>
    </div>
  </div>
);

export const Default = (props: LegalInfoProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  if (props?.fields) {
    return (
      <div className={`component legal info ${props?.params?.styles}`} id={id ? id : undefined}>
        <div
          data-component="authorable/general/legal-info"
          className="flex flex-col gap-[8px] justify-center items-center"
        >
          <RichTextWrapper
            className="font-modern text-[#000] text-[16px] not-italic font-[400] leading-[24px]"
            field={props.fields.CopyrightInfo}
            tag="div"
          />
          <div className="flex">
            {props.fields.NavigationMenu.map((navLink, index) => (
              <div key={index} className="flex items-center">
                <LinkWrapper
                  className="p-[8px] font-modern text-center text-[#2F2D2E] text-[14px] not-italic font-[700] leading-normal"
                  field={navLink.fields.Link}
                  suppressNewTabIcon={true}
                />
                <div className="h-[30px] w-[1px] bg-[#000]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <LegalInfoDefaultComponent {...props} />;
};

