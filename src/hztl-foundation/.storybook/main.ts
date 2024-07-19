import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook',
  ],
  env: (config) => ({
    ...config,
    IS_STORYBOOK: 'true',
  }),
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {},
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
