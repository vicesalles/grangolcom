const { i18n } = require('./next-i18next.config');
module.exports = {
    i18n: {
      locales: ['en', 'es', 'ca'], // Llista d'idiomes suportats
      defaultLocale: 'en', // Idioma per defecte    
      localeDetection: false,
    },
  };

  