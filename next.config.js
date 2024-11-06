const { i18n } = require('./next-i18next.config');
module.exports = {
    i18n: {
      locales: ['en', 'es', 'ca'], // Llista d'idiomes suportats
      defaultLocale: 'ca', // Idioma per defecte    
      localeDetection: false,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'gafrmmszazh98sh9.public.blob.vercel-storage.com',
          port: '',
        },
      ],
    },
  };

  