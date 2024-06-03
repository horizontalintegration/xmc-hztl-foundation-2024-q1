import type { Meta, StoryObj } from '@storybook/react';
import { Default as Footer } from '../../../components/authorable/shared/hztl-page-content/Footer';
import { expandObj, flattenObj } from 'lib/object-parser';
import { defaultData } from './Footer.mock-data';

const meta: Meta<typeof Footer> = {
  title: 'Example/Footer',
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: (args) => {
    return <Footer {...(expandObj({ ...args }) as any)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};

