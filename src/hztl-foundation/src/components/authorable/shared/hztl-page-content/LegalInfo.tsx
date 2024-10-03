// GLobal
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['col-span-2', 'flex', 'justify-start', 'md:col-span-1'],
    content: [
      'flex',
      'flex-col',
      'gap-2',
      'items-center',
      'text-center',
      'lg:items-end',
      'lg:text-left',
    ],
    divider: ['bg-theme-black', 'h-full', 'w-px'],
    legalMenuItems: ['flex', 'items-center'],
    legalMenuWrapper: ['flex'],
    linkWrapper: ['font-bold', 'font-modern', 'px-2', 'text-theme-black', 'text-center', 'text-sm'],
    textWrapper: ['font-modern', 'font-regular', 'text-theme-black', 'text-base'],
    wrapper: [
      'flex',
      'items-center',
      'justify-center',
      'max-w-[724px]',
      'px-3',
      'py-4',
      'w-full',
      'md:justify-end',
      'md:!px-0',
    ],
  },
});

type LegalMenuItem = {
  displayName: string;
  fields: {
    legalLink: {
      value: {
        anchor?: string;
        class?: string;
        href?: string;
        id?: string;
        linktype?: string;
        querystring?: string;
        target?: string;
        text?: string;
        title?: string;
      };
    };
  };
  name: string;
};

export type LegalInfoProps = ComponentProps & SiteStructure.Footer.LegalInfo;

export const Default = (props: LegalInfoProps): JSX.Element => {
  const { copyrightText, legalMenu } = props?.fields || {};
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

  const {
    base,
    content,
    divider,
    legalMenuItems,
    legalMenuWrapper,
    linkWrapper,
    textWrapper,
    wrapper,
  } = extendedTailwindVariants();

  return (
    <div
      className={base()}
      data-component="authorable/shared/hztml-page-content/legalinfo"
      id={RenderingIdentifier}
    >
      <div className={wrapper()}>
        <div className={content()}>
          <RichTextWrapper className={textWrapper()} field={copyrightText} tag="div" />
          <div className={legalMenuWrapper()}>
            {legalMenu?.map((legalMenuItem: LegalMenuItem, index) => {
              const { legalLink } = legalMenuItem?.fields || {};

              return (
                <div key={legalLink?.value?.id} className={legalMenuItems()}>
                  <LinkWrapper
                    className={linkWrapper()}
                    field={{ ...legalLink }}
                    suppressNewTabIcon={true}
                  />
                  {legalMenu?.length > index + 1 && <div className={divider()}></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
