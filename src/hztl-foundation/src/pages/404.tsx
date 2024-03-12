import config from 'temp/config';
import {
  GraphQLErrorPagesService,
  SitecoreContext,
  ErrorPages,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import NotFound from 'src/NotFound';
import { componentBuilder } from 'temp/componentBuilder';
import Layout from 'src/Layout';
import { GetStaticProps } from 'next';
import { siteResolver } from 'lib/site-resolver';
import clientFactory from 'lib/graphql-client-factory';
import { useEffect, useState } from 'react';

const Custom404 = (props: SitecorePageProps): JSX.Element => {
  const [layoutData, setLayoutData] = useState<LayoutServiceData | undefined>(props.layoutData);
  const [fetchError, setFetchError] = useState(false);

  // We need to fetch the 404 page content client-side because NextJS doesn't provide the ability
  // to determine which site we're on due to middleware rewrites not executing for the 404 handler.
  useEffect(() => {
    // Only execute if we didn't get data from the default.
    // Depending on requirements, we may want to always fetch.
    if (!layoutData) {
      fetch('/api/error/404')
        .then(async (res) => {
          const data = await res.json();
          setLayoutData(data);
        })
        .catch(() => {
          setFetchError(true);
        });
    }
    // We can't use layout data as a dependency because we are updating it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetchError) {
    return <NotFound />;
  }
  if (!layoutData) {
    return <></>;
  }

  return (
    <SitecoreContext
      componentFactory={componentBuilder.getComponentFactory()}
      layoutData={layoutData}
    >
      <Layout layoutData={layoutData} headLinks={props.headLinks} />
    </SitecoreContext>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const site = siteResolver.getByName(config.sitecoreSiteName);
  const errorPagesService = new GraphQLErrorPagesService({
    clientFactory,
    siteName: site.name,
    language: context.locale || config.defaultLanguage,
    retries:
      (process.env.GRAPH_QL_SERVICE_RETRIES &&
        parseInt(process.env.GRAPH_QL_SERVICE_RETRIES, 10)) ||
      0,
  });

  let resultErrorPages: ErrorPages | null = null;

  if (!process.env.DISABLE_SSG_FETCH) {
    try {
      resultErrorPages = await errorPagesService.fetchErrorPages();
    } catch (error) {
      console.log('Error occurred while fetching error pages');
      console.log(error);
    }
  }

  return {
    props: {
      headLinks: [],
      layoutData: resultErrorPages?.notFoundPage?.rendered || null,
    },
  };
};

export default Custom404;
