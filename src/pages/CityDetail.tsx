import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  Wrench,
  HelpCircle,
  ArrowRight,
  Building,
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
import { getCityBySlug, cidadesList } from '../content/cidades';
import { solucoesList } from '../content/solucoes';
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
        ogImage={siteConfig.defaultOgImage}
        schemaData={generateFAQSchema(cidade.faqs)}
      />

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Cidades Atendidas', url: `${siteConfig.domain}/cidades/` },
              { name: cidade.name, url: `${siteConfig.domain}/cidades/${cidade.slug}/` },
            ]}
          />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
                Região Metropolitana de Curitiba · Atendimento Presencial
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {cidade.title}
              </h1>

              <div className="p-5 bg-[var(--surface)]/90 border border-[var(--border)] rounded-2xl text-base text-[var(--text-muted)] leading-relaxed">
                <p>{cidade.directAnswer}</p>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappLink(cidade.whatsappContext)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppAction}
                  className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Solicitar orçamento em {cidade.name}</span>
                </a>

                <Link
                  to="/cidades/"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-5 bg-[var(--surface)] hover:bg-[#172231] text-white border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-xl font-semibold text-sm sm:text-base transition-colors"
                >
                  <span>Outras cidades</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-deep)] shadow-2xl">
                <img
                  src={cidade.image.src}
                  alt={cidade.image.alt}
                  width={800}
                  height={600}
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
          <div className="lg:col-span-8 space-y-10">
            {/* Características Locais */}
            {isFieldFilled(cidade.localCharacteristics) && (
              <section aria-labelledby="perfil-local-heading" className="space-y-4">
                <h2 id="perfil-local-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                  <Building className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                  <span>Perfil imobiliário e demandas em {cidade.name}</span>
                </h2>
                <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl text-base text-[var(--text-muted)] leading-relaxed">
                  <p>{cidade.localCharacteristics}</p>
                </div>
              </section>
            )}

            {/* Soluções mais indicadas */}
            <section aria-labelledby="solucoes-procuradas-heading" className="space-y-4">
              <h2 id="solucoes-procuradas-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Soluções mais indicadas em {cidade.name}</span>
              </h2>
              <div className="space-y-3">
                {cidade.popularSolutions.map((sol, idx) => (
                  <div key={idx} className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-base text-[var(--text-muted)] leading-relaxed">{sol}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Logística de Atendimento */}
            <section aria-labelledby="logistica-heading" className="space-y-4">
              <h2 id="logistica-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Wrench className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Logística e atendimento técnico</span>
              </h2>
              <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl text-base text-[var(--text-muted)] leading-relaxed">
                <p>{cidade.serviceLogistics}</p>
              </div>
            </section>

            {/* FAQ da Cidade */}
            <section aria-labelledby="faq-cidade-heading" className="space-y-5 pt-6 border-t border-[var(--border)]">
              <h2 id="faq-cidade-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Dúvidas frequentes sobre atendimento em {cidade.name}</span>
              </h2>
              <FaqAccordion items={cidade.faqs} />
            </section>

            <ComplianceNotices text={JSON.stringify(cidade)} />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[var(--surface)] text-white p-6 rounded-2xl space-y-4 border border-[var(--border)] sticky top-24">
              <span className="text-xs text-[var(--accent)] font-bold tracking-[0.08em] uppercase block">
                Atendimento Local
              </span>
              <h3 className="text-xl font-bold text-white leading-snug">
                Precisa de vistoria técnica em {cidade.name}?
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Nossa equipe atende condomínios, empresas e indústrias em {cidade.name} para levantamento no local e orçamento sem custo.
              </p>

              <a
                href={whatsappLink(cidade.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="w-full h-[52px] flex items-center justify-center gap-2 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Pedir orçamento em {cidade.name}</span>
              </a>

              <div className="pt-4 border-t border-[var(--border)] space-y-2 text-sm text-[var(--text-muted)]">
                <Link to="/solucoes/reconhecimento-facial/" className="hover:text-[var(--accent)] transition-colors block">
                  › Reconhecimento facial
                </Link>
                <Link to="/solucoes/catracas/" className="hover:text-[var(--accent)] transition-colors block">
                  › Catracas de acesso
                </Link>
                <Link to="/segmentos/condominios-residenciais/" className="hover:text-[var(--accent)] transition-colors block">
                  › Controle para condomínios
                </Link>
              </div>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.08em]">
                Outras Cidades Atendidas
              </h3>
              <ul className="space-y-2 text-sm">
                {cidadesList
                  .filter((c) => c.slug !== cidade.slug)
                  .map((c) => (
                    <li key={c.slug}>
                      <Link
                        to={`/cidades/${c.slug}/`}
                        className="text-[var(--text-muted)] hover:text-[var(--accent)] font-medium block truncate transition-colors"
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

      <section aria-labelledby="solucoes-cidade-bottom-heading" className="bg-[var(--bg-deep)] py-14 px-4 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="solucoes-cidade-bottom-heading"
            kicker="Catálogo de equipamentos"
            title={`Equipamentos instalados em ${cidade.name}`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solucoesList.slice(0, 4).map((sol) => (
              <PhotoCard
                key={sol.slug}
                to={`/solucoes/${sol.slug}/`}
                title={sol.title}
                description={sol.directAnswer}
                imageSrc={sol.image.src}
                imageAlt={sol.image.alt}
                icon={getCatalogIcon(sol.slug)}
                compact
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
