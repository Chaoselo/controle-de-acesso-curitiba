import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  MessageSquare, 
  ShieldAlert, 
  Wrench, 
  Cpu, 
  HelpCircle,
  Building2,
  ChevronRight
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getSolutionBySlug } from '../content/solucoes';
import { getSegmentBySlug } from '../content/segmentos';
import { getCityBySlug } from '../content/cidades';
import { siteConfig } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { generateServiceSchema, generateFAQSchema } from '../lib/schema';

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solucao = slug ? getSolutionBySlug(slug) : undefined;

  if (!solucao) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsAppAction = () => {
    trackWhatsAppClick(`pagina solucao ${solucao.slug}`, `/solucoes/${solucao.slug}/`);
  };

  const schemas = [
    generateServiceSchema({
      name: solucao.title,
      description: solucao.metaDescription,
      url: `${siteConfig.domain}/solucoes/${solucao.slug}/`,
      serviceType: 'Controle de Acesso Físico'
    }),
    generateFAQSchema(solucao.faqs)
  ];

  const resolvedRelatedSolutions = (solucao.relatedSolutions || [])
    .map(sSlug => getSolutionBySlug(sSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const resolvedRelatedSegments = (solucao.relatedSegments || [])
    .map(segSlug => getSegmentBySlug(segSlug))
    .filter((seg): seg is NonNullable<typeof seg> => Boolean(seg));

  const resolvedRelatedCities = (solucao.relatedCities || [])
    .map(citySlug => getCityBySlug(citySlug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <Layout whatsappContext={solucao.whatsappContext}>
      <SEOHead
        title={solucao.seoTitle}
        description={solucao.metaDescription}
        canonicalPath={`/solucoes/${solucao.slug}/`}
        ogImage={solucao.image.src}
        schemaData={schemas}
      />

      <Breadcrumbs
        items={[
          { name: 'Soluções', url: `${siteConfig.domain}/solucoes/` },
          { name: solucao.title, url: `${siteConfig.domain}/solucoes/${solucao.slug}/` }
        ]}
      />

      {/* Header do Artigo / Solução */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <header className="max-w-4xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
            <span>Solução Técnica de Acesso</span>
            <span aria-hidden="true">·</span>
            <span>Curitiba e RMC</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {solucao.title}
          </h1>

          {/* Resposta direta (2 a 3 frases) em destaque */}
          <div className="p-4 sm:p-5 bg-sky-50/70 border border-sky-100 rounded-lg text-slate-800 text-sm sm:text-base leading-relaxed">
            <p className="font-normal">{solucao.directAnswer}</p>
          </div>

          {/* Botão de conversão prioritário pós-resposta */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(solucao.whatsappContext)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppAction}
              className="inline-flex items-center gap-2 px-5 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-semibold text-xs transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
              <span>Orçar {solucao.title} no WhatsApp</span>
            </a>
            <span className="text-xs text-slate-500">
              Atendimento com técnico especialista em Curitiba
            </span>
          </div>
        </header>

        {/* Imagem representativa com alt descritivo */}
        <div className="mb-12 rounded-lg overflow-hidden border border-slate-200 shadow-sm max-w-4xl">
          <img
            src={solucao.image.src}
            alt={solucao.image.alt}
            width={solucao.image.width}
            height={solucao.image.height}
            loading="lazy"
            className="w-full h-auto object-cover object-center max-h-[460px]"
          />
        </div>

        {/* Grid de Conteúdo Técnico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Coluna Principal de Texto (8 colunas) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Como Funciona */}
            <section aria-labelledby="como-funciona-heading" className="space-y-4">
              <h2 id="como-funciona-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Como Funciona a Tecnologia</span>
              </h2>
              <div className="space-y-3">
                {solucao.howItWorks.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-md">
                    <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded shrink-0">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Para Quem e Quando Escolher */}
            <section aria-labelledby="quando-escolher-heading" className="space-y-4">
              <h2 id="quando-escolher-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Para Quem e Quando Escolher Esta Solução</span>
              </h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
                {solucao.whenToChoose.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Vantagens e Limitações (Honesto) */}
            <section aria-labelledby="vantagens-limitacoes-heading" className="space-y-6">
              <h2 id="vantagens-limitacoes-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Vantagens e Limitações Práticas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Vantagens */}
                <div className="bg-white border border-slate-200 rounded-md p-5 space-y-3">
                  <h3 className="text-sm font-bold text-emerald-800 flex items-center gap-1.5 uppercase tracking-wider text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>Vantagens</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {solucao.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitações */}
                <div className="bg-white border border-slate-200 rounded-md p-5 space-y-3">
                  <h3 className="text-sm font-bold text-amber-800 flex items-center gap-1.5 uppercase tracking-wider text-xs">
                    <AlertCircle className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>Limitações a Considerar</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {solucao.limitations.map((lim, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Cuidados com a LGPD (se aplicável) */}
            {solucao.lgpdNote && (
              <section aria-labelledby="lgpd-heading" className="p-5 bg-slate-900 text-slate-200 rounded-lg space-y-2 border border-slate-800">
                <h3 id="lgpd-heading" className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-sky-400" aria-hidden="true" />
                  <span>Segurança da Informação e Conformidade com a LGPD</span>
                </h3>
                <p className="text-sm leading-relaxed text-slate-200">
                  {solucao.lgpdNote}
                </p>
              </section>
            )}

            {/* Integração com outras soluções */}
            <section aria-labelledby="integracoes-heading" className="space-y-4">
              <h2 id="integracoes-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Integração com Outros Equipamentos de Segurança
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {solucao.integrations.map((integ, idx) => (
                  <div key={idx} className="p-3 bg-white border border-slate-200 rounded text-sm text-slate-700 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" aria-hidden="true" />
                    <span>{integ}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Como é a Instalação (Etapas) */}
            <section aria-labelledby="etapas-heading" className="space-y-4">
              <h2 id="etapas-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Wrench className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Etapas de Instalação no Local</span>
              </h2>
              <div className="space-y-3">
                {solucao.installationSteps.map((step) => (
                  <div key={step.step} className="p-4 bg-white border border-slate-200 rounded-md">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-slate-500">Passo {step.step}</span>
                      <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-0 sm:pl-16">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Manutenção e Suporte */}
            <section aria-labelledby="manutencao-heading" className="space-y-4">
              <h2 id="manutencao-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Manutenção Preventiva e Assistência Técnica Local
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                {solucao.maintenanceAndSupport.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ com 5 perguntas */}
            <section aria-labelledby="faq-solucao-heading" className="space-y-4 pt-6 border-t border-slate-200">
              <h2 id="faq-solucao-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-sky-600" aria-hidden="true" />
                <span>Perguntas Frequentes sobre {solucao.title}</span>
              </h2>
              <div className="space-y-3">
                {solucao.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white border border-slate-200 rounded-lg p-4 open:border-slate-300"
                  >
                    <summary className="font-semibold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">▼</span>
                    </summary>
                    <p className="text-sm text-slate-600 mt-2.5 pt-2 border-t border-slate-100 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar de Apoio e Conversão (4 colunas) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Card de Conversão Fixado */}
            <div className="bg-petroleum text-white p-6 rounded-lg space-y-4 border border-slate-800 shadow-md sticky top-24">
              <span className="text-xs text-sky-400 font-semibold tracking-wider uppercase block">
                Atendimento Rápido
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">
                Solicite uma proposta técnica sem compromisso
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nossos especialistas dimensionam a quantidade exata de leitores, eletroímãs e baterias para sua portaria em Curitiba.
              </p>

              <a
                href={whatsappLink(solucao.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="w-full flex items-center justify-center gap-2 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
                <span>Orçamento via WhatsApp</span>
              </a>

              <div className="pt-2 text-center">
                <Link
                  to="/orcamento/"
                  className="text-xs text-slate-300 hover:text-white underline"
                >
                  Ou preencha o formulário detalhado
                </Link>
              </div>

              {/* Links para Segmentos e Cidades Relacionadas */}
              {(resolvedRelatedSegments.length > 0 || resolvedRelatedCities.length > 0) && (
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <span className="text-xs font-semibold text-slate-300 block">
                    Aplicações e Regiões:
                  </span>
                  <div className="flex flex-col gap-1.5 text-xs text-slate-400">
                    {resolvedRelatedSegments.map(seg => (
                      <Link
                        key={seg.slug}
                        to={`/segmentos/${seg.slug}/`}
                        className="hover:text-white transition-colors"
                      >
                        → {seg.title.replace('Controle de Acesso para ', '')}
                      </Link>
                    ))}
                    {resolvedRelatedCities.map(city => (
                      <Link
                        key={city.slug}
                        to={`/cidades/${city.slug}/`}
                        className="hover:text-white transition-colors"
                      >
                        → Instalação em {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Soluções Relacionadas */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Soluções Relacionadas
              </h3>
              <ul className="space-y-2 text-sm">
                {resolvedRelatedSolutions.map(rel => (
                  <li key={rel.slug}>
                    <Link
                      to={`/solucoes/${rel.slug}/`}
                      className="text-slate-600 hover:text-sky-600 font-medium block truncate"
                    >
                      {rel.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-100">
                <Link
                  to="/solucoes/"
                  className="text-xs font-semibold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Ver todas as soluções</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </article>
    </Layout>
  );
}
