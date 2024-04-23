import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  Field,
  LinkField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  CardImage: ImageField;
  CardTitle: Field<string>;
  CardText: Field<string>;
  CardText2: Field<string>;
  CardLink: LinkField;
  CardLink2: LinkField;
}

export type CardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CardProps): JSX.Element => {
  console.log('props:', props);
  return (
    <div className="component card flex max-w-xl">
      <div className="component-content p-6">
        <div className="field-cardtitle text-2xl pb-6">
          <JssRichText field={props.fields.CardTitle} />
        </div>
        <div className="field-cardimage pb-6">
          <JssImage field={props.fields.CardImage} className="border-2" />
        </div>
        <div className="card-text">
          <div className="field-cardtext pb-6">
            <JssRichText field={props.fields.CardText} />
          </div>
          <div className="field-cardtext2 pb-6">
            <JssRichText field={props.fields.CardText2} />
          </div>
          <div className="field-cardlink pb-6">
            <JssLink field={props.fields.CardLink} className="underline" />
          </div>
          <div className="field-cardlink2 pb-6">
            <JssLink field={props.fields.CardLink2} className="underline" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
