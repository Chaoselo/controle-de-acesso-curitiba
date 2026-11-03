import { HelpCircle, MessageSquare } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { generalFaqList } from '../content/faq';
import { siteConfig } from '../config/site';
import { generateFAQSchema } from '../lib/schema';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function FaqPage() {
  return (
    <Layout whatsappContext="dúvida da central de FAQ">
      <SEOHead
        title="Perguntas Frequentes | Controle de Acesso Curitiba"
        description="Tire suas dúvidas sobre sistemas de controle de acesso, biometria, facial, catracas e fechaduras eletromagnéticas em Curitiba e Região Metropolitana."
        canonicalPath="/faq/"
        schemaData={generateFAQSchema(generalFaqList)}
      />

      <Breadcrumbs
        items={[
          { name: 'FAQ', url: `${siteConfig.domain}/faq/` }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <header className="space-y-4 mb-10 text-center">
          <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
            Central de Ajuda
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes (FAQ)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Respostas diretas sobre tecnologia, instalação, manutenção, LGPD e funcionamento de controle de acesso em Curitiba.
          </p>
        </header>

        <div className="space-y-4">
          {generalFaqList.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-slate-200 rounded-lg p-5 open:border-slate-300 shadow-sm"
            >
              <summary className="font-semibold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">▼</span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 pt-2 border-t border-slate-100 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-slate-100 rounded-lg border border-slate-200 space-y-3">
          <h3 className="text-sm font-bold text-slate-900">
            Ainda tem dúvidas técnicas sobre o seu projeto?
          </h3>
          <p className="text-xs text-slate-600">
            Nossos consultores tiram todas as dúvidas pelo WhatsApp em tempo real.
          </p>
          <a
            href={whatsappLink('dúvida não listada no FAQ')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('faq cta', '/faq/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded font-bold text-xs shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white text-transparent" />
            <span>Perguntar no WhatsApp</span>
          </a>
        </div>
      </section>
    </Layout>
  );
}
