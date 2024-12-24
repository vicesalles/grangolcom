import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/General.module.scss'

import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import TopNavbar from '../components/TopNavbar';

import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Games() {
  const { t, ready } = useTranslation(['common', 'games']);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This ensures that the component is mounted in the browser
    setIsMounted(true);
  }, []);

  // Wait until translations are ready
  if (!ready || !isMounted) {
    return <div><IoMdFootball fontSize={12} /></div>;
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Gran Gol: {t('footballGames')}</title>
        <link rel="icon" href="/futbol.ico?v=2"/>
        <meta property="og:title" content="Gran Gol"/>
        <meta property="og:description" content={t('footballGames')}/>
        <meta property="og:image" content="https://www.grangol.com/grangol.jpg"/>
        <meta property="og:url" content="https://www.grangol.com"></meta>

        <meta name="twitter:title" content="Gran Gol"/>
        <meta name="twitter:description" content={t('footballGames')}/>
        <meta name="twitter:image" content="https://www.grangol.com/grangol.jpg"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="robots" content="index, follow"/>
      </Head>      
      <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('footballGames')}
        description={t('playingToPlayFootball')}/>
    
        <div>          
          <div className={styles.article}>          
            <p>{t('games:intro')}</p>
            <p>{t('games:jocsTaula')}</p>
            <p>{t('games:xapes')}</p>
            <p>{t('games:tancament')}</p>

            <Link href="/ggx"><h4 className={styles.newsletter}>{t('games:playGGx')}</h4></Link>
                        
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/ProvesPilotaFitxa.jpg"
                    width={1200}
                    height={402}
                    alt="La fitxa pilota és un element clau en els nostres jocs"
                />
                <p className={styles.peuFoto}>La FitxaPilota és un element bàsic del joc.</p>
          </div>
        </div>
        
      </main>
      <div className={styles.textMenu}><Link href="/">{t('home')}</Link> | <Link href="/ggx">GGx</Link> | <Link href="/stats">{t('footballStats')}</Link> | <Link href="/books">{t('footballBooks')}</Link></div>
      
      <Footer/>
    </div>
  )

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'games'])),
    },
  };
}