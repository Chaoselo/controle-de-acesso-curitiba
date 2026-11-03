import { Link } from 'react-router-dom';
import { cidadesList } from '../content/cidades';
import { siteConfig } from '../config/site';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { ArrowRight, MessageSquare, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CitiesIndex() {
  const getFirstSentence = (text: string) => {
    const parts = text.split('. ');
    return parts[0].endsWith('.') ? parts[0] : `${parts[0]}.`;
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cidades Atendidas em Controle de Acesso na Grande Curitiba',
    description: 'Atendimento técnico presencial especializado em controle de acesso físico, catracas, cancelas veiculares, biometria e fechaduras eletromagnéticas em Curitiba e 10 municípios da Região Metropolitana.',
    numberOfItems: cidadesList.length,
    itemListElement: cidadesList.map((cidade, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `Controle de Acesso em ${cidade.name}`,
      url: `${siteConfig.domain}/cidades/${cidade.slug}/`
    }))
  };

  const handleWhatsAppAction = () => {
    trackWhatsAppClick('pagina catalogo cidades', '/cidades/');
  };

  return (
    <Layout whatsappContext="cidades atendidas na Região Metropolitana">
      <SEOHead
        title="Cidades Atendidas | Controle de Acesso Curitiba e RMC"
        description="Atendimento técnico de controle de acesso em Curitiba e 10 cidades da Região Metropolitana. Catracas, biometria, cancelas e fechaduras eletroímã."
        canonicalPath="/cidades/"
        schemaData={[itemListSchema]}
      />

      <Breadcrumbs
        items={[
          { name: 'Cidades Atendidas', url: `${siteConfig.domain}/cidades/` }
        ]}
      />

      <div className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <header className="mb-12 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-3">
              <span>Cobertura Técnica Regional</span>
              <span aria-hidden="true">·</span>
              <span>Curitiba e Região Metropolitana</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Cidades Atendidas em Controle de Acesso
            </h1>

            <div className="mt-6 text-base sm:text-lg text-slate-700 space-y-4">
              <p>
                A <strong>Controle de Acesso Curitiba</strong> presta atendimento técnico presencial na capital paranaense e em 10 municípios vizinhos da Região Metropolitana (RMC). Realizamos levantamentos de campo, dimensionamento de caixilharia, passagem de cabeamento estruturado e parametrização de equipamentos de portaria física ou remota.
              </p>
              <p>
                Com estoque local de sobressalentes e técnicos capacitados, atendemos desde condomínios residenciais verticais e horizontais até centros logísticos na BR-116, indústrias petroquímicas em Araucária, montadoras em São José dos Pinhais e cerâmicas em Campo Largo. Conheça abaixo as particularidades de atendimento em cada município.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink('orçamento pelo catálogo de cidades')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-6 py-3.5 rounded-lg shadow-sm transition"
              >
                <MessageSquare className="w-5 h-5 fill-white text-transparent" />
                <span>Solicitar Vistoria na Minha Cidade</span>
              </a>
              <span className="text-xs text-slate-500">
                Atendimento rápido para Curitiba e todos os 10 municípios da RMC
              </span>
            </div>
          </header>

          {/* Grid de Cidades */}
          <section aria-labelledby="cidades-grid-heading" className="mb-16">
            <h2 id="cidades-grid-heading" className="sr-only">
              Lista de Municípios Atendidos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cidadesList.map((cidade) => (
                <article
                  key={cidade.slug}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="aspect-video w-full bg-slate-100 overflow-hidden">
                    <img
                      src={cidade.image.src}
                      alt={cidade.image.alt}
                      width={cidade.image.width}
                      height={cidade.image.height}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{cidade.name} (PR)</span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 hover:text-sky-700 transition">
                        <Link to={`/cidades/${cidade.slug}/`}>
                          {cidade.name}
                        </Link>
                      </h2>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {getFirstSentence(cidade.directAnswer)}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/cidades/${cidade.slug}/`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 transition"
                      >
                        <span>Ver soluções em {cidade.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Seção Informativa de Logística Regional */}
          <section
            aria-labelledby="logistica-regional-heading"
            className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-7 h-7 text-sky-600 shrink-0" />
              <h2 id="logistica-regional-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
                Como Funciona o Atendimento na Região Metropolitana
              </h2>
            </div>
            <p className="text-slate-700 text-sm sm:text-base mb-8 max-w-3xl">
              Nossa operação centralizada em Curitiba permite agendamento organizado para visitas diagnósticas de orçamento e intervenções corretivas rápidas em qualquer um dos 10 municípios conurbados da Grande Curitiba.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Vistoria Técnica Presencial</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avaliamos no local os vãos de passagem, tipo de caixilharia, tubulação subterrânea existente e contingência energética para no-breaks.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Peças a Pronta Entrega</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Estoque de eletroímãs, cancelas, leitores biométricos faciais, fontes 12V e no-breaks senoidais para pronto atendimento na RMC.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Contratos Preventivos e Chamados</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Atendemos tanto por contrato mensal com SLA prioritário de emergência quanto por chamados avulsos para condomínios e indústrias.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Cobrimos Curitiba e 10 municípios da RMC com suporte técnico presencial.</span>
              </div>
              <a
                href={whatsappLink('dúvida sobre cobertura técnica na cidade')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
              >
                Consultar disponibilidade para seu endereço →
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
