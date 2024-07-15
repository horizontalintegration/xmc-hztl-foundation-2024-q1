import React from 'react';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';

export type LegalInfoProps = ComponentProps & SiteStructure.Footer.LegalInfo;

const LegalInfoDefaultComponent = (props: LegalInfoProps): JSX.Element => (
  <div className={`component legal info ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Legal Info</span>
    </div>
  </div>
);

export const Default = (props: LegalInfoProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  const legalMenu = props?.fields?.legalMenu || [];
  if (props?.fields) {
    return (
      <div
        className={`py-m px-0 2xl:m-auto 2xl:w-1/3 ${
          props?.params?.styles !== undefined ? props?.params?.styles : ''
        }`}
        data-component="authorable/hztl-page-content/legal-info"
        id={id ? id : ''}
      >
        <div className="flex flex-col gap-xxs text-center lg:text-left items-center ml:items-end px-ml lg:px-ml">
          <RichTextWrapper
            className="font-modern text-black text-xs font-regular"
            field={props?.fields?.copyrightText}
            tag="div"
          />
          <div className="flex">
            {props?.fields?.legalMenu?.map((navLink, index) => (
              <div key={index} className="flex items-center">
                <LinkWrapper
                  className="p-xxs font-modern text-center text-gray text-text-link font-bold"
                  field={{
                    ...navLink?.fields?.legalLink,
                  }}
                  suppressNewTabIcon={true}
                />
                {legalMenu?.length > index + 1 && <div className="h-ml w-px bg-black"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <LegalInfoDefaultComponent {...props} />;
};
