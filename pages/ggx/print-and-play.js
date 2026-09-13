import Link from 'next/link';
import styles from '../../styles/General.module.scss';

import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import SeoHead from '../../components/SeoHead';

import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../../lib/seo';
import YouTubeEmbed from '../../components/YouTubeEmbed';

export default function GGXPrintAndPlay() {
  const { t, ready } = useTranslation(['common', 'ggx', 'seo','ggx_pnp']);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('ggx:ggxTitol'), url: getAbsoluteUrl('/ggx') },
    { name: t('ggx_pnp:ggxpnp_title'), url: getAbsoluteUrl('/ggx/print-and-play') },
  ]);

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t('seo:ggxPnpTitle'),
    description: t('seo:ggxPnpDescription'),
    image: 'https://www.grangol.com/img/articles/GGxNit.JPG',
    url: 'https://www.grangol.com/ggx/print-and-play',
  };

  if (!ready) {
    return (
      <div>
        <SeoHead
          title={t('seo:ggxPnpTitle')}
          description={t('seo:ggxPnpDescription')}
          path="/ggx/print-and-play"
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
        title={t('seo:ggxPnpTitle')}
        description={t('seo:ggxPnpDescription')}
        path="/ggx/print-and-play"
        jsonLd={jsonLdData}
        breadcrumbs={breadcrumbs}
      />
      <main className={styles.main}>
        <Hero menu = {true}
          title={t('ggx_pnp:ggxpnp_title')}
          subtitle={t('ggx_pnp:ggxpnp_subtitle')}
          image="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/GGxNit.JPG"
        />

        <div className={styles.articleTeams}>
          <h2>{t('ggx_pnp:ggxpnp_assembly_title')}</h2>
          <p>{t('ggx_pnp:ggxpnp_assembly_text')}</p>
          <div className={styles.containerImatge}>
          <video width={1200} alt={t('ggx_pnp:ggxpnp_assembly_media_alt')} src='https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Stadium/ggx_stadium_0-kOW2KEIqAm5SiEWMUi2wtfMjoEXfRl.mp4' autoPlay loop muted playsinline/>
          </div>

          <h2>{t('ggx_pnp:ggxpnp_what_title')}</h2>
          <p>{t('ggx_pnp:ggxpnp_what_text')}</p>
          <div className={styles.containerImatge}>
            <Image
              src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/GranGolGGx.JPG"
              width={1200}
              height={900}
              alt={t('ggx_pnp:ggxpnp_pitch_media_alt')}
            />
            <p className={styles.peuFoto}>
                     {t('ggx_pnp:ggxpnp_pitch_caption')} 
            </p>
          </div>

          <h2>{t('ggx_pnp:ggxpnp_why_title')}</h2>
          <p>{t('ggx_pnp:ggxpnp_why_text')}</p>
          <div className={styles.containerImatge}>
            <Image
              src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/GranGolGGxFootball.JPG"
              width={1200}
              height={900}
              alt={t('ggx_pnp:ggxpnp_moments_media_alt')}
            />
            <p className={styles.peuFoto}>
                     {t('ggx_pnp:ggxpnp_moments_title')} 
            </p>
          </div>          

          <YouTubeEmbed videoId="XpXVMy8aels" />

          <h2>{t('ggx_pnp:ggxpnp_print_title')}</h2>
          <p>{t('ggx_pnp:ggxpnp_print_text')}</p>
          <div className={styles.containerImatge}>
            <a className={styles.ctaPrimary} href="https://makerworld.com/en/models/1032252-ggx-the-table-football-soccer-game" target='_blank' rel="noopener noreferrer">{t('ggx_pnp:ggxpnp_print_cta')}</a>
          </div>


          <h2>{t('ggx_pnp:ggxpnp_teams_title')}</h2>
          <p>{t('ggx_pnp:ggxpnp_teams_text')}</p>
          <div className={styles.containerImatge}>
            <Image
              src="https://gafrmmszazh98sh9.public.blob.vercel-storage.com/Teams/GGx_Teams_Stack_1-8dWTklVu8BUch2CfP7oDSqHM4fNp5Q.jpg"
              width={1200}
              height={612}
              alt={t('ggx_pnp:ggxpnp_teams_media_alt')}
            />           
          </div>
          <div className={styles.containerImatge}>
            <a className={styles.ctaPrimary} href="https://makerworld.com/en/collections/4767775-ggx-teams" target='_blank' rel="noopener noreferrer">{t('ggx_pnp:ggxpnp_teams_cta')}</a>
          </div>

          <h3>{t('ggx_pnp:ggxpnp_grangol_eyebrow')}</h3>
          <h2>{t('ggx_pnp:ggxpnp_grangol_title')}</h2>
          <p>{t('ggx_pnp:ggxpnp_grangol_text')}</p>
          
        </div>

        <div className={styles.botoneraDestacada}>
          <Link className={styles.newsletter} href="/">{t('home')}</Link>
          <Link className={styles.newsletter} href="/ggx/">{t('ggx:queEsGGx')}</Link>
          <Link className={styles.newsletter} href="/ggx/rules">{t('ggx:ggxNormesTitol')}</Link>
          <Link className={styles.newsletter} href="/ggx/stadium">{t('ggx:ggxStadium')}</Link>
          <Link className={styles.newsletter} href="/ggx/teams">{t('ggxTeams')}</Link>
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
      ...(await serverSideTranslations(locale, ['common', 'ggx', 'seo','ggx_pnp'])),
    },
  };
}
