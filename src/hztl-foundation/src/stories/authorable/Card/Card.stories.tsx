// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Card, { CardProps } from './Card';
import defaultData from './Card.mock-data';

const meta: Meta<typeof Card> = {
  title: 'Authorable/General/Card',
  component: Card,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => {
    return <Card {...(expandObj({ ...args }) as CardProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
