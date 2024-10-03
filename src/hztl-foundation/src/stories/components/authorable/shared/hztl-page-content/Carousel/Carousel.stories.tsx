// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';
import '../../../../../page.css';

// Local
import { Default, CarouselProps } from 'components/authorable/shared/hztl-page-content/Carousel';
import defaultData from './Carousel.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {
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
    'rendering.placeholders.carousel-1': {
      table: {
        category: 'rendering',
      },
    },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } as any,
  component: Default,
  decorators: [
    (Story) => (
      <div className="max-w-7xl">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The Carousel component displays a series of content items, such as images or cards, in a horizontal sliding format. It allows users to navigate through multiple pieces of content without overwhelming them by showing everything at once. Carousels can include navigation controls like arrows or dots to guide the user through the slides.

## Usage
Use the Carousel component when you want to showcase multiple pieces of related content in a limited space, such as featured products, image galleries, or testimonials. Carousels are ideal for highlighting key content while giving users the control to explore more at their own pace. Make sure that each slide is clear, meaningful, and that navigation is accessible for all users, including those on mobile or with disabilities.`,
      },
    },
  },
  title: 'Components/Authorable/shared/hztl-page-content/Carousel',
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Carousel: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as CarouselProps)} />;
  },
};
