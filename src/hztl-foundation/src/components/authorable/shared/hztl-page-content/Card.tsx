import React from 'react';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import { ComponentProps } from 'lib/component-props';
import { withStandardComponentWrapper } from 'helpers/HOC';
import { parseStyleParams } from 'lib/utils/style-param-utils';

export type CardProps = ComponentProps & HztlPageContent.Card & { cardsPerRow?: string };

const CardDefaultComponent = (props: CardProps): JSX.Element => (
  <div className={`component card ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Card</span>
    </div>
  </div>
);

const Card = (props: CardProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  if (props?.fields) {
    const parsedParams = parseStyleParams(props.params, ['cta1', 'cta2']);
    return (
      <div
        className={`component w-full mb-4 mml:w-1/${props?.cardsPerRow}`}
        id={id ? id : undefined}
      >
        <div data-component="authorable/general/card" className="flex justify-center items-center">
          <div className="mx-auto my-0">
            <div className="border border-gray">
              <div className="border-b border-dark-gray flex justify-center items-center">
                <ImageWrapper field={props?.fields?.CardImage} />
              </div>
              <div className="text-left p-l m-auto">
                <PlainTextWrapper
                  className="font-modern text-gray text-xxs font-regular mb-xxs opacity-80"
                  field={props?.fields?.Eyebrow}
                  tag="h6"
                  editable
                />
                <RichTextWrapper
                  className="font-modern text-gray text-4xl font-bold mb-xxs"
                  field={props?.fields?.Heading}
                  tag="h2"
                />
                <RichTextWrapper
                  className="font-modern text-gray text-m font-bold mb-xxs opacity-80"
                  field={props?.fields?.Subheading}
                  tag="div"
                />
                <RichTextWrapper
                  className="font-modern text-gray text-xs font-regular mb-xxs opacity-90"
                  field={props?.fields?.Description}
                  tag="div"
                />
                <div className="flex gap-xxs flex-wrap justify-normal">
                  <LinkWrapper
                    className="flex items-center justify-center px-s py-xs rounded bg-gray text-center text-white font-modern text-button font-bold"
                    field={props?.fields?.CardLink1}
                    ctaStyle={parsedParams.cta1}
                  />
                  <LinkWrapper
                    className="flex items-center justify-center p-xs rounded border border-gray text-center text-gray font-modern text-xs font-bold"
                    field={props?.fields?.CardLink2}
                    ctaStyle={parsedParams.cta2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <CardDefaultComponent {...props} />;
};

export const Default = withStandardComponentWrapper(Card);
