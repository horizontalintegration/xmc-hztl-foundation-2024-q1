import React from 'react';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';

export type CustomFormProps = ComponentProps & HztlPageContent.CustomForm;

const CustomFormDefaultComponent = (props: CustomFormProps): JSX.Element => (
  <div className={`component card ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">CustomForm</span>
    </div>
  </div>
);

export const Default = (props: CustomFormProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  if (props?.fields) {
    return (
      <div className={`component card ${props?.params?.styles}`} id={id ? id : undefined}>
        <div data-component="authorable/general/card" className="flex justify-center items-center">
          <div className="mx-auto my-[0px]">
            <div className="border-[1px] border-[#2F2D2E]">
              <Text field={props?.fields?.title} tag="h3" />
              <RichTextWrapper
                className="font-modern text-[#2F2D2E] text-[16px] font-[400] not-italic leading-[24px] mb-[8px] opacity-[0.9]"
                field={props?.fields?.description}
                tag="div"
              />
              <div className="flex gap-xxs flex-wrap justify-center md:justify-normal">
                <LinkWrapper
                  className="flex items-center justify-center px-[16px] py-[12px] rounded-[4px] bg-[#2F2D2E] text-center text-[#FFF] font-modern text-[14px] font-[700] not-italic leading-normal"
                  field={props?.fields?.primaryCTA}
                  suppressNewTabIcon={true}
                />
                <LinkWrapper
                  className="flex items-center justify-center p-[12px] rounded-[4px] border-[1px] border-[#2F2D2E] text-center text-[#2F2D2E] font-modern text-[16px] font-[700] not-italic leading-normal"
                  field={props?.fields?.secondaryCTA}
                  suppressNewTabIcon={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <CustomFormDefaultComponent {...props} />;
};
