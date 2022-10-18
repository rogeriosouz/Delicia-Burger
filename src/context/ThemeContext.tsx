import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../styles/theme';

type ThemeType = {
  colors: {
    bg: string;
    title: string;
    subTitle: string;
    text_white: string;
  };
  fonts: {
    sm: number;
    md: number;
    lg: number;
    extra_bold: number;
  };
};

type ThemetProviderType = {
  theme: ThemeType;
};

export const ThemetProvider = createContext({} as ThemetProviderType);

export function ThemeContext({ children }: any) {
  const [theme, setTheme] = useState<ThemeType>(THEME);

  return (
    <ThemetProvider.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemetProvider.Provider>
  );
}
