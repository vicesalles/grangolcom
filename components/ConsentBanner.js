import { useEffect, useState } from 'react';
import styles from '../styles/CookieConsentBanner.module.scss';
import { useTranslation } from 'react-i18next';
import { setConsent, loadGTM, checkConsent } from '../utils/consent'; // Import functions

function ConsentBanner() {

  const { t, ready } = useTranslation('cookies');
  const [consentGiven, setConsentGiven] = useState(checkConsent());
  const [isVisible, setIsVisible] = useState(consentGiven);

  const handleConsent = () => {
    setConsent(true);
  
    // Load GTM
    loadGTM();
  
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-WSSRG343P3`;
    script.async = true;
    document.head.appendChild(script);
  
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-WSSRG343P3');
  
    // Notify Google Analytics of consent
    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'analytics_storage': 'granted'
    });
  };

  const denyCookies = () => {
    setIsVisible(false);
  };

  if (consentGiven) return null;

  if (!ready) return null; // Wait until translations are ready
  
  return (<>{isVisible && (
    <div className={styles.banner}>
          <p>{t('cookiesText')}</p>
          <button onClick={handleConsent}>{t('accept')}</button>
          <button onClick={denyCookies}>{t('deny')}</button>
        </div>)}</>
  );
}

export default ConsentBanner;