import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import RootLayout from '../components/layout';
import ConsentBanner from '../components/ConsentBanner';
import '../styles/globals.css';
import { useEffect } from 'react';

import { checkConsent, loadGTM } from '../utils/consent'; // Import helper functions

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const consentGiven = checkConsent(); // Your existing consent logic
    if (consentGiven) {
      // Load Google Analytics
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-WSSRG343P3`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize gtag after script is loaded
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WSSRG343P3');

      // Notify Google Analytics about consent
      gtag('consent', 'update', {
        'ad_storage': 'denied',       // 'denied' if consent is not given
        'analytics_storage': 'granted' // 'denied' if consent is not given
      });
    }
  }, []);
  
  return <><Component {...pageProps} /><ConsentBanner /></>;
}

export default appWithTranslation(MyApp, nextI18NextConfig);





