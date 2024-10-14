// Global
import { sendGTMEvent } from '@next/third-parties/google';
import { Link, LinkProps, LinkField, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import NextLink from 'next/link';
import React, { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

// Lib
import useIsEditing from 'lib/hooks/use-is-editing';
import { GtmEvent } from 'lib/utils/gtm-utils';

import { CtaProps, ctaTailwindVariant } from '../ButtonWrapper/ButtonWrapper';
import { SvgIcon } from 'helpers/SvgIcon';
import structuredClone from '@ungap/structured-clone';

const INTERNAL_LINK_REGEX = /^\/|^\#/g;

export type LinkWrapperProps = Omit<LinkProps, 'field'> &
  CtaProps & {
    callback?: () => void;
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
      callback,
      children,
      className,
      ctaIcon,
      ctaIconAlignment,
      ctaStyle,
      ctaVariant,
      ctaVisibility,
      editable = true,
      field,
      gtmEvent,
      showLinkTextWithChildrenPresent = true,
      srOnlyText,
      suppressNewTabIcon,
      ...props
    }: LinkWrapperProps,
    ref
  ): JSX.Element | null => {
    const isEditing = useIsEditing();

    if (!field) {
      return <></>;
    }

    ctaIcon = ctaIcon ?? ctaStyle?.ctaIcon;
    ctaVariant = ctaVariant ?? ctaStyle?.ctaVariant ?? 'link';
    ctaIconAlignment = ctaIconAlignment ?? ctaStyle?.ctaIconAlignment ?? 'right';
    ctaVisibility = ctaVisibility ?? ctaStyle?.ctaVisibility ?? 'visible';

    // Clone the object so we don't modify the original.
    // This addresses some edge cases issues when the same link is rendered more than once
    // and we're modifying the link.  While it may not always be needed, it's safer to include
    const clonedField = structuredClone(field);

    // Standardize the field because it can either be LinkField or LinkFieldValue
    const fieldValue: LinkFieldValue = {
      ...((clonedField as LinkField)?.value ?? (clonedField as LinkFieldValue)),
    };

    const { href, anchor, querystring, target, title } = fieldValue;

    const text = !showLinkTextWithChildrenPresent && children ? '' : fieldValue.text;

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

      if (callback) callback();
    };

    /*
     * RENDERING
     */

    const linkWrapperTailwindVariant = tv({
      extend: ctaTailwindVariant,
      slots: {
        base: [className],
        iconNewTab: ['align-middle', 'inline-flex', 'ml-2', '-mt-1'],
      },
    });

    const { base, icon, iconNewTab } = linkWrapperTailwindVariant({
      iconAlignment: ctaIconAlignment,
      variant: ctaVariant,
      visibility: ctaVisibility,
    });

    if (isEditing && editable)
      return (
        // Adding the CSS classes to a wrapping div so we can include the icon
        <div className={base()}>
          <Link
            {...props}
            field={field}
            internalLinkMatcher={INTERNAL_LINK_REGEX}
            showLinkTextWithChildrenPresent={false}
            ref={ref}
          >
            {children}
          </Link>
          {/* When in edit mode we cannot render anything inside the Link tag (cause duplicate link), 
          but we can rendering it outside of the link and move the styling to a parent div */}
          {ctaIcon && <SvgIcon className={icon()} icon={ctaIcon} size="xs" />}
        </div>
      );

    /*
     *
     * #1 | Link Text: Yes, Path URL: Yes (Link text and URL are defined)
     * Expected Results: CTA should be visible on the front-end page
     *
     * #2 | Link Text: Yes, Path URL: No (Link text is defined, URL is empty)
     * Expected Results: CTA should not be visible on the front-end page
     * When the link is empty and the URL is set External, the href value is 'http://' (a Sitecore bug)
     * (text && (!href || href === 'http://' || href === 'https://'))
     *
     * #3 | Link Text: No, Path URL: Yes (Internal link) (Link text is empty, URL is an internal link or a Sitecore item)
     * Expected Results: CTA should display the Path text in the front-end
     * Updated the title={title || text || href} and <span>{text || href}</span>
     *
     * #4 | Link Text: No, Path URL: Yes (External link) (Link text is empty, URL is an external link)
     * Expected Results: CTA should display the Path text in the front-end without '/'
     * Updated the <span>{text || (href?.startsWith('/') ? href.slice(1) : href)}</span>
     *
     * #5 | Link Text: Not, Path: Not (Link text is empty and URL is empty)
     * Expected Results: CTA should not be visible on the front-end page
     * if (!anchor && !href && !text) return <></>;
     *
     */
    if (
      (!anchor && !href && !text) ||
      (text && (!href || href === 'http://' || href === 'https://')) // (a Sitecore bug when the External link is empty)
    ) {
      return <></>;
    }

    return (
      <NextLink
        {...props}
        className={base()}
        data-component="helpers/sitecorewrappers/linkwrapper"
        href={{ pathname: href, query: querystring, hash: anchor }}
        onClick={() => handleOnClick()}
        ref={ref}
        target={target}
        title={title || text || href}
      >
        {!children && <span>{text || (href?.startsWith('/') ? href.slice(1) : href)}</span>}
        {children}
        {ctaIcon && <SvgIcon className={icon()} icon={ctaIcon} size="xs" />}
        {(target === '_blank' || srOnlyText) && (
          <>
            <span className="sr-only">
              {/* Preserve a single space character before SR Tab Text */}
              {`${srOnlyText ? srOnlyText : ''}${target === '_blank' && ' (Opens in a new tab)'}`}
            </span>
            {!suppressNewTabIcon && target === '_blank' && (
              <SvgIcon className={iconNewTab()} icon="new-tab" size="xs" />
            )}
          </>
        )}
      </NextLink>
    );
  }
);

LinkWrapper.displayName = 'LinkWrapper';

export default LinkWrapper;
