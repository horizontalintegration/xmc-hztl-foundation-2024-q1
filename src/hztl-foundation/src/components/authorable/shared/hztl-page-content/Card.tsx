// Global
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { CardListCardsPerRows } from 'lib/utils/style-param-utils/modules/cards';

// Local
import MissingDataSource from 'helpers/EditingHelpText/MissingDataSource';
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

/*
 * Tailwind Variants
 */

const tailwindVariants = tv({
  slots: {
    columnClasses: ['mb-4', 'w-full'],
    content: ['mx-auto', 'my-0'],
    contentWrapper: ['m-auto', 'p-l', 'text-left'],
    ctaWrapper: ['flex', 'flex-wrap', 'gap-xxs', 'justify-normal'],
    ctaButton1: [
      'bg-gray',
      'flex',
      'font-bold',
      'font-modern',
      'items-center',
      'justify-center',
      'px-s',
      'py-xs',
      'rounded',
      'text-button',
      'text-center',
      'text-white',
    ],
    ctaButton2: [
      'border-gray',
      'border',
      'flex',
      'font-bold',
      'font-modern',
      'items-center',
      'justify-center',
      'p-xs',
      'rounded',
      'text-black',
      'text-center',
      'text-xs',
    ],
    descriptionText: [
      'font-modern',
      'font-regular',
      'mb-xxs',
      'opacity-90',
      'text-black',
      'text-xs',
    ],
    eyebrowText: ['font-modern', 'font-regular', 'mb-xxs', 'opacity-80', 'text-black', 'text-xxs'],
    headingText: ['font-bold', 'font-modern', 'mb-xxs', 'text-4xl', 'text-black'],
    imageWrapper: ['border-b', 'border-dark-gray', 'flex', 'items-center', 'justify-center'],
    inner: ['border', '!border-dark-gray'],
    subHeadingText: ['font-bold', 'font-modern', 'mb-xxs', 'opacity-80', 'text-black', 'text-m'],
    wrapper: ['flex', 'items-center', 'justify-center'],
  },
  variants: {
    cardsPerRow: {
      '1': {
        columnClasses: ['mml:w-1/1'],
      },
      '2': {
        columnClasses: ['mml:w-1/2'],
      },
      '3': {
        columnClasses: ['mml:w-1/3'],
      },
      '4': {
        columnClasses: ['mml:w-1/4'],
      },
    },
  },
});

export type CardProps = ComponentProps &
  HztlPageContent.Card & { cardsPerRow?: CardListCardsPerRows };

const Card = (props: CardProps): JSX.Element => {
  const { CardImage, CardLink1, CardLink2, Description, Eyebrow, Heading, Subheading } =
    props?.fields || {};
  const { RenderingIdentifier } = props?.params || {};

  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

  const {
    columnClasses,
    content,
    contentWrapper,
    ctaButton1,
    ctaButton2,
    ctaWrapper,
    descriptionText,
    eyebrowText,
    headingText,
    imageWrapper,
    inner,
    subHeadingText,
    wrapper,
  } = tailwindVariants({
    cardsPerRow: props.cardsPerRow,
  });

  /*
   * Rendering
   */

  if (!props?.fields) <MissingDataSource {...props} />;

  return (
    <div
      className={columnClasses()}
      data-component="authorable/shared/hztl-page-content/card"
      id={RenderingIdentifier}
    >
      <div className={wrapper()}>
        <div className={content()}>
          <div className={inner()}>
            <div className={imageWrapper()}>
              <ImageWrapper field={CardImage} />
            </div>
            <div className={contentWrapper()}>
              <PlainTextWrapper className={eyebrowText()} editable field={Eyebrow} tag="h6" />
              <RichTextWrapper className={headingText()} field={Heading} />
              <RichTextWrapper className={subHeadingText()} field={Subheading} />
              <RichTextWrapper className={descriptionText()} field={Description} />
              <div className={ctaWrapper()}>
                <LinkWrapper className={ctaButton1()} ctaStyle={styles.cta1} field={CardLink1} />
                <LinkWrapper className={ctaButton2()} ctaStyle={styles.cta2} field={CardLink2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = withStandardComponentWrapper(Card);
