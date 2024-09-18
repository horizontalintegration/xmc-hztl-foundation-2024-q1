// Global
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import { AccordionProps } from 'components/authorable/shared/hztl-page-content/Accordion';
import {
  default as AccordionItem1,
  accordionItem2 as AccordionItem2,
  accordionItem3 as AccordionItem3,
} from 'stories/components/authorable/shared/hztl-page-content/AccordionItem/AccordionItem.mock-data';

const defaultData: AccordionProps = {
  params: {
    DynamicPlaceholderId: '1',
  },
  rendering: {
    componentName: 'Accordion',
    dataSource: 'Storybook',
    placeholders: {
      'accordion-1': [
        AccordionItem1 as ComponentRendering,
        AccordionItem2 as ComponentRendering,
        AccordionItem3 as ComponentRendering,
      ],
    },
  },
};

export default defaultData;
