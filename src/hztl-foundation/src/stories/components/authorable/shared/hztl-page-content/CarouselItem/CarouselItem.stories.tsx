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
