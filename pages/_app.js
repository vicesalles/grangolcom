import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { useEffect } from 'react';
import ConsentBanner from '../components/ConsentBanner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/globals.css';

const SUPPORTED_LOCALES = ['en', 'ca', 'es', 'fr', 'zh'];
const ALL_NAMESPACES = ['common', 'cookies', 'games', 'ggx', 'ggx_pnp', 'seo', 'stadium', 'stats', 'teams'];

// Initialize i18next once at module level
if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LOCALES,
    defaultNS: 'common',
    ns: ALL_NAMESPACES,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initAsync: false,
  });
}

function MyApp({ Component, pageProps }) {
  const { _nextI18Next } = pageProps || {};
  const locale = _nextI18Next?.initialLocale || 'en';
  const initialI18nStore = _nextI18Next?.initialI18nStore;

  // Load translations and set locale directly during render (before I18nextProvider)
  // This ensures child components see correct translations when useTranslation() is called
  if (initialI18nStore) {
    Object.entries(initialI18nStore).forEach(([lng, namespaces]) => {
      Object.entries(namespaces).forEach(([ns, translations]) => {
        if (!i18next.hasResourceBundle(lng, ns)) {
          i18next.addResourceBundle(lng, ns, translations, true, true);
        }
      });
    });
  }
  if (i18next.language !== locale) {
    i18next.changeLanguage(locale);
  }

  // Keep locale in sync on client side
  useEffect(() => {
    if (i18next.language !== locale) {
      i18next.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <I18nextProvider i18n={i18next}>
      <Component {...pageProps} />
      <ConsentBanner />
      <Analytics />
      <SpeedInsights />
    </I18nextProvider>
  );
}

export default MyApp;




