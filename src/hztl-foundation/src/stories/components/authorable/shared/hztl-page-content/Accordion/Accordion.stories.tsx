// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { AccordionProps, Default } from 'components/authorable/shared/hztl-page-content/Accordion';
import defaultData from './Accordion.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {},
  component: Default,
  title: 'Components/Authorable/shared/hztl-page-content/Accordion',
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
