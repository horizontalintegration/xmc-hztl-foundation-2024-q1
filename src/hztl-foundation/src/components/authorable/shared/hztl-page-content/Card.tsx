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

export type CardProps = ComponentProps &
  HztlPageContent.Card & { cardsPerRow?: CardListCardsPerRows };

const CardDefaultComponent = (props: CardProps): JSX.Element => (
  <div className={`component card ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Card</span>
    </div>
  </div>
);

const tailwindVariants = tv({
  slots: {
    columnClasses: [],
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

    const { columnClasses } = tailwindVariants({
      cardsPerRow: props.cardsPerRow,
    });

    return (
      <div
        data-component="authorable/general/card"
        className={`w-full mb-4 flex ${columnClasses()}`}
        id={id ? id : undefined}
      >
        <div className="border !border-dark-gray flex flex-col">
          <div className="border-b border-dark-gray flex justify-center items-center">
            <ImageWrapper field={props?.fields?.CardImage} />
          </div>
          <div className="text-left p-l flex flex-col h-full">
            <PlainTextWrapper
              className="font-modern text-black text-xxs font-regular mb-xxs opacity-80"
              field={props?.fields?.Eyebrow}
              tag="h6"
              editable
            />
            <RichTextWrapper
              className="font-modern text-black text-4xl font-bold mb-xxs"
              field={props?.fields?.Heading}
              tag="h2"
            />
            <RichTextWrapper
              className="font-modern text-black text-m font-bold mb-xxs opacity-80"
              field={props?.fields?.Subheading}
              tag="div"
            />
            <RichTextWrapper
              className="font-modern text-black text-xs font-regular mb-xxs opacity-90"
              field={props?.fields?.Description}
              tag="div"
            />
            <div className="flex gap-xxs flex-wrap justify-normal mt-auto">
              <LinkWrapper
                className="flex items-center justify-center px-s py-xs rounded bg-gray text-center text-white font-modern text-button font-bold"
                field={props?.fields?.CardLink1}
                ctaStyle={styles.cta1}
              />
              <LinkWrapper
                className="flex items-center justify-center p-xs rounded border border-gray text-center text-black font-modern text-xs font-bold"
                field={props?.fields?.CardLink2}
                ctaStyle={styles.cta2}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <CardDefaultComponent {...props} />;
};

export const Default = withStandardComponentWrapper(Card);
