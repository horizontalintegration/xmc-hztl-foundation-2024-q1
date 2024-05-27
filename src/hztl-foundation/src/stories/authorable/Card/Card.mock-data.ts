import { CardProps } from '../../../components/authorable/shared/hztl-page-content/Card';

const defaultData: CardProps = {
  rendering: { componentName: 'Default' },
  params: {},
  fields: {
    Eyebrow: {
      value: 'Eyebrow',
    },
    CardImage: {
      value: {
        src: 'https://dummyimage.com/48x48/000/fff',
        alt: 'Image Alt text',
        title: 'Image title',
        width: 48,
        height: 48,
      },
    },
    Heading: {
      value: 'Services',
    },
    SubHeading: {
      value: 'Subheading',
    },
    Description: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    CardLink1: {
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
