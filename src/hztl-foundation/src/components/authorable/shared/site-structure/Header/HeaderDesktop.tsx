// Global
import { ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { tv } from 'tailwind-variants';

// Lib
import useIsEditing from 'lib/hooks/use-is-editing';

// Local
import { HeaderPropsComponent, MegaMenuCategoryInterface, NavigationItem } from './headerInterface';
import CountrySelector from 'helpers/Forms/CountrySelector';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import { SvgIcon } from 'helpers/SvgIcon';
import useOutsideClick from 'src/hooks/useClickOutside';
import PreviewSearchListComponent from 'src/widgets/SearchPreview';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['bg-white', 'font-avenir', 'top-0', 'w-full', 'z-40'],
    borderAnimationLine: [
      'absolute',
      'bg-black',
      'bottom-0',
      'duration-300',
      'ease-out',
      'h-0.5',
      'inset-x-0',
      'scale-x-0',
      'transform',
      'transition-transform',
      'group-hover:scale-x-100',
    ],
    buttonItem: [
      'font-semibold',
      'group',
      'px-2',
      'py-1',
      'relative',
      'text-theme-black',
      'text-xl',
    ],
    buttonItemIcon: ['duration-200', 'h-auto', 'trasition', '!w-xs'],
    buttonItemSublink: ['flex', 'gap-2', 'items-center'],
    container: ['max-w-screen-xxl', 'w-full'],
    divider: ['h-3', 'opacity-100', 'bg-theme-black'],
    dropDownMenuCol: ['col-span-4', 'py-1', 'text-start', 'xl:col-span-3'],
    dropDownMenuColHeading: ['font-bold', 'text-lg', 'mb-2'],
    dropDownMenuColItems: ['flex', 'flex-col', 'gap-2', 'list-none'],
    dropDownMenuColItemsLink: ['font-notoSans', 'text-theme-black', 'hover:underline'],
    dropDownMenuContent: ['my-2', 'w-full'],
    dropDownMenuGrid: ['gap-y-0', 'gap-20', 'grid', 'md:grid-cols-12'],
    dropDownMenuInner: ['bg-theme-lightgrey', 'mt-6'],
    dropDownMenuSection: [
      'flex',
      'items-center',
      'justify-between',
      'max-w-screen-xxl',
      'px-20',
      'py-10',
      'xl:mx-auto',
    ],
    dropDownMenuWrapper: [
      'absolute',
      'duration-200',
      'left-0',
      'overflow-hidden',
      'transition-all',
      'w-full',
      'z-10',
    ],
    inner: ['flex', 'justify-center', 'p-4'],
    languageWrapper: ['flex', 'items-center', 'justify-end'],
    logoContainer: ['flex', 'items-center'],
    menuItems: ['flex', 'items-center', 'px-3', 'lg:gap-4', 'lg:px-10'],
    menuWrapper: ['flex', 'justify-between'],
    navTitleLinkWrapper: [
      'font-semibold',
      'relative',
      'group',
      'px-2',
      'py-1',
      'text-theme-black',
      'text-xl',
      'hover:no-underline',
      'hover:text-theme-black',
    ],
    overlay: [
      'shadow-md',
      'before:backdrop-blur-sm',
      'before:bg-theme-black/50',
      'before:fixed',
      'before:h-full',
      'before:left-0',
      'before:top-0',
      'before:w-full',
      'before:z-10',
    ],
    searchBox: ['bg-white', 'float-right', 'p-3', 'shadow-md', 'w-3/12'],
    wrapper: ['border-black'],
  },
  variants: {
    isActive: {
      false: {
        buttonItemIcon: ['stroke-black'],
      },
      true: {
        buttonItemIcon: ['stroke-white'],
      },
    },
    isEditing: {
      false: {
        base: ['fixed'],
      },
      true: {
        base: ['relative'],
      },
    },
    isDropdownOpen: {
      false: {
        wrapper: ['border-b'],
      },
      true: {
        wrapper: ['border-b-2'],
      },
    },
    isRotated: {
      false: {
        buttonItemIcon: ['rotate-180'],
      },
      true: {
        buttonItemIcon: ['rotate-0'],
      },
    },
    isScrollLocked: {
      false: {
        base: ['fixed'],
      },
      true: {
        base: ['absolute'],
      },
    },
  },
});

interface NavItemInterface extends NavigationItem {
  dropdownOpen: number | null;
  index: number;
  isScrolled: boolean;
  open: () => void;
  router: string;
}

