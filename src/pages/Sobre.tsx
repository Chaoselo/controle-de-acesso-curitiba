import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Award, Building, MessageSquare, ExternalLink } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function SobrePage() {
  return (
    <Layout whatsappContext="conhecer a empresa">
      <SEOHead
        title="Sobre Nós | Controle de Acesso Curitiba por Intelsecsul"
        description="Conheça a Controle de Acesso Curitiba, divisão especializada da Intelsecsul Segurança Eletrônica em Curitiba e Região Metropolitana. Peça seu orçamento!"
        canonicalPath="/sobre/"
      />

      <Breadcrumbs
        items={[
          { name: 'Sobre Nós', url: `${siteConfig.domain}/sobre/` }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <header className="space-y-4 mb-10 text-center">
          <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
            Institucional
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Controle de Acesso Curitiba
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            {siteConfig.brandSignature} — Engenharia de acesso físico e segurança preventiva.
          </p>
        </header>

        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Divisão Especializada em Acesso Físico
            </h2>
            <p>
              A <strong>Controle de Acesso Curitiba</strong> nasceu para atender com profundidade técnica e foco exclusivo as demandas crescentes de condomínios residenciais, centros empresariais e complexos industriais da Grande Curitiba por gestão segura de portarias e pessoas.
            </p>
            <p>
              Enquanto nossa empresa-mãe, a{' '}
              <a 
                href={siteConfig.parentCompany.site} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-600 font-semibold underline inline-flex items-center gap-1"
              >
                <span>{siteConfig.parentCompany.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              , atua em todo o escopo de segurança eletrônica patrimonial (câmeras de monitoramento CFTV, alarmes monitorados e cercas elétricas), esta unidade concentra foco integral e exclusivo em tecnologias de identificação: <strong>biometria digital, reconhecimento facial, catracas de pedestres, cancelas veiculares e fechaduras eletromagnéticas</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-sky-600" />
                <span>Nossa Missão Técnica</span>
              </h3>
              <p className="text-xs text-slate-600">
                Garantir que cada porta, catraca e cancela opere com máxima agilidade para quem tem permissão e segurança intransponível contra acessos não autorizados, com suporte técnico ágil e próximo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Compromisso com a Verdade</span>
              </h3>
              <p className="text-xs text-slate-600">
                Projetos dimensionados com honestidade sobre limitações técnicas e vantagens de cada equipamento, cumprimento integral das normas da LGPD e garantia de fornecimento.
              </p>
            </div>
          </div>

          {/* Seção com dados corporativos validados pela regra de não inventar fatos */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">
              Dados Institucionais
            </h3>
            <div className="space-y-1.5 text-xs text-slate-600">
              <p><strong>Marca:</strong> {siteConfig.name}</p>
              <p><strong>Vinculação:</strong> {siteConfig.brandSignature}</p>
              <p><strong>Telefone e WhatsApp:</strong> {siteConfig.phone}</p>
              <p><strong>Região de Atuação:</strong> Curitiba e 10 municípios da Região Metropolitana</p>
              {isFieldFilled(siteConfig.cnpj) && (
                <p><strong>CNPJ:</strong> {siteConfig.cnpj}</p>
              )}
              {isFieldFilled(siteConfig.experienceYears) && (
                <p><strong>Experiência de Mercado:</strong> {siteConfig.experienceYears}</p>
              )}
              {isFieldFilled(siteConfig.clientsCount) && (
                <p><strong>Clientes Atendidos:</strong> {siteConfig.clientsCount}</p>
              )}
              {isFieldFilled(siteConfig.certifications) && (
                <p><strong>Certificações Técnicas:</strong> {siteConfig.certifications}</p>
              )}
              {isFieldFilled(siteConfig.brandPartnerships) && (
                <p><strong>Marcas Homologadas:</strong> {siteConfig.brandPartnerships}</p>
              )}
            </div>
          </div>

          <div className="text-center pt-4">
            <a
              href={whatsappLink('contato através da página Sobre Nós')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('sobre nós', '/sobre/')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-semibold text-xs transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
              <span>Falar com Nossa Equipe no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
