// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';
import '../../../../../page.css';

// Local
import {
  Default,
  CarouselItemProps,
} from 'components/authorable/shared/hztl-page-content/CarouselItem';
import defaultData from './CarouselItem.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {
    'fields.description.value': {
      table: {
        category: 'fields',
      },
    },
    'fields.image.value.alt': {
      table: {
        category: 'fields',
      },
    },
    'fields.image.value.height': {
      table: {
        category: 'fields',
      },
    },
    'fields.image.value.src': {
      table: {
        category: 'fields',
      },
    },
    'fields.image.value.width': {
      table: {
        category: 'fields',
      },
    },
    'fields.primaryCTA.value.anchor': {
      table: {
        category: 'fields',
      },
    },
    'fields.primaryCTA.value.class': {
      table: {
        category: 'fields',
      },
    },
    'fields.primaryCTA.value.href': {
      table: {
        category: 'fields',
      },
    },
    'fields.primaryCTA.value.id': {
      table: {
        category: 'fields',
      },
    },
    'fields.primaryCTA.value.linktype': {
      table: {
        category: 'fields',
      },
    },
    'fields.primaryCTA.value.querystring': {
      table: {
        category: 'fields',
      },
    },
    'fields.primaryCTA.value.target': {
      table: {
        category: 'fields',
      },
    },
    'fields.primaryCTA.value.text': {
      table: {
        category: 'fields',
      },
    },
    'fields.primaryCTA.value.title': {
      table: {
        category: 'fields',
      },
    },
    'fields.secondaryCTA.value.anchor': {
      table: {
        category: 'fields',
      },
    },
    'fields.secondaryCTA.value.class': {
      table: {
        category: 'fields',
      },
    },
    'fields.secondaryCTA.value.href': {
      table: {
        category: 'fields',
      },
    },
    'fields.secondaryCTA.value.id': {
      table: {
        category: 'fields',
      },
    },
    'fields.secondaryCTA.value.linktype': {
      table: {
        category: 'fields',
      },
    },
    'fields.secondaryCTA.value.querystring': {
      table: {
        category: 'fields',
      },
    },
    'fields.secondaryCTA.value.target': {
      table: {
        category: 'fields',
      },
    },
    'fields.secondaryCTA.value.text': {
      table: {
        category: 'fields',
      },
    },
    'fields.secondaryCTA.value.title': {
      table: {
        category: 'fields',
      },
    },
    'fields.title.value': {
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
The Carousel Item component displays a single slide within a carousel, which is part of a rotating series of content elements. Each item can feature images, text, or multimedia, allowing users to cycle through a curated selection of content in an interactive and space-efficient manner.

## Usage
Use the Carousel Item when you want to present a series of content pieces, such as featured products, testimonials, or image galleries, in a condensed format. It’s especially useful when space is limited but multiple pieces of content need to be highlighted or cycled through.`,
      },
    },
  },
  title: 'Components/Authorable/shared/hztl-page-content/Carousel Item',
};

export default meta;

type Story = StoryObj<typeof Default>;

export const CarouselItem: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as CarouselItemProps)} />;
  },
};
