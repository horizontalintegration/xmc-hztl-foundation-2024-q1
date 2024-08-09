// Global
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import useIsEditing from 'lib/hooks/use-is-editing';

interface MissingDataSourceProps extends ComponentProps {
  usesGraphQL?: boolean;
  experienceEditorText?: string;
}

const GRAPH_QL_COMPONENT_TEXT = 'The component uses GraphQL and is unavailable in Pages or EE.';
const MISSING_DATASOURCE_TEXT = 'The component data is missing.';

/*
 * Tailwind Variants
 */

const tailwindVariants = tv({
  slots: {
    base: ['component'],
    content: ['is-empty-hint'],
    wrapper: ['component-content'],
  },
});

const MissingDataSource = (props: MissingDataSourceProps): JSX.Element => {
  const { usesGraphQL } = props;
  const { styles } = props.params || {};
  const { componentName } = props?.rendering || {};
  const { experienceEditorText } = props;

  const isEditing = useIsEditing();

  const extendedTailwindVariants = tv({
    extend: tailwindVariants,
    slots: {
      base: styles,
    },
  });

  const { base, wrapper, content } = extendedTailwindVariants();

  /*
   * Rendering
   */

  return (
    <div className={base()}>
      <div className={wrapper()}>
        <div className={content()}>
          {componentName} {'|'}{' '}
          {isEditing && usesGraphQL ? GRAPH_QL_COMPONENT_TEXT : MISSING_DATASOURCE_TEXT}
        </div>
        {isEditing && experienceEditorText && <p>{experienceEditorText}</p>}
      </div>
    </div>
  );
};

export default MissingDataSource;
