// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, CardProps } from '../../../components/authorable/hztl-page-content/Card';
import defaultData from './Card.mock-data';

const meta: Meta<typeof Default> = {
  title: 'Authorable/General/Card',
  component: Default,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Card: Story = {
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as CardProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
