// Global
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';

// Lib
import useOutsideClick from 'src/hooks/useClickOutside';

// Local
import {
  CountrySelectorInterface,
  HeaderCountry,
} from 'components/authorable/shared/site-structure/Header/headerInterface';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['block', 'relative', 'text-left', 'md:mr-4'],
    buttonClasses: [
      'block',
      'border-gray-300',
      'cursor-pointer',
      'font-semibold',
      'rounded-md',
      'text-base',
      'w-full',
      'focus:border-none',
      'focus:outline-theme-darkblue',
      'md:p-xxs',
      'sm:text-sm',
    ],
    countryNameWrapper: ['hidden', 'lg:block', 'font-semibold', 'ml-3', 'truncate'],
    dropDownImageWrapper: ['flex', 'items-center', 'pr-9', 'py-2 '],
    dropDownItemName: ['block', 'font-semibold', 'ml-3'],
    dropDownMenuItem: [
      'cursor-pointer',
      'list-none',
      'ml-0',
      'px-4',
      'relative',
      'select-none',
      'hover:text-slate-500',
    ],
    dropDownMenuList: [
      'm-0',
      'max-h-60',
      'overflow-auto',
      'py-1',
      'text-base',
      'focus:outline-none',
      'sm:text-sm',
    ],
    dropDownMenuWrapper: [
      'absolute',
      'bg-white',
      'mt-1',
      'rounded-md',
      'shadow-lg',
      'w-full',
      'z-10',
      'md:w-auto',
    ],
    imageContainer: ['flex', 'items-center'],
  },
  variants: {
    isSelected: {
      false: {
        dropDownMenuItem: [],
      },
      true: {
        dropDownMenuItem: ['bg-slate-300'],
      },
    },
  },
});

const CountrySelector = ({ countryData }: CountrySelectorInterface) => {
  const router = useRouter();

  const { locale, pathname, asPath, query } = router;

  const selectRef = useRef<HTMLDivElement>(null);

  /*
   * State
   */

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountryData, setSelectedCountryData] = useState<HeaderCountry>();

  /*
   * Event Handlers
   */

  const handleClickOutside = () => setDropdownOpen(false);

  /*
   * Lifecycle
   */

  useEffect(() => {
    setSelectedCountryData(
      countryData?.find((item) => item?.language?.jsonValue?.name === locale && item.name)
    );
  }, [countryData]);

  useOutsideClick(selectRef, dropdownOpen, handleClickOutside);

  /*
   * Rendering
   */

  const {
    base,
    buttonClasses,
    imageContainer,
    countryNameWrapper,
    dropDownMenuWrapper,
    dropDownMenuList,
    dropDownImageWrapper,
    dropDownItemName,
  } = TAILWIND_VARIANTS();
  /*
   * Rendering
   */

  return (
    <div className={base()} ref={selectRef}>
      <button
        aria-label="Country Select"
        className={buttonClasses()}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        type="button"
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
              countryData.map((item) => {
                const { dropDownMenuItem } = TAILWIND_VARIANTS({
                  isSelected:
                    selectedCountryData?.language.jsonValue.name === item?.language.jsonValue.name,
                });

                return (
                  <li
                    className={dropDownMenuItem()}
                    key={item.language.jsonValue.id}
                    onClick={() => {
                      const country = item.language.jsonValue.name;

                      router.push({ pathname, query }, asPath, { locale: country });

                      setDropdownOpen(false);
                    }}
                  >
                    <div className={dropDownImageWrapper()}>
                      <ImageWrapper
                        field={{
                          value: { ...item.flag.jsonValue.value, width: '20', height: '20' },
                        }}
                      />
                      <span className={dropDownItemName()}>{item.name}</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
