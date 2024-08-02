import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { tv } from 'tailwind-variants';
import MissingDataSource from 'helpers/EditingHelpText/MissingDataSource';

export type AccordionProps = ComponentProps & HztlPageContent.AccordionItem;

const tailwindVariants = tv({
  slots: {
    base: ['overflow-hidden', 'border-t-gray', 'border-t', 'border-solid'],
    buttonWrapper: [
      'w-full',
      'font-bold',
      'text-sub-heading',
      'flex',
      'items-center',
      'cursor-pointer',
      'justify-between',
      'duration-300',
      'p-xs',
    ],
    iconWrapper: ['transition-transform', 'transform'],
    iconStyles: ['fa', 'fa-chevron-down'],
    contentContainer: ['flex-auto', 'min-h-px', 'p-xs'],
    richTextWrapper: ['mb-0', 'text-s', 'font-normal', 'p-s'],
  },
});

export const Default = (props: AccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useSitecoreContext();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  if (!props?.fields) {
    return <MissingDataSource {...props} />;
  }

  const { base, buttonWrapper, iconWrapper, iconStyles, contentContainer, richTextWrapper } =
    tailwindVariants();
  const id = props?.rendering?.uid;

  return (
    <div className={base()} data-component="authorable/general/accordion">
      <div>
        <button
          className={buttonWrapper()}
          type="button"
          aria-expanded={isOpen}
          id={'accordion-' + id}
          onClick={toggleAccordion}
        >
          <Text field={props?.fields?.heading} tag="h3" />
          <span className={`${iconWrapper()} ${isOpen ? 'rotate-180' : ''}`}>
            <i className={iconStyles()}></i>
          </span>
        </button>
        {context?.sitecoreContext?.pageEditing ? (
          <div className={contentContainer()} role="region" aria-labelledby={'accordion-' + id}>
            <RichTextWrapper
              field={props?.fields?.content}
              className={richTextWrapper()}
              aria-required={isOpen}
            />
            {props?.fields?.content?.value}
          </div>
        ) : (
          isOpen && (
            <div className={contentContainer()} role="region" aria-labelledby={'accordion-' + id}>
              <RichTextWrapper
                field={props?.fields?.content}
                className={richTextWrapper()}
                aria-required={isOpen}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
