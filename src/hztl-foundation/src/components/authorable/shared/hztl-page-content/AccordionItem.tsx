import React from 'react';
import { RichText as JssRichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';

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
  if (props.fields) {
    return (
      <div className="accordion my-8">
        <React.Fragment>
          <div className="component-content overflow-hidden border-t-gray border-t border-solid last:mb-0 last:border-b-gray last:border-b last:border-solid">
            <div className="hero-content">
              {/* header */}
              <button
                className="w-full flex items-center cursor-pointer justify-between transition-[0.3s] p-xs"
                type="button"
              >
                <Text field={props?.fields?.heading} tag="h3" />
              </button>
              <div>
                <div className="flex-auto min-h-[1px] p-xs">
                  <JssRichText
                    field={props?.fields?.content}
                    className="mb-0 text-gray text-s font-normal p-s"
                    aria-required="true"
                  ></JssRichText>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
  return <AccordionDefaultComponent {...props} />;
};
