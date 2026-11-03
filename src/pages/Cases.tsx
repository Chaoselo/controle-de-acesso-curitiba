import { Link } from 'react-router-dom';
import { Building2, Factory, GraduationCap, Stethoscope, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';

export function CasesPage() {
  // Marcação obrigatória de dados reais: sem invenção de clientes fictícios
  const realCasesData = "[[PREENCHER: cases reais com autorização de clientes]]";

  return (
    <Layout whatsappContext="tipos de projetos e cases de controle de acesso">
      <SEOHead
        title="Projetos e Aplicações | Controle de Acesso Curitiba"
        description="Conheça aplicações e estruturas de projetos de controle de acesso em condomínios residenciais, comerciais e indústrias em Curitiba e RMC. Saiba mais!"
        canonicalPath="/cases/"
      />

      <Breadcrumbs
        items={[
          { name: 'Cases e Projetos', url: `${siteConfig.domain}/cases/` }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <header className="space-y-4 mb-10 text-center">
          <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
            Engenharia Aplicada
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tipos de Projetos e Estruturas Atendidas
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Conheça as tipologias de empreendimentos atendidas em Curitiba e Região Metropolitana, seus desafios típicos de segurança física e as arquiteturas de solução implantadas.
          </p>
        </header>

        {/* Tipos genéricos de projetos atendidos */}
        <div className="space-y-6">
          
          {/* Tipo 1: Condomínios Residenciais */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
              <Building2 className="w-4 h-4" />
              <span>Condomínios Residenciais Verticais e Horizontais</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Clausuras de Pedestres com Intertravamento e Acesso Veicular com Tag UHF
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Desafio Típico:</strong> Portões de pedestres batendo ou ficando entreabertos, vulnerabilidade durante a entrega de encomendas e filas de veículos na via pública causadas por controles manuais descalibrados.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Arquitetura Implantada:</strong> Eclusa de pedestres com duas fechaduras eletromagnéticas intertravadas (a porta interna só abre após a externa fechar), leitor biométrico facial touchless na portaria social e cancelas rápidas acionadas por antenas UHF para leitura automática da tag no para-brisa.
            </p>
            <div className="pt-2">
              <Link to="/segmentos/condominios-residenciais/" className="text-xs font-semibold text-sky-600 hover:underline inline-flex items-center gap-1">
                <span>Conhecer arquitetura para condomínios residenciais</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Tipo 2: Indústrias e Centros Logísticos */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
              <Factory className="w-4 h-4" />
              <span>Indústrias, Fábricas e Complexos Logísticos na RMC</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Torniquetes de Altura Total para Troca de Turno e Cancelas Industriais para Frotas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Desafio Típico:</strong> Grandes contingentes de colaboradores acessando a planta no mesmo horário, necessidade de impedir invasão perimetral e fluxo intenso de caminhões pesados em docas de expedição.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Arquitetura Implantada:</strong> Baterias de torniquetes de altura total em aço galvanizado integrados a biometria com liveness e bloqueio por vencimento de treinamentos de segurança (NRs), complementadas por cancelas industriais com laço indutivo duplo e totens de autoatendimento para motoristas.
            </p>
            <div className="pt-2">
              <Link to="/segmentos/industrias/" className="text-xs font-semibold text-sky-600 hover:underline inline-flex items-center gap-1">
                <span>Conhecer arquitetura para indústrias e galpões</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Tipo 3: Edifícios Corporativos e Escritórios */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
              <Building2 className="w-4 h-4" />
              <span>Edifícios Comerciais e Sedes Corporativas</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Catracas Balcão em Aço Inoxidável e Restrição Setorial de CPD e Finanças
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Desafio Típico:</strong> Conciliar recepção ágil de clientes e visitantes com controle estrito de quem pode subir para os andares ou adentrar setores confidenciais (TI, servidores e tesouraria).
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Arquitetura Implantada:</strong> Linha de catracas em aço inox 304 com braço antipânico e leitor de QR Code para visitantes pré-cadastrados, além de fechaduras eletromagnéticas embutidas com leitor biométrico Mifare criptografado nas salas restritas.
            </p>
            <div className="pt-2">
              <Link to="/segmentos/condominios-comerciais/" className="text-xs font-semibold text-sky-600 hover:underline inline-flex items-center gap-1">
                <span>Conhecer arquitetura para condomínios comerciais</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Tipo 4: Clínicas e Estabelecimentos de Saúde */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
              <Stethoscope className="w-4 h-4" />
              <span>Clínicas Médicas, Laboratórios e Centros de Saúde</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Acesso Totalmente Touchless em Alas Restritas e Farmácias Clínicas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Desafio Típico:</strong> Restringir o acesso a estoques de medicamentos e salas cirúrgicas sem exigir toque físico que possa causar contaminação cruzada.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Arquitetura Implantada:</strong> Terminais de reconhecimento facial infravermelho de rápida resposta combinados a botoeiras ópticas no-touch e fechaduras eletroímã com acionamento silencioso e integração ao sistema de combate a incêndio.
            </p>
            <div className="pt-2">
              <Link to="/segmentos/clinicas-e-hospitais/" className="text-xs font-semibold text-sky-600 hover:underline inline-flex items-center gap-1">
                <span>Conhecer arquitetura para clínicas e saúde</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Seção de Cases Reais Nomeados (Oculta se não preenchida, cumprindo a regra de não inventar clientes) */}
        {isFieldFilled(realCasesData) ? (
          <div className="mt-12 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Depoimentos e Obras Concluídas</h3>
            <p className="text-xs text-slate-600">{realCasesData}</p>
          </div>
        ) : null}

        {/* Bloco de Chamada para Vistoria */}
        <div className="mt-12 text-center p-8 bg-petroleum rounded-xl text-white space-y-4 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold">
            Deseja avaliar a arquitetura de acesso do seu imóvel?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Realizamos vistoria técnica presencial em Curitiba e Região Metropolitana para levantamento minucioso de vãos, tubulações e requisitos de segurança.
          </p>
          <a
            href={whatsappLink('avaliação técnica de projeto')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cases cta', '/cases/')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-bold text-xs shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white text-transparent" />
            <span>Solicitar Avaliação Técnica no WhatsApp</span>
          </a>
        </div>
      </section>
    </Layout>
  );
}
