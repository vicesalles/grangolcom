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
        <title>Gran Gol: GGx</title>
        <meta name="description" content="GGx ❤️⚽" />  

        <link rel="icon" href="/futbol.ico?v=2"/>
        <meta property="og:title" content="Gran Gol GGx"/>
        <meta property="og:description" content="❤️⚽"/>
        <meta property="og:image" content="https://grangol.com/GGxFons.jpg"/>
        <meta property="og:url" content="https://grangol.com/ggx"></meta>

        <meta name="twitter:title" content="Gran Gol GGx"/>
        <meta name="twitter:description" content="❤️⚽"/>
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
        <title>Gran Gol: {t('ggx:ggxNormesTitol')}</title>
        <meta name="description" content={t('ggxDescripcio')} />  

        <link rel="icon" href="/futbol.ico?v=2"/>
        <meta property="og:title" content={t('ggx:ggxNormesTitol')}/>
        <meta property="og:description" content={t('ggxDescripcio')}/>
        <meta property="og:image" content="https://grangol.com/GGxFons.jpg"/>
        <meta property="og:url" content="https://grangol.com"></meta>

        <meta name="twitter:title" content={t('ggx:ggxNormesTitol')}/>
        <meta name="twitter:description" content={t('ggxDescripcio')}/>
        <meta name="twitter:image" content="https://grangol.com/GGxFons.jpg"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="robots" content="index, follow"/>

        <Head>     

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.grangol.com/ggx" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.grangol.com/sitemap.xml" />

      {/* Incrustar JSON-LD */}
      <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} 
        />

      
      </Head>
      </Head>      
      <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('ggx:ggxNormesTitol')}
        description={t('ggx:ggxSubTitol')}/>
    
        <div>          
          <div className={styles.article}>  

          <h3>{t('ggx:ggxNormesTitol')}</h3>
          <p>{t('ggx:ggxNormesPartit')}</p>
          <p><ul>
            <li>{t('ggx:ggxNormesPartitGols')}</li>
            <li>{t('ggx:ggxNormesPartitTemps')}</li>
            </ul></p>
            <p>{t('ggx:ggxNormesIntro')}</p>
            <p><ol>
                <li>{t('ggx:ggxNormes1')}</li>
                <li>{t('ggx:ggxNormes2')}</li>
                <li>{t('ggx:ggxNormes3')}</li>
                <li>{t('ggx:ggxNormes4')}</li>
                <li>{t('ggx:ggxNormes5')}</li>
                <li>{t('ggx:ggxNormes6')}</li>
                <li>{t('ggx:ggxNormes7')}</li>
                <li>{t('ggx:ggxNormes8')}</li>
                <li>{t('ggx:ggxNormes9')}</li>
                <li>{t('ggx:ggxNormes10')}</li>
                <li>{t('ggx:ggxNormes11')}</li>
                <li>{t('ggx:ggxNormes12')}</li>
                <li>{t('ggx:ggxNormes13')}</li>
                <li>{t('ggx:ggxNormes14')}</li>
                <li>{t('ggx:ggxNormes15')}</li>
                </ol></p>
                <div className={styles.containerImatge}>
              <a className={styles.botoCTA} href={t('ggx:ggxNormesPaperURL')} target='_blank'>{t('ggx:ggxNormesPaperText')}</a>
                </div>
            
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/areaJoc.jpg"
                    width={1200}
                    height={612}
                    alt="{t('ggx:ggxFotoAreaPenal')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFotoAreaPenal')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/areaGol.jpg"
                    width={1200}
                    height={798}
                    alt="{t('ggx:ggxFotoAreaGol')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFotoAreaGol')}</p>
          </div>
        </div>
        
      </main>
      <div className={styles.textMenu}><Link href="/">{t('home')}</Link> | <Link href="./ggx/">{t('ggx:queEsGGx')}</Link> | <Link href="./ggx/rules">{t('ggx:ggxNormesTitol')}</Link> |  <Link href="./ggx/stadium">{t('ggx:ggxStadium')}</Link> | <Link href="./ggx/teams">{t('ggxTeams')}</Link> | <Link href="./ggx/support">{t('ggx:ggxSupportGGX')}</Link></div>
      
      <Footer/>
    </div>
  )

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'ggx'])),
    },
  };
}