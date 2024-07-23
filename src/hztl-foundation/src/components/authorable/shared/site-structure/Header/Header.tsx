import { useEffect, useState } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { HeaderProps } from './headerInterface';
import HeaderQuery from './Header.graphql';
import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import graphqlClientFactory from 'lib/graphql-client-factory';

export const Default = (props: HeaderProps) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const defaultCountry = props.HeaderData?.item.country.targetItems?.[0].language.jsonValue.name;
  useEffect(() => {
    setSelectedCountry(defaultCountry);
  }, [defaultCountry]);
  return (
    <header className="component bg-white w-full">
      <HeaderDesktop
        {...props}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <HeaderMobile
        {...props}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </header>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const graphQLClient = graphqlClientFactory({});
  if (
    layoutData?.sitecore?.context?.pageState == 'normal' ||
    layoutData?.sitecore?.context?.pageState == 'preview'
  ) {
    const result = await graphQLClient.request<unknown>(HeaderQuery, {
      datasource: rendering.dataSource,
      params: rendering.params,
      language: layoutData?.sitecore?.context?.language,
      itemID: layoutData?.sitecore?.route?.itemId,
    });
    return { HeaderData: result };
  }
  return 'Component is not available in Experience Editor';
};
