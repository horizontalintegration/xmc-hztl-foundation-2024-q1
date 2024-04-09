import React from 'react';
import {
  Field,
  LinkField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  CardListTitle: Field<string>;
  CardListText: Field<string>;
  CardListLink: LinkField;
  CardListLink2: LinkField;
}

interface CardListProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
}

const CardListDefaultComponent = (props: CardListProps): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <p>CardList Component</p>
    </div>
  </div>
);

export const Default = (props: CardListProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  // const phKey = `cardlist-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <p>CardList Component</p>
        </div>
      </div>
    );
  }

  return <CardListDefaultComponent {...props} />;
};
