import Link from 'next/link'
import styles from '../../styles/General.module.scss'

import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import SeoHead from '../../components/SeoHead';
import TopNavbar from '../../components/TopNavbar';

import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../../lib/seo';

export default function GGX() {
  const { t, ready } = useTranslation(['common', 'ggx', 'seo']);
  const [isMounted, setIsMounted] = useState(false);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('ggx:ggxTitol'), url: getAbsoluteUrl('/ggx') },
    { name: t('ggx:ggxNormesTitol'), url: getAbsoluteUrl('/ggx/rules') },
  ]);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": t('ggx:ggxNormesTitol'),
    "description": t('seo:ggxRulesDescription'),
    "image": "https://grangol.com/img/articles/GGxFons.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Gran Gol"
    },
    "genre": "Joc de futbol",
    "url": "https://www.grangol.com/ggx/rules"
  };

  useEffect(() => {
    // This ensures that the component is mounted in the browser
    setIsMounted(true);
  }, []);

  // Wait until translations are ready
  if (!ready || !isMounted) {
    return <div>
      <SeoHead
        title={t('seo:ggxRulesTitle')}
        description={t('seo:ggxRulesDescription')}
        path="/ggx/rules"
        jsonLd={jsonLdData}
        breadcrumbs={breadcrumbs}
      />
      <IoMdFootball fontSize={12} /></div>;
  }
 

  return (
    <div className={styles.container}>
      <SeoHead
        title={t('seo:ggxRulesTitle')}
        description={t('seo:ggxRulesDescription')}
        path="/ggx/rules"
        jsonLd={jsonLdData}
        breadcrumbs={breadcrumbs}
      />
      <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('ggx:ggxNormesTitol')}
        description={t('ggx:ggxSubTitol')}/>
    
        <div>          
          <div className={styles.article}>  
<div className={styles.botoneraDestacada}>
          <Link className={styles.newsletter} href="/ggx/">{t('ggx:queEsGGx')}</Link> <Link className={styles.newsletter} href="/ggx/stadium">{t('ggx:ggxStadium')}</Link> <Link className={styles.newsletter} href="/ggx/teams">{t('ggxTeams')}</Link> <Link className={styles.newsletter} href="/ggx/support">{t('ggx:ggxSupportGGX')}</Link>
          </div>
          <h3>{t('ggx:ggxNormesSubTitol')}</h3>
          <p>{t('ggx:ggxNormesPartit')}</p>
          <p><ul>
            <li>{t('ggx:ggxNormesPartitGols')}</li>
            <li>{t('ggx:ggxNormesPartitTemps')}</li>
            </ul></p>
            <p>{t('ggx:ggxNormesIntro')}</p>
            <p><ol>
                <li>{t('ggx:ggxNormes1')}</li>
                <li>{t('ggx:ggxNormes2')}</li>
                <li>{t('ggx:ggxNormes3')}</li>
                <li>{t('ggx:ggxNormes4')}</li>
                <li>{t('ggx:ggxNormes5')}</li>
                <li>{t('ggx:ggxNormes6')}</li>
                <li>{t('ggx:ggxNormes7')}</li>
                <li>{t('ggx:ggxNormes8')}</li>
                <li>{t('ggx:ggxNormes9')}</li>
                <li>{t('ggx:ggxNormes10')}</li>
                <li>{t('ggx:ggxNormes11')}</li>
                <li>{t('ggx:ggxNormes12')}</li>
                <li>{t('ggx:ggxNormes13')}</li>
                <li>{t('ggx:ggxNormes14')}</li>
                <li>{t('ggx:ggxNormes15')}</li>
                <li>{t('ggx:ggxNormes16')}</li>
                </ol></p>
                <div className={styles.containerImatge}>
              <a className={styles.botoCTA} href={t('ggx:ggxNormesPaperURL')} target='_blank'>{t('ggx:ggxNormesPaperText')}</a>
                </div>
            
          </div>

          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Teams/4-fbcCQP587AOkm8mWNjM4R0beekXZly.JPG"
                    width={1200}
                    height={900}
                    alt="{t('ggx:ggxFotoForaDeJoc')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFotoForaDeJoc')}</p>
          </div>


          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/areaJoc.jpg"
                    width={1200}
                    height={612}
                    alt="{t('ggx:ggxFotoAreaPenal')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFotoAreaPenal')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/areaGol.jpg"
                    width={1200}
                    height={798}
                    alt="{t('ggx:ggxFotoAreaGol')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFotoAreaGol')}</p>
          </div>
        </div>

        <div className={styles.botoneraDestacada}>
          <Link className={styles.newsletter} href="/ggx/">{t('ggx:queEsGGx')}</Link> <Link className={styles.newsletter} href="/ggx/stadium">{t('ggx:ggxStadium')}</Link> <Link className={styles.newsletter} href="/ggx/teams">{t('ggxTeams')}</Link> <Link className={styles.newsletter} href="/ggx/support">{t('ggx:ggxSupportGGX')}</Link>
          </div>

      </main>
      
      <Footer/>
    </div>
  )

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'ggx', 'seo'])),
    },
  };
}
