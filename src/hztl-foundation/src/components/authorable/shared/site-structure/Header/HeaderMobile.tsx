/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { HeaderPropsComponent, MegaMenuCategoryInterface, NavigationItem } from './headerInterface';
import { Link } from '@sitecore-jss/sitecore-jss-react';
import { Logo } from './HeaderDesktop';
import { SvgIcon } from 'helpers/SvgIconWrapper';
import SearchInput from 'helpers/Forms/SearchInput';
import CountrySelector from 'helpers/Forms/CountrySelector';

const HeaderMobile = (props: HeaderPropsComponent) => {
  const { fields, dropdownOpen, setDropdownOpen, selectedCountry, setSelectedCountry } = props;
  const { logo, logoLink, navigationList } = fields;

  const [openMenu, setOpenMenu] = useState(false);
  const toggleHamburger = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="block md:hidden border-b-[1px] border-black fixed top-0 w-full bg-inherit z-[8]">
      <div className="flex justify-between p-4">
        <Logo logo={logo.value} logoLink={logoLink} />
        <div className="flex items-center gap-4">
          <CountrySelector
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <BurgurIcon toggleHamburger={toggleHamburger} />
        </div>
      </div>

      {openMenu && (
        <div className="absolute bg-white w-full border-b-[1px] border-black mt-[1px]">
          <div className="p-2">
            <SearchInput placeholder={fields?.searchPlaceholder?.value} />
          </div>
          <nav className="flex flex-col gap-1">
            {navigationList &&
              navigationList.map((item, index) => (
                <NavItem
                  key={index}
                  index={index}
                  {...item}
                  onClick={() => setDropdownOpen(index)}
                  dropdownOpen={dropdownOpen}
                />
              ))}
          </nav>
        </div>
      )}
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
  const isList = props.fields.megaMenuList.length > 0;
  return (
    <div className="relative group px-4 py-3">
      {!isList ? (
        <Link
          field={props.fields.navigationLink}
          className="text-black text-s font-semibold hover:text-blue-600"
        >
          {props.displayName}
        </Link>
      ) : (
        <div
          onClick={props.onClick}
          className="text-black text-s font-semibold hover:text-blue-600 cursor-pointer flex items-start justify-between"
        >
          <span>{props.displayName}</span>
          <span className="flex">
            <SvgIcon
              icon={'cheveron-down'}
              className={`w-auto h-auto cheveron-trasnform ${
                props.dropdownOpen === props.index ? 'active rotate-180 text-[#2F2D2E]' : ''
              }`}
            />
          </span>
        </div>
      )}
      {props.fields.megaMenuList.length > 0 && props.dropdownOpen === props.index && (
        <DropdownMenu categories={props.fields.megaMenuList} />
      )}
    </div>
  );
};

export const DropdownMenu = ({ categories }: { categories: MegaMenuCategoryInterface[] }) => {
  return (
    <div className="bg-grayscale-w-200 flex -mx-m mt-xs justify-start">
      <div className="gap-6 flex flex-col py-xs px-10 justify-center">
        {categories.map((category, index) => (
          <div className="text-start" key={index}>
            <label className="font-bold text-lg mb-xxs">{category.displayName}</label>
            <ul>
              {category.fields.megaMenuLinks.map((item, i) => (
                <li className="mb-2" key={i}>
                  <Link field={item.fields.link} className="text-blue-600 hover:underline">
                    {item.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const BurgurIcon = ({ toggleHamburger }: { toggleHamburger: () => void }) => {
  return (
    <li className="toggle-menu relative mt-0 flex w-[17px] items-center justify-center">
      <input
        className="checkbox absolute right-[0px] z-[2] block h-m w-m opacity-0 cursor-pointer"
        type="checkbox"
        name=""
        id=""
        onClick={() => toggleHamburger()}
      />
      <div className="hamburger-lines absolute right-[0px] z-[1] flex h-xs w-[17px] flex-col justify-between">
        <span
          className={`line line1 block h-[2px] w-full origin-[1px_1.5px]  duration-300 ease-in-out text-black`}
        ></span>
        <span
          className={`line line2 block h-[2px] w-full  duration-100 ease-in-out text-black`}
        ></span>
        <span
          className={`line line3 block h-[2px] w-full origin-[2px_1px]  duration-300 ease-in-out text-black`}
        ></span>
      </div>
    </li>
  );
};
