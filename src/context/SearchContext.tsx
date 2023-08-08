import React, { createContext, ReactNode, useState } from 'react';

export const SearchContext = createContext<{
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputValue: string;

}>({ setInputValue: () => {}, inputValue: '' });

// eslint-disable-next-line max-len
export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  );
};
