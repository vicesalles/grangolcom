const SITE_URL = 'https://www.grangol.com';
const SITE_NAME = 'Gran Gol';
const SITE_DESCRIPTION =
  'Gran Gol is a football project with tabletop football games, printable teams and football culture content.';
const DEFAULT_OG_IMAGE = '/img/articles/GGxFons.jpg';
const TWITTER_SITE = '@GranGol11';
const LOCALE_TAGS = {
  en: 'en_US',
  ca: 'ca_ES',
  es: 'es_ES',
  zh: 'zh_CN',
};

function normalizePath(path = '/') {
  if (!path || path === '') return '/';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized === '/' ? normalized : normalized.replace(/\/+$/, '');
}

function getLocalizedPath(path, locale, defaultLocale = 'en') {
  const normalizedPath = normalizePath(path);
  if (!locale || locale === defaultLocale) {
    return normalizedPath;
  }

  return normalizedPath === '/' ? `/${locale}` : `/${locale}${normalizedPath}`;
}

function getAbsoluteUrl(path) {
  return `${SITE_URL}${normalizePath(path)}`;
}

function buildAlternateUrls({ alternates, locales = [], defaultLocale = 'en' }) {
  if (!alternates || Object.keys(alternates).length === 0) {
    return [];
  }

  return locales
    .filter((locale) => alternates[locale])
    .map((locale) => ({
      locale,
      href: getAbsoluteUrl(getLocalizedPath(alternates[locale], locale, defaultLocale)),
    }));
}

function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/futbol.ico?v=2`,
    sameAs: [
      'https://twitter.com/grangol11',
      'https://www.facebook.com/GranGol11',
      'https://discord.gg/UEYtYVGG',
    ],
  };
}

function buildWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: ['en', 'ca', 'es', 'zh'],
  };
}

function buildBreadcrumbJsonLd(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

module.exports = {
  DEFAULT_OG_IMAGE,
  LOCALE_TAGS,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  TWITTER_SITE,
  buildBreadcrumbJsonLd,
  buildAlternateUrls,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
  getAbsoluteUrl,
  getLocalizedPath,
  normalizePath,
};
