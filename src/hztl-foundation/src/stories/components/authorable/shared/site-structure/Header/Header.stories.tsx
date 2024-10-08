/* eslint-disable prettier/prettier */
// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Local
import defaultData from './Header.mock-data';
import { Default } from 'components/authorable/shared/site-structure/Header/Header';
import { HeaderProps } from 'components/authorable/shared/site-structure/Header/headerInterface';

const queryClient = new QueryClient();

const meta: Meta<typeof Default> = {
  argTypes: {
    'HeaderData.item.country.targetItems': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logo.jsonValue.value.alt': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logo.jsonValue.value.height': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logo.jsonValue.value.src': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logo.jsonValue.value.width': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logoLink.jsonValue.value.anchor': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logoLink.jsonValue.value.class': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logoLink.jsonValue.value.href': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logoLink.jsonValue.value.id': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logoLink.jsonValue.value.linktype': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logoLink.jsonValue.value.querystring': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logoLink.jsonValue.value.target': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logoLink.jsonValue.value.text': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.logoLink.jsonValue.value.title': {
      table: {
        category: 'HeaderData',
      },
    },
    'HeaderData.item.navigationList.items': {
      table: {
        category: 'HeaderData',
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
  decorators: [
    (Story) => (
      <div className="min-h-80">
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The Header component is a prominent section located at the top of a webpage that typically contains branding elements, primary navigation links, and sometimes user account controls (e.g., login/logout, profile settings). It serves as the first point of interaction for users, helping them navigate the website and understand the brand identity.

## Usage
Use the Header component to provide users with easy access to the main navigation of your site, such as links to key pages or sections (home, about, contact, etc.). It’s also the perfect place for displaying the company logo, search bars, and important user actions like account management or shopping cart icons. Ensure the header remains simple, intuitive, and responsive, particularly for mobile users. The header should remain consistent across the site for ease of use and help users orient themselves quickly.`,
      },
    },
  },
  title: 'Components/Authorable/shared/site-structure/Header',
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Header: Story = {
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as HeaderProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
