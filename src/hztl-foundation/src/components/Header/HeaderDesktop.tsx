/* eslint-disable prettier/prettier */
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  HeaderProps,
  LogoInterface,
  MegaMenuCategoryInterface,
  NavigationItem,
} from './headerInterface';
import { Link } from '@sitecore-jss/sitecore-jss-react';
import Image from 'next/image';
import PreviewSearchBasicWidget from 'src/widgets/SearchPreview';

const HeaderDesktop = (props: HeaderProps) => {
  const { fields, dropdownOpen, setDropdownOpen } = props;
  const { logo, logoLink, navigationList } = fields;

  return (
    <div className="md:block hidden">
      <div className="flex items-center p-4 border-b-2">
        <Logo logo={logo.value} logoLink={logoLink.value} />
        <nav className="flex px-10 gap-6">
          {navigationList.map((item, index) => (
            <NavItem
              key={index}
              index={index}
              {...item}
              onClick={() => setDropdownOpen(index)}
              dropdownOpen={dropdownOpen}
            />
          ))}
          <div>
            <PreviewSearchBasicWidget rfkId={'rfkid_101'} defaultValue="" defaultItemsPerPage={5} />
          </div>
        </nav>
      </div>
      {dropdownOpen !== null && navigationList[dropdownOpen].fields.megaMenuList.length > 0 && (
        <DropdownMenu
          categories={navigationList[dropdownOpen].fields.megaMenuList}
          type="desktop"
        />
      )}
    </div>
  );
};
export default HeaderDesktop;

export const Logo = ({ logo, logoLink }: { logo: LogoInterface; logoLink: LinkField }) => (
  <div className="flex items-center">
    <Link field={logoLink}>
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
  onClick: () => void;
  dropdownOpen: number | null;
  index: number;
}
const NavItem = (props: NavItemInterface) => {
  const isList = props.fields.megaMenuList.length > 0;
  return (
    <div
      className={`relative group px-4 py-3 ${
        props.dropdownOpen === props.index ? 'border-2 -m-[2px]' : ''
      }`}
    >
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
          className="text-black text-xl font-semibold hover:text-blue-600 cursor-pointer"
        >
          {props.displayName}
        </div>
      )}
    </div>
  );
};

export const DropdownMenu = ({
  categories,
  type,
}: {
  categories: MegaMenuCategoryInterface[];
  type: 'mobile' | 'desktop';
}) => {
  return (
    <div
      className={`bg-grayscale-w-200 flex ${
        type === 'mobile' ? '-mx-[24px] mt-3 justify-start' : 'justify-center'
      }`}
    >
      <div
        className={`flex justify-center gap-6 ${
          type === 'mobile' ? 'flex-col py-3 px-10' : 'container mx-auto p-10'
        }`}
      >
        {categories.map((category, index) => (
          <div className="text-start" key={index}>
            <label className="font-bold text-lg mb-2">{category.displayName}</label>
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
