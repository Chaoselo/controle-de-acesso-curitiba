import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig, isFieldFilled } from '../config/site';

export function PrivacidadePage() {
  const dpoContact = '[[PREENCHER: contato do encarregado de dados (DPO)]]';

  return (
    <Layout whatsappContext="dúvida sobre privacidade e LGPD">
      <SEOHead
        title="Política de Privacidade e LGPD | Controle de Acesso Curitiba"
        description="Termos de privacidade, tratamento de dados de contato e conformidade com a LGPD em projetos de controle de acesso biométrico em Curitiba e RMC. Confira!"
        canonicalPath="/politica-de-privacidade/"
      />

      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-10 sm:pb-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Política de Privacidade', url: `${siteConfig.domain}/politica-de-privacidade/` },
            ]}
          />
          <header className="space-y-3 mt-4">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Privacidade e Proteção de Dados
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Política de Privacidade e LGPD
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-muted)]">
              Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)
            </p>
          </header>
        </div>
      </section>

      <article className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto bg-[var(--surface)] p-6 sm:p-10 rounded-2xl border border-[var(--border)] space-y-8 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <div className="p-4 bg-[var(--bg)] border border-[var(--accent)]/30 rounded-xl text-[var(--text-muted)] text-sm leading-relaxed">
            <strong className="text-white">Aviso informativo:</strong> Este documento esclarece as diretrizes de privacidade adotadas neste site e orientações gerais aplicadas aos sistemas instalados.
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Identificação do responsável</h2>
            <p>
              Este site é mantido pela <strong className="text-white">{siteConfig.name}</strong>, unidade especializada da{' '}
              <strong className="text-white">{siteConfig.parentCompany.name}</strong> (CNPJ {siteConfig.cnpj}), atuante em Curitiba e Região Metropolitana (PR).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Dados tratados no website</h2>
            <p>
              O site funciona como portal informativo estático sem armazenamento de bancos de dados de cadastros no servidor web. As informações enviadas voluntariamente ocorrem apenas por iniciativa do visitante:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">Solicitações de orçamento via WhatsApp:</strong> Os dados selecionados na página de orçamento são montados no navegador e enviados voluntariamente pelo visitante para atendimento comercial e técnico.
              </li>
              <li>
                <strong className="text-white">Cookies e análise estatística:</strong> O Google Analytics 4 (GA4) permanece desativado por padrão (Consent Mode) e somente ativa a medição de visitas caso o visitante clique em aceitar no aviso de cookies.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Cookies e Google Analytics</h2>
            <p>
              Utilizamos o Google Analytics 4 (GA4) exclusivamente mediante autorização prévia para compreender o uso das páginas e melhorar nosso atendimento. Você pode aceitar ou recusar o uso de cookies estatísticos no aviso inicial e alterar sua escolha a qualquer momento pelo botão "Preferências de cookies" no rodapé do site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Dados biométricos, rosto e placas em controle de acesso</h2>
            <p>
              Nos termos da LGPD, biometria (impressão digital), reconhecimento facial (rosto) e leitura de placas de veículos envolvem dados pessoais — sendo os biométricos classificados como <strong className="text-white">dados pessoais sensíveis</strong>. A adequação do ambiente depende da governança do condomínio ou empresa contratante, incluindo:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Conversão em templates matemáticos quando suportado pelos equipamentos selecionados;</li>
              <li>Disponibilização de credencial alternativa (como cartão RFID ou senha) para quem optar por não fornecer biometria;</li>
              <li>Definição de finalidade clara, controle de acesso aos cadastros e períodos de retenção pelo controlador local.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Direitos do titular e canal de contato</h2>
            <p>
              Para solicitações ou dúvidas sobre privacidade e tratamento de dados relacionados a este site, entre em contato pelo canal de atendimento:
            </p>
            <div className="p-5 bg-[var(--bg)] border border-[var(--border)] rounded-xl space-y-1.5 text-sm">
              <p><strong className="text-white">Telefone / WhatsApp:</strong> {siteConfig.phone}</p>
              <p>
                <strong className="text-white">Empresa:</strong> {siteConfig.parentCompany.name} (
                <a href={siteConfig.parentCompany.site} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                  intelsecsul.com.br
                </a>
                )
              </p>
              {isFieldFilled(dpoContact) && (
                <p><strong className="text-white">Encarregado de Dados (DPO):</strong> {dpoContact}</p>
              )}
            </div>
          </section>

          <p className="pt-4 border-t border-[var(--border)] text-xs sm:text-sm text-[var(--text-soft)]">
            Este texto é informativo e não substitui a orientação de um profissional jurídico.
          </p>
        </div>
      </article>
    </Layout>
  );
}
