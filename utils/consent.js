// utils/consent.js
export function checkConsent() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('consent') === 'true';
    }
    return false; // Default to false during SSR
  }
  
  export function setConsent(consent) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('consent', consent ? 'true' : 'false');
    }
  }
  
  export function loadGTM() {
    const gtmScript = document.createElement('script');
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=G-WSSRG343P3`;
    gtmScript.async = true;
    document.head.appendChild(gtmScript);
  }
  