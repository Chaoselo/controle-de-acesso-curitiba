import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, BookOpen, ShieldCheck } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { blogPostsList } from '../content/blog';
import { siteConfig, isFieldFilled } from '../config/site';

export function BlogPage() {
  return (
    <Layout whatsappContext="artigos do blog">
      <SEOHead
        title="Blog e Artigos Técnicos | Controle de Acesso Curitiba"
        description="Artigos técnicos, guias para síndicos e boas práticas sobre controle de acesso, biometria, LGPD, cancelas e catracas em Curitiba e RMC. Acesse agora!"
        canonicalPath="/blog/"
      />

      <Breadcrumbs
        items={[
          { name: 'Blog', url: `${siteConfig.domain}/blog/` }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <header className="space-y-4 mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Engenharia de Acesso e Segurança</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Artigos Técnicos e Guias Especializados
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Orientações técnicas aprofundadas para auxiliar síndicos, conselheiros e gestores na tomada de decisão segura em Curitiba e Região Metropolitana.
          </p>
        </header>

        {/* Lista leve de artigos (sem imagens pesadas) */}
        <div className="space-y-6">
          {blogPostsList.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="font-semibold text-sky-700 uppercase tracking-wider text-[11px] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    Artigo Técnico
                  </span>
                  {isFieldFilled(post.publishedDate) && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.publishedDate}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{post.author}</span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  <Link
                    to={`/blog/${post.slug}/`}
                    className="hover:text-sky-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between">
                <Link
                  to={`/blog/${post.slug}/`}
                  className="text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-2 text-xs text-slate-600">
          <div className="flex items-center justify-center gap-2 text-slate-800 font-semibold text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Conteúdo Técnico Original e Verificado</span>
          </div>
          <p>
            Todos os artigos são redigidos pela equipe de engenharia e consultoria técnica da Controle de Acesso Curitiba, divisão especializada da Intelsecsul Segurança Eletrônica.
          </p>
        </div>
      </section>
    </Layout>
  );
}
