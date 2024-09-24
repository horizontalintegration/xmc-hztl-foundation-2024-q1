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
    'params.DynamicPlaceholderId': {
      table: {
        category: 'params',
      },
    },
    'params.FieldNames': {
      table: {
        category: 'params',
      },
    },
    'params.GridParameters': {
      table: {
        category: 'params',
      },
    },
    'rendering.componentName': {
      table: {
        category: 'rendering',
      },
    },
    'rendering.dataSource': {
      table: {
        category: 'rendering',
      },
    },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } as any,
  component: InlineVideo,
  title: 'Components/Authorable/Shared/hztl-page-content/Inline Video',
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The Inline Video component embeds a video directly within the content of a page, allowing users to watch videos without leaving the current page or opening a modal. It can be accompanied by controls like play/pause, volume adjustment, and fullscreen mode, providing an interactive media experience while maintaining context within the content.

## Usage
Use the Inline Video component when you want to integrate multimedia content seamlessly into your page, such as tutorials, product demonstrations, or promotional videos. It’s ideal for situations where you want to keep users engaged without redirecting them to a separate video player or disrupting their browsing experience. Ensure that the video is of high quality, relevant to the surrounding content, and includes captions or transcripts for accessibility.`,
      },
    },
  },
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
