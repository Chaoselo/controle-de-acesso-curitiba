import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft, ArrowRight, Clock, HelpCircle, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqAccordion } from '../components/ui/FaqAccordion';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
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
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteConfig.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}/`,
  };

  if (isFieldFilled(post.publishedDate)) {
    articleSchema.datePublished = post.publishedDate;
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-12 sm:pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Blog', url: `${siteConfig.domain}/blog/` },
              { name: post.title, url: `${siteConfig.domain}/blog/${post.slug}/` },
            ]}
          />

          <header className="space-y-4 mt-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-soft)]">
              <span className="font-bold text-[var(--accent)] uppercase tracking-[0.08em] bg-[var(--surface)] px-2.5 py-1 rounded-lg border border-[var(--border)]">
                Guia Técnico
              </span>
              {isFieldFilled(post.publishedDate) && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                  <time dateTime={post.publishedDate}>{post.publishedDate}</time>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-white">{post.author}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="p-5 bg-[var(--surface)]/90 border border-[var(--border)] rounded-2xl text-[var(--text-muted)] text-base leading-relaxed">
              <p>{post.summary}</p>
            </div>
          </header>
        </div>
      </section>

      <article className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--surface)] p-6 sm:p-10 rounded-2xl border border-[var(--border)] space-y-8 text-base text-[var(--text-muted)] leading-relaxed">
            {post.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4 pt-6 first:pt-0 border-t border-[var(--border)] first:border-t-0">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[var(--text-muted)] leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-5 pt-2">
                    {section.subsections.map((sub, subIdx) => (
                      <div key={subIdx} className="space-y-3 bg-[var(--bg)] p-5 rounded-xl border border-[var(--border)]">
                        <h3 className="text-lg font-bold text-white">
                          {sub.heading}
                        </h3>
                        {sub.paragraphs.map((sp, spIdx) => (
                          <p key={spIdx} className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                            {sp}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Links internos */}
            <section aria-labelledby="links-uteis-heading" className="pt-6 border-t border-[var(--border)] space-y-3">
              <h3 id="links-uteis-heading" className="text-xs font-bold text-white uppercase tracking-[0.08em]">
                Soluções e Serviços Relacionados
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {post.internalLinks.map((link, lIdx) => (
                  <div key={lIdx} className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-sm">
                    <span className="text-xs text-[var(--text-soft)] block mb-1">{link.context}:</span>
                    <Link
                      to={link.url}
                      className="font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                    >
                      <span>{link.text}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-post-heading" className="pt-8 border-t border-[var(--border)] space-y-4">
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <h2 id="faq-post-heading" className="text-xl font-bold text-white">
                  Perguntas frequentes sobre o tema
                </h2>
              </div>
              <FaqAccordion items={post.faqs} />
            </section>

            {/* CTA WhatsApp */}
            <div className="p-6 sm:p-8 bg-hero-gradient rounded-2xl text-white space-y-4 border border-[var(--border)]">
              <div className="inline-flex items-center gap-2 text-xs text-[var(--accent)] font-bold tracking-[0.08em] uppercase">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Atendimento Técnico em Curitiba e Região</span>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                Ficou com dúvidas para aplicar no seu imóvel?
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-xl">
                Fale com nossa equipe pelo WhatsApp para avaliação do seu cenário e orçamento sem custo.
              </p>

              <div className="pt-1">
                <a
                  href={whatsappLink(post.whatsappContext)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppAction}
                  className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-semibold text-sm sm:text-base transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Outros artigos */}
            <section aria-labelledby="outros-artigos-heading" className="pt-8 border-t border-[var(--border)] space-y-4">
              <h2 id="outros-artigos-heading" className="text-xl font-bold text-white">
                Outros artigos do blog
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {blogPostsList
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <article key={relatedPost.slug} className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl space-y-2 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                          Guia Técnico
                        </span>
                        <h3 className="text-sm font-bold text-white line-clamp-2 mt-1">
                          <Link to={`/blog/${relatedPost.slug}/`} className="hover:text-[var(--accent)] transition-colors">
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] line-clamp-3 mt-1.5 leading-relaxed">
                          {relatedPost.summary}
                        </p>
                      </div>
                      <div className="pt-2">
                        <Link
                          to={`/blog/${relatedPost.slug}/`}
                          className="text-xs font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                        >
                          <span>Ler artigo</span>
                          <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          </div>

          <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/blog/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Voltar para todos os artigos</span>
            </Link>

            <Link
              to="/orcamento/"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-6 bg-[var(--accent)] hover:bg-[#38d0fc] text-[#05060B] rounded-xl text-sm font-bold transition-colors"
            >
              <span>Solicitar orçamento sem custo</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <ComplianceNotices text={JSON.stringify(post)} className="mt-8" />
        </div>
      </article>
    </Layout>
  );
}
