// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, CardListProps } from 'components/authorable/shared/hztl-page-content/CardList';
import defaultData from './CardList.mock-data';

const meta: Meta<CardListProps> = {
  argTypes: {
    'params.cardsPerRow': {
      table: {
        category: 'params',
      },
    },
    'params.DynamicPlaceholderId': {
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
    'rendering.placeholders.cardlist-1': {
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
The Card List component displays a collection of individual cards, each representing distinct content or actions. It provides a visually organized layout to help users quickly scan and engage with multiple items, such as products, services, or articles, at once.

## Usage
Use the Card List when you want to showcase multiple related items in a grid or list format. This component is ideal for highlighting products, displaying blog summaries, listing services, or presenting options in a visually engaging and easy-to-navigate manner.`,
      },
    },
  },
  title: 'Components/Authorable/shared/hztl-page-content/Card List',
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
