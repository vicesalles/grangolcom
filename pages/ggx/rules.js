import Link from 'next/link'
import styles from '../../styles/General.module.scss'

import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import SeoHead from '../../components/SeoHead';
import TopNavbar from '../../components/TopNavbar';

import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import components from '../../components/MDXComponents';
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../../lib/seo';

export default function GGX({ mdxSource }) {
  const { t, ready } = useTranslation(['common', 'ggx', 'seo']);
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

  // Wait until translations are ready
  if (!ready) {
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
          <MDXRemote {...mdxSource} components={components} />
          <div className={styles.containerImatge}>
              <a className={styles.botoCTA} href={t('ggx:ggxNormesPaperURL')} target='_blank'>{t('ggx:ggxNormesPaperText')}</a>
          </div>
            
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
  const { getGgxRules } = await import('../../lib/mdx.server');
  const mdxSource = await getGgxRules(locale);

  return {
    props: {
      mdxSource,
      ...(await serverSideTranslations(locale, ['common', 'ggx', 'seo'])),
    },
  };
}
