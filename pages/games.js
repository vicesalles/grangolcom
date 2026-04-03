import Link from 'next/link'
import styles from '../styles/General.module.scss'

import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import SeoHead from '../components/SeoHead';
import TopNavbar from '../components/TopNavbar';

import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../lib/seo';

export default function Games() {
  const { t, ready } = useTranslation(['common', 'games', 'seo', 'ggx']);
  const [isMounted, setIsMounted] = useState(false);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('common:footballGames'), url: getAbsoluteUrl('/games') },
  ]);

  useEffect(() => {
    // This ensures that the component is mounted in the browser
    setIsMounted(true);
  }, []);

  // Wait until translations are ready
  if (!ready || !isMounted) {
    return <div><IoMdFootball fontSize={12} /></div>;
  }


  return (
    <div className={styles.container}>
      <SeoHead
        title={t('seo:gamesTitle')}
        description={t('seo:gamesDescription')}
        path="/games"
        breadcrumbs={breadcrumbs}
      />
      <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('footballGames')}
        description={t('playingToPlayFootball')}/>
    
        <div>          
          <div className={styles.article}>          
            <p>{t('games:intro')}</p>
            <p>{t('games:jocsTaula')}</p>
            <p>{t('games:xapes')}</p>
            <p>{t('games:tancament')}</p>

            <Link href="/ggx"><h4 className={styles.newsletter}>{t('games:playGGx')}</h4></Link>
                        
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/ProvesPilotaFitxa-htReZt7c4tsYJcobpNRo5EteENdv01.jpg"
                    width={1200}
                    height={402}
                    alt="{t('ggx:ggxFitxaPilota')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFitxaPilota')}</p>
          </div>
        </div>
        
      </main>
      <div className={styles.textMenu}><Link href="/">{t('home')}</Link> | <Link href="/ggx">GGx</Link> | <Link href="/stats">{t('footballStats')}</Link></div>
      
      <Footer/>
    </div>
  )

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'games', 'ggx', 'seo'])),
    },
  };
}
