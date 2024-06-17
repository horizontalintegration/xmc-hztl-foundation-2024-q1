import React from 'react';
import { ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { SiteStructure } from '../../../../.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';

export type SocialMediaProps = ComponentProps & SiteStructure.Footer.SocialMedia;
// interface Fields {
//   socialMediaLinks: {
//     displayName:string;
//     name: string;
//     fields: {
//       socialMediaLink: LinkField;
//       socialMediaLogo: ImageField;
//     };
//   }[];
// }

// export type SocialMediaProps = {
//   rendering: { componentName: string };
//   params: { [key: string]: string };
//   fields: Fields;
// };

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
      <div className={`component social media ${props?.params?.styles}`} id={id ? id : undefined}>
        <div
          data-component="authorable/general/social-media"
          className="flex justify-center py-[8px] gap-[16px]"
        >
          {props?.fields?.socialMediaLinks?.map((icon, index) => (
            <React.Fragment key={index}>
              <LinkWrapper suppressNewTabIcon={true} field={{...{...icon.fields}.socialMediaLink}}>
                <ImageWrapper field={{...{...icon.fields}.socialMediaLogo}} />
              </LinkWrapper>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  return <SocialMediaDefaultComponent {...props} />;
};
