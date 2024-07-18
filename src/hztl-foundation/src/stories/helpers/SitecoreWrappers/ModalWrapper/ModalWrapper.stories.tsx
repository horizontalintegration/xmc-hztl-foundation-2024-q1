// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, VideoProps } from 'components/authorable/shared/hztl-page-content/Video';
import defaultData from './ModalWrapper.mock-data';

const meta: Meta<typeof Default> = {
  title: 'Helpers/Sitecore Wrappers/ModalWrapper',
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
