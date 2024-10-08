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

  /*
   * Rendering
   */

  if (!props) {
    return <></>;
  }

  return <header>{!isDesktop ? <HeaderMobile {...props} /> : <HeaderDesktop {...props} />}</header>;
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
