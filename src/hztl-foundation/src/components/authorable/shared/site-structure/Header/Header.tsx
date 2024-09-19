// Global
import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';

// Lib
import graphqlClientFactory from 'lib/graphql-client-factory';
import { useMediaQuery } from 'src/hooks/useMediaQuery';

// Local
import HeaderQuery from './Header.graphql';
import { HeaderProps } from './headerInterface';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export const Default = (props: HeaderProps) => {
  const { HeaderData } = props || {};

  const isDesktop = useMediaQuery('(min-width: 992px)');

  const defaultCountry = HeaderData?.item?.country?.targetItems?.[0]?.language?.jsonValue?.name;

  /*
   * STATE
   */

  const [selectedCountry, setSelectedCountry] = useState('');

  /*
   * LIFECYCLE
   */

  useEffect(() => {
    if (defaultCountry) setSelectedCountry(defaultCountry);
  }, [defaultCountry]);

  /*
   * Rendering
   */

  if (!props) {
    return <></>;
  }

  return (
    <header>
      {!isDesktop ? (
        <HeaderMobile
          {...props}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      ) : (
        <HeaderDesktop
          {...props}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </header>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  const graphQLClient = graphqlClientFactory({});
  const result = await graphQLClient.request<unknown>(HeaderQuery, {
    datasource: rendering.dataSource,
    params: rendering.params,
    language: layoutData?.sitecore?.context?.language,
    itemID: layoutData?.sitecore?.route?.itemId,
  });

  return { HeaderData: result };
};
