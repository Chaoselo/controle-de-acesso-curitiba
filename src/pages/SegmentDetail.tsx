import { useParams, Link, Navigate } from 'react-router-dom';
import {
  AlertTriangle,
  CheckCircle2,
  Layers,
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

  const otherSegments = segmentosList
    .filter((s) => s.slug !== segmento.slug)
    .slice(0, 4);

  return (
    <Layout whatsappContext={segmento.whatsappContext}>
      <SEOHead
        title={segmento.seoTitle}
        description={segmento.metaDescription}
        canonicalPath={`/segmentos/${segmento.slug}/`}
        ogImage={siteConfig.defaultOgImage}
        schemaData={generateFAQSchema(segmento.faqs)}
      />

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Segmentos', url: `${siteConfig.domain}/segmentos/` },
              { name: segmento.title, url: `${siteConfig.domain}/segmentos/${segmento.slug}/` },
            ]}
          />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
                Segmento Especializado · Curitiba e Região
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {segmento.title}
              </h1>

              <div className="p-5 bg-[var(--surface)]/90 border border-[var(--border)] rounded-2xl text-base text-[var(--text-muted)] leading-relaxed space-y-3">
                <p>{segmento.directAnswer}</p>
                {segmento.slug === 'residencias' && (
                  <p>
                    <a
                      href={siteConfig.parentCompany.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Acessar site principal da Intelsecsul para casas e apartamentos (intelsecsul.com.br) ›
                    </a>
                  </p>
                )}
                {segmento.slug === 'estacionamentos' && (
                  <p>
                    <a
                      href="https://intelsecsul.com.br/servicos/portao-automatico/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Portão automático residencial fica no site da Intelsecsul ›
                    </a>
                  </p>
                )}
              </div>

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappLink(segmento.whatsappContext)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppAction}
                  className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Pedir orçamento no WhatsApp</span>
                </a>

                <Link
                  to="/segmentos/"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-5 bg-[var(--surface)] hover:bg-[#172231] text-white border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-xl font-semibold text-sm sm:text-base transition-colors"
                >
                  <span>Ver todos os locais</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-deep)] shadow-2xl">
                <img
                  src={segmento.image.src}
                  alt={segmento.image.alt}
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
            {/* Desafios */}
            <section aria-labelledby="problemas-heading" className="space-y-4">
              <h2 id="problemas-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" aria-hidden="true" />
                <span>Desafios e necessidades comuns</span>
              </h2>
              <div className="space-y-3">
                {segmento.typicalProblems.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2.5 shrink-0" aria-hidden="true" />
                    <p className="text-base text-[var(--text-muted)] leading-relaxed">{prob}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Soluções Recomendadas */}
            <section aria-labelledby="solucoes-ideais-heading" className="space-y-4">
              <h2 id="solucoes-ideais-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Soluções recomendadas para o segmento</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {segmento.idealSolutions.map((sol, idx) => (
                  <div key={idx} className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl space-y-2.5">
                    <h3 className="text-base font-bold text-white">
                      <Link to={`/solucoes/${sol.solutionSlug}/`} className="text-[var(--accent)] hover:underline">
                        {sol.title}
                      </Link>
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                      {sol.reason}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Arquitetura Típica */}
            <section aria-labelledby="arquitetura-heading" className="space-y-4">
              <h2 id="arquitetura-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Estrutura típica de implantação</span>
              </h2>
              <div className="space-y-3">
                {segmento.projectArchitecture.map((arch, idx) => (
                  <div key={idx} className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl">
                    <p className="text-base text-[var(--text-muted)] leading-relaxed">{arch}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-segmento-heading" className="space-y-5 pt-6 border-t border-[var(--border)]">
              <h2 id="faq-segmento-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Perguntas frequentes sobre {segmento.title}</span>
              </h2>
              <FaqAccordion items={segmento.faqs} />
            </section>

            <ComplianceNotices text={JSON.stringify(segmento)} />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[var(--surface)] text-white p-6 rounded-2xl space-y-4 border border-[var(--border)] sticky top-24">
              <span className="text-xs text-[var(--accent)] font-bold tracking-[0.08em] uppercase block">
                Projeto Sob Medida
              </span>
              <h3 className="text-xl font-bold text-white leading-snug">
                Solicite um orçamento sem custo
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Avaliamos o fluxo diário e a estrutura do seu imóvel para recomendar o conjunto adequado de equipamentos.
              </p>

              <a
                href={whatsappLink(segmento.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="w-full h-[52px] flex items-center justify-center gap-2 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Conversar no WhatsApp</span>
              </a>

              {segmento.relatedSolutions && segmento.relatedSolutions.length > 0 && (
                <div className="pt-4 border-t border-[var(--border)] space-y-2.5">
                  <span className="text-xs font-bold text-white uppercase tracking-[0.08em] block">
                    Soluções Indicadas
                  </span>
                  <div className="flex flex-col gap-2">
                    {segmento.relatedSolutions.map((solSlug) => (
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

            {segmento.relatedSegments && segmento.relatedSegments.length > 0 && (
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.08em]">
                  Segmentos Relacionados
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {segmento.relatedSegments.map((relSlug) => {
                    const relSeg = getSegmentBySlug(relSlug);
                    return (
                      <li key={relSlug}>
                        <Link
                          to={`/segmentos/${relSlug}/`}
                          className="text-[var(--text-muted)] hover:text-[var(--accent)] font-medium block truncate transition-colors"
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

      <section aria-labelledby="outros-segmentos-heading" className="bg-[var(--bg-deep)] py-14 px-4 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="outros-segmentos-heading"
            kicker="Outros locais atendidos"
            title="Veja também outros segmentos"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherSegments.map((seg) => (
              <PhotoCard
                key={seg.slug}
                to={`/segmentos/${seg.slug}/`}
                title={seg.title}
                description={seg.directAnswer}
                imageSrc={seg.image.src}
                imageAlt={seg.image.alt}
                icon={getCatalogIcon(seg.slug)}
                ctaLabel="Ver projeto do segmento"
                compact
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
