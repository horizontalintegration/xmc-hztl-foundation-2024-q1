/* eslint-disable prettier/prettier */
import { ComponentProps } from 'lib/component-props';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';

export interface LogoInterface {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export interface MegaMenuLinkInterface {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    link: LinkField;
  };
}

export interface MegaMenuCategoryInterface {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    megaMenuTitle: {
      value: string;
    };
    megaMenuLinks: MegaMenuLinkInterface[];
  };
}

export interface NavigationItem {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    megaMenuList: MegaMenuCategoryInterface[];
    navigationLink: LinkField;
    navigationTitle: {
      value: string;
    };
  };
}
export interface HeaderCountry {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    flag: {
      value: {
        src: string;
        alt: string;
        width: string;
        height: string;
      };
    };
    name: {
      value: string;
    };
  };
}

export interface CountrySelectorInterface {
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
}

export type HeaderProps = ComponentProps & {
  fields: {
    logo: { value: LogoInterface };
    logoLink: LinkField;
    navigationList: NavigationItem[];
  };
} & SiteStructure.Header.Header;

export type HeaderPropsComponent = HeaderProps & CountrySelectorInterface;
