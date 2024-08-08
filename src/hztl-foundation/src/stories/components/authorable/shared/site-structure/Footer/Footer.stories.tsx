// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { flattenObj } from 'lib/object-parser';

// Local
import { Default } from 'components/authorable/shared/site-structure/Footer/Footer';
import defaultData from './Footer.mock-data';

const meta: Meta<typeof Default> = {
  title: 'Components/Authorable/shared/site-structure/Footer',
  component: Default,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Footer: Story = {
  render: () => {
    return <Default {...defaultData} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
