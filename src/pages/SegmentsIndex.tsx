import { segmentosList } from '../content/segmentos';
import { siteConfig } from '../config/site';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PhotoCard } from '../components/ui/PhotoCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { getCatalogIcon } from '../components/ui/SolutionIcon';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SegmentsIndex() {
  const getFirstSentence = (text: string) => {
    const parts = text.split('. ');
    return parts[0].endsWith('.') ? parts[0] : `${parts[0]}.`;
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Segmentos Atendidos em Controle de Acesso em Curitiba',
    description: 'Projetos e instalações de controle de acesso físico para condomínios, empresas, indústrias, clínicas, escolas, academias, estacionamentos e portas de vidro em Curitiba e Região Metropolitana.',
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
        description="Conheça os segmentos atendidos em controle de acesso em Curitiba e RMC: condomínios, empresas, indústrias, escolas, clínicas, academias e estacionamentos."
        canonicalPath="/segmentos/"
        schemaData={[itemListSchema]}
      />

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Segmentos', url: `${siteConfig.domain}/segmentos/` }
            ]}
          />

          <div className="mt-4 max-w-4xl space-y-5">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Aplicações por tipo de imóvel · Curitiba e RMC
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Segmentos Atendidos em Controle de Acesso em Curitiba
            </h1>

            <div className="text-base text-[var(--text-muted)] space-y-3 leading-relaxed">
              <p>
                Cada empreendimento possui dinâmicas operacionais e fluxos próprios. Empresas, condomínios, indústrias, clínicas, escolas, academias, estacionamentos e estabelecimentos com portas de vidro exigem especificações adequadas para fechaduras eletrônicas, interfone/vídeo porteiro, catracas, cancelas e leitores.
              </p>
              <p>
                Para atendimento residencial de casas e apartamentos individuais, acesse o site principal da{' '}
                <a
                  href={siteConfig.parentCompany.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] font-semibold hover:underline"
                >
                  Intelsecsul (intelsecsul.com.br)
                </a>
                .
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink('orçamento pelo catálogo de segmentos')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white font-semibold rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar avaliação no WhatsApp</span>
              </a>
              <span className="text-xs sm:text-sm text-[var(--text-soft)]">
                Orçamento sem custo em Curitiba e Região Metropolitana
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Segmentos */}
      <section aria-labelledby="segmentos-grid-heading" className="bg-[var(--bg)] py-14 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="segmentos-grid-heading"
            kicker={`${segmentosList.length} segmentos especializados`}
            title="Soluções dimensionadas para cada local"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {segmentosList.map((segmento) => (
              <PhotoCard
                key={segmento.slug}
                to={`/segmentos/${segmento.slug}/`}
                title={segmento.title}
                description={getFirstSentence(segmento.directAnswer)}
                imageSrc={segmento.image.src}
                imageAlt={segmento.image.alt}
                icon={getCatalogIcon(segmento.slug)}
                ctaLabel="Ver soluções do segmento"
                compact
              />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais por Segmento */}
      <section
        aria-labelledby="diferenciais-segmentos-heading"
        className="bg-[var(--bg-deep)] py-14 sm:py-16 px-4 border-t border-[var(--border)]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-7 h-7 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <h2 id="diferenciais-segmentos-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Projeto técnico adaptado à rotina do local
              </h2>
            </div>
            <p className="text-[var(--text-muted)] text-base mb-8 max-w-3xl">
              Avaliamos os horários de maior circulação, rotas de fuga exigidas em normas de segurança, perfil de usuários e contingência elétrica contra quedas de energia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Portarias Físicas e Remotas</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Equipamentos com interfaces padrão de mercado (Wiegand, OSDP e TCP/IP), facilitando a avaliação de compatibilidade com portarias remotas.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Boas Práticas de LGPD</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Orientações sobre conversão em templates criptografados e disponibilização de credenciais alternativas como cartões ou tags.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Acessibilidade (ABNT NBR 9050)</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Previsão de passagens acessíveis para cadeirantes e pessoas com mobilidade reduzida, com alturas adequadas de leitores e botoeiras.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <ShieldCheck className="w-5 h-5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Atendimento em toda a Região Metropolitana de Curitiba com equipe própria.</span>
              </div>
              <a
                href={whatsappLink('dúvida sobre segmento específico')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="text-sm font-bold text-[var(--whatsapp)] hover:underline transition"
              >
                Conversar com a equipe técnica ›
              </a>
            </div>
          </div>

          <ComplianceNotices
            text={JSON.stringify(segmentosList.map((s) => `${s.title} ${s.directAnswer}`))}
            className="mt-8"
          />
        </div>
      </section>
    </Layout>
  );
}
