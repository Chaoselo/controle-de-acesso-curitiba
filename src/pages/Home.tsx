import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Star,
  ExternalLink,
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PhotoCard } from '../components/ui/PhotoCard';
import { TrustChip } from '../components/ui/TrustChip';
import { StepsSection } from '../components/ui/StepsSection';
import { FaqAccordion } from '../components/ui/FaqAccordion';
import { getCatalogIcon } from '../components/ui/SolutionIcon';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { siteConfig } from '../config/site';
import { solucoesList } from '../content/solucoes';
import { servicosList } from '../content/servicos';
import { segmentosList } from '../content/segmentos';
import { generalFaqList } from '../content/faq';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { generateFAQSchema } from '../lib/schema';

export function HomePage() {
  const whatsappContext = 'controle de acesso para empresa ou condomínio em Curitiba';

  const handleWhatsAppHero = () => {
    trackWhatsAppClick('hero home', '/');
  };

  const handleWhatsAppCta = () => {
    trackWhatsAppClick('cta final home', '/');
  };

  return (
    <Layout whatsappContext={whatsappContext} hideOutrosServicos>
      <SEOHead
        title="Controle de Acesso em Curitiba | Instalação e Manutenção"
        description="Instalação e manutenção de controle de acesso em Curitiba: catracas, biometria, facial, cancelas, fechaduras e interfone. Peça orçamento no WhatsApp!"
        canonicalPath="/"
        ogImage={siteConfig.defaultOgImage}
        schemaData={generateFAQSchema(generalFaqList.slice(0, 7))}
      />

      {/* 1. Hero Section (sem imagem hero, alinhado à família visual Intelsecsul / CFTV Curitiba) */}
      <section className="bg-hero-gradient border-b border-[var(--border)] py-14 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[var(--surface)]/80 border border-[var(--border)] text-xs font-semibold text-[var(--accent)] tracking-wide mb-6">
            <span>{siteConfig.brandSignature}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Controle de acesso em Curitiba e Região
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
            Instalação de controle de acesso, fechadura eletrônica (inclusive em portas de vidro) e interfone/vídeo porteiro, além de conserto e manutenção de interfone, catraca e cancela para empresas, condomínios e estacionamentos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-lg sm:max-w-none mx-auto">
            <a
              href={whatsappLink(whatsappContext)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHero}
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-7 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-base transition-colors shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Solicitar orçamento pelo WhatsApp</span>
            </a>

            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-6 bg-[var(--surface)] hover:bg-[#172231] text-white border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-xl font-semibold text-base transition-colors"
            >
              <span>Ver soluções</span>
              <ArrowRight className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Hairline divider + 4 selos oficiais */}
          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              {siteConfig.trustBadges.map((badge) => (
                <TrustChip key={badge} label={badge} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explicação direta: O que é um sistema de controle de acesso? */}
      <section aria-labelledby="o-que-e-acesso-heading" className="bg-[var(--bg-deep)] py-14 sm:py-16 px-4 border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto space-y-5">
          <SectionHeader
            headingId="o-que-e-acesso-heading"
            kicker="Conceito e funcionamento"
            title="O que é um sistema de controle de acesso?"
          />

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 space-y-4 text-base text-[var(--text-muted)] leading-relaxed">
            <p>
              Um sistema de controle de acesso combina equipamentos eletrônicos e bloqueios físicos para gerenciar quem pode entrar ou circular em cada ambiente de um imóvel. Seu funcionamento apoia-se em três pilares práticos: a <strong className="text-white font-semibold">identificação da pessoa ou do veículo</strong> (por biometria digital, reconhecimento facial, cartão RFID, senha numérica ou tag veicular), o acionamento de uma <strong className="text-white font-semibold">trava ou barreira física</strong> (fechadura eletrônica, eletroímã em portas convencionais ou de vidro, catraca de pedestres ou cancela automática) e o <strong className="text-white font-semibold">registro de acessos</strong> com data, horário e ponto de passagem, observando os cuidados da LGPD sempre que houver tratamento de dados pessoais ou biométricos.
            </p>
            <p>
              Na rotina de empresas e condomínios em Curitiba, o sistema reduz o risco de cópias clandestinas de chaves mecânicas e permite bloquear ou atualizar permissões em segundos quando há troca de colaboradores ou moradores. Entre os exemplos mais aplicados estão a{' '}
              <Link to="/solucoes/fechadura-eletronica/" className="text-[var(--accent)] hover:underline font-medium">
                fechadura eletrônica em escritórios, clínicas, salas restritas e portas de vidro
              </Link>
              , catracas instaladas em recepções corporativas, escolas e academias, portarias prediais com vídeo porteiro e leitores faciais, além de{' '}
              <Link to="/segmentos/estacionamentos/" className="text-[var(--accent)] hover:underline font-medium">
                estacionamentos comerciais e condomínios com cancelas automáticas
              </Link>{' '}
              integradas a{' '}
              <Link to="/solucoes/tag-veicular/" className="text-[var(--accent)] hover:underline font-medium">
                tag veicular UHF no para-brisa
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 2. Serviços de Controle de Acesso */}
      <section aria-labelledby="servicos-home-heading" className="bg-[var(--bg)] py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="servicos-home-heading"
            kicker="Atendimento completo"
            title="Serviços de controle de acesso"
            subtitle="Do levantamento técnico no imóvel à manutenção contínua, conte com equipe própria em Curitiba e Região Metropolitana."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicosList.map((servico) => (
              <PhotoCard
                key={servico.slug}
                to={`/servicos/${servico.slug}/`}
                title={servico.title}
                description={servico.directAnswer}
                imageSrc={servico.image.src}
                imageAlt={servico.image.alt}
                icon={getCatalogIcon(servico.slug)}
                ctaLabel="Ver detalhes do serviço"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Soluções de Controle de Acesso */}
      <section
        id="solucoes"
        aria-labelledby="solucoes-home-heading"
        className="bg-[var(--bg-deep)] py-16 sm:py-20 px-4 border-t border-[var(--border)]"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="solucoes-home-heading"
            kicker="Equipamentos e tecnologias"
            title="Soluções de controle de acesso"
            subtitle="Escolha a tecnologia mais adequada ao fluxo de pedestres e veículos de cada portaria ou setor."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solucoesList.map((solucao) => (
              <PhotoCard
                key={solucao.slug}
                to={`/solucoes/${solucao.slug}/`}
                title={solucao.title}
                description={solucao.directAnswer}
                imageSrc={solucao.image.src}
                imageAlt={solucao.image.alt}
                icon={getCatalogIcon(solucao.slug)}
                ctaLabel="Ver detalhes e orçamento"
                compact
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/solucoes/"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-7 bg-[var(--surface)] hover:bg-[#172231] border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-xl text-sm sm:text-base font-semibold text-white transition-colors"
            >
              <span>Ver todas as soluções</span>
              <ArrowRight className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Controle de acesso para cada tipo de local */}
      <section aria-labelledby="segmentos-home-heading" className="bg-[var(--bg)] py-16 sm:py-20 px-4 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="segmentos-home-heading"
            kicker="Aplicações por ambiente"
            title="Controle de acesso para cada tipo de local"
            subtitle="Projetos dimensionados para empresas, condomínios, indústrias, clínicas, escolas, academias, estacionamentos e portas de vidro. Casas e apartamentos individuais são atendidos em intelsecsul.com.br."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {segmentosList.map((segmento) => (
              <PhotoCard
                key={segmento.slug}
                to={`/segmentos/${segmento.slug}/`}
                title={segmento.title}
                description={segmento.directAnswer}
                imageSrc={segmento.image.src}
                imageAlt={segmento.image.alt}
                icon={getCatalogIcon(segmento.slug)}
                ctaLabel="Ver projeto recomendado"
                compact
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Como funciona (4 passos) */}
      <StepsSection background="deep" />

      {/* 6. Cidades atendidas (11 pílulas) */}
      <section aria-labelledby="cidades-home-heading" className="bg-[var(--bg)] py-16 sm:py-20 px-4 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headingId="cidades-home-heading"
            kicker="Cobertura regional"
            title="Atendemos Curitiba e Região Metropolitana"
            subtitle="Equipe técnica própria para vistorias, instalações e manutenção presencial em Curitiba e em mais 10 municípios da Grande Curitiba."
          />

          <div className="flex flex-wrap gap-3">
            {siteConfig.citiesServed.map((city) => (
              <Link
                key={city.slug}
                to={`/cidades/${city.slug}/`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/60 rounded-full text-sm font-medium text-white hover:text-[var(--accent)] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/cidades/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              <span>Ver todas as cidades atendidas e detalhes de logística</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Perguntas Frequentes (7 primeiras) */}
      <section aria-labelledby="faq-home-heading" className="bg-[var(--bg-deep)] py-16 sm:py-20 px-4 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            headingId="faq-home-heading"
            kicker="Dúvidas comuns"
            title="Perguntas frequentes"
            subtitle="Esclarecimentos diretos sobre instalação, funcionamento sem energia, LGPD e manutenção."
          />

          <FaqAccordion items={generalFaqList.slice(0, 7)} />

          <div className="mt-8 text-center">
            <Link
              to="/faq/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              <span>Ver todas as perguntas frequentes</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA Final + Avaliação Google + Links do grupo */}
      <section aria-labelledby="cta-final-home-heading" className="bg-hero-gradient py-16 sm:py-20 px-4 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <a
            href={siteConfig.parentCompany.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--surface)]/90 border border-[var(--border)] hover:border-[var(--accent)]/60 text-xs sm:text-sm font-semibold text-white transition-colors"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" aria-hidden="true" />
            <span>Avaliação 5.0 da Intelsecsul no Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[var(--text-soft)]" aria-hidden="true" />
          </a>

          <h2 id="cta-final-home-heading" className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Precisa de um projeto de controle de acesso para seu imóvel?
          </h2>

          <p className="text-base text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Converse com nossa equipe técnica pelo WhatsApp para avaliação do local, definição do orçamento após o diagnóstico e agendamento de vistoria sem custo.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-lg sm:max-w-none mx-auto">
            <a
              href={whatsappLink(whatsappContext)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppCta}
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-7 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-base transition-colors shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Solicitar orçamento pelo WhatsApp</span>
            </a>

            <Link
              to="/orcamento/"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-6 bg-[var(--surface)] hover:bg-[#172231] text-white border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-xl font-semibold text-base transition-colors"
            >
              <span>Formulário de orçamento</span>
            </Link>
          </div>

          <p className="pt-4 text-sm text-[var(--text-muted)]">
            Precisa também de câmeras, alarme ou cerca elétrica? Conheça a{' '}
            <a
              href={siteConfig.parentCompany.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline font-medium"
            >
              Intelsecsul
            </a>{' '}
            e a{' '}
            <a
              href={siteConfig.parentCompany.cftvSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline font-medium"
            >
              CFTV Curitiba
            </a>
            .
          </p>

          <ComplianceNotices showIntelbras showLgpd className="mt-6 text-left" />
        </div>
      </section>
    </Layout>
  );
}
