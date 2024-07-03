/* eslint-disable prettier/prettier */
import { AccordionProps } from 'components/authorable/shared/hztl-page-content/AccordionItem';
const defaultData: AccordionProps = {
  rendering: { componentName: 'Default' },
  params: {
    DynamicPlaceholderId: '1',
    FieldNames: 'Default',
  },
  fields: {
    content: {
      value:
        '&#8203;<p>Etiam ut purus mattis mauris sodales aliquam. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Pellentesque posuere. Aliquam lobortis. Maecenas nec odio et ante tincidunt tempus.</p>\n<p>Fusce a quam. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Duis vel nibh at velit scelerisque suscipit. Ut a nisl id ante tempus hendrerit. Nam eget dui.</p>\n<!-- Using multiple sources as fallbacks for a video tag -->\n<!-- \'Elephants Dream\' by Orange Open Movie Project Studio, licensed under CC-3.0, hosted by archive.org -->\n<!-- Poster hosted by Wikimedia -->\n<video width="620" poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg">\n<source src="https://archive.org/download/ElephantsDream/ed_hd.ogv" type="video/ogg"></source>\n<source src="https://archive.org/download/ElephantsDream/ed_hd.avi" type="video/avi"></source>\n<source src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4" type="video/mp4"></source>\nSorry, your browser doesn\'t support embedded videos, but don\'t worry, you can\n<a href="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4" download="ed_1024_512kb.mp4">\ndownload the MP4\n</a>\nand watch it with your favorite video player!\n</video>&#8203;',
    },
    heading: { value: 'Pellentesque habitant ante' },
  },
};

export default defaultData;

