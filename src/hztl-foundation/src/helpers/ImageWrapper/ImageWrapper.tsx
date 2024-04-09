// SEE: https://nextjs.org/docs/app/api-reference/components/image
// SEE: https://refine.dev/blog/using-next-image/#src

// Global
import { Image as JSSImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import Image, { ImageProps } from 'next/image';

// Lib
import useIsEditing from 'lib/use-is-editing';

/**
 * JSS does not yet support Next Image in Experience Editor
 * This component will switch between the two based on environment
 * which allows us to get the various performance benefits from Next Image
 *
 * Note that the images may display slightly differently in
 * Experience Editor as the JSS Image component doesn't have the same layout options
 */

export interface SizedImageField extends ImageField {
  value?: {
    alt?: string;
    height: number | `${number}`;
    src?: string;
    width: number | `${number}`;
  };
}

export interface ImageWrapperProps {
  className?: string;
  editable?: boolean;
  field?: SizedImageField | ImageField;
  layout?: NextImageLayoutOption;
  priority?: boolean;
  sizes?: string;
}

type NextImageLayoutOption = 'fill' | 'intrinsic' | 'responsive';

const ImageWrapper = ({
  className,
  editable,
  field,
  layout = 'intrinsic',
  priority,
  sizes,
}: ImageWrapperProps): JSX.Element => {
  const { alt, height, src, width } = field?.value || {};
  const isEditing = useIsEditing();

  const newSrc = normalizeImageUrl(src);

  // If running in Experience Editor, return <JSSImage /> component.
  if (isEditing) {
    return (
      <JSSImage field={{ ...field, value: { ...field?.value, src: newSrc } }} editable={editable} />
    );
  }

  // If the image has no src property, return nothing.
  if (!newSrc) return <></>;

  const nextImageProps: ImageProps = {
    alt: (alt as string) || '',
    className: className,
    // layout,
    priority,
    sizes,
    src: newSrc,
  };

  // Remove layout and update with new usage based on NextImage in Next 13+
  if (layout === 'responsive') {
    nextImageProps.sizes = '100vw';
    nextImageProps.style = {
      width: '100%',
      height: 'auto',
    };
  }

  if (layout === 'fill') {
    nextImageProps.fill = true;
  }

  if (layout !== 'fill') {
    nextImageProps.height = height as number;
    nextImageProps.width = width as number;
  }

  // for local development with webp images that are missing width property.
  if (process.env.NODE_ENV === 'development' && !nextImageProps.width && !nextImageProps.fill)
    return <JSSImage data-component="helpers/general/imagewrapper" {...nextImageProps} />;

  return <Image data-component="helpers/general/imagewrapper" {...nextImageProps} />;
};

export default ImageWrapper;

/**
 * To support preview site we normalize media urls to strip out the domain if it is coming from Sitecore.
 */
export function normalizeImageUrl(src: string | undefined) {
  let newSrc = src;
  if (src) {
    const publicUrl = new URL(process.env.PUBLIC_URL as string);

    // If it's a fully qualified url, use it as is, otherwise include the public url
    const imageUrl = src.startsWith('http') ? new URL(src) : new URL(src, publicUrl);

    if (imageUrl.pathname.startsWith('/-/media/')) {
      newSrc = src.replace(imageUrl.origin, '');
    }
  }
  return newSrc;
}
