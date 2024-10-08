// Global
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component'],
    placeholder: ['is-empty-hint'],
  },
});

export type RTEProps = ComponentProps & HztlPageContent.Rte;

export const Default = (props: RTEProps): JSX.Element => {
  const { text } = props?.fields || {};
  const { RenderingIdentifier, styles } = props?.params || {};

  /*
   * RENDERING
   */

  const extendedTailwindVariants = tv({
    extend: TAILWIND_VARIANTS,
    slots: {
      base: [styles?.trimEnd()],
    },
  });

  const { base, placeholder } = extendedTailwindVariants();

  const children = text ? (
    <RichTextWrapper field={text} />
  ) : (
    <span className={placeholder()}>Rich text</span>
  );

  return (
    <div
      className={base()}
      data-component="authorable/shared/hztl-page-content/rte"
      id={RenderingIdentifier}
    >
      {children}
    </div>
  );
};
