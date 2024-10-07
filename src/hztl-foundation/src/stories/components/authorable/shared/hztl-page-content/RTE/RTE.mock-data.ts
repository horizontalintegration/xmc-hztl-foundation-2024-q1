// Local
import { RTEProps } from 'components/authorable/shared/hztl-page-content/RTE';

const defaultData: RTEProps = {
  fields: {
    text: {
      value:
        '<p><img src="https://dummyimage.com/600x400/cfcdc8/2f2d2e" alt="dummyimage"></p><h3>Feature that is amazing</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ul><li>Benefit of Feature</li><li>Benefit of Feature</li><li>Benefit of Feature</li></ul>',
    },
  },
  params: {},
  rendering: { componentName: 'Default', dataSource: 'Storybook' },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
