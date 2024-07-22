import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { withStandardComponentWrapper } from 'helpers/HOC';

export type CardListProps = ComponentProps;

const CardList = (props: CardListProps): JSX.Element => {
  const styles = parseStyleParams(props.params, ['cards']);

  const id = props?.params?.RenderingIdentifier;
  const phKey = `cardlist`;
  return (
    <div className={`row column-splitter`} id={id ? id : undefined}>
      <div>
        <div className="row">
          <Placeholder
            name={phKey}
            rendering={props.rendering}
            cardsPerRow={styles.cards?.cardsPerRow}
          />
        </div>
      </div>
    </div>
  );
};

export const Default = withStandardComponentWrapper(CardList, false);
