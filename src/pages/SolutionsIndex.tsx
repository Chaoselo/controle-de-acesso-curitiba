import { Link } from 'react-router-dom';
import { solucoesList } from '../content/solucoes';
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
import { ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';

export default function SolutionsIndex() {
  const getFirstSentence = (text: string) => {
    const parts = text.split('. ');
    return parts[0].endsWith('.') ? parts[0] : `${parts[0]}.`;
  };

  const decisionQuestions = [
    {
      question: 'Precisa de passagem rápida sem nenhum contato físico?',
      recommendation: 'Reconhecimento Facial',
      slug: 'reconhecimento-facial',
      detail: 'Indicado para condomínios, portarias e clínicas com busca por higienização e fluidez na entrada.'
    },
    {
      question: 'Busca eliminar cópia clandestina de chaves na portaria?',
      recommendation: 'Controle Biométrico',
      slug: 'biometria',
      detail: 'Tecnologia consolidada com identificação intransferível para moradores, colaboradores e áreas restritas.'
    },
    {
      question: 'Quer crachás funcionais para colaboradores e prestadores temporários?',
      recommendation: 'Cartão e Tag RFID',
      slug: 'cartao-e-tag-rfid',
      detail: 'Credenciais práticas com bloqueio rápido em caso de perda ou desligamento.'
    },
    {
      question: 'Necessita controlar fluxo intenso de pedestres com controle individual de passagem?',
      recommendation: 'Catracas de Acesso',
      slug: 'catracas',
      detail: 'Retenção física mecânica que organiza a entrada e saída em recepções corporativas, escolas, academias e empresas.'
    },
    {
      question: 'Deseja eliminar chaves em portas comerciais, salas técnicas ou portas de vidro?',
      recommendation: 'Fechadura Eletrônica',
      slug: 'fechadura-eletronica',
      detail: 'Fechaduras digitais com senha, biometria, cartão RFID ou eletroímã conforme o vão.'
    },
    {
      question: 'Deseja agilizar a entrada e saída de veículos sem parada na guarita ou com tag de para-brisa?',
      recommendation: 'Tag Veicular UHF',
      slug: 'tag-veicular',
      detail: 'Etiqueta veicular UHF integrada a cancelas automáticas e portões de garagem ou estacionamento.'
    }
  ];

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Soluções de Controle de Acesso em Curitiba',
    description: 'Tecnologias e sistemas de controle de acesso para condomínios, empresas e indústrias em Curitiba e Região Metropolitana.',
    numberOfItems: solucoesList.length,
    itemListElement: solucoesList.map((solucao, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: solucao.title,
      url: `${siteConfig.domain}/solucoes/${solucao.slug}/`
    }))
  };

  const handleWhatsAppAction = () => {
    trackWhatsAppClick('pagina catalogo solucoes', '/solucoes/');
  };

  return (
    <Layout whatsappContext="soluções de controle de acesso">
      <SEOHead
        title="Soluções de Controle de Acesso em Curitiba e Região"
        description="Conheça as soluções de controle de acesso em Curitiba: biometria, facial, fechadura eletrônica, tag veicular, cartão, catracas, cancelas e interfone."
        canonicalPath="/solucoes/"
        schemaData={[itemListSchema]}
      />

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Soluções', url: `${siteConfig.domain}/solucoes/` }
            ]}
          />

          <div className="mt-4 max-w-4xl space-y-5">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Catálogo Técnico Especializado · Curitiba e RMC
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Soluções de Controle de Acesso em Curitiba
            </h1>

            <div className="text-base text-[var(--text-muted)] space-y-3 leading-relaxed">
              <p>
                A escolha da tecnologia ideal para o seu imóvel depende do volume diário de circulação, do perfil de pedestres e veículos, das exigências de segurança de cada setor e da infraestrutura física do local.
              </p>
              <p>
                Nossa equipe técnica oferece vistoria sem custo, projeto personalizado, instalação com equipe própria e suporte após a instalação em Curitiba e Região Metropolitana.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink('orçamento pelo catálogo de soluções')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white font-semibold rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar orçamento no WhatsApp</span>
              </a>
              <span className="text-xs sm:text-sm text-[var(--text-soft)]">
                Atendimento direto com equipe técnica em Curitiba
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Soluções */}
      <section aria-labelledby="solucoes-grid-heading" className="bg-[var(--bg)] py-14 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="solucoes-grid-heading"
            kicker={`${solucoesList.length} linhas de soluções`}
            title="Tecnologias disponíveis para o seu imóvel"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solucoesList.map((solucao) => (
              <PhotoCard
                key={solucao.slug}
                to={`/solucoes/${solucao.slug}/`}
                title={solucao.title}
                description={getFirstSentence(solucao.directAnswer)}
                imageSrc={solucao.image.src}
                imageAlt={solucao.image.alt}
                icon={getCatalogIcon(solucao.slug)}
                ctaLabel="Ver como funciona"
                compact
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Como Escolher */}
      <section
        aria-labelledby="como-escolher-heading"
        className="bg-[var(--bg-deep)] py-14 sm:py-16 px-4 border-t border-[var(--border)]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-7 h-7 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <h2 id="como-escolher-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Como escolher a solução de controle de acesso
              </h2>
            </div>
            <p className="text-[var(--text-muted)] text-base mb-8 max-w-3xl">
              Cada imóvel possui necessidades operacionais distintas. Utilize os cenários abaixo como referência rápida:
            </p>

            <div className="space-y-4">
              {decisionQuestions.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {item.question}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {item.detail}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      to={`/solucoes/${item.slug}/`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#05060B] bg-[var(--accent)] hover:bg-[#38d0fc] px-4 py-2.5 rounded-xl transition-colors"
                    >
                      <span>Conhecer {item.recommendation}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <ShieldCheck className="w-5 h-5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>Suporte após a instalação em Curitiba e Região Metropolitana.</span>
              </div>
              <a
                href={whatsappLink('dúvida sobre escolha de solução')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="text-sm font-bold text-[var(--whatsapp)] hover:underline transition"
              >
                Falar com a equipe técnica no WhatsApp ›
              </a>
            </div>
          </div>

          <ComplianceNotices showLgpd className="mt-8" />
        </div>
      </section>
    </Layout>
  );
}
