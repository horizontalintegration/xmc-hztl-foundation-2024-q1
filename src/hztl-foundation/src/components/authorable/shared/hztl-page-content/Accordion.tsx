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
  const [active, setActive] = useState<number>();
  const accordionContent = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };

  if (props.fields) {
    return (
      <div>
        {props?.fields?.accordionList?.map((Item: AccordionItem, key: number) => (
          <React.Fragment key={key}>
            <div className="component-content overflow-hidden border-t-[#2F2D2E] border-t border-solid last:mb-0 last:border-b-[#2F2D2E] last:border-b last:border-solid">
              <div className="hero-content">
                {/* header */}
                <button
                  className="w-full flex items-center cursor-pointer justify-between transition-[0.3s] p-3"
                  onClick={() => handleToggle(key)}
                  type="button"
                  aria-expanded={active === key ? true : false}
                  aria-controls={`accordion-${key}`}
                  tabIndex={0}
                  id={`tab-accordion-${key}`}
                >
                  <Text
                    field={Item?.fields?.heading}
                    tag="h3"
                    className={`${
                      active === key && 'active text-[#2F2D2E] !font-bold leading-[normal]'
                    } text-xl font-normal leading-5`}
                  />
                  <i
                    className={`${
                      active === key ? 'active rotate-180 text-[#2F2D2E]' : ''
                    } fa fa-chevron-down relative text-[#2F2D2E] transition-[0.35s] text-xs top-0.5`}
                  ></i>
                </button>
                <div
                  ref={accordionContent}
                  id={`accordion-${key}`}
                  aria-labelledby={`tab-accordion-${key}`}
                  aria-hidden={active === key ? false : true}
                  className={`accordion-collapse relative h-0 overflow-hidden transition-[height] duration-[0.35s] ease-[ease] ${
                    active === key ? 'show h-auto' : ''
                  }`}
                  style={
                    active === key
                      ? { height: accordionContent?.current?.scrollHeight }
                      : { height: '0px' }
                  }
                >
                  <div className="flex-auto min-h-[1px] p-[24px]">
                    <JssRichText
                      field={Item?.fields?.content}
                      className="mb-0 text-[#2F2D2E] text-lg font-normal leading-[22px] p-[16px]"
                      aria-required="true"
                    ></JssRichText>
                  </div>
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
