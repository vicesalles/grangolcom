import styles from '../styles/Home.module.css';
import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import { IoMdFootball } from 'react-icons/io'; // Ensure this is imported
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { t, ready } = useTranslation('common');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure the component is mounted in the browser
    setIsMounted(true);
  }, []);

  // Wait until translations are ready and component is mounted
  if (!ready || !isMounted) {
    return <div><IoMdFootball fontSize={12} /></div>; // Shows loading state
  }

  return (
    <footer className={styles.footer}>
      <a className={styles.newsletter} href={t('shareNewsletter')} target='_blank' rel="noopener noreferrer">
        Newsletter
      </a>

      <a
        href="https://twitter.com/grangol11"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: 15 }}
      >
        <FaXTwitter fontSize={25} color={"white"} />
      </a>

      <a
        href="https://www.facebook.com/GranGol11"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: 15 }}
      >
        <FaFacebook fontSize={25} color={"white"} />
      </a>
    </footer>
  );
}

// Use getStaticProps to load the translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])), // Load translations
    },
  };
}
