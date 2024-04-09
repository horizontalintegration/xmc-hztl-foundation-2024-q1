import React from 'react';
import { 
  Link as JssLink,
  RichText as JssRichText,
  Field,
  LinkField,
  ComponentParams,
  ComponentRendering,
  Placeholder, 
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
  const phKey = `cardlist-${props.params.DynamicPlaceholderId}`;

  if(props.fields){ 
    return (
      <div className={`component cardlist ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-cardlistheading">
            <JssRichText field={props.fields.CardListTitle} />
            <JssRichText field={props.fields.CardListText} />
          </div>
          <div className="cardlist-cards">
            <div>
                <Placeholder name={phKey} rendering={props.rendering} />
            </div>
            <div className="field-cardlistlink">
              <JssLink field={props.fields.CardListLink} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <CardListDefaultComponent {...props} />;  
};