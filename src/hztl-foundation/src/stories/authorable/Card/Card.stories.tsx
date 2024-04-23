// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Card, { CardProps } from 'src/components/authorable/shared/hztl-page-content/Card';
import defaultData from './Card.mock-data';

const meta: Meta<typeof Card> = {
  title: 'Authorable/Card',
  component: Card,
  argTypes: {
    //editable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: (args) => {
    console.log('args:', args);
    return (
      <>
        {/* <Card {...(expandObj({ ...args }) as any)} /> */}
        <Card {...(expandObj({ ...args }) as CardProps)} />
      </>
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};
