import styles from '../styles/TopNavBar.module.scss'
import { useRouter } from 'next/router';

const LOCALE_LABELS = {
  ca: 'CA',
  en: 'EN',
  es: 'ES',
  zh: '中文',
};

export default function TopNavbar(props) {
  const router = useRouter();
  const locales = router.locales ?? [];

  const changeLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <nav className={styles.contenidorNav}>
      {'| '}
      {locales.map((locale, index) => (
        <span key={locale}>
          <button
            type="button"
            className={styles.botoIdioma}
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
