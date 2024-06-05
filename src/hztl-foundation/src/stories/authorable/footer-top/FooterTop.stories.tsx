// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import {
  Default,
  FooterTopProps,
} from '../../../components/authorable/shared/hztl-page-content/FooterTop';
import defaultData from './FooterTop.mock-data';

const meta: Meta<typeof Default> = {
  title: 'Authorable/General/FooterTop',
  component: Default,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Card: Story = {
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as FooterTopProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
