import { useRef, useState } from 'react';
import { HeaderPropsComponent, MegaMenuCategoryInterface, NavigationItem } from './headerInterface';
import { Logo } from './HeaderDesktop';
import { SvgIcon } from 'helpers/SvgIconWrapper';
import CountrySelector from 'helpers/Forms/CountrySelector';
import PreviewSearchBasicWidget from 'src/widgets/SearchPreview';
import useOutsideClick from 'src/hooks/useClickOutside';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';

const HeaderMobile = (props: HeaderPropsComponent) => {
  const { HeaderData, selectedCountry, setSelectedCountry } = props;
  const { item } = HeaderData;
  const [dropdownOpen, setDropdownOpen] = useState<null | number>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const isDropdownOpen = dropdownOpen !== null || showSearch || openMenu;
  const handleClickOutside = () => {
    handleDropdownToggle(null);
    setShowSearch(false);
    setOpenMenu(false);
  };
  useOutsideClick(headerRef, isDropdownOpen, handleClickOutside);
  const handleDropdownToggle = (index: number | null) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };
  const toggleHamburger = () => {
    setOpenMenu(!openMenu);
  };

  if (!item) {
    return (
      <div className={`component header-mobile ${props.params?.styles}`}>
        <div className="component-content">
          <span className="is-empty-hint">Mobile Header</span>
        </div>
      </div>
    );
  }
  const { logo, logoLink, navigationList } = item;
  return (
    <div className="block mmd:hidden">
      {isDropdownOpen && (
        <div className="shadow-md before:fixed before:left-[0] before:top-[0] before:z-[9] before:h-full before:w-full before:bg-black/[0.5] before:backdrop-blur-sm"></div>
      )}
      <div
        className="fixed top-0 w-full bg-inherit z-50 border-b border-black bg-white"
        ref={headerRef}
      >
        <div className="h-xs w-full bg-grayscale-w-600"></div>
        <div className="flex justify-between p-s">
          <Logo logo={logo.jsonValue} logoLink={logoLink.jsonValue} />
          <div className="flex items-center gap-4">
            <CountrySelector
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
            <BurgurIcon toggleHamburger={toggleHamburger} openMenu={openMenu} />
          </div>
        </div>

        {openMenu && (
          <div className="absolute bg-white w-full border-b border-black mt-px">
            <div className="p-xxs bg-white search-wrapper">
              <PreviewSearchBasicWidget
                rfkId={'rfkid_101'}
                defaultValue=""
                defaultItemsPerPage={5}
              />
            </div>
            <nav className="flex flex-col gap-xxxs">
              {navigationList.items &&
                navigationList.items.map((item, index) => (
                  <NavItem
                    key={index}
                    index={index}
                    {...item}
                    onClick={() => handleDropdownToggle(index)}
                    dropdownOpen={dropdownOpen}
                  />
                ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
export default HeaderMobile;

interface NavItemInterface extends NavigationItem {
  onClick: () => void;
  dropdownOpen: number | null;
  index: number;
}
const NavItem = (props: NavItemInterface) => {
  const isList = props.megaMenuList.items.length > 0;
  return (
    <div className="relative group px-s py-xs">
      {!isList ? (
        <LinkWrapper
          field={props.navigationLink.jsonValue}
          className="text-black text-s gap-xxs !place-items-center font-semibold"
        >
          <PlainTextWrapper field={props.navigationTitle.jsonValue} />
        </LinkWrapper>
      ) : (
        <button
          onClick={props.onClick}
          className="text-black text-s gap-xxs !place-items-center font-semibold cursor-pointer flex items-start justify-between"
        >
          <span>{props.name}</span>
          <span className="flex">
            <SvgIcon
              icon={'chevron-down'}
              className={`w-auto h-auto chevron-transform ${
                props.dropdownOpen === props.index ? 'active rotate-180 text-[#2F2D2E]' : ''
              }`}
            />
          </span>
        </button>
      )}
      {props.megaMenuList.items.length > 0 && props.dropdownOpen === props.index && (
        <DropdownMenu categories={props.megaMenuList.items} />
      )}
    </div>
  );
};

export const DropdownMenu = ({ categories }: { categories: MegaMenuCategoryInterface[] }) => {
  return (
    <div className="bg-grayscale-w-200 flex -mx-m mt-xs justify-start">
      <div className="gap-m flex flex-col py-xs px-l justify-center">
        {categories.map((category, index) => (
          <div className="text-start" key={index}>
            <h2 className="font-bold text-lg mb-xxs">{category.name}</h2>
            <ul>
              {category.megaMenuLinks.items.map((item, i) => (
                <li className="mb-xxs list-none -ml-s" key={i}>
                  <LinkWrapper field={item.link.jsonValue} className=""></LinkWrapper>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const BurgurIcon = ({
  toggleHamburger,
  openMenu,
}: {
  toggleHamburger: () => void;
  openMenu: boolean;
}) => {
  return (
    <li className="toggle-menu relative mt-0 flex w-s items-center justify-center">
      <button
        className="hamburger-button absolute right-0 z-[2] block h-m w-[17px] cursor-pointer"
        aria-label="Toggle Menu"
        aria-expanded={openMenu}
        onClick={() => toggleHamburger()}
      >
        <div className="hamburger-lines absolute right-0 z-[1] flex h-xs w-[17px] flex-col justify-between">
          <span
            className={`line line1 block h-0.5 w-full origin-[1px_1.5px] duration-300 ease-in-out`}
          ></span>
          <span className={`line line2 block h-0.5 w-full duration-100 ease-in-out`}></span>
          <span
            className={`line line3 block h-0.5 w-full origin-[2px_1px] duration-300 ease-in-out`}
          ></span>
        </div>
      </button>
    </li>
  );
};
