import React, { createContext, useState, useContext, ReactNode } from 'react';

type HeaderContextType = {
  header: boolean;
  toggleHeader: () => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

type HeaderProviderProps = {
  children: ReactNode;
};

export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
  const [header, setHeader] = useState<boolean>(false);

  const toggleHeader = () => {
    setHeader((prevHeader) => (prevHeader === false ? true : false));
  };

  return (
    <HeaderContext.Provider value={{ header, toggleHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

// Custom hook for using the header context
export const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};
