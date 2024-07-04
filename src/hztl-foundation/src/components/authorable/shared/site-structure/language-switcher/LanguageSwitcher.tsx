import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';

export type LanguageSwitcherProps = ComponentProps & SiteStructure.LanguageSwitcher;

export const Default = (props: LanguageSwitcherProps): JSX.Element => {
  <span className="is-empty-hint">Language Switcher</span>;

  const id = props?.params?.RenderingIdentifier;

  return <div id={id}>Language Switcher</div>;
};
