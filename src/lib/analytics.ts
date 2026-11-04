/**
 * Gerenciamento de eventos do Google Analytics 4 (GA4) com Consent Mode
 * O script principal do GA4 (ID G-051KZQQR0T) é carregado exclusivamente pelo index.html.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    [key: string]: unknown;
  }
}

export const CONSENT_KEY = 'cac_cookie_consent';

export function getCookieConsent(): 'granted' | 'denied' | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(CONSENT_KEY) as 'granted' | 'denied' | null;
  } catch (e) {
    return null;
  }
}

export function setCookieConsent(status: 'granted' | 'denied'): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONSENT_KEY, status);
  } catch (e) {}

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: status
    });
  }
}

/**
 * Dispara evento de analytics GA4 ao clicar em botões e links de WhatsApp
 */
export function trackWhatsAppClick(contexto: string, pagePath?: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      page_path: pagePath || window.location.pathname,
      link_context: contexto
    });
  }
}

/**
 * Dispara evento de analytics GA4 ao clicar em links de telefone (tel:)
 */
export function trackPhoneClick(pagePath?: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', {
      page_path: pagePath || window.location.pathname
    });
  }
}
