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
  argTypes: {},
  component: Default,
  title: 'Components/Authorable/shared/hztl-page-content/Carousel Item',
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
