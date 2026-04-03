import { useRouter } from 'next/router';
import TeamHeader from '../../components/TeamHeader';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getTeamBySlugAndLocale, getAllTeamsByLocale } from '../../lib/teams'; // Adjust path as needed
import { buildBreadcrumbJsonLd, getAbsoluteUrl, getLocalizedPath } from '../../lib/seo';
const { SUPPORTED_LOCALES } = require('../../lib/i18n');

export default function TeamPage({ team, locale }) {
  const router = useRouter();
  const { t, ready } = useTranslation(['common', 'seo']);
  const teamUrl = getAbsoluteUrl(getLocalizedPath(`/teams/${team.slug}`, locale));
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('common:granGolTeams'), url: getAbsoluteUrl('/teams') },
    { name: team.name, url: teamUrl },
  ]);
  const teamJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: team.name,
    description: t('seo:teamDescription', { teamName: team.name }),
    url: teamUrl,
    sport: 'Football',
  };

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
      <SeoHead
        title={t('seo:teamTitle', { teamName: team.name })}
        description={t('seo:teamDescription', { teamName: team.name })}
        path={`/teams/${team.slug}`}
        locale={locale}
        breadcrumbs={breadcrumbs}
        jsonLd={teamJsonLd}
      />
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
  let paths = [];

  // Loop over each locale and generate paths for teams
  SUPPORTED_LOCALES.forEach(locale => {
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
      locale,
      ...(await serverSideTranslations(locale, ['common', 'seo'])),
    }
  };
}
