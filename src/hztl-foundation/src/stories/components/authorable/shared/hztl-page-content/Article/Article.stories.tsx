// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, ArticleProps } from 'components/authorable/shared/hztl-page-content/Article';
import articleData from './Article.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {},
  component: Default,
  title: 'Components/Authorable/shared/hztl-page-content/Article',
  parameters: {
    docs: {
      description: {
        component: `
## Overview

The Article component is designed to present detailed written content, such as blog posts, news stories, or long-form informational pieces. It includes sections for headings, paragraphs, images, and other multimedia to create a cohesive and engaging reading experience.
## Usage

Use the Article component when you need to deliver in-depth information on a specific topic. This component is ideal for blog posts, news articles, case studies, and editorial content, allowing users to consume large bodies of text while offering a structured and easily readable format.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Article: Story = {
  args: {
    ...flattenObj(articleData),
  },
  name: 'Default',
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as ArticleProps)} />;
  },
};
