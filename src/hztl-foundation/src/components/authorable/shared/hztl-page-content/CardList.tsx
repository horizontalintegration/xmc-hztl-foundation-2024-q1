import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { withStandardComponentWrapper } from 'helpers/HOC';
import { tv } from 'tailwind-variants';

export type CardListProps = ComponentProps;

const tailwindVariants = tv({
  slots: {
    base: ['component', 'row', 'column-splitter'],
    wrapper: ['row'],
  },
});

const CardList = (props: CardListProps): JSX.Element => {
  const styles = parseStyleParams(props.params, ['cards']);

  const { base, wrapper } = tailwindVariants();

  const id = props?.params?.RenderingIdentifier;
  const phKey = `cardlist`;
  return (
    <div className={base()} id={id ? id : undefined}>
      <div>
        <div className={wrapper()}>
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
