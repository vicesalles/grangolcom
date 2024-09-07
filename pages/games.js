import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/OfficialStats.module.scss'
import Footer from '../components/Footer';
import VisitButton from '../components/VisitButton'
import StarsDisplayer from '../components/StarsDisplayer';
import PageHeader from '../components/PageHeader';


export default function EuropeanFootballOfficialStats() {
 


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
        title="Football Games"
        description="Games about football"/>
    
        <div>
          
        </div>
        
      </main>
      <div className={styles.textMenu}><Link href="/">home</Link> | <Link href="/en/books">football books</Link></div>
      
      <Footer/>
    </div>
  )

}