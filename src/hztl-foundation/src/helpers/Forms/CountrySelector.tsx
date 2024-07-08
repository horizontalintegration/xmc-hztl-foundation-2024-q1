/* eslint-disable prettier/prettier */
import { CountrySelectorInterface } from 'components/authorable/shared/site-structure/Header/headerInterface';
import React from 'react';

const CountrySelector = ({
  selectedCountry,
  setSelectedCountry,
}: // countryData,
CountrySelectorInterface) => {
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="block w-full p-xxs border-gray-300 focus:outline-none rounded-md font-semibold text-base focus:border-none sm:text-sm cursor-pointer"
      >
        {/* {countryData &&
          countryData?.map((item) => (
            <option key={item.id} value={item.name}>
              {item.displayName}
            </option>
          ))} */}
        <option value="United States">🇺🇸 United States (English)</option>
        <option value="Canada">🇨🇦 Canada (English)</option>
        <option value="Mexico">🇲🇽 Mexico (Spanish)</option>
      </select>
    </div>
  );
};

export default CountrySelector;
