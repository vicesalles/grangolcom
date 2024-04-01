import '../styles/globals.css'
import PiwikPro from '@piwikpro/react-piwik-pro';
import { PageViews } from '@piwikpro/react-piwik-pro';

PiwikPro.initialize('f54aa973-45bc-4adc-9a3e-6757c0ab41cc', 'https://grangol.piwik.pro');

function MyApp({ Component, pageProps }) { 

  return <Component {...pageProps} />
}

export default MyApp
