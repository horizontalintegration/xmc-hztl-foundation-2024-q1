// Global
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import useDictionary from 'src/hooks/useDictionary';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component'],
    contentContainer: ['p-4'],
    placeholder: ['is-empty-hint'],
  },
});

export type RTEProps = ComponentProps & HztlPageContent.Rte;

export const Default = (props: RTEProps): JSX.Element => {
  const { text } = props?.fields || {};
  const { RenderingIdentifier, styles } = props?.params || {};

  const { getDictionaryValue } = useDictionary();

  /*
   * RENDERING
   */

  const extendedTailwindVariants = tv({
    extend: TAILWIND_VARIANTS,
    slots: {
      base: [styles?.trimEnd()],
    },
  });

  const { base, contentContainer, placeholder } = extendedTailwindVariants();

  const children =
    text && text.value != '' ? (
      <RichTextWrapper field={text} />
    ) : (
      <span className={placeholder()}>{getDictionaryValue('RTEText')}</span>
    );

  return (
    <div
      className={base()}
      data-component="authorable/shared/hztl-page-content/rte"
      id={RenderingIdentifier}
    >
      <div className={contentContainer()}>{children}</div>
    </div>
  );
};
