import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import RootLayout from '../components/layout';
import ConsentBanner from '../components/ConsentBanner';
import '../styles/globals.css';
import { useEffect } from 'react';

import { checkConsent, loadGTM } from '../utils/consent'; // Import helper functions

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (checkConsent()) {
      loadGTM(); // Load GTM if consent is already given
    }
  }, []);
  
  return <><Component {...pageProps} /><ConsentBanner /></>;
}

export default appWithTranslation(MyApp, nextI18NextConfig);





