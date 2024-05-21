import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  Field,
  LinkField,
  ImageField,
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  Heading: TextField;
  Description: Field<string>;
  Link1: LinkField;
  Link2: LinkField;
}

type HeroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const HeroDefaultComponent = (props: HeroProps): JSX.Element => (
  <div className={`component hero ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Hero</span>
    </div>
  </div>
);

export const Default = (props: HeroProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className={`component hero ${props.params.styles}`}>
        <div className="component-content">
          <div className="hero-content">
            <div className="field-title">
              <Text field={props.fields.Heading}></Text>
            </div>
            <div className="field-subtitle">
              <JssRichText field={props.fields.Description}></JssRichText>
            </div>
            <div className="field-links">
              <JssLink field={props.fields.Link1}></JssLink>
              <JssLink field={props.fields.Link2}></JssLink>
            </div>
          </div>
          <div className="hero-image">
            <JssImage field={props.fields.Image}></JssImage>
          </div>
        </div>
      </div>
    );
  }

  return <HeroDefaultComponent {...props} />;
};
