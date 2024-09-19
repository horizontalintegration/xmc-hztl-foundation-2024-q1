// Global
import { useEffect, useState } from 'react';
import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

// Lib
import { useMediaQuery } from 'src/hooks/useMediaQuery';
import graphqlClientFactory from 'lib/graphql-client-factory';

// Local
import { HeaderProps } from './headerInterface';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import HeaderQuery from './Header.graphql';
import { useRouter } from 'next/router';

export const Default = (props: HeaderProps) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const router = useRouter();
  useEffect(() => {
    if (router.locale) {
      setSelectedCountry(router.locale);
    }
  }, [router?.locale]);

  const isDesktop = useMediaQuery('(min-width: 992px)');

  const { pathname, asPath, query } = router;

  const onClickLanguage = (country: string) => {
    setSelectedCountry(country);
    router.push({ pathname, query }, asPath, { locale: country });
  };
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
          setSelectedCountry={(country) => onClickLanguage(country)}
        />
      ) : (
        <HeaderDesktop
          {...props}
          selectedCountry={selectedCountry}
          setSelectedCountry={(country) => onClickLanguage(country)}
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
