import React from 'react';
import { ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { SiteStructure } from '../../../../.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';

export type SocialMediaProps = ComponentProps & SiteStructure.Footer.SocialMedia;

const SocialMediaDefaultComponent = (props: SocialMediaProps): JSX.Element => (
  <div className={`component social media ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Social Media</span>
    </div>
  </div>
);

export const Default = (props: SocialMediaProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;

  if (props?.fields) {
    return (
      <div
        className={`component social media sm:order-last mmd:order-none px-0 2xl:m-auto 2xl:w-1/4 ${
          props?.params?.styles !== undefined ? props?.params?.styles : ''
        }`}
        id={id ? id : ''}
      >
        <div data-component="authorable/general/social-media" className="flex py-xxs gap-s px-ml">
          {props?.fields?.socialMediaLinks?.map((icon, index) => {
            const { socialMediaLink, socialMediaLogo } = icon?.fields;
            return (
              <LinkWrapper
                key={index}
                suppressNewTabIcon={true}
                field={socialMediaLink as LinkField}
              >
                <ImageWrapper field={socialMediaLogo as ImageField} />
              </LinkWrapper>
            );
          })}
        </div>
      </div>
    );
  }
  return <SocialMediaDefaultComponent {...props} />;
};
