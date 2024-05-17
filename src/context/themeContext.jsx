'use client';

import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

// 3
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: action.payload };
    case 'CHANGE_FONT':
      return { ...state, font: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  // 1
  const [state, dispatch] = useReducer(themeReducer, {
    theme: 'lemonade',
    font: 'font-arabic',
  });

  // 2
  const changeTheme = (theme) => {
    dispatch({ type: 'CHANGE_THEME', payload: theme });
  };

  const changeFont = (font) => {
    dispatch({ type: 'CHANGE_FONT', payload: font });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme, changeFont }}>
      {children}
    </ThemeContext.Provider>
  );
}
