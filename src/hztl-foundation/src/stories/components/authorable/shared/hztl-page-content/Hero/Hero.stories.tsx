// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import { Default, HeroProps } from 'components/authorable/shared/hztl-page-content/Hero';
import defaultData from './Hero.mock-data';

const meta: Meta<typeof Default> = {
  argTypes: {
    'fields.cta1Link.value.anchor': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta1Link.value.class': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta1Link.value.href': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta1Link.value.id': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta1Link.value.linktype': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta1Link.value.querystring': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta1Link.value.target': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta1Link.value.text': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta1Link.value.title': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta2Link.value.anchor': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta2Link.value.class': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta2Link.value.href': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta2Link.value.id': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta2Link.value.linktype': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta2Link.value.querystring': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta2Link.value.target': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta2Link.value.text': {
      table: {
        category: 'fields',
      },
    },
    'fields.cta2Link.value.title': {
      table: {
        category: 'fields',
      },
    },
    'fields.Description.value': {
      table: {
        category: 'fields',
      },
    },
    'fields.Heading.value': {
      table: {
        category: 'fields',
      },
    },
    'fields.Image.value.alt': {
      table: {
        category: 'fields',
      },
    },
    'fields.Image.value.height': {
      table: {
        category: 'fields',
      },
    },
    'fields.Image.value.src': {
      table: {
        category: 'fields',
      },
    },
    'fields.Image.value.width': {
      table: {
        category: 'fields',
      },
    },
    'params.Styles': {
      table: {
        category: 'params',
      },
    },
    'rendering.dataSource': {
      table: {
        category: 'rendering',
      },
    },
    'rendering.componentName': {
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
The Hero component is a prominent, visually impactful section often placed at the top of a page. It typically contains a large background image or video, a bold headline, supporting text, and a call-to-action (CTA). The Hero section is designed to immediately grab the user's attention and convey the main message or purpose of the page.

## Usage
Use the Hero component when you want to create a strong first impression or highlight key content, such as promotions, brand messaging, or a featured product. The Hero section is perfect for landing pages, homepage introductions, or marketing campaigns. Ensure that the messaging is concise, the visuals are high-quality, and the call-to-action is clear and enticing to encourage user engagement.`,
      },
    },
  },
  title: 'Components/Authorable/shared/hztl-page-content/Hero',
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Hero: Story = {
  render: (args) => {
    const expandedArgs = expandObj({ ...args }) as Record<string, unknown>;
    return <Default {...(expandedArgs as unknown as HeroProps)} />;
  },
  args: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...flattenObj(defaultData as any),
  },
};
