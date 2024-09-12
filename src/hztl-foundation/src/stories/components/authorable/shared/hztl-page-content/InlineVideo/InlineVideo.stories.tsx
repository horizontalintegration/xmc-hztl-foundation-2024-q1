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
    'fields.autoplay.value': {
      description: 'A flag indicating wether or not the video should begin playing automatically.',
      table: {
        category: 'fields',
      },
    },
    'fields.captions': {
      description:
        'An array of URIs indicating localized caption data to be loaded into the player.',
      table: {
        category: 'fields',
      },
    },
    'fields.controls.value': {
      defaultValue: true,
      description: 'A flag indicating wether or not to show the playback controls.',
      table: {
        category: 'fields',
      },
    },
    'fields.fluid.value': {
      description:
        "A flag indicating wether or not the player will size to fit its container at the video's intrinsic aspect ratio.",
      table: {
        category: 'fields',
      },
    },
    'fields.height.value': {
      description: 'A value indicating the desired height of the video player.',
      if: { arg: 'fields.Video.value.fluid', truthy: false },
      table: {
        category: 'fields',
      },
    },
    'fields.loop.value': {
      defaultValue: false,
      description:
        'A flag indicating wether or not the video will loop automatically once playback has ended.',
      table: {
        category: 'fields',
      },
    },
    'fields.muted.value': {
      defaultValue: false,
      description: 'A flag indicated wether or not the video player is muted.',
      table: {
        category: 'fields',
      },
    },
    'fields.poster.value.alt': {
      defaultValue: false,
      description: 'A value indicating the alternate text for the video.',
      table: {
        category: 'fields',
      },
    },
    'fields.poster.value.height': {
      defaultValue: false,
      description: "A value indicating the intrinsic height of the video's poster image.",
      table: {
        category: 'fields',
      },
    },
    'fields.poster.value.src': {
      defaultValue: false,
      description:
        'A URI represenging a poster image of the video asset to be loaded into the player.',
      table: {
        category: 'fields',
      },
    },
    'fields.poster.value.width': {
      defaultValue: false,
      description: "A value indicating the intrinsic width of the video's poster image.",
      table: {
        category: 'fields',
      },
    },
    'fields.sources': {
      description:
        'An array of URIs and asset types representing a video asset to be loaded into the player.',
      table: {
        category: 'fields',
      },
    },
    'fields.subtitles': {
      description:
        'An array of URIs indicating localized caption data to be loaded into the player.',
      table: {
        category: 'fields',
      },
    },
    'fields.width.value': {
      description: 'A value indicating the desired height of the video player.',
      if: { arg: 'fields.Video.value.fluid', truthy: false },
      table: {
        category: 'fields',
      },
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
