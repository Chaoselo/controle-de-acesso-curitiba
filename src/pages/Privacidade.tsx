import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig, isFieldFilled } from '../config/site';

export function PrivacidadePage() {
  const dpoContact = "[[PREENCHER: contato do encarregado de dados (DPO)]]";

  return (
    <Layout whatsappContext="dúvida sobre privacidade e LGPD">
      <SEOHead
        title="Política de Privacidade e LGPD | Controle de Acesso Curitiba"
        description="Termos de privacidade, tratamento de dados de contato e conformidade com a LGPD em projetos de controle de acesso biométrico em Curitiba e RMC. Confira!"
        canonicalPath="/politica-de-privacidade/"
      />

      <Breadcrumbs
        items={[
          { name: 'Política de Privacidade', url: `${siteConfig.domain}/politica-de-privacidade/` }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <header className="space-y-4 mb-10 text-center">
          <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
            Segurança Jurídica e Proteção de Dados
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Política de Privacidade e Proteção de Dados (LGPD)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD)
          </p>
        </header>

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <div className="p-4 bg-sky-50 border border-sky-100 rounded-lg text-slate-800 text-xs leading-relaxed">
            <strong>Aviso de Natureza Informativa:</strong> Este documento esclarece as diretrizes de privacidade adotadas neste website e nos projetos de controle de acesso físico executados pela empresa. Este texto é informativo e não substitui a orientação de um profissional jurídico.
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. Identificação do Controlador
            </h2>
            <p>
              Este website e os serviços de engenharia de acesso físico são operados pela <strong>{siteConfig.name}</strong>, unidade especializada da <strong>{siteConfig.parentCompany.name}</strong>, sediada e atuante em Curitiba e nos 10 municípios da Região Metropolitana no Estado do Paraná.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              2. Dados Coletados no Website e Finalidades
            </h2>
            <p>
              Nosso site opera de forma estática e não armazena formulários nem bancos de dados de cadastro em servidores web próprios. As informações preenchidas pelo usuário são tratadas exclusivamente sob as seguintes condições:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Solicitações de Orçamento via WhatsApp:</strong> Os dados selecionados na página de orçamento (tipo de imóvel, solução desejada, quantidade estimada e cidade) são convertidos dinamicamente no navegador do visitante e enviados de forma voluntária pelo aplicativo WhatsApp oficial. A finalidade exclusiva é o atendimento pré-contratual, elaboração de proposta técnica e agendamento de vistoria presencial.
              </li>
              <li>
                <strong>Dados de Navegação e Cookies:</strong> Não utilizamos cookies intrusivos ou de rastreamento publicitário cruzado. Caso o Google Analytics 4 (GA4) esteja ativo, são coletadas métricas agregadas e estatísticas com anonimização obrigatória de endereço IP para fins de aprimoramento de performance do portal.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              3. Cookies e Análise de Acesso
            </h2>
            <p>
              O site utiliza o <strong>Google Analytics 4 (GA4)</strong> para medir visitas, volume de navegação e cliques de contato (WhatsApp e telefone). Os cookies de análise só são ativados depois do consentimento expresso do visitante no aviso inicial de cookies.
            </p>
            <p>
              O visitante tem total liberdade para recusar a coleta no aviso de cookies ou apagar os cookies a qualquer momento nas configurações do seu navegador de internet. Os dados estatísticos são processados pelo Google sob padrões de segurança e confidencialidade. Este texto é informativo e não substitui a orientação de um profissional jurídico.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. Bases Legais do Tratamento (Art. 7º e Art. 11 da LGPD)
            </h2>
            <p>
              Todo tratamento de dados realizado pela Controle de Acesso Curitiba fundamenta-se nas hipóteses legais taxativas previstas na LGPD:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Execução de Contrato ou Procedimentos Preliminares (Art. 7º, V):</strong> Para elaborar orçamentos solicitados pelo titular e prestar serviços de instalação e manutenção técnica.</li>
              <li><strong>Legítimo Interesse (Art. 7º, IX):</strong> Para garantir a segurança patrimonial e física das instalações dos clientes contratantes.</li>
              <li><strong>Proteção da Vida ou da Incolumidade Física (Art. 7º, VII e Art. 11, II, "e"):</strong> Controle de tráfego de pessoas e saídas de emergência em caso de incêndio ou sinistros.</li>
              <li><strong>Consentimento Específico (Art. 11, I):</strong> Quando aplicável para cadastro biométrico inicial em portarias condominiais ou corporativas.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              5. Dados Pessoais Sensíveis e Tratamento de Biometria
            </h2>
            <p>
              Conforme o Artigo 5º, inciso II da LGPD, o dado biométrico (impressão digital ou geometria facial) constitui <strong>dado pessoal sensível</strong>. Em todas as nossas instalações técnicas em Curitiba e RMC:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Criptografia por Templates Hash:</strong> Nossos equipamentos realizam a conversão irreversível da leitura em vetores matemáticos (templates) criptografados. É tecnicamente impossível reconstruir a face ou a impressão digital original a partir do código armazenado.
              </li>
              <li>
                <strong>Vedação ao Armazenamento Desprotegido de Fotografias:</strong> As leitoras e catracas não armazenam arquivos de imagens abertos ou fotos desprotegidas no banco de dados operacional.
              </li>
              <li>
                <strong>Alternativa Não Biométrica Obrigatória:</strong> Orientamos os condomínios e empresas contratantes a sempre disponibilizarem um meio alternativo de identificação (como cartão de proximidade RFID Mifare ou senha numérica) para indivíduos que não possam ou optem por não cadastrar a biometria.
              </li>
              <li>
                <strong>Cadastro de Menores de Idade:</strong> O tratamento de dados de crianças e adolescentes deve ser realizado com o consentimento específico fornecido por pelo menos um dos pais ou pelo responsável legal (Art. 14 da LGPD).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              6. Direitos do Titular de Dados Pessoais
            </h2>
            <p>
              O titular dos dados pessoais tem o direito de obter da empresa, a qualquer momento e mediante requisição formal:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso aos dados pessoais tratados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
              <li>Revogação do consentimento, nos termos da lei.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              7. Encarregado de Proteção de Dados (DPO) e Contato
            </h2>
            <p>
              Para esclarecer dúvidas sobre esta Política de Privacidade, solicitar a exclusão de dados de contato ou exercer qualquer um dos seus direitos como titular, entre em contato através dos nossos canais de atendimento:
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1 text-slate-700">
              <p><strong>Telefone / WhatsApp Comercial:</strong> {siteConfig.phone}</p>
              <p><strong>Empresa Mantenedora:</strong> {siteConfig.parentCompany.name} (<a href={siteConfig.parentCompany.site} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">intelsecsul.com.br</a>)</p>
              {isFieldFilled(dpoContact) ? (
                <p><strong>Encarregado pelo Tratamento de Dados (DPO):</strong> {dpoContact}</p>
              ) : (
                <p className="text-slate-500 italic">Contato específico do DPO: Disponível mediante solicitação pelo canal central de atendimento.</p>
              )}
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}
