// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, RTEProps } from 'components/authorable/shared/hztl-page-content/RTE';
import defaultData from './RTE.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {
    'fields.text.value': {
      table: {
        category: 'feilds',
      },
    },
    'rendering.componentName': {
      table: {
        category: 'rendering',
      },
    },
    'rendering.dataSource': {
      table: {
        category: 'rendering',
      },
    },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } as any,
  component: Default,
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The RTE component provides a way to allow content authors enter rich text and HTML via Sitecore and to safely render it into a component or page.

## Usage
Use the RTE component when content authors need the ability to add arbitrary, formatted content to a component. Discourage use of this component for creating full page "layouts."`,
      },
    },
  },
  title: 'Components/Authorable/shared/hztl-page-content/RTE',
};

export default meta;

type Story = StoryObj<typeof Default>;

export const RTE: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as RTEProps)} />;
  },
};
