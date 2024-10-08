// Global
import { Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import { withStandardComponentWrapper } from 'helpers/HOC';
import { SvgIcon } from 'helpers/SvgIcon';

export type AccordionItemProps = ComponentProps &
  HztlPageContent.AccordionItem & { componentName?: string; dataSource?: string; uid: string };

const tailwindVariants = tv({
  slots: {
    base: ['border-t', 'border-solid', 'border-t-theme-black', 'overflow-hidden'],
    buttonWrapper: [
      'cursor-pointer',
      'duration-300',
      'flex',
      'font-bold',
      'items-center',
      'justify-between',
      'p-3',
      'text-xl',
      'w-full',
    ],
    contentContainer: ['flex-auto', 'min-h-px', 'p-3'],
    iconWrapper: ['transform', 'transition-transform'],
    richTextWrapper: ['font-normal', 'mb-0', 'p-4', 'text-lg'],
  },
  variants: {
    isOpen: {
      false: {
        iconWrapper: [],
      },
      true: {
        iconWrapper: ['rotate-180'],
      },
    },
  },
});

const AccordionItem = (props: AccordionItemProps): JSX.Element => {
  const { content, heading } = props?.fields || {};
  const { uid } = props?.rendering || {};

  const context = useSitecoreContext();

  /* State */

  const [isOpen, setIsOpen] = useState(false);

  /* Convenience Methods */

  const toggleAccordion = () => setIsOpen(!isOpen);

  /* Rendering */

  if (!props?.fields) {
    return <></>;
  }

  const { base, buttonWrapper, iconWrapper, contentContainer, richTextWrapper } = tailwindVariants({
    isOpen,
  });

  return (
    <div className={base()} data-component="authorable/shared/hztl-page-content/accordionitem">
      <div>
        <button
          aria-expanded={isOpen}
          className={buttonWrapper()}
          id={`accordion-${uid}`}
          onClick={toggleAccordion}
          type="button"
        >
          <Text field={heading} tag="h3" />
          <span className={iconWrapper()}>
            <SvgIcon fill="none" icon="chevron-down" size="xxs" viewBox="0 0 24 24" />
          </span>
        </button>
        {context?.sitecoreContext?.pageEditing ? (
          <div aria-labelledby={`accordion-${uid}`} className={contentContainer()} role="region">
            <RichTextWrapper aria-required={isOpen} className={richTextWrapper()} field={content} />
            {content?.value}
          </div>
        ) : (
          isOpen && (
            <div aria-labelledby={`accordion-${uid}`} className={contentContainer()} role="region">
              <RichTextWrapper
                aria-required={isOpen}
                className={richTextWrapper()}
                field={content}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export const Default = withStandardComponentWrapper(AccordionItem);
