import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCookieConsent, setCookieConsent } from '../lib/analytics';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      setShow(true);
    }

    const handleReopen = () => setShow(true);
    window.addEventListener('cac:reopen-cookie-banner', handleReopen);
    return () => {
      window.removeEventListener('cac:reopen-cookie-banner', handleReopen);
    };
  }, []);

  const handleAccept = () => {
    setCookieConsent('granted');
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    setShow(false);
  };

  const handleDecline = () => {
    setCookieConsent('denied');
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'denied' });
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Aviso de Privacidade e Cookies"
      className="fixed bottom-20 sm:bottom-5 left-4 right-4 sm:left-auto sm:right-5 sm:max-w-md z-50 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 shadow-2xl"
    >
      <div className="flex flex-col gap-3.5">
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          Utilizamos cookies e o Google Analytics para medir visitas e aprimorar nosso atendimento, em conformidade com a LGPD. Os dados estatísticos só são coletados com a sua autorização e você pode recusar a qualquer momento. Consulte nossa{' '}
          <Link to="/politica-de-privacidade/" className="text-[var(--accent)] underline font-medium">
            Política de Privacidade
          </Link>.
        </p>
        <div className="flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={handleDecline}
            className="px-3.5 py-2 text-xs text-[var(--text-muted)] hover:text-white border border-[var(--border)] rounded-xl font-medium transition-colors cursor-pointer"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-2 text-xs font-bold text-[#05060B] bg-[var(--accent)] hover:bg-[#38d0fc] rounded-xl transition-colors cursor-pointer"
          >
            Aceitar e continuar
          </button>
        </div>
      </div>
    </aside>
  );
}
