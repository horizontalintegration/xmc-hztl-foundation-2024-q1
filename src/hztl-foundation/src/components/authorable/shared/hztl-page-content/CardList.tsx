// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';

export type CardListProps = ComponentProps;

/*
 * Tailwind Variants
 */

const tailwindVariants = tv({
  slots: {
    base: ['column-splitter', 'component', 'row'],
    wrapper: ['row'],
  },
});

const CardList = (props: CardListProps): JSX.Element => {
  const phKey = `cardlist-{*}`;
  console.log(phKey);

  const { RenderingIdentifier } = props?.params || {};

  const styles = parseStyleParams(props.params, ['cards']);

  const { base, wrapper } = tailwindVariants();

  /*
   * Rendering
   */

  return (
    <div className={base()} id={RenderingIdentifier}>
      <div>
        <div className={wrapper()}>
          <Placeholder
            // key={phKey}
            cardsPerRow={styles.cards?.cardsPerRow}
            name={`cardlist-${props?.params?.DynamicPlaceholderId}`}
            rendering={props.rendering}
          />
        </div>
      </div>
    </div>
  );
};

export const Default = withStandardComponentWrapper(CardList, false);
