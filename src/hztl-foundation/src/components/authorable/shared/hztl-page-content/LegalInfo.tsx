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
    base: ['col-span-2', 'flex', 'justify-start', 'mmd:col-span-1'],
    content: [
      'flex-col',
      'flex',
      'gap-2',
      'items-center',
      'text-center',
      'lg:text-left',
      'ml:items-end',
    ],
    divider: ['bg-theme-black', 'h-8', 'w-px'],
    legalMenuItems: ['flex', 'items-center'],
    legalMenuWrapper: ['flex'],
    linkWrapper: ['font-bold', 'font-modern', 'p-2', 'text-theme-black', 'text-center', 'text-sm'],
    textWrapper: ['font-modern', 'font-regular', 'text-theme-black', 'text-xs'],
    wrapper: [
      'flex',
      'items-center',
      'justify-center',
      'max-w-[724px]',
      'px-spacing-spacing-4',
      'py-4',
      'w-full',
      'mmd:justify-end',
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

  const {
    base,
    wrapper,
    content,
    textWrapper,
    linkWrapper,
    legalMenuWrapper,
    legalMenuItems,
    divider,
  } = TAILWIND_VARIANTS();

  /*
   * Rendering
   */

  if (!props?.fields) {
    return <></>;
  }

  return (
    <div
      className={`${base()} ${props?.params?.styles !== undefined ? props?.params?.styles : ''}`}
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
