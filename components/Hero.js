import styles from '../styles/Hero.module.scss';
import TopNavbar from './TopNavbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function Hero({ title, subtitle, image, menu, children }) {
  const router = useRouter();
  const { t } = useTranslation('common');

  const sectionClass = image
    ? `${styles.hero} ${styles.heroImage}`
    : styles.hero;

  const style = image ? { backgroundImage: `url(${image})` } : undefined;

  return (
    <>
      <section className={sectionClass} style={style}>
        <TopNavbar hero />
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          {children}
        </div>
      </section>
      {menu && (
        <nav className={styles.menu} aria-label="Main navigation">
          <Link href="/" locale={router.locale}>
            {t('home')}
          </Link>
        </nav>
      )}
    </>
  );
}
