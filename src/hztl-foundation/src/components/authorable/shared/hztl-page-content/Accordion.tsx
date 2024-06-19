import React, { useRef, useState } from 'react';
import { RichText as JssRichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ItemEx } from '../../../../.generated/_.Sitecore.Override';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';

export type AccordionProps = ComponentProps & HztlPageContent.Accordion;
export type AccordionItem = ItemEx & HztlPageContent.AccordionItem;

const AccordionDefaultComponent = (props: AccordionProps): JSX.Element => {
  return (
    <div className={`component hero ${props.params.styles}`}>
      <div className="component-content">
        <span className="is-empty-hint">Accordion</span>
      </div>
    </div>
  );
};

export const Default = (props: AccordionProps): JSX.Element => {
  const {
    expandedFirstAccordionOnPageLoad: expandedFirstAccordionOnPageLoadParam,
    openMultipleAccordionAtSameTime,
  } = props?.params ?? {};
  const expandedFirstAccordionOnPageLoad = expandedFirstAccordionOnPageLoadParam ? 0 : -1;

  const accordionContent = useRef<HTMLDivElement>(null);

  // Set State
  const [activeIndexes, setActiveIndexes] = useState<number[]>([expandedFirstAccordionOnPageLoad]);

  const handleAccordionClick = (
    index: number,
    openMultipleAccordionAtSameTime: string | undefined
  ) => {
    // Check if the clicked accordion is already active
    const isActive = activeIndexes.includes(index);

    if (openMultipleAccordionAtSameTime === '1') {
      if (isActive) {
        // If it is active, remove it from the active indexes (collapse it)
        setActiveIndexes(activeIndexes.filter((i) => i !== index));
      } else {
        // If it's not active, add it to the active indexes
        setActiveIndexes([...activeIndexes, index]);
      }
    } else {
      if (isActive) {
        // If it is active, remove it from the active indexes (collapse it)
        setActiveIndexes([]);
      } else {
        // If it's not active, make it the only active index
        setActiveIndexes([index]);
      }
    }
  };

  if (props.fields) {
    return (
      <div className="accordion my-8">
        {props?.fields?.accordionList?.map((Item: AccordionItem, key: number) => {
          return (
            <React.Fragment key={key}>
              <div className="component-content overflow-hidden border-t-gray border-t border-solid last:mb-0 last:border-b-gray last:border-b last:border-solid">
                <div className="hero-content">
                  {/* header */}
                  <button
                    className="w-full flex items-center cursor-pointer justify-between transition-[0.3s] p-xs"
                    onClick={() => handleAccordionClick(key, openMultipleAccordionAtSameTime)}
                    type="button"
                    aria-expanded={activeIndexes.includes(key)}
                    aria-controls={`accordion-${key}`}
                    id={`tab-accordion-${key}`}
                  >
                    <Text
                      field={Item?.fields?.heading}
                      tag="h3"
                      className={`${
                        activeIndexes.includes(key) && 'active text-gray !font-bold'
                      } text-s font-normal leading-5`}
                    />
                    <i
                      className={`${
                        activeIndexes.includes(key) ? 'active rotate-180 text-gray' : ''
                      } fa fa-chevron-down relative text-gray transition-[0.35s] text-xs top-0.5`}
                    ></i>
                  </button>
                  <div
                    ref={accordionContent}
                    id={`accordion-${key}`}
                    aria-labelledby={`tab-accordion-${key}`}
                    aria-hidden={!activeIndexes.includes(key)}
                    className={`accordion-collapse overflow-hidden transition-[max-height] duration-[0.35s] ease-[ease] ${
                      activeIndexes.includes(key) ? 'max-h-screen' : 'max-h-0'
                    }`}
                  >
                    <div className="flex-auto min-h-[1px] p-xs">
                      <JssRichText
                        field={Item?.fields?.content}
                        className="mb-0 text-gray text-s font-normal p-s"
                        aria-required="true"
                      ></JssRichText>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
  return <AccordionDefaultComponent {...props} />;
};
