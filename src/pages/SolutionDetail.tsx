import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldAlert,
  Wrench,
  Cpu,
  HelpCircle,
  Building2,
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
import { getSolutionBySlug, solucoesList } from '../content/solucoes';
import { getSegmentBySlug } from '../content/segmentos';
import { getServiceBySlug } from '../content/servicos';
import { getCityBySlug } from '../content/cidades';
import { siteConfig } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { generateServiceSchema, generateFAQSchema } from '../lib/schema';

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solucao = slug ? getSolutionBySlug(slug) : undefined;

  if (!solucao) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsAppAction = () => {
    trackWhatsAppClick(`pagina solucao ${solucao.slug}`, `/solucoes/${solucao.slug}/`);
  };

  const schemas = [
    generateServiceSchema({
      name: solucao.title,
      description: solucao.metaDescription,
      url: `${siteConfig.domain}/solucoes/${solucao.slug}/`,
      serviceType: 'Controle de Acesso Físico',
    }),
    generateFAQSchema(solucao.faqs),
  ];

  const resolvedRelatedSolutions = (solucao.relatedSolutions || [])
    .map((sSlug) => getSolutionBySlug(sSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const bottomSolutions =
    resolvedRelatedSolutions.length > 0
      ? resolvedRelatedSolutions.slice(0, 4)
      : solucoesList.filter((s) => s.slug !== solucao.slug).slice(0, 4);

  const resolvedRelatedSegments = (solucao.relatedSegments || [])
    .map((segSlug) => getSegmentBySlug(segSlug))
    .filter((seg): seg is NonNullable<typeof seg> => Boolean(seg));

  const resolvedRelatedCities = (solucao.relatedCities || [])
    .map((citySlug) => getCityBySlug(citySlug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const resolvedRelatedServices = (solucao.relatedServices || [])
    .map((srvSlug) => getServiceBySlug(srvSlug))
    .filter((srv): srv is NonNullable<typeof srv> => Boolean(srv));

  return (
    <Layout whatsappContext={solucao.whatsappContext}>
      <SEOHead
        title={solucao.seoTitle}
        description={solucao.metaDescription}
        canonicalPath={`/solucoes/${solucao.slug}/`}
        ogImage={siteConfig.defaultOgImage}
        schemaData={schemas}
      />

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Soluções', url: `${siteConfig.domain}/solucoes/` },
              { name: solucao.title, url: `${siteConfig.domain}/solucoes/${solucao.slug}/` },
            ]}
          />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
                Solução Técnica de Acesso · Curitiba e RMC
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {solucao.title}
              </h1>

              <div className="p-5 bg-[var(--surface)]/90 border border-[var(--border)] rounded-2xl text-base text-[var(--text-muted)] leading-relaxed space-y-3">
                <p>{solucao.directAnswer}</p>
                {solucao.slug === 'fechadura-eletronica' && (
                  <p>
                    <a
                      href="https://intelsecsul.com.br/servicos/fechaduras-eletronicas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Para casas e apartamentos, veja Fechaduras Eletrônicas no site da Intelsecsul ›
                    </a>
                  </p>
                )}
                {solucao.slug === 'tag-veicular' && (
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link
                      to="/solucoes/cancelas-e-acesso-veicular/"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Ver cancelas e acesso veicular ›
                    </Link>
                    <Link
                      to="/segmentos/estacionamentos/"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Ver projetos para estacionamentos ›
                    </Link>
                  </p>
                )}
                {solucao.slug === 'catracas' && (
                  <p className="text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <Link
                      to="/solucoes/biometria/"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Biometria digital ›
                    </Link>
                    <Link
                      to="/solucoes/reconhecimento-facial/"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Reconhecimento facial ›
                    </Link>
                    <Link
                      to="/servicos/manutencao-de-catracas/"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Manutenção de catracas ›
                    </Link>
                  </p>
                )}
                {solucao.slug === 'biometria' && (
                  <p className="text-sm">
                    <Link
                      to="/solucoes/fechadura-eletronica/"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Veja também fechadura eletrônica e biométrica ›
                    </Link>
                  </p>
                )}
                {solucao.slug === 'cancelas-e-acesso-veicular' && (
                  <div className="text-sm space-y-1.5">
                    <p className="flex flex-wrap gap-x-4 gap-y-1">
                      <Link
                        to="/solucoes/tag-veicular/"
                        className="text-[var(--accent)] font-semibold hover:underline"
                      >
                        Conhecer tag veicular UHF ›
                      </Link>
                      <Link
                        to="/segmentos/estacionamentos/"
                        className="text-[var(--accent)] font-semibold hover:underline"
                      >
                        Cancela para estacionamento ›
                      </Link>
                    </p>
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
                  </div>
                )}
                {solucao.slug === 'interfone-e-video-porteiro' && (
                  <p>
                    <a
                      href="https://intelsecsul.com.br/servicos/interfonia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] font-semibold hover:underline"
                    >
                      Para casas e apartamentos, veja Interfonia no site da Intelsecsul ›
                    </a>
                  </p>
                )}
              </div>

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappLink(solucao.whatsappContext)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppAction}
                  className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Orçar pelo WhatsApp</span>
                </a>

                <Link
                  to="/solucoes/"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-5 bg-[var(--surface)] hover:bg-[#172231] text-white border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-xl font-semibold text-sm sm:text-base transition-colors"
                >
                  <span>Ver outras soluções</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-deep)] shadow-2xl">
                <img
                  src={solucao.image.src}
                  alt={solucao.image.alt}
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

      {/* Conteúdo principal */}
      <article className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Coluna principal (8 col) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Como Funciona */}
            <section aria-labelledby="como-funciona-heading" className="space-y-4">
              <h2 id="como-funciona-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Cpu className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Como funciona a tecnologia</span>
              </h2>
              <div className="space-y-3">
                {solucao.howItWorks.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl"
                  >
                    <span className="text-xs font-bold text-[var(--accent)] bg-[var(--bg)] border border-[var(--border)] px-2.5 py-1 rounded-lg shrink-0">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-base text-[var(--text-muted)] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quando Escolher */}
            <section aria-labelledby="quando-escolher-heading" className="space-y-4">
              <h2 id="quando-escolher-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Para quem e quando escolher esta solução</span>
              </h2>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                <ul className="space-y-3 text-base text-[var(--text-muted)]">
                  {solucao.whenToChoose.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Vantagens e Limitações */}
            <section aria-labelledby="vantagens-limitacoes-heading" className="space-y-5">
              <h2 id="vantagens-limitacoes-heading" className="text-2xl font-bold text-white tracking-tight">
                Vantagens e limitações práticas
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-3.5">
                  <h3 className="text-xs font-bold text-[var(--whatsapp)] flex items-center gap-2 uppercase tracking-[0.08em]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Vantagens</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm sm:text-base text-[var(--text-muted)]">
                    {solucao.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--whatsapp)] font-bold">•</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-3.5">
                  <h3 className="text-xs font-bold text-amber-400 flex items-center gap-2 uppercase tracking-[0.08em]">
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Limitações a considerar</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm sm:text-base text-[var(--text-muted)]">
                    {solucao.limitations.map((lim, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* LGPD */}
            {solucao.lgpdNote && (
              <section
                aria-labelledby="lgpd-heading"
                className="p-6 bg-[var(--surface-2)] text-[var(--text-muted)] rounded-2xl space-y-2.5 border border-[var(--accent)]/30"
              >
                <h3 id="lgpd-heading" className="text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em] flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Segurança da Informação e LGPD</span>
                </h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">
                  {solucao.lgpdNote}
                </p>
              </section>
            )}

            {/* Integrações */}
            <section aria-labelledby="integracoes-heading" className="space-y-4">
              <h2 id="integracoes-heading" className="text-2xl font-bold text-white tracking-tight">
                Integração com outros equipamentos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {solucao.integrations.map((integ, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-sm sm:text-base text-[var(--text-muted)] flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" aria-hidden="true" />
                    <span>{integ}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Etapas de Instalação */}
            <section aria-labelledby="etapas-heading" className="space-y-4">
              <h2 id="etapas-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Wrench className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Etapas de instalação no local</span>
              </h2>
              <div className="space-y-3">
                {solucao.installationSteps.map((step) => (
                  <div key={step.step} className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-[var(--accent)] bg-[var(--bg)] border border-[var(--border)] px-2.5 py-1 rounded-lg">
                        Passo {step.step}
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

            {/* Manutenção e Suporte */}
            <section aria-labelledby="manutencao-heading" className="space-y-4">
              <h2 id="manutencao-heading" className="text-2xl font-bold text-white tracking-tight">
                Manutenção preventiva e suporte técnico local
              </h2>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                <ul className="space-y-3 text-base text-[var(--text-muted)]">
                  {solucao.maintenanceAndSupport.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-solucao-heading" className="space-y-5 pt-6 border-t border-[var(--border)]">
              <h2 id="faq-solucao-heading" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Perguntas frequentes sobre {solucao.title}</span>
              </h2>
              <FaqAccordion items={solucao.faqs} />
            </section>

            <ComplianceNotices
              text={JSON.stringify([
                solucao,
                ...bottomSolutions.map((s) => `${s.title} ${s.directAnswer}`),
                ...resolvedRelatedServices.map((srv) => srv.title),
              ])}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[var(--surface)] text-white p-6 rounded-2xl space-y-4 border border-[var(--border)] sticky top-24">
              <span className="text-xs text-[var(--accent)] font-bold tracking-[0.08em] uppercase block">
                Atendimento em Curitiba e RMC
              </span>
              <h3 className="text-xl font-bold text-white leading-snug">
                Solicite um orçamento sem custo
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Nossa equipe técnica própria avalia portas, portões e fluxo de pessoas para especificar os equipamentos adequados ao seu imóvel.
              </p>

              <a
                href={whatsappLink(solucao.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="w-full h-[52px] flex items-center justify-center gap-2 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Orçamento via WhatsApp</span>
              </a>

              <div className="text-center">
                <Link to="/orcamento/" className="text-xs text-[var(--accent)] hover:underline font-medium">
                  Ou preencha o formulário detalhado
                </Link>
              </div>

              {(resolvedRelatedSegments.length > 0 || resolvedRelatedCities.length > 0) && (
                <div className="pt-4 border-t border-[var(--border)] space-y-2.5">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    Aplicações e Cidades
                  </span>
                  <div className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
                    {resolvedRelatedSegments.map((seg) => (
                      <Link
                        key={seg.slug}
                        to={`/segmentos/${seg.slug}/`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        › {seg.title.replace('Controle de Acesso para ', '')}
                      </Link>
                    ))}
                    {resolvedRelatedServices.map((srv) => (
                      <Link
                        key={srv.slug}
                        to={`/servicos/${srv.slug}/`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        › {srv.title}
                      </Link>
                    ))}
                    {resolvedRelatedCities.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/cidades/${city.slug}/`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        › Instalação em {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.08em]">
                Soluções Relacionadas
              </h3>
              <ul className="space-y-2.5 text-sm">
                {resolvedRelatedSolutions.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      to={`/solucoes/${rel.slug}/`}
                      className="text-[var(--text-muted)] hover:text-[var(--accent)] font-medium block truncate transition-colors"
                    >
                      {rel.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[var(--border)]">
                <Link
                  to="/solucoes/"
                  className="text-xs font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Ver todas as soluções</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Outras soluções (cards com foto no rodapé) */}
      <section aria-labelledby="outras-solucoes-heading" className="bg-[var(--bg-deep)] py-14 px-4 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="outras-solucoes-heading"
            kicker="Explore também"
            title="Outras soluções de controle de acesso"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bottomSolutions.map((rel) => (
              <PhotoCard
                key={rel.slug}
                to={`/solucoes/${rel.slug}/`}
                title={rel.title}
                description={rel.directAnswer}
                imageSrc={rel.image.src}
                imageAlt={rel.image.alt}
                icon={getCatalogIcon(rel.slug)}
                compact
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
