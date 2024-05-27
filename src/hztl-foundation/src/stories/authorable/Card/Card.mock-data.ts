import { CardProps } from '../../../components/authorable/shared/hztl-page-content/Card';

const defaultData: CardProps = {
  rendering: { componentName: 'Default' },
  params: {},
  fields: {
    CardEyebrow: {
      value: 'Eyebrow',
    },
    CardImage: {
      value:{
        src:"https://dummyimage.com/48x48/000/fff",
        alt:'Image Alt text',
        title:'Image title',
        width:48,
        height:48,
      }
    },
    CardTitle: {
      value: 'Services',
    },
    CardText: {
      value: 'Subheading',
    },
    CardText2: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    CardLink: {
      value: {
        href: 'https://www.horizontaldigital.com',
        text: 'Learn More',
        linktype: 'external',
      },
    },
    CardLink2: {
      value: {
        href: 'https://www.horizontaldigital.com',
        text: 'Download',
        linktype: 'external',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
