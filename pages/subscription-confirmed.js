import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import TopNavbar from '../components/TopNavbar';

export default function Subscription() {
  const { t, ready } = useTranslation(['common', 'seo']);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ready || !isMounted) {
    return <div><IoMdFootball fontSize={12} /></div>;
  }

  return (
    <div className={styles.container}>
      <SeoHead
        title={t('seo:subscriptionConfirmedTitle')}
        description={t('seo:subscriptionConfirmedDescription')}
        path="/subscription-confirmed"
        noindex
      />
      <TopNavbar />

      <main className={styles.main}>
        <h1>{t('subThanks')}</h1>
        <h2>
          <FaHeart fontSize={100} color={'red'} /> <IoMdFootball fontSize={100} />
        </h2>
      </main>
      <div className={styles.textMenu}>
        <Link href="./ggx">GGx</Link> | <Link href="./stats">{t('footballStats')}</Link> | <Link href="./games">{t('footballGames')}</Link>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'cookies', 'seo'])),
    },
  };
}
