// Global
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

import { CarouselProps } from 'components/authorable/shared/hztl-page-content/Carousel';
import {
  default as CarouselItem1,
  carouselItem2 as CarouselItem2,
  carouselItem3 as CarouselItem3,
} from 'stories/components/authorable/shared/hztl-page-content/CarouselItem/CarouselItem.mock-data';

const defaultData: CarouselProps = {
  params: {
    DynamicPlaceholderId: '1',
  },
  rendering: {
    componentName: 'Carousel',
    dataSource: 'Storybook',
    placeholders: {
      'carousel-1': [
        CarouselItem1 as ComponentRendering,
        CarouselItem2 as ComponentRendering,
        CarouselItem3 as ComponentRendering,
      ],
    },
  },
};

export default defaultData;
