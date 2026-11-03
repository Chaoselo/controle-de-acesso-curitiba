import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, MessageSquare } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function NotFoundPage() {
  return (
    <Layout whatsappContext="erro 404 página não encontrada">
      <SEOHead
        title="Página Não Encontrada (404) | Controle de Acesso Curitiba"
        description="A página que você procura não foi encontrada ou foi movida. Acesse nossas soluções de controle de acesso em Curitiba."
        canonicalPath="/404/"
      />

      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
          Erro 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Página não encontrada
        </h1>

        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          O endereço acessado não existe, foi alterado ou está temporariamente indisponível. Utilize os atalhos abaixo para navegar:
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-petroleum hover:bg-slate-900 text-white rounded text-xs font-semibold shadow-sm transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Voltar à Página Inicial</span>
          </Link>

          <Link
            to="/solucoes/biometria/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 rounded text-xs font-semibold shadow-sm transition-colors"
          >
            <span>Ver Soluções de Acesso</span>
          </Link>

          <a
            href={whatsappLink('página 404')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('pagina 404', '/404/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded text-xs font-semibold shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        <div className="pt-12 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left text-xs">
          <div>
            <span className="font-bold text-slate-800 block mb-2">Soluções</span>
            <ul className="space-y-1.5 text-slate-600">
              <li><Link to="/solucoes/biometria/" className="hover:underline">Biometria</Link></li>
              <li><Link to="/solucoes/reconhecimento-facial/" className="hover:underline">Facial</Link></li>
              <li><Link to="/solucoes/catracas/" className="hover:underline">Catracas</Link></li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-slate-800 block mb-2">Segmentos</span>
            <ul className="space-y-1.5 text-slate-600">
              <li><Link to="/segmentos/condominios-residenciais/" className="hover:underline">Condomínios</Link></li>
              <li><Link to="/segmentos/empresas-e-escritorios/" className="hover:underline">Empresas</Link></li>
              <li><Link to="/segmentos/academias/" className="hover:underline">Academias</Link></li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-slate-800 block mb-2">Serviços</span>
            <ul className="space-y-1.5 text-slate-600">
              <li><Link to="/servicos/instalacao-e-projeto/" className="hover:underline">Instalação</Link></li>
              <li><Link to="/servicos/manutencao/" className="hover:underline">Manutenção</Link></li>
              <li><Link to="/servicos/locacao/" className="hover:underline">Locação</Link></li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-slate-800 block mb-2">Contato</span>
            <ul className="space-y-1.5 text-slate-600">
              <li><Link to="/orcamento/" className="hover:underline">Orçamento</Link></li>
              <li><Link to="/contato/" className="hover:underline">Fale Conosco</Link></li>
              <li><Link to="/sobre/" className="hover:underline">Sobre Nós</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
