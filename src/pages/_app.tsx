import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPageWithLayout } from './page'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollTop from '@/components/Buttons/ScrollTop';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='min-h-screen flex flex-col'>
        <ScrollTop />
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  );
};
