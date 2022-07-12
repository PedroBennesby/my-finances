import { createContext, useContext, useState } from 'react';

export const PercentagesContext = createContext({});

export const PercentagesProvider = ({ children }) => {
  const [percentagesValues, setPercentagesValues] = useState({});

  return (
    <PercentagesContext.Provider
      value={{ percentagesValues, setPercentagesValues }}
    >
      {children}
    </PercentagesContext.Provider>
  );
};

export function usePercentages() {
  const context = useContext(PercentagesContext);

  return context;
}
