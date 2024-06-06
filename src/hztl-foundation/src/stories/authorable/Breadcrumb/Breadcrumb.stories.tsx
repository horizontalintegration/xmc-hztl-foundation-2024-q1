// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { flattenObj } from 'lib/object-parser';

// Local
import BreadCrumbData from './Breadcrumb.mock-data';
import Breadcrumb from 'components/authorable/shared/hztl-page-content/Breadcrumb/Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Authorable/Landmarks/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => {
    return <Breadcrumb {...BreadCrumbData} />;
  },
  args: {
    ...flattenObj(BreadCrumbData),
  },
};
