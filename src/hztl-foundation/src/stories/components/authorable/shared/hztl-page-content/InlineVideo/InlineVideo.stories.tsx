// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import InlineVideo, {
  InlineVideoProps,
} from 'components/authorable/shared/hztl-page-content/InlineVideo';
import defaultData from './InlineVideo.mock-data';

const meta: Meta<InlineVideoProps> = {
  argTypes: {
    'fields.Video.value.autoplay': {
      description: 'A flag indicating wether or not the video should begin playing automatically.',
    },
    'fields.Video.value.captions': {
      description:
        'An array of URIs indicating localized caption data to be loaded into the player.',
    },
    'fields.Video.value.controls': {
      defaultValue: true,
      description: 'A flag indicating wether or not to show the playback controls.',
    },
    'fields.Video.value.fluid': {
      description:
        "A flag indicating wether or not the player will size to fit its container at the video's intrinsic aspect ratio.",
    },
    'fields.Video.value.height': {
      description: 'A value indicating the desired height of the video player.',
      if: { arg: 'fields.Video.value.fluid', truthy: false },
    },
    'fields.Video.value.loop': {
      defaultValue: false,
      description:
        'A flag indicating wether or not the video will loop automatically once playback has ended.',
    },
    'fields.Video.value.muted': {
      defaultValue: false,
      description: 'A flag indicated wether or not the video player is muted.',
    },
    'fields.Video.value.poster': {
      defaultValue: false,
      description:
        'A URI represenging a poster image of the video asset to be loaded into the player.',
    },
    'fields.Video.value.sources': {
      description:
        'An array of URIs and asset types representing a video asset to be loaded into the player.',
    },
    'fields.Video.value.subtitles': {
      description:
        'An array of URIs indicating localized caption data to be loaded into the player.',
    },
    'fields.Video.value.width': {
      description: 'A value indicating the desired height of the video player.',
      if: { arg: 'fields.Video.value.fluid', truthy: false },
    },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } as any,
  component: InlineVideo,
  title: 'Components/Authorable/Shared/hztl-page-content/Inline Video',
};

export default meta;

type Story = StoryObj<InlineVideoProps>;

export const Default: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  name: 'Default',
  render: (args) => {
    return <InlineVideo {...(expandObj({ ...args }) as InlineVideoProps)} />;
  },
};
