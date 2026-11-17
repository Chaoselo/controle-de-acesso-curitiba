import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

interface WhatsAppFloatingProps {
  context?: string;
}

export function WhatsAppFloating({ context = 'botão flutuante do site' }: WhatsAppFloatingProps) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 400);
    };
    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleClick = () => {
    trackWhatsAppClick(context, location.pathname);
  };

  if (!visible) return null;

  return (
    <aside aria-label="Atendimento rápido" className="hidden sm:block fixed bottom-6 right-6 z-40">
      <a
        href={whatsappLink(context)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="w-14 h-14 flex items-center justify-center bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-full shadow-2xl transition-all duration-200 hover:scale-105"
        aria-label="Falar com especialista em controle de acesso no WhatsApp"
        title="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </aside>
  );
}
