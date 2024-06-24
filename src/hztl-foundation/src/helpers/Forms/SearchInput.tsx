/* eslint-disable prettier/prettier */
import { SvgIcon } from 'helpers/SvgIconWrapper';
import React, { useState } from 'react';

const SearchInput = ({ placeholder }: { placeholder?: string }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <form className="flex items-center w-full" onSubmit={handleSearchSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-1 border border-black rounded-sm focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <SvgIcon icon="outline-search" className="w-s h-s" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
