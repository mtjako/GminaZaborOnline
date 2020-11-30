import '../styles/globals.css'
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import {Helmet} from "react-helmet";
import Head from 'next/head';
import {ApolloProvider} from '@apollo/client';
import {client} from '../graphql/client';


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default MyApp