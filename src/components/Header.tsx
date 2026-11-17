import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Lock,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { trackPhoneClick } from '../lib/analytics';
import { solucoesList } from '../content/solucoes';
import { servicosList } from '../content/servicos';
import { segmentosList } from '../content/segmentos';
import { getCatalogIcon } from './ui/SolutionIcon';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

type DropdownKey = 'solucoes' | 'servicos' | 'locais' | null;

const SERVICE_SHORT_TITLES: Record<string, string> = {
  'instalacao-e-projeto': 'Instalação e Projeto',
  'manutencao': 'Manutenção de Sistemas',
  'manutencao-de-catracas': 'Manutenção de Catracas',
  'locacao': 'Locação de Equipamentos',
};

const SOLUTION_SHORT_TITLES: Record<string, string> = {
  'biometria': 'Controle Biométrico',
  'reconhecimento-facial': 'Reconhecimento Facial',
  'cartao-e-tag-rfid': 'Cartão e Tag RFID',
  'senha-e-teclado': 'Senha e Teclado',
  'catracas': 'Catracas de Acesso',
  'cancelas-e-acesso-veicular': 'Cancelas e Acesso Veicular',
  'fechaduras-eletromagneticas': 'Fechaduras Eletromagnéticas',
  'interfone-e-video-porteiro': 'Interfone e Vídeo Porteiro',
  'fechadura-eletronica': 'Fechadura Eletrônica',
  'tag-veicular': 'Tag Veicular UHF',
};

