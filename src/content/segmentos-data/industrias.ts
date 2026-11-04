import { SegmentContent } from '../types';

export const industriasSegment: SegmentContent = {
  slug: 'industrias',
  title: 'Controle de Acesso para Indústrias em Curitiba e Região',
  seoTitle: 'Controle de Acesso Industrial Curitiba e Região | Catracas',
  metaDescription: 'Controle de acesso para indústrias e galpões logísticos na Grande Curitiba. Torniquetes pesados, cancelas e integração com RH. Solicite proposta!',
  keyword: 'controle de acesso para industrias em Curitiba',
  directAnswer: 'O controle de acesso para indústrias e galpões logísticos em Curitiba, na Cidade Industrial (CIC), em São José dos Pinhais e em Araucária atende a demandas severas de operação contínua e alto fluxo. O sistema integra torniquetes de altura total em aço inox, cancelas de alta velocidade para carretas, leitura de placas e barreiras com grau de proteção IP elevado contra poeira e umidade, garantindo segurança na troca de turnos e conformidade com normas de segurança do trabalho.',
  image: {
    src: '/images/controle-acesso-segmento-industrias.webp',
    alt: 'Trabalhador de capacete diante de terminal facial ao lado de catraca de corpo inteiro em área industrial',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Sobrecarga e congestionamento nas portarias de pedestres durante as trocas de turno com centenas de operadores entrando e saindo simultaneamente em janelas de poucos minutos.',
    'Tentativas frequentes de carona ou passagem indevida por cima e por baixo de catracas convencionais em perímetros industriais externos que carecem de barreiras físicas completas até o teto.',
    'Mistura perigosa entre o tráfego de pedestres e a circulação de caminhões de carga pesada, carretas e empilhadeiras nos pátios de manobra e docas de expedição.',
    'Equipamentos de controle de acesso que falham constantemente devido ao acúmulo de poeira suspensa, fuligem industrial, vapores químicos e umidade típica do clima de Curitiba.',
    'Dificuldade para controlar a entrada de prestadores de serviços de montagem e terceirizados que necessitam de comprovação de treinamentos obrigatórios de segurança do trabalho como NR-10 e NR-35.',
    'Entrada não autorizada de operários em áreas industriais de alto risco operacional, como subestações elétricas de alta tensão, caldeiras pressurizadas, depósitos de inflamáveis e tanques químicos perigosos.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'catracas',
      title: 'Torniquetes de Altura Total em Aço Inox (Corpo Inteiro)',
      reason: 'Construídos em estrutura reforçada com rotor vertical que vai do piso ao teto, impedem fisicamente qualquer tentativa de invasão, escalada ou passagem dupla não autorizada em portarias fabris e pátios desguarnecidos.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais Faciais Industriais com Grau IP65/IP66',
      reason: 'Proporcionam identificação veloz sem exigência de contato físico mesmo quando os operadores utilizam óculos de segurança ou estão com as mãos cobertas por graxa, luvas de proteção ou pó industrial.'
    },
    {
      solutionSlug: 'cancelas-e-acesso-veicular',
      title: 'Cancelas Articuladas e Lineares para Tráfego Pesado',
      reason: 'Desenvolvidas com motoredutores reforçados e molas industriais de ciclo contínuo para controlar o acesso de frotas e caminhões em docas, com laço indutivo reforçado contra esmagamento de chassis pesados de carretas.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Crachás RFID de Longa Durabilidade e Tags Veiculares',
      reason: 'Atendem colaboradores, frotistas e prestadores com cartões de proximidade resistentes ao ambiente fabril agressivo ou tags UHF adesivas coladas no para-brisa de empilhadeiras e caminhões de transporte de carga pesada.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletromagnéticas em Almoxarifados e Áreas Críticas',
      reason: 'Garantem travamento de alta resistência em depósitos de ferramentas, subestações e setores de matérias-primas com controle de abertura integrado às normas industriais.'
    }
  ],
  projectArchitecture: [
    'Portaria de Pedestres e Bateria de Torniquetes: Instalação de bateria de torniquetes de altura total em aço galvanizado a fogo ou aço inoxidável AISI 304, abrigados sob cobertura metálica com canalização de escoamento e leitores de identificação velozes.',
    'Guarita de Vigilância e Triagem de Terceiros: Balcão blindado para atendimento e conferência de ordens de serviço de terceirizados, leitor de documentos, captura fotográfica cadastral e emissão de crachás provisórios codificados.',
    'Pátio de Carga e Segregação Viária: Instalação de cancelas veiculares com braços de alta visibilidade e iluminação por LED, antenas UHF receptoras de longo alcance para caminhões e botoeiras com semáforos de controle de tráfego verde/vermelho.',
    'Fechamento e Intertravamento de Áreas Críticas: Instalação de fechaduras eletromagnéticas estanques com suportes industriais e botoeiras de emergência seladas em subestações de energia e depósitos de resíduos químicos perigosos.',
    'Infraestrutura Industrial e Banco de Contingência: Montagem de painéis elétricos com padrão industrial NEMA/IP66, cabos blindados contra ruído elétrico de motores pesados, no-breaks industriais de grande porte e proteção contra surtos elétricos (DPS).'
  ],
  faqs: [
    {
      question: 'Os leitores faciais e as catracas resistem à poeira pesada e à chuva de Curitiba?',
      answer: 'Sim. Em projetos industriais especificamos exclusivamente equipamentos com classificação de proteção no mínimo IP65 para áreas abertas ou galpões com poeira em suspensão. Isso garante vedação hermética contra partículas sólidas e jatos de água, preservando as placas eletrônicas e os sensores ópticos da umidade e variações térmicas locais.'
    },
    {
      question: 'Como evitar gargalos e atrasos no início do turno fabril com milhares de operários?',
      answer: 'Dimensionamos a quantidade de passagens com base na taxa de fluxo horária da indústria, considerando que cada torniquete com reconhecimento facial processa entre 25 e 35 pessoas por minuto. Para turnos com 600 funcionários que precisam entrar em 15 minutos, calculamos uma bateria de pelo menos 3 torniquetes dedicados, evitando qualquer fila.'
    },
    {
      question: 'O sistema de controle de acesso pode bloquear terceirizados com documentação de segurança vencida?',
      answer: 'Sim. O sistema de controle de acesso permite vincular o cadastro do colaborador terceiro às datas de validade da integração de segurança, do Atestado de Saúde Ocupacional (ASO) e de treinamentos de NR. Se algum desses documentos vencer, a catraca nega a passagem automaticamente até a devida regularização junto ao SESMT.'
    },
    {
      question: 'Como funciona a integração do controle de acesso industrial com o sistema de incêndio?',
      answer: 'Em cumprimento estrito às exigências do Corpo de Bombeiros da Polícia Militar do Paraná, todas as catracas, torniquetes e cancelas recebem um comando de desativação instantânea ligado à central de alarme de incêndio. Em caso de sinistro, os braços destravam em rota livre para evacuação imediata do parque fabril.'
    },
    {
      question: 'É possível separar o fluxo de pedestres e veículos pesados nas docas?',
      answer: 'Essa segregação é indispensável para evitar atropelamentos e acidentes com empilhadeiras. Instalamos gradis de proteção física com cancelas automáticas exclusivas para caminhões e direcionamos todo o fluxo de motoristas e ajudantes para catracas de pedestres adjacentes com faixa de pedestres delimitada.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'cancelas-e-acesso-veicular', 'fechaduras-eletromagneticas'],
  relatedSegments: ['empresas-e-escritorios', 'condominios-comerciais'],
  whatsappContext: 'controle de acesso industrial em Curitiba e Região'
};
