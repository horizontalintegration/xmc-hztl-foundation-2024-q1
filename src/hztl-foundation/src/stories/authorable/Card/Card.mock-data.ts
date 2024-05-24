import { CardProps } from './Card';

const defaultData: CardProps = {
  rendering: { componentName: 'Card' },
  params: {},
  fields: {
    eyebrow: {
      value: 'Eyebrow',
    },
    cardImage: {
      value:
        '<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon/Solid/photograph" opacity="0.3"><path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M9.59999 7.70001C6.94902 7.70001 4.79999 9.84905 4.79999 12.5V36.5C4.79999 39.151 6.94902 41.3 9.59999 41.3H38.4C41.051 41.3 43.2 39.151 43.2 36.5V12.5C43.2 9.84905 41.051 7.70001 38.4 7.70001H9.59999ZM38.4 36.5H9.59999L19.2 17.3L26.4 31.7L31.2 22.1L38.4 36.5Z" fill="#2F2D2E" /></g></svg>',
    },
    heading: {
      value: 'Services',
    },
    subHeading: {
      value: 'Subheading',
    },
    description: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    learnMoreBtn: {
      value: {
        href: 'https://www.horizontaldigital.com',
        text: 'Learn More',
        linktype: 'external',
      },
    },
    downloadBtn: {
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
