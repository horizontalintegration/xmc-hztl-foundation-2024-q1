import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type AccordionProps = ComponentProps;

export const Default = (props: AccordionProps): JSX.Element => {
  const phKey = `accordion`;

  return (
    <div className="accordion my-8 border-b-gray border-b border-solid">
      <Placeholder name={phKey} rendering={props.rendering} />
    </div>
  );
};
