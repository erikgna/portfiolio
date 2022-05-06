import React, { useState, FC } from 'react';

interface IThemeContext {
    dark: boolean;
    toggleDark?: () => void;
  }
  
  const defaultState = {
    dark: true,
  };
  
export const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeProvider: FC = ( children ) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
      console.log('dadsads')
    setDark(true);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      children
    </ThemeContext.Provider>
  );
};