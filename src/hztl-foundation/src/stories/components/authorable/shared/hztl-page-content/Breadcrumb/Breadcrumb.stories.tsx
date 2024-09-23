// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { flattenObj } from 'lib/object-parser';

// Local
import defaultData from './Breadcrumb.mock-data';
import { Default } from 'components/authorable/shared/hztl-page-content/Breadcrumb/Breadcrumb';

const meta: Meta<typeof Default> = {
  title: 'Components/Authorable/shared/hztl-page-content/Breadcrumb',
  component: Default,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `

## Overview

The Breadcrumb component presents navigation conveying a page's location within the site hierarchy. It also provides a shortcut to explore similar content within the same section or category.
## Usage

Use it when you want to help users understand where they are within the site hierarchy and to provide them a way to navigate to parent pages.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Breadcrumb: Story = {
  render: () => {
    return <Default {...defaultData} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
