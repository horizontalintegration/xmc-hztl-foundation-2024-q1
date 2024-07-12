import { VideoProps } from '../../../../components/authorable/hztl-page-content/Video';

const defaultData: VideoProps = {
  rendering: { componentName: 'Default' },
  params: {
    GridParameters: 'basis-full',
    DynamicPlaceholderId: '12',
    FieldNames: 'Default',
  },
  fields: {
    YoutubeId: {
      value: 'ENytl8FzTEg',
    },
    SelectFile: {
      value: {
        src: 'https://edge.sitecorecloud.io/horizontald8261-xmchztlfounf6cb-dev-2730/media/Project/HztlFoundation/SiteAlpha/placeholder-video.mp4',
        name: 'placeholder-video',
        displayName: 'placeholder-video',
        title: '',
        keywords: '',
        description: '',
        extension: 'mp4',
        mimeType: 'video/mp4',
        size: '528057',
      },
    },
    Title: {
      value: 'This is a Modal component containing video',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
