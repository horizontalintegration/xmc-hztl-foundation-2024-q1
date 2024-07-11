const defaultData = {
  className: 'underline hover:no-underline',
  field: {
    value: {
      href: 'https://www.horizontaldigital.com',
      text: 'Link with new tab screen reader text',
      linktype: 'external',
      target: '_blank',
    },
  },
  suppressNewTabIcon: false,
  suppressLinkText: false,
  srOnlyText: 'Only screen readers can access this text',
  fields: {
    cta1Icon: {
      id: '988dc3a4-c405-4f51-bb3e-02303e5acc67',
      url: 'http://localhost/HztlFoundation/Global/Enums/CTA-Icons/Arrow-Right',
      name: 'Arrow Right',
      displayName: 'Arrow Right',
      fields: {
        Value: {
          value: 'arrow-right',
        },
      },
    },
    cta1IconAlignment: {
      id: '26d6166e-5e1c-40db-b3f3-d15503c7e0f7',
      url: 'http://localhost/HztlFoundation/Global/Enums/CTA-Icon-Alignment/Right',
      name: 'Right',
      displayName: 'Right',
      fields: {
        Value: {
          value: 'right',
        },
      },
    },
    cta1Link: {
      value: {
        text: 'cta1 link',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        target: '',
        querystring: '',
        id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
        href: '/',
      },
    },
    cta1Style: {
      id: 'ce05a775-0e98-4085-ab75-ed8a1957a06f',
      url: 'http://localhost/HztlFoundation/Global/Enums/CTA-Styles/Primary',
      name: 'Primary',
      displayName: 'Primary',
      fields: {
        Value: {
          value: 'primary',
        },
      },
    },
    cta1Title: {
      value: 'cta1 title',
    },
  },
};

export const internalLink = {
  ...defaultData,
  field: {
    value: {
      ...defaultData.field.value,
      target: undefined,
    },
  },
};

export const suppressIconAndText = {
  ...defaultData,
  suppressNewTabIcon: true,
  suppressLinkText: true,
};

export const noContent = {
  field: {
    value: {},
  },
  suppressLinkText: false,
};

export const fieldAsLinkFieldValue = {
  ...defaultData,
  field: {
    href: 'https://www.horizontaldigital.com',
    text: 'Link Text',
    linktype: 'external',
    target: '_blank',
  },
};
export const secondaryData = {
  className: 'underline hover:no-underline',
  field: {
    value: {
      href: 'https://www.horizontaldigital.com',
      text: 'Link with new tab screen reader text',
      linktype: 'external',
      target: '_blank',
    },
  },
  suppressNewTabIcon: true,
  suppressLinkText: false,
  srOnlyText: 'Only screen readers can access this text',
  fields: {
    cta2Icon: {
      id: 'f172ffbd-6a4a-4fc0-8c7e-0b1b53d0ab3d',
      url: 'http://localhost/HztlFoundation/Global/Enums/CTA-Icons/Download',
      name: 'Download',
      displayName: 'Download',
      fields: {
        Value: {
          value: 'download',
        },
      },
    },
    cta2IconAlignment: {
      id: '08943cf9-6a90-4f5c-bc4e-a89a7363fac3',
      url: 'http://localhost/HztlFoundation/Global/Enums/CTA-Icon-Alignment/Left',
      name: 'Left',
      displayName: 'Left',
      fields: {
        Value: {
          value: 'left',
        },
      },
    },
    cta2Link: {
      value: {
        text: 'cta2 link',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        target: '',
        querystring: '',
        id: '{E9ABAFA1-377C-4577-A419-9A3A8044D435}',
        href: '/',
      },
    },
    cta2Style: {
      id: '7ad019ef-ee23-41b4-9bbc-65318149fc83',
      url: 'http://localhost/HztlFoundation/Global/Enums/CTA-Styles/Secondary',
      name: 'Secondary',
      displayName: 'Secondary',
      fields: {
        Value: {
          value: 'secondary',
        },
      },
    },
    cta2Title: {
      value: 'cta2 title',
    },
  },
};
export default defaultData;
