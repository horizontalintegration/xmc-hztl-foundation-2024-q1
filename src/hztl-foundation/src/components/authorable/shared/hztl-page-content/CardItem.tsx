// Global
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { getCtaStyle } from 'lib/utils/cta-utils';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

const TAILWIND_VARIANTS = tv({
  defaultVariants: {
    style: 'primary',
  },
  slots: {
    base: ['border', 'border-theme-darkgrey', 'flex', 'flex-col', 'items-center', 'justify-center'],
    body: ['flex', 'flex-col', 'grow', 'p-10', 'w-full'],
    content: ['grow', 'w-full'],
    cta: [],
    description: [
      'font-modern',
      'font-regular',
      'leading-6',
      'mb-2',
      'opacity-90',
      'text-base',
      'text-theme-black',
    ],
    eyebrow: ['font-modern', 'font-regular', 'mb-2', 'opacity-80', 'text-theme-black', 'text-xs'],
    footer: ['flex', 'flex-wrap', 'gap-2', 'items-center', 'justify-normal', 'w-full'],
    header: ['border-b', 'border-theme-darkgrey', 'relative', 'w-full'],
    heading: ['font-bold', 'font-modern', 'mb-2', 'text-4xl', 'text-theme-black'],
    subheading: ['font-bold', 'font-modern', 'mb-2', 'opacity-80', 'text-theme-black', 'text-2xl'],
  },
  variants: {
    style: {
      link: {
        cta: ['text-base', 'text-theme-darkblue'],
      },
      primary: {
        cta: ['px-8', 'py-4'],
      },
      secondary: {
        cta: ['px-8', 'py-4'],
      },
      tertiary: {
        cta: ['px-8', 'py-4'],
      },
    },
  },
});

export type CardItemProps = ComponentProps &
  HztlPageContent.CardItem & { componentName?: string; dataSource?: string; uid: string };

const CardItem = (props: CardItemProps): JSX.Element => {
  const { CardImage, CardLink1, CardLink2, Description, Eyebrow, Heading, Subheading } =
    props?.fields || {};
  const { RenderingIdentifier } = props?.params || {};

  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

  /*
   * Rendering
   */

  const { base, body, content, cta, description, eyebrow, footer, header, heading, subheading } =
    TAILWIND_VARIANTS();

  return (
    <div
      className={base()}
      data-component="authorable/shared/hztl-page-content/carditem"
      id={RenderingIdentifier}
    >
      <div className={header()}>
        <ImageWrapper field={CardImage} />
      </div>
      <div className={body()}>
        <div className={content()}>
          <PlainTextWrapper className={eyebrow()} editable field={Eyebrow} tag="h6" />
          <RichTextWrapper className={heading()} field={Heading} />
          <RichTextWrapper className={subheading()} field={Subheading} />
          <RichTextWrapper className={description()} field={Description} />
        </div>
        <div className={footer()}>
          <LinkWrapper
            className={cta({ style: styles.cta1?.ctaVariant })}
            ctaStyle={getCtaStyle(styles.cta1, 'primary')}
            field={CardLink1}
          />
          <LinkWrapper
            className={cta({ style: styles.cta2?.ctaVariant })}
            ctaStyle={getCtaStyle(styles.cta2, 'secondary')}
            field={CardLink2}
          />
        </div>
      </div>
    </div>
  );
};

export const Default = withStandardComponentWrapper(CardItem);
