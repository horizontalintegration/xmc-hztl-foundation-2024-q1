import React, { useState } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { HeaderProps } from './headerInterface';

export const Default = (props: HeaderProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<null | number>(null);
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const handleDropdownToggle = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };
  return (
    <header className="bg-white w-full">
      <HeaderDesktop
        {...props}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={handleDropdownToggle}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <HeaderMobile
        {...props}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={handleDropdownToggle}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </header>
  );
};
