import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/LinkWrapper/LinkWrapper';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';

export type CardProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: HztlPageContent.Card['fields'];
};

const CardDefaultComponent = (props: CardProps): JSX.Element => (
  <div className={`component card ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Card</span>
    </div>
  </div>
);

export const Default = (props: CardProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component card ${props?.params?.styles}`} id={id ? id : undefined}>
        <div data-component="authorable/general/card" className="flex justify-center items-center">
          <div className="mx-auto my-[0px]">
            <div className="border-[1px] border-[#2F2D2E]">
              <div className="border-b-[1px] border-[#A7A7A7] flex justify-center items-center">
                <ImageWrapper field={props.fields.CardImage} />
              </div>
              <div className="flex justify-center items-center text-center md:text-left w-[300px] md:w-[450px] p-[40px] m-auto">
                <div>
                  <div>
                    <Text
                      className="font-modern text-[#2F2D2E] text-[12px] font-[400] not-italic leading-normal mb-[8px] opacity-[0.8]"
                      field={props.fields.Eyebrow}
                      tag="h6"
                      editable
                    />
                  </div>
                  <div>
                    <RichTextWrapper
                      className="font-modern text-[#2F2D2E] text-[36px] font-[700] not-italic leading-normal mb-[8px]"
                      field={props.fields.Heading}
                      tag="h1"
                    />
                  </div>
                  <div>
                    <RichTextWrapper
                      className="font-modern text-[#2F2D2E] text-[20px] font-[700] not-italic leading-normal mb-[8px] opacity-[0.8]"
                      field={props.fields.Subheading}
                      tag="h3"
                    />
                  </div>
                  <div>
                    <RichTextWrapper
                      className="font-modern text-[#2F2D2E] text-[16px] font-[400] not-italic leading-[24px] mb-[8px] opacity-[0.9]"
                      field={props.fields.Description}
                      tag="p"
                    />
                  </div>
                  <div className="flex gap-[8px] flex-wrap justify-center md:justify-normal">
                    <LinkWrapper
                      className="w-[140px] h-[48px] px-[16px] py-[12px] rounded-[4px] bg-[#2F2D2E] text-center text-[#FFF] font-mordern text-[14px] font-[700] not-italic leading-normal"
                      field={props.fields.CardLink1}
                    />
                    <LinkWrapper
                      className="w-[150px] h-[48px] p-[12px] rounded-[4px] border-[1px] border-[#2F2D2E] text-center text-[#2F2D2E] font-mordern text-[16px] font-[700] not-italic leading-normal"
                      field={props.fields.CardLink2}
                    />
                  </div>
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
