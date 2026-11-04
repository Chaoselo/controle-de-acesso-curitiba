import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Wrench, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  MessageSquare, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getServiceBySlug, servicosList } from '../content/servicos';
import { siteConfig } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { generateServiceSchema, generateFAQSchema } from '../lib/schema';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const servico = slug ? getServiceBySlug(slug) : undefined;

  if (!servico) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsAppAction = () => {
    trackWhatsAppClick(`pagina servico ${servico.slug}`, `/servicos/${servico.slug}/`);
  };

  const schemas = [
    generateServiceSchema({
      name: servico.title,
      description: servico.metaDescription,
      url: `${siteConfig.domain}/servicos/${servico.slug}/`,
      serviceType: 'Serviço de Segurança Eletrônica'
    }),
    generateFAQSchema(servico.faqs)
  ];

  return (
    <Layout whatsappContext={servico.whatsappContext}>
      <SEOHead
        title={servico.seoTitle}
        description={servico.metaDescription}
        canonicalPath={`/servicos/${servico.slug}/`}
        ogImage={servico.image.src}
        schemaData={schemas}
      />

      <Breadcrumbs
        items={[
          { name: 'Serviços', url: `${siteConfig.domain}/servicos/` },
          { name: servico.title, url: `${siteConfig.domain}/servicos/${servico.slug}/` }
        ]}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <header className="max-w-4xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
            <span>Serviço Técnico Especializado</span>
            <span aria-hidden="true">·</span>
            <span>Curitiba e Região</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {servico.title}
          </h1>

          <div className="p-5 bg-sky-50/70 border border-sky-100 rounded-lg text-slate-800 text-base leading-relaxed">
            <p className="font-normal">{servico.directAnswer}</p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(servico.whatsappContext)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppAction}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-semibold text-sm transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
              <span>Solicitar Atendimento para {servico.title}</span>
            </a>
          </div>
        </header>

        <div className="mb-12 rounded-lg overflow-hidden border border-slate-200 shadow-sm max-w-4xl">
          <img
            src={servico.image.src}
            alt={servico.image.alt}
            width={servico.image.width}
            height={servico.image.height}
            loading="lazy"
            className="w-full h-auto object-cover object-center max-h-[460px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* Escopo do Serviço */}
            <section aria-labelledby="escopo-heading" className="space-y-4">
              <h2 id="escopo-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>O que Está Incluso no Serviço</span>
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                {servico.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Seção Exclusiva de Sintomas Comuns */}
            {servico.diagnosticCommonIssues && (
              <section aria-labelledby="sintomas-heading" className="space-y-6">
                <div>
                  <h2 id="sintomas-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
                    <span>Guia de Sintomas Comuns: Causa Provável e Solução Técnica</span>
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Diagnósticos frequentes em portarias de Curitiba resolvidos com prontidão pela nossa equipe:
                  </p>
                </div>

                <div className="space-y-4">
                  {servico.diagnosticCommonIssues.map((issue, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-lg p-5 space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded shrink-0">
                          Sintoma
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          {issue.symptom}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm pl-0 sm:pl-16">
                        <div className="p-3.5 bg-slate-50 rounded border border-slate-100">
                          <span className="font-semibold text-slate-700 block mb-1">Causa provável:</span>
                          <span className="text-slate-600">{issue.cause}</span>
                        </div>
                        <div className="p-3.5 bg-emerald-50/50 rounded border border-emerald-100">
                          <span className="font-semibold text-emerald-800 block mb-1">Solução técnica:</span>
                          <span className="text-slate-700">{issue.fix}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Etapas do Processo */}
            <section aria-labelledby="processo-heading" className="space-y-4">
              <h2 id="processo-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Wrench className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Como Funciona o Atendimento Passo a Passo</span>
              </h2>
              <div className="space-y-3">
                {servico.processSteps.map((step) => (
                  <div key={step.step} className="p-5 bg-white border border-slate-200 rounded-md">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-slate-500">Etapa {step.step}</span>
                      <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-0 sm:pl-16">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-servico-heading" className="space-y-4 pt-6 border-t border-slate-200">
              <h2 id="faq-servico-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Dúvidas Frequentes sobre {servico.title}</span>
              </h2>
              <div className="space-y-3">
                {servico.faqs.map((faq, idx) => (
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
                Atendimento Técnico
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">
                Chame um especialista no WhatsApp
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tire suas dúvidas ou agende atendimento técnico em Curitiba e Região Metropolitana.
              </p>

              <a
                href={whatsappLink(servico.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="w-full flex items-center justify-center gap-2 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
                <span>Conversar no WhatsApp</span>
              </a>

              {/* Soluções Relacionadas */}
              {servico.relatedSolutions && servico.relatedSolutions.length > 0 && (
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Soluções Relacionadas
                  </span>
                  {servico.relatedSolutions.map(solSlug => (
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

            {/* Outros Serviços Relacionados */}
            {servico.relatedServices && servico.relatedServices.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Outros Serviços
                </h3>
                <ul className="space-y-2 text-sm">
                  {servico.relatedServices.map(relSlug => {
                    const relServ = getServiceBySlug(relSlug);
                    return (
                      <li key={relSlug}>
                        <Link
                          to={`/servicos/${relSlug}/`}
                          className="text-slate-600 hover:text-sky-600 font-medium block truncate"
                        >
                          {relServ ? relServ.title : relSlug.replace(/-/g, ' ')}
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
