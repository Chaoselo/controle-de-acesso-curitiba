import { Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { trackPhoneClick } from '../lib/analytics';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

interface MobileBottomBarProps {
  context?: string;
}

export function MobileBottomBar({ context = 'barra fixa mobile' }: MobileBottomBarProps) {
  const location = useLocation();

  const handleWhatsApp = () => {
    trackWhatsAppClick(context, location.pathname);
  };

  return (
    <aside
      aria-label="Ações de contato rápido"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-deep)]/95 backdrop-blur-md border-t border-[var(--border)] px-3 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={whatsappLink(context)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 h-11 px-3 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          onClick={() => trackPhoneClick(location.pathname)}
          className="flex items-center justify-center gap-2 h-11 px-3 bg-[var(--surface)] border border-[var(--border)] text-white rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
          <span>Ligar</span>
        </a>
      </div>
    </aside>
  );
}
