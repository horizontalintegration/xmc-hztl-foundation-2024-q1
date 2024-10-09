// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';

type ColCount = '1' | '2' | '3' | '4' | '5' | '6' | undefined;

export type CardListProps = ComponentProps;

const TAILWIND_VARIANTS = tv({
  defaultVariants: {
    colCount: '3',
  },
  slots: {
    base: ['component', 'gap-6', 'grid', 'grid-cols-none'],
  },
  variants: {
    colCount: {
      '1': { base: ['lg:grid-cols-1'] },
      '2': { base: ['lg:grid-cols-2'] },
      '3': { base: ['lg:grid-cols-3'] },
      '4': { base: ['lg:grid-cols-4'] },
      '5': { base: ['lg:grid-cols-5'] },
      '6': { base: ['lg:grid-cols-6'] },
    },
  },
});

const CardList = (props: CardListProps): JSX.Element => {
  const { DynamicPlaceholderId, RenderingIdentifier, cardsPerRow } = props?.params || {};

  const { base } = TAILWIND_VARIANTS({ colCount: cardsPerRow as ColCount });

  const phKey = `cardlist-${DynamicPlaceholderId}`;

  /*
   * Rendering
   */

  return (
    <>
      {props?.rendering?.placeholders?.[phKey] &&
        props?.rendering?.placeholders?.[phKey]?.length > 0 && (
          <section
            className={base()}
            data-component="authorable/shared/hztl-page-content/cardlist"
            id={RenderingIdentifier}
          >
            <Placeholder name={phKey} rendering={props.rendering} />
          </section>
        )}
    </>
  );
};

export const Default = withStandardComponentWrapper(CardList, false);
