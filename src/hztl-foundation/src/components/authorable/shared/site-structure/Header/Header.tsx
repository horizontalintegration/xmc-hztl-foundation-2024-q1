// Global
import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

// Lib
import graphqlClientFactory from 'lib/graphql-client-factory';

// Local
import HeaderQuery from './Header.graphql';
import { HeaderProps } from './headerInterface';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export const Default = (props: HeaderProps) => {
  /*
   * Rendering
   */

  if (!props) {
    return <></>;
  }

  return (
    <header>
      <div className="hidden md:block">
        <HeaderDesktop {...props} />
      </div>
      <div className="block md:hidden">
        <HeaderMobile {...props} />
      </div>
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
