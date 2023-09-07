import { createContext, ReactNode, useState } from 'react';

interface IErrorMessageContext {
  inputErrorMessage: string;
  setInputErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

interface IErrorMessageProvider {
  children: ReactNode,
}

export const ErrorMessageContext = createContext<IErrorMessageContext>({
  inputErrorMessage: '',
  setInputErrorMessage: () => {},
});

export const ErrorMessageProvider = ({ children }: IErrorMessageProvider) => {
  const [inputErrorMessage, setInputErrorMessage] = useState<string>('');

  return (
    <ErrorMessageContext.Provider
      value={{ inputErrorMessage, setInputErrorMessage }}
    >
      {children}
    </ErrorMessageContext.Provider>
  );
};
