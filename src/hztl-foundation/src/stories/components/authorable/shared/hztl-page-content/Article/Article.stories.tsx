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
