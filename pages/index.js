import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {FaHeart} from '@react-icons/all-files/fa/FaHeart'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import {SiTiktok} from '@react-icons/all-files/si/SiTiktok';
export default function Home() {
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

      <footer className={styles.footer}>
      <a href="https://twitter.com/grangol11" target="_blank" style={{marginRight:15}}><FaTwitter fontSize={25} color={"white"}/></a>
      <a href="https://www.instagram.com/grangol11/" target="_blank" style={{marginRight:15}}><FaInstagram fontSize={25} color={"white"}/></a>
      <a href="https://www.tiktok.com/@grangol11" target="_blank" style={{marginRight:15}}><SiTiktok fontSize={25} color={"white"}/></a>
      </footer>
    </div>
  )
}
