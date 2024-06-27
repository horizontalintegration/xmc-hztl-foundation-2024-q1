/* eslint-disable prettier/prettier */
import { HeaderProps } from 'components/authorable/shared/site-structure/Header/headerInterface';

export const defaultData: HeaderProps = {
  rendering: { componentName: 'Default' },
  params: {},
  fields: {
    searchPlaceholder: { value: 'Search' },
    logoLink: {
      value: {
        text: '',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        target: '|Custom',
        querystring: '',
        id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
        href: '/',
      },
    },
    country: {
      id: '4dd3a8f6-62eb-448d-8e2a-76de2f533776',
      url: 'http://localhost/HztlFoundation/Global/Countries/US',
      name: 'US',
      displayName: 'US',
      fields: {
        flag: {
          value: {
            src: 'https://edge.sitecorecloud.io/horizontald8261-xmchztlfounf6cb-dev-2730/media/Project/HztlFoundation/shared/Countries/flag_us.png?h=30&iar=0&w=40',
            alt: 'us',
            width: '40',
            height: '30',
          },
        },
        name: {
          value: 'United States (English)',
        },
      },
    },
    logo: {
      value: {
        src: 'https://edge.sitecorecloud.io/horizontald8261-xmchztlfounf6cb-dev-2730/media/Project/HztlFoundation/SiteAlpha/Header/headerlogo.png?h=58&iar=0&w=90',
        alt: 'header logo',
        width: '90',
        height: '58',
      },
    },
    navigationList: [
      {
        id: 'c66695a6-9283-458a-817b-779baad2b4cb',
        url: '/Data/Site-Structure/Header/Products',
        name: 'Products',
        displayName: 'Products',
        fields: {
          megaMenuList: [],
          navigationLink: {
            value: {
              href: '',
            },
          },
          navigationTitle: {
            value: '',
          },
        },
      },
      {
        id: '333b5dd6-87cc-4f01-bdfa-ff106333a26d',
        url: '/Data/Site-Structure/Header/Articles',
        name: 'Articles',
        displayName: 'Articles',
        fields: {
          megaMenuList: [
            {
              id: '4875973c-5019-4316-9037-b64965fba072',
              url: '/Data/Site-Structure/Header/Articles/Category-1',
              name: 'Category 1',
              displayName: 'Category 1',
              fields: {
                megaMenuLinks: [
                  {
                    id: '1394a488-9591-4d53-ba7e-54a2eba896fd',
                    url: '/Data/Site-Structure/Header/Articles/Category-1/Link1',
                    name: 'Link1',
                    displayName: 'Link1',
                    fields: {
                      link: {
                        value: {
                          text: 'Link1',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          target: '|Custom',
                          querystring: '',
                          id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
                          href: '/',
                        },
                      },
                    },
                  },
                  {
                    id: '9067a7fa-8f7c-47ab-949a-53a7ec71ac33',
                    url: '/Data/Site-Structure/Header/Articles/Category-1/Link2',
                    name: 'Link2',
                    displayName: 'Link2',
                    fields: {
                      link: {
                        value: {
                          href: '',
                          text: 'Link2',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          target: '|Custom',
                          querystring: '',
                          id: '{E6FBDACF-CDDB-4C2A-BE21-685D34C6E638}',
                        },
                      },
                    },
                  },
                  {
                    id: 'a9fea5e7-7c0c-43a3-b3c6-8fa98356386c',
                    url: '/Data/Site-Structure/Header/Articles/Category-1/Link3',
                    name: 'Link3',
                    displayName: 'Link3',
                    fields: {
                      link: {
                        value: {
                          text: 'Link3',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          target: '|Custom',
                          querystring: '',
                          id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
                          href: '/',
                        },
                      },
                    },
                  },
                ],
                megaMenuTitle: {
                  value: 'Category 1',
                },
              },
            },
            {
              id: 'ce259d3d-4d1d-4ad9-99fa-45e8d9266878',
              url: '/Data/Site-Structure/Header/Articles/Category-2',
              name: 'Category 2',
              displayName: 'Category 2',
              fields: {
                megaMenuLinks: [
                  {
                    id: 'a8b6db46-6e05-4762-9bde-808502d7cbae',
                    url: '/Data/Site-Structure/Header/Articles/Category-2/Link1',
                    name: 'Link1',
                    displayName: 'Link1',
                    fields: {
                      link: {
                        value: {
                          text: 'Link1',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          target: '|Custom',
                          querystring: '',
                          id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
                          href: '/',
                        },
                      },
                    },
                  },
                  {
                    id: '21e9f7ff-6765-42a6-acbf-f0f18acf0b53',
                    url: '/Data/Site-Structure/Header/Articles/Category-2/Link2',
                    name: 'Link2',
                    displayName: 'Link2',
                    fields: {
                      link: {
                        value: {
                          href: '',
                          text: 'Link2',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          target: '|Custom',
                          querystring: '',
                          id: '{E6FBDACF-CDDB-4C2A-BE21-685D34C6E638}',
                        },
                      },
                    },
                  },
                  {
                    id: '59244927-eee2-4b07-b8a7-d086ecdc1a5e',
                    url: '/Data/Site-Structure/Header/Articles/Category-2/Link3',
                    name: 'Link3',
                    displayName: 'Link3',
                    fields: {
                      link: {
                        value: {
                          text: 'Link3',
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          target: '|Custom',
                          querystring: '',
                          id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
                          href: '/',
                        },
                      },
                    },
                  },
                ],
                megaMenuTitle: {
                  value: 'Category 2',
                },
              },
            },
          ],
          navigationLink: {
            value: {
              text: '',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '|Custom',
              querystring: '',
              id: '{7A588F45-CCEF-42DF-AF57-A64A59C89083}',
              href: '/Carousel-Page',
            },
          },
          navigationTitle: {
            value: 'Articles',
          },
        },
      },
      {
        id: '469f54c0-45b2-4fd2-8667-64aac54cfa76',
        url: '/Data/Site-Structure/Header/About-Us',
        name: 'About Us',
        displayName: 'About Us',
        fields: {
          megaMenuList: [],
          navigationLink: {
            value: {
              linktype: 'internal',
              id: '{7A588F45-CCEF-42DF-AF57-A64A59C89083}',
              anchor: '',
              querystring: '',
              target: '',
              class: '',
              text: '',
              title: '',
              href: '/Carousel-Page',
            },
          },
          navigationTitle: {
            value: 'About Us',
          },
        },
      },
      {
        id: 'af18415d-4981-45b4-a2a8-738fa72aa167',
        url: '/Data/Site-Structure/Header/Support',
        name: 'Support',
        displayName: 'Support',
        fields: {
          megaMenuList: [],
          navigationLink: {
            value: {
              text: '',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '|Custom',
              querystring: '',
              id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
              href: '/',
            },
          },
          navigationTitle: {
            value: 'Support',
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

