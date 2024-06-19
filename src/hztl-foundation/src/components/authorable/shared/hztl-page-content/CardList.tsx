import React from 'react';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';
import { ItemEx } from 'src/.generated/_.Sitecore.Override';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

export type CardListProps = ComponentProps & HztlPageContent.CardList;
export type CardListItem = ItemEx & HztlPageContent.CardListItem;

export const Default = (props: CardListProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  const phKey = `cardlist`;
  return (
    <div className={`row component column-splitter`} id={id ? id : undefined}>
      <div>
        <div className="row">
          <Placeholder name={phKey} rendering={props.rendering} />
        </div>
      </div>
    </div>
  );
};
