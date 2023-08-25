import React, { createContext, ReactNode, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchContext = createContext<{
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputValue: string;

}>({ setInputValue: () => {}, inputValue: '' });

// eslint-disable-next-line max-len
export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [inputValue, setInputValue] = useState<string>(
    String(params.get('query') ?? ''),
  );

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  );
};
