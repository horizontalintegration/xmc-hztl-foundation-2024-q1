import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

export type AccordionProps = ComponentProps & HztlPageContent.AccordionItem;

const AccordionDefaultComponent = (props: AccordionProps): JSX.Element => {
  return (
    <div className={`component hero ${props.params.styles}`}>
      <div className="component-content">
        <span className="is-empty-hint">Accordion Item</span>
      </div>
    </div>
  );
};

export const Default = (props: AccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const id = props?.rendering?.uid;

  if (props.fields) {
    return (
      <React.Fragment>
        <div className="component-content overflow-hidden border-t-gray border-t border-solid">
          <div className="hero-content">
            <button
              className="w-full flex items-center cursor-pointer justify-between transition-[0.3s] p-xs"
              type="button"
              aria-expanded={isOpen}
              id={'accordion-' + id}
              onClick={toggleAccordion}
            >
              <Text field={props?.fields?.heading} tag="h3" />
              <span className={`transition-transform transform ${isOpen ? 'rotate-180' : ''}`}>
                <i className="fa fa-chevron-down"></i>
              </span>
            </button>
            {isOpen && (
              <div
                className="flex-auto min-h-[1px] p-xs"
                role="region"
                aria-labelledby={'accordion-' + id}
              >
                <RichTextWrapper
                  field={props?.fields?.content}
                  className="mb-0 text-gray text-s font-normal p-s"
                  aria-required={isOpen}
                />
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
  return <AccordionDefaultComponent {...props} />;
};
