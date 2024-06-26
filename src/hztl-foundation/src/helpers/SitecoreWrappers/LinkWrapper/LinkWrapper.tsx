// Global
import { Link, LinkProps, LinkField, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import NextLink from 'next/link';
import { sendGTMEvent } from '@next/third-parties/google';
import React from 'react';
import structuredClone from '@ungap/structured-clone';
// Lib
import useIsEditing from 'lib/hooks/use-is-editing';
import { GtmEvent } from 'lib/utils/gtm-utils';
import {
  CTAAlignmentInterface,
  CTAWrapperInterface,
  CTAIconInterface,
  CTAStyleInterface,
  CTATitleInterface,
} from 'src/interfaces/CTAInterface';
import { SvgIcon } from 'helpers/SvgIconWrapper';

/**
 * This component adds some needed accessibility updates to the JSS Link component
 */

export type LinkWrapperProps = Omit<LinkProps, 'field'> &
  CTAWrapperInterface & {
    className?: string;
    field?: LinkField | LinkFieldValue;
    gtmEvent?: GtmEvent;
    srOnlyText?: string;
    suppressLinkText?: boolean;
    suppressNewTabIcon?: boolean;
    ignoreEE?: boolean;
  };

export const srOnlySpan = '<span class="sr-only"> (Opens in a new tab)</span>';
export const newTabIcon = `<span class="svg-icon inline-flex align-middle -ml-3 h-6 w-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="inline ml-2 -mt-1 h-em w-em"><path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clip-rule="evenodd"></path></svg></span>`;

const INTERNAL_LINK_REGEX = /^\/|^\#/g;
type IconAlignment = 'left' | 'right' | 'top' | 'bottom';
const LinkWrapper = React.forwardRef(
  ({
    className,
    ctaType,
    gtmEvent,
    ref,
    field,
    srOnlyText,
    suppressLinkText,
    suppressNewTabIcon,
    ignoreEE,
    children,
    showLinkTextWithChildrenPresent = true,
    ...props
  }: LinkWrapperProps): JSX.Element | null => {
    const isEditing = useIsEditing();
    const {
      cta1Icon,
      cta1IconAlignment,
      cta1Style,
      cta1Link,
      cta1Title,
      cta2Icon,
      cta2IconAlignment,
      cta2Style,
      cta2Link,
      cta2Title,
    } = props.fields || {};
    // Make a deep clone so we don't modify the original object.
    const linkData = cta1Link || field;
    const asLinkField = structuredClone(
      // Format field as LinkField for consistency
      !linkData?.value ? { value: { ...linkData } } : linkData
    ) as LinkField;
    const handleOnClick = () => {
      if (!asLinkField?.value) return;

      const gtmEventInner = {
        ...gtmEvent,
        'gtm.element.dataset.gtmLinkName': asLinkField?.value?.text || asLinkField?.value?.title,
        'gtm.element.dataset.gtmLinkUrl': asLinkField?.value?.href,
      };

      sendGTMEvent(gtmEventInner);
    };

    const text = suppressLinkText ? '' : asLinkField?.value?.text;
    const target = asLinkField?.value?.target;

    const value = asLinkField.value;

    if (value.href?.startsWith('/')) {
      // Force lowercase links for internal urls
      value.href = value.href?.toLocaleLowerCase();
    }
    const buttonAlignmentStyles: Record<IconAlignment, string> = {
      left: 'flex-row-reverse',
      right: 'flex-row',
      top: 'flex-col-reverse',
      bottom: 'flex-col',
    };
    const buttonClasses = (style: string) =>
      `flex h-14 gap-xxs items-center justify-center px-16 py-xs rounded-md text-center font-modern font-bold leading-normal text-base ${
        style === 'secondary' ? 'border-1 border-gray text-gray' : 'bg-gray text-white'
      }`;
    const { href, querystring, anchor } = value;

    // In experience editor, do not pass any children but retain basic styling so that double components do not appear when using <Link>
    if (isEditing && !ignoreEE) {
      return (
        <Link
          className={`${className}  ${
            ctaType &&
            buttonClasses(
              ctaType === 'cta1Link'
                ? `${cta1Style?.fields.Value.value}`
                : `${cta2Style?.fields.Value.value}`
            )
          }`}
          field={asLinkField}
          internalLinkMatcher={INTERNAL_LINK_REGEX}
          ref={typeof ref !== 'string' ? ref : null}
          showLinkTextWithChildrenPresent={showLinkTextWithChildrenPresent}
          {...props}
        />
      );
    }

    // If no content is present, don't print
    if (
      !suppressLinkText &&
      !asLinkField.value.text &&
      !asLinkField.value.href &&
      !asLinkField.value.anchor
    )
      return <></>;
    const renderLinkButton = (
      link?: LinkField,
      icon?: CTAIconInterface,
      iconAlignment?: CTAAlignmentInterface,
      style?: CTAStyleInterface,
      title?: CTATitleInterface
    ) => {
      const styeValue = style?.fields.Value.value;
      const iconAlignmentValue = iconAlignment?.fields.Value.value;
      return link?.value?.href ? (
        <NextLink
          title={title?.value}
          target={link?.value.target}
          className={`${className} ${
            iconAlignmentValue && buttonAlignmentStyles[iconAlignmentValue]
          } ${styeValue && buttonClasses(styeValue)}`}
          aria-label={props['aria-label'] ? props['aria-label'] : text}
          data-component="helpers/a11y/linkwrapper"
          href={{ pathname: href, query: querystring, hash: anchor }}
          key="link"
          // Sitecore's Link field explicitly strips out the locale.  We want to keep it.
          // locale={false}
          onClick={() => handleOnClick()}
          ref={typeof ref !== 'string' ? ref : null}
          {...props}
        >
          {showLinkTextWithChildrenPresent && text ? (
            <span dangerouslySetInnerHTML={{ __html: text }} />
          ) : null}{' '}
          {children}
          {(target === '_blank' || srOnlyText) && (
            <>
              <span className="sr-only">
                {srOnlyText && srOnlyText}
                {/* Preserve a single space character before SR Tab Text */}
                {target === '_blank' && ' (Opens in a new tab)'}
              </span>
              {/* Icon Goes Here */}
              {!suppressNewTabIcon && target === '_blank' && (
                <span dangerouslySetInnerHTML={{ __html: newTabIcon }} />
              )}
            </>
          )}
          {icon?.fields.Value.value && (
            <SvgIcon
              size="xs"
              icon={icon?.fields.Value.value}
              className={`${styeValue === 'primary' ? '!stroke-white' : ' !stroke-black'}`}
            />
          )}
        </NextLink>
      ) : (
        <></>
      );
    };

    switch (ctaType) {
      case 'cta1Link':
        return renderLinkButton(cta1Link, cta1Icon, cta1IconAlignment, cta1Style, cta1Title);
      case 'cta2Link':
        return renderLinkButton(cta2Link, cta2Icon, cta2IconAlignment, cta2Style, cta2Title);
      default:
        return renderLinkButton(asLinkField);
    }
  }
);

LinkWrapper.displayName = 'LinkWrapper';

export default LinkWrapper;
