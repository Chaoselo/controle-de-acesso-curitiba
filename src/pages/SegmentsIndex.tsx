import { Link } from 'react-router-dom';
import { segmentosList } from '../content/segmentos';
import { siteConfig } from '../config/site';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { ArrowRight, MessageSquare, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SegmentsIndex() {
  const getFirstSentence = (text: string) => {
    const parts = text.split('. ');
    return parts[0].endsWith('.') ? parts[0] : `${parts[0]}.`;
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Segmentos Atendidos em Controle de Acesso em Curitiba',
    description: 'Projetos e instalações de controle de acesso físico especializados para condomínios residenciais e comerciais, empresas, indústrias, clínicas, escolas, academias e residências em Curitiba e Região Metropolitana.',
    numberOfItems: segmentosList.length,
    itemListElement: segmentosList.map((segmento, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: segmento.title,
      url: `${siteConfig.domain}/segmentos/${segmento.slug}/`
    }))
  };

  const handleWhatsAppAction = () => {
    trackWhatsAppClick('pagina catalogo segmentos', '/segmentos/');
  };

  return (
    <Layout whatsappContext="segmentos de controle de acesso">
      <SEOHead
        title="Segmentos de Controle de Acesso em Curitiba e Região"
        description="Conheça os segmentos atendidos em controle de acesso em Curitiba e RMC. Soluções para condomínios, empresas, indústrias, escolas, clínicas e academias."
        canonicalPath="/segmentos/"
        schemaData={[itemListSchema]}
      />

      <Breadcrumbs
        items={[
          { name: 'Segmentos', url: `${siteConfig.domain}/segmentos/` }
        ]}
      />

      <div className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <header className="mb-12 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-3">
              <span>Projetos Setoriais Especializados</span>
              <span aria-hidden="true">·</span>
              <span>Curitiba e Região Metropolitana</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Segmentos Atendidos em Controle de Acesso em Curitiba
            </h1>

            <div className="mt-6 text-base sm:text-lg text-slate-700 space-y-4">
              <p>
                Cada tipo de empreendimento possui dinâmicas operacionais, volumes de fluxo e requisitos regulatórios únicos. Condomínios residenciais demandam agilidade nas garagens e clausuras seguras para entregadores; edifícios comerciais necessitam de triagem rápida de visitantes em catracas; indústrias exigem torniquetes pesados para trocas de turno; clínicas e escolas requerem absoluto rigor sanitário e conformidade estrita com a LGPD.
              </p>
              <p>
                A Controle de Acesso Curitiba desenvolve projetos personalizados de segurança física e eletrônica, adaptando fechaduras, catracas, cancelas e softwares de gestão à realidade estrutural e orçamentária do seu imóvel. Explore abaixo os segmentos atendidos e conheça a arquitetura de projeto recomendada para o seu setor.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink('orçamento pelo catálogo de segmentos')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-6 py-3.5 rounded-lg shadow-sm transition"
              >
                <MessageSquare className="w-5 h-5 fill-white text-transparent" />
                <span>Solicitar Avaliação Técnica no WhatsApp</span>
              </a>
              <span className="text-xs text-slate-500">
                Atendimento consultivo direto com equipe técnica em Curitiba
              </span>
            </div>
          </header>

          {/* Grid de Segmentos */}
          <section aria-labelledby="segmentos-grid-heading" className="mb-16">
            <h2 id="segmentos-grid-heading" className="sr-only">
              Lista de Segmentos Especializados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {segmentosList.map((segmento) => (
                <article
                  key={segmento.slug}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="aspect-video w-full bg-slate-100 overflow-hidden">
                    <img
                      src={segmento.image.src}
                      alt={segmento.image.alt}
                      width={segmento.image.width}
                      height={segmento.image.height}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 hover:text-sky-700 transition">
                        <Link to={`/segmentos/${segmento.slug}/`}>
                          {segmento.title}
                        </Link>
                      </h2>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {getFirstSentence(segmento.directAnswer)}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/segmentos/${segmento.slug}/`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 transition"
                      >
                        <span>Ver soluções para o segmento</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Seção Informativa de Diferenciais por Segmento */}
          <section
            aria-labelledby="diferenciais-segmentos-heading"
            className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-7 h-7 text-sky-600 shrink-0" />
              <h2 id="diferenciais-segmentos-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
                Engenharia de Acesso Adaptada à Sua Atividade
              </h2>
            </div>
            <p className="text-slate-700 text-sm sm:text-base mb-8 max-w-3xl">
              Não aplicamos pacotes genéricos. Nossos engenheiros e técnicos avaliam os horários de maior afluência, as rotas de emergência exigidas pelo Corpo de Bombeiros, o perfil de usuários e a necessidade de contingência energética contra quedas de luz em Curitiba.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Portarias Físicas e Remotas</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipamentos com protocolos abertos (Wiegand, OSDP e IP) totalmente compatíveis com as principais empresas de portaria virtual de Curitiba.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Conformidade com a LGPD</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Armazenamento de biometria em templates matemáticos hash criptografados, sem armazenamento desprotegido de fotografias ou dados de saúde.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Acessibilidade Universal</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dimensionamento de portas, eclusas e passagens laterais de catracas em estrita observância à norma ABNT NBR 9050 para pessoas com deficiência.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Atendimento presencial em Curitiba e todos os municípios vizinhos da Região Metropolitana.</span>
              </div>
              <a
                href={whatsappLink('dúvida sobre segmento específico')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
              >
                Falar com consultor técnico →
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
