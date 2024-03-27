import { Item, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';
import { Data } from 'src/.generated/Foundation.HztlFoundation.model';

import { ComponentProps } from 'lib/component-props';
import { useI18n } from 'next-localization';

export type FooterProps = ComponentProps & SiteStructure.Footer.Footer;

export const Default = (props: FooterProps): JSX.Element => {
  // TODO Footer should pull data via GraphQL
  const columns = props.fields?.footerColumns as (Item & SiteStructure.Footer.FooterColumn)[];

  const i18n = useI18n();

  const copyrightText = i18n.t('Copyright').replace('@year', new Date().getFullYear().toString());

  return (
    <div>
      <h2>Footer</h2>
      <ul>
        {columns.map((x) => {
          const links = x.fields.columnLinks as (Item & Data.Links.GenericLink)[];
          return (
            <li key={x.id}>
              <ul>
                {links.map((link) => (
                  <li key={link.id}>
                    {/* TODO use LinkWrapper */}
                    {link.fields.link ? <Link field={link.fields.link} /> : null}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <p>{copyrightText}</p>
    </div>
  );
};
