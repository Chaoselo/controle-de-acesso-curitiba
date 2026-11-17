import { ShieldCheck, Target, ExternalLink } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function SobrePage() {
  return (
    <Layout whatsappContext="conhecer a empresa">
      <SEOHead
        title="Sobre Nós | Controle de Acesso Curitiba por Intelsecsul"
        description="Conheça a Controle de Acesso Curitiba, divisão especializada da Intelsecsul Segurança Eletrônica em Curitiba e Região Metropolitana. Peça seu orçamento!"
        canonicalPath="/sobre/"
      />

      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-10 sm:pb-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Sobre Nós', url: `${siteConfig.domain}/sobre/` },
            ]}
          />
          <header className="space-y-3 mt-4">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Institucional
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Controle de Acesso Curitiba
            </h1>
            <p className="text-base text-[var(--text-muted)] max-w-2xl">
              {siteConfig.brandSignature} — Projetos sob medida, instalação e manutenção com equipe técnica própria.
            </p>
          </header>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-base text-[var(--text-muted)] leading-relaxed">
          <div className="bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--border)] space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Unidade especializada em acesso físico
            </h2>
            <p>
              A <strong className="text-white">Controle de Acesso Curitiba</strong> atende empresas, condomínios, indústrias, clínicas, escolas, academias, estacionamentos e portas de vidro em Curitiba e Região Metropolitana. Demandas residenciais individuais (casas e apartamentos) são atendidas pelo site principal da{' '}
              <a
                href={siteConfig.parentCompany.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-semibold hover:underline"
              >
                Intelsecsul
              </a>
              .
            </p>
            <p>
              Enquanto a{' '}
              <a
                href={siteConfig.parentCompany.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>{siteConfig.parentCompany.name}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>{' '}
              e a{' '}
              <a
                href={siteConfig.parentCompany.cftvSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>CFTV Curitiba</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>{' '}
              também atendem câmeras, alarmes e cerca elétrica, esta unidade concentra foco em{' '}
              <strong className="text-white">
                instalação de controle de acesso, fechadura eletrônica e interfone/vídeo porteiro, além de conserto e manutenção de interfone, catraca e cancela
              </strong>
              , incluindo atendimento a estacionamentos e locação sob consulta.
            </p>
            <p>
              Instalamos e prestamos manutenção em equipamentos de diversas marcas do mercado, incluindo equipamentos Intelbras, atuando de forma independente para especificar a opção mais adequada a cada imóvel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] space-y-2.5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Nossa abordagem técnica</span>
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                Dimensionar portas, catracas e cancelas de forma compatível com o fluxo real de usuários, priorizando praticidade para moradores e colaboradores e suporte técnico próximo após a instalação.
              </p>
            </div>

            <div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] space-y-2.5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Transparência em cada projeto</span>
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                Especificações claras sobre vantagens e limitações de cada tecnologia, orientações sobre LGPD e orçamento detalhado apresentado após o diagnóstico técnico presencial.
              </p>
            </div>
          </div>

          <div className="bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--border)] space-y-3">
            <h3 className="text-base font-bold text-white">
              Dados institucionais
            </h3>
            <div className="space-y-2 text-sm text-[var(--text-muted)]">
              <p><strong className="text-white">Unidade:</strong> {siteConfig.name}</p>
              <p><strong className="text-white">Vinculação:</strong> {siteConfig.brandSignature}</p>
              <p><strong className="text-white">Telefone e WhatsApp:</strong> {siteConfig.phone}</p>
              <p><strong className="text-white">Atendimento:</strong> {siteConfig.openingHours}</p>
              <p><strong className="text-white">Região de atuação:</strong> Curitiba e 10 municípios da Região Metropolitana</p>
              {isFieldFilled(siteConfig.cnpj) && (
                <p><strong className="text-white">CNPJ:</strong> {siteConfig.cnpj}</p>
              )}
              {isFieldFilled(siteConfig.experienceYears) && (
                <p><strong className="text-white">Experiência de mercado:</strong> {siteConfig.experienceYears}</p>
              )}
              {isFieldFilled(siteConfig.clientsCount) && (
                <p><strong className="text-white">Clientes atendidos:</strong> {siteConfig.clientsCount}</p>
              )}
              {isFieldFilled(siteConfig.certifications) && (
                <p><strong className="text-white">Certificações técnicas:</strong> {siteConfig.certifications}</p>
              )}
              {isFieldFilled(siteConfig.brandPartnerships) && (
                <p><strong className="text-white">Marcas com as quais trabalha:</strong> {siteConfig.brandPartnerships}</p>
              )}
            </div>
          </div>

          <div className="text-center pt-4">
            <a
              href={whatsappLink('contato através da página Sobre Nós')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('sobre nós', '/sobre/')}
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-7 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-base transition-colors shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Falar com nossa equipe no WhatsApp</span>
            </a>
          </div>

          <ComplianceNotices showIntelbras showLgpd />
        </div>
      </section>
    </Layout>
  );
}
