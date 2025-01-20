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
    "name": t('stadium:titolStadium'),
    "description": t('stadium:subtitolStadium'),
    "image": "https://grangol.com/grangol.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Gran Gol"
    },
    "genre": "Joc de futbol",
    "url": "https://grangol.com/ggx/stadium"
  };

  const MetaHead = ({ jsonLdData }) => (
    <Head>
    <title>{t('stadium:titolStadium')}</title>
        <meta name="description" content={t('stadium:subtitolStadium')}/>  

        <link rel="icon" href="/futbol.ico?v=2"/>
        <meta property="og:title" content={t('stadium:titolStadium')}/>
        <meta property="og:description" content={t('stadium:subtitolStadium')}/>
        <meta property="og:image" content="https://grangol.com/GGxFons.jpg"/>
        <meta property="og:url" content="https://grangol.com"></meta>

        <meta name="twitter:title" content={t('stadium:titolStadium')}/>
        <meta name="twitter:description" content={t('stadium:subtitolStadium')}/>
        <meta name="twitter:image" content="https://grangol.com/GGxFons.jpg"/>
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
        title={t('stadium:titolStadium')}
        description={t('stadium:subtitolStadium')}/>
    
        <div>          
          <div className={styles.article}>    
          <h3>{t('stadium:titolArticleStadium')}</h3>
          <p>{t('stadium:introStadium')}</p>         
                    
          
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/porteriaV3-EliIXPnTqyaotmbtsYfx9Wklv9fePr.jpg"
                    width={1200}
                    height={400}
                    alt="{t('stadium:peuFotoPorteriaV3')}"
                />
                <p className={styles.peuFoto}>{t('stadium:peuFotoPorteriaV3')}</p>
          </div>
          <p>{t('stadium:partsStadium')}</p>

          <h3>{t('stadium:tanquesTitol')}</h3>
          <p>{t('stadium:tanquesIntro')}</p>  

          <h3>{t('stadium:porteriesTitol')}</h3>
          <p>{t('stadium:porteriesIntro')}</p>  
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries01-w5RjO7eZkWqmmCFVN32dcwWrlzx0SY.jpg"
                    width={1200}
                    height={904}
                    objectFit={'contain'}
                    alt="{t('stadium:porteries01')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries01')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries02-XMpzBrmTwVNLvibboVdjPhRoByjHq7.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries02')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries02')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries03-j74ll7C5vYWcoDVR3Utov2uwgO84GJ.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries03')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries03')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries04-Xvk3NDiESCMEAyvfANcZ5jzQ3Qyjze.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries04')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries04')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries05-q2UKo28vGWJHHDkcTXv6BLRssSNM2B.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries05')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries05')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries06-kNv1hKZMl0OAuj7W026WUKwB5VaIWN.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries06')}"
                />
          <p className={styles.peuFoto}>{t('stadium:porteries06')}</p>      
          </div>
          <div className={styles.containerImatge}>
          <video width={1200} src='https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/ggx_stadium_0-kOW2KEIqAm5SiEWMUi2wtfMjoEXfRl.mp4' autoPlay loop muted playsinline/>
          <p className={styles.peuFoto}>{t('stadium:loopVideo')}</p>
          </div>
      
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