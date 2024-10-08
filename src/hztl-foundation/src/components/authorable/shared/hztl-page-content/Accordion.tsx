// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';

export type AccordionProps = ComponentProps;

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component', 'border-b-theme-black', 'border-b', 'border-solid'],
  },
});

const Accordion = (props: AccordionProps): JSX.Element => {
  const { DynamicPlaceholderId, RenderingIdentifier } = props?.params || {};

  const phKey = `accordion-${DynamicPlaceholderId}`;

  /*
   * Rendering
   */

  const { base } = TAILWIND_VARIANTS();

  return (
    <section
      className={base()}
      data-component="authorable/shared/hztml-page-content/accordion"
      id={RenderingIdentifier}
    >
      <Placeholder name={phKey} rendering={props.rendering} />
    </section>
  );
};

export const Default = withStandardComponentWrapper(Accordion, false);
