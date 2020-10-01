import '../styles/globals.css'
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import {Helmet} from "react-helmet";
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
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
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141206406-4"></script>
      <script dangerouslySetInnerHTML={
      { __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-141206406-4');
        `}
      }></script>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
