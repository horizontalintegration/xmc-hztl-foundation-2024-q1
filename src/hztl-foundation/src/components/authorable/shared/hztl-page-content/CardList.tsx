import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

export type CardListProps = ComponentProps;

export const Default = (props: CardListProps): JSX.Element => {
  const { cardsPerRow } = props?.params || {};
  console.log('cardsPerRow :', cardsPerRow);
  const id = props?.params?.RenderingIdentifier;
  const phKey = `cardlist`;
  return (
    <div className={`row component column-splitter`} id={id ? id : undefined}>
      <div>
        <div className="row">
          <Placeholder name={phKey} rendering={props.rendering} cardsPerRow={cardsPerRow} />
        </div>
      </div>
    </div>
  );
};
