import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  Field,
  LinkField,
  ImageField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  CardImage: ImageField;
  Eyebrow: Field<string>;
  Heading: Field<string>;
  SubHeading: Field<string>;
  Description: Field<string>;
  CardLink1: LinkField;
  CardLink2: LinkField;
}

export type CardProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
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
        {/* <div className="component-content">
          <div className="field-cardtitle">
            <JssRichText field={props.fields.CardTitle} />
          </div>
          <div className="field-cardimage">
            <JssImage field={props.fields.CardImage} />
          </div>
          <div className="card-text">
            <div className="field-cardtext">
              <JssRichText field={props.fields.CardText} />
            </div>
            <div className="field-cardlink">
              <JssLink field={props.fields.CardLink} />
            </div>
          </div>
        </div> */}
        <div data-component="authorable/general/card" className="flex justify-center items-center">
          <div className="w-max mx-auto my-[0px]">
            <div className="h-auto md:h-[614px] w-[300px] md:w-[450px] border-[1px] border-black">
              <div className="h-[299px] w-[300px] md:w-[450px] border-b-[1px] border-black flex justify-center items-center">
                <JssImage field={props.fields.CardImage} editable />
              </div>
              <div className="flex justify-center items-center text-center md:text-left w-[300px] md:w-[450px] h-auto md:h-[315px] p-[40px]">
                <div>
                  <div>
                    <Text
                      className="font-mordern text-[12px] font-[400] not-italic leading-normal mb-[8px]"
                      field={props.fields.Eyebrow}
                      tag="h6"
                      editable
                    />
                  </div>
                  <div>
                    <JssRichText
                      className="font-mordern text-[36px] font-[700] not-italic leading-normal mb-[8px]"
                      field={props.fields.Heading}
                      tag="h1"
                      editable
                    />
                  </div>
                  <div>
                    <JssRichText
                      className="font-mordern text-[20px] font-[700] not-italic leading-normal mb-[8px]"
                      field={props.fields.SubHeading}
                      tag="h3"
                      editable
                    />
                  </div>
                  <div>
                    <JssRichText
                      className="font-mordern text-[16px] font-[400] not-italic leading-[24px] mb-[8px]"
                      field={props.fields.Description}
                      tag="p"
                      editable
                    />
                  </div>
                  <div className="flex gap-[8px] flex-wrap justify-center md:justify-normal">
                    <JssLink
                      className="w-[140px] h-[48px] px-[16px] py-[12px] rounded-[4px] bg-[#2F2D2E] text-center text-[#FFF] font-mordern text-[14px] font-[700] not-italic leading-normal"
                      field={props.fields.CardLink1}
                    />
                    <JssLink
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
