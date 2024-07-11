const defaultData = {
  className: '',
  iconAlignment: 'right',
  id: 'buttonId',
  isDisabled: false,
  onClick: undefined,
  ctaVariant: 'primary',
  text: 'Button Text',
  title: 'Button Title',
  type: 'button',
};

export const disabledData = {
  ...defaultData,
  isDisabled: true,
};

export const styleLinkData = {
  ...defaultData,
  ctaVariant: 'link',
};

export const styleSecondaryData = {
  ...defaultData,
  ctaVariant: 'secondary',
};

export const styleTertiaryData = {
  ...defaultData,
  ctaVariant: 'tertiary',
};

export default defaultData;
