import { ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { HeaderPropsComponent, MegaMenuCategoryInterface, NavigationItem } from './headerInterface';
import CountrySelector from 'helpers/Forms/CountrySelector';
import PreviewSearchListComponent from 'src/widgets/SearchPreview';
import { SvgIcon } from 'helpers/SvgIconWrapper';
import { useEffect, useRef, useState } from 'react';
import useOutsideClick from 'src/hooks/useClickOutside';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { useRouter } from 'next/router';

const HeaderDesktop = (props: HeaderPropsComponent) => {
  const { HeaderData, selectedCountry, setSelectedCountry } = props;
  const { item } = HeaderData;
  const [dropdownOpen, setDropdownOpen] = useState<null | number>(null);
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const isDropdownOpen = dropdownOpen !== null || showSearch;
  const handleClickOutside = () => {
    handleDropdownToggle(null);
    setShowSearch(false);
  };
  useOutsideClick(headerRef, isDropdownOpen, handleClickOutside);
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!item) {
    return (
      <div className={`component header-desktop ${props.params?.styles}`}>
        <div className="component-content">
          <span className="is-empty-hint">Desktop Header</span>
        </div>
      </div>
    );
  }
  const { logo, logoLink, navigationList } = item;

  return (
    <div className="hidden mmd:block">
      {isDropdownOpen && (
        <div className="shadow-md before:fixed before:left-0 before:top-0 before:z-[9] before:h-full before:w-full before:bg-black/50 before:backdrop-blur-sm"></div>
      )}
      <div className="fixed top-0 w-full bg-white z-50" ref={headerRef}>
        <div className="border-b border-black">
          <div className="h-m w-full bg-grayscale-w-600"></div>
          <div
            className={`md:max-w-screen-xl xl:mx-auto px-s transition-all duration-200 ${
              isScrolled ? 'py-0' : 'py-xxs'
            }`}
          >
            <div className="flex justify-between items-center w-full">
              <div className="w-[50%] flex items-center flex-shrink-0 px-3 ">
                <Logo logo={logo.jsonValue} logoLink={logoLink.jsonValue} />
                <ul className="flex items-center" role="presentation">
                  {navigationList?.items?.map((item, index) => (
                    <NavItem
                      key={index}
                      index={index}
                      {...item}
                      open={() => {
                        handleDropdownToggle(index);
                        setShowSearch(false);
                      }}
                      router={router.asPath}
                      dropdownOpen={dropdownOpen}
                      isScrolled={isScrolled}
                    />
                  ))}
                </ul>
              </div>
              <div className="w-[50%] flex justify-end items-center">
                <div className="w-[50%] flex justify-end">
                  <CountrySelector
                    countryData={item?.country?.targetItems}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                  />
                </div>
                <div className="flex w-[50%]">
                  <PreviewSearchListComponent rfkId={'rfkid_101'} defaultItemsPerPage={5} />
                  {/* <button
                    className={`flex flex-row hover:bg-grayscale-w-200 p-s rounded-full cursor-pointer ${
                      showSearch && 'bg-grayscale-w-200'
                    }`}
                    onClick={() => {
                      handleDropdownToggle(null);
                      setShowSearch(!showSearch);
                    }}
                  >
                    {/* temporary disabling these for version 2 enhancement */}
                  {/* <SvgIcon icon="outline-search" size="xs" /> */}
                  {/* </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSearch && <div className="w-[25%] float-right px-xs bg-white py-xs shadow-md"></div>}
      </div>
    </div>
  );
};
export default HeaderDesktop;

export const Logo = ({ logo, logoLink }: { logo: ImageField; logoLink: LinkField }) => (
  <div className="flex items-center">
    <LinkWrapper field={logoLink?.value}>
      <ImageWrapper field={logo} />
    </LinkWrapper>
  </div>
);
interface NavItemInterface extends NavigationItem {
  open: () => void;
  dropdownOpen: number | null;
  index: number;
  isScrolled: boolean;
  router: string;
}
const NavItem = (props: NavItemInterface) => {
  const [isActive, setIsActive] = useState(false);
  const isList = props?.megaMenuList.items.length > 0;
  const navigationLinks = props?.navigationLink?.jsonValue?.value?.href;
  useEffect(() => {
    if (isList) {
      const hrefValues = props.megaMenuList.items
        .flatMap((category) => category.megaMenuLinks.items)
        .map((linkItem) => linkItem.link.jsonValue.value.href)
        .filter((href) => href);
      setIsActive(hrefValues.includes(props.router));
    } else {
      const _isActive = props.router === navigationLinks;
      setIsActive(_isActive);
    }
  }, [navigationLinks, props.router]);
  const rotationClass = isList && props.index === props.dropdownOpen ? 'rotate-0' : 'rotate-180';
  const strokeClass = isActive ? 'stroke-white' : 'stroke-black';

  return (
    <li className="list-none ml-xs" role="presentation">
      <div
        className={`hover:bg-grayscale-w-200 group rounded-md cursor-pointer text-center px-xxs lg:px-s lg:py-xxs py-xxxs ${
          isList && props.index === props.dropdownOpen && 'bg-grayscale-w-200'
        } ${isActive ? '!bg-grayscale-w-400' : ''}`}
      >
        {!isList ? (
          <LinkWrapper
            role="menuitem"
            aria-haspopup="false"
            field={props?.navigationLink.jsonValue}
            className={`text-xs lg:text-s font-semibold group-hover:underline ${isActive ? 'text-white' : 'text-black'}`}
            ctaVariant="link"
          >
            <PlainTextWrapper field={props?.navigationTitle.jsonValue} />
          </LinkWrapper>
        ) : (
          <button
            onClick={() => isList && props.open()}
            className={`text-xs lg:text-s font-semibold cursor-pointer group-hover:underline ${isActive ? 'text-white' : 'text-black'}`}
            role="menuitem"
            aria-haspopup="true"
          >
            <div className="flex items-center flex-row gap-2">
              <PlainTextWrapper field={props.navigationTitle.jsonValue} />
              <SvgIcon
                viewBox="0 0 16 9"
                className={`trasition duration-200 ${rotationClass} ${strokeClass} w-s h-auto`}
                icon="chevron-up"
                size="xs"
                fill="none"
              />
            </div>
          </button>
        )}
      </div>
      {isList && props.index === props.dropdownOpen && (
        <DropdownMenu categories={props.megaMenuList.items} isScrolled={props.isScrolled} />
      )}
    </li>
  );
};

const DropdownMenu = ({
  categories,
  isScrolled,
}: {
  categories: MegaMenuCategoryInterface[];
  isScrolled: boolean;
}) => {
  return (
    <div
      className={`absolute transition-all duration-200 left-0 w-full z-[9] overflow-hidden border-b border-black ${
        isScrolled ? 'mt-[21px]' : 'mt-[29px]'
      } cursor-default`}
    >
      <div className="bg-grayscale-w-200">
        <div className="flex items-center justify-between md:max-w-screen-xl xl:mx-auto px-4">
          <div className="w-full my-xxs">
            <div className="gap-y-0 gap-xl md:grid-cols-12 grid">
              {categories.map((category, index) => (
                <div
                  className="text-start col-span-4 py-xxxs xl:col-span-3"
                  key={index}
                  role="group"
                  aria-labelledby={`secondary-menu-${index + 1}`}
                >
                  <h2 className="font-bold text-lg mb-xxs" id={`secondary-menu-${index + 1}`}>
                    {category.name}
                  </h2>
                  <ul>
                    {category.megaMenuLinks.items.map((item, i) => (
                      <li className="list-none -ml-s mb-xxs" key={i} role="presentation">
                        <LinkWrapper
                          role="menuitem"
                          field={item.link.jsonValue}
                          className="text-grayscale-w-600 hover:underline"
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
