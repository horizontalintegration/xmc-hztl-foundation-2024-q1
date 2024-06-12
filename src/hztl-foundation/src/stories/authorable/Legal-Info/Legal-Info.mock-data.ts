import { LegalInfoProps } from '../../../components/authorable/shared/hztl-page-content/LegalInfo';

const defaultData: LegalInfoProps = {
  rendering: { componentName: 'Default' },
  params: {},
  fields: {
    CopyrightInfo: {
      value: 'Copyright lorem ipsum',
    },
    NavigationMenu: [
      {
        name: 'Legal Link1',
        displayName: { value: 'Legal Link' },
        fields: {
          Link: {
            value: {
              href: 'https://www.horizontaldigital.com',
              text: 'Legal Link',
              linktype: 'external',
              target: '_blank',
            },
          },
        },
      },
      {
        name: 'Legal Link2',
        displayName: { value: 'Legal Link' },
        fields: {
          Link: {
            value: {
              href: 'https://www.horizontaldigital.com',
              text: 'Legal Link',
              linktype: 'external',
              target: '_blank',
            },
          },
        },
      },
      {
        name: 'Legal Link3',
        displayName: { value: 'Legal Link' },
        fields: {
          Link: {
            value: {
              href: 'https://www.horizontaldigital.com',
              text: 'Legal Link',
              linktype: 'external',
              target: '_blank',
            },
          },
        },
      },
      {
        name: 'Legal Link4',
        displayName: { value: 'Legal Link' },
        fields: {
          Link: {
            value: {
              href: 'https://www.horizontaldigital.com',
              text: 'Legal Link',
              linktype: 'external',
              target: '_blank',
            },
          },
        },
      },
    ],
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
