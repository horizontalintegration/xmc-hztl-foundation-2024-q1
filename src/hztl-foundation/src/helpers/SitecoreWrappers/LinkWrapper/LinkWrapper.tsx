// Global
import { sendGTMEvent } from '@next/third-parties/google';
import { Link, LinkProps, LinkField, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import NextLink from 'next/link';
// import { tv } from 'tailwind-variants';
import React, { forwardRef } from 'react';

// Lib
import useIsEditing from 'lib/hooks/use-is-editing';
import { GtmEvent } from 'lib/utils/gtm-utils';

import { CtaProps, ctaTailwindVariant } from '../ButtonWrapper/ButtonWrapper';
import { SvgIcon } from 'helpers/SvgIconWrapper';

const INTERNAL_LINK_REGEX = /^\/|^\#/g;

export const NEW_TAB_ICON = (
  <span className="svg-icon inline-flex align-middle -ml-3 h-6 w-6">
    <svg
      aria-hidden="true"
      className="inline ml-2 -mt-1 h-em w-em"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  </span>
);

export type LinkWrapperProps = Omit<LinkProps, 'field'> &
  CtaProps & {
    className?: string;
    field?: LinkField | LinkFieldValue;
    gtmEvent?: GtmEvent;
    ignoreEE?: boolean;
    srOnlyText?: string;
    suppressNewTabIcon?: boolean;
  };

const LinkWrapper = forwardRef<HTMLAnchorElement, LinkWrapperProps>(
  (
    {
      children,
      className,
      editable = true,
      field,
      gtmEvent,
      showLinkTextWithChildrenPresent = true,
      srOnlyText,
      suppressNewTabIcon = true,
      ...props
    }: LinkWrapperProps,
    ref
  ): JSX.Element | null => {
    const isEditing = useIsEditing();

    if (!field) {
      return <></>;
    }

    const ctaIcon = props.ctaIcon ?? props.ctaStyle?.['cta-icon'].value;
    const ctaVariant = props.ctaVariant ?? props.ctaStyle?.['cta-variant'].value ?? 'link';
    const ctaIconAlignment =
      props.ctaIconAlignment ?? props.ctaStyle?.['cta-icon-alignment'].value ?? 'right';

    const fieldValue = { ...((field as LinkField)?.value ?? (field as LinkFieldValue)) };

    const { anchor, querystring, target, text, title } = fieldValue;

    let { href } = fieldValue;

    // Force lowercase links for internal urls
    if (href?.startsWith('/')) {
      href = href?.toLocaleLowerCase();
    }
    fieldValue.href = href;
    const { base, icon } = ctaTailwindVariant({
      className: className,
      iconAlignment: ctaIconAlignment,
      variant: ctaVariant,
    });

    /*
     * EVENT HANDLERS
     */

    const handleOnClick = () => {
      if (!field?.value) return;

      const gtmEventInner = {
        ...gtmEvent,
        'gtm.element.dataset.gtmLinkName': text || title,
        'gtm.element.dataset.gtmLinkUrl': href,
      };

      sendGTMEvent(gtmEventInner);
    };

    /*
     * RENDERING
     */

    // In experience editor, do not pass any children but retain basic styling so that double components do not appear when using <Link>
    if (isEditing && editable)
      return (
        <Link
          className={base()}
          field={field}
          internalLinkMatcher={INTERNAL_LINK_REGEX}
          ref={ref}
          showLinkTextWithChildrenPresent={showLinkTextWithChildrenPresent}
        >
          {/* We cannot render this is edit mode */}
          {/* {ctaIcon && <SvgIcon className={icon()} icon={ctaIcon} size="xs" />} */}
        </Link>
      );

    // If no content is present, don't print
    if (!anchor && !href && !showLinkTextWithChildrenPresent && !text) return <></>;

    return (
      <NextLink
        aria-label={props['aria-label'] ? props['aria-label'] : text}
        className={base()}
        data-component="helpers/sitecorewrappers/linkwrapper"
        href={{ pathname: href, query: querystring, hash: anchor }}
        onClick={() => handleOnClick()}
        ref={ref}
        target={target}
        title={title || text}
      >
        {showLinkTextWithChildrenPresent && text ? <span>{text}</span> : null}
        {children}
        {ctaIcon && <SvgIcon className={icon()} icon={ctaIcon} size="xs" />}
        {(target === '_blank' || srOnlyText) && (
          <>
            <span className="sr-only">
              {/* Preserve a single space character before SR Tab Text */}
              {`${srOnlyText}${target === '_blank' && ' (Opens in a new tab)'}`}
            </span>
            {!suppressNewTabIcon && target === '_blank' && NEW_TAB_ICON}
          </>
        )}
      </NextLink>
    );
  }
);

LinkWrapper.displayName = 'LinkWrapper';

export default LinkWrapper;
