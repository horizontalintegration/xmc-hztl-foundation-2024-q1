import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Helpers
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

export type HeroProps = ComponentProps & HztlPageContent.Hero;

const HeroDefaultComponent = (props: HeroProps): JSX.Element => (
  <div className={`component hero ${props.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Hero</span>
    </div>
  </div>
);

export const Default = (props: HeroProps): JSX.Element => {
  if (props.fields) {
    return (
      <section className="hero my-ml min-h-[50vh] flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="max-w-[472px] w-fit px-s py-ml">
            <PlainTextWrapper
              tag="h2"
              className="font-modern text-l font-bold mb-6"
              field={props.fields?.Heading}
            />
            <RichTextWrapper
              tag="div"
              className="text-gray text-base mb-m"
              field={props.fields?.Description}
            />

            <div className="flex gap-xxs flex-wrap md:justify-normal">
              <LinkWrapper
                className="flex items-center justify-center px-16 py-xs rounded-2 bg-gray text-center text-white font-modern text-base font-bold"
                field={props.fields?.cta1Link}
                suppressNewTabIcon={true}
              />
              <LinkWrapper
                className="flex items-center justify-center px-16 py-xs rounded-2 border-[1px] border-gray text-center text-gray font-modern text-base font-bold"
                field={props.fields?.cta2Link}
                suppressNewTabIcon={true}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <ImageWrapper field={props.fields?.Image} />
        </div>
      </section>
    );
  }

  return <HeroDefaultComponent {...props} />;
};
