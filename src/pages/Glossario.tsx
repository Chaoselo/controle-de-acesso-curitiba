import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { siteConfig } from '../config/site';

interface Term {
  term: string;
  definition: string;
  link?: { text: string; href: string };
}

const terms: Term[] = [
  {
    term: 'Biometria',
    definition: 'Método automatizado de identificação de indivíduos baseado em características físicas únicas e mensuráveis, como impressões digitais ou geometria facial.',
    link: { text: 'Ver soluções de biometria', href: '/solucoes/biometria/' }
  },
  {
    term: 'Template Biométrico',
    definition: 'Representação matemática criptografada gerada a partir dos pontos característicos de uma face ou impressão digital, evitando o armazenamento de imagem fotográfica aberta para identificação.',
    link: { text: 'Ver política de privacidade e LGPD', href: '/politica-de-privacidade/' }
  },
  {
    term: 'Liveness (Detecção de Vivacidade)',
    definition: 'Recurso presente em leitores faciais para distinguir um rosto humano real diante da lente de tentativas com fotos impressas ou telas de celular.',
    link: { text: 'Ver reconhecimento facial', href: '/solucoes/reconhecimento-facial/' }
  },
  {
    term: 'RFID (Radio Frequency Identification)',
    definition: 'Identificação por radiofrequência sem contato que utiliza ondas eletromagnéticas para ler chips em cartões de proximidade, chaveiros tag ou adesivos.',
    link: { text: 'Ver cartões e tags RFID', href: '/solucoes/cartao-e-tag-rfid/' }
  },
  {
    term: 'Mifare (13,56 MHz)',
    definition: 'Padrão de cartão inteligente sem contato de alta frequência com recursos de criptografia, reduzindo riscos de clonagem em comparação a cartões simples de 125 kHz.',
    link: { text: 'Ver soluções de cartões RFID', href: '/solucoes/cartao-e-tag-rfid/' }
  },
  {
    term: 'UHF (Ultra High Frequency)',
    definition: 'Faixa de radiofrequência utilizada em leitores de longo alcance e tags coladas no para-brisa para automação da abertura de cancelas e portões veiculares.',
    link: { text: 'Ver cancelas e acesso veicular', href: '/solucoes/cancelas-e-acesso-veicular/' }
  },
  {
    term: 'Protocolo Wiegand',
    definition: 'Padrão tradicional de comunicação entre leitores de acesso e controladoras que transmite o código da credencial através de pulsos elétricos (Data 0 e Data 1).'
  },
  {
    term: 'Protocolo OSDP (Open Supervised Device Protocol)',
    definition: 'Padrão bidirecional supervisionado de comunicação entre leitores e controladoras com suporte a criptografia e detecção de desconexão da fiação.'
  },
  {
    term: 'Controladora de Acesso',
    definition: 'Hardware dedicado responsável por armazenar regras e horários de permissão, validar as leituras recebidas dos terminais e acionar fechaduras, catracas ou cancelas.',
    link: { text: 'Ver instalação e projetos', href: '/servicos/instalacao-e-projeto/' }
  },
  {
    term: 'Eletroímã (Fechadura Eletromagnética)',
    definition: 'Dispositivo composto por bobina eletromagnética e placa metálica de atrito que mantém a porta travada por força magnética contínua sem desgaste mecânico.',
    link: { text: 'Ver fechaduras eletromagnéticas', href: '/solucoes/fechaduras-eletromagneticas/' }
  },
  {
    term: 'Fail-Safe',
    definition: 'Modo de operação em que a fechadura destrava na ausência de energia elétrica, característica comum em fechaduras eletroímã para liberar saídas em emergência.'
  },
  {
    term: 'Fail-Secure',
    definition: 'Modo de operação em que a trava mecânica permanece fechada mesmo sem energia elétrica, exigindo chave mecânica ou liberação manual quando aplicável.'
  },
  {
    term: 'Catraca Flap (Flap Barrier)',
    definition: 'Modelo de catraca com barreiras retráteis de vidro ou acrílico que se recolhem lateralmente para dentro do gabinete após a validação do usuário.',
    link: { text: 'Ver catracas de acesso', href: '/solucoes/catracas/' }
  },
  {
    term: 'Torniquete de Altura Total',
    definition: 'Barreira física de grande porte com estrutura do piso ao topo e braços giratórios para contenção perimetral reforçada em áreas industriais e galpões.',
    link: { text: 'Ver soluções para indústrias', href: '/segmentos/industrias/' }
  },
  {
    term: 'Cancela Automática',
    definition: 'Equipamento eletromecânico com gabinete motorizado e haste linear ou articulada para controle de entrada e saída de veículos em garagens e pátios.',
    link: { text: 'Ver cancelas veiculares', href: '/solucoes/cancelas-e-acesso-veicular/' }
  },
  {
    term: 'Laço Indutivo (Sensor de Massa Metálica)',
    definition: 'Condutor embutido no piso que detecta a presença metálica do veículo, evitando que o braço da cancela desça sobre o automóvel.'
  },
  {
    term: 'LPR (License Plate Recognition)',
    definition: 'Tecnologia de leitura automática de placas veiculares por câmera OCR para identificação e registro de veículos em portarias.',
    link: { text: 'Ver cancelas e acesso veicular', href: '/solucoes/cancelas-e-acesso-veicular/' }
  },
  {
    term: 'PoE (Power over Ethernet)',
    definition: 'Tecnologia que transmite energia elétrica e dados pelo mesmo cabo de rede, simplificando a infraestrutura para leitores faciais e vídeo porteiros IP.'
  },
  {
    term: 'Nobreak / Fonte Carregadora',
    definition: 'Sistema com bateria auxiliar destinado a manter controladoras, leitores e fechaduras alimentados temporariamente durante quedas da rede elétrica.'
  },
  {
    term: 'Eclusa / Clausura de Segurança',
    definition: 'Conjunto de duas portas ou portões em sequência com intertravamento eletrônico, impedindo que ambas as passagens permaneçam abertas ao mesmo tempo.',
    link: { text: 'Ver controle para condomínios', href: '/segmentos/condominios-residenciais/' }
  },
  {
    term: 'QR Code de Acesso',
    definition: 'Código bidimensional com validade programada gerado para visitantes acessarem catracas ou portas equipadas com leitor óptico compatível.',
    link: { text: 'Ver soluções de catracas', href: '/solucoes/catracas/' }
  },
  {
    term: 'Mola Aérea Hidráulica',
    definition: 'Mecanismo instalado na parte superior da porta para fechar a folha de forma controlada e favorecer o alinhamento correto no atraque do eletroímã.',
    link: { text: 'Ver instalação e projetos', href: '/servicos/instalacao-e-projeto/' }
  },
  {
    term: 'Braço Antipânico',
    definition: 'Recurso de segurança em catracas tripé que destrava e abaixa o braço automaticamente em caso de emergência ou corte de energia.',
    link: { text: 'Ver soluções de catracas', href: '/solucoes/catracas/' }
  }
];

