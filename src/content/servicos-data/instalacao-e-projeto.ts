import { ServiceContent } from '../types';

export const instalacaoEProjetoService: ServiceContent = {
  slug: 'instalacao-e-projeto',
  title: 'Instalação e Projeto de Controle de Acesso em Curitiba',
  seoTitle: 'Instalação de Controle de Acesso Curitiba | Projetos',
  metaDescription: 'Instalação profissional de controle de acesso em Curitiba. Projetos para condomínios e empresas com cabeamento estruturado e garantia. Orçamento!',
  keyword: 'instalacao de controle de acesso Curitiba',
  directAnswer: 'Projetamos e executamos a instalação completa de sistemas de controle de acesso físico para condomínios, empresas e indústrias em Curitiba e Região Metropolitana. Nossa engenharia especializada abrange desde a vistoria técnica detalhada no local e cálculo de esforço de retenção em portas até o lançamento de cabeamento estruturado blindado, integração de clausuras de pedestres, parametrização de softwares e treinamento operacional assistido da equipe.',
  // TODO: foto real
  image: {
    src: '/images/servico-instalacao-projeto.webp',
    alt: 'Técnico especialista instalando painel de controle de acesso e cabeamento em Curitiba',
    width: 800,
    height: 600
  },
  scope: [
    'Vistoria técnica presencial no imóvel com levantamento de vãos, tipos de batentes, fluxo diário de pessoas e pontos de alimentação elétrica.',
    'Elaboração de memorial descritivo com especificação de controladoras IP, fechaduras eletroímã, leitores faciais e lógica de intertravamento de eclusas.',
    'Lançamento de cabeamento estruturado de rede de alta categoria (Cat6) e fiação de energia em eletrodutos galvanizados aparentes ou embutidos.',
    'Montagem de rack organizador com identificação completa de circuitos por anilhas numeradas, barramento de aterramento e proteção contra surtos (DPS).',
    'Instalação de fontes de alimentação colmeia de 13,8V com bancos de baterias estacionárias e no-breaks senoidais para autonomia sem rede elétrica.',
    'Parametrização avançada de regras de acesso em software de gestão, cadastro biométrico inicial assistido e treinamento formal da equipe de portaria.',
    'Testes de carga e estresse elétrico com simulação de corte de energia da rede pública para homologar a comutação instantânea das baterias de contingência sem travamento de relés.'
  ],
  processSteps: [
    {
      step: '01',
      title: 'Diagnóstico e Vistoria Técnica no Local',
      description: 'Nossa equipe técnica visita o condomínio ou empresa em Curitiba para analisar a planta física, medir o peso e o alinhamento das portas existentes, verificar a estabilidade da rede elétrica e mapear as rotas de cabos necessárias para a execução limpa.'
    },
    {
      step: '02',
      title: 'Engenharia do Projeto e Especificação de Equipamentos',
      description: 'Desenvolvemos o esquema elétrico de intertravamento e selecionamos os equipamentos mais adequados para a taxa de fluxo do cliente, definindo posições estratégicas para leitores faciais, botoeiras sem toque, fechaduras magnéticas e sensores de porta aberta.'
    },
    {
      step: '03',
      title: 'Infraestrutura e Lançamento de Cabeamento Blindado',
      description: 'Executamos a fixação de eletrodutos de aço ou canaletas de acabamento em alumínio de alta resistência, passando cabos blindados de dados e alimentação sem emendas intermediárias, garantindo estética impecável e imunidade contra ruídos e interferências eletromagnéticas.'
    },
    {
      step: '04',
      title: 'Instalação de Fechaduras, Leitores e Controladoras',
      description: 'Realizamos a fixação mecânica milimétrica de eletroímãs com suportes reguláveis, montagem dos terminais de reconhecimento facial em pedestais de inox e organização do quadro central de comando com bornes de conexão e fontes flutuantes protegidas.'
    },
    {
      step: '05',
      title: 'Configuração de Software e Testes de Homologação',
      description: 'Instalamos o software de portaria, criamos matrizes de permissão por horários e realizamos testes de esforço mecânico contínuo, tempo de resposta dos relés de acionamento, funcionamento da rotina de emergência e comportamento na queda de energia.'
    },
    {
      step: '06',
      title: 'Entrega Técnica e Treinamento Operacional Assistido',
      description: 'Acompanhamos presencialmente a operação nos primeiros dias de funcionamento, realizamos o treinamento completo dos porteiros e administradores e entregamos o manual operacional com termos de garantia contratual e suporte pós-instalação em Curitiba.'
    }
  ],
  faqs: [
    {
      question: 'A instalação exige quebrar paredes, pisos ou alterar a fachada do imóvel?',
      answer: 'Priorizamos métodos construtivos limpos e não destrutivos. Em grande parte dos condomínios e escritórios em Curitiba, utilizamos tubulações de segurança já existentes ou instalamos canaletas de sobrepor de alumínio escovado de excelente acabamento arquitetônico. Caso seja imprescindível passar cabos em calçadas para cancelas veiculares, realizamos corte fino com serra diamantada e acabamento com selante elástico especial, preservando o pavimento e a estética original da edificação.'
    },
    {
      question: 'Vocês emitem Anotação de Responsabilidade Técnica (ART) ou termo formal de garantia?',
      answer: 'Sim. Todos os nossos projetos de implantação de controle de acesso podem ser acompanhados de ART registrada junto ao CREA-PR, atestando a conformidade da engenharia elétrica e de segurança física com as normas ABNT aplicáveis. Além disso, fornecemos termo contratual formal de garantia de peças e mão de obra, com suporte técnico presencial e atendimento ágil em Curitiba e Região Metropolitana.'
    },
    {
      question: 'Como funciona a eclusa de pedestres durante a fase de instalação?',
      answer: 'Para não deixar o condomínio ou a empresa vulnerável durante os serviços, planejamos a execução por etapas sequenciais. Primeiro instalamos toda a infraestrutura de cabeamento e fontes de contingência; em seguida, ativamos a fechadura de uma porta mantendo a outra operacional, migrando para o intertravamento final sem desproteger o perímetro em nenhum instante de trabalho.'
    },
    {
      question: 'Qual a importância de dimensionar corretamente a bitola dos cabos de alimentação das fechaduras?',
      answer: 'Fechaduras eletromagnéticas consomem corrente contínua constante de 300mA a 500mA. Se o cabo de alimentação tiver bitola insuficiente ou a distância até a fonte for muito longa, ocorre queda de tensão severa na ponta da linha (chegando a menos de 10V em vez dos 12V necessários). Isso reduz drasticamente a força de atração magnética da porta, permitindo que ela seja aberta com um simples empurrão. Dimensionamos cabos de 1,5mm² a 2,5mm² de cobre puro conforme a distância.'
    },
    {
      question: 'O sistema instalado pode ser integrado posteriormente a portarias remotas de terceiros?',
      answer: 'Sim. Não utilizamos equipamentos de protocolo proprietário fechado que prendam o cliente a um único fornecedor. As controladoras e terminais instalados possuem saídas Wiegand, conexões seriais OSDP, relés de contato seco e portas TCP/IP padrão de mercado. Qualquer empresa de portaria remota ou monitoramento 24h que opere em Curitiba poderá integrar e gerenciar os equipamentos sem necessidade de retrabalho ou descarte de componentes.'
    }
  ],
  relatedSolutions: ['reconhecimento-facial', 'catracas', 'fechaduras-eletromagneticas', 'software-de-gestao'],
  relatedServices: ['manutencao', 'modernizacao', 'locacao'],
  whatsappContext: 'instalação e projeto de controle de acesso em Curitiba'
};
