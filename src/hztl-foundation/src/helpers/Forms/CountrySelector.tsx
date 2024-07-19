import { CountrySelectorInterface } from 'components/authorable/shared/site-structure/Header/headerInterface';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import { SvgIcon } from 'helpers/SvgIconWrapper';
import { useRef, useState } from 'react';
import useOutsideClick from 'src/hooks/useClickOutside';

const CountrySelector = ({
  countryData,
  selectedCountry,
  setSelectedCountry,
}: CountrySelectorInterface) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectedCountryData = countryData?.find(
    (item) => item?.language?.jsonValue?.name === selectedCountry && item.name
  );
  const selectRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = () => {
    setDropdownOpen(false);
  };
  useOutsideClick(selectRef, dropdownOpen, handleClickOutside);
  return (
    <div className="relative block text-left mr-4" ref={selectRef}>
      <button
        type="button"
        className="block w-full p-xxs border-gray-300 rounded-md font-semibold text-base focus:border-none sm:text-sm cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedCountryData && (
          <div className="flex items-center">
            <ImageWrapper
              field={{
                value: { ...selectedCountryData.flag.jsonValue.value, width: '20', height: '20' },
              }}
            />
            <span className="ml-3 block font-normal truncate">{selectedCountryData.name}</span>
            <span className="ml-3">
              {dropdownOpen ? (
                <SvgIcon className="-rotate-90 stroke-black w-s h-auto" icon={'arrow-right'} />
              ) : (
                <SvgIcon className="rotate-90 stroke-black w-s h-auto" icon={'arrow-right'} />
              )}
            </span>
          </div>
        )}
      </button>
      {dropdownOpen && (
        <div className="absolute mt-1 rounded-md shadow-lg bg-white z-10">
          <ul className="max-h-60 m-0 py-1 text-base overflow-auto focus:outline-none sm:text-sm">
            {countryData &&
              countryData.map((item) => (
                <li
                  key={item.language.jsonValue.id}
                  className={`cursor-pointer select-none relative list-none ml-0 px-4 hover:text-slate-500 ${selectedCountryData?.language.jsonValue.name === item?.language.jsonValue.name ? 'bg-slate-300' : ''}`}
                  onClick={() => {
                    setSelectedCountry(item.language.jsonValue.name);
                    setDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center py-2  pr-9">
                    <ImageWrapper
                      field={{ value: { ...item.flag.jsonValue.value, width: '20', height: '20' } }}
                    />
                    <span className="ml-3 block font-normal">{item.name}</span>
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
