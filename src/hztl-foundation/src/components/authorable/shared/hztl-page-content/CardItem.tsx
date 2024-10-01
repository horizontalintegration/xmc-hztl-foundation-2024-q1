// Global
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: [
      'border',
      'border-theme-darkgrey',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'mx-4',
      'md:mx-0',
    ],
    body: ['flex', 'flex-col', 'grow', 'p-10', 'w-full'],
    content: ['grow', 'w-full'],
    ctaPrimary: ['px-8'],
    ctaSecondary: ['px-8'],
    ctaLink: ['text-theme-darkblue', 'text-base'],
    description: [
      'font-modern',
      'font-regular',
      'mb-2',
      'opacity-90',
      'text-base',
      'text-theme-black',
      'leading-6',
    ],
    eyebrow: ['font-modern', 'font-regular', 'mb-2', 'opacity-80', 'text-theme-black', 'text-xs'],
    footer: ['flex', 'flex-wrap', 'gap-2', 'justify-normal', 'w-full', 'items-center'],
    header: ['border-b', 'border-theme-darkgrey', 'relative', 'w-full'],
    heading: ['font-bold', 'font-modern', 'mb-2', 'text-4xl', 'text-theme-black'],
    subheading: ['font-bold', 'font-modern', 'mb-2', 'opacity-80', 'text-theme-black', 'text-2xl'],
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

  if (!props?.fields) {
    return <></>;
  }

  const {
    base,
    body,
    content,
    ctaPrimary,
    ctaSecondary,
    ctaLink,
    description,
    eyebrow,
    footer,
    header,
    heading,
    subheading,
  } = TAILWIND_VARIANTS();

  /**
   * Function to get the CTA style.
   * If ctaStyle is undefined, it defaults to the provided defaultVariant.
   *
   * @param {any} ctaStyle - The CTA style object.
   * @param {string} defaultVariant - The default variant to use if ctaStyle is undefined.
   * @returns {object} - The CTA style object with the appropriate variant.
   */

  const getCtaStyle = (ctaStyle: any, defaultVariant: string) => {
    return {
      ...ctaStyle,
      ctaVariant: ctaStyle?.ctaVariant ?? defaultVariant,
    };
  };

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
            className={styles.cta1?.ctaVariant === 'link' ? ctaLink() : ctaPrimary()}
            ctaStyle={getCtaStyle(styles.cta1, 'primary')}
            field={CardLink1}
          />
          <LinkWrapper
            className={styles.cta2?.ctaVariant === 'link' ? ctaLink() : ctaSecondary()}
            ctaStyle={getCtaStyle(styles.cta2, 'secondary')}
            field={CardLink2}
          />
        </div>
      </div>
    </div>
  );
};

export const Default = withStandardComponentWrapper(CardItem);
