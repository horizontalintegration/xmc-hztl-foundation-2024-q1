// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, CardListProps } from 'components/authorable/shared/hztl-page-content/CardList';
import defaultData from './CardList.mock-data';

const meta: Meta<CardListProps> = {
  argTypes: {},
  component: Default,
  title: 'Components/Authorable/shared/hztl-page-content/Card List',
  parameters: {
    docs: {
      description: {
        component: `
## Overview

The Card List component displays a collection of individual cards, each representing distinct content or actions. It provides a visually organized layout to help users quickly scan and engage with multiple items, such as products, services, or articles, at once.

## Usage

Use the Card List when you want to showcase multiple related items in a grid or list format. This component is ideal for highlighting products, displaying blog summaries, listing services, or presenting options in a visually engaging and easy-to-navigate manner.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<CardListProps>;

export const CardList: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  name: 'Default',
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as CardListProps)} />;
  },
};
