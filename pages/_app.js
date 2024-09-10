import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import RootLayout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  
  return <RootLayout><Component {...pageProps} /></RootLayout>;
}

export default appWithTranslation(MyApp, nextI18NextConfig);





