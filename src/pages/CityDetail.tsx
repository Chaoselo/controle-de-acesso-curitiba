import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  MapPin, 
  CheckCircle2, 
  Wrench, 
  HelpCircle, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getCityBySlug, cidadesList } from '../content/cidades';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { generateFAQSchema } from '../lib/schema';

export function CityDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const cidade = slug ? getCityBySlug(slug) : undefined;

  if (!cidade) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsAppAction = () => {
    trackWhatsAppClick(`pagina cidade ${cidade.slug}`, `/cidades/${cidade.slug}/`);
  };

  return (
    <Layout whatsappContext={cidade.whatsappContext}>
      <SEOHead
        title={cidade.seoTitle}
        description={cidade.metaDescription}
        canonicalPath={`/cidades/${cidade.slug}/`}
        ogImage={cidade.image.src}
        schemaData={generateFAQSchema(cidade.faqs)}
      />

      <Breadcrumbs
        items={[
          { name: 'Cidades Atendidas', url: `${siteConfig.domain}/cidades/` },
          { name: cidade.name, url: `${siteConfig.domain}/cidades/${cidade.slug}/` }
        ]}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <header className="max-w-4xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
            <span>Região Metropolitana de Curitiba</span>
            <span aria-hidden="true">·</span>
            <span>Atendimento Técnico Presencial</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {cidade.title}
          </h1>

          <div className="p-4 sm:p-5 bg-sky-50/70 border border-sky-100 rounded-lg text-slate-800 text-sm sm:text-base leading-relaxed">
            <p className="font-normal">{cidade.directAnswer}</p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(cidade.whatsappContext)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppAction}
              className="inline-flex items-center gap-2 px-5 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-semibold text-xs transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
              <span>Solicitar Vistoria Técnica em {cidade.name}</span>
            </a>
          </div>
        </header>

        <div className="mb-12 rounded-lg overflow-hidden border border-slate-200 shadow-sm max-w-4xl">
          <img
            src={cidade.image.src}
            alt={cidade.image.alt}
            width={cidade.image.width}
            height={cidade.image.height}
            loading="lazy"
            className="w-full h-auto object-cover max-h-[460px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Características Locais (omitido se contiver [[PREENCHER]]) */}
            {isFieldFilled(cidade.localCharacteristics) ? (
              <section aria-labelledby="perfil-local-heading" className="space-y-4">
                <h2 id="perfil-local-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <Building className="w-5 h-5 text-sky-600" aria-hidden="true" />
                  <span>Perfil Imobiliário e Demandas em {cidade.name}</span>
                </h2>
                <div className="p-5 bg-white border border-slate-200 rounded-md text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>{cidade.localCharacteristics}</p>
                </div>
              </section>
            ) : (
              <div className="p-4 bg-slate-100 border border-dashed border-slate-300 rounded text-xs text-slate-500">
                Informações detalhadas do perfil urbano de {cidade.name} em atualização pela equipe de engenharia local.
              </div>
            )}

            {/* Soluções Mais Procuradas na Região */}
            <section aria-labelledby="solucoes-procuradas-heading" className="space-y-4">
              <h2 id="solucoes-procuradas-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>Sistemas Mais Implantados em {cidade.name}</span>
              </h2>
              <div className="space-y-2.5">
                {cidade.popularSolutions.map((sol, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded-md flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-sky-600 shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm text-slate-800">{sol}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Logística de Atendimento */}
            <section aria-labelledby="logistica-heading" className="space-y-4">
              <h2 id="logistica-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Wrench className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Logística e Cobertura Técnica</span>
              </h2>
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-md text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>{cidade.serviceLogistics}</p>
              </div>
            </section>

            {/* FAQ da Cidade */}
            <section aria-labelledby="faq-cidade-heading" className="space-y-4 pt-6 border-t border-slate-200">
              <h2 id="faq-cidade-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Dúvidas Frequentes sobre Atendimento em {cidade.name}</span>
              </h2>
              <div className="space-y-3">
                {cidade.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white border border-slate-200 rounded-lg p-4 open:border-slate-300"
                  >
                    <summary className="font-semibold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">▼</span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 pt-2 border-t border-slate-100 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-petroleum text-white p-6 rounded-lg space-y-4 border border-slate-800 shadow-md sticky top-24">
              <span className="text-xs text-sky-400 font-semibold tracking-wider uppercase block">
                Agendamento Técnico
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">
                Precisa de vistoria técnica em {cidade.name}?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nossa equipe atende condomínios e empresas de {cidade.name} com agilidade para dimensionamento e orçamento.
              </p>

              <a
                href={whatsappLink(cidade.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="w-full flex items-center justify-center gap-2 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
                <span>Pedir Orçamento em {cidade.name}</span>
              </a>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <Link to="/solucoes/biometria/" className="hover:text-white transition-colors block">
                  → Leitores biométricos
                </Link>
                <Link to="/solucoes/catracas/" className="hover:text-white transition-colors block">
                  → Catracas para portarias
                </Link>
                <Link to="/segmentos/condominios-residenciais/" className="hover:text-white transition-colors block">
                  → Soluções para condomínios
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Outros Municípios da RMC
              </h3>
              <ul className="space-y-1.5 text-xs">
                {cidadesList
                  .filter(c => c.slug !== cidade.slug)
                  .map(c => (
                    <li key={c.slug}>
                      <Link
                        to={`/cidades/${c.slug}/`}
                        className="text-slate-600 hover:text-sky-600 font-medium block truncate"
                      >
                        Controle de Acesso em {c.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>

        </div>
      </article>
    </Layout>
  );
}
