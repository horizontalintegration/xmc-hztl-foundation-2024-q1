// Global
import { useEffect, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { HeaderPropsComponent, MegaMenuCategoryInterface, NavigationItem } from './headerInterface';

// Local
import { Logo } from './HeaderDesktop';
import CountrySelector from 'helpers/Forms/CountrySelector';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import { SvgIcon } from 'helpers/SvgIcon';
import useOutsideClick from 'src/hooks/useClickOutside';
import PreviewSearchBasicWidget from 'src/widgets/SearchPreview';

interface NavItemInterface extends NavigationItem {
  onClick: () => void;
  dropdownOpen: number | null;
  index: number;
}

const TAILWIND_VARIANTS = tv({
  slots: {
    base: [
      'shadow-md',
      'before:fixed',
      'before:left-[0]',
      'before:top-[0]',
      'before:z-[9]',
      'before:h-full',
      'before:w-full',
      'before:bg-black/[0.5]',
      'before:backdrop-blur-sm',
    ],
    wrapper: ['fixed', 'top-0', 'w-full', 'bg-inherit', 'z-50', 'bg-white'],
    divider: ['h-xs', 'w-full', 'bg-grayscale-w-600'],
    headerSection: ['flex', 'justify-between', 'p-s'],
    hamburgerWrapper: ['flex', 'items-center'],
    languageWrapper: ['absolute', 'bg-white', 'w-full', 'border-b', 'border-black'],
    languageSelection: ['p-spacing-spacing-4', 'bg-grayscale-w-200', 'rounded my-1'],
    searchWrapper: ['p-xxs', 'bg-white', 'search-wrapper'],
    menuItems: ['flex', 'flex-col', 'gap-spacing-spacing-4', 'm-0', 'p-spacing-spacing-4'],
    menuNavItem: ['relative', 'group', 'list-none', 'm-0'],
    linkWrapper: [
      'text-black',
      'text-s',
      'gap-xxs',
      '!place-items-center',
      'font-semibold',
      'px-spacing-spacing-4',
    ],
    dropDownButton: [
      'w-full',
      'text-black',
      'text-s',
      'gap-xxs',
      '!place-items-center',
      'font-semibold',
      'cursor-pointer',
      'flex',
      'items-start',
      'justify-between',
      'px-spacing-spacing-4',
    ],
    dropDownMenuWrapper: ['bg-grayscale-w-200', 'my-spacing-spacing-4'],
    dropDownMenuGroup: ['px-spacing-spacing-4', 'pt-spacing-spacing-4'],
    dropDownItemName: ['font-bold', 'text-lg'],
    dropDownItem: ['py-spacing-spacing-4'],
    hamburgerBase: ['flex', 'w-full', 'h-full', 'justify-center', 'gap-4', 'items-center'],
    hamburgerItem: [
      'toggle-menu',
      'relative',
      'mt-0',
      'flex',
      'w-s',
      'items-center',
      'justify-center',
    ],
  },
  variants: {
    isOpen: {
      false: {
        wrapper: ['border-b', 'border-black'],
      },
      true: {
        wrapper: [],
      },
    },
  },
});

const HeaderMobile = (props: HeaderPropsComponent) => {
  const { HeaderData, selectedCountry, setSelectedCountry } = props || {};
  const { item } = HeaderData || {};
  const { logo, logoLink, navigationList } = item || {};

  const headerRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  /*
   * STATE
   */

  const [dropdownOpen, setDropdownOpen] = useState<null | number>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  /*
   * EVENT HANDLERS
   */

  const handleClickOutside = () => {
    handleDropdownToggle(null);
    setOpenMenu(false);
    setShowSearch(false);
  };

  const handleDropdownToggle = (index: number | null) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleHamburger = () => {
    setOpenMenu(!openMenu);
    setShowSearch(false);
  };

  const toggleSearch = () => {
    setOpenMenu(!openMenu);
    setShowSearch(true);
  };

  /*
   * LIFECYCLE
   */

  useEffect(
    () => setIsDropdownOpen(dropdownOpen !== null || showSearch || openMenu),
    [dropdownOpen, showSearch, openMenu]
  );

  useEffect(() => {
    const currentHeaderRef = headerRef.current;
    const currentMenuContainerRef = menuContainerRef.current;

    const updateMenuHeight = () => {
      if (currentHeaderRef && currentMenuContainerRef) {
        const totalMenuHeight =
          currentHeaderRef.offsetHeight + currentMenuContainerRef.offsetHeight;

        setMenuHeight(totalMenuHeight);

        if (totalMenuHeight > window.innerHeight) {
          currentHeaderRef.style.height = '100%';
          currentHeaderRef.style.overflow = 'auto';
        } else {
          currentHeaderRef.style.height = 'initial';
          currentHeaderRef.style.overflow = 'initial';
        }
      }
    };

    const handleResize = () => {
      updateMenuHeight();
    };

    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden';

      updateMenuHeight();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'initial';
      if (currentHeaderRef) {
        currentHeaderRef.style.height = 'initial';
      }
    };
  }, [dropdownOpen, isDropdownOpen, menuHeight, openMenu]);

  useOutsideClick(headerRef, isDropdownOpen, handleClickOutside);

  const {
    base,
    divider,
    hamburgerWrapper,
    headerSection,
    languageSelection,
    languageWrapper,
    menuItems,
    searchWrapper,
    wrapper,
  } = TAILWIND_VARIANTS({ isOpen: openMenu });

  /*
   * Rendering
   */

  if (!item) return <></>;

  const DropdownMenu = ({ categories }: { categories: MegaMenuCategoryInterface[] }) => {
    const { dropDownMenuWrapper, dropDownMenuGroup, dropDownItemName, dropDownItem } =
      TAILWIND_VARIANTS();

    return (
      <div className={dropDownMenuWrapper()}>
        {categories.map((category, index) => (
          <div
            aria-labelledby={`secondary-menu-${index + 1}`}
            className={dropDownMenuGroup()}
            key={index}
            role="group"
          >
            <h2 className={dropDownItemName()} id={`secondary-menu-${index + 1}`}>
              {category.name}
            </h2>
            <ul>
              {category.megaMenuLinks.items.map((item, i) => (
                <li className={dropDownItem()} key={i} role="presentation">
                  <LinkWrapper
                    callback={() => handleClickOutside()}
                    field={item.link.jsonValue}
                    role="menuitem"
                  ></LinkWrapper>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const Hamburger = ({
    openMenu,
    toggleHamburger,
    toggleSearch,
  }: {
    openMenu: boolean;
    toggleHamburger: () => void;
    toggleSearch: () => void;
  }) => {
    const { hamburgerBase, hamburgerItem } = TAILWIND_VARIANTS();

    return (
      <ul className={hamburgerBase()}>
        <li className={hamburgerItem()}>
          <button
            aria-expanded={openMenu}
            aria-label="Toogle Search"
            className="hamburger-button items-center align-middle absolute right-0 z-[2] block h-m w-[17px] cursor-pointer"
            onClick={() => toggleSearch()}
          >
            {/* Todo: Use the SVGIcon helper component */}
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </li>
        <li className="toggle-menu relative mb-2 flex w-s items-center justify-center">
          <button
            aria-expanded={openMenu}
            aria-label="Toggle Menu"
            className="hamburger-button absolute right-2 z-[2] block h-m w-[17px] cursor-pointer"
            onClick={() => toggleHamburger()}
          >
            <svg
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.80005 7.99999C4.80005 7.11634 5.51639 6.39999 6.40005 6.39999H25.6C26.4837 6.39999 27.2001 7.11634 27.2001 7.99999C27.2001 8.88365 26.4837 9.59999 25.6 9.59999H6.40005C5.51639 9.59999 4.80005 8.88365 4.80005 7.99999Z"
                fill="black"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M4.80005 16C4.80005 15.1163 5.51639 14.4 6.40005 14.4H25.6C26.4837 14.4 27.2001 15.1163 27.2001 16C27.2001 16.8836 26.4837 17.6 25.6 17.6H6.40005C5.51639 17.6 4.80005 16.8836 4.80005 16Z"
                fill="black"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M4.80005 24C4.80005 23.1163 5.51639 22.4 6.40005 22.4H25.6C26.4837 22.4 27.2001 23.1163 27.2001 24C27.2001 24.8836 26.4837 25.6 25.6 25.6H6.40005C5.51639 25.6 4.80005 24.8836 4.80005 24Z"
                fill="black"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    );
  };

  const NavItem = (props: NavItemInterface) => {
    const isList = props.megaMenuList.items.length > 0;
    const rotationClass = isList && props.index === props.dropdownOpen ? '-rotate-0' : 'rotate-180';

    const { menuNavItem, linkWrapper, dropDownButton } = TAILWIND_VARIANTS();

    return (
      <li className={menuNavItem()} role="presentation">
        {!isList ? (
          <LinkWrapper
            aria-haspopup="false"
            callback={() => handleClickOutside()}
            className={linkWrapper()}
            field={props.navigationLink.jsonValue}
            role="menuitem"
          >
            <PlainTextWrapper field={props.navigationTitle.jsonValue} />
          </LinkWrapper>
        ) : (
          <button
            aria-haspopup="true"
            className={dropDownButton()}
            onClick={props.onClick}
            role="menuitem"
          >
            <span>{props.name}</span>
            <span className="flex">
              <SvgIcon
                className={`trasition ${rotationClass} duration-200 stroke-black !w-xs h-auto`}
                fill="none"
                icon="chevron-up"
                size="xs"
                viewBox="0 0 16 9"
              />
            </span>
          </button>
        )}
        {props.megaMenuList.items.length > 0 && props.dropdownOpen === props.index && (
          <DropdownMenu categories={props.megaMenuList.items} />
        )}
      </li>
    );
  };

  return (
    <>
      {openMenu && isDropdownOpen && <div className={base()}></div>}
      <div className={wrapper()} ref={headerRef}>
        <div className={divider()}></div>
        <div className={headerSection()}>
          <Logo logo={logo.jsonValue} logoLink={logoLink.jsonValue} />
          <div className={hamburgerWrapper()}>
            <Hamburger
              openMenu={openMenu}
              toggleHamburger={toggleHamburger}
              toggleSearch={toggleSearch}
            />
          </div>
        </div>
        {openMenu && (
          <div className={languageWrapper()} ref={menuContainerRef}>
            {!showSearch && (
              <div className={languageSelection()}>
                <CountrySelector
                  countryData={item?.country?.targetItems}
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                />
              </div>
            )}
            {showSearch ? (
              <div className={searchWrapper()}>
                <PreviewSearchBasicWidget defaultItemsPerPage={5} rfkId="rfkid_101" />
              </div>
            ) : (
              <ul className={menuItems()} role="presentation">
                {navigationList.items &&
                  navigationList.items.map((item, index) => (
                    <NavItem
                      {...item}
                      dropdownOpen={dropdownOpen}
                      index={index}
                      key={index}
                      onClick={() => handleDropdownToggle(index)}
                    />
                  ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderMobile;
