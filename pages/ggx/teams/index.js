import Link from 'next/link';
import styles from '../../../styles/General.module.scss';

import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import SeoHead from '../../../components/SeoHead';
import TopNavbar from '../../../components/TopNavbar';

import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../../../lib/seo';

export default function GGXTeams() {
  const { t, ready } = useTranslation(['common', 'ggx', 'seo']);
  const [isMounted, setIsMounted] = useState(false);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('ggx:ggxTitol'), url: getAbsoluteUrl('/ggx') },
    { name: t('ggx:ggxTeamsTitle'), url: getAbsoluteUrl('/ggx/teams') },
  ]);

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t('seo:ggxTeamsTitle'),
    description: t('seo:ggxTeamsDescription'),
    image: 'https://www.grangol.com/img/articles/GGxFons.jpg',
    url: 'https://www.grangol.com/ggx/teams',
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ready || !isMounted) {
    return (
      <div>
        <SeoHead
          title={t('seo:ggxTeamsTitle')}
          description={t('seo:ggxTeamsDescription')}
          path="/ggx/teams"
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
        title={t('seo:ggxTeamsTitle')}
        description={t('seo:ggxTeamsDescription')}
        path="/ggx/teams"
        jsonLd={jsonLdData}
        breadcrumbs={breadcrumbs}
      />
      <main className={styles.main}>
        <TopNavbar />
        <PageHeader title={t('ggx:ggxTeamsTitle')} description={t('ggx:ggxTeamsDescription')} />

        <div className={styles.articleTeams}>
          <h3>{t('ggx:ggxTeamsDescription')}</h3>
          <p>{t('ggx:ggxTeamsDisclaimer')}</p>
          <div className={styles.containerImatge}>
            <Image
              src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Teams/GGx_Teams_Stack_1-8dWTklVu8BUch2CfP7oDSqHM4fNp5Q.jpg"
              width={1200}
              height={612}
              alt={t('ggx:teamsStack')}
            />
            <p className={styles.peuFoto}>
              {t('ggx:teamsStack')}.{' '}
              <a href="https://makerworld.com/en/models/1014484" target="_blank" rel="noopener noreferrer">
                {t('ggx:teamCarrier')}
              </a>
            </p>
          </div>
          <div>
            <h4>CLUBS</h4>
            <p>{t('ggx:mainLeaguesTeams')}</p>
            <ul>
              <li><Link href="https://makerworld.com/en/models/1032308" target="_blank" rel="noopener noreferrer">{t('ggx:england')}</Link></li>
              <li><Link href="https://makerworld.com/en/models/1032387" target="_blank" rel="noopener noreferrer">{t('ggx:spain')}</Link></li>
              <li><Link href="https://makerworld.com/en/models/1032339" target="_blank" rel="noopener noreferrer">{t('ggx:italy')}</Link></li>
              <li><Link href="https://makerworld.com/en/models/1032432" target="_blank" rel="noopener noreferrer">{t('ggx:germany')}</Link></li>
            </ul>
            <h4>NATIONAL TEAMS</h4>
            <ul>
              <li><Link href="https://makerworld.com/en/models/1611918-european-national-football-teams-ggx" target="_blank" rel="noopener noreferrer">{t('ggx:europe')}</Link></li>
              <li><Link href="https://makerworld.com/en/models/1792002-american-national-soccer-teams-for-ggx" target="_blank" rel="noopener noreferrer">{t('ggx:america')}</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.botoneraDestacada}>
          <Link className={styles.newsletter} href="/">{t('home')}</Link>
          <Link className={styles.newsletter} href="/ggx/">{t('ggx:queEsGGx')}</Link>
          <Link className={styles.newsletter} href="/ggx/rules">{t('ggx:ggxNormesTitol')}</Link>
          <Link className={styles.newsletter} href="/ggx/stadium">{t('ggx:ggxStadium')}</Link>
          <Link className={styles.newsletter} href="/ggx/support">{t('ggx:ggxSupportGGX')}</Link>
        </div>
      </main>

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
