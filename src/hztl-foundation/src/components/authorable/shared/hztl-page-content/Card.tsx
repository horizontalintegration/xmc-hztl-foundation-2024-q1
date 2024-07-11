import React from 'react';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import { ComponentProps } from 'lib/component-props';

export type CardProps = ComponentProps & HztlPageContent.Card & { cardsPerRow?: number };

const CardDefaultComponent = (props: CardProps): JSX.Element => (
  <div className={`component card ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Card</span>
    </div>
  </div>
);

export const Default = (props: CardProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;

  if (props?.fields) {
    return (
      <div
        className={`component w-full mb-4 flex mml:w-1/${props?.cardsPerRow}`}
        id={id ? id : undefined}
        data-component="authorable/general/card"
      >
        <div className="border border-gray flex flex-col">
          <div className="border-b border-dark-gray flex justify-center items-center">
            <ImageWrapper field={props?.fields?.CardImage} />
          </div>
          <div className="text-left p-l flex flex-col h-full">
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
            <div className="flex gap-xxs flex-wrap justify-normal mt-auto">
              <LinkWrapper
                className="flex items-center justify-center px-s py-xs rounded bg-gray text-center text-white font-modern text-button font-bold"
                field={props?.fields?.CardLink1}
                suppressNewTabIcon={true}
              />
              <LinkWrapper
                className="flex items-center justify-center p-xs rounded border-[1px] border-gray text-center text-gray font-modern text-xs font-bold"
                field={props?.fields?.CardLink2}
                suppressNewTabIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <CardDefaultComponent {...props} />;
};
