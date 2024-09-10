import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/OfficialStats.module.scss';
import Footer from '../components/Footer';
import VisitButton from '../components/VisitButton';
import StarsDisplayer from '../components/StarsDisplayer';
import PageHeader from '../components/PageHeader';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import TopNavbar from '../components/TopNavbar';
import { useEffect, useState } from 'react';


export default function EuropeanFootballOfficialStats() {
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
        <TopNavbar />
        {!ready ? (
          <div className={styles.loading}>
            <IoMdFootball fontSize={48} />
          </div>
        ) : (
          <>
            <PageHeader
              title={t('topEuroStats')}
              description={t('topEuroStatsH2')}
            />
            <div className={styles.statsTable}>
              <div className={styles.headerRow}>
                <div>{t('competition')}</div>
                <div>{t('dataProvider')}</div>
                <div>{t('dataValue')}</div>
                <div>Link</div>
              </div>
              <div>
                <div className={styles.row}><div>Champions League</div><div>UEFA</div><div><StarsDisplayer id={"champions"} number={3}/></div><div><VisitButton url="https://www.uefa.com/uefachampionsleague/statistics/"/></div></div>
                <div className={styles.row}><div>Premier League</div><div>ORACLE</div><div><StarsDisplayer number={3} id={"premier"}/></div><div><VisitButton url="https://www.premierleague.com/stats"/></div></div>
                <div className={styles.row}><div>La Liga</div><div>Microsoft</div><div><StarsDisplayer id={"laLiga"} number={1}/></div><div><VisitButton url="https://www.laliga.com/en-ES/advanced-stats"/></div></div>
                <div className={styles.row}><div>Bundesliga</div><div>AWS</div><div><StarsDisplayer id={"bundesliga"} number={4}/></div><div><VisitButton url="https://www.bundesliga.com/en/bundesliga/stats"/></div></div>
                <div className={styles.row}><div>Serie A</div><div>-</div><div><StarsDisplayer id={"serieA"} number={3}/></div><div><VisitButton url="https://www.legaseriea.it/it/serie-a/statistiche"/></div></div>
              </div>
            </div>
            <div>
          <div className={styles.article}>
            <p>{t('stats:p1')}</p>
            <p>{t('stats:p2')}</p>            
          </div>
        </div>
          </>
        )}
      </main>

      <div className={styles.textMenu}>
        <Link href="/">{t('home')}</Link> | <Link href="/books">{t('footballBooks')}</Link> | <Link href="/games">{t('footballGames')}</Link>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'stats'])),
    },
  };
}
