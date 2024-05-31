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
        src: 'https://dummyimage.com/450x299/000/fff',
        alt: 'Image Alt text',
        title: 'Image title',
        width: 450,
        height: 299,
      },
    },
    Heading: {
      value: 'Services',
    },
    Subheading: {
      value: 'Subheading',
    },
    Description: {
      value:
        '<p>Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do eiusmod tempor incididunt<br> ut labore et dolore magna aliqua.</p>',
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
