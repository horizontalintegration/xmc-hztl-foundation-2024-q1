import { HeaderCountry } from 'components/authorable/shared/site-structure/Header/headerInterface';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export const mockCountryData: HeaderCountry[] = [
  {
    language: {
      jsonValue: {
        displayName: 'United States',
        fields: { language: { value: 'en-US' } },
        id: '1',
        name: 'United States',
        url: '/us',
      },
    },
    flag: {
      jsonValue: {
        value: {
          src: 'https://flagcdn.com/w320/us.png',
          alt: 'US Flag',
          width: '320',
          height: '250',
        },
      } as ImageField,
    },
    name: 'United States',
  },
  {
    language: {
      jsonValue: {
        displayName: 'Canada',
        fields: { language: { value: 'fr-CA' } },
        id: '2',
        name: 'Canada',
        url: '/ca',
      },
    },
    flag: {
      jsonValue: {
        value: {
          src: 'https://flagcdn.com/w320/ca.png',
          alt: 'Canada Flag',
          width: '320',
          height: '250',
        },
      } as ImageField,
    },
    name: 'Canada',
  },
  {
    language: {
      jsonValue: {
        displayName: 'Mexico',
        fields: { language: { value: 'es-MX' } },
        id: '3',
        name: 'Mexico',
        url: '/mx',
      },
    },
    flag: {
      jsonValue: {
        value: {
          src: 'https://flagcdn.com/w320/mx.png',
          alt: 'Mexico Flag',
          width: '320',
          height: '250',
        },
      } as ImageField,
    },
    name: 'Mexico',
  },
  {
    language: {
      jsonValue: {
        displayName: 'UAE',
        fields: { language: { value: 'ar-AE' } },
        id: '4',
        name: 'UAE',
        url: '/uae',
      },
    },
    flag: {
      jsonValue: {
        value: {
          src: 'https://flagcdn.com/w320/ae.png',
          alt: 'UAE Flag',
          width: '320',
          height: '250',
        },
      } as ImageField,
    },
    name: 'UAE',
  },
];
