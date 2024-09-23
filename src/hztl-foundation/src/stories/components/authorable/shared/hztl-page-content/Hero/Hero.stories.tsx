// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, HeroProps } from 'components/authorable/shared/hztl-page-content/Hero';
import defaultData from './Hero.mock-data';

const meta: Meta<typeof Default> = {
  title: 'Components/Authorable/shared/hztl-page-content/Hero',
  component: Default,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `

## Overview

The Hero component is a prominent, visually impactful section often placed at the top of a page. It typically contains a large background image or video, a bold headline, supporting text, and a call-to-action (CTA). The Hero section is designed to immediately grab the user's attention and convey the main message or purpose of the page.

## Usage

Use the Hero component when you want to create a strong first impression or highlight key content, such as promotions, brand messaging, or a featured product. The Hero section is perfect for landing pages, homepage introductions, or marketing campaigns. Ensure that the messaging is concise, the visuals are high-quality, and the call-to-action is clear and enticing to encourage user engagement.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Hero: Story = {
  render: (args) => {
    const expandedArgs = expandObj({ ...args }) as Record<string, unknown>;
    return <Default {...(expandedArgs as unknown as HeroProps)} />;
  },
  args: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...flattenObj(defaultData as any),
  },
};
