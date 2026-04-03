import Link from 'next/link';
import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'next-i18next';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import SeoHead from '../../components/SeoHead';
import TopNavbar from '../../components/TopNavbar';
import styles from '../../styles/General.module.scss'
import { getAllTeamsByLocale } from '../../lib/teams'; // Import direct data access
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../../lib/seo';

export default function TeamsPage({ teams }) {
  const { t, ready } = useTranslation(['common', 'seo']);
  const [isMounted, setIsMounted] = useState(false);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('common:granGolTeams'), url: getAbsoluteUrl('/teams') },
  ]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ready || !isMounted) {
    return <div><IoMdFootball fontSize={50} /></div>; 
  }

  return (
    <div className={styles.container}>
    <SeoHead
      title={t('seo:teamsTitle')}
      description={t('seo:teamsDescription')}
      path="/teams"
      breadcrumbs={breadcrumbs}
    />
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
        <Link href="/ggx">GGx</Link> | <Link href="/stats">{t('footballStats')}</Link> | <Link href="/games">{t('footballGames')}</Link>
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
      ...(await serverSideTranslations(locale, ['common', 'seo'])),
    }   
  };
}
