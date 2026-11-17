import { Phone, Clock, ExternalLink, MapPin } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { trackPhoneClick } from '../lib/analytics';

export function ContatoPage() {
  return (
    <Layout whatsappContext="página de contato">
      <SEOHead
        title="Contato | Controle de Acesso Curitiba"
        description="Entre em contato com nossos especialistas em controle de acesso em Curitiba e Região Metropolitana. WhatsApp (41) 99844-8409 e atendimento técnico."
        canonicalPath="/contato/"
      />

      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-10 sm:pb-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Contato', url: `${siteConfig.domain}/contato/` },
            ]}
          />
          <header className="space-y-3 mt-4">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Canais de Atendimento
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Fale com a nossa equipe
            </h1>
            <p className="text-base text-[var(--text-muted)] max-w-xl">
              Atendimento direto para tirar dúvidas, solicitar orçamento sem custo e agendar visita técnica em Curitiba e Região Metropolitana.
            </p>
          </header>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <div className="bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--border)] space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--whatsapp)] flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">WhatsApp Oficial</h2>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  Canal prático para enviar fotos das portas ou portões, detalhar a necessidade e receber atendimento rápido.
                </p>
              </div>

              <a
                href={whatsappLink('contato')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('card contato', '/contato/')}
                className="w-full h-[52px] flex items-center justify-center gap-2 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-bold text-sm sm:text-base transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Conversar: {siteConfig.whatsappFormatted}</span>
              </a>
            </div>

            {/* Telefone */}
            <div className="bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--border)] space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-white">Atendimento Telefônico</h2>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  Ligue diretamente para falar com nossa equipe sobre projetos, instalações ou suporte técnico.
                </p>
              </div>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => trackPhoneClick('/contato/')}
                className="w-full h-[52px] flex items-center justify-center gap-2 bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)]/60 text-white rounded-xl font-bold text-sm sm:text-base transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Ligar: {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Informações Operacionais */}
          <div className="bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--border)] space-y-5">
            <h3 className="font-bold text-white text-lg">
              Informações de atendimento
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-[var(--text-muted)]">
              <div className="space-y-1.5">
                <span className="font-semibold flex items-center gap-1.5 text-white">
                  <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                  <span>Região de Cobertura:</span>
                </span>
                <p className="leading-relaxed">
                  Curitiba, Pinhais, São José dos Pinhais, Araucária, Almirante Tamandaré, Colombo, Campo Largo, Fazenda Rio Grande, Campo Magro, Quatro Barras e Campina Grande do Sul.
                </p>
              </div>

              {isFieldFilled(siteConfig.openingHours) && (
                <div className="space-y-1.5">
                  <span className="font-semibold flex items-center gap-1.5 text-white">
                    <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                    <span>Horário de Atendimento:</span>
                  </span>
                  <p>{siteConfig.openingHours}</p>
                </div>
              )}

              {isFieldFilled(siteConfig.address.street) && (
                <div className="space-y-1.5">
                  <span className="font-semibold block text-white">Endereço:</span>
                  <p>
                    {siteConfig.address.street}, {siteConfig.address.city} - {siteConfig.address.state}
                  </p>
                </div>
              )}

              <div className="space-y-1.5">
                <span className="font-semibold block text-white">Empresa e CNPJ:</span>
                <p>
                  {siteConfig.parentCompany.name} · CNPJ {siteConfig.cnpj} (
                  <a
                    href={siteConfig.parentCompany.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>intelsecsul.com.br</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                  )
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
