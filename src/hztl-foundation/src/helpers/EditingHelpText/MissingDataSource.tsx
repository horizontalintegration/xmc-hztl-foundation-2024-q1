import { ComponentProps } from 'lib/component-props';
import useIsEditing from 'lib/hooks/use-is-editing';
import { tv } from 'tailwind-variants';

interface MissingDataSourceProps extends ComponentProps {
  usesGraphQL?: boolean;
}

// The class names and styles were copied from components they can be removed if not needed
const tailwindVariants = tv({
  slots: {
    wrapper: ['component-content'],
    content: ['is-empty-hint'],
  },
});

const MissingDataSource = (props: MissingDataSourceProps): JSX.Element => {
  const { wrapper, content } = tailwindVariants();
  const isEditing = useIsEditing();

  const { usesGraphQL } = props;
  const componentName = props?.rendering?.componentName;
  const renderStyles = props.params?.styles || '';

  const missingDataSourceText = 'The component data source is missing.';
  const graphQLComponentText = 'The component uses GraphQL and is unavailable in Pages or EE.';

  return (
    <div className={`component ${renderStyles}`}>
      <div className={wrapper()}>
        <span className={content()}>
          {componentName} {'|'}{' '}
          {isEditing && usesGraphQL ? graphQLComponentText : missingDataSourceText}
        </span>
      </div>
    </div>
  );
};

export default MissingDataSource;
