import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft, MessageSquare, ArrowRight, Clock, HelpCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getBlogPostBySlug, blogPostsList } from '../content/blog';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function PostDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsAppAction = () => {
    trackWhatsAppClick(`post blog ${post.slug}`, `/blog/${post.slug}/`);
  };

  const articleSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.metaDescription,
    'author': {
      '@type': 'Organization',
      'name': post.author,
      'url': siteConfig.domain
    },
    'publisher': {
      '@type': 'Organization',
      'name': siteConfig.name,
      'url': siteConfig.domain
    },
    'mainEntityOfPage': `${siteConfig.domain}/blog/${post.slug}/`
  };

  if (isFieldFilled(post.publishedDate)) {
    articleSchema.datePublished = post.publishedDate;
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': post.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <Layout whatsappContext={post.whatsappContext}>
      <SEOHead
        title={post.seoTitle}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}/`}
        ogType="article"
        schemaData={[articleSchema, faqSchema]}
      />

      <Breadcrumbs
        items={[
          { name: 'Blog', url: `${siteConfig.domain}/blog/` },
          { name: post.title, url: `${siteConfig.domain}/blog/${post.slug}/` }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        {/* Header do Post */}
        <header className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="font-semibold text-sky-700 uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
              Engenharia de Acesso
            </span>
            {isFieldFilled(post.publishedDate) && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={post.publishedDate}>{post.publishedDate}</time>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="font-medium text-slate-700">{post.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Resumo Obrigatório no Início (2 a 3 frases) */}
          <div className="p-5 bg-sky-50/80 border border-sky-200 rounded-xl text-slate-800 text-sm sm:text-base leading-relaxed">
            <p className="font-normal">{post.summary}</p>
          </div>
        </header>

        {/* Corpo do Artigo com H2 e H3 bem estruturados */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          
          {post.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4 pt-4 first:pt-0 border-t border-slate-100 first:border-t-0">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}

              {section.subsections && section.subsections.length > 0 && (
                <div className="space-y-6 pt-3">
                  {section.subsections.map((sub, subIdx) => (
                    <div key={subIdx} className="space-y-3 bg-slate-50/70 p-5 rounded-xl border border-slate-100">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {sub.heading}
                      </h3>
                      {sub.paragraphs.map((sp, spIdx) => (
                        <p key={spIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {sp}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Seção de Links Internos Contextuais Obrigatórios (3 a 5 links) */}
          <section aria-labelledby="links-uteis-heading" className="pt-6 border-t border-slate-200 space-y-3">
            <h3 id="links-uteis-heading" className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Soluções e Serviços Relacionados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {post.internalLinks.map((link, lIdx) => (
                <div key={lIdx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <span className="text-slate-500 block mb-0.5">{link.context}:</span>
                  <Link
                    to={link.url}
                    className="font-semibold text-sky-700 hover:text-sky-800 hover:underline inline-flex items-center gap-1"
                  >
                    <span>{link.text}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ do Post (Obrigatório: 3 perguntas) */}
          <section aria-labelledby="faq-post-heading" className="pt-8 border-t border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-sky-600 shrink-0" />
              <h2 id="faq-post-heading" className="text-lg sm:text-xl font-bold text-slate-900">
                Perguntas Frequentes sobre o Tema
              </h2>
            </div>
            
            <div className="space-y-3">
              {post.faqs.map((faq, fIdx) => (
                <details
                  key={fIdx}
                  className="group bg-slate-50 border border-slate-200 rounded-lg p-4 open:border-slate-300 transition-colors"
                >
                  <summary className="font-semibold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                    <span>{faq.question}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">▼</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 pt-2 border-t border-slate-200 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Chamada Final para WhatsApp com Contexto do Assunto */}
          <div className="my-8 p-6 sm:p-8 bg-petroleum rounded-xl text-white space-y-4 border border-slate-800 shadow-md">
            <div className="inline-flex items-center gap-2 text-xs text-sky-400 font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Consultoria Técnica Especializada</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              Deseja tirar dúvidas sobre {post.title.toLowerCase()} para o seu imóvel?
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Nossa equipe técnica atende condomínios residenciais e empresas em Curitiba e Região Metropolitana para vistorias no local e dimensionamento detalhado.
            </p>

            <div className="pt-2">
              <a
                href={whatsappLink(post.whatsappContext)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppAction}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-bold text-xs shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" aria-hidden="true" />
                <span>Conversar com Especialista no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Outros Artigos do Blog para interligação interna robusta */}
          <section aria-labelledby="outros-artigos-heading" className="pt-8 border-t border-slate-200 space-y-4">
            <h2 id="outros-artigos-heading" className="text-lg sm:text-xl font-bold text-slate-900">
              Artigos Recomendados do Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {blogPostsList
                .filter(p => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <article key={relatedPost.slug} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-sky-700 uppercase tracking-wider block">
                        Guia Técnico
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 line-clamp-2 mt-1">
                        <Link to={`/blog/${relatedPost.slug}/`} className="hover:text-sky-700 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 mt-1.5 leading-relaxed">
                        {relatedPost.summary}
                      </p>
                    </div>
                    <div className="pt-2">
                      <Link
                        to={`/blog/${relatedPost.slug}/`}
                        className="text-xs font-semibold text-sky-600 hover:text-sky-800 hover:underline inline-flex items-center gap-1"
                      >
                        <span>Ler artigo completo</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </section>

        </div>

        {/* Rodapé de Navegação */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todos os artigos</span>
          </Link>
          
          <Link
            to="/orcamento/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-xs sm:text-sm font-semibold shadow-sm transition-colors"
          >
            <span>Solicitar Orçamento Gratuito</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </article>
    </Layout>
  );
}
