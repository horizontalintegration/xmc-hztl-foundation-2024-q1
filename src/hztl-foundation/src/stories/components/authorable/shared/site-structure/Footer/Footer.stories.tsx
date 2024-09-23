/* eslint-disable prettier/prettier */
// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, FooterProps } from 'components/authorable/shared/site-structure/Footer/Footer';
import defaultData from './Footer.mock-data';

const meta: Meta<typeof Default> = {
  title: 'Components/Authorable/shared/site-structure/Footer',
  component: Default,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `

## Overview

The Footer component appears at the bottom of a webpage and provides a space for important navigational links, contact information, legal disclaimers, and social media icons. It typically serves as a hub for secondary information, helping users find key content, such as FAQs, support pages, or company details, while also reinforcing brand identity.

## Usage

Use the Footer component to provide users with easy access to essential links, such as site navigation, contact details, social media profiles, and legal information (e.g., privacy policy or terms of service). It’s ideal for ensuring users can navigate to important areas of the site from any page. Make sure the footer is structured for clarity, ensuring that all links and sections are organized logically. Also, consider adding a subscription form or additional calls to action (e.g., newsletter sign-up) to encourage ongoing user engagement.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Footer: Story = {
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as FooterProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
