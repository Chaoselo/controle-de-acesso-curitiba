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
  }, []);

  const handleAccept = () => {
    setCookieConsent('granted');
    setShow(false);
  };

  const handleDecline = () => {
    setCookieConsent('denied');
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside aria-label="Aviso de Privacidade e Cookies" className="fixed bottom-16 sm:bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50 bg-white border border-slate-200 rounded-lg p-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex flex-col gap-3">
        <p className="text-xs text-slate-600 leading-relaxed">
          Utilizamos cookies para análise de navegação e aprimoramento de nossos serviços, em conformidade com a LGPD. Consulte nossa{' '}
          <Link to="/politica-de-privacidade/" className="text-sky-600 underline font-medium">
            Política de Privacidade
          </Link>.
        </p>
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={handleDecline}
            className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Apenas essenciais
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors shadow-sm"
          >
            Concordar e fechar
          </button>
        </div>
      </div>
    </aside>
  );
}
