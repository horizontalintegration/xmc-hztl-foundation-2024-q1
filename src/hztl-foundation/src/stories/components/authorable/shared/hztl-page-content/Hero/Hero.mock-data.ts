import { HeroProps } from 'components/authorable/shared/hztl-page-content/Hero';

const defaultData: HeroProps = {
  rendering: { componentName: 'Default', dataSource: 'Storybook' },
  params: {
    Styles: 'cta1:ctaVariant:primary cta2:ctaVariant:secondary',
  },
  fields: {
    Image: {
      value: {
        src: 'https://dummyimage.com/650x480/cfcdc8/2f2d2e',
        alt: 'placeholder_gray_4by3',
        width: '800',
        height: '600',
      },
    },
    Description: {
      value:
        '<span style="color: #27272a; background-color: #ffffff;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>',
    },
    Heading: {
      value: 'Experience Forward',
    },
    cta1Link: {
      value: {
        text: 'Primary button',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: 'cta1 title',
        target: '',
        querystring: '',
        id: '{E9ABAFA1-377C-4577-A419-9A3A804HF435}',
        href: '/',
      },
    },
    cta2Link: {
      value: {
        text: 'Secondary buttton',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: 'cta2 title',
        target: '',
        querystring: '',
        id: '{E9ABAFA1-377C-4577-A419-9A3A8044D432}',
        href: '/',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
