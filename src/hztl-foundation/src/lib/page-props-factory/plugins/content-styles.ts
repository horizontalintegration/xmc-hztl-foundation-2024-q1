import { SitecorePageProps } from 'lib/page-props';
import { getContentStylesheetLink } from '@sitecore-jss/sitecore-jss-nextjs';
import { constantCase } from 'constant-case';
import { Plugin } from '..';

class ContentStylesPlugin implements Plugin {
  order = 2;

  async exec(props: SitecorePageProps) {
    // Get content stylessheet link, empty if styles are not used on the page
    const sitecoreEdgeContextId = process.env[`${constantCase('sitecoreEdgeContextId')}`];
    const contentStyles = getContentStylesheetLink(
      props.layoutData,
      sitecoreEdgeContextId as string
    );

    contentStyles && props.headLinks.push(contentStyles);

    return props;
  }
}

export const contentStylesPlugin = new ContentStylesPlugin();
