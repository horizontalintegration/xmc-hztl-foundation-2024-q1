// Global
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component', 'p-6'],
    contentContainer: ['p-10'],
    cta: ['hidden'],
    description: [],
    eyebrow: ['font-normal', 'mb-2', 'opacity-80', 'text-xs'],
    heading: ['font-bold', 'font-modern', 'mb-2', 'text-4xl'],
    subheading: ['font-bold', 'font-modern', 'mb-2', 'opacity-80', 'text-2xl'],
  },
});

export type ArticleProps = ComponentProps &
  HztlPageContent.Article & {
    componentName?: string;
    dataSource?: string;
    uid?: string;
  };

const Article = (props: ArticleProps): JSX.Element => {
  const { Description, Eyebrow, Heading, Subheading, Image, ReadMoreCTA } = props?.fields || {};
  const { RenderingIdentifier, styles } = props?.params || {};

  /*
   * RENDERING
   */

  const customTailwindVariants = tv({
    extend: TAILWIND_VARIANTS,
    slots: {
      base: [styles.trimEnd()],
    },
  });

  const { base, contentContainer, cta, description, eyebrow, heading, subheading } =
    customTailwindVariants();

  return (
    <section
      className={base()}
      data-component="authorable/shared/hztl-page-content/article"
      id={RenderingIdentifier}
    >
      <ImageWrapper field={Image} />
      <div className={contentContainer()}>
        <PlainTextWrapper className={eyebrow()} editable field={Eyebrow} tag="h6" />
        <RichTextWrapper className={heading()} field={Heading} />
        <RichTextWrapper className={subheading()} field={Subheading} />
        <RichTextWrapper className={description()} field={Description} />
        <LinkWrapper className={cta()} field={ReadMoreCTA} />
      </div>
    </section>
  );
};

export const Default = withStandardComponentWrapper(Article);
