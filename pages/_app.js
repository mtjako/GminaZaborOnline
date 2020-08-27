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
        <link href='https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'/>
      </Helmet>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
