import React, { FC } from 'react';
import { AppProps } from 'next/app';
import GlobalThemeProvider from '../components/GlobalThemeProvider';
import GlobalStyle from '../components/GlobalStyle';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <GlobalThemeProvider>
      <Component {...pageProps} />
    </GlobalThemeProvider>
  </>
);

export default App;
