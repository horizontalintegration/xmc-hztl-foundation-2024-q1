/* eslint-disable prettier/prettier */
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  HeaderPropsComponent,
  LogoInterface,
  MegaMenuCategoryInterface,
  NavigationItem,
} from './headerInterface';
import { Link } from '@sitecore-jss/sitecore-jss-react';
import Image from 'next/image';
import SearchInput from 'helpers/Forms/SearchInput';
import CountrySelector from 'helpers/Forms/CountrySelector';

const HeaderDesktop = (props: HeaderPropsComponent) => {
  const { fields, dropdownOpen, setDropdownOpen, selectedCountry, setSelectedCountry } = props;
  const { logo, logoLink, navigationList } = fields;
  return (
    <div className="hidden md:block border-b-[1px] border-black fixed top-0 w-full bg-inherit z-[8]">
      <div className="md:max-w-screen-xl  xl:mx-auto p-s">
        <div className="flex items-center justify-end gap-s">
          <div>
            <CountrySelector
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
          </div>
          <div>
            <SearchInput placeholder={fields?.searchPlaceholder?.value} />
          </div>
        </div>
        <div className="flex items-center mt-xxs">
          <Logo logo={logo.value} logoLink={logoLink} />
          <ul className="flex px-s lg:px-xs  md:gap-m gap-xs items-center">
            {navigationList.map((item, index) => (
              <NavItem
                key={index}
                index={index}
                {...item}
                open={() => setDropdownOpen(index)}
                close={() => setDropdownOpen(null)}
                dropdownOpen={dropdownOpen}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderDesktop;

export const Logo = ({ logo, logoLink }: { logo: LogoInterface; logoLink: LinkField }) => (
  <div className="flex items-center">
    <Link field={logoLink.value}>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={parseInt(logo.width)}
        height={parseInt(logo.height)}
        className="w-20 h-14"
      />
    </Link>
  </div>
);
interface NavItemInterface extends NavigationItem {
  open: () => void;
  close: () => void;
  dropdownOpen: number | null;
  index: number;
}
const NavItem = (props: NavItemInterface) => {
  const isList = props.fields.megaMenuList.length > 0;
  return (
    <li className="" onMouseEnter={props.open} onMouseLeave={props.close}>
      {/* <li className="" onClick={props.open}> */}
      <div className="hover:bg-grayscale-w-200 hover:underline rounded-md cursor-pointer text-center px-s py-xxs">
        {!isList ? (
          <Link
            field={props.fields.navigationLink}
            className="text-black text-s lg:text-m font-semibold hover:text-blue-600"
          >
            {props.displayName}
          </Link>
        ) : (
          <div className="text-black text-s lg:text-m font-semibold hover:text-blue-600 cursor-pointer">
            {props.displayName}
          </div>
        )}
      </div>
      {isList && props.index === props.dropdownOpen && (
        <DropdownMenu categories={props.fields.megaMenuList} />
      )}
    </li>
  );
};

const DropdownMenu = ({ categories }: { categories: MegaMenuCategoryInterface[] }) => {
  return (
    <div className="absolute left-[0px] w-full z-[9] overflow-hidden border-b-[1px] border-black pt-m lg:pt-[21px] cursor-default">
      <div className="bg-grayscale-w-200">
        <div className="flex items-center justify-between md:max-w-screen-xl xl:mx-auto px-4">
          <div className="w-full my-xxs">
            <div className="gap-y-0 gap-xl md:grid-cols-12 grid">
              {categories.map((category, index) => (
                <div className="text-start col-span-4 py-[5px] xl:col-span-3" key={index}>
                  <label className="font-bold text-lg mb-xxs">{category.displayName}</label>
                  <ul>
                    {category.fields.megaMenuLinks.map((item, i) => (
                      <li className="mb-xxs" key={i}>
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
        </div>
      </div>
    </div>
  );
};
