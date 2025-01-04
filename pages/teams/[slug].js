import { useRouter } from 'next/router';
import TeamHeader from '../../components/TeamHeader';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getTeamBySlugAndLocale, getAllTeamsByLocale } from '../../lib/teams'; // Adjust path as needed

export default function TeamPage({ team, locale }) {
  const router = useRouter();
  const { t, ready } = useTranslation(['common']);

  // Handle fallback state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Handle loading state for translations
  if (!ready) {
    return <div><IoMdFootball fontSize={50} /></div>; // Display the football icon while translations are loading
  }

  return (
    <>
      <div>
        {/* Use the TeamHeader component */}
        <TeamHeader 
          name={team.name} 
          mainColor={team.mainColor} 
          secondColor={team.secondColor} 
        />

        <div>
          <p>{team.description}</p>
          <p>Main Color: {team.mainColor}</p>
          <p>Second Color: {team.secondColor}</p>
          <p>Main Player: {team.mainPlayer}</p>
        </div>
      </div>

      {/* Link to other pages */}
      <div className={styles.textMenu}>
        <Link href="/ggx">GGx</Link> | <Link href="/teams">{t('equips')}</Link>
      </div>

      <Footer />
    </>
  );
}

// Step 1: Generate paths for each team and each locale
export async function getStaticPaths() {
  const locales = ['ca', 'en', 'es']; // Define your locales
  let paths = [];

  // Loop over each locale and generate paths for teams
  locales.forEach(locale => {
    const teams = getAllTeamsByLocale(locale);
    const localePaths = teams.map(team => ({
      params: { slug: team.slug }, // Slug for dynamic routing
      locale, // Locale for localization
    }));
    paths = [...paths, ...localePaths];
  });

  return {
    paths, // Return all generated paths
    fallback: false, // Block until the page is fully generated
  };
}

// Step 2: Fetch team data based on slug and locale
export async function getStaticProps({ params, locale }) {
  const team = getTeamBySlugAndLocale(params.slug, locale);

  if (!team) {
    return {
      notFound: true, // Return a 404 if the team is not found
    };
  }

  return {
    props: {
      team, // Pass the fetched team data to the page
      ...(await serverSideTranslations(locale, ['common'])), // Fetch translations
    }
  };
}
