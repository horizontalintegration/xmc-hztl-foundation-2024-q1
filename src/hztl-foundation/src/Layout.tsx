// Global
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import { Environment, PageController, WidgetsProvider } from '@sitecore-search/react';
import Head from 'next/head';
import React from 'react';
import { tv } from 'tailwind-variants';

// Local
import Scripts from 'src/Scripts';
import jssConfig from 'src/temp/config';
import config from 'temp/config';

const TAILWIND_VARIANTS = tv({
  slots: {
    footer: ['bg-gray-200'],
    footerContentContainer: [
      'm-auto',
      'max-w-7xl',
      'p-4',
      'mdlg:grid',
      'mdlg:grid-cols-4',
      'mdlg:items-center',
      'mdlg:m-auto',
    ],
    mainContentContainer: ['mt-[90px]'],
  },
});

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
  Content?: Field;
}

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor. If you're not supporting the Experience Editor, you can remove this.
const { publicUrl } = config;

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const { Content, Title } = route?.fields as RouteFields;
  const { pageEditing } = layoutData.sitecore.context;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const mainClassPageEditing = pageEditing ? 'editing-mode' : 'prod-mode';

  PageController.getContext().setLocaleLanguage('en');
  PageController.getContext().setLocaleCountry('us');

  /*
   * RENDERING
   */

  const { footer, footerContentContainer, mainContentContainer } = TAILWIND_VARIANTS();

  return (
    <>
      <Scripts />
      <Head>
        <title>{Title?.value?.toString() || 'Page'}</title>
        {Content?.value && <meta content={Content?.value?.toString()} name="description" />}
        <link href={`${publicUrl}/favicon.ico`} rel="icon" />
        {headLinks.map((headLink) => (
          <link href={headLink.href} key={headLink.href} rel={headLink.rel} />
        ))}
        {currentUrl && <meta content={currentUrl} property="og:url" />}
      </Head>
      <WidgetsProvider
        apiKey={jssConfig.sitecoreSearchApiKey}
        customerKey={jssConfig.sitecoreSearchCustomerKey}
        env={jssConfig.sitecoreSearchEnv as Environment}
        publicSuffix={true}
      >
        <div className={mainClassPageEditing}>
          {route && <Placeholder name="headless-header" rendering={route} />}
          <main>
            <div className={mainContentContainer()} id="content">
              {route && <Placeholder name="headless-main" rendering={route} />}
            </div>
          </main>
          <footer className={footer()}>
            <div className={footerContentContainer()}>
              {route && <Placeholder name="headless-footer" rendering={route} />}
            </div>
          </footer>
        </div>
      </WidgetsProvider>
    </>
  );
};

export default Layout;
