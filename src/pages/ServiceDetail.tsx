import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Wrench,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqAccordion } from '../components/ui/FaqAccordion';
import { PhotoCard } from '../components/ui/PhotoCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { getCatalogIcon } from '../components/ui/SolutionIcon';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
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
      serviceType: 'Serviço de Segurança Eletrônica',
    }),
    generateFAQSchema(servico.faqs),
  ];

  const otherServices = servicosList.filter((s) => s.slug !== servico.slug);

  return (
    <Layout whatsappContext={servico.whatsappContext}>
      <SEOHead
        title={servico.seoTitle}
        description={servico.metaDescription}
        canonicalPath={`/servicos/${servico.slug}/`}
        ogImage={siteConfig.defaultOgImage}
        schemaData={schemas}
      />

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Serviços', url: `${siteConfig.domain}/servicos/` },
              { name: servico.title, url: `${siteConfig.domain}/servicos/${servico.slug}/` },
            ]}
          />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
                Serviço Técnico Especializado · Curitiba e Região
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {servico.title}
              </h1>

              <div className="p-5 bg-[var(--surface)]/90 border border-[var(--border)] rounded-2xl text-base text-[var(--text-muted)] leading-relaxed">
                <p>{servico.directAnswer}</p>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappLink(servico.whatsappContext)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppAction}
                  className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Solicitar atendimento no WhatsApp</span>
                </a>

                <Link
                  to="/servicos/"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-5 bg-[var(--surface)] hover:bg-[#172231] text-white border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-xl font-semibold text-sm sm:text-base transition-colors"
                >
                  <span>Ver todos os serviços</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-deep)] shadow-2xl">
                <img
                  src={servico.image.src}
                  alt={servico.image.alt}
                  width={1200}
                  height={675}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            {/* Escopo do Serviço */}
            <section aria-labelledby="escopo-heading" className="space-y-4">
              <h2 id="escopo-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>O que está incluso no serviço</span>
              </h2>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                <ul className="space-y-3 text-base text-[var(--text-muted)]">
                  {servico.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Instalações por produto (com links) */}
            {servico.productInstallations && servico.productInstallations.length > 0 && (
              <section aria-labelledby="instalacoes-produto-heading" className="space-y-4">
                <h2 id="instalacoes-produto-heading" className="text-2xl font-bold text-white tracking-tight">
                  Instalações por tipo de equipamento e solução
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {servico.productInstallations.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="p-5 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/60 rounded-2xl space-y-1.5 transition-colors block group"
                    >
                      <h3 className="text-base font-bold text-[var(--accent)] group-hover:underline flex items-center justify-between gap-2">
                        <span>{item.label}</span>
                        <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Guia de Sintomas */}
            {servico.diagnosticCommonIssues && (
              <section aria-labelledby="sintomas-heading" className="space-y-5">
                <div>
                  <h2 id="sintomas-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" aria-hidden="true" />
                    <span>Guia de sintomas comuns e diagnóstico técnico</span>
                  </h2>
                  <p className="text-base text-[var(--text-muted)] mt-2">
                    Principais ocorrências analisadas pela nossa equipe em portarias e empresas de Curitiba:
                  </p>
                </div>

                <div className="space-y-4">
                  {servico.diagnosticCommonIssues.map((issue, idx) => (
                    <div key={idx} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 space-y-4">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg shrink-0">
                          Sintoma
                        </span>
                        <h3 className="text-base font-bold text-white">{issue.symptom}</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm sm:text-base">
                        <div className="p-4 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                          <span className="font-semibold text-white block mb-1 text-xs uppercase tracking-wider">Causa provável</span>
                          <span className="text-[var(--text-muted)]">{issue.cause}</span>
                        </div>
                        <div className="p-4 bg-[var(--bg)] rounded-xl border border-[var(--accent)]/30">
                          <span className="font-semibold text-[var(--accent)] block mb-1 text-xs uppercase tracking-wider">Solução técnica</span>
                          <span className="text-[var(--text-muted)]">{issue.fix}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Etapas do Processo */}
            <section aria-labelledby="processo-heading" className="space-y-4">
              <h2 id="processo-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Wrench className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Como funciona o atendimento passo a passo</span>
              </h2>
              <div className="space-y-3">
                {servico.processSteps.map((step) => (
                  <div key={step.step} className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-[var(--accent)] bg-[var(--bg)] border border-[var(--border)] px-2.5 py-1 rounded-lg">
                        Etapa {step.step}
                      </span>
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-servico-heading" className="space-y-5 pt-6 border-t border-[var(--border)]">
              <h2 id="faq-servico-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Dúvidas frequentes sobre {servico.title}</span>
              </h2>
              <FaqAccordion items={servico.faqs} />
            </section>

            <ComplianceNotices
              text={JSON.stringify([
                servico,
                ...otherServices.map((s) => `${s.title} ${s.directAnswer}`),
              ])}
            />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[var(--surface)] text-white p-6 rounded-2xl space-y-4 border border-[var(--border)] sticky top-24">
              <span className="text-xs text-[var(--accent)] font-bold tracking-[0.08em] uppercase block">
                Atendimento Técnico
              </span>
              <h3 className="text-xl font-bold text-white leading-snug">
                Converse com nossa equipe no WhatsApp
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Tire dúvidas ou solicite atendimento presencial em Curitiba e Região Metropolitana.
              </p>

              <a
                href={whatsappLink(servico.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="w-full h-[52px] flex items-center justify-center gap-2 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Conversar no WhatsApp</span>
              </a>

              {servico.relatedSolutions && servico.relatedSolutions.length > 0 && (
                <div className="pt-4 border-t border-[var(--border)] space-y-2.5">
                  <span className="text-xs font-bold text-white uppercase tracking-[0.08em] block">
                    Soluções Relacionadas
                  </span>
                  <div className="flex flex-col gap-2">
                    {servico.relatedSolutions.map((solSlug) => (
                      <Link
                        key={solSlug}
                        to={`/solucoes/${solSlug}/`}
                        className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors block truncate"
                      >
                        › {solSlug.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {servico.relatedServices && servico.relatedServices.length > 0 && (
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.08em]">
                  Outros Serviços
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {servico.relatedServices.map((relSlug) => {
                    const relServ = getServiceBySlug(relSlug);
                    return (
                      <li key={relSlug}>
                        <Link
                          to={`/servicos/${relSlug}/`}
                          className="text-[var(--text-muted)] hover:text-[var(--accent)] font-medium block truncate transition-colors"
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

      {otherServices.length > 0 && (
        <section aria-labelledby="outros-servicos-rel-heading" className="bg-[var(--bg-deep)] py-14 px-4 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              headingId="outros-servicos-rel-heading"
              kicker="Continue navegando"
              title="Outros serviços de controle de acesso"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((srv) => (
                <PhotoCard
                  key={srv.slug}
                  to={`/servicos/${srv.slug}/`}
                  title={srv.title}
                  description={srv.directAnswer}
                  imageSrc={srv.image.src}
                  imageAlt={srv.image.alt}
                  icon={getCatalogIcon(srv.slug)}
                  ctaLabel="Ver detalhes do serviço"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
