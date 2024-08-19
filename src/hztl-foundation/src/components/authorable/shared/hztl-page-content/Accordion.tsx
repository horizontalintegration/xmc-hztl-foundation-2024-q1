// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';

export type AccordionProps = ComponentProps;

/*
 * Tailwind tailwindVariants
 */

const tailwindVariants = tv({
  slots: {
    base: ['component', 'accordion', 'my-8', 'border-b-gray', 'border-b', 'border-solid'],
  },
});

const Accordion = (props: AccordionProps): JSX.Element => {
  const { base } = tailwindVariants();

  return (
    <Placeholder
      name="accordion"
      render={(components) => <div className={base()}>{components}</div>}
      renderEmpty={() => <></>}
      rendering={props.rendering}
    />
  );
};

export const Default = withStandardComponentWrapper(Accordion, false);
