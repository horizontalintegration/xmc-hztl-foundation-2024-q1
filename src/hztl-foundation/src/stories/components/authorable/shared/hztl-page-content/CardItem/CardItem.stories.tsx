// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { CardItemProps, Default } from 'components/authorable/shared/hztl-page-content/CardItem';
import defaultData from './CardItem.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {},
  component: Default,
  decorators: [
    (Story) => (
      <div className="max-w-[395px]">
        <Story />
      </div>
    ),
  ],
  title: 'Components/Authorable/shared/hztl-page-content/Card Item',
  parameters: {
    docs: {
      description: {
        component: `

## Overview

The Card component is a flexible container that groups related content and actions about a single subject. It often includes elements like images, text, buttons, and other interactive components, making it ideal for displaying concise, visually appealing information.

## Usage

Use the Card component to present a summarized view of content or to showcase specific information, such as a product, user profile, or news article. Cards are best suited for dashboard layouts, grid views, or when you need to display content in an organized, digestible format. Ensure that the content within the card is easy to scan and encourages interaction through clear actions or links.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Card: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as CardItemProps)} />;
  },
};
