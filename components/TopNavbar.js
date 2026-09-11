import styles from '../styles/TopNavBar.module.scss'
import { useRouter } from 'next/router';

const LOCALE_LABELS = {  
  en: 'EN',
  es: 'ES',
  zh: '中文',
  ca: 'CA',
  fr: 'FR',
};

export default function TopNavbar({ light, hero }) {
  const router = useRouter();
  const locales = router.locales ?? [];

  const changeLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  const navClass = [
    styles.contenidorNav,
    light && styles.light,
    hero && styles.hero,
  ].filter(Boolean).join(' ');

  const btnClass = [
    styles.botoIdioma,
    light && styles.botoIdiomaLight,
    hero && styles.botoIdiomaHero,
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClass}>
      {'| '}
      {locales.map((locale, index) => (
        <span key={locale}>
          <button
            type="button"
            className={btnClass}
            onClick={() => changeLanguage(locale)}
          >
            {LOCALE_LABELS[locale] ?? locale.toUpperCase()}
          </button>
          {' | '}
        </span>
      ))}
    </nav>
  );
}
