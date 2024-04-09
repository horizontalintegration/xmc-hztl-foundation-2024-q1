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

type CardProps = {
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
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component card ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
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
        </div>
      </div>
    );
  }

  return <CardDefaultComponent {...props} />;
};
