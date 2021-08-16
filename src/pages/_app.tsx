import React, { FC, ReactNode } from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalThemeProvider from '@components/GlobalThemeProvider';
import GlobalStyle from '@components/GlobalStyle';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});

const ReactQueryProvider: FC<{ children: ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <ReactQueryProvider>
        <GlobalThemeProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </GlobalThemeProvider>
    </ReactQueryProvider>
);

export default App;
