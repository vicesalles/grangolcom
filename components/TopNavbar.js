import styles from '../styles/TopNavBar.module.scss'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function TopNavbar(props) {
    const router = useRouter();

  const changeLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <nav className={styles.contenidorNav}>      
      | <a className={styles.botoIdioma} onClick={() => changeLanguage('ca')}>CA</a> | <a className={styles.botoIdioma} onClick={() => changeLanguage('en')}>EN</a> | <a className={styles.botoIdioma} onClick={() => changeLanguage('es')}>ES</a> | 
     </nav>
  );
}