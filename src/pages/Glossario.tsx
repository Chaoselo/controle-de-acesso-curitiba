import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig } from '../config/site';

interface Term {
  term: string;
  definition: string;
  link?: { text: string; href: string };
}

const terms: Term[] = [
  {
    term: 'Biometria',
    definition: 'Método automatizado de identificação e validação de indivíduos baseado em características biológicas únicas e mensuráveis, tais como impressões digitais, geometria facial ou padrão vascular.',
    link: { text: 'Ver soluções de biometria', href: '/solucoes/biometria/' }
  },
  {
    term: 'Template Biométrico',
    definition: 'Representação matemática criptografada e irreversível gerada a partir dos pontos característicos (minúcias) de uma face ou impressão digital. Não armazena a imagem fotográfica real, garantindo conformidade com a LGPD.',
    link: { text: 'Ver política de privacidade e LGPD', href: '/politica-de-privacidade/' }
  },
  {
    term: 'Liveness (Prova de Vida)',
    definition: 'Tecnologia óptica e algorítmica utilizada em leitores faciais para distinguir um rosto humano vivo real de tentativas de fraude com fotos impressas, vídeos em telas de celular ou máscaras de silicone.',
    link: { text: 'Ver reconhecimento facial', href: '/solucoes/reconhecimento-facial/' }
  },
  {
    term: 'RFID (Radio Frequency Identification)',
    definition: 'Identificação por radiofrequência sem contato. Utiliza ondas eletromagnéticas para ler dados gravados em chips instalados em cartões de proximidade, chaveiros de tag ou etiquetas adesivas.',
    link: { text: 'Ver cartões e tags RFID', href: '/solucoes/cartao-e-tag-rfid/' }
  },
  {
    term: 'Mifare (13,56 MHz)',
    definition: 'Padrão internacional de cartão inteligente sem contato (smart card) de alta frequência que opera com setores de memória protegidos por chaves criptográficas (Crypto-1 ou AES), impedindo clonagens simples comuns em cartões antigos de 125 kHz.',
    link: { text: 'Ver soluções de cartões inteligentes', href: '/solucoes/cartao-e-tag-rfid/' }
  },
  {
    term: 'UHF (Ultra High Frequency)',
    definition: 'Faixa de radiofrequência (geralmente entre 902 e 928 MHz no Brasil) que permite leitura veicular de longo alcance (de 3 a 8 metros), amplamente empregada em tags coladas no para-brisa para automação de cancelas e portões.',
    link: { text: 'Ver cancelas e acesso veicular', href: '/solucoes/cancelas-e-acesso-veicular/' }
  },
  {
    term: 'Protocolo Wiegand',
    definition: 'Padrão tradicional de comunicação unidirecional entre leitoras de acesso (biometria ou cartão) e controladoras, transmitindo dados através de dois condutores de pulso elétrico (Data 0 e Data 1).',
  },
  {
    term: 'Protocolo OSDP (Open Supervised Device Protocol)',
    definition: 'Padrão moderno, bidirecional e supervisionado de comunicação entre leitores e controladoras. Conta com criptografia AES-128 e monitora constantemente se a fiação ou o leitor foi violado fisicamente.',
  },
  {
    term: 'Controladora de Acesso',
    definition: 'Hardware central dedicado (placa de processamento) responsável por armazenar as regras de acesso, tabelas de permissões e horários, validar os dados enviados pelos leitores e acionar relés de fechaduras ou cancelas.',
    link: { text: 'Ver instalação e projetos', href: '/servicos/instalacao-e-projeto/' }
  },
  {
    term: 'Eletroímã (Fechadura Eletromagnética)',
    definition: 'Dispositivo composto por uma bobina eletromagnética e uma placa metálica (bloco de atrito). Mantém a porta travada através de força magnética contínua (ex: 150 kgf a 300 kgf) sem peças mecânicas móveis.',
    link: { text: 'Ver fechaduras eletromagnéticas', href: '/solucoes/fechaduras-eletromagneticas/' }
  },
  {
    term: 'Fail-Safe',
    definition: 'Modo de operação de segurança em que o dispositivo destrava automaticamente na ausência de energia elétrica. É a configuração padrão de fechaduras eletroímã para assegurar evacuação desimpedida em emergências.',
  },
  {
    term: 'Fail-Secure',
    definition: 'Modo de operação em que o dispositivo permanece travado na ausência de eletricidade, exigindo acionamento por chave mecânica para abertura. Indicado para ambientes de alta retenção patrimonial restrita.',
  },
  {
    term: 'Catraca Flap (Flap Barrier)',
    definition: 'Equipamento sofisticado de controle de passagem com barreiras de acrílico ou vidro retráteis que se recolhem suavemente para dentro do gabinete após a autenticação, oferecendo alta velocidade e design nobre.',
    link: { text: 'Ver catracas de acesso', href: '/solucoes/catracas/' }
  },
  {
    term: 'Torniquete de Altura Total',
    definition: 'Barreira física mecânica de alta segurança que vai do chão ao teto (geralmente mais de 2 metros de altura) com braços giratórios que impedem totalmente que uma pessoa pule ou passe por baixo do bloqueio.',
    link: { text: 'Ver soluções para indústrias', href: '/segmentos/industrias/' }
  },
  {
    term: 'Cancela Automática',
    definition: 'Dispositivo eletromecânico composto por gabinete motorizado e haste linear ou articulada, projetado para controlar a passagem seletiva de veículos em pistas de estacionamento, garagens e pátios.',
    link: { text: 'Ver cancelas veiculares', href: '/solucoes/cancelas-e-acesso-veicular/' }
  },
  {
    term: 'Laço Indutivo (Sensor Magnético de Solo)',
    definition: 'Circuito condutor de cabo embutido no asfalto que detecta a variação do campo magnético provocada pela massa metálica de um veículo, impedindo que a cancela feche sobre o carro e acionando aberturas automáticas.',
  },
  {
    term: 'LPR (License Plate Recognition)',
    definition: 'Tecnologia que utiliza câmeras OCR de alta definição com iluminação infravermelha para capturar e ler instantaneamente os caracteres alfanuméricos das placas de veículos, liberando cancelas de forma automatizada.',
    link: { text: 'Ver cancelas e acesso veicular', href: '/solucoes/cancelas-e-acesso-veicular/' }
  },
  {
    term: 'PoE (Power over Ethernet)',
    definition: 'Tecnologia que permite transmitir energia elétrica e dados de rede simultaneamente através do mesmo cabo de par trançado (UTP Cat5e/Cat6), simplificando a instalação de leitoras faciais e interfones IP.',
  },
  {
    term: 'Nobreak (UPS / Fonte Ininterrupta)',
    definition: 'Equipamento composto por circuito retificador, inversor e baterias seladas (geralmente 12V estacionárias), responsável por manter a alimentação elétrica contínua dos sistemas de controle de acesso durante apagões na rede pública.',
  },
  {
    term: 'Eclusa / Clausura de Segurança',
    definition: 'Sistema composto por dois portões ou portas em sequência intertravados eletronicamente. A segunda porta só pode ser destravada após o fechamento e travamento completo da primeira, evitando acessos de carona (tailgating).',
    link: { text: 'Ver controle para condomínios', href: '/segmentos/condominios-residenciais/' }
  },
  {
    term: 'QR Code de Acesso',
    definition: 'Código bidimensional dinâmico ou estático gerado por aplicativo que permite aos visitantes liberar catracas e portas apontando a tela do smartphone para um leitor óptico com tempo e tentativas predeterminados.',
    link: { text: 'Ver soluções de catracas', href: '/solucoes/catracas/' }
  },
  {
    term: 'Mola Aérea Hidráulica',
    definition: 'Mecanismo mecânico-hidráulico ajustável instalado na parte superior da folha da porta para fechar a abertura de forma controlada e sem impacto brusco, garantindo o correto atraque do eletroímã.',
    link: { text: 'Ver instalação e projetos', href: '/servicos/instalacao-e-projeto/' }
  },
  {
    term: 'Braço Antipânico',
    definition: 'Mecanismo de segurança instalado em catracas tripé que desarma e cai imediatamente na posição vertical em situações de emergência, disparo de alarme de incêndio ou queda de energia, liberando a rota de evacuação.',
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

      <Breadcrumbs
        items={[
          { name: 'Glossário Técnico', url: `${siteConfig.domain}/glossario/` }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <header className="space-y-4 mb-10 text-center">
          <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
            Dicionário Especializado
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Glossário de Controle de Acesso Físico
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Guia completo de termos técnicos da engenharia de acesso físico e segurança eletrônica para síndicos, administradores prediais e gestores corporativos.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {terms.map((item, idx) => (
            <article key={idx} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-2 flex flex-col justify-between">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  {item.term}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {item.definition}
                </p>
              </div>
              {item.link && (
                <div className="pt-2 border-t border-slate-100">
                  <Link to={item.link.href} className="text-xs font-semibold text-sky-600 hover:underline inline-flex items-center gap-1">
                    <span>{item.link.text}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
