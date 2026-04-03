import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/PageHeader';
import SeoHead from '../../components/SeoHead';
import TopNavbar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import styles from '../../styles/General.module.scss'
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../../lib/seo';

export async function getStaticProps({locale}) {
  const { getAllPostsMeta } = await import('../../lib/mdx.server'); // ← import al servidor
  const posts = getAllPostsMeta(locale).map(p => ({
    ...p,
    date: p.date ? new Date(p.date).toISOString() : null
  }));

  return {
    props: {
      posts,
       ...(await serverSideTranslations(locale, ['common', 'ggx', 'seo'])),
    }
  };
}

export default function ArticlesIndex({posts}) {
    const { t } = useTranslation(['common', 'ggx', 'seo']);
    const breadcrumbs = buildBreadcrumbJsonLd([
      { name: t('common:home'), url: getAbsoluteUrl('/') },
      { name: t('common:devLog'), url: getAbsoluteUrl('/articles') },
    ]);
  return (<>
  <div className={styles.container}>
    <SeoHead
      title={t('seo:articlesTitle')}
      description={t('seo:articlesDescription')}
      path="/articles"
      breadcrumbs={breadcrumbs}
    />
    <TopNavbar /> 
  <PageHeader title={t('common:devLog')} description={t('seo:articlesDescription')}/>   
           
      <article className={styles.articleTeams}>
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
      </article>   
       <div className={styles.botoneraContainer}>        
        <Link className={styles.newsletter} href="/">{t('common:home')}</Link> <Link className={styles.newsletter} href="/ggx/">{t('ggx:GGxEljocDeTaula')}</Link>  <Link className={styles.newsletter} href="/stats/">{t('common:footballStats')}</Link> 
      </div>  
      <Footer/>
   </div></>
  );
}
