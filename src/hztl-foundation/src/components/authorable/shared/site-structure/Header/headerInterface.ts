/* eslint-disable prettier/prettier */
import { ComponentProps } from 'lib/component-props';
import { ImageField, Item, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';

export interface MegaMenuLinkInterface {
  id: string;
  url: string;
  name: string;
  displayName: string;
  link: { jsonValue: LinkField };
}

export interface MegaMenuCategoryInterface {
  id: string;
  url: string;
  name: string;
  displayName: string;
  megaMenuTitle: {
    jsonValue: {
      value: string;
    };
  };
  megaMenuLinks: { items: MegaMenuLinkInterface[] };
}

export interface NavigationItem {
  id: string;
  url: string;
  name: string;
  displayName: string;
  megaMenuList: { items: MegaMenuCategoryInterface[] };
  navigationLink: { jsonValue: LinkField };
  navigationTitle: {
    jsonValue: {
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
  countryData?: Item[];
}

export type HeaderProps = ComponentProps & {
  fields: {
    data: {
      item: {
        logo: { jsonValue: ImageField };
        logoLink: { jsonValue: LinkField };
        navigationList: { items: NavigationItem[] };
      };
    };
  };
} & SiteStructure.Header.Header;

export type HeaderPropsComponent = HeaderProps & CountrySelectorInterface;
