import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#ddd',
    tomato: 'red',
  },
};

const GlobalThemeProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default GlobalThemeProvider;
