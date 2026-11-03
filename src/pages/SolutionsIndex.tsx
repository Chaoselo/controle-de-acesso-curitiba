import { Link } from 'react-router-dom';
import { solucoesList } from '../content/solucoes';
import { siteConfig } from '../config/site';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { ArrowRight, MessageSquare, HelpCircle, ShieldCheck } from 'lucide-react';

export default function SolutionsIndex() {
  const getFirstSentence = (text: string) => {
    const parts = text.split('. ');
    return parts[0].endsWith('.') ? parts[0] : `${parts[0]}.`;
  };

  const decisionQuestions = [
    {
      question: 'Precisa de passagem rápida sem nenhum contato físico?',
      recommendation: 'Reconhecimento Facial Touchless',
      slug: 'reconhecimento-facial',
      detail: 'Ideal para condomínios modernos, portarias remotas e clínicas com alto rigor sanitário.'
    },
    {
      question: 'Busca eliminar cópia clandestina de chaves com o melhor custo-benefício?',
      recommendation: 'Controle Biométrico Digital',
      slug: 'biometria',
      detail: 'Tecnologia consolidada com identificação intransferível para moradores e equipes.'
    },
    {
      question: 'Quer crachás funcionais para colaboradores e prestadores temporários?',
      recommendation: 'Cartão e Tag RFID',
      slug: 'cartao-e-tag-rfid',
      detail: 'Credenciais de baixo custo unitário, fácil revogação e integração com ponto eletrônico.'
    },
    {
      question: 'Necessita controlar fluxo intenso de pedestres garantindo passagem individual?',
      recommendation: 'Catracas de Acesso',
      slug: 'catracas',
      detail: 'Retenção física mecânica em aço inox que impede a carona não autorizada na recepção.'
    },
    {
      question: 'Deseja agilizar a entrada e saída de veículos na garagem do condomínio?',
      recommendation: 'Cancelas e Acesso Veicular',
      slug: 'cancelas-e-acesso-veicular',
      detail: 'Abertura rápida com tags veiculares de para-brisa e proteção com laço indutivo.'
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
        description="Conheça as soluções de controle de acesso em Curitiba e Região Metropolitana. Biometria, facial, catracas, tags e cancelas para condomínios e empresas."
        canonicalPath="/solucoes/"
        schemaData={[itemListSchema]}
      />

      <Breadcrumbs
        items={[
          { name: 'Soluções', url: `${siteConfig.domain}/solucoes/` }
        ]}
      />

      <div className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <header className="mb-12 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-3">
              <span>Catálogo Técnico Especializado</span>
              <span aria-hidden="true">·</span>
              <span>Curitiba e RMC</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Soluções de Controle de Acesso em Curitiba
            </h1>
            
            <div className="mt-6 text-base sm:text-lg text-slate-700 space-y-4">
              <p>
                A escolha da tecnologia de controle de acesso ideal para o seu imóvel depende do volume diário de circulação, do perfil de pedestres e veículos, das exigências de segurança de cada setor e da infraestrutura física do vão. Em Curitiba e nos municípios da Região Metropolitana, condomínios residenciais, centros empresariais, clínicas e indústrias necessitam de barreiras confiáveis que aliem rapidez na liberação com registros auditáveis de cada evento.
              </p>
              <p>
                A equipe da Controle de Acesso Curitiba oferece consultoria técnica no local, projeto personalizado de cabeamento estruturado, instalação profissional com componentes de retenção fail-safe e contratos de manutenção preventiva contínua. Explore abaixo cada uma das soluções especializadas e descubra o sistema mais adequado para as necessidades operacionais e orçamentárias do seu empreendimento.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink('orçamento pelo catálogo de soluções')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-6 py-3.5 rounded-lg shadow-sm transition"
              >
                <MessageSquare className="w-5 h-5 fill-white text-transparent" />
                <span>Solicitar Consultoria no WhatsApp</span>
              </a>
              <span className="text-xs text-slate-500">
                Atendimento direto com engenheiro ou técnico em Curitiba
              </span>
            </div>
          </header>

          {/* Grid de Soluções */}
          <section aria-labelledby="solucoes-grid-heading" className="mb-16">
            <h2 id="solucoes-grid-heading" className="sr-only">
              Lista de Soluções Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solucoesList.map((solucao) => (
                <article
                  key={solucao.slug}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="aspect-video w-full bg-slate-100 overflow-hidden">
                    <img
                      src={solucao.image.src}
                      alt={solucao.image.alt}
                      width={solucao.image.width}
                      height={solucao.image.height}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 hover:text-sky-700 transition">
                        <Link to={`/solucoes/${solucao.slug}/`}>
                          {solucao.title}
                        </Link>
                      </h2>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {getFirstSentence(solucao.directAnswer)}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Link
                        to={`/solucoes/${solucao.slug}/`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 transition"
                      >
                        <span>Ver como funciona</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Seção Como Escolher */}
          <section
            aria-labelledby="como-escolher-heading"
            className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-7 h-7 text-sky-600 shrink-0" />
              <h2 id="como-escolher-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
                Como escolher a solução de controle de acesso
              </h2>
            </div>
            <p className="text-slate-700 text-sm sm:text-base mb-8 max-w-3xl">
              Cada tipo de empreendimento apresenta prioridades operacionais distintas. Utilize as perguntas abaixo como guia rápido para identificar a solução mais indicada para a sua necessidade:
            </p>

            <div className="space-y-6">
              {decisionQuestions.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                      {item.question}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      to={`/solucoes/${item.slug}/`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-petroleum hover:bg-slate-800 px-4 py-2 rounded-md transition"
                    >
                      <span>Conhecer {item.recommendation}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Todas as soluções contam com suporte e assistência técnica em Curitiba e Região Metropolitana.</span>
              </div>
              <a
                href={whatsappLink('dúvida sobre escolha de solução')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
              >
                Falar com um especialista técnico →
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
