import { InlineVideoProps } from 'components/authorable/shared/hztl-page-content/InlineVideo';

const defaultData: InlineVideoProps = {
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
        id: '7eb8cab1-a2ac-4f09-ae0b-64023717a23e',
        url: './assets/videos/oceans.mp4',
        name: 'placeholder-video',
        displayName: 'placeholder-video',
        fields: {
          Description: {
            value: '',
          },
          Extension: {
            value: 'mp4',
          },
          Keywords: {
            value: '',
          },
          'Mime Type': {
            value: 'video/mp4',
          },
          Size: {
            value: '528057',
          },
          Title: {
            value: '',
          },
          CountryCode: {
            value: '',
          },
          LocationDescription: {
            value: '',
          },
          ZipCode: {
            value: '',
          },
          Blob: {
            value: '3baf8125-1c01-4c84-ab49-9ea054b76017',
          },
          'File Path': {
            value: '',
          },
          Format: {
            value: '',
          },
        },
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
};

export const noData = {
  params: [],
  rnder: {},
};

export default defaultData;
