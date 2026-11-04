import { Link } from 'react-router-dom';
import { servicosList } from '../content/servicos';
import { siteConfig } from '../config/site';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { ArrowRight, MessageSquare, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ServicesIndex() {
  const getFirstSentence = (text: string) => {
    const parts = text.split('. ');
    return parts[0].endsWith('.') ? parts[0] : `${parts[0]}.`;
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Serviços Especializados em Controle de Acesso em Curitiba',
    description: 'Serviços técnicos de controle de acesso físico em Curitiba e Região Metropolitana: projetos e instalação, manutenção preventiva e corretiva e locação de equipamentos.',
    numberOfItems: servicosList.length,
    itemListElement: servicosList.map((servico, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: servico.title,
      url: `${siteConfig.domain}/servicos/${servico.slug}/`
    }))
  };

  const handleWhatsAppAction = () => {
    trackWhatsAppClick('pagina catalogo servicos', '/servicos/');
  };

  return (
    <Layout whatsappContext="serviços de controle de acesso">
      <SEOHead
        title="Serviços de Controle de Acesso em Curitiba | Manutenção"
        description="Conheça nossos serviços de controle de acesso em Curitiba e Região Metropolitana: projetos e instalação, manutenção preventiva e locação de equipamentos."
        canonicalPath="/servicos/"
        schemaData={[itemListSchema]}
      />

      <Breadcrumbs
        items={[
          { name: 'Serviços', url: `${siteConfig.domain}/servicos/` }
        ]}
      />

      <div className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <header className="mb-12 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-3">
              <span>Engenharia e Assistência Técnica</span>
              <span aria-hidden="true">·</span>
              <span>Curitiba e Região Metropolitana</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Serviços Especializados em Controle de Acesso em Curitiba
            </h1>

            <div className="mt-6 text-base sm:text-lg text-slate-700 space-y-4">
              <p>
                A segurança física e a confiabilidade de uma portaria ou recepção dependem diretamente da qualidade da engenharia de implantação e da regularidade da assistência técnica. Desde a elaboração de projetos elétricos e lançamento de cabeamento estruturado até contratos mensais de manutenção preventiva, nossa divisão técnica assegura que fechaduras, catracas, cancelas e controladores operem com máxima disponibilidade.
              </p>
              <p>
                Atendemos condomínios residenciais e comerciais, empresas corporativas, indústrias e instituições de ensino em Curitiba e em todos os municípios da Região Metropolitana. Conheça abaixo as três modalidades de serviços especializados e descubra como otimizar a segurança do seu patrimônio com suporte local ágil.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink('orçamento pelo catálogo de serviços')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-6 py-3.5 rounded-lg shadow-sm transition"
              >
                <MessageSquare className="w-5 h-5 fill-white text-transparent" />
                <span>Solicitar Atendimento Técnico no WhatsApp</span>
              </a>
              <span className="text-xs text-slate-500">
                Atendimento direto com especialistas técnicos em Curitiba
              </span>
            </div>
          </header>

          {/* Grid de Serviços */}
          <section aria-labelledby="servicos-grid-heading" className="mb-16">
            <h2 id="servicos-grid-heading" className="sr-only">
              Lista de Serviços Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicosList.map((servico) => (
                <article
                  key={servico.slug}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="aspect-video w-full bg-slate-100 overflow-hidden">
                    <img
                      src={servico.image.src}
                      alt={servico.image.alt}
                      width={servico.image.width}
                      height={servico.image.height}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 hover:text-sky-700 transition">
                        <Link to={`/servicos/${servico.slug}/`}>
                          {servico.title}
                        </Link>
                      </h2>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {getFirstSentence(servico.directAnswer)}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/servicos/${servico.slug}/`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 transition"
                      >
                        <span>Ver detalhes do serviço</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Seção Informativa de Garantia e Qualidade Técnica */}
          <section
            aria-labelledby="qualidade-tecnica-heading"
            className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-7 h-7 text-sky-600 shrink-0" />
              <h2 id="qualidade-tecnica-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
                Padrão de Qualidade em Cada Etapa do Atendimento
              </h2>
            </div>
            <p className="text-slate-700 text-sm sm:text-base mb-8 max-w-3xl">
              Nossa equipe técnica atua com procedimentos padronizados de segurança elétrica e mecânica, utilizando ferramental de precisão e componentes originais certificados para prolongar a vida útil de todo o sistema.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Diagnóstico Elétrico Preciso</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Medição de quedas de voltagem, corrente de retenção em eletroímãs e integridade de fontes com baterias flutuantes seladas.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Peças Originais e Compatíveis</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Estoque local em Curitiba com reposição imediata de solenoides, molas, microchaves, placas controladoras e sensores ópticos.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Implantação sem Paradas</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Metodologia de implantação por etapas que mantém a portaria do condomínio ou empresa plenamente protegida durante as obras.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Garantia formal de serviços e peças com atendimento presencial em Curitiba e RMC.</span>
              </div>
              <a
                href={whatsappLink('dúvida sobre serviços de controle de acesso')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
              >
                Conversar com técnico especializado →
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
