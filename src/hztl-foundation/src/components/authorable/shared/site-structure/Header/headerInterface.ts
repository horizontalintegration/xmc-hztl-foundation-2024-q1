// Global
import { ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

// Lib
import { ComponentProps } from 'lib/component-props';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';

export interface CountrySelectorInterface {
  countryData?: HeaderCountry[];
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
}

export interface HeaderCountry {
  flag: { jsonValue: ImageField };
  language: {
    jsonValue: {
      displayName: string;
      fields: {
        [key: string]: {
          value: string;
        };
      };
      id: string;
      name: string;
      url: string;
    };
    targetItem?: {
      name: {
        jsonValue: {
          value: string;
        };
      };
    } | null;
  };
  name: string;
}

export interface MegaMenuCategoryInterface {
  displayName: string;
  id: string;
  megaMenuLinks: { items: MegaMenuLinkInterface[] };
  megaMenuTitle: { jsonValue: { value: string } };
  name: string;
  url: string;
}

export interface MegaMenuLinkInterface {
  displayName: string;
  id: string;
  link: { jsonValue: LinkField };
  name: string;
  url: string;
}

export interface NavItemInterface extends NavigationItem {
  dropdownOpen: number | null;
  index: number;
  onClick: () => void;
}

export interface NavigationItem {
  displayName: string;
  id: string;
  name: string;
  url: string;
  megaMenuList: { items: MegaMenuCategoryInterface[] };
  navigationLink: { jsonValue: LinkField };
  navigationTitle: { jsonValue: { value: string } };
}

export type HeaderProps = ComponentProps & {
  HeaderData: {
    item: {
      country: { targetItems: HeaderCountry[] };
      logo: { jsonValue: ImageField };
      logoLink: { jsonValue: LinkField };
      navigationList: { items: NavigationItem[] };
    };
  };
} & SiteStructure.Header.Header;

export type HeaderPropsComponent = HeaderProps & CountrySelectorInterface;
