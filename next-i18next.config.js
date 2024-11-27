// next-i18next.config.js
module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ca', 'es'],
    },
    localePath: typeof window === 'undefined' ? 'public/locales' : '/locales',
    ns: ['common', 'games', 'ggx','stats'], // Specify the namespaces you are using
  defaultNS: 'common', // Set the default namespace to use
  };
  
  