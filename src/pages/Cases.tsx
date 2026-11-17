import { Link } from 'react-router-dom';
import { Building2, Factory, Stethoscope, ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function CasesPage() {
  const realCasesData = '[[PREENCHER: cases reais com autorização de clientes]]';

  return (
    <Layout whatsappContext="tipos de projetos e cases de controle de acesso">
      <SEOHead
        title="Projetos e Aplicações | Controle de Acesso Curitiba"
        description="Conheça aplicações e estruturas de projetos de controle de acesso em condomínios residenciais, comerciais e indústrias em Curitiba e RMC. Saiba mais!"
        canonicalPath="/cases/"
      />

      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-10 sm:pb-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Cases e Projetos', url: `${siteConfig.domain}/cases/` },
            ]}
          />
          <header className="space-y-3 mt-4">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Arquiteturas Aplicadas
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tipos de Projetos e Estruturas Atendidas
            </h1>
            <p className="text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
              Conheça os cenários típicos atendidos em Curitiba e Região Metropolitana, os desafios de segurança física mais frequentes e as combinações de equipamentos utilizadas.
            </p>
          </header>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-5">
          {/* Tipo 1 */}
          <div className="bg-[var(--surface)] p-6 sm:p-7 rounded-2xl border border-[var(--border)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              <Building2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Condomínios Residenciais Verticais e Horizontais</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Clausuras de pedestres com intertravamento e acesso veicular com tag UHF
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <strong className="text-white">Desafio típico:</strong> Portões de pedestres ficando entreabertos, circulação durante entregas de encomendas e lentidão na garagem com controles tradicionais.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <strong className="text-white">Estrutura indicada:</strong> Eclusa de pedestres com fechaduras eletromagnéticas intertravadas, leitor de reconhecimento facial na portaria social e cancelas acionadas por tags veiculares UHF no para-brisa.
            </p>
            <div className="pt-2">
              <Link
                to="/segmentos/condominios-residenciais/"
                className="text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Conhecer arquitetura para condomínios residenciais</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Tipo 2 */}
          <div className="bg-[var(--surface)] p-6 sm:p-7 rounded-2xl border border-[var(--border)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              <Factory className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Indústrias, Fábricas e Complexos Logísticos na RMC</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Torniquetes para troca de turno e cancelas para controle de frotas
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <strong className="text-white">Desafio típico:</strong> Grandes grupos de colaboradores entrando no mesmo horário, controle perimetral de áreas produtivas e organização de caminhões nos pátios.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <strong className="text-white">Estrutura indicada:</strong> Torniquetes de altura total em áreas externas ou catracas pedestal com biometria ou cartão RFID, somados a cancelas automáticas com laço indutivo magnético na guarita de carga.
            </p>
            <div className="pt-2">
              <Link
                to="/segmentos/industrias/"
                className="text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Conhecer arquitetura para indústrias e galpões</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Tipo 3 */}
          <div className="bg-[var(--surface)] p-6 sm:p-7 rounded-2xl border border-[var(--border)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              <Building2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Edifícios Comerciais e Escritórios Corporativos</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Catracas em aço inoxidável na recepção e restrição de salas internas
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <strong className="text-white">Desafio típico:</strong> Conciliar recepção organizada de visitantes com controle de acesso a salas de TI, arquivos e setores administrativos.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <strong className="text-white">Estrutura indicada:</strong> Catracas com braço antipânico na recepção combinadas a leitores biométricos ou RFID com fechaduras eletrônicas e eletromagnéticas em portas de vidro ou madeira nas salas restritas, além de controle de estacionamento por tag ou cancela.
            </p>
            <div className="pt-2">
              <Link
                to="/segmentos/condominios-comerciais/"
                className="text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Conhecer arquitetura para condomínios comerciais</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Tipo 4 */}
          <div className="bg-[var(--surface)] p-6 sm:p-7 rounded-2xl border border-[var(--border)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              <Stethoscope className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Clínicas Médicas e Estabelecimentos de Saúde</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Acesso sem toque físico (touchless) para áreas restritas e farmácias clínicas
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <strong className="text-white">Desafio típico:</strong> Restringir o acesso a estoques de medicamentos e salas de procedimento sem exigir contato manual em teclados ou maçanetas.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <strong className="text-white">Estrutura indicada:</strong> Terminais de reconhecimento facial combinados a botoeiras de saída sem toque e fechaduras eletroímã silenciosas integradas às rotas de emergência.
            </p>
            <div className="pt-2">
              <Link
                to="/segmentos/clinicas-e-hospitais/"
                className="text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Conhecer arquitetura para clínicas e saúde</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {isFieldFilled(realCasesData) ? (
            <div className="mt-8 bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] space-y-3">
              <h3 className="text-lg font-bold text-white">Projetos em destaque</h3>
              <p className="text-sm text-[var(--text-muted)]">{realCasesData}</p>
            </div>
          ) : null}

          <div className="mt-10 text-center p-8 bg-hero-gradient rounded-2xl border border-[var(--border)] space-y-4">
            <h3 className="text-xl font-bold text-white">
              Deseja avaliar a estrutura de controle de acesso do seu imóvel?
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed">
              Realizamos vistoria presencial em Curitiba e Região Metropolitana para levantamento de vãos, infraestrutura e proposta sem custo.
            </p>
            <a
              href={whatsappLink('avaliação técnica de projeto')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('cases cta', '/cases/')}
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-7 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-bold text-base transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Solicitar avaliação no WhatsApp</span>
            </a>
          </div>

          <ComplianceNotices showLgpd />
        </div>
      </section>
    </Layout>
  );
}
