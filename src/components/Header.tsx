import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleWhatsAppAction = () => {
    trackWhatsAppClick('menu superior orcamento', location.pathname);
  };

  const navLinks = [
    { label: 'Soluções', href: '/solucoes/' },
    { label: 'Segmentos', href: '/segmentos/' },
    { label: 'Serviços', href: '/servicos/' },
    { label: 'Cidades', href: '/cidades/' },
    { label: 'Orçamento', href: '/orcamento/' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand title, one line wordmark */}
        <Link 
          to="/" 
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-slate-800 transition-colors"
          title="Controle de Acesso Curitiba"
        >
          Controle de Acesso <span className="text-sky-600">Curitiba</span>
        </Link>

        {/* Zone 2: 4-5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map(link => {
            const isActive = location.pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive 
                    ? 'text-slate-950 font-semibold border-b-2 border-sky-600' 
                    : 'hover:text-slate-950'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={whatsappLink('orçamento pelo menu')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppAction}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-whatsapp hover:bg-whatsapp-dark rounded-md transition-all shadow-sm whitespace-nowrap shrink-0"
            title="Pedir orçamento direto no WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
            <span>Orçamento no WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-md transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="mb-3 pb-3 border-b border-slate-100">
            <span className="text-xs text-slate-500 font-medium">{siteConfig.brandSignature}</span>
          </div>
          <nav className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Início
            </Link>
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={whatsappLink('orçamento pelo menu mobile')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleWhatsAppAction();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-whatsapp hover:bg-whatsapp-dark rounded-md shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
              <span>Orçamento no WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Ligar: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
