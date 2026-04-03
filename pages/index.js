import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import TopNavbar from '../components/TopNavbar';
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../lib/seo';

export default function Home() {
  const { t, ready } = useTranslation(['common', 'seo']);
  const [isMounted, setIsMounted] = useState(false);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": "Gran Gol",
    "description": t('seo:homeDescription'),
    "image": "https://grangol.com/img/articles/GGxFons.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Gran Gol"
    },
    "genre": "Football Game",
    "url": "https://www.grangol.com"
  };
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: 'Home', url: getAbsoluteUrl('/') },
  ]);

  useEffect(() => {
    // This ensures that the component is mounted in the browser
    setIsMounted(true);
  }, []);

  // Wait until translations are ready
  if (!ready || !isMounted) {
    return <div>
      <SeoHead
        title={t('seo:homeTitle')}
        description={t('seo:homeDescription')}
        path="/"
        jsonLd={jsonLdData}
        breadcrumbs={breadcrumbs}
      />
      <IoMdFootball fontSize={12} /></div>;
  }  

  return (
    <div className={styles.container}>
      <SeoHead
        title={t('seo:homeTitle')}
        description={t('seo:homeDescription')}
        path="/"
        jsonLd={jsonLdData}
        breadcrumbs={breadcrumbs}
      />
      <TopNavbar />      
      <main className={styles.main}>
        <h1 className={styles.titolPrincipal}>{t('mainTitle')}</h1>
        <h2  className={styles.subtitolPrincipal}>{t('mainSubtitle')}</h2>
        <h3><FaHeart fontSize={100} color={'red'} /> <IoMdFootball fontSize={100} /></h3>
        <a className={styles.newsletter} href={t('shareNewsletter')} target='_blank'> {t('newsLetterCTA')} </a> 
      </main>
      <div className={styles.botoneraContainer}>        
        <Link className={styles.newsletter} href="/articles/">{t('common:devLog')}</Link> <Link className={styles.newsletter} href="/ggx/">{t('ggx:GGxEljocDeTaula')}</Link>  <Link className={styles.newsletter} href="/stats/">{t('common:footballStats')}</Link> 
      </div>   
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'ggx', 'seo'])),
    },
  };
}
