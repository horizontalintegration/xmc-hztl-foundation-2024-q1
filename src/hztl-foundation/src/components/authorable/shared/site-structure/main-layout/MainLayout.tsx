// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['m-auto', 'max-w-screen-xl', 'w-full', 'md:p-8'],
  },
});

export const Default = (props: ComponentProps): JSX.Element => {
  const { RenderingIdentifier } = props?.params || {};

  const { base } = TAILWIND_VARIANTS();

  return (
    <div
      className={base()}
      data-component="authorable/shared/site-structure/mainlayout"
      id={RenderingIdentifier}
    >
      <div>
        <Placeholder name="hztl-headless-breadcrumb" rendering={props.rendering} />
      </div>
      <div>
        <Placeholder name="hztl-headless-hero" rendering={props.rendering} />
      </div>
      <div>
        <Placeholder name="hztl-headless-main-content" rendering={props.rendering} />
      </div>
    </div>
  );
};
