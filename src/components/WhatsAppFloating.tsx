import { MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

interface WhatsAppFloatingProps {
  context?: string;
}

export function WhatsAppFloating({ context = 'botão flutuante do site' }: WhatsAppFloatingProps) {
  const location = useLocation();

  const handleClick = () => {
    trackWhatsAppClick(context, location.pathname);
  };

  return (
    <aside aria-label="Atendimento rápido" className="hidden sm:block fixed bottom-6 right-6 z-40">
      <a
        href={whatsappLink(context)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group flex items-center gap-2.5 px-4 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        aria-label="Falar com especialista em controle de acesso no WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white text-transparent" aria-hidden="true" />
        <span className="text-xs font-semibold whitespace-nowrap tracking-wide">
          Orçamento no WhatsApp
        </span>
      </a>
    </aside>
  );
}
