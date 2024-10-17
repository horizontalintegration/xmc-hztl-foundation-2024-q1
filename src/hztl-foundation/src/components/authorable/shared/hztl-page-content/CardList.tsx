// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';
import { parseStyleParams } from 'lib/utils/style-param-utils';

type ColCount = '1' | '2' | '3' | '4' | undefined;

export type CardListProps = ComponentProps;

const TAILWIND_VARIANTS = tv({
  defaultVariants: {
    colCount: '3',
  },
  slots: {
    base: ['component', 'gap-6', 'grid', 'grid-cols-none', 'px-4', 'mdlg:px-0'],
  },
  variants: {
    colCount: {
      '1': { base: ['lg:grid-cols-1'] },
      '2': { base: ['lg:grid-cols-2'] },
      '3': { base: ['lg:grid-cols-3'] },
      '4': { base: ['lg:grid-cols-4'] },
    },
  },
});

const CardList = (props: CardListProps): JSX.Element => {
  const { DynamicPlaceholderId, RenderingIdentifier } = props?.params || {};
  const styles = parseStyleParams(props.params, ['cards']);

  const { base } = TAILWIND_VARIANTS({ colCount: styles?.cards?.cardsPerRow as ColCount });

  const phKey = `cardlist-${DynamicPlaceholderId}`;

  /*
   * Rendering
   */

  return (
    <>
      <section
        className={base()}
        data-component="authorable/shared/hztl-page-content/cardlist"
        id={RenderingIdentifier}
      >
        <Placeholder name={phKey} rendering={props.rendering} />
      </section>
    </>
  );
};

export const Default = withStandardComponentWrapper(CardList, false);
