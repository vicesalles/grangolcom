const path = require('path');

const SUPPORTED_LOCALES = ['en', 'ca', 'es'];
const DEFAULT_LOCALE = 'en';
const DEFAULT_NAMESPACE = 'common';
const ALL_NAMESPACES = ['common', 'cookies', 'games', 'ggx', 'stadium', 'stats'];

const nextI18NextConfig = {
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: SUPPORTED_LOCALES,
    localeDetection: false,
  },
  defaultNS: DEFAULT_NAMESPACE,
  ns: ALL_NAMESPACES,
  localePath:
    typeof window === 'undefined'
      ? path.resolve('./public/locales')
      : '/locales',
};

module.exports = {
  ALL_NAMESPACES,
  DEFAULT_LOCALE,
  DEFAULT_NAMESPACE,
  SUPPORTED_LOCALES,
  nextI18NextConfig,
};
