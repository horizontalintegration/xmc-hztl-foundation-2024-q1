/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { HeaderProps, NavigationItem } from './headerInterface';
import { Link } from '@sitecore-jss/sitecore-jss-react';
import { DropdownMenu, Logo } from './HeaderDesktop';

const HeaderMobile = (props: HeaderProps) => {
  const { fields, dropdownOpen, setDropdownOpen } = props;
  const { logo, logoLink, navigationList } = fields;

  const [openMenu, setOpenMenu] = useState(false);
  const toggleHamburger = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="block md:hidden">
      <div className="flex justify-between p-4 border-b-2">
        <Logo logo={logo.value} logoLink={logoLink.value} />
        <BurgurIcon toggleHamburger={toggleHamburger} />
      </div>
      {openMenu && (
        <div className="absolute bg-white w-full border-b-2">
          <nav className="flex flex-col gap-1">
            {navigationList.map((item, index) => (
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
          className="text-black text-xl font-semibold hover:text-blue-600"
        >
          {props.displayName}
        </Link>
      ) : (
        <div
          onClick={props.onClick}
          className="text-black text-xl font-semibold hover:text-blue-600 cursor-pointer flex items-start justify-between"
        >
          <span>{props.displayName}</span>
          <span className="flex">
            <i
              className={`${
                props.dropdownOpen === props.index ? 'active rotate-180 text-[#2F2D2E]' : ''
              } fa fa-chevron-down relative text-[#2F2D2E] transition-[0.35s] text-sm`}
            ></i>
          </span>
        </div>
      )}
      {props.fields.megaMenuList.length > 0 && props.dropdownOpen === props.index && (
        <DropdownMenu categories={props.fields.megaMenuList} type="mobile" />
      )}
    </div>
  );
};

const BurgurIcon = ({ toggleHamburger }: { toggleHamburger: () => void }) => {
  return (
    <li className="toggle-menu relative mt-[0] flex w-[17px] items-center justify-center">
      <input
        className="checkbox absolute right-[0px] z-[2] block h-[24px] w-[24px] opacity-0 cursor-pointer"
        type="checkbox"
        name=""
        id=""
        onClick={() => toggleHamburger()}
      />
      <div className="hamburger-lines absolute right-[0px] z-[1] flex h-[12px] w-[17px] flex-col justify-between">
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
