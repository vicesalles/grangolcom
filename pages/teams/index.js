import Link from 'next/link';
import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'next-i18next';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import TopNavbar from '../../components/TopNavbar';
import styles from '../../styles/General.module.scss'
import { getAllTeamsByLocale } from '../../lib/teams'; // Import direct data access

export default function TeamsPage({ teams }) {
  const { t, ready } = useTranslation(['common']);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ready || !isMounted) {
    return <div><IoMdFootball fontSize={50} /></div>; 
  }

  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('granGolTeams')}
        description={t('historiaGranGolSubtitol')}/>
      <div>          
      <div className={styles.article}>       
        <h2>{t('benvingutsLligaGranGol')}</h2>
        <p>{t('textHistoriaGranGol')}</p>
        <h2>{t('equips')}</h2> 
        <ul>
          {teams.map((team) => (
            <li key={team.slug}>
              <Link href={`/teams/${team.slug}`}>
                {team.name} {/* Display team name */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
      
    </main>
    <div className={styles.textMenu}>
        <Link href="/ggx">GGx</Link> | <Link href="/books">{t('footballBooks')}</Link> | <Link href="/stats">{t('footballStats')}</Link> | <Link href="/games">{t('footballGames')}</Link>
      </div>
      <Footer />
    </div>);
}

// Static generation for all locales
export async function getStaticProps({ locale }) {
  // Directly access the data instead of fetching from API
  const teams = getAllTeamsByLocale(locale);

  return {
    props: {
      teams,  // List of teams for the current locale
      ...(await serverSideTranslations(locale, ['common'])),  // Localization data
    },
    revalidate: 10,  // Revalidate the page every 10 seconds
  };
}
