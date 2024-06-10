import { HeroProps } from '../../../components/authorable/shared/hztl-page-content/Hero';

const defaultData: HeroProps = {
  rendering: { componentName: 'Default' },
  params: {},
  fields: {
    Description: {
      value:
        '<span style="color: #27272a; background-color: #ffffff;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>',
    },
    Heading: {
      value: 'Experience Forward',
    },
    Image: {
      value: {
        src: 'https://edge.sitecorecloud.io/horizontald8261-xmchztlfounf6cb-dev-2730/media/Project/HztlFoundation/SiteAlpha/placeholder-image.png?h=600&iar=0&w=800',
        alt: 'wireframe',
        width: '1200',
        height: '750',
      },
    },
    Link1: {
      value: {
        text: 'Click here',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        target: '_blank',
        querystring: '',
        id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
        href: '/',
      },
    },
    Link2: {
      value: {
        text: 'Click here',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        target: '_blank',
        querystring: '',
        id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
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
