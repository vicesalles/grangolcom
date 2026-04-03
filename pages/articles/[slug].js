import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import components from '../../components/MDXComponents';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import styles from '../../styles/General.module.scss'
import { buildBreadcrumbJsonLd, getAbsoluteUrl, getLocalizedPath } from '../../lib/seo';

export async function getStaticPaths({ locales }) {
    const { getAllPostsMeta } = await import('../../lib/mdx.server'); // ← servidor
    const paths = [];

    for (const locale of locales) {
        const posts = getAllPostsMeta(locale);
        posts.forEach(p => paths.push({ params: { slug: p.slug }, locale }));
    }

    return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
    const { getPostBySlug } = await import('../../lib/mdx.server');  // ← servidor
    const { mdxSource, frontMatter } = await getPostBySlug(locale, params.slug);

    return {
        props: {
            mdxSource,
            frontMatter: {
                ...frontMatter,
                date: frontMatter.date ? new Date(frontMatter.date).toISOString() : null
            },
            ...(await serverSideTranslations(locale, ['common', 'seo'])),
        }
    };
}

export default function ArticlePage({ mdxSource, frontMatter }) {
    const { title, summary, date, cover, slug, locale, author, alternates } = frontMatter;
    const { t } = useTranslation(['common', 'seo']);
    const localeAlternates = {
        [locale]: `/articles/${slug}`,
        ...(alternates
            ? Object.fromEntries(
                Object.entries(alternates).map(([altLocale, altSlug]) => [altLocale, `/articles/${altSlug}`])
              )
            : {})
    };
    const availableLocales = Object.keys(localeAlternates);
    const articleDescription = summary || t('seo:articleDescriptionFallback');
    const articleUrl = getAbsoluteUrl(getLocalizedPath(`/articles/${slug}`, locale));
    const breadcrumbs = buildBreadcrumbJsonLd([
        { name: t('common:home'), url: getAbsoluteUrl('/') },
        { name: t('common:devLog'), url: getAbsoluteUrl('/articles') },
        { name: title, url: articleUrl },
    ]);
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: articleDescription,
        image: cover ? (cover.startsWith('http') ? cover : getAbsoluteUrl(cover)) : undefined,
        author: author ? { '@type': 'Person', name: author } : undefined,
        publisher: { '@type': 'Organization', name: 'Gran Gol' },
        datePublished: date || undefined,
        dateModified: date || undefined,
        mainEntityOfPage: articleUrl,
        inLanguage: locale,
    };

    return (
        <>
            <SeoHead
                title={t('seo:articleTitle', { title })}
                description={articleDescription}
                path={`/articles/${slug}`}
                image={cover || undefined}
                type="article"
                alternates={localeAlternates}
                availableLocales={availableLocales}
                locale={locale}
                breadcrumbs={breadcrumbs}
                publishedTime={date || undefined}
                modifiedTime={date || undefined}
                author={author || undefined}
                jsonLd={articleJsonLd}
            />

            <div className={styles.container}>
                <main className={styles.main}>
                    <article className={styles.article}>

                        <PageHeader title={title} description={summary} />
                        {date && (
                            <time className={styles.dataArticles} dateTime={date}>{new Date(date).toLocaleDateString(locale)}</time>
                        )}
                        <div className={styles.containerImatge}>
                            {cover && <img src={cover} alt={title} />}
                        </div>


                        <MDXRemote {...mdxSource} components={components} />

                        <p>{author}</p>
                        {alternates && (
                            <nav style={{ marginTop: '2rem' }}>
                                <strong>Also avaible in :&nbsp;</strong>
                                <Link href={`/articles/${slug}`} locale={locale} aria-current="page">
                                    {locale.toUpperCase()}
                                </Link>
                                {Object.entries(alternates).map(([loc, altSlug]) => (
                                    <span key={loc} style={{ marginLeft: '0.75rem' }}>
                                        <Link href={`/articles/${altSlug}`} locale={loc}>{loc.toUpperCase()}</Link>
                                    </span>
                                ))}
                            </nav>
                        )}
                    </article>
                    <div className={styles.botoneraDestacada}>
                        <Link className={styles.newsletter} href="/">{t('common:home')}</Link>  <Link className={styles.newsletter} href="/articles/">{t('common:devLog')}</Link>
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}
