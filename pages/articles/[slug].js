import Head from 'next/head';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import components from '../../components/MDXComponents';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import styles from '../../styles/General.module.scss'

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
            ...(await serverSideTranslations(locale, ['common'])),
        }
    };
}

export default function ArticlePage({ mdxSource, frontMatter }) {
    const { title, summary, date, cover, slug, locale, author, alternates } = frontMatter;
    const { t, ready } = useTranslation('common,ggx');

    const hreflangEntries = [
        [locale, slug],
        ...(alternates ? Object.entries(alternates) : [])
    ];

    return (
        <>
            <Head>
                <title>{title}</title>
                {summary && <meta name="description" content={summary} />}
                <link rel="canonical" href={`/${locale}/articles/${slug}`} />
                {hreflangEntries.map(([loc, locSlug]) => (
                    <link key={loc} rel="alternate" hrefLang={loc} href={`/${loc}/articles/${locSlug}`} />
                ))}
            </Head>

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
