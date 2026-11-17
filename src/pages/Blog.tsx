import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, BookOpen, ShieldCheck } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { blogPostsList } from '../content/blog';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { siteConfig, isFieldFilled } from '../config/site';

export function BlogPage() {
  return (
    <Layout whatsappContext="artigos do blog">
      <SEOHead
        title="Blog e Artigos Técnicos | Controle de Acesso Curitiba"
        description="Artigos técnicos, guias para síndicos e boas práticas sobre controle de acesso, biometria, LGPD, cancelas e catracas em Curitiba e RMC. Acesse agora!"
        canonicalPath="/blog/"
      />

      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-10 sm:pb-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Blog', url: `${siteConfig.domain}/blog/` },
            ]}
          />
          <header className="space-y-3 mt-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Guias e Conteúdo Técnico</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Artigos técnicos e guias práticos
            </h1>
            <p className="text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
              Orientações objetivas para ajudar síndicos, administradoras e empresas a comparar soluções e planejar a segurança de acessos em Curitiba e Região Metropolitana.
            </p>
          </header>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {blogPostsList.map((post) => (
            <article
              key={post.slug}
              className="bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-2xl p-6 sm:p-7 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-soft)]">
                  <span className="font-bold text-[var(--accent)] uppercase tracking-[0.08em] bg-[var(--bg)] px-2.5 py-1 rounded-lg border border-[var(--border)]">
                    Artigo Técnico
                  </span>
                  {isFieldFilled(post.publishedDate) && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                      <span>{post.publishedDate}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                    <span>{post.readTime}</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <span>{post.author}</span>
                </div>

                <h2 className="text-xl font-bold text-white leading-snug">
                  <Link
                    to={`/blog/${post.slug}/`}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)] mt-5 flex items-center justify-between">
                <Link
                  to={`/blog/${post.slug}/`}
                  className="text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}

          <div className="mt-10 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl text-center space-y-2 text-sm text-[var(--text-muted)]">
            <div className="flex items-center justify-center gap-2 text-white font-semibold">
              <ShieldCheck className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
              <span>Conteúdo técnico informativo</span>
            </div>
            <p>
              Elaborado pela equipe da Controle de Acesso Curitiba, unidade especializada da Intelsecsul Segurança Eletrônica.
            </p>
          </div>

          <ComplianceNotices showLgpd />
        </div>
      </section>
    </Layout>
  );
}