const DropdownMenu = ({
  categories,
}: {
  categories: MegaMenuCategoryInterface[];
  isScrolled: boolean;
}) => {
  const {
    dropDownMenuCol,
    dropDownMenuColHeading,
    dropDownMenuColItems,
    dropDownMenuColItemsLink,
    dropDownMenuContent,
    dropDownMenuGrid,
    dropDownMenuInner,
    dropDownMenuSection,
    dropDownMenuWrapper,
  } = TAILWIND_VARIANTS();

  return (
    <div className={dropDownMenuWrapper()}>
      <div className={dropDownMenuInner()}>
        <div className={dropDownMenuSection()}>
          <div className={dropDownMenuContent()}>
            <div className={dropDownMenuGrid()}>
              {categories.map((category, index) => (
                <div
                  aria-labelledby={`secondary-menu-${index + 1}`}
                  className={dropDownMenuCol()}
                  key={category.id}
                  role="group"
                >
                  <h2 className={dropDownMenuColHeading()} id={`secondary-menu-${index + 1}`}>
                    {category.name}
                  </h2>
                  <ul className={dropDownMenuColItems()}>
                    {category.megaMenuLinks.items.map((item) => (
                      <li key={item.id} role="presentation">
                        <LinkWrapper
                          className={dropDownMenuColItemsLink()}
                          field={item.link.jsonValue}
                          role="menuitem"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Logo = ({ logo, logoLink }: { logo: ImageField; logoLink: LinkField }) => {
  const { logoContainer } = TAILWIND_VARIANTS();

  return (
    <div className={logoContainer()}>
      <LinkWrapper field={logoLink?.value}>
        <ImageWrapper field={logo} />
      </LinkWrapper>
    </div>
  );
};

const NavItem = (props: NavItemInterface) => {
  const { dropdownOpen, index, isScrolled, megaMenuList, navigationLink, navigationTitle } =
    props || {};

  const isList = megaMenuList.items.length > 0;
  const navigationLinks = navigationLink?.jsonValue?.value?.href;

  /*
   * State
   */

  const [isActive, setIsActive] = useState(false);

  /*
   * Lifecycle
   */

  useEffect(() => {
    if (isList) {
      const hrefValues = megaMenuList.items
        .flatMap((category) => category.megaMenuLinks.items)
        .map((linkItem) => linkItem.link.jsonValue.value.href)
        .filter((href) => href);

      setIsActive(hrefValues.includes(props.router));
    } else {
      setIsActive(props.router === navigationLinks);
    }
  }, [isList, megaMenuList, navigationLinks, props.router]);

  /*
   * Rendering
   */

  const {
    borderAnimationLine,
    buttonItem,
    buttonItemIcon,
    buttonItemSublink,
    navTitleLinkWrapper,
  } = TAILWIND_VARIANTS({
    isActive: isActive,
    isRotated: isList && index === dropdownOpen,
  });

  return (
    <li>
      {!isList ? (
        <LinkWrapper
          aria-haspopup="false"
          className={navTitleLinkWrapper()}
          ctaVariant="link"
          field={props?.navigationLink.jsonValue}
          role="menuitem"
        >
          <span className={borderAnimationLine()} />
          <PlainTextWrapper field={navigationTitle.jsonValue} />
        </LinkWrapper>
      ) : (
        <button
          aria-haspopup="true"
          className={buttonItem()}
          onClick={() => isList && props.open()}
          role="menuitem"
        >
          <span className={borderAnimationLine()} />
          <span className={buttonItemSublink()}>
            <PlainTextWrapper field={navigationTitle.jsonValue} />
            <SvgIcon
              className={buttonItemIcon()}
              fill="none"
              icon="chevron-up"
              size="xs"
              viewBox="0 0 24 24"
            />
          </span>
        </button>
      )}
      {isList && index === dropdownOpen && (
        <DropdownMenu categories={megaMenuList.items} isScrolled={isScrolled} />
      )}
    </li>
  );
};

const HeaderDesktop = (props: HeaderPropsComponent) => {
  const { HeaderData, selectedCountry, setSelectedCountry } = props || {};
  const { item } = HeaderData || {};
  const { logo, logoLink, navigationList } = item;

  const isEditing = useIsEditing();
  const router = useRouter();

  const headerRef = useRef<HTMLDivElement>(null);

  /*
   * STATE
   */

  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const isDropdownOpen = dropdownOpen !== null || showSearch;

  /*
   * EVENT HANDLERS
   */

  const handleClickOutside = () => {
    handleDropdownToggle(null);

    setShowSearch(false);
  };

  const handleDropdownToggle = (index: number | null) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useOutsideClick(headerRef, isDropdownOpen, handleClickOutside);

  /*
   * LIFECYCLE
   */

  useEffect(() => {
    const handleRouteChange = () => {
      setDropdownOpen(null);
      setShowSearch(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsScrollLocked(document.body.hasAttribute('data-scroll-locked'));
    });

    observer.observe(document.body, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Rendering
   */

  if (!item) {
    return <></>;
  }

  const {
    overlay,
    base,
    wrapper,
    divider,
    inner,
    container,
    menuWrapper,
    menuItems,
    languageWrapper,
    searchBox,
  } = TAILWIND_VARIANTS({
    isEditing: isEditing,
    isDropdownOpen: isDropdownOpen,
    isScrollLocked: isScrollLocked,
  });

  return (
    <>
      {isDropdownOpen && <div className={overlay()}></div>}
      <div className={base()} ref={headerRef}>
        <div className={wrapper()}>
          <hr className={divider()}></hr>
          <div className={inner()}>
            <div className={container()}>
              <div className={menuWrapper()}>
                <div className="flex md:pl-6">
                  <Logo logo={logo.jsonValue} logoLink={logoLink.jsonValue} />
                  <ul className={menuItems()} role="presentation">
                    {navigationList?.items?.map((item, index) => (
                      <NavItem
                        dropdownOpen={dropdownOpen}
                        index={index}
                        isScrolled={isScrolled}
                        key={item?.id}
                        open={() => {
                          handleDropdownToggle(index);
                          setShowSearch(false);
                        }}
                        router={router.asPath}
                        {...item}
                      />
                    ))}
                  </ul>
                </div>
                <div className={languageWrapper()}>
                  <CountrySelector
                    countryData={item?.country?.targetItems}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                  />
                  <div className="flex">
                    <PreviewSearchListComponent defaultItemsPerPage={5} rfkId={'rfkid_101'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSearch && <div className={searchBox()}></div>}
      </div>
    </>
  );
};

export default HeaderDesktop;
