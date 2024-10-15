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
    "description": "Gran Gol és un joc de futbol.",
    "image": "https://grangol.com/grangol.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Gran Gol"
    },
    "genre": "Joc de futbol",
    "url": "https://grangol.com"
  };

  useEffect(() => {
    // This ensures that the component is mounted in the browser
    setIsMounted(true);
  }, []);

  // Wait until translations are ready
  if (!ready || !isMounted) {
    return <div>
      <Head>
      <title>Gran Gol</title>
      <link rel="icon" href="/futbol.ico?v=2" />
      <meta name="description" content="Gran Gol és un joc de futbol." />  
      
      <meta property="og:title" content="Gran Gol" />
      <meta property="og:description" content="Gran Gol futbol, futebol, calcio, football, fut, fussball, voetball, كرة القدم." />
      <meta property="og:image" content="https://grangol.com/grangol.jpg" />
      <meta property="og:url" content="https://grangol.com" />
      <meta name="twitter:title" content="Gran Gol" />
      <meta name="twitter:description" content="Gran Gol futbol, futebol, calcio, football, fut, fussball, voetball, كرة القدم." />
      <meta name="twitter:image" content="https://grangol.com/grangol.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
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
      
      <IoMdFootball fontSize={12} /></div>;
  }  

  return (
    <div className={styles.container}>
      <Head>
      <title>404! Gran Gol</title>
      <link rel="icon" href="/futbol.ico?v=2" />
      <meta name="description" content="Gran Gol ❤️ futbol." />  
      
      <meta property="og:title" content="Gran Gol - 404!" />
      <meta property="og:description" content="Gran Gol futbol, futebol, calcio, football, fut, fussball, voetball, كرة القدم." />
      <meta property="og:image" content="https://grangol.com/grangol.jpg" />
      <meta property="og:url" content="https://grangol.com" />
      <meta name="twitter:title" content="Gran Gol" />
      <meta name="twitter:description" content="Gran Gol futbol, futebol, calcio, football, fut, fussball, voetball, كرة القدم." />
      <meta name="twitter:image" content="https://grangol.com/grangol.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
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
      <TopNavbar />      
      <main className={styles.main}>
        <h1>404</h1>
        <p>ERROR!</p>
      </main>
      <div className={styles.textMenu}>
      <Link href="./ggx">GGx</Link> | <Link href="./books">{t('footballBooks')}</Link> | <Link href="./stats">{t('footballStats')}</Link> | <Link href="./games">{t('footballGames')}</Link>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'cookies'])), // Load both common and cookies namespaces
    },
  };
}
