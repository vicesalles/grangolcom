import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import TopNavbar from '../../components/TopNavbar';
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../../lib/seo';

export default function SupportGGX() {
  const { t, ready } = useTranslation(['common', 'ggx', 'seo']);
  const [isMounted, setIsMounted] = useState(false);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('ggx:ggxTitol'), url: getAbsoluteUrl('/ggx') },
    { name: t('ggx:ggxSupportGGX'), url: getAbsoluteUrl('/ggx/support') },
  ]);

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('seo:ggxSupportTitle'),
    description: t('seo:ggxSupportDescription'),
    image: 'https://www.grangol.com/img/articles/GGxFons.jpg',
    url: 'https://www.grangol.com/ggx/support',
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ready || !isMounted) {
    return (
      <div>
        <SeoHead
          title={t('seo:ggxSupportTitle')}
          description={t('seo:ggxSupportDescription')}
          path="/ggx/support"
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
        title={t('seo:ggxSupportTitle')}
        description={t('seo:ggxSupportDescription')}
        path="/ggx/support"
        jsonLd={jsonLdData}
        breadcrumbs={breadcrumbs}
      />
      <TopNavbar />
      <main className={styles.main}>
        <h1 className={styles.titolPrincipal}>{t('ggx:ggxSupportGGX')}</h1>
        <h3>
          <FaHeart fontSize={100} color={'red'} /> <IoMdFootball fontSize={100} />
        </h3>
        <div className={styles.supportContainer}>
          <a className={styles.support} href={t('common:shareNewsletter')} target="_blank" rel="noopener noreferrer">
            {t('common:newsLetterMaker')}
          </a>
          <a className={styles.support} href="https://discord.gg/UYAeS6Jv" target="_blank" rel="noopener noreferrer">
            {t('common:joinDiscord')}
          </a>
        </div>
        <div>
          <p>{t('ggx:ggxSupportGGXtext')}</p>
        </div>
      </main>
      <div className={styles.botoneraContainer}>
        <Link className={styles.newsletter} href="/">
          {t('home')}
        </Link>
        <Link className={styles.newsletter} href="/ggx/">
          {t('ggx:queEsGGx')}
        </Link>
        <Link className={styles.newsletter} href="/ggx/rules">
          {t('ggx:ggxNormesTitol')}
        </Link>
        <Link className={styles.newsletter} href="/ggx/stadium">
          {t('ggx:ggxStadium')}
        </Link>
        <Link className={styles.newsletter} href="/ggx/teams">
          {t('ggxTeams')}
        </Link>
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
