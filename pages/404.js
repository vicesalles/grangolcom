import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import TopNavbar from '../components/TopNavbar';

export default function Custom404() {
  const { t, ready } = useTranslation(['common', 'ggx', 'seo']);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function getGif() {
    const gifs = ['1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '404'];
    return gifs[Math.floor(Math.random() * gifs.length)];
  }

  if (!ready || !isMounted) {
    return (
      <div>
        <SeoHead
          title={t('seo:notFoundTitle')}
          description={t('seo:notFoundDescription')}
          path="/404"
          noindex
        />
        <IoMdFootball fontSize={12} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <SeoHead
        title={t('seo:notFoundTitle')}
        description={t('seo:notFoundDescription')}
        path="/404"
        noindex
      />
      <TopNavbar />
      <main className={styles.main}>
        <h1>404 - Page not found</h1>
        <img src={`/img/${getGif()}.gif`} alt="Gran Gol 404" />
      </main>
      <div className={styles.botoneraDestacada}>
        <Link className={styles.newsletter} href="/ggx/">{t('ggx:ggxTitol')}</Link>
        <Link className={styles.newsletter} href="/ggx/rules">{t('ggx:ggxNormesTitol')}</Link>
        <Link className={styles.newsletter} href="/ggx/stadium">{t('ggx:ggxStadium')}</Link>
        <Link className={styles.newsletter} href="/ggx/teams">{t('ggxTeams')}</Link>
        <Link className={styles.newsletter} href="/ggx/support">{t('ggx:ggxSupportGGX')}</Link>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'ggx', 'seo'])),
    },
  };
}
