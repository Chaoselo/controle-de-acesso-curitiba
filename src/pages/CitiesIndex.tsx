import { Link } from 'react-router-dom';
import { cidadesList } from '../content/cidades';
import { siteConfig } from '../config/site';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/ui/SectionHeader';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { ArrowRight, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

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

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Cidades Atendidas', url: `${siteConfig.domain}/cidades/` }
            ]}
          />

          <div className="mt-4 max-w-4xl space-y-5">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Cobertura Regional · Curitiba e Região Metropolitana
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Cidades Atendidas em Controle de Acesso
            </h1>

            <div className="text-base text-[var(--text-muted)] space-y-3 leading-relaxed">
              <p>
                A <strong className="text-white">Controle de Acesso Curitiba</strong> realiza atendimento presencial na capital e em mais 10 municípios da Região Metropolitana para instalação de controle de acesso, fechadura eletrônica e interfone/vídeo porteiro, além de conserto e manutenção de interfone, catraca e cancela.
              </p>
              <p>
                Atendemos empresas, condomínios, indústrias, clínicas, escolas, academias, estacionamentos e portas de vidro. Casas e apartamentos individuais são atendidos pelo site principal da Intelsecsul (intelsecsul.com.br).
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink('orçamento pelo catálogo de cidades')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white font-semibold rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar vistoria na minha cidade</span>
              </a>
              <span className="text-xs sm:text-sm text-[var(--text-soft)]">
                Atendimento em toda a Região Metropolitana
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Cidades */}
      <section aria-labelledby="cidades-grid-heading" className="bg-[var(--bg)] py-14 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="cidades-grid-heading"
            kicker="11 municípios atendidos"
            title="Curitiba e Grande Curitiba"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cidadesList.map((cidade) => (
              <Link
                key={cidade.slug}
                to={`/cidades/${cidade.slug}/`}
                className="group bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
              >
                <div className="relative aspect-video w-full bg-[var(--bg-deep)] overflow-hidden">
                  <img
                    src={cidade.image.src}
                    alt={cidade.image.alt}
                    width={cidade.image.width}
                    height={cidade.image.height}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--surface)]/30 to-[var(--surface)]"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em] mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{cidade.name} - PR</span>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                      {cidade.name}
                    </h2>
                    <p className="mt-2.5 text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed">
                      {getFirstSentence(cidade.directAnswer)}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-sm font-semibold text-[var(--accent)]">
                    <span>Ver soluções em {cidade.name}</span>
                    <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Logística Regional */}
      <section
        aria-labelledby="logistica-regional-heading"
        className="bg-[var(--bg-deep)] py-14 sm:py-16 px-4 border-t border-[var(--border)]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-7 h-7 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <h2 id="logistica-regional-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Como funciona o atendimento na Região Metropolitana
              </h2>
            </div>
            <p className="text-[var(--text-muted)] text-base mb-8 max-w-3xl">
              Nossa operação centralizada em Curitiba permite agendamento organizado para visitas técnicas de orçamento, instalações e assistência corretiva em toda a Grande Curitiba.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Vistoria Técnica Presencial</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Avaliamos no local os vãos de passagem, tipo de portas ou portões, tubulação existente e pontos de energia elétrica.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Projeto Sob Medida</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Especificação de eletroímãs, cancelas, catracas, leitores biométricos faciais e fontes de alimentação adequadas ao imóvel.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Manutenção Preventiva e Chamados</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Atendemos por planos de manutenção periódica ou chamados avulsos para condomínios, empresas e indústrias.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <ShieldCheck className="w-5 h-5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Cobrimos Curitiba e 10 municípios da RMC com equipe técnica própria.</span>
              </div>
              <a
                href={whatsappLink('dúvida sobre cobertura técnica na cidade')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="text-sm font-bold text-[var(--whatsapp)] hover:underline transition"
              >
                Consultar disponibilidade para seu endereço ›
              </a>
            </div>
          </div>

          <ComplianceNotices
            text={JSON.stringify(cidadesList.map((c) => `${c.title} ${c.directAnswer}`))}
            className="mt-8"
          />
        </div>
      </section>
    </Layout>
  );
}
