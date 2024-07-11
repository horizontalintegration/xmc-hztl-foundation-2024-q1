import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useRef, useState, useEffect } from 'react';

/**
 * Component wrapper HOC that triggers a state change when styles are modified
 * which allows the wrapped component to update as needed
 * @param Component The component
 * @returns The wrapped component with added functionality
 */
export function withPagesStyleChangeWatcher<P extends ComponentProps>(
  Component: React.ComponentType<P>
) {
  const WatcherComponent: React.ComponentType<P> = (props: P) => {
    const ref = useRef<HTMLDivElement>(null);
    const [styles, setStyles] = useState(props.params.Styles);

    const context = useSitecoreContext();

    const isEditing = context?.sitecoreContext?.pageEditing;

    useEffect(() => {
      if (!ref.current || !isEditing) {
        return;
      }

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mu) => {
          if (mu.type === 'attributes' && mu.attributeName === 'class') {
            // Ignore the 'component' class.
            setStyles(ref.current?.classList.value.replace('component ', '') ?? '');
          }
        });
      });

      observer.observe(ref.current, { attributes: true });

      return () => {
        observer.disconnect();
      };
    }, [isEditing, props.params]);

    // Don't do anything if we're not editing
    if (!isEditing) {
      return <Component {...props} />;
    }

    // Update the Styles param from the current state before rendering
    props.params.Styles = styles;

    // Also update the params on the rendering item, in case that is being used
    if (props.rendering.params) {
      props.rendering.params.Styles = styles;
    }

    return (
      <>
        {/* 
        This needs to be a top level element with the "component" class, but it need not be visible
        nor does it need to be the parent of our actual component
        */}
        <div ref={ref} className={'component ' + styles} style={{ display: 'none' }} />

        <Component {...props} />
      </>
    );
  };

  return WatcherComponent;
}
