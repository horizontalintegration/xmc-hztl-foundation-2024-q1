import { ButtonTags, ButtonTargets } from 'helpers/Button/Button';

const defaultData = {
  label: 'Button',
  tag: 'button' as ButtonTags,
};

export default defaultData;

export const buttonAsAnchorData = {
  href: '//example.com',
  label: 'Anchor Link',
  tag: 'a' as ButtonTags,
  target: '_blank' as ButtonTargets,
};
