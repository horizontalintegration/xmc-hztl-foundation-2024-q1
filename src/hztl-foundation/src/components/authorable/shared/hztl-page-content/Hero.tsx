import React from 'react';
// Helpers
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { CTAWrapperInterface } from 'src/interfaces/CTAInterface';

// import ButtonWrapper from 'helpers/SitecoreWrappers/ButtonWrapper/ButtonWrapper';

export type HeroProps = ComponentProps & HztlPageContent.Hero & CTAWrapperInterface;

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

            <div className="flex gap-xxs flex-wrap justify-center md:justify-normal">
              <LinkWrapper ctaType="cta1Link" fields={props.fields} suppressNewTabIcon={true} />
              <LinkWrapper ctaType="cta2Link" fields={props.fields} suppressNewTabIcon={true} />
              {/* <ButtonWrapper
                ctaType="cta1Text"
                fields={props.fields}
                onClick={() => console.log('')}
              />
              <ButtonWrapper
                ctaType="cta2Text"
                fields={props.fields}
                onClick={() => console.log('')}
              /> */}
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
