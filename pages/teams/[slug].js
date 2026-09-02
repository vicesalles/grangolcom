import { useRouter } from 'next/router';
import TeamHeader from '../../components/TeamHeader';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import TopNavbar from '../../components/TopNavbar';
import PageHeader from '../../components/PageHeader';
import generalStyles from '../../styles/General.module.scss';
import teamStyles from '../../styles/TeamPage.module.scss';
import Link from 'next/link';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getTeamBySlugAndLocale, getAllTeamsByLocale } from '../../lib/teams';
import { buildBreadcrumbJsonLd, getAbsoluteUrl, getLocalizedPath } from '../../lib/seo';
const { SUPPORTED_LOCALES } = require('../../lib/i18n');

export default function TeamPage({ team, locale }) {
  const router = useRouter();
  const { t, ready } = useTranslation(['common', 'seo', 'teams']);
  const teamName = team ? t(team.nameKey) : '';
  const teamUrl = getAbsoluteUrl(getLocalizedPath(`/teams/${team.slug}`, locale));
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('common:granGolTeams'), url: getAbsoluteUrl('/teams') },
    { name: teamName, url: teamUrl },
  ]);
  const teamJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: teamName,
    description: t('seo:teamDescription', { teamName }),
    url: teamUrl,
    sport: 'Football',
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!ready) {
    return <div><IoMdFootball fontSize={50} /></div>;
  }

  const mainPlayers = team.players.filter((p) => p.isMainPlayer);

  return (
    <div className={generalStyles.container}>
      <SeoHead
        title={t('seo:teamTitle', { teamName })}
        description={t('seo:teamDescription', { teamName })}
        path={`/teams/${team.slug}`}
        locale={locale}
        breadcrumbs={breadcrumbs}
        jsonLd={teamJsonLd}
      />
      <main className={generalStyles.main}>
        <TopNavbar />
        <PageHeader title={t('common:granGolTeams')} description={teamName} />

        <div className={teamStyles.teamPage}>
          <TeamHeader
            name={teamName}
            mainColor={team.colors.main}
            secondColor={team.colors.second}
            textColor={team.colors.text}
          />

          <div className={teamStyles.teamContent}>
            <section className={teamStyles.section}>
              <h2 className={teamStyles.sectionTitle}>{t('teams:aboutTeam')}</h2>
              <p>{t(team.descriptionKey)}</p>
            </section>

            {mainPlayers.length > 0 && (
              <section className={teamStyles.section}>
                <h2 className={teamStyles.sectionTitle}>{t('teams:mainPlayers')}</h2>
                <div className={teamStyles.playersGrid}>
                  {mainPlayers.map((p) => (
                    <div
                      key={p.id}
                      className={teamStyles.playerCard}
                      style={{ borderColor: team.colors.main }}
                    >
                      <div
                        className={teamStyles.playerModelPlaceholder}
                        style={{ borderColor: team.colors.main }}
                        aria-label={t('teams:modelComingSoon')}
                      >
                        <span>3D</span>
                      </div>
                      <div
                        className={teamStyles.playerNumber}
                        style={{ color: team.colors.main }}
                      >
                        {p.number}
                      </div>
                      <div className={teamStyles.playerName}>{p.name}</div>
                      {p.role && (
                        <div className={teamStyles.playerRole}>{t(p.roleKey)}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className={teamStyles.section}>
              <h2 className={teamStyles.sectionTitle}>{t('teams:teamModel')}</h2>
              <div className={teamStyles.placeholder3d}>
                {t('teams:modelComingSoon')}
              </div>
            </section>

            <div className={teamStyles.backLink}>
              <Link href="/teams">← {t('teams:backToTeams')}</Link>
            </div>
          </div>
        </div>
      </main>

      <div className={generalStyles.textMenu}>
        <Link href="/ggx">GGx</Link> | <Link href="/teams">{t('equips')}</Link>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  let paths = [];

  SUPPORTED_LOCALES.forEach((locale) => {
    const teams = getAllTeamsByLocale(locale);
    const localePaths = teams.map((team) => ({
      params: { slug: team.slug },
      locale,
    }));
    paths = [...paths, ...localePaths];
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const team = getTeamBySlugAndLocale(params.slug, locale);

  if (!team) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      team,
      locale,
      ...(await serverSideTranslations(locale, ['common', 'seo', 'teams'])),
    },
  };
}
