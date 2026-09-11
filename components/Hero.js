import styles from '../styles/Hero.module.scss';
import TopNavbar from './TopNavbar';

export default function Hero({ title, subtitle, image, children }) {
  const sectionClass = image
    ? `${styles.hero} ${styles.heroImage}`
    : styles.hero;

  const style = image ? { backgroundImage: `url(${image})` } : undefined;

  return (
    <section className={sectionClass} style={style}>
      <TopNavbar hero />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        {children}
      </div>
    </section>
  );
}
