// Global
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import { default as inlineVideoData } from 'stories/components/authorable/shared/hztl-page-content/InlineVideo/InlineVideo.mock-data';
import { ModalProps } from 'components/authorable/shared/hztl-page-content/Modal';

const defaultData: ModalProps = {
  fields: {
    id: { value: '' },
    label: { value: 'Modal' },
    openOnLoad: { value: false },
    size: {
      displayName: '',
      fields: {
        SizeLabel: { value: 'large' },
      },
      id: '',
      name: '',
      url: '',
    },
    title: { value: 'Title' },
  },
  params: {
    DynamicPlaceholderId: '1',
  },
  rendering: {
    componentName: 'Modal',
    dataSource: 'Storybook',
    placeholders: {
      'modal-1': [inlineVideoData as ComponentRendering],
    },
  },
  uid: '2845070A-AEBD-4B45-A59D-88269B081204',
  dataSource: 'Storybook',
};

export const noData = {
  params: [],
  rnder: {},
};

export default defaultData;
