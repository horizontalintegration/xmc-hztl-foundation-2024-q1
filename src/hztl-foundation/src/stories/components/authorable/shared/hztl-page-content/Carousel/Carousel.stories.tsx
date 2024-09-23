// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';
import '../../../../../page.css';

// Local
import { Default, CarouselProps } from 'components/authorable/shared/hztl-page-content/Carousel';
import defaultData from './Carousel.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {},
  component: Default,
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
