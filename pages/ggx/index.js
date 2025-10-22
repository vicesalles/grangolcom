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
    "name": t('ggx:ggxTitol'),
    "description": t('ggx:ggxSubTitol'),
    "image": "https://grangol.com/img/articles/GGxFons.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Gran Gol"
    },
    "genre": "Joc de futbol",
    "url": "https://grangol.com"
  }

  const MetaHead = ({ jsonLdData }) => (
    <Head>
      <title>{t('ggx:ggxTitol')}</title>
      <meta name="description" content={t('ggx:ggxSubTitol')} />  

      <link rel="icon" href="/futbol.ico?v=2"/>
      <meta property="og:title" content={t('ggx:ggxTitol')}/>
      <meta property="og:description" content={t('ggx:ggxSubTitol')}/>
      <meta property="og:image" content="https://grangol.com/img/articles/GGxFons.jpg"/>
      <meta property="og:url" content="https://grangol.com/ggx"></meta>
      <meta name="twitter:title" content={t('ggx:ggxTitol')}/>
      <meta name="twitter:description" content={t('ggx:ggxSubTitol')}/>
      <meta name="twitter:image" content="https://grangol.com/img/articles/GGxFons.jpg"/>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@GranGol11" />
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

      <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('ggx:ggxTitol')}
        description={t('ggx:ggxSubTitol')}/>
    
        <div>          
          <div className={styles.article}>    
          <h3>{t('ggx:queEsGGx')}</h3>
          <p>{t('ggx:ggxIntro')}</p>
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/xapesVelles.jpg"
                    width={1200}
                    height={400}
                    alt="{t('ggx:ggxFotoXapesVelles')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFotoXapesVelles')}</p>
          </div> 
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/GGxFons.jpg"
                    width={1200}
                    height={900}
                    alt="{t('ggx:ggxDescripcio')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxDescripcio')}</p>
          </div>            

          <p>{t('ggx:ggxPare')}</p> 

            <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/ProvesPilotaFitxa-htReZt7c4tsYJcobpNRo5EteENdv01.jpg"
                    width={1200}
                    height={402}
                    alt={t('ggx:ggxFitxaPilota')}
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFitxaPilota')}</p>
          </div>  

          <p>{t('ggx:ggxDisseny')}</p>

            <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/TestResistencia.jpg"
                    width={1200}
                    height={661}
                    alt="{t('ggx:ggxpeuFotoResistencia')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxpeuFotoResistencia')}</p>
          </div> 

          
          
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/porteriaZero.jpg"
                    width={1200}
                    height={400}
                    alt="{t('ggx:ggxpeuFotoPorteria')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxpeuFotoPorteria')}</p>
          </div>

          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/OTesting-EWdEr6SngPJdEy4oGmzPTfMGgcr0Cq.jpg"
                    width={1200}
                    height={904}
                    alt="{t('ggx:ggxpeuFotoPorteria')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxQcExperts')}</p>
          </div>
          
          </div>
        </div>
        
        <div className={styles.botoneraDestacada}>
        <Link className={styles.newsletter} href="/">{t('home')}</Link> <Link className={styles.newsletter} href="/ggx/rules">{t('ggx:ggxNormesTitol')}</Link> <Link className={styles.newsletter} href="/ggx/stadium">{t('ggx:ggxStadium')}</Link> <Link className={styles.newsletter} href="/ggx/teams">{t('ggxTeams')}</Link> <Link className={styles.newsletter} href="/ggx/support">{t('ggx:ggxSupportGGX')}</Link>
          </div>

      </main>      
       
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