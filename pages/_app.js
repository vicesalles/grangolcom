import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import ConsentBanner from '../components/ConsentBanner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/globals.css';
import '../i18n';  // Import the i18n initialization


function MyApp({ Component, pageProps }) {

  
  return <><Component {...pageProps} /><ConsentBanner /><Analytics /><SpeedInsights /></>;
}

export default appWithTranslation(MyApp, nextI18NextConfig);





