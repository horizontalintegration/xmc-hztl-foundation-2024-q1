const defaultData = {
  className: '',
  iconAlignment: 'right',
  id: 'buttonId',
  isDisabled: false,
  onClick: undefined,
  variant: 'primary',
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
  variant: 'link',
};

export const styleSecondaryData = {
  ...defaultData,
  variant: 'secondary',
};

export const styleTertiaryData = {
  ...defaultData,
  variant: 'tertiary',
};

export default defaultData;
