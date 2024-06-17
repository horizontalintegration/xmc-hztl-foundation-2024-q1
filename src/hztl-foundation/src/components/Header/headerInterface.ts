/* eslint-disable prettier/prettier */
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

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
    link: {
      value: LinkField;
    };
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
    navigationLink: {
      value: LinkField;
    };
    navigationTitle: {
      value: string;
    };
  };
}

export interface HeaderProps {
  fields: {
    logo: { value: LogoInterface };
    logoLink: { value: LinkField };
    navigationList: NavigationItem[];
  };
  setDropdownOpen: (value: number) => void;
  dropdownOpen: number | null;
}

