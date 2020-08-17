import '../styles/globals.css'
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import {Helmet} from "react-helmet";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <html lang="pl"/>
        <meta name="description" content="Wiadomości z Gminy Zabór"/>
      </Helmet>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
