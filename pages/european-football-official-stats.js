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
        title="Top European Football official stats"
        description="The main european football competitions collect and publish data about the football games. Here is a list of links about official football data."/>
    
        <div>
          <div className={styles.statsTable}>
            <div className={styles.headerRow}><div>Competition</div><div>Data Provider</div><div>Data Value</div><div>Link</div></div>
            <div>
            <div className={styles.row}><div>Champions League</div><div>UEFA</div><div><StarsDisplayer id={"champions"} number={3}/></div><div><VisitButton url="https://www.uefa.com/uefachampionsleague/statistics/"/></div></div>
            <div className={styles.row}><div>Premier League</div><div>ORACLE</div><div><StarsDisplayer number={3} id={"premier"}/></div><div><VisitButton url="https://www.premierleague.com/stats"/></div></div>
            <div className={styles.row}><div>La Liga</div><div>Microsoft</div><div><StarsDisplayer id={"laLiga"} number={1}/></div><div><VisitButton url="https://www.laliga.com/en-ES/advanced-stats"/></div></div>
            <div className={styles.row}><div>Bundesliga</div><div>AWS</div><div><StarsDisplayer id={"bundesliga"} number={4}/></div><div><VisitButton url="https://www.bundesliga.com/en/bundesliga/stats"/></div></div>
            <div className={styles.row}><div>Serie A</div><div>-</div><div><StarsDisplayer id={"serieA"} number={3}/></div><div><VisitButton url="https://www.legaseriea.it/it/serie-a/statistiche"/></div></div>
            </div>
          </div>
        </div>
        
      </main>
      <div className={styles.textMenu}><Link href="/">home</Link> | <Link href="/en/books">football books</Link></div>
      
      <Footer/>
    </div>
  )

}