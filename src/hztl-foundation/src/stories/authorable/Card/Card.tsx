import { Field, Text, LinkField, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/LinkWrapper/LinkWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  heading: Field<string>;
  eyebrow: Field<string>;
  subHeading: Field<string>;
  description: Field<string>;
  learnMoreBtn: LinkField | LinkFieldValue;
  downloadBtn: LinkField | LinkFieldValue;
  cardImage: Field<string>;
}

export type CardProps = ComponentProps & {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const Card = (props: CardProps): JSX.Element => (
  <div data-component="authorable/general/card" className="flex justify-center items-center">
    <div className="h-[614px] w-[450px] border-[1px] border-black">
      <div className="h-[299px] w-[450px] border-b-[1px] border-black flex justify-center items-center">
        <RichTextWrapper field={props.fields.cardImage} editable />
      </div>
      <div className="flex justify-center items-center w-[450px] h-[315px] p-[40px]">
        <div>
          <div>
            <Text
              className="font-mordern text-[12px] font-[400] not-italic leading-normal mb-[8px]"
              field={props.fields.eyebrow}
              tag="h6"
              editable
            />
          </div>
          <div>
            <Text
              className="font-mordern text-[36px] font-[700] not-italic leading-normal mb-[8px]"
              field={props.fields.heading}
              tag="h1"
              editable
            />
          </div>
          <div>
            <Text
              className="font-mordern text-[20px] font-[700] not-italic leading-normal mb-[8px]"
              field={props.fields.subHeading}
              tag="h3"
              editable
            />
          </div>
          <div>
            <Text
              className="font-mordern text-[16px] font-[400] not-italic leading-[24px] mb-[8px]"
              field={props.fields.description}
              tag="p"
              editable
            />
          </div>
          <div className="flex gap-[8px]">
            <LinkWrapper
              className="w-[140px] h-[48px] px-[16px] py-[12px] rounded-[4px] bg-[#2F2D2E] text-center text-[#FFF] font-mordern text-[14px] font-[700] not-italic leading-normal"
              field={props.fields.learnMoreBtn}
            />

            <LinkWrapper
              className="w-[150px] h-[48px] p-[12px] rounded-[4px] border-[1px] border-[#2F2D2E] text-center text-[#2F2D2E] font-mordern text-[16px] font-[700] not-italic leading-normal"
              field={props.fields.downloadBtn}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
