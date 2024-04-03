import '@/styles/global.css';

import type { AppProps } from 'next/app';

import { Inter } from 'next/font/google';

const font = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={font.className}>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
