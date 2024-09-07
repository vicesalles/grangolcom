import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {FaHeart} from '@react-icons/all-files/fa/FaHeart'
import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import Footer from '../components/Footer'
import TopNavbar from '../components/TopNavbar';
export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>Gran Gol</title>
        <link rel="icon" href="/futbol.ico?v=2" />
        <meta property="og:title" content="Gran Gol"/>
        <meta property="og:description" content="Gran Gol futbol, futebol, calcio, football, fut, fussball, voetball, كرة القدم."/>
        <meta property="og:image" content="https://grangol.com/grangol.jpg"/>
        <meta property="og:url" content="https://grangol.com"></meta>

        <meta name="twitter:title" content="Gran Gol"/>
        <meta name="twitter:description" content="Gran Gol futbol, futebol, calcio, football, fut, fussball, voetball, كرة القدم."/>
        <meta name="twitter:image" content="https://grangol.com/grangol.jpg"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <TopNavbar/>
      <main className={styles.main}>
          <h1><FaHeart fontSize={100} color={"red"}/> <IoMdFootball fontSize={100}/></h1>
          
      </main>
      <div className={styles.textMenu}><Link href="./books">{t('footballBooks')}</Link> | <Link href="./stats">{t('footballStats')}</Link> | <Link href="./games">{t('footballGames')}</Link></div>
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


