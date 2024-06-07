import React from 'react';
import { ImageFieldValue, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/LinkWrapper/LinkWrapper';

interface Fields {
  IconList: {
    Icon: {
      value: ImageFieldValue;
    };
    Link: {
      value: LinkFieldValue;
    };
  }[];
}

export type SocialMediaProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

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
          {props?.fields?.IconList.map((icon, index) => (
            <React.Fragment key={index}>
              <LinkWrapper suppressNewTabIcon={true} field={icon.Link}>
                <ImageWrapper field={icon.Icon} />
              </LinkWrapper>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  return <SocialMediaDefaultComponent {...props} />;
};

