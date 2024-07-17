import { ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { HeaderPropsComponent, MegaMenuCategoryInterface, NavigationItem } from './headerInterface';
import CountrySelector from 'helpers/Forms/CountrySelector';
import PreviewSearchBasicWidget from 'src/widgets/SearchPreview';
import { SvgIcon } from 'helpers/SvgIconWrapper';
import { useEffect, useRef, useState } from 'react';
import useOutsideClick from 'src/hooks/useClickOutside';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';

const HeaderDesktop = (props: HeaderPropsComponent) => {
  const { fields, selectedCountry, setSelectedCountry } = props;
  const [dropdownOpen, setDropdownOpen] = useState<null | number>(null);

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

  if (!fields) {
    return (
      <div className={`component header-desktop ${props.params?.styles}`}>
        <div className="component-content">
          <span className="is-empty-hint">Desktop Header</span>
        </div>
      </div>
    );
  }
  const graphqlData = fields?.data?.item;
  const { logo, logoLink, navigationList } = graphqlData;

  return (
    <div className="hidden md:block">
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
            <div className="flex justify-between items-center">
              <div className="flex items-center flex-shrink-0">
                <Logo logo={logo.jsonValue} logoLink={logoLink.jsonValue} />
                <ul className="flex items-center">
                  {navigationList?.items?.map((item, index) => (
                    <NavItem
                      key={index}
                      index={index}
                      {...item}
                      open={() => {
                        handleDropdownToggle(index);
                        setShowSearch(false);
                      }}
                      close={() => handleDropdownToggle(null)}
                      dropdownOpen={dropdownOpen}
                      isScrolled={isScrolled}
                    />
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-end gap-s">
                <div>
                  <CountrySelector
                    countryData={props.fields.country}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                  />
                </div>
                <div className="flex">
                  <button
                    className={`flex flex-row hover:bg-grayscale-w-200 p-s rounded-full cursor-pointer ${
                      showSearch && 'bg-grayscale-w-200'
                    }`}
                    onClick={() => {
                      handleDropdownToggle(null);
                      setShowSearch(!showSearch);
                    }}
                  >
                    {/* temporary disabling these for version 2 enhancement */}
                    <SvgIcon icon="outline-search" className="w-s h-s" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSearch && (
          <div className="w-full px-xs bg-white py-xs shadow-md">
            <PreviewSearchBasicWidget rfkId={'rfkid_101'} defaultValue="" defaultItemsPerPage={5} />
          </div>
        )}
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
  close: () => void;
  dropdownOpen: number | null;
  index: number;
  isScrolled: boolean;
}
const NavItem = (props: NavItemInterface) => {
  const isList = props?.megaMenuList.items.length > 0;
  console.log(props?.megaMenuList.items);
  return (
    <li className="list-none ml-xs" onClick={() => isList && props.open()}>
      <div
        className={`hover:bg-grayscale-w-200 group rounded-md cursor-pointer text-center px-xxs lg:px-s lg:py-xxs py-xxxs ${
          isList && props.index === props.dropdownOpen && 'bg-grayscale-w-200'
        }`}
      >
        {!isList ? (
          <LinkWrapper
            field={props?.navigationLink.jsonValue}
            className="text-black text-xs lg:text-s font-semibold group-hover:underline"
          >
            <PlainTextWrapper field={props?.navigationTitle.jsonValue} />
          </LinkWrapper>
        ) : (
          <button className="text-black text-xs lg:text-s font-semibold cursor-pointer group-hover:underline ">
            <div className="flex items-center flex-row gap-xs">
              <PlainTextWrapper field={props.navigationTitle.jsonValue} />
              {isList && props.index === props.dropdownOpen ? (
                <SvgIcon className="-rotate-90 stroke-black w-s h-auto" icon={'arrow-right'} />
              ) : (
                <SvgIcon className="rotate-90 stroke-black w-s h-auto" icon={'arrow-right'} />
              )}
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
                <div className="text-start col-span-4 py-xxxs xl:col-span-3" key={index}>
                  <label className="font-bold text-lg mb-xxs">{category.name}</label>
                  <ul>
                    {category.megaMenuLinks.items.map((item, i) => (
                      <li className="list-none -ml-s mb-xxs" key={i}>
                        <LinkWrapper
                          field={item.link.jsonValue}
                          className="text-gray hover:underline"
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
