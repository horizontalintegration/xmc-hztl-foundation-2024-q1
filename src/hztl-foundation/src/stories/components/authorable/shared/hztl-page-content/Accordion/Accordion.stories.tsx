// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { AccordionProps, Default } from 'components/authorable/shared/hztl-page-content/Accordion';
import defaultData from './Accordion.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {
    'params.DynamicPlaceholderId': {
      table: {
        category: 'params',
      },
    },
    'rendering.componentName': {
      table: {
        category: 'rendering',
      },
    },
    'rendering.dataSource': {
      table: {
        category: 'rendering',
      },
    },
    'rendering.placeholders.accordion-1': {
      table: {
        category: 'rendering',
      },
    },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } as any,
  component: Default,
  title: 'Components/Authorable/shared/hztl-page-content/Accordion',
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The Accordion component organizes content into collapsible sections, allowing users to expand and collapse each section to reveal or hide the content inside. It is commonly used to manage large amounts of information in a compact, accessible way.

## Usage
Use the Accordion component when you need to present multiple sections of related content without overwhelming the user. It’s especially useful for FAQs, detailed product specifications, or content that users may only need to view on demand. Make sure to clearly label each section header to indicate what content will be revealed when expanded.        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Accordion: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  name: 'Default',
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as AccordionProps)} />;
  },
};
