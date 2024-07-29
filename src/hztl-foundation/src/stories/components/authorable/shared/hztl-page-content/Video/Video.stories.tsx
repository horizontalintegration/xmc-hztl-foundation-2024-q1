// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Video, { VideoProps } from 'components/authorable/shared/hztl-page-content/Video';
import defaultData, { modalVideoData } from './Video.mock-data';

const meta: Meta<typeof Default> = {
  title: 'Components/Authorable/Shared/hztl-page-content/Video',
  argTypes: {},
};

export default meta;

type Story = StoryObj<VideoProps>;

export const Default: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  name: 'Default',
  render: (args) => {
    return <Video {...(expandObj({ ...args }) as VideoProps)} />;
  },
};

export const ModalVideo: Story = {
  args: {
    ...flattenObj(modalVideoData),
  },
  name: 'Modal Video',
  render: (args) => {
    return <Video {...(expandObj({ ...args }) as VideoProps)} />;
  },
};