const SEGMENT_SHORT_TITLES: Record<string, string> = {
  'condominios-residenciais': 'Condomínios Residenciais',
  'condominios-comerciais': 'Condomínios Comerciais',
  'empresas-e-escritorios': 'Empresas e Escritórios',
  'industrias': 'Indústrias e Galpões',
  'clinicas-e-hospitais': 'Clínicas e Hospitais',
  'escolas-e-universidades': 'Escolas e Faculdades',
  'academias': 'Academias',
  'estacionamentos': 'Estacionamentos',
  'residencias': 'Residencial (via Intelsecsul)',
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileAccordion, setMobileAccordion] = useState<DropdownKey>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleWhatsAppAction = (ctx: string) => {
    trackWhatsAppClick(ctx, location.pathname);
  };

  const toggleMobileAccordion = (key: DropdownKey) => {
    setMobileAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]">
      {/* Barra principal de navegação */}
      <div ref={navRef} className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Marca em 2 linhas */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group shrink-0"
          title="Controle de Acesso Curitiba"
        >
          <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] group-hover:border-[var(--accent)]/60 flex items-center justify-center transition-colors shrink-0">
            <Lock className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <span className="block text-sm sm:text-base font-bold tracking-tight text-white whitespace-nowrap">
              Controle de Acesso <span className="text-[var(--accent)]">Curitiba</span>
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.1em] uppercase text-[var(--text-soft)] whitespace-nowrap">
              Unidade Intelsecsul
            </span>
          </div>
        </Link>

        {/* Navegação Desktop com dropdowns */}
        <nav aria-label="Menu principal" className="hidden lg:flex items-center gap-1">
          {/* Soluções dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('solucoes')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'solucoes' ? null : 'solucoes')}
              aria-expanded={openDropdown === 'solucoes'}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                location.pathname.startsWith('/solucoes')
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface)]/60'
              }`}
            >
              <span>Soluções</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'solucoes' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {openDropdown === 'solucoes' && (
              <div className="absolute left-0 top-full pt-2 w-80 z-50">
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-2 shadow-2xl">
                  <div className="grid grid-cols-1 gap-0.5">
                    {solucoesList.map((sol) => {
                      const Icon = getCatalogIcon(sol.slug);
                      return (
                        <Link
                          key={sol.slug}
                          to={`/solucoes/${sol.slug}/`}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-[var(--text-muted)] hover:text-white hover:bg-[var(--bg)] transition-colors"
                        >
                          <Icon className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                          <span>{SOLUTION_SHORT_TITLES[sol.slug] || sol.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-1.5 pt-1.5 border-t border-[var(--border)]">
                    <Link
                      to="/solucoes/"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[var(--accent)] hover:bg-[var(--bg)] transition-colors"
                    >
                      Ver todas as soluções ›
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Serviços dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('servicos')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'servicos' ? null : 'servicos')}
              aria-expanded={openDropdown === 'servicos'}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                location.pathname.startsWith('/servicos')
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface)]/60'
              }`}
            >
              <span>Serviços</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'servicos' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {openDropdown === 'servicos' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50">
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-2 shadow-2xl">
                  <div className="grid grid-cols-1 gap-0.5">
                    {servicosList.map((srv) => {
                      const Icon = getCatalogIcon(srv.slug);
                      return (
                        <Link
                          key={srv.slug}
                          to={`/servicos/${srv.slug}/`}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-[var(--text-muted)] hover:text-white hover:bg-[var(--bg)] transition-colors"
                        >
                          <Icon className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                          <span>{SERVICE_SHORT_TITLES[srv.slug] || srv.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-1.5 pt-1.5 border-t border-[var(--border)]">
                    <Link
                      to="/servicos/"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[var(--accent)] hover:bg-[var(--bg)] transition-colors"
                    >
                      Ver todos os serviços ›
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Locais / Segmentos dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('locais')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'locais' ? null : 'locais')}
              aria-expanded={openDropdown === 'locais'}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                location.pathname.startsWith('/segmentos')
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface)]/60'
              }`}
            >
              <span>Locais</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'locais' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {openDropdown === 'locais' && (
              <div className="absolute left-0 top-full pt-2 w-80 z-50">
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-2 shadow-2xl">
                  <div className="grid grid-cols-1 gap-0.5">
                    {segmentosList.map((seg) => {
                      const Icon = getCatalogIcon(seg.slug);
                      return (
                        <Link
                          key={seg.slug}
                          to={`/segmentos/${seg.slug}/`}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-[var(--text-muted)] hover:text-white hover:bg-[var(--bg)] transition-colors"
                        >
                          <Icon className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                          <span>{SEGMENT_SHORT_TITLES[seg.slug] || seg.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-1.5 pt-1.5 border-t border-[var(--border)]">
                    <Link
                      to="/segmentos/"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[var(--accent)] hover:bg-[var(--bg)] transition-colors"
                    >
                      Ver todos os segmentos ›
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/cidades/"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              location.pathname.startsWith('/cidades')
                ? 'text-[var(--accent)]'
                : 'text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface)]/60'
            }`}
          >
            Cidades
          </Link>

          <Link
            to="/blog/"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              location.pathname.startsWith('/blog')
                ? 'text-[var(--accent)]'
                : 'text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface)]/60'
            }`}
          >
            Blog
          </Link>

          <Link
            to="/contato/"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              location.pathname.startsWith('/contato')
                ? 'text-[var(--accent)]'
                : 'text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface)]/60'
            }`}
          >
            Contato
          </Link>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            onClick={() => trackPhoneClick(location.pathname)}
            className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-[var(--text-muted)] hover:text-white transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" aria-hidden="true" />
            <span>{siteConfig.phone}</span>
          </a>
          <Link
            to="/orcamento/"
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-[#05060B] bg-[var(--accent)] hover:bg-[#38d0fc] rounded-xl transition-colors whitespace-nowrap"
          >
            Solicitar orçamento
          </Link>
        </div>

        {/* Botões Mobile (WhatsApp + Hambúrguer 40x40) */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <a
            href={whatsappLink('controle de acesso (menu mobile)')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppAction('menu mobile whatsapp')}
            className="inline-flex items-center gap-1.5 px-3 h-10 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl text-xs font-semibold whitespace-nowrap transition-colors"
            aria-label="Solicitar orçamento no WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 bg-[#131C2B] border border-[var(--border)] rounded-xl flex items-center justify-center text-white hover:border-[var(--accent)]/60 transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--bg-deep)] px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-2xl">
          <nav aria-label="Menu mobile" className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-base font-medium text-white hover:bg-[var(--surface)] rounded-xl"
            >
              Início
            </Link>

            {/* Accordion Soluções */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion('solucoes')}
                aria-expanded={mobileAccordion === 'solucoes'}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-white hover:bg-[var(--surface)] rounded-xl"
              >
                <span>Soluções</span>
                <ChevronDown className={`w-4 h-4 text-[var(--accent)] transition-transform ${mobileAccordion === 'solucoes' ? 'rotate-180' : ''}`} />
              </button>
              {mobileAccordion === 'solucoes' && (
                <div className="pl-3 pb-2 space-y-1">
                  {solucoesList.map((sol) => (
                    <Link
                      key={sol.slug}
                      to={`/solucoes/${sol.slug}/`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[var(--text-muted)] hover:text-white rounded-lg hover:bg-[var(--surface)]"
                    >
                      {SOLUTION_SHORT_TITLES[sol.slug] || sol.title}
                    </Link>
                  ))}
                  <Link
                    to="/solucoes/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-semibold text-[var(--accent)]"
                  >
                    Ver todas as soluções ›
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion Serviços */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion('servicos')}
                aria-expanded={mobileAccordion === 'servicos'}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-white hover:bg-[var(--surface)] rounded-xl"
              >
                <span>Serviços</span>
                <ChevronDown className={`w-4 h-4 text-[var(--accent)] transition-transform ${mobileAccordion === 'servicos' ? 'rotate-180' : ''}`} />
              </button>
              {mobileAccordion === 'servicos' && (
                <div className="pl-3 pb-2 space-y-1">
                  {servicosList.map((srv) => (
                    <Link
                      key={srv.slug}
                      to={`/servicos/${srv.slug}/`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[var(--text-muted)] hover:text-white rounded-lg hover:bg-[var(--surface)]"
                    >
                      {SERVICE_SHORT_TITLES[srv.slug] || srv.title}
                    </Link>
                  ))}
                  <Link
                    to="/servicos/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-semibold text-[var(--accent)]"
                  >
                    Ver todos os serviços ›
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion Locais */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion('locais')}
                aria-expanded={mobileAccordion === 'locais'}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-white hover:bg-[var(--surface)] rounded-xl"
              >
                <span>Locais atendidos</span>
                <ChevronDown className={`w-4 h-4 text-[var(--accent)] transition-transform ${mobileAccordion === 'locais' ? 'rotate-180' : ''}`} />
              </button>
              {mobileAccordion === 'locais' && (
                <div className="pl-3 pb-2 space-y-1">
                  {segmentosList.map((seg) => (
                    <Link
                      key={seg.slug}
                      to={`/segmentos/${seg.slug}/`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[var(--text-muted)] hover:text-white rounded-lg hover:bg-[var(--surface)]"
                    >
                      {SEGMENT_SHORT_TITLES[seg.slug] || seg.title}
                    </Link>
                  ))}
                  <Link
                    to="/segmentos/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-semibold text-[var(--accent)]"
                  >
                    Ver todos os segmentos ›
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/cidades/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-base font-medium text-white hover:bg-[var(--surface)] rounded-xl"
            >
              Cidades
            </Link>
            <Link
              to="/blog/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-base font-medium text-white hover:bg-[var(--surface)] rounded-xl"
            >
              Blog
            </Link>
            <Link
              to="/sobre/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-base font-medium text-white hover:bg-[var(--surface)] rounded-xl"
            >
              Sobre a empresa
            </Link>
            <Link
              to="/contato/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-base font-medium text-white hover:bg-[var(--surface)] rounded-xl"
            >
              Contato
            </Link>
          </nav>

          <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-col gap-2.5">
            <Link
              to="/orcamento/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full h-12 text-sm font-bold text-[#05060B] bg-[var(--accent)] hover:bg-[#38d0fc] rounded-xl transition-colors"
            >
              Solicitar orçamento online
            </Link>
            <a
              href={whatsappLink('controle de acesso (menu mobile)')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleWhatsAppAction('menu mobile gaveta');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full h-12 text-sm font-semibold text-white bg-[var(--whatsapp)] hover:bg-whatsapp-dark rounded-xl"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Orçamento no WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              onClick={() => trackPhoneClick(location.pathname)}
              className="flex items-center justify-center gap-2 w-full h-12 text-sm font-semibold text-white bg-[var(--surface)] border border-[var(--border)] rounded-xl"
            >
              <Phone className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
              <span>Ligar: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
