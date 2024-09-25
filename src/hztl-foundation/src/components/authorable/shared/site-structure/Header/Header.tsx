// Global
import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';
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
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const router = useRouter();

  const { locale, pathname, asPath, query } = router;

  /*
   * STATE
   */

  const [selectedCountry, setSelectedCountry] = useState('');

  /*
   * EVENT HANDLERS
   */

  const onClickLanguage = (country: string) => {
    setSelectedCountry(country);

    router.push({ pathname, query }, asPath, { locale: country });
  };

  /*
   * LIFECYCLE
   */

  useEffect(() => {
    if (locale) setSelectedCountry(locale);
  }, [locale]);

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
