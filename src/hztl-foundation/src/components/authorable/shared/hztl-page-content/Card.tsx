import React from 'react';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import { ComponentProps } from 'lib/component-props';
import { withStandardComponentWrapper } from 'helpers/HOC';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { tv } from 'tailwind-variants';
import { CardListCardsPerRows } from 'lib/utils/style-param-utils/modules/cards';
import MissingDataSource from 'helpers/EditingHelpText/MissingDataSource';

export type CardProps = ComponentProps &
  HztlPageContent.Card & { cardsPerRow?: CardListCardsPerRows };

const tailwindVariants = tv({
  slots: {
    base: ['w-full', 'mb-4'],
    columnClasses: [],
    wrapper: ['flex', 'justify-center', 'items-center'],
    content: ['mx-auto', 'my-0'],
    inner: ['border', 'border-gray'],
    imageWrapper: ['border-b', 'border-dark-gray', 'flex', 'justify-center', 'items-center'],
    contentWrapper: ['text-left', 'p-l', 'm-auto'],
    cardText: ['font-modern', 'text-black'],
    eyebrowText: ['text-xxs', 'font-regular', 'mb-xxs', 'opacity-80'],
    headingText: ['text-4xl', 'font-bold', 'mb-xxs'],
    subHeadingText: ['text-m', 'font-bold', 'mb-xxs', 'opacity-80'],
    descriptionText: ['text-xs', 'font-regular', 'mb-xxs', 'opacity-90'],
    ctaWrapper: ['flex', 'gap-xxs', 'flex-wrap', 'justify-normal'],
    ctaButton1: [
      'flex',
      'items-center',
      'justify-center',
      'px-s',
      'py-xs',
      'rounded',
      'bg-gray',
      'text-center',
      'text-white',
      'font-modern',
      'text-button',
      'font-bold',
    ],
    ctaButton2: [
      'flex',
      'items-center',
      'justify-center',
      'p-xs',
      'rounded',
      'border',
      'border-gray',
      'text-center',
      'text-black',
      'font-modern',
      'text-xs',
      'font-bold',
    ],
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

const Card = (props: CardProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  if (props?.fields) {
    const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

    const {
      base,
      columnClasses,
      wrapper,
      content,
      inner,
      imageWrapper,
      contentWrapper,
      eyebrowText,
      cardText,
      headingText,
      subHeadingText,
      descriptionText,
      ctaWrapper,
      ctaButton1,
      ctaButton2,
    } = tailwindVariants({
      cardsPerRow: props.cardsPerRow,
    });

    return (
      <div
        data-component="authorable/general/card"
        className={`${base()} ${columnClasses()}`}
        id={id ? id : undefined}
      >
        <div className={wrapper()}>
          <div className={content()}>
            <div className={inner()}>
              <div className={imageWrapper()}>
                <ImageWrapper field={props?.fields?.CardImage} />
              </div>
              <div className={contentWrapper()}>
                <PlainTextWrapper
                  className={`${cardText()} ${eyebrowText()}`}
                  field={props?.fields?.Eyebrow}
                  tag="h6"
                  editable
                />
                <RichTextWrapper
                  className={`${cardText()} ${headingText()}`}
                  field={props?.fields?.Heading}
                  tag="h2"
                />
                <RichTextWrapper
                  className={`${cardText()} ${subHeadingText()}`}
                  field={props?.fields?.Subheading}
                  tag="div"
                />
                <RichTextWrapper
                  className={`${cardText()} ${descriptionText()}`}
                  field={props?.fields?.Description}
                  tag="div"
                />
                <div className={ctaWrapper()}>
                  <LinkWrapper
                    className={ctaButton1()}
                    field={props?.fields?.CardLink1}
                    ctaStyle={styles.cta1}
                  />
                  <LinkWrapper
                    className={ctaButton2()}
                    field={props?.fields?.CardLink2}
                    ctaStyle={styles.cta2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <MissingDataSource {...props} />;
};

export const Default = withStandardComponentWrapper(Card);
