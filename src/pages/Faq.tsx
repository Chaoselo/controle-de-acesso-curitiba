import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqAccordion } from '../components/ui/FaqAccordion';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { generalFaqList } from '../content/faq';
import { siteConfig } from '../config/site';
import { generateFAQSchema } from '../lib/schema';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function FaqPage() {
  return (
    <Layout whatsappContext="dúvida da central de FAQ">
      <SEOHead
        title="Perguntas Frequentes | Controle de Acesso Curitiba"
        description="Tire suas dúvidas sobre sistemas de controle de acesso, biometria, facial, catracas e fechaduras eletromagnéticas em Curitiba e Região Metropolitana."
        canonicalPath="/faq/"
        schemaData={generateFAQSchema(generalFaqList)}
      />

      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-10 sm:pb-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'FAQ', url: `${siteConfig.domain}/faq/` },
            ]}
          />
          <header className="space-y-3 mt-4">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Central de Ajuda
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Perguntas frequentes sobre controle de acesso
            </h1>
            <p className="text-base text-[var(--text-muted)] max-w-2xl">
              Respostas objetivas sobre tecnologias, instalação, queda de energia, LGPD, fatores de orçamento após diagnóstico e manutenção em Curitiba.
            </p>
          </header>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <FaqAccordion items={generalFaqList} defaultOpenFirst />

          <div className="text-center p-8 bg-[var(--surface)] rounded-2xl border border-[var(--border)] space-y-4">
            <h2 className="text-xl font-bold text-white">
              Ainda tem dúvidas sobre o seu projeto?
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto">
              Converse diretamente com nossa equipe técnica pelo WhatsApp para orientações sem compromisso.
            </p>
            <a
              href={whatsappLink('dúvida não listada no FAQ')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('faq cta', '/faq/')}
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-7 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-bold text-base transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Perguntar no WhatsApp</span>
            </a>
          </div>

          <ComplianceNotices text={JSON.stringify(generalFaqList)} />
        </div>
      </section>
    </Layout>
  );
}
