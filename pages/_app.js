import '../styles/globals.css'
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import {Helmet} from "react-helmet";
import Head from 'next/head';
import { useEffect } from 'react';
import Router from 'next/router';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return (
    <>
      <Helmet>
        <html lang="pl"/>
        <link href='https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'/>
      </Helmet>
      <Head>
        <title>Gmina Zabór Info</title>
        <meta name="description" content="Strona informacyjna Gmina Zabór Info to codzinne źródło informacji z Gminy Zabór. Najnowsze wiadomości ze wszystkich sołectw naszej gminy."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
