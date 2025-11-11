import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/General.module.scss'

import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import TopNavbar from '../../../components/TopNavbar';

import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GGXTeams() {
  const { t, ready } = useTranslation(['common', 'ggx']);
  const [isMounted, setIsMounted] = useState(false);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": "t('ggx:ggxTitol')",
    "description": t('ggx:ggxSubTitol'),
    "image": "https://grangol.com/grangol.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Gran Gol"
    },
    "genre": "Joc de futbol",
    "url": "https://grangol.com"
  };

  const MetaHead = ({ jsonLdData }) => (
    <Head>
      <title>{t('ggx:ggxTeamsTitle')}</title>
      <meta name="description" content={t('ggx:ggxTeamsDescription')} />  

      <link rel="icon" href="/futbol.ico?v=2"/>
      <meta property="og:title" content={t('ggx:ggxTeamsTitle')}/>
      <meta property="og:description" content={t('ggx:ggxTeamsDescription')}/>
      <meta property="og:image" content="https://grangol.com/GGxFons.jpg"/>
      <meta property="og:url" content="https://grangol.com/ggx"></meta>
      <meta name="twitter:title" content={t('ggx:ggxTeamsTitle')}/>
      <meta name="twitter:description" content={t('ggx:ggxTeamsDescription')}/>
      <meta name="twitter:image" content="https://grangol.com/GGxFons.jpg"/>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="robots" content="index, follow"/>    
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.grangol.com/ggx" />
      <meta name="twitter:site" content="@GranGol11" />
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
        title={t('ggx:ggxTeamsTitle')}
        description={t('ggx:ggxTeamsDescription')}/>
               
        <div className={styles.articleTeams}>    
          <h3>{t('ggx:ggxTeamsDescription')}</h3>
          <p>{t('ggx:ggxTeamsDisclaimer')}</p>    
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Teams/GGx_Teams_Stack_1-8dWTklVu8BUch2CfP7oDSqHM4fNp5Q.jpg"
                    width={1200}
                    height={612}
                    alt="{t('ggx:teamsStack')}"
                />
                <p className={styles.peuFoto}>{t('ggx:teamsStack')}. <a href='https://makerworld.com/en/models/1014484' target='_blank' rel="noopener">{t('ggx:teamCarrier')}</a></p>
          </div>     
          <div>
            <h4>CLUBS</h4>
            <p>{t('ggx:mainLeaguesTeams')}</p>
            <ul>
              <li><Link href="https://makerworld.com/en/models/1032308" target='_blank' rel="noopener">{t('ggx:england')}</Link></li>
              <li><Link href="https://makerworld.com/en/models/1032387" target='_blank' rel="noopener">{t('ggx:spain')}</Link></li>
              <li><Link href="https://makerworld.com/en/models/1032339" target='_blank' rel="noopener">{t('ggx:italy')}</Link></li>
              <li><Link href="https://makerworld.com/en/models/1032432" target='_blank' rel="noopener">{t('ggx:germany')}</Link></li>
            </ul>
             <h4>NATIONAL TEAMS</h4>
            <p></p>
            <ul>
              <li><Link href="https://makerworld.com/en/models/1611918-european-national-football-teams-ggx" target='_blank' rel="noopener">{t('ggx:europe')}</Link></li>
              <li><Link href="https://makerworld.com/en/models/1792002-american-national-soccer-teams-for-ggx" target='_blank' rel="noopener">{t('ggx:america')}</Link></li>
            </ul>
          </div>
              
          
        </div>

        <div className={styles.botoneraDestacada}>
        <Link className={styles.newsletter} href="/">{t('home')}</Link><Link className={styles.newsletter} href="/ggx/">{t('ggx:queEsGGx')}</Link><Link className={styles.newsletter} href="/ggx/rules">{t('ggx:ggxNormesTitol')}</Link> <Link className={styles.newsletter} href="/ggx/stadium">{t('ggx:ggxStadium')}</Link> <Link className={styles.newsletter} href="/ggx/support">{t('ggx:ggxSupportGGX')}</Link>
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