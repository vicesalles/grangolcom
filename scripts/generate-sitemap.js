const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.grangol.com';
const BUILD_DIR = path.join(process.cwd(), '.next');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const PRERENDER_MANIFEST_PATH = path.join(BUILD_DIR, 'prerender-manifest.json');
const ROUTES_MANIFEST_PATH = path.join(BUILD_DIR, 'routes-manifest.json');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const ROBOTS_PATH = path.join(PUBLIC_DIR, 'robots.txt');
const EXCLUDED_PREFIXES = ['/404', '/dev/', '/subscription-confirmed'];
const EXCLUDED_EXACT = ['/dev', '/subscription-confirmed'];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function normalizePath(route) {
  if (!route || route === '') return '/';
  const normalized = route.startsWith('/') ? route : `/${route}`;
  return normalized === '/' ? normalized : normalized.replace(/\/+$/, '');
}

function stripDefaultLocale(route, defaultLocale) {
  const normalized = normalizePath(route);
  if (normalized === `/${defaultLocale}`) {
    return '/';
  }

  if (normalized.startsWith(`/${defaultLocale}/`)) {
    return normalized.slice(defaultLocale.length + 1) || '/';
  }

  return normalized;
}

function getRouteLocale(route, locales, defaultLocale) {
  const normalized = normalizePath(route);
  const matchedLocale = locales.find(
    (locale) => normalized === `/${locale}` || normalized.startsWith(`/${locale}/`)
  );

  return matchedLocale || defaultLocale;
}

function removeLocalePrefix(route, locales) {
  const normalized = normalizePath(route);
  for (const locale of locales) {
    if (normalized === `/${locale}`) {
      return '/';
    }

    if (normalized.startsWith(`/${locale}/`)) {
      return normalized.slice(locale.length + 1) || '/';
    }
  }

  return normalized;
}

function isExcluded(route) {
  const normalized = normalizePath(route);
  if (EXCLUDED_EXACT.includes(normalized)) {
    return true;
  }

  return EXCLUDED_PREFIXES.some((prefix) => normalized.startsWith(prefix));
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toAbsoluteUrl(route) {
  const normalized = normalizePath(route);
  return normalized === '/' ? SITE_URL : `${SITE_URL}${normalized}`;
}

function buildSitemap() {
  const prerenderManifest = readJson(PRERENDER_MANIFEST_PATH);
  const routesManifest = readJson(ROUTES_MANIFEST_PATH);
  const { locales, defaultLocale } = routesManifest.i18n;
  const allRoutes = Object.keys(prerenderManifest.routes);
  const groupedRoutes = new Map();

  for (const route of allRoutes) {
    const locale = getRouteLocale(route, locales, defaultLocale);
    const withoutLocale = removeLocalePrefix(route, locales);
    if (isExcluded(withoutLocale)) {
      continue;
    }

    const canonicalPath = stripDefaultLocale(route, defaultLocale);
    const groupKey = withoutLocale;
    if (!groupedRoutes.has(groupKey)) {
      groupedRoutes.set(groupKey, {});
    }

    groupedRoutes.get(groupKey)[locale] = canonicalPath;
  }

  const urlEntries = [];
  for (const [, localeMap] of groupedRoutes) {
    const availableLocales = Object.keys(localeMap).sort((a, b) => {
      if (a === defaultLocale) return -1;
      if (b === defaultLocale) return 1;
      return a.localeCompare(b);
    });

    const alternateLinks = availableLocales
      .map((locale) => {
        const href = toAbsoluteUrl(localeMap[locale]);
        return `    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(href)}" />`;
      })
      .join('\n');

    const xDefaultHref = toAbsoluteUrl(localeMap[defaultLocale] || localeMap[availableLocales[0]]);

    for (const locale of availableLocales) {
      const loc = toAbsoluteUrl(localeMap[locale]);
      urlEntries.push([
        '  <url>',
        `    <loc>${escapeXml(loc)}</loc>`,
        alternateLinks,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefaultHref)}" />`,
        '  </url>',
      ].join('\n'));
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlEntries.sort(),
    '</urlset>',
    '',
  ].join('\n');

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
}

function buildRobots() {
  const robots = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /dev/',
    'Disallow: /subscription-confirmed',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
  ].join('\n');

  fs.writeFileSync(ROBOTS_PATH, robots, 'utf8');
}

function main() {
  buildSitemap();
  buildRobots();
  console.log('Generated sitemap.xml and robots.txt');
}

main();
