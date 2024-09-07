import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/OfficialStats.module.scss'
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import TopNavbar from '../components/TopNavbar';
import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { GoogleTagManager } from '@next/third-parties/google';


export default function Games() {
  const { t, ready } = useTranslation('common');

  // Wait until translations are ready
  if (!ready) {
    return <div><IoMdFootball fontSize={12}/></div>;
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Gran Gol: European Big Leagues Stats</title>
        <link rel="icon" href="/futbol.ico?v=2"/>
        <meta property="og:title" content="Gran Gol"/>
        <meta property="og:description" content="Gran Gol: European Big Leagues Stats."/>
        <meta property="og:image" content="https://grangol.com/grangol.jpg"/>
        <meta property="og:url" content="https://grangol.com"></meta>

        <meta name="twitter:title" content="Gran Gol"/>
        <meta name="twitter:description" content="Gran Gol: European Big Leagues Stats."/>
        <meta name="twitter:image" content="https://grangol.com/grangol.jpg"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <GoogleTagManager gtmId="G-WSSRG343P3" />
      <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('footballGames')}
        description={t('playingToPlayFootball')}/>
    
        <div>
          
        </div>
        
      </main>
      <div className={styles.textMenu}><Link href="/">{t('home')}</Link> | <Link href="/stats">{t('footballStats')}</Link> | <Link href="/books">{t('footballBooks')}</Link></div>
      
      <Footer/>
    </div>
  )

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}