import Link from 'next/link';
import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'next-i18next';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css';

export default function TeamsPage({ teams }) {
  const { t, ready } = useTranslation(['common']);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ready || !isMounted) {
    return <div><IoMdFootball fontSize={12} /></div>;
  }

  return (

    <>
    <div>
      <h1>{t('equips')}</h1>  {/* Translated title */}
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
    <div className={styles.textMenu}>
      <Link href="./ggx">GGx</Link> | <Link href="./books">{t('footballBooks')}</Link> | <Link href="./stats">{t('footballStats')}</Link> | <Link href="./games">{t('footballGames')}</Link>
      </div>
    <Footer/>
    </>
  );
}

// Fetch team data from the API and handle localization
export async function getStaticProps({ locale }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teams`);
  const teams = await res.json();

  return {
    props: {
      teams,  // List of teams with slug and name
      ...(await serverSideTranslations(locale, ['common'])),  // Localization data
    },
    revalidate: 10,  // Revalidate the page every 10 seconds
  };
}
