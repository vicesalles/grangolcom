import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from '../styles/CookieConsentBanner.module.scss';
import { GoogleTagManager } from '@next/third-parties/google';
import { useTranslation } from 'react-i18next';

export default function CookieConsentBanner() {
  const { t, ready } = useTranslation('cookies');
  const [isVisible, setIsVisible] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      setConsentGiven(true); // If consent already given, load GTM
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setIsVisible(false);
    setConsentGiven(true);
  };

  const denyCookies = () => {
    setIsVisible(false);
  };

  if (!ready) return null; // Wait until translations are ready

  return (
    <>
      {isVisible && (
        <div className={styles.banner}>
          <p>{t('cookiesText')}</p>
          <button onClick={acceptCookies}>{t('accept')}</button>
          <button onClick={denyCookies}>{t('deny')}</button>
        </div>
      )}
      {consentGiven && <GoogleTagManager gtmId="G-WSSRG343P3" />}
    </>
  );
}
