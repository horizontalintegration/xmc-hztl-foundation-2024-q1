import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
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
    <>
      {props?.rendering?.placeholders?.accordion?.length !== 0 && (
        <div className="component accordion my-8 border-b-gray border-b border-solid">
          <Placeholder name={phKey} rendering={props.rendering} />
        </div>
      )}
    </>
  );
};

export const Default = withStandardComponentWrapper(Accordion, false);
