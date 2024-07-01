import React, { useState } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { HeaderProps } from './headerInterface';

export const Default = (props: HeaderProps) => {
  const [selectedCountry, setSelectedCountry] = useState('United States');

  return (
    <header className="bg-white w-full">
      <HeaderDesktop
        {...props}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <HeaderMobile
        {...props}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </header>
  );
};
