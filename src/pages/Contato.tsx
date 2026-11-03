import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Mail, ExternalLink, Clock } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function ContatoPage() {
  return (
    <Layout whatsappContext="página de contato">
      <SEOHead
        title="Contato | Controle de Acesso Curitiba"
        description="Entre em contato com nossos especialistas em controle de acesso em Curitiba e Região Metropolitana. WhatsApp (41) 99844-8409 e atendimento técnico."
        canonicalPath="/contato/"
      />

      <Breadcrumbs
        items={[
          { name: 'Contato', url: `${siteConfig.domain}/contato/` }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <header className="space-y-4 mb-10 text-center">
          <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
            Canais de Atendimento
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fale Conosco
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Atendimento direto com consultor técnico para tirar dúvidas, solicitar visitas e orçamentos em Curitiba e RMC.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card WhatsApp */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 fill-emerald-600 text-transparent" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                WhatsApp Oficial
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Canal mais ágil para envio de fotos de portas, plantas de guarita e solicitação de orçamentos imediatos.
              </p>
            </div>

            <div>
              <a
                href={whatsappLink('contato')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('card contato', '/contato/')}
                className="w-full flex items-center justify-center gap-2 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded font-bold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" />
                <span>Conversar: {siteConfig.whatsappFormatted}</span>
              </a>
            </div>
          </div>

          {/* Card Telefone */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Atendimento Telefônico
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ligue diretamente para esclarecer dúvidas com nosso plantão de atendimento e suporte.
              </p>
            </div>

            <div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-petroleum hover:bg-slate-900 text-white rounded font-bold text-xs transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Ligar: {siteConfig.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Informações Complementares */}
        <div className="mt-8 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-700">
          <h3 className="font-bold text-slate-900 text-base">
            Informações Operacionais
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="font-semibold block text-slate-800 mb-1">Região de Cobertura:</span>
              <p className="text-xs text-slate-600">
                Curitiba, Pinhais, São José dos Pinhais, Araucária, Almirante Tamandaré, Colombo, Campo Largo, Fazenda Rio Grande, Campo Magro, Quatro Barras e Campina Grande do Sul.
              </p>
            </div>

            {isFieldFilled(siteConfig.openingHours) && (
              <div>
                <span className="font-semibold block text-slate-800 mb-1">Horário de Funcionamento:</span>
                <p className="text-xs text-slate-600">{siteConfig.openingHours}</p>
              </div>
            )}

            {isFieldFilled(siteConfig.address.street) && (
              <div>
                <span className="font-semibold block text-slate-800 mb-1">Endereço:</span>
                <p className="text-xs text-slate-600">
                  {siteConfig.address.street}, {siteConfig.address.city} - {siteConfig.address.state}
                </p>
              </div>
            )}

            <div>
              <span className="font-semibold block text-slate-800 mb-1">Empresa Mantenedora:</span>
              <p className="text-xs text-slate-600">
                Intelsecsul Segurança Eletrônica (<a href={siteConfig.parentCompany.site} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">intelsecsul.com.br</a>)
              </p>
            </div>
          </div>
        </div>

      </section>
    </Layout>
  );
}
