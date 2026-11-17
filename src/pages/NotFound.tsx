import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function NotFoundPage() {
  return (
    <Layout whatsappContext="erro 404 página não encontrada">
      <SEOHead
        title="Página Não Encontrada (404) | Controle de Acesso Curitiba"
        description="A página que você procura não foi encontrada ou foi movida. Acesse nossas soluções de controle de acesso em Curitiba."
        canonicalPath="/404/"
      />

      <section className="bg-[var(--bg)] py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-[var(--accent)] bg-[var(--surface)] border border-[var(--border)] px-3.5 py-1.5 rounded-xl uppercase tracking-[0.08em] inline-block">
            Erro 404
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Página não encontrada
          </h1>

          <p className="text-base text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
            O endereço acessado não existe, foi movido ou está temporariamente indisponível. Utilize os atalhos abaixo para continuar navegando:
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-6 bg-[var(--accent)] hover:bg-[#38d0fc] text-[#05060B] rounded-xl text-sm font-bold transition-colors"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Voltar ao início</span>
            </Link>

            <Link
              to="/solucoes/"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-6 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/60 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              <span>Ver soluções</span>
            </Link>

            <a
              href={whatsappLink('página 404')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('pagina 404', '/404/')}
              className="inline-flex items-center justify-center gap-2 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl text-sm font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          <div className="pt-12 border-t border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 gap-6 text-left text-sm">
            <div>
              <span className="font-bold text-white block mb-2.5">Soluções</span>
              <ul className="space-y-2 text-[var(--text-muted)]">
                <li><Link to="/solucoes/biometria/" className="hover:text-[var(--accent)]">Biometria</Link></li>
                <li><Link to="/solucoes/reconhecimento-facial/" className="hover:text-[var(--accent)]">Facial</Link></li>
                <li><Link to="/solucoes/catracas/" className="hover:text-[var(--accent)]">Catracas</Link></li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-white block mb-2.5">Locais</span>
              <ul className="space-y-2 text-[var(--text-muted)]">
                <li><Link to="/segmentos/condominios-residenciais/" className="hover:text-[var(--accent)]">Condomínios</Link></li>
                <li><Link to="/segmentos/empresas-e-escritorios/" className="hover:text-[var(--accent)]">Empresas</Link></li>
                <li><Link to="/segmentos/academias/" className="hover:text-[var(--accent)]">Academias</Link></li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-white block mb-2.5">Serviços</span>
              <ul className="space-y-2 text-[var(--text-muted)]">
                <li><Link to="/servicos/instalacao-e-projeto/" className="hover:text-[var(--accent)]">Instalação</Link></li>
                <li><Link to="/servicos/manutencao/" className="hover:text-[var(--accent)]">Manutenção</Link></li>
                <li><Link to="/servicos/locacao/" className="hover:text-[var(--accent)]">Locação</Link></li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-white block mb-2.5">Contato</span>
              <ul className="space-y-2 text-[var(--text-muted)]">
                <li><Link to="/orcamento/" className="hover:text-[var(--accent)]">Orçamento</Link></li>
                <li><Link to="/contato/" className="hover:text-[var(--accent)]">Fale Conosco</Link></li>
                <li><Link to="/sobre/" className="hover:text-[var(--accent)]">Sobre</Link></li>
              </ul>
            </div>
          </div>

          <ComplianceNotices showLgpd className="text-left" />
        </div>
      </section>
    </Layout>
  );
}
