// Global
import { Placeholder, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';

export type AccordionProps = ComponentProps;

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component', 'border-b-theme-black', 'border-b', 'border-solid', 'my-8'],
  },
});

const Accordion = (props: AccordionProps): JSX.Element => {
  const { DynamicPlaceholderId } = props?.params || {};

  const phKey = `accordion-${DynamicPlaceholderId}`;

  const context = useSitecoreContext();

  const { base } = TAILWIND_VARIANTS();

  return (
    <Placeholder
      data-component="authorable/shared/hztml-page-content/accordion"
      name={phKey}
      render={(components) => <div className={base()}>{components}</div>}
      rendering={props.rendering}
      {...(context?.sitecoreContext?.pageEditing ? {} : { renderEmpty: () => <></> })}
    />
  );
};

export const Default = withStandardComponentWrapper(Accordion, false);
