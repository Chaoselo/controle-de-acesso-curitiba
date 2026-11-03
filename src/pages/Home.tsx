import { Link } from 'react-router-dom';
import { 
  Fingerprint, 
  ScanFace, 
  CreditCard, 
  ShieldAlert, 
  DoorClosed, 
  Building2, 
  Building, 
  Factory, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  HelpCircle,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { siteConfig } from '../config/site';
import { solucoesList } from '../content/solucoes';
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
    <Layout whatsappContext={whatsappContext}>
      <SEOHead
        title="Controle de Acesso em Curitiba | Instalação e Manutenção"
        description="Especialistas em controle de acesso em Curitiba e RMC. Instalação e manutenção de catracas, biometria, facial e cancelas para condomínios. Peça orçamento!"
        canonicalPath="/"
        ogImage="/images/hero-controle-acesso-curitiba.webp"
        schemaData={generateFAQSchema(generalFaqList)}
      />

      {/* Hero Section */}
      <section className="relative bg-petroleum text-white pt-12 pb-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Texto do Hero */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-sky-300">
                <span>{siteConfig.brandSignature}</span>
                <span aria-hidden="true">·</span>
                <span>Curitiba e Região Metropolitana</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Controle de Acesso em Curitiba: Segurança e Gestão de Portarias
              </h1>

              {/* Resposta direta para snippet */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Fornecemos projetos, instalação e manutenção especializada de controle de acesso para condomínios residenciais, centros empresariais e indústrias em Curitiba e RMC. Substitua chaves e crachás manuais por tecnologias modernas como biometria digital, reconhecimento facial, catracas de pedestres e cancelas veiculares com suporte técnico local.
              </p>

              {/* Ações principais */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappLink(whatsappContext)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppHero}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-semibold text-sm transition-all shadow-md"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-transparent" aria-hidden="true" />
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>

                <Link
                  to="/solucoes/biometria/"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-md font-medium text-sm transition-colors"
                >
                  <span>Conhecer Soluções</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" aria-hidden="true" />
                </Link>
              </div>

              {/* Diferenciais técnicos objetivos (sem inventar superlativos ou fake stats) */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Visita técnica em Curitiba e RMC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Equipamentos homologados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Suporte e manutenção ágil</span>
                </div>
              </div>

            </div>

            {/* Imagem da Dobra com fetchpriority="high" */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <img
                  src="/images/hero-controle-acesso-curitiba.webp"
                  alt="Instalação de controle de acesso biométrico e portaria eletrônica em Curitiba"
                  width={1200}
                  height={800}
                  fetchPriority="high"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs text-slate-200 font-medium">
                    Infraestrutura de controle de acesso e segurança eletrônica integrada
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid de Principais Soluções */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-sky-600 tracking-wider uppercase block mb-1">
            Tecnologia Aplicada
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Soluções Completas de Controle de Acesso Físico
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Equipamentos robustos para gerenciar e registrar cada entrada e saída com confiabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solucoesList.slice(0, 6).map((solucao) => (
            <article 
              key={solucao.slug}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                  {solucao.slug === 'biometria' && <Fingerprint className="w-5 h-5" />}
                  {solucao.slug === 'reconhecimento-facial' && <ScanFace className="w-5 h-5" />}
                  {solucao.slug === 'cartao-e-tag-rfid' && <CreditCard className="w-5 h-5" />}
                  {solucao.slug === 'catracas' && <DoorClosed className="w-5 h-5" />}
                  {solucao.slug === 'cancelas-e-acesso-veicular' && <ShieldAlert className="w-5 h-5" />}
                  {solucao.slug === 'fechaduras-eletromagneticas' && <DoorClosed className="w-5 h-5" />}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  <Link to={`/solucoes/${solucao.slug}/`} className="hover:text-sky-600 transition-colors">
                    {solucao.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {solucao.directAnswer}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/solucoes/${solucao.slug}/`}
                  className="text-xs font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                >
                  <span>Ver detalhes técnicos</span>
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>

                <a
                  href={whatsappLink(solucao.whatsappContext)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`card home ${solucao.slug}`, '/')}
                  className="text-xs font-medium text-emerald-600 hover:text-emerald-700"
                  title="Orçar esta solução no WhatsApp"
                >
                  Orçar
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/solucoes/biometria/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 px-4 py-2 rounded-md"
          >
            <span>Ver todas as soluções (senhas, software, interfonia, fechaduras)</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Segmentos Atendidos */}
      <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-sky-700 tracking-wider uppercase block mb-1">
              Setores & Aplicações
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Projetos Dimensionados para Cada Necessidade
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {segmentosList.slice(0, 4).map((segmento) => (
              <div 
                key={segmento.slug}
                className="bg-white border border-slate-200 rounded-md p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    <Link to={`/segmentos/${segmento.slug}/`} className="hover:text-sky-600 transition-colors">
                      {segmento.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {segmento.directAnswer}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    to={`/segmentos/${segmento.slug}/`}
                    className="text-xs font-medium text-sky-600 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver projeto do segmento</span>
                    <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cidades e Região Atendida */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-semibold text-sky-600 tracking-wider uppercase block mb-1">
              Atendimento Regional
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Curitiba e 10 Municípios da Região Metropolitana
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Nossa equipe técnica atua diretamente em Curitiba e nas principais cidades do entorno com logística ágil para vistorias e assistência técnica.
            </p>
          </div>
          <Link
            to="/cidades/curitiba/"
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 whitespace-nowrap inline-flex items-center gap-1"
          >
            <span>Ver cidades atendidas</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {siteConfig.citiesServed.map((city) => (
            <Link
              key={city.slug}
              to={`/cidades/${city.slug}/`}
              className="p-3.5 bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 rounded text-center transition-all group"
            >
              <MapPin className="w-4 h-4 text-slate-400 group-hover:text-sky-600 mx-auto mb-1.5 transition-colors" aria-hidden="true" />
              <span className="text-xs font-medium text-slate-800 group-hover:text-sky-900 block truncate">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Geral da Home */}
      <section className="bg-white border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-sky-600 tracking-wider uppercase block mb-1">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Perguntas Frequentes sobre Controle de Acesso
            </h2>
          </div>

          <div className="space-y-4">
            {generalFaqList.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 border border-slate-200 rounded-lg p-5 open:bg-white open:border-slate-300 transition-colors"
              >
                <summary className="font-semibold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                    ▼
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco de Chamada Final para WhatsApp */}
      <section className="bg-petroleum text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Precisa de um orçamento de controle de acesso para seu imóvel?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Fale com nossa equipe técnica pelo WhatsApp. Analisamos sua necessidade, o número de usuários e agendamos vistoria no local se necessário.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLink('orçamento geral na página inicial')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppCta}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-semibold text-sm transition-all shadow-md"
            >
              <MessageSquare className="w-5 h-5 fill-white text-transparent" aria-hidden="true" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
            <Link
              to="/orcamento/"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-md font-medium text-sm transition-colors"
            >
              <span>Formulário de Orçamento</span>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
