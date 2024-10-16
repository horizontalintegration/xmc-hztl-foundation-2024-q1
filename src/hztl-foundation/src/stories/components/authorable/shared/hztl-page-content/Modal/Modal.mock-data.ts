// Global
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import { default as inlineVideoData } from 'stories/components/authorable/shared/hztl-page-content/InlineVideo/InlineVideo.mock-data';
import { ModalProps } from 'components/authorable/shared/hztl-page-content/Modal';

const defaultData: ModalProps = {
  fields: {
    id: { value: '' },
    label: { value: 'Modal' },
    name: { value: 'uniquemodalidentifier' },
    openOnLoad: { value: false },
    size: { value: 'large' },
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
};

export const noData = {
  params: [],
  rnder: {},
};

export default defaultData;
