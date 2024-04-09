// Global
import { Link, LinkProps, LinkField, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import NextLink from 'next/link';
// import { sendGTMEvent } from '@next/third-parties/google';
import React from 'react';

// Lib
import useIsEditing from 'lib/use-is-editing';
// import { GtmEvent } from 'lib/utils/gtm-utils';

/**
 * This component adds some needed accessibility updates to the JSS Link component
 */

export type LinkWrapperProps = Omit<LinkProps, 'field'> & {
  className?: string;
  field?: LinkField | LinkFieldValue;
  // gtmEvent?: GtmEvent;
  srOnlyText?: string;
  suppressLinkText?: boolean;
  suppressNewTabIcon?: boolean;
  ignoreEE?: boolean;
};

const INTERNAL_LINK_REGEX = /^\/|^\#/g;

const LinkWrapper = React.forwardRef(
  ({
    children,
    className,
    field,
    // gtmEvent,
    ref,
    srOnlyText,
    suppressLinkText,
    suppressNewTabIcon,
    ignoreEE,
    showLinkTextWithChildrenPresent = true,
    ...props
  }: LinkWrapperProps): JSX.Element => {
    const isEditing = useIsEditing();

    if (!field) return <></>;

    // const handleOnClick = () => {
    //   if (!field?.value) return;

    //   const asLinkField = !field.value ? { value: { ...field } } : (field as LinkField);

    //   // const gtmEventInner = {
    //   //   ...gtmEvent,
    //   //   'gtm.element.dataset.gtmLinkName': asLinkField?.value?.text || asLinkField?.value?.title,
    //   //   'gtm.element.dataset.gtmLinkUrl': asLinkField?.value?.href,
    //   // };

    //   // sendGTMEvent(gtmEventInner);
    // };

    // Format field as LinkField for consistency
    const asLinkField = !field.value ? { value: { ...field } } : (field as LinkField);
    const text = suppressLinkText ? '' : asLinkField?.value?.text;
    const target = asLinkField?.value?.target;

    const value = asLinkField.value;

    if (value.href?.startsWith('/')) {
      // Force lowercase links for internal urls
      value.href = value.href?.toLocaleLowerCase();
    }

    const { href, querystring, anchor } = value;

    // In experience editor, do not pass any children but retain basic styling so that double components do not appear when using <Link>
    if (isEditing && !ignoreEE) {
      return (
        <Link
          className={className}
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

    return (
      <NextLink
        title={value.title}
        target={value.target}
        className={className}
        aria-label={props['aria-label'] ? props['aria-label'] : text}
        data-component="helpers/a11y/linkwrapper"
        href={{ pathname: href, query: querystring, hash: anchor }}
        key="link"
        // Sitecore's Link field explicitly strips out the locale.  We want to keep it.
        // locale={false}
        // onClick={() => handleOnClick()}
        ref={typeof ref !== 'string' ? ref : null}
        {...props}
      >
        {showLinkTextWithChildrenPresent && text ? (
          <div dangerouslySetInnerHTML={{ __html: text }} />
        ) : null}
        {children}
        {(target === '_blank' || srOnlyText) && (
          <>
            <span className="sr-only">
              {srOnlyText && srOnlyText}
              {/* Preserve a single space character before SR Tab Text */}
              {target === '_blank' && ' (Opens in a new tab)'}
            </span>
            {/* Icon Goes Here */}
            {!suppressNewTabIcon && target === '_blank' && <span></span>}
          </>
        )}
      </NextLink>
    );
  }
);

LinkWrapper.displayName = 'LinkWrapper';

export default LinkWrapper;
