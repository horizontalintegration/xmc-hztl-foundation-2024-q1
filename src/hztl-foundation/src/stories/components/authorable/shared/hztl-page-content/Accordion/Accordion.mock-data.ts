// Local
import { AccordionProps } from 'components/authorable/shared/hztl-page-content/AccordionItem';

const defaultData: AccordionProps = {
  fields: {
    content: {
      value:
        '<p><img src="https://dummyimage.com/600x400/cfcdc8/2f2d2e" alt="dummyimage"></p><h3>Feature that is amazing</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ul><li>Benefit of Feature</li><li>Benefit of Feature</li><li>Benefit of Feature</li></ul>',
    },
    heading: { value: 'Pellentesque habitant ante' },
  },
  params: {
    DynamicPlaceholderId: '1',
    FieldNames: 'Default',
  },
  rendering: { componentName: 'Default', dataSource: 'Storybook' },
};

export default defaultData;
