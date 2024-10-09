// Global
import { useRef, useState } from 'react';
import { tv } from 'tailwind-variants';

// Lib
import useOutsideClick from 'src/hooks/useClickOutside';

// Local
import { CountrySelectorInterface } from 'components/authorable/shared/site-structure/Header/headerInterface';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import { useRouter } from 'next/router';

/*
 * Tailwind Variants
 */

const tailwindVariants = tv({
  slots: {
    base: ['relative', 'block', 'text-left', 'md:mr-4'],
    buttonClasses: [
      'block',
      'w-full',
      'md:p-xxs',
      'border-gray-300',
      'rounded-md',
      'font-semibold',
      'text-base',
      'focus:border-none',
      'sm:text-sm',
      'cursor-pointer',
    ],
    imageContainer: ['flex', 'items-center'],
    countryNameWrapper: ['ml-3', 'block', 'font-semibold', 'truncate'],
    dropDownMenuWrapper: [
      'w-full',
      'md:w-auto',
      'absolute',
      'mt-1',
      'rounded-md',
      'shadow-lg',
      'bg-white',
      'z-10',
    ],
    dropDownMenuList: [
      'max-h-60',
      'm-0',
      'py-1',
      'text-base',
      'overflow-auto',
      'focus:outline-none',
      'sm:text-sm',
    ],
    dropDownMenuItem: [
      'cursor-pointer',
      'select-none',
      'relative',
      'list-none',
      'ml-0',
      'px-4',
      'hover:text-slate-500',
    ],
    dropDownImageWrapper: ['flex', 'items-center', 'py-2 ', 'pr-9'],
    dropDownItemName: ['ml-3', 'block', 'font-semibold'],
  },
});

const CountrySelector = ({ countryData }: CountrySelectorInterface) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  const { locale, pathname, asPath, query } = router;

  const selectedCountryData = countryData?.find(
    (item) => item?.language?.jsonValue?.name === locale && item.name
  );
  const selectRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = () => {
    setDropdownOpen(false);
  };
  useOutsideClick(selectRef, dropdownOpen, handleClickOutside);

  const {
    base,
    buttonClasses,
    imageContainer,
    countryNameWrapper,
    dropDownMenuWrapper,
    dropDownMenuList,
    dropDownMenuItem,
    dropDownImageWrapper,
    dropDownItemName,
  } = tailwindVariants();
  /*
   * Rendering
   */

  return (
    <div className={base()} ref={selectRef}>
      <button
        type="button"
        aria-label="Country Select"
        className={buttonClasses()}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedCountryData && (
          <div className={imageContainer()}>
            <ImageWrapper
              field={{
                value: { ...selectedCountryData.flag.jsonValue.value, width: '20', height: '20' },
              }}
            />
            <span className={countryNameWrapper()}>{selectedCountryData.name}</span>
          </div>
        )}
      </button>
      {dropdownOpen && (
        <div className={dropDownMenuWrapper()}>
          <ul className={dropDownMenuList()}>
            {countryData &&
              countryData.map((item) => (
                <li
                  key={item.language.jsonValue.id}
                  className={`${dropDownMenuItem()} ${selectedCountryData?.language.jsonValue.name === item?.language.jsonValue.name ? 'bg-slate-300' : ''}`}
                  onClick={() => {
                    const country = item.language.jsonValue.name;

                    router.push({ pathname, query }, asPath, { locale: country });
                    setDropdownOpen(false);
                  }}
                >
                  <div className={dropDownImageWrapper()}>
                    <ImageWrapper
                      field={{ value: { ...item.flag.jsonValue.value, width: '20', height: '20' } }}
                    />
                    <span className={dropDownItemName()}>{item.name}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
