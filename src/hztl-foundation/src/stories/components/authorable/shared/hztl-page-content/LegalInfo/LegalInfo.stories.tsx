// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, LegalInfoProps } from 'components/authorable/shared/hztl-page-content/LegalInfo';
import defaultData from './LegalInfo.mock-data';

const meta: Meta<typeof Default> = {
  title: 'Components/Authorable/shared/hztl-page-content/Legal Info',
  component: Default,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `

## Overview

The Legal Info component displays important legal information, such as terms of service, privacy policies, disclaimers, or compliance notices. It is typically presented in a straightforward and readable format to ensure users are aware of the legal requirements, policies, or restrictions associated with using the website or service.

## Usage

Use the Legal Info component when you need to provide users with critical legal documentation or information related to their use of the site, product, or service. This component is commonly placed in footers, settings pages, or as part of agreements that require user consent. Make sure the text is clear and accessible, using well-structured sections and links for users to easily navigate complex legal language. Ensure compliance with legal standards and keep the content up to date with regulations.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Default>;

export const LegalInfo: Story = {
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as LegalInfoProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
