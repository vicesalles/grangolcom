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
    setConsentGiven(true);
    loadGTM();
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