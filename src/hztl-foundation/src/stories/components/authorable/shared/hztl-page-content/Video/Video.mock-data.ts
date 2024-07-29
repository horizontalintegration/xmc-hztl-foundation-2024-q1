import { VideoProps } from 'components/authorable/shared/hztl-page-content/Video';

const defaultData: VideoProps = {
  fields: {
    AutoPlay: {
      value: false,
    },
    Controls: {
      value: true,
    },
    Cta: {
      className: '',
      ctaIconAlignment: 'right',
      id: 'buttonId',
      disabled: false,
      onClick: undefined,
      ctaVariant: 'primary',
      text: 'Modal Trigger',
      title: 'Modal Trigger',
      type: 'button',
    },
    Description: {
      value: '',
    },
    Fluid: {
      value: false,
    },
    Height: {
      value: 'auto',
    },
    Loop: {
      value: false,
    },
    Modal: {
      content: undefined,
      id: '2845070A-AEBD-4B45-A59D-88269B081204',
      label: 'Modal',
      openOnLoad: false,
      size: 'large',
      title: 'Modal with Video',
      trigger: 'Button',
    },
    Muted: {
      value: false,
    },
    OpenInModal: {
      value: false,
    },
    Poster: {
      value: './assets/videos/oceans.png',
    },
    Sources: {
      value: [{ src: './assets/videos/oceans.mp4', type: 'video/mp4' }],
    },
    Title: {
      value: 'This is a video component with autoplay and loop',
    },
    Width: {
      value: 600,
    },
  },
  params: {
    DynamicPlaceholderId: '12',
    FieldNames: 'Default',
    GridParameters: 'basis-full',
  },
};

export const modalVideoData: VideoProps = {
  ...defaultData,
  fields: {
    ...defaultData.fields,
    Fluid: {
      value: true,
    },
    Height: {
      value: undefined,
    },
    OpenInModal: {
      value: true,
    },
    Width: {
      value: undefined,
    },
  },
};

export const noData = {
  params: [],
  rnder: {},
};

export default defaultData;
