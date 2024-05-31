import React from 'react';
import { RichText as JssRichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ItemEx } from '../../../../.generated/_.Sitecore.Override';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';

export type AccordionProps = ComponentProps & HztlPageContent.Accordion;
export type AccordionItem = ItemEx & HztlPageContent.AccordionItem;

const AccordionDefaultComponent = (props: AccordionProps): JSX.Element => (
  <div className={`component hero ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Accordion</span>
    </div>
  </div>
);

export const Default = (props: AccordionProps): JSX.Element => {
  if (props.fields) {
    return (
      <div>
        {props?.fields?.accordionList?.map((Item: AccordionItem, key) => (
          <React.Fragment key={key}>
            <div className="component-content">
              <div className="hero-content">
                <div className="field-title">
                  <Text field={Item?.fields?.heading}></Text>
                </div>
                <div className="field-subtitle">
                  <JssRichText field={Item?.fields?.content}></JssRichText>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }

  return <AccordionDefaultComponent {...props} />;
};
