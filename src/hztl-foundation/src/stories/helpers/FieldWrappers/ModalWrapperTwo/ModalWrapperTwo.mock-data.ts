import { ModalWrapperTwoProps } from 'helpers/SitecoreWrappers/ModalWrapperTwo/ModalWrapperTwo';

const defaultData: ModalWrapperTwoProps = {
  contentChildren: 'Text',
  fields: {
    title: {
      value: 'Modal',
    },
  },
  openOnLoad: false,
  params: {
    GridParameters: 'basis-full',
    DynamicPlaceholderId: '2845070A-AEBD-4B45-A59D-88269B081204',
    FieldNames: 'Default',
  },
  rendering: { componentName: 'Default' },
  size: 'large',
  triggerChildren: 'Button',
};

export const embeddedVideoData = {
  rendering: { componentName: 'Default' },
  params: {
    GridParameters: 'basis-full',
    DynamicPlaceholderId: '2845070A-AEBD-4B45-A59D-88269B081212',
    FieldNames: 'Default',
  },
  fields: {
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
      value: 'Video Modal Demo',
    },
    YoutubeId: {
      value: 'ENytl8FzTEg',
    },
  },
};

export const modalWithVideotData: ModalWrapperTwoProps = {
  ...defaultData,
  contentChildren: 'Video',
  fields: {
    title: {
      value: 'Modal with Video',
    },
  },
  openOnLoad: false,
  params: {
    GridParameters: 'basis-full',
    DynamicPlaceholderId: '2845070A-AEBD-4B45-A59D-88269B081204',
    FieldNames: 'Default',
  },
  rendering: { componentName: 'Default' },
  size: 'large',
  triggerChildren: 'Button',
};

export default defaultData;
