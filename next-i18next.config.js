// next-i18next.config.js
module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ca', 'es'],
    },
    localePath: typeof window === 'undefined' ? 'public/locales' : '/locales',
  };
  
  