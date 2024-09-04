import { CardListProps } from 'components/authorable/shared/hztl-page-content/CardList';

const cardList = [
  {
    componentName: 'Card',
    dataSource: '{843DC614-0990-49B0-AF51-D3ECDAFD64CE}',
    params: {
      GridParameters: 'basis-full',
      FieldNames: 'Default',
      Styles: 'cta1:ctaVariant:primary cta2:ctaVariant:secondary',
      DynamicPlaceholderId: '11',
    },
    uid: 'e638f904-8b30-4a51-9eb9-3008bf26e5b3',
    fields: {
      Eyebrow: {
        value: 'Eyebrow 1',
      },
      Heading: {
        value: 'Heading 1',
      },
      Subheading: {
        value: 'Subheading 1',
      },
      CardImage: {
        value: {
          src: 'https://dummyimage.com/900x600/000/fff',
          alt: 'Image Alt text',
          title: 'Image title',
          width: '100%',
          height: 'auto',
        },
      },
      CardLink1: {
        value: {
          linktype: 'internal',
          id: '0e789cbb-8de4-4b66-ac09-69b1a4359003',
          anchor: '',
          querystring: 'sc_site=SiteAlpha',
          target: '_blank',
          class: '',
          text: 'Read more',
          title: '',
          href: '/Services',
        },
      },
      CardLink2: {
        value: {
          href: 'https://www.bing.com',
          linktype: 'external',
          url: 'https://www.bing.com',
          target: '',
          text: 'Download',
          title: '',
          class: '',
        },
      },
      Description: {
        value:
          '<p>Vivamus aliquet elit ac nisl. Fusce neque. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</p>',
      },
    },
  },
  {
    componentName: 'Card',
    dataSource: '{843DC614-0990-49B0-AF51-D3ECDAFD64CF}',
    params: {
      GridParameters: 'basis-full',
      FieldNames: 'Default',
      Styles: 'cta1:ctaVariant:primary cta2:ctaVariant:secondary',
      DynamicPlaceholderId: '12',
    },
    uid: 'e638f904-8b30-4a51-9eb9-3008bf26e5b4',
    fields: {
      Eyebrow: {
        value: 'Eyebrow 2',
      },
      Heading: {
        value: 'Heading 2',
      },
      Subheading: {
        value: 'Subheading 2',
      },
      CardImage: {
        value: {
          src: 'https://dummyimage.com/900x600/000/fff',
          alt: 'Image Alt text',
          title: 'Image title',
          width: '100%',
          height: 'auto',
        },
      },
      CardLink1: {
        value: {
          linktype: 'internal',
          id: '0e789cbb-8de4-4b66-ac09-69b1a4359003',
          anchor: '',
          querystring: 'sc_site=SiteAlpha',
          target: '_blank',
          class: '',
          text: 'Read more',
          title: '',
          href: '/Services',
        },
      },
      CardLink2: {
        value: {
          href: 'https://www.bing.com',
          linktype: 'external',
          url: 'https://www.bing.com',
          target: '',
          text: 'Download',
          title: '',
          class: '',
        },
      },
      Description: {
        value:
          '<p>Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Cum sociis natoque.</p><p>Integer tincidunt. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod.</p>',
      },
    },
  },
  {
    componentName: 'Card',
    dataSource: '{843DC614-0990-49B0-AF51-D3ECDAFD64CG}',
    params: {
      GridParameters: 'basis-full',
      FieldNames: 'Default',
      Styles: 'cta1:ctaVariant:primary cta2:ctaVariant:secondary',
      DynamicPlaceholderId: '13',
    },
    uid: 'e638f904-8b30-4a51-9eb9-3008bf26e5b5',
    fields: {
      Eyebrow: {
        value: 'Eyebrow 3',
      },
      Heading: {
        value: 'Heading 3',
      },
      Subheading: {
        value: 'Subheading 3',
      },
      CardImage: {
        value: {
          src: 'https://dummyimage.com/900x600/000/fff',
          alt: 'Image Alt text',
          title: 'Image title',
          width: '100%',
          height: 'auto',
        },
      },
      CardLink1: {
        value: {
          linktype: 'internal',
          id: '0e789cbb-8de4-4b66-ac09-69b1a4359003',
          anchor: '',
          querystring: 'sc_site=SiteAlpha',
          target: '_blank',
          class: '',
          text: 'Read more',
          title: '',
          href: '/Services',
        },
      },
      CardLink2: {
        value: {
          href: 'https://www.bing.com',
          linktype: 'external',
          url: 'https://www.bing.com',
          target: '',
          text: 'Download',
          title: '',
          class: '',
        },
      },
      Description: {
        value:
          '<p>Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Curabitur suscipit suscipit tellus. Donec venenatis vulputate lorem.</p>',
      },
    },
  },
];

const defaultData: CardListProps = {
  params: {
    cardsPerRow: '3',
    DynamicPlaceholderId: '1',
  },
  rendering: {
    componentName: 'Card List',
    dataSource: 'Storybook',
    placeholders: {
      'cardlist-1': cardList,
    },
  },
};

export default defaultData;
