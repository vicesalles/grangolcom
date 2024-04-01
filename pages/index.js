import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {FaHeart} from '@react-icons/all-files/fa/FaHeart'
import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { PageViews } from '@piwikpro/react-piwik-pro';


import Footer from '../components/Footer'
export default function Home() {
  PageViews.trackPageView('Home');
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

      <main className={styles.main}>
          <h1><FaHeart fontSize={100} color={"red"}/> <IoMdFootball fontSize={100}/></h1>
          
      </main>
      <div className={styles.textMenu}><Link href="/en/books">football books</Link> | <Link href="/en/european-football-official-stats">football stats</Link></div>
      <Footer/>
    </div>
  )
}


