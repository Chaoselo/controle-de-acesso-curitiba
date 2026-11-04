import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  HelpCircle, 
  MessageSquare, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getSegmentBySlug, segmentosList } from '../content/segmentos';
import { siteConfig } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { generateFAQSchema } from '../lib/schema';

export function SegmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const segmento = slug ? getSegmentBySlug(slug) : undefined;

  if (!segmento) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsAppAction = () => {
    trackWhatsAppClick(`pagina segmento ${segmento.slug}`, `/segmentos/${segmento.slug}/`);
  };

  return (
    <Layout whatsappContext={segmento.whatsappContext}>
      <SEOHead
        title={segmento.seoTitle}
        description={segmento.metaDescription}
        canonicalPath={`/segmentos/${segmento.slug}/`}
        ogImage={segmento.image.src}
        schemaData={generateFAQSchema(segmento.faqs)}
      />

      <Breadcrumbs
        items={[
          { name: 'Segmentos', url: `${siteConfig.domain}/segmentos/` },
          { name: segmento.title, url: `${siteConfig.domain}/segmentos/${segmento.slug}/` }
        ]}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <header className="max-w-4xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
            <span>Segmento Especializado</span>
            <span aria-hidden="true">·</span>
            <span>Curitiba e Região</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {segmento.title}
          </h1>

          <div className="p-5 bg-sky-50/70 border border-sky-100 rounded-lg text-slate-800 text-base leading-relaxed">
            <p className="font-normal">{segmento.directAnswer}</p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(segmento.whatsappContext)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppAction}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-semibold text-sm transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
              <span>Pedir Proposta para {segmento.title}</span>
            </a>
          </div>
        </header>

        <div className="mb-12 rounded-lg overflow-hidden border border-slate-200 shadow-sm max-w-4xl">
          <img
            src={segmento.image.src}
            alt={segmento.image.alt}
            width={segmento.image.width}
            height={segmento.image.height}
            loading="lazy"
            className="w-full h-auto object-cover object-center max-h-[460px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* Problemas Típicos do Segmento */}
            <section aria-labelledby="problemas-heading" className="space-y-4">
              <h2 id="problemas-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
                <span>Desafios e Vulnerabilidades Típicas</span>
              </h2>
              <div className="space-y-3">
                {segmento.typicalProblems.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0" aria-hidden="true" />
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{prob}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Soluções Ideais e Razões */}
            <section aria-labelledby="solucoes-ideais-heading" className="space-y-4">
              <h2 id="solucoes-ideais-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>Soluções Recomendadas e Justificativas Técnicas</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {segmento.idealSolutions.map((sol, idx) => (
                  <div key={idx} className="p-5 bg-white border border-slate-200 rounded-lg space-y-2">
                    <h3 className="text-base font-bold text-slate-900">
                      <Link to={`/solucoes/${sol.solutionSlug}/`} className="text-sky-700 hover:underline">
                        {sol.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {sol.reason}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Exemplo de Projeto Genérico */}
            <section aria-labelledby="arquitetura-heading" className="space-y-4">
              <h2 id="arquitetura-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Estrutura de um Projeto Típico de Implantação</span>
              </h2>
              <div className="space-y-3">
                {segmento.projectArchitecture.map((arch, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-md">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {arch}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ com 5 perguntas */}
            <section aria-labelledby="faq-segmento-heading" className="space-y-4 pt-6 border-t border-slate-200">
              <h2 id="faq-segmento-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Perguntas Frequentes sobre {segmento.title}</span>
              </h2>
              <div className="space-y-3">
                {segmento.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white border border-slate-200 rounded-lg p-5 open:border-slate-300"
                  >
                    <summary className="font-semibold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">▼</span>
                    </summary>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
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
                Projeto Sob Medida
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">
                Receba um levantamento técnico para seu imóvel
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Avaliamos o fluxo diário e as melhores opções de clausura e leitores sem compromisso.
              </p>

              <a
                href={whatsappLink(segmento.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="w-full flex items-center justify-center gap-2 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
                <span>Conversar no WhatsApp</span>
              </a>

              {/* Soluções Relacionadas do Conteúdo */}
              {segmento.relatedSolutions && segmento.relatedSolutions.length > 0 && (
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Soluções Indicadas
                  </span>
                  {segmento.relatedSolutions.map(solSlug => (
                    <Link
                      key={solSlug}
                      to={`/solucoes/${solSlug}/`}
                      className="text-xs text-sky-300 hover:text-white transition-colors block truncate"
                    >
                      → {solSlug.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Segmentos Relacionados do Conteúdo */}
            {segmento.relatedSegments && segmento.relatedSegments.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Segmentos Relacionados
                </h3>
                <ul className="space-y-2 text-sm">
                  {segmento.relatedSegments.map(relSlug => {
                    const relSeg = getSegmentBySlug(relSlug);
                    return (
                      <li key={relSlug}>
                        <Link
                          to={`/segmentos/${relSlug}/`}
                          className="text-slate-600 hover:text-sky-600 font-medium block truncate"
                        >
                          {relSeg ? relSeg.title : relSlug.replace(/-/g, ' ')}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </aside>

        </div>
      </article>
    </Layout>
  );
}
