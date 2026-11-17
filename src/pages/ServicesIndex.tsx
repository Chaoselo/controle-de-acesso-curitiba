import { servicosList } from '../content/servicos';
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
import { Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ServicesIndex() {
  const getFirstSentence = (text: string) => {
    const parts = text.split('. ');
    return parts[0].endsWith('.') ? parts[0] : `${parts[0]}.`;
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Serviços Especializados em Controle de Acesso em Curitiba',
    description: 'Serviços técnicos de controle de acesso físico em Curitiba e Região Metropolitana: projetos e instalação, manutenção preventiva e corretiva e locação de equipamentos.',
    numberOfItems: servicosList.length,
    itemListElement: servicosList.map((servico, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: servico.title,
      url: `${siteConfig.domain}/servicos/${servico.slug}/`
    }))
  };

  const handleWhatsAppAction = () => {
    trackWhatsAppClick('pagina catalogo servicos', '/servicos/');
  };

  return (
    <Layout whatsappContext="serviços de controle de acesso">
      <SEOHead
        title="Serviços de Controle de Acesso em Curitiba | Manutenção"
        description="Conheça nossos serviços de controle de acesso em Curitiba e RMC: instalação, manutenção de sistemas e manutenção de catracas, além de locação."
        canonicalPath="/servicos/"
        schemaData={[itemListSchema]}
      />

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Serviços', url: `${siteConfig.domain}/servicos/` }
            ]}
          />

          <div className="mt-4 max-w-4xl space-y-5">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Instalação, Manutenção e Locação · Curitiba e RMC
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Serviços Especializados em Controle de Acesso em Curitiba
            </h1>

            <div className="text-base text-[var(--text-muted)] space-y-3 leading-relaxed">
              <p>
                Realizamos instalação de controle de acesso, fechadura eletrônica (inclusive em portas de vidro) e interfone/vídeo porteiro, além de conserto e manutenção de interfone, catraca e cancela, com atendimento também a estacionamentos e locação sob consulta.
              </p>
              <p>
                Atendemos empresas, condomínios, indústrias, clínicas, escolas e academias em Curitiba e nos 10 municípios da Região Metropolitana.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink('orçamento pelo catálogo de serviços')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white font-semibold rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar atendimento no WhatsApp</span>
              </a>
              <span className="text-xs sm:text-sm text-[var(--text-soft)]">
                Equipe técnica própria · Orçamento sem custo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section aria-labelledby="servicos-grid-heading" className="bg-[var(--bg)] py-14 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="servicos-grid-heading"
            kicker={`${servicosList.length} frentes de atendimento`}
            title="Como podemos atender o seu projeto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicosList.map((servico) => (
              <PhotoCard
                key={servico.slug}
                to={`/servicos/${servico.slug}/`}
                title={servico.title}
                description={getFirstSentence(servico.directAnswer)}
                imageSrc={servico.image.src}
                imageAlt={servico.image.alt}
                icon={getCatalogIcon(servico.slug)}
                ctaLabel="Ver detalhes do serviço"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Padrão técnico de atendimento */}
      <section
        aria-labelledby="qualidade-tecnica-heading"
        className="bg-[var(--bg-deep)] py-14 sm:py-16 px-4 border-t border-[var(--border)]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-7 h-7 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <h2 id="qualidade-tecnica-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Padrão de atendimento em cada etapa
              </h2>
            </div>
            <p className="text-[var(--text-muted)] text-base mb-8 max-w-3xl">
              Trabalhamos com procedimentos técnicos organizados de verificação elétrica e mecânica para assegurar o funcionamento adequado dos equipamentos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Diagnóstico Elétrico e Mecânico</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Medição de tensão na linha, força de retenção de eletroímãs e estado de fontes e baterias de contingência.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Componentes Compatíveis</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Verificação prévia de compatibilidade para substituição de solenoides, molas, microchaves, controladoras e sensores ópticos.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Implantação Planejada por Etapas</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Execução coordenada com a portaria ou administração para reduzir ao mínimo o impacto na rotina do local durante a obra.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <ShieldCheck className="w-5 h-5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Suporte após a instalação e orçamento elaborado após diagnóstico técnico presencial.</span>
              </div>
              <a
                href={whatsappLink('dúvida sobre serviços de controle de acesso')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="text-sm font-bold text-[var(--whatsapp)] hover:underline transition"
              >
                Conversar com técnico especializado ›
              </a>
            </div>
          </div>

          <ComplianceNotices
            text={JSON.stringify(servicosList.map((s) => `${s.title} ${s.directAnswer}`))}
            className="mt-8"
          />
        </div>
      </section>
    </Layout>
  );
}
