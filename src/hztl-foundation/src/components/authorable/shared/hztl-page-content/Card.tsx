import React from 'react';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/LinkWrapper/LinkWrapper';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import { ComponentProps } from 'lib/component-props';

export type CardProps = ComponentProps & HztlPageContent.Card;

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
      <div className={`component card ${props?.params?.styles}`} id={id ? id : undefined}>
        <div data-component="authorable/general/card" className="flex justify-center items-center">
          <div className="mx-auto my-0">
            <div className="border border-[#2F2D2E]">
              <div className="border-b border-[#A7A7A7] flex justify-center items-center">
                <ImageWrapper field={props?.fields?.CardImage} />
              </div>
              <div className="text-left p-10 m-auto">
                <PlainTextWrapper
                  className="font-modern text-[#2F2D2E] text-xs font-normal not-italic leading-normal mb-2 opacity-80"
                  field={props?.fields?.Eyebrow}
                  tag="h6"
                  editable
                />
                <RichTextWrapper
                  className="font-modern text-[#2F2D2E] text-4xl font-bold not-italic leading-normal mb-2"
                  field={props?.fields?.Heading}
                  tag="h2"
                />
                <RichTextWrapper
                  className="font-modern text-[#2F2D2E] text-xl font-bold not-italic leading-normal mb-2 opacity-80"
                  field={props?.fields?.Subheading}
                  tag="div"
                />
                <RichTextWrapper
                  className="font-modern text-[#2F2D2E] text-base font-normal not-italic leading-[24px] mb-2 opacity-90"
                  field={props?.fields?.Description}
                  tag="div"
                />
                <div className="flex gap-2 flex-wrap justify-normal">
                  <LinkWrapper
                    className="flex items-center justify-center px-4 py-3 rounded bg-[#2F2D2E] text-center text-[#FFF] font-modern text-sm font-bold not-italic leading-normal"
                    field={props?.fields?.CardLink1}
                    suppressNewTabIcon={true}
                  />
                  <LinkWrapper
                    className="flex items-center justify-center p-3 rounded border border-[#2F2D2E] text-center text-[#2F2D2E] font-modern text-base font-bold not-italic leading-normal"
                    field={props?.fields?.CardLink2}
                    suppressNewTabIcon={true}
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
