// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, VideoProps } from '../../../components/authorable/hztl-page-content/Video';
import defaultData from './Video.mock-data';

const meta: Meta<typeof Default> = {
  title: 'Authorable/hztl-page-content/Video',
  component: Default,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Video: Story = {
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as VideoProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
