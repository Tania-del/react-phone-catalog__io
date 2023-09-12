import { createContext, ReactNode, useState } from 'react';

interface IErrorMessageContext {
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

interface IErrorMessageProvider {
  children: ReactNode,
}

export const ErrorMessageContext = createContext<IErrorMessageContext>({
  errorMessage: '',
  setErrorMessage: () => {},
});

export const ErrorMessageProvider = ({ children }: IErrorMessageProvider) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <ErrorMessageContext.Provider
      value={{ errorMessage, setErrorMessage }}
    >
      {children}
    </ErrorMessageContext.Provider>
  );
};
