import React from 'react';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/LinkWrapper/LinkWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';
export type CardProps = ComponentProps & HztlPageContent.Card;

export const Default = (props: CardProps): JSX.Element => {
  return (
    <div className="component card flex border-2">
      <div className="component-content">
        <div className="field-cardimage pb-6">
          <ImageWrapper field={props.fields?.CardImage} className="border-b-2" />
        </div>
        <div className="card-text p-10 flex flex-wrap">
          <div className="text-2xl pb-6 w-full flex-none">
            <RichTextWrapper field={props.fields?.CardTitle} className="text-4xl font-semibold" />
          </div>
          <div className="pb-6 w-full flex-none">
            <RichTextWrapper field={props.fields?.CartText} className="text-normal" />
          </div>
          <div className="pb-6 w-full flex-none">
            <RichTextWrapper field={props.fields?.CardText2} className="text-normal" />
          </div>
          <div className="pb-6 mr-2">
            <LinkWrapper
              field={props.fields?.CardLink}
              className="inline-block bg-black text-white p-4 text-sm rounded-md"
            />
          </div>
          <div className="pb-6">
            <LinkWrapper
              field={props.fields?.CardLink2}
              className="inline-block bg-black text-white p-4 text-sm rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
