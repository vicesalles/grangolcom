import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/OfficialStats.module.scss'
import Footer from '../components/Footer';
import VisitButton from '../components/VisitButton'
import StarsDisplayer from '../components/StarsDisplayer';
import PageHeader from '../components/PageHeader';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';


export default function Games() {
  const { t } = useTranslation('common');


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

      <main className={styles.main}>
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