// Global
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { SiteStructure } from '../../../../.generated/Feature.HztlFoundation.model';

// Local
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { IconTypes, SvgIcon } from 'helpers/SvgIcon';

// Types
export type SocialMediaProps = ComponentProps & SiteStructure.Footer.SocialMedia;

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['flex', 'hidden', 'md:block'],
    iconList: ['flex', 'flex-row', 'gap-8', 'w-fit'],
    link: ['text-theme-black', 'hover:text-theme-grey'],
    svg: ['h-6', 'w-6'],
  },
});

export const Default = (props: SocialMediaProps): JSX.Element => {
  const { socialMediaLinks } = props?.fields || {};
  const { RenderingIdentifier } = props?.params || {};

  /*
   * Rendering
   */

  if (!props?.fields) {
    return <></>;
  }

  const extendedTailwindVariants = tv({
    extend: TAILWIND_VARIANTS,
    slots: {
      base: [props?.params?.styles],
    },
  });

  const { base, iconList, link, svg } = extendedTailwindVariants();

  return (
    <div
      className={base()}
      data-component="authorable/shared/hztl-page-content/socialmedia"
      id={RenderingIdentifier}
    >
      <ul className={iconList()}>
        {socialMediaLinks?.map((icon) => {
          const { socialMediaLink } = icon?.fields;

          return (
            <li key={icon?.id}>
              <LinkWrapper
                className={link()}
                field={socialMediaLink as LinkField}
                suppressNewTabIcon={true}
              >
                <SvgIcon
                  className={svg()}
                  fill="none"
                  icon={icon?.name?.toLowerCase() as IconTypes}
                  size="em"
                  viewBox="0 0 24 24"
                />
              </LinkWrapper>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
