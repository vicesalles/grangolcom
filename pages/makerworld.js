import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import TopNavbar from '../components/TopNavbar';
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../lib/seo';

export default function MakerWorldLanding() {
  const { t, ready } = useTranslation(['common', 'ggx', 'seo']);
  const [isMounted, setIsMounted] = useState(false);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: 'MakerWorld', url: getAbsoluteUrl('/makerworld') },
  ]);

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('seo:makerworldTitle'),
    description: t('seo:makerworldDescription'),
    image: 'https://www.grangol.com/img/articles/GGxFons.jpg',
    url: 'https://www.grangol.com/makerworld',
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ready || !isMounted) {
    return (
      <div>
        <SeoHead
          title={t('seo:makerworldTitle')}
          description={t('seo:makerworldDescription')}
          path="/makerworld"
          jsonLd={jsonLdData}
          breadcrumbs={breadcrumbs}
        />
        <IoMdFootball fontSize={12} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <SeoHead
        title={t('seo:makerworldTitle')}
        description={t('seo:makerworldDescription')}
        path="/makerworld"
        jsonLd={jsonLdData}
        breadcrumbs={breadcrumbs}
      />
      <TopNavbar />
      <main className={styles.main}>
        <Image
          className={styles.logoPrincipal}
          src="/img/grangol.svg"
          width={600}
          height={200}
          alt={t('seo:makerworldTitle')}
        />
        <h1 className={styles.titolPrincipal}>{t('ggx:ggxLandingTitle')}</h1>
        <h3>
          <FaHeart fontSize={100} color={'red'} /> <IoMdFootball fontSize={100} />
        </h3>
        <p className={styles.landingHighlight}>{t('ggx:ggxLandingText1')}</p>
        <h2>{t('ggx:ggxLandingText2')}</h2>
        <h2 className={styles.landingNarrow}>{t('ggx:ggxLandingText3')}</h2>
        <a className={styles.ctaPrimary} href={t('shareNewsletter')} target="_blank" rel="noopener noreferrer">
          {t('joinTheClub')}
        </a>
      </main>
      <div className={styles.makerworldNav}>
        <Link className={styles.navLinkSecondary} href="./ggx/">{t('ggx:queEsGGx')}</Link>
        <Link className={styles.navLinkSecondary} href="/ggx/rules">{t('ggx:ggxNormesTitol')}</Link>
        <Link className={styles.navLinkSecondary} href="/ggx/stadium">{t('ggx:ggxStadium')}</Link>
        <Link className={styles.navLinkSecondary} href="/ggx/teams">{t('ggxTeams')}</Link>  
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
