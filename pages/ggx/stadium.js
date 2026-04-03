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
  const { t, ready } = useTranslation(['common', 'ggx', 'stadium', 'seo']);
  const [isMounted, setIsMounted] = useState(false);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('ggx:ggxTitol'), url: getAbsoluteUrl('/ggx') },
    { name: t('stadium:titolStadium'), url: getAbsoluteUrl('/ggx/stadium') },
  ]);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": t('stadium:titolStadium'),
    "description": t('seo:ggxStadiumDescription'),
    "image": "https://grangol.com/img/articles/GGxFons.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Gran Gol"
    },
    "genre": "Joc de futbol",
    "url": "https://www.grangol.com/ggx/stadium"
  };

  useEffect(() => {
    // This ensures that the component is mounted in the browser
    setIsMounted(true);
  }, []);

  // Wait until translations are ready
  if (!ready || !isMounted) {
    return <div>
     <SeoHead
       title={t('seo:ggxStadiumTitle')}
       description={t('seo:ggxStadiumDescription')}
       path="/ggx/stadium"
       jsonLd={jsonLdData}
       breadcrumbs={breadcrumbs}
     />
     <IoMdFootball fontSize={12} /></div>;
  }
 

  return (
    <div className={styles.container}>
     <SeoHead
       title={t('seo:ggxStadiumTitle')}
       description={t('seo:ggxStadiumDescription')}
       path="/ggx/stadium"
       jsonLd={jsonLdData}
       breadcrumbs={breadcrumbs}
     />
      <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('stadium:titolStadium')}
        description={t('stadium:subtitolStadium')}/>
    
        <div>          
          <div className={styles.article}>    
          <h3>{t('stadium:titolArticleStadium')}</h3>
          <p>{t('stadium:introStadium')}</p>        
          
          <p><Link className={styles.newsletter} href="https://makerworld.com/en/models/1032252" target='_blank' rel="noopener">{t('stadium:printStadium')}</Link></p> 
                    
          
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/porteriaV3-EliIXPnTqyaotmbtsYfx9Wklv9fePr.jpg"
                    width={1200}
                    height={400}
                    alt="{t('stadium:peuFotoPorteriaV3')}"
                />
                <p className={styles.peuFoto}>{t('stadium:peuFotoPorteriaV3')}</p>
          </div>
          <p>{t('stadium:partsStadium')}</p>

          <h3>{t('stadium:tanquesTitol')}</h3>
          <p>{t('stadium:tanquesIntro')}</p>  

          <h3>{t('stadium:porteriesTitol')}</h3>
          <p>{t('stadium:porteriesIntro')}</p>  
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries01-w5RjO7eZkWqmmCFVN32dcwWrlzx0SY.jpg"
                    width={1200}
                    height={904}
                    objectFit={'contain'}
                    alt="{t('stadium:porteries01')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries01')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries02-XMpzBrmTwVNLvibboVdjPhRoByjHq7.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries02')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries02')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries03-j74ll7C5vYWcoDVR3Utov2uwgO84GJ.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries03')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries03')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries04-Xvk3NDiESCMEAyvfANcZ5jzQ3Qyjze.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries04')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries04')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries05-q2UKo28vGWJHHDkcTXv6BLRssSNM2B.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries05')}"
                />
                <p className={styles.peuFoto}>{t('stadium:porteries05')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/porteries06-kNv1hKZMl0OAuj7W026WUKwB5VaIWN.jpg"
                    width={1200}
                    height={904}
                    alt="{t('stadium:porteries06')}"
                />
          <p className={styles.peuFoto}>{t('stadium:porteries06')}</p>      
          </div>
          <div className={styles.containerImatge}>
          <video width={1200} src='https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/ggx_stadium_0-kOW2KEIqAm5SiEWMUi2wtfMjoEXfRl.mp4' autoPlay loop muted playsinline/>
          <p className={styles.peuFoto}>{t('stadium:loopVideo')}</p>
          </div>
      
        </div>
        </div>
        <div className={styles.botoneraDestacada}>
        <Link className={styles.newsletter} href="/ggx/">{t('ggx:queEsGGx')}</Link><Link className={styles.newsletter} href="/ggx/rules">{t('ggx:ggxNormesTitol')}</Link> <Link className={styles.newsletter} href="/ggx/teams">{t('ggxTeams')}</Link> <Link className={styles.newsletter} href="/ggx/support">{t('ggx:ggxSupportGGX')}</Link>
        </div>

      </main>
      
      <Footer/>
    </div>
  )

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'ggx', 'stadium', 'seo'])),
    },
  };
}