export function GlossarioPage() {
  return (
    <Layout whatsappContext="glossário de controle de acesso">
      <SEOHead
        title="Glossário de Controle de Acesso | Termos Técnicos Curitiba"
        description="Aprenda o significado dos principais termos de segurança eletrônica e controle de acesso: biometria, eclusas, eletroímã, OSDP, Wiegand, RFID e LPR."
        canonicalPath="/glossario/"
      />

      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-10 sm:pb-14 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Glossário Técnico', url: `${siteConfig.domain}/glossario/` },
            ]}
          />
          <header className="space-y-3 mt-4">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Dicionário Técnico
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Glossário de Controle de Acesso Físico
            </h1>
            <p className="text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
              Guia de termos técnicos para auxiliar síndicos, gestores prediais e empresas na compreensão dos equipamentos de portaria e segurança.
            </p>
          </header>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {terms.map((item, idx) => (
            <article
              key={idx}
              className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] space-y-3 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-base font-bold text-white">
                  {item.term}
                </h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-2">
                  {item.definition}
                </p>
              </div>
              {item.link && (
                <div className="pt-3 border-t border-[var(--border)]">
                  <Link
                    to={item.link.href}
                    className="text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{item.link.text}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="max-w-5xl mx-auto mt-8">
          <ComplianceNotices showLgpd />
        </div>
      </section>
    </Layout>
  );
}
