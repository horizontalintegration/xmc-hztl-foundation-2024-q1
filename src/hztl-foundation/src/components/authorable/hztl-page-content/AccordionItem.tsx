import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../.generated/Feature.HztlFoundation.model';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

export type AccordionProps = ComponentProps & HztlPageContent.AccordionItem;

const AccordionDefaultComponent = (props: AccordionProps): JSX.Element => {
  return (
    /* TODO: Remove non-tailwind classes */
    <div className={`component hero ${props.params?.styles}`}>
      <div className="component-content">
        <span className="is-empty-hint">Accordion Item</span>
      </div>
    </div>
  );
};

export const Default = (props: AccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useSitecoreContext();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const id = props?.rendering?.uid;

  if (props.fields) {
    return (
      <div
        className="overflow-hidden border-t-gray border-t border-solid"
        data-component="authorable/general/accordion"
      >
        <div>
          <button
            className="w-full flex items-center cursor-pointer justify-between duration-300 p-xs"
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
          {context?.sitecoreContext?.pageEditing ? (
            <div
              className="flex-auto min-h-px p-xs"
              role="region"
              aria-labelledby={'accordion-' + id}
            >
              <RichTextWrapper
                field={props?.fields?.content}
                className="mb-0 text-gray text-s font-normal p-s"
                aria-required={isOpen}
              />
            </div>
          ) : (
            isOpen && (
              <div
                className="flex-auto min-h-px p-xs"
                role="region"
                aria-labelledby={'accordion-' + id}
              >
                <RichTextWrapper
                  field={props?.fields?.content}
                  className="mb-0 text-gray text-s font-normal p-s"
                  aria-required={isOpen}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  }
  return <AccordionDefaultComponent {...props} />;
};
