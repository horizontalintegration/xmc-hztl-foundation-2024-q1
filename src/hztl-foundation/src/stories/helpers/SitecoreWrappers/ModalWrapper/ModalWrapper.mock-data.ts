import { ModalWrapperProps } from 'helpers/SitecoreWrappers/ModalWrapper/ModalWrapper';

/*
 * Mock Modal Data
 */

const defaultData: ModalWrapperProps = {
  content: 'Text',
  id: '2845070A-AEBD-4B45-A59D-88269B081204',
  label: 'Modal',
  openOnLoad: false,
  size: 'large',
  title: 'Title',
  trigger: 'Button',
};

export const modalWithAnchorAsTriggerData: ModalWrapperProps = {
  ...defaultData,
  content: 'Text',
  id: '2845070A-AEBD-4B45-A59D-88269B081205',
  label: 'Modal with Anchor as Trigger',
  openOnLoad: false,
  title: 'Title with Anchor Link as Trigger',
  trigger: 'Anchor',
};

export const modalWithRichTextTitleData: ModalWrapperProps = {
  ...defaultData,
  content: 'Text',
  id: '2845070A-AEBD-4B45-A59D-88269B081206',
  label: 'Modal with Video',
  openOnLoad: false,
  title: 'Title with Markup',
  trigger: 'Button',
};

export const modalWithVideoData: ModalWrapperProps = {
  ...defaultData,
  content: 'Video',
  id: '2845070A-AEBD-4B45-A59D-88269B081207',
  label: 'Modal with Video',
  openOnLoad: false,
  title: 'Title',
  trigger: 'Button',
};

/*
 * Mock Embedded Component Data
 */

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

export default defaultData;
