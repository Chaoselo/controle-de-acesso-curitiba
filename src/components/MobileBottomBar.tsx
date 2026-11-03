import { Phone, MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

interface MobileBottomBarProps {
  context?: string;
}

export function MobileBottomBar({ context = 'barra fixa mobile' }: MobileBottomBarProps) {
  const location = useLocation();

  const handleWhatsApp = () => {
    trackWhatsAppClick(context, location.pathname);
  };

  return (
    <aside aria-label="Ações de contato rápido" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-2 gap-2 h-11">
        <a
          href={whatsappLink(context)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-1.5 px-2 py-2 bg-whatsapp hover:bg-whatsapp-dark text-white rounded font-semibold text-xs transition-colors shadow-sm whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 px-2 py-2 bg-petroleum hover:bg-slate-900 text-white rounded font-semibold text-xs transition-colors shadow-sm whitespace-nowrap"
        >
          <Phone className="w-4 h-4 text-sky-400" aria-hidden="true" />
          <span>Ligar</span>
        </a>
      </div>
    </aside>
  );
}
