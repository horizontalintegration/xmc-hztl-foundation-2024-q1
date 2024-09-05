import { InlineVideoProps } from 'components/authorable/shared/hztl-page-content/InlineVideo';

const defaultData: InlineVideoProps = {
  componentName: 'Inline Video',
  dataSource: '{22DFDD15-B06E-4E81-8A4D-A807C3811E8C}',
  fields: {
    autoplay: {
      value: false,
    },
    captions: [],
    controls: {
      value: true,
    },
    fluid: {
      value: true,
    },
    height: {
      value: 'auto',
    },
    loop: {
      value: false,
    },
    muted: {
      value: false,
    },
    poster: {
      value: {
        src: './assets/videos/oceans.png',
        alt: 'carousel img',
        width: '600',
        height: '250',
      },
    },
    sources: [
      {
        description: '',
        displayName: 'placeholder-video',
        extension: 'mp4',
        keywords: '',
        mimeType: 'video/mp4',
        name: 'placeholder-video',
        size: '528057',
        src: './assets/videos/oceans.mp4',
        title: '',
      },
    ],
    subtitles: [],
    width: {
      value: '600px',
    },
  },
  params: {
    DynamicPlaceholderId: '11',
    FieldNames: 'Default',
    GridParameters: 'basis-full',
  },
  rendering: { componentName: 'Default', dataSource: 'Storybook' },
  uid: '3ccb2dea-b9e1-4580-bb04-e9146b6f1319',
};

export const noData = {
  params: [],
  rnder: {},
};

export default defaultData;
