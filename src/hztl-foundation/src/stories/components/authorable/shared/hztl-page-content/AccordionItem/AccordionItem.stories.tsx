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
  argTypes: {},
  component: Default,
  title: 'Components/Authorable/shared/hztl-page-content/Accordion Item',
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
