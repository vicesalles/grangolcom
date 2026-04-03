import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  DEFAULT_OG_IMAGE,
  LOCALE_TAGS,
  SITE_NAME,
  SITE_URL,
  TWITTER_SITE,
  buildAlternateUrls,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
  getAbsoluteUrl,
  getLocalizedPath,
  normalizePath,
} from '../lib/seo';

export default function SeoHead({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
  breadcrumbs,
  publishedTime,
  modifiedTime,
  author,
  alternates,
  availableLocales,
  locale: localeOverride,
  defaultLocale: defaultLocaleOverride,
}) {
  const router = useRouter();
  const locale = localeOverride ?? router.locale ?? 'en';
  const defaultLocale = defaultLocaleOverride ?? router.defaultLocale ?? 'en';
  const locales = availableLocales ?? router.locales ?? [locale];
  const normalizedPath = normalizePath(path);
  const alternateMap =
    alternates ??
    locales.reduce((accumulator, currentLocale) => {
      accumulator[currentLocale] = normalizedPath;
      return accumulator;
    }, {});

  const canonicalPath = getLocalizedPath(
    alternateMap[locale] ?? normalizedPath,
    locale,
    defaultLocale
  );
  const canonicalUrl = getAbsoluteUrl(canonicalPath);
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const alternateUrls = buildAlternateUrls({
    alternates: alternateMap,
    locales,
    defaultLocale,
  });
  const xDefaultPath =
    alternateMap[defaultLocale] ?? alternateMap.en ?? normalizedPath;
  const xDefaultUrl = getAbsoluteUrl(getLocalizedPath(xDefaultPath, defaultLocale, defaultLocale));
  const localeTag = LOCALE_TAGS[locale] ?? LOCALE_TAGS.en;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const jsonLdItems = [
    buildOrganizationJsonLd(),
    buildWebsiteJsonLd(),
    ...(breadcrumbs ? [breadcrumbs] : []),
    ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []),
  ];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={robots} />
      <link rel="icon" href="/futbol.ico?v=2" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${SITE_URL}/sitemap.xml`} />

      {alternateUrls.map(({ locale: alternateLocale, href }) => (
        <link key={alternateLocale} rel="alternate" hrefLang={alternateLocale} href={href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefaultUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={localeTag} />
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && <meta property="article:author" content={author} />}
      {alternateUrls
        .filter(({ locale: alternateLocale }) => alternateLocale !== locale)
        .map(({ locale: alternateLocale }) => (
          <meta
            key={`og:${alternateLocale}`}
            property="og:locale:alternate"
            content={LOCALE_TAGS[alternateLocale] ?? alternateLocale}
          />
        ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_SITE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLdItems.map((item, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
}
