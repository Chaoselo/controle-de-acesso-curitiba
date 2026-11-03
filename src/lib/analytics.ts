/**
 * Gerenciamento opcional de GA4 com consentimento de cookies
 */

const GA_ID = typeof import.meta !== 'undefined' ? (import.meta.env?.VITE_GA_ID as string | undefined) : undefined;
const CONSENT_KEY = 'cac_cookie_consent';

export function getCookieConsent(): 'granted' | 'denied' | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CONSENT_KEY) as 'granted' | 'denied' | null;
}

export function setCookieConsent(status: 'granted' | 'denied'): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_KEY, status);
  if (status === 'granted') {
    initGA4();
  }
}

export function initGA4(): void {
  if (typeof window === 'undefined' || !GA_ID) return;
  if (getCookieConsent() !== 'granted') return;

  // Evita injeção duplicada
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  const win = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
  win.dataLayer = win.dataLayer || [];
  function gtag(...args: unknown[]) {
    win.dataLayer.push(args);
  }
  win.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_ID, {
    anonymize_ip: true,
  });
}
