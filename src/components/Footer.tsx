import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink, Clock, Lock } from 'lucide-react';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { trackPhoneClick } from '../lib/analytics';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleResetCookies = () => {
    try {
      localStorage.removeItem('cac_cookie_consent');
    } catch {
      // Ignore storage access errors
    }
    if (typeof window !== 'undefined') {
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
      }
      window.dispatchEvent(new CustomEvent('cac:reopen-cookie-banner'));
    }
  };

  return (
    <footer className="bg-[var(--bg-deep)] text-[var(--text-muted)] border-t border-[var(--border)] text-sm">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Coluna 1: Marca e Posicionamento */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block leading-tight">
                  Controle de Acesso <span className="text-[var(--accent)]">Curitiba</span>
                </span>
                <span className="text-[11px] text-[var(--text-soft)] font-semibold uppercase tracking-wider">
                  {siteConfig.brandSignature}
                </span>
              </div>
            </div>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              Instalação de controle de acesso, fechadura eletrônica e interfone/vídeo porteiro, além de conserto e manutenção de interfone, catraca e cancela para empresas, condomínios, indústrias, clínicas, escolas, academias, estacionamentos e portas de vidro.
            </p>

            <div className="pt-1 flex flex-col gap-2.5">
              <a
                href={whatsappLink('controle de acesso (rodapé do site)')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('rodape')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--whatsapp)] hover:underline"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {siteConfig.whatsappFormatted}</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => trackPhoneClick(typeof window !== 'undefined' ? window.location.pathname : undefined)}
                className="inline-flex items-center gap-2 text-sm text-white hover:text-[var(--accent)] transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Telefone: {siteConfig.phone}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-[var(--text-soft)] space-y-1.5">
              {isFieldFilled(siteConfig.openingHours) && (
                <p className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                  <span>Horário: {siteConfig.openingHours}</span>
                </p>
              )}
              {isFieldFilled(siteConfig.cnpj) && (
                <p>CNPJ: {siteConfig.cnpj}</p>
              )}
              {isFieldFilled(siteConfig.address.street) && (
                <p className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                  <span>{siteConfig.address.street}, {siteConfig.address.city} - {siteConfig.address.state}</span>
                </p>
              )}
            </div>

            {/* Links do grupo Intelsecsul */}
            <div className="pt-4 border-t border-[var(--border)] space-y-1.5 text-xs text-[var(--text-soft)]">
              <p>
                Uma unidade especializada da{' '}
                <a
                  href={siteConfig.parentCompany.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>{siteConfig.parentCompany.name}</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
              <p>
                Câmeras e monitoramento:{' '}
                <a
                  href={siteConfig.parentCompany.cftvSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>CFTV Curitiba</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>

          {/* Coluna 2: Soluções */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white tracking-[0.08em] uppercase">
              <Link to="/solucoes/" className="hover:text-[var(--accent)] transition-colors">
                Soluções
              </Link>
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li><Link to="/solucoes/biometria/" className="hover:text-white transition-colors">Controle Biométrico</Link></li>
              <li><Link to="/solucoes/reconhecimento-facial/" className="hover:text-white transition-colors">Reconhecimento Facial</Link></li>
              <li><Link to="/solucoes/fechadura-eletronica/" className="hover:text-white transition-colors">Fechadura Eletrônica</Link></li>
              <li><Link to="/solucoes/tag-veicular/" className="hover:text-white transition-colors">Tag Veicular UHF</Link></li>
              <li><Link to="/solucoes/cartao-e-tag-rfid/" className="hover:text-white transition-colors">Cartão e Tag RFID</Link></li>
              <li><Link to="/solucoes/catracas/" className="hover:text-white transition-colors">Catracas de Acesso</Link></li>
              <li><Link to="/solucoes/cancelas-e-acesso-veicular/" className="hover:text-white transition-colors">Cancelas e Acesso Veicular</Link></li>
              <li><Link to="/solucoes/fechaduras-eletromagneticas/" className="hover:text-white transition-colors">Fechaduras Eletromagnéticas</Link></li>
              <li><Link to="/solucoes/senha-e-teclado/" className="hover:text-white transition-colors">Senhas e Teclados</Link></li>
              <li><Link to="/solucoes/interfone-e-video-porteiro/" className="hover:text-white transition-colors">Interfone e Vídeo Porteiro</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Segmentos */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white tracking-[0.08em] uppercase">
              <Link to="/segmentos/" className="hover:text-[var(--accent)] transition-colors">
                Locais atendidos
              </Link>
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li><Link to="/segmentos/condominios-residenciais/" className="hover:text-white transition-colors">Condomínios Residenciais</Link></li>
              <li><Link to="/segmentos/condominios-comerciais/" className="hover:text-white transition-colors">Condomínios Comerciais</Link></li>
              <li><Link to="/segmentos/empresas-e-escritorios/" className="hover:text-white transition-colors">Empresas e Escritórios</Link></li>
              <li><Link to="/segmentos/industrias/" className="hover:text-white transition-colors">Indústrias</Link></li>
              <li><Link to="/segmentos/clinicas-e-hospitais/" className="hover:text-white transition-colors">Clínicas e Hospitais</Link></li>
              <li><Link to="/segmentos/escolas-e-universidades/" className="hover:text-white transition-colors">Escolas e Universidades</Link></li>
              <li><Link to="/segmentos/academias/" className="hover:text-white transition-colors">Academias</Link></li>
              <li><Link to="/segmentos/estacionamentos/" className="hover:text-white transition-colors">Estacionamentos</Link></li>
              <li><Link to="/segmentos/residencias/" className="hover:text-white transition-colors">Casas e Apartamentos (Intelsecsul)</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Serviços */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white tracking-[0.08em] uppercase">
              <Link to="/servicos/" className="hover:text-[var(--accent)] transition-colors">
                Serviços
              </Link>
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li><Link to="/servicos/instalacao-e-projeto/" className="hover:text-white transition-colors">Instalação e Projeto</Link></li>
              <li><Link to="/servicos/manutencao/" className="hover:text-white transition-colors">Manutenção de Acesso</Link></li>
              <li><Link to="/servicos/manutencao-de-catracas/" className="hover:text-white transition-colors">Manutenção de Catracas</Link></li>
              <li><Link to="/servicos/locacao/" className="hover:text-white transition-colors">Locação de Equipamentos</Link></li>
            </ul>
          </div>
        </div>

        {/* Cidades atendidas */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-bold text-white tracking-[0.08em] uppercase shrink-0">
              <Link to="/cidades/" className="hover:text-[var(--accent)] transition-colors">
                Curitiba e Região Metropolitana:
              </Link>
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--text-muted)]">
              {siteConfig.citiesServed.map((city) => (
                <Link
                  key={city.slug}
                  to={`/cidades/${city.slug}/`}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé institucional */}
        <div className="mt-10 pt-8 border-t border-[var(--border)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-[var(--text-soft)]">
          <p>
            © {currentYear} {siteConfig.name} · Intelsecsul Segurança Eletrônica.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/orcamento/" className="hover:text-white transition-colors">Orçamento</Link>
            <Link to="/sobre/" className="hover:text-white transition-colors">Sobre</Link>
            <Link to="/cases/" className="hover:text-white transition-colors">Cases</Link>
            <Link to="/blog/" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/faq/" className="hover:text-white transition-colors">FAQ</Link>
            <Link to="/glossario/" className="hover:text-white transition-colors">Glossário</Link>
            <Link to="/contato/" className="hover:text-white transition-colors">Contato</Link>
            <Link to="/politica-de-privacidade/" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <button
              type="button"
              onClick={handleResetCookies}
              className="hover:text-[var(--accent)] underline transition-colors cursor-pointer"
            >
              Preferências de cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
