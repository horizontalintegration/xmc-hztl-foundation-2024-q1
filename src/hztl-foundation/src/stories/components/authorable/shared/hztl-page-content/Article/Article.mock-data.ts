// Local
import { ArticleProps } from 'components/authorable/shared/hztl-page-content/Article';

const articleData: ArticleProps = {
  componentName: 'Article',
  dataSource: '{843DC614-0990-49B0-AF51-D6HCDAFD64CE}',
  fields: {
    Description: {
      value:
        '<p>Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do eiusmod tempor incididunt<br> ut labore et dolore magna aliqua.</p>',
    },
    Eyebrow: {
      value: 'Eyebrow',
    },
    Heading: {
      value: 'Article Heading',
    },
    Image: {
      value: {
        src: 'https://dummyimage.com/395x300/cfcdc8/2f2d2e',
        alt: 'Image Alt text',
        title: 'Image title',
      },
    },
    ReadMoreCTA: {
      value: {
        href: '#',
        text: 'Read More',
        linktype: 'internal',
        target: '',
      },
    },
    Subheading: {
      value: 'Article Subheading',
    },
  },
  params: { DynamicPlaceholderId: '11', FieldNames: 'Default', styles: '' },
  rendering: { componentName: 'Default', dataSource: 'Storybook' },
  uid: '843DC614-0990-49B0-AF51-D6HCDAFD64CE',
};

export default articleData;
