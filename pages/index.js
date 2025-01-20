import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import TopNavbar from '../components/TopNavbar';

export default function Home() {
  const { t, ready } = useTranslation('common');
  const [isMounted, setIsMounted] = useState(false);

  // Metadades
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": "Gran Gol",
    "description": "Gran Gol is a football game.",
    "image": "https://grangol.com/grangol.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Gran Gol"
    },
    "genre": "Football Game",
    "url": "https://grangol.com"
  };

  const MetaHead = ({ jsonLdData }) => (
    <Head>
      <title>{t('mainTitle')}</title>
      <link rel="icon" href="/futbol.ico?v=2" />
      <meta name="description" content={t('mainSubtitle')} />        
      <meta property="og:title" content={t('mainTitle')} />
      <meta property="og:description" content={t('mainSubtitle')} />
      <meta property="og:image" content="https://grangol.com/grangol.jpg" />
      <meta property="og:url" content="https://grangol.com" />
      <meta name="twitter:title" content={t('mainTitle')} />
      <meta name="twitter:description" content={t('mainSubtitle')} />
      <meta name="twitter:image" content="https://grangol.com/grangol.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GranGol11" />
      <meta name="yandex-verification" content="20bb35cc90f332ef" />
      <meta name="robots" content="index, follow" />  

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.grangol.com/" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.grangol.com/sitemap.xml" />

      {/* Incrustar JSON-LD */}
      <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} 
        />
      
      </Head>
  );

  useEffect(() => {
    // This ensures that the component is mounted in the browser
    setIsMounted(true);
  }, []);

  // Wait until translations are ready
  if (!ready || !isMounted) {
    return <div>
      <MetaHead jsonLdData={jsonLdData}/>      
      <IoMdFootball fontSize={12} /></div>;
  }  

  return (
    <div className={styles.container}>
      <MetaHead jsonLdData={jsonLdData}/>
      <TopNavbar />      
      <main className={styles.main}>
        <h1 className={styles.titolPrincipal}>{t('mainTitle')}</h1>
        <h2  className={styles.subtitolPrincipal}>{t('mainSubtitle')}</h2>
        <h3><FaHeart fontSize={100} color={'red'} /> <IoMdFootball fontSize={100} /></h3>
        <a className={styles.newsletter} href={t('shareNewsletter')} target='_blank'> {t('newsLetterCTA')} </a> 
      </main>
      <div className={styles.botoneraContainer}>        
        <Link className={styles.newsletter} href="/ggx/">{t('ggx:queEsGGx')}</Link> <Link className={styles.newsletter} href="/ggx/rules">{t('ggx:ggxNormesTitol')}</Link> <Link className={styles.newsletter} href="/ggx/stadium">{t('ggx:ggxStadium')}</Link> <Link className={styles.newsletter} href="/ggx/teams">{t('ggxTeams')}</Link> 
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'ggx'])), // Load both common and cookies namespaces
    },
  };
}
