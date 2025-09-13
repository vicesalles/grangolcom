import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

export async function getStaticProps({locale}) {
  const { getAllPostsMeta } = await import('../../lib/mdx.server'); // ← import al servidor
  const posts = getAllPostsMeta(locale).map(p => ({
    ...p,
    date: p.date ? new Date(p.date).toISOString() : null
  }));

  return {
    props: {
      posts,
       ...(await serverSideTranslations(locale, ['common'])),
    }
  };
}

export default function ArticlesIndex({posts}) {
    const { t, ready } = useTranslation('common');
  return (
    <main className="container">
      <h1>{t('common:devLog')}</h1>
      <ul>
        {posts.map(p => (
          <li key={`${p.locale}-${p.slug}`}>
            <Link href={`/articles/${p.slug}`} locale={p.locale}>
              {p.title}
            </Link>
            {p.date && (
              <small> — {new Date(p.date).toLocaleDateString(p.locale)}</small>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
