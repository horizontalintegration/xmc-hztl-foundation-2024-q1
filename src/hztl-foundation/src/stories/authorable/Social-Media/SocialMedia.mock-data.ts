import { SocialMediaProps } from '../../../components/authorable/shared/hztl-page-content/SocialMedia';

const defaultData: SocialMediaProps = {
  rendering: { componentName: 'Default' },
  params: {},
  fields: {
    IconList: [
      {
        Icon: {
          value: {
            src: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/instagram-512.png',
            alt: 'Instagram Icon',
            title: 'Instagram Icon',
            width: 24,
            height: 24,
          },
        },
        Link: {
          value: {
            href: 'https://www.instagram.com/',
            linktype: 'external',
            target: '_blank',
          },
        },
      },
      {
        Icon: {
          value: {
            src: 'https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_glyph_svg-256.png',
            alt: 'Facebook Icon',
            title: 'Facebook Icon',
            width: 24,
            height: 24,
          },
        },
        Link: {
          value: {
            href: 'https://www.facebook.com/',
            linktype: 'external',
            target: '_blank',
          },
        },
      },
      {
        Icon: {
          value: {
            src: 'https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Pinterest_glyph_svg-256.png',
            alt: 'Pinterest Icon',
            title: 'Pinterest Icon',
            width: 24,
            height: 24,
          },
        },
        Link: {
          value: {
            href: 'https://www.pinterest.com/',
            linktype: 'external',
            target: '_blank',
          },
        },
      },
      {
        Icon: {
          value: {
            src: 'https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/512/tiktok-256.png',
            alt: 'Tiktok Icon',
            title: 'Tiktok Icon',
            width: 24,
            height: 24,
          },
        },
        Link: {
          value: {
            href: 'https://www.tiktok.com/about',
            linktype: 'external',
            target: '_blank',
          },
        },
      },
      {
        Icon: {
          value: {
            src: 'https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png',
            alt: 'Youtube Icon',
            title: 'Youtube Icon',
            width: 24,
            height: 24,
          },
        },
        Link: {
          value: {
            href: 'https://www.youtube.com/',
            linktype: 'external',
            target: '_blank',
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
