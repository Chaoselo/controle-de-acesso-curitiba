import { SegmentContent } from '../types';

export const condominiosComerciaisSegment: SegmentContent = {
  slug: 'condominios-comerciais',
  title: 'Controle de Acesso para Condomínios Comerciais em Curitiba',
  seoTitle: 'Controle de Acesso para Condomínio Comercial Curitiba',
  metaDescription: 'Controle de acesso para edifícios corporativos e condomínios comerciais em Curitiba. Catracas, crachás e recepção ágil. Peça orçamento via WhatsApp!',
  keyword: 'controle de acesso para condominios comerciais em Curitiba',
  directAnswer: 'O controle de acesso para edifícios comerciais e centros corporativos em Curitiba organiza o fluxo diário de condôminos, funcionários de empresas, clientes e prestadores de serviços temporários. Composto por catracas balcão em aço inox, leitura facial ágil, terminais de recepção e chamada inteligente de elevadores quando compatível, o sistema reduz filas no saguão e preserva a confidencialidade de cada conjunto comercial.',
  image: {
    src: '/images/controle-acesso-segmento-condominio-comercial.webp',
    alt: 'Leitor biométrico com teclado instalado em porta de vidro de área comercial',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Congestionamento severo e filas extensas de visitantes no saguão de entrada nos horários de início de expediente matutino, gerando atrasos recorrentes para reuniões e insatisfação geral.',
    'Circulação livre e desimpedida de pessoas estranhas pelos corredores de andares privativos sem que a recepção tenha registrado a sala ou a empresa de destino.',
    'Dificuldade para gerenciar simultaneamente veículos de condôminos mensalistas e visitantes rotativos no estacionamento subterrâneo do edifício corporativo, gerando conflitos nas cancelas e lentidão no tráfego.',
    'Descentralização de cadastros entre as diversas empresas ocupantes do edifício, dificultando a revogação pontual e imediata de acessos quando colaboradores são desligados das companhias instaladas.',
    'Permanência desregulada de prestadores de manutenção em áreas técnicas do prédio fora do horário comercial autorizado sem a devida autorização ou supervisão da administração predial responsável.',
    'Vulnerabilidade nas garagens e docas de carga durante o recebimento de entregas volumosas de encomendas e suprimentos corporativos sem conferência prévia e conferência de credenciais no portão.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'catracas',
      title: 'Catracas Balcão e Flap em Aço Inox com Vidro',
      reason: 'Oferecem estética corporativa refinada e bloqueio mecânico individualizado de passagem, impedindo a carona física e suportando com excelência e durabilidade comprovada milhares de giros diários com baixo ruído de operação em saguões.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais Faciais Integrados às Catracas',
      reason: 'Permitem que funcionários habituais e proprietários de conjuntos comerciais acessem o prédio sem tocar em nenhuma superfície, reduzindo o tempo de validação e passagem para frações de segundo na recepção.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Cartões RFID de Proximidade e Crachás de Visitantes',
      reason: 'Possibilitam emissão instantânea de credenciais provisórias para visitantes na recepção, com devolução física obrigatória na urna recolhedora da catraca de saída para liberar o giro mecânico sem perdas de crachás.'
    },
    {
      solutionSlug: 'cancelas-e-acesso-veicular',
      title: 'Cancelas Rápidas com Segregação Mensalista e Rotativo',
      reason: 'Diferenciam com precisão automóveis cadastrados de proprietários por tag UHF de veículos de visitantes rotativos, integrando-se com total fluidez operacional a sistemas de bilhetagem e automação de estacionamento tarifado em Curitiba.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletromagnéticas em Portas Estratégicas',
      reason: 'Garantem travamento seguro e silencioso em portas de acesso aos pavimentos e áreas técnicas, integradas ao sistema de controle predial com liberação rápida e segura.'
    }
  ],
  projectArchitecture: [
    'Hall de Entrada e Bateria de Bloqueios: Dimensionamento e fixação de bateria com múltiplas catracas balcão ou tipo flap em aço inox 304, reservando uma passagem ampla acessível com portão motorizado conforme a norma ABNT NBR 9050.',
    'Balcão de Recepção e Cadastramento: Instalação de leitor de documentos por scanner óptico, webcam de alta definição para captura cadastral e terminais de autoatendimento para pré-cadastro de visitantes com geração de QR Code no celular.',
    'Integração com Elevadores e Andares: Interligação entre a controladora de acesso e a placa de manobra dos elevadores (quando tecnicamente compatível com a fabricante), liberando a chamada apenas para o andar de destino da credencial autenticada.',
    'Pátio de Estacionamento e Carga: Instalação de cancelas veiculares com motores de alto ciclo na entrada da garagem, com leitoras UHF para veículos de mensalistas e totens emissores de cartões de proximidade para clientes avulsos.',
    'Infraestrutura de Rede e Servidor Central: Estruturação de rede VLAN dedicada com no-break para isolar o tráfego de controle de acesso da rede pública de internet, com sincronização em tempo real e relatórios de ocupação predial para atendimento ao Corpo de Bombeiros.'
  ],
  faqs: [
    {
      question: 'Como o sistema de controle de acesso lida com horários comerciais estendidos e finais de semana?',
      answer: 'O sistema permite estabelecer matrizes horárias personalizadas por empresa ou perfil de usuário. Assim, funcionários comuns podem ter acesso liberado apenas de segunda a sexta das 07h00 às 20h00, enquanto diretores ou equipes de plantão têm permissão ininterrupta 24 horas por dia, com registro de qualquer tentativa fora do padrão.'
    },
    {
      question: 'É possível pré-cadastrar visitantes para reuniões corporativas importantes em Curitiba?',
      answer: 'Sim. Os gestores de cada conjunto comercial podem acessar a interface web ou aplicativo do sistema de acesso e cadastrar o nome e documento do visitante previamente. O convidado recebe um QR Code criptografado no e-mail ou WhatsApp para apresentar direto no leitor da catraca, sem enfrentar a fila do balcão de recepção.'
    },
    {
      question: 'O que acontece quando o visitante precisa sair do condomínio comercial?',
      answer: 'Instalamos urnas recolhedoras de cartões integradas à catraca de saída. O visitante insere o cartão provisório na fenda, a leitora interna valida a credencial, a urna engole o crachá em um compartimento seguro e o braço da catraca é liberado para a saída, recuperando o crachá para reuso automático.'
    },
    {
      question: 'Como funciona a integração com as botoeiras e chamadas dos elevadores do edifício?',
      answer: 'Em edifícios comerciais modernos com sistemas de elevadores compatíveis, instalamos módulos de relés de piso ou integração por protocolo de rede. Ao validar o acesso na catraca, o sistema envia o comando para o painel do elevador, que designa a cabine específica e pré-seleciona o andar da empresa visitada.'
    },
    {
      question: 'Quais relatórios de segurança o condomínio comercial consegue extrair diariamente?',
      answer: 'A administração predial obtém relatórios completos de contagem instantânea de pessoas presentes no edifício (fundamental para evacuação em incêndios), histórico de horários de entrada e saída por colaborador, registro fotográfico de visitantes e tentativas de acesso negadas com motivo detalhado.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'cartao-e-tag-rfid', 'fechaduras-eletromagneticas'],
  relatedSegments: ['empresas-e-escritorios', 'condominios-residenciais'],
  whatsappContext: 'controle de acesso para condomínio comercial em Curitiba'
};
