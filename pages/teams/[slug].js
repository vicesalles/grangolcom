import { useRouter } from 'next/router';
import TeamHeader from '../../components/TeamHeader';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'next-i18next';

export default function TeamPage({ data, locale }) {
  const router = useRouter();
  const { t, ready } = useTranslation(['common']);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ready || !isMounted) {
    return <div><IoMdFootball fontSize={12} /></div>;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div>
      {/* Use the TeamHeader component */}
      <TeamHeader 
        name={data.name} 
        mainColor={data.mainColor} 
        secondColor={data.secondColor} 
      />

      <div>
      <p>{data.description}</p>
        <p>Main Color: {data.mainColor}</p>
        <p>Second Color: {data.secondColor}</p>
        <p>Main Player: {data.mainPlayer}</p>
      </div>
    </div>
    <div className={styles.textMenu}>
      <Link href="/ggx">GGx</Link> | <Link href="/teams">{t('equips')}</Link>
      </div>
    <Footer/>
    </>
  );
}

// Fetch data for the page
export async function getStaticProps({ params, locale }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teams/${params.slug}?locale=${locale}`);
  const data = await res.json();

  if (!data.message) {
    return { notFound: true };
  }

  return {
    props: {
      data: data.message,  // Pass the team data to the page
      locale,              // Pass the current locale
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 10,  // Revalidate the page every 10 seconds
  };
}

export async function getStaticPaths() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teams`);
    const teams = await res.json();

    // Log the response to debug the structure
    console.log("Teams API response:", teams);

    // Validate that the response is an array of team objects
    if (!Array.isArray(teams)) {
      throw new Error("Expected an array of teams but got something else");
    }

    const locales = ['ca', 'en', 'es'];

    // Generate paths for each locale and slug
    const paths = teams.map(team => 
      locales.map(locale => ({
        params: { slug: team.slug },  // Use the slug field to generate paths
        locale,  // Include the locale in the paths
      }))
    ).flat();  // Flatten the array of arrays

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error("Error generating static paths:", error);
    throw error;
  }
}

