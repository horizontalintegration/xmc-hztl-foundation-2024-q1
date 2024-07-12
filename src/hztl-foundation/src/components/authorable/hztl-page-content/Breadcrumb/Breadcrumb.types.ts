import { ComponentRendering, Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type BreadcrumbInfo = {
  Title: {
    jsonValue: Field<string>;
  };
  pageUrl: {
    link: string;
  };
  disabledLinkNames: NavLinks;
};

export type NavFilter = {
  field: {
    disabled: Field<string>;
  };
};

export type NavLinks = {
  names: NavFilter[];
  pageUrl: {
    link: string;
  };
};

export type BreadcrumbDataType = {
  staticProps: {
    currentPage: BreadcrumbInfo & {
      ancestors: BreadcrumbInfo[];
    };
  };
  rendering: ComponentRendering;
};
