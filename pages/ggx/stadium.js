import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/General.module.scss'

import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import TopNavbar from '../../components/TopNavbar';

import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GGX() {
  const { t, ready } = useTranslation(['common', 'ggx']);
  const [isMounted, setIsMounted] = useState(false);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": "GGx",
    "description": "GGx és un joc de futbol inspirat en el Subbuteo i les xapes.",
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
        <title>Gran Gol: GGx Stadium</title>
        <meta name="description" content="GGx Stadium tabletop football" />  

        <link rel="icon" href="/futbol.ico?v=2"/>
        <meta property="og:title" content="Gran Gol GGx Stadium"/>
        <meta property="og:description" content="GGx Stadium tabletop football"/>
        <meta property="og:image" content="https://grangol.com/GGxFons.jpg"/>
        <meta property="og:url" content="https://grangol.com/ggx"></meta>

        <meta name="twitter:title" content="Gran Gol GGx Stadium"/>
        <meta name="twitter:description" content="GGx Stadium tabletop football"/>
        <meta name="twitter:image" content="https://grangol.com/GGxFons.jpg"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="robots" content="index, follow"/>    
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.grangol.com/ggx" />
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
        <title>Gran Gol: {t('stadium:titolStadium')}</title>
        <meta name="description" content={t('stadium:titolStadium')} />  

        <link rel="icon" href="/futbol.ico?v=2"/>
        <meta property="og:title" content={t('stadium:titolStadium')}/>
        <meta property="og:description" content={t('stadium:titolStadium')}/>
        <meta property="og:image" content="https://grangol.com/GGxFons.jpg"/>
        <meta property="og:url" content="https://grangol.com"></meta>

        <meta name="twitter:title" content={t('stadium:titolStadium')}/>
        <meta name="twitter:description" content={t('stadium:subtitolStadium')}/>
        <meta name="twitter:image" content="https://grangol.com/GGxFons.jpg"/>
        <meta name="twitter:card" content="summary_large_image"></meta>        
        
      <meta name="robots" content="index, follow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.grangol.com/ggx" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.grangol.com/sitemap.xml" />

      {/* Incrustar JSON-LD */}
      <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} 
        />      
      </Head>      
      <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('stadium:titolStadium')}
        description={t('stadium:subtitolStadium')}/>
    
        <div>          
          <div className={styles.article}>    
          <h3>{t('stadium:titolArticleStadium')}</h3>
          <p>{t('stadium:introStadium')}</p>         
                    
          
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/porteriaZero.jpg"
                    width={1200}
                    height={400}
                    alt="{t('ggx:ggxpeuFotoPorteria')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxpeuFotoPorteria')}</p>
          </div>
          <p>{t('stadium:partsStadium')}</p>
      
        </div>
        </div>
        <div className={styles.botoneraDestacada}>
        <Link className={styles.newsletter} href="/ggx/">{t('ggx:queEsGGx')}</Link><Link className={styles.newsletter} href="/ggx/rules">{t('ggx:ggxNormesTitol')}</Link> <Link className={styles.newsletter} href="/ggx/teams">{t('ggxTeams')}</Link> <Link className={styles.newsletter} href="/ggx/support">{t('ggx:ggxSupportGGX')}</Link>
        </div>

      </main>
      
      <Footer/>
    </div>
  )

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'ggx','stadium'])),
    },
  };
}