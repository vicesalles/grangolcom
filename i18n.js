
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your JSON files for each namespace
import common_en from './public/locales/en/common.json';
import games_en from './public/locales/en/games.json';
import ggx_en from './public/locales/en/ggx.json';
import stats_en from './public/locales/en/stats.json';
import stadium_en from './public/locales/en/stadium.json';

import common_ca from './public/locales/ca/common.json';
import games_ca from './public/locales/ca/games.json';
import ggx_ca from './public/locales/ca/ggx.json';
import stats_ca from './public/locales/ca/stats.json';
import stadium_ca from './public/locales/ca/stadium.json';

import common_es from './public/locales/es/common.json';
import games_es from './public/locales/es/games.json';
import ggx_es from './public/locales/es/ggx.json';
import stats_es from './public/locales/es/stats.json';
import stadium_es from './public/locales/es/stadium.json';

// Initialize i18n with multiple namespaces
i18n.use(initReactI18next).init({
  fallbackLng: 'en', // Default fallback language
  lng: 'en',         // Starting language
  ns: ['common', 'games', 'ggx', 'stats','stadium'], // Declare namespaces
  defaultNS: 'common',  // Default namespace is common
  resources: {
    en: {
      common: common_en,
      games: games_en,
      ggx: ggx_en,
      stats: stats_en,
      stadium:stadium_en
    },
    ca: {
      common: common_ca,
      games: games_ca,
      ggx: ggx_ca,
      stats: stats_ca,
      stadium:stadium_ca
    },
    es: {
      common: common_es,
      games: games_es,
      ggx: ggx_es,
      stats: stats_es,
      stadium:stadium_es
    },
  },
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
