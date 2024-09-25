// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import {
  AccordionItemProps,
  Default,
} from 'components/authorable/shared/hztl-page-content/AccordionItem';
import defaultData from './AccordionItem.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {
    'fields.content.value': {
      description: 'A rich text string that represents the content of the accordion item.',
      table: {
        category: 'fields',
      },
    },
    'fields.heading.value': {
      description: "A plain text string that represents the the accordion item's title.",
      table: {
        category: 'fields',
      },
    },
    'params.DynamicPlaceholderId': {
      table: {
        category: 'params',
      },
    },
    'params.FieldNames': {
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
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } as any,
  component: Default,
  title: 'Components/Authorable/shared/hztl-page-content/Accordion Item',
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The Accordion Item component displays collapsible content within an accordion structure. It allows users to expand or collapse sections of related information, optimizing space and reducing cognitive load by presenting only the necessary content at a time.

## Usage
Use the Accordion Item when you need to present large sets of categorized content that can be optionally expanded or collapsed. It’s ideal for FAQs, detailed descriptions, or any structured content where users may not need to see everything at once.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Default>;

export const AccordionItem: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as AccordionItemProps)} />;
  },
};
