import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/General.module.scss'

import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import TopNavbar from '../components/TopNavbar';

import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GGX() {
  const { t, ready } = useTranslation(['common', 'ggx']);
  const [isMounted, setIsMounted] = useState(false);

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
      <Head>
        <title>Gran Gol: {t('ggx:ggxTitol')}</title>
        <link rel="icon" href="/futbol.ico?v=2"/>
        <meta property="og:title" content="Gran Gol"/>
        <meta property="og:description" content={t('footballGames')}/>
        <meta property="og:image" content="https://grangol.com/grangol.jpg"/>
        <meta property="og:url" content="https://grangol.com"></meta>

        <meta name="twitter:title" content="Gran Gol"/>
        <meta name="twitter:description" content={t('ggx:ggxTitol')}/>
        <meta name="twitter:image" content="https://grangol.com/grangol.jpg"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>      
      <main className={styles.main}>
      <TopNavbar/>
        <PageHeader 
        title={t('ggx:ggxTitol')}
        description={t('ggx:ggxSubTitol')}/>
    
        <div>          
          <div className={styles.article}>    
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/xapesVelles.jpg"
                    width={1200}
                    height={400}
                    alt="{t('ggx:ggxFotoXapesVelles')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFotoXapesVelles')}</p>
          </div> 
            <p>{t('ggx:ggxIntro')}</p>
            <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/porteriaZero.jpg"
                    width={1200}
                    height={400}
                    alt="{t('ggx:ggxpeuFotoPorteria')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxpeuFotoPorteria')}</p>
          </div>
          <h3>{t('ggx:ggxNormesTitol')}</h3>
          <p>{t('ggx:ggxNormesPartit')}</p>
          <p><ul>
            <li>{t('ggx:ggxNormesPartitGols')}</li>
            <li>{t('ggx:ggxNormesPartitTemps')}</li>
            </ul></p>
            <p>{t('ggx:ggxNormes')}:</p>
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
                </ol></p>
                <div className={styles.containerImatge}>
              <a className={styles.botoCTA} href='https://grangol.ck.page/08b0016369' target='_blank'>Descarrega't les normes en paper</a>
                </div>
            
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/areaJoc.jpg"
                    width={1200}
                    height={612}
                    alt="{t('ggx:ggxFotoArea')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFotoArea')}</p>
          </div>
          <div className={styles.containerImatge}>
          <Image
                    src="/img/articles/areaGol.jpg"
                    width={1200}
                    height={612}
                    alt="{t('ggx:ggxFotoArea')}"
                />
                <p className={styles.peuFoto}>{t('ggx:ggxFotoArea')}</p>
          </div>
        </div>
        
      </main>
      <div className={styles.textMenu}><Link href="/">{t('home')}</Link> | <Link href="/stats">{t('footballStats')}</Link> | <Link href="/books">{t('footballBooks')}</Link></div>
      
      <Footer/>
    </div>
  )

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'ggx'])),
    },
  };
}