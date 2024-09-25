// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import {
  Default,
  SocialMediaProps,
} from 'components/authorable/shared/hztl-page-content/SocialMedia';
import defaultData from './SocialMedia.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {
    'fields.socialMediaLinks': {
      table: {
        category: 'feilds',
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
  component: Default,
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The Social Media component allows for the integration of social media elements, such as icons, share buttons, or embedded social feeds, directly into a website. It provides users with easy access to share content, follow social media accounts, or view live social updates, enhancing engagement and connectivity with various social platforms.

## Usage
Use the Social Media component when you want to encourage users to interact with your brand through social networks, share content, or follow your social media accounts. It’s ideal for blog posts, product pages, or anywhere you want to increase social engagement. Ensure that the social media icons or buttons are recognizable and easy to use, and that they align with your brand’s design. Keep the layout clean and non-intrusive, and provide clear actions like "Share," "Follow," or "Like" for better user interaction.`,
      },
    },
  },
  title: 'Components/Authorable/shared/hztl-page-content/Social Media',
};

export default meta;

type Story = StoryObj<typeof Default>;

export const SocialMedia: Story = {
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as SocialMediaProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
