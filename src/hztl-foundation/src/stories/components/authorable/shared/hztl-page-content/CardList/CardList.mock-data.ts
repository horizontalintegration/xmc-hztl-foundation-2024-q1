// Global
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import { CardListProps } from 'components/authorable/shared/hztl-page-content/CardList';
import {
  CardItemA,
  CardItemB,
  CardItemC,
} from 'stories/components/authorable/shared/hztl-page-content/CardItem/CardItem.mock-data';

const defaultData: CardListProps = {
  params: {
    cardsPerRow: '3',
    DynamicPlaceholderId: '1',
  },
  rendering: {
    componentName: 'Card List',
    dataSource: 'Storybook',
    placeholders: {
      'cardlist-1': [
        CardItemA as ComponentRendering,
        CardItemB as ComponentRendering,
        CardItemC as ComponentRendering,
      ],
    },
  },
};

export default defaultData;
