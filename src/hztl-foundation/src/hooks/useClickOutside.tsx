/* eslint-disable prettier/prettier */
import { useEffect, RefObject } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, condition: boolean, callback: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    if (condition) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [condition, ref]);

  return;
};

export default useOutsideClick;

