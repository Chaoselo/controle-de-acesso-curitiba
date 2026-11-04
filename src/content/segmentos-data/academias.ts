import { SegmentContent } from '../types';

export const academiasSegment: SegmentContent = {
  slug: 'academias',
  title: 'Controle de Acesso para Academias em Curitiba',
  seoTitle: 'Catracas e Controle de Acesso para Academias Curitiba',
  metaDescription: 'Catracas e controle biométrico para academias em Curitiba. Bloqueio automático de inadimplentes e gestão integrada. Peça orçamento via WhatsApp!',
  keyword: 'controle de acesso para academias em Curitiba',
  directAnswer: 'O controle de acesso para academias, boxes de crossfit, centros de lutas e estúdios em Curitiba automatiza a catraca de entrada e sincroniza a liberação com o status financeiro de cada aluno. Ao validar planos ativos, mensalidades em dia e atestados médicos através de biometria digital ou reconhecimento facial ultra-rápido, o sistema impede a entrada de inadimplentes sem constrangimentos na recepção e assegura fluxo contínuo nos horários de pico.',
  image: {
    src: '/images/controle-acesso-segmento-academias.webp',
    alt: 'Catracas com terminais de leitura na entrada de uma academia',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Entrada recorrente de alunos com mensalidades vencidas ou planos expirados que frequentam o espaço de musculação gerando prejuízos financeiros contínuos e inadimplência à administração da academia.',
    'Recepção sobrecarregada com conferência manual de pagamentos e cobranças na boca do caixa nos horários de pico de maior movimento, gerando filas e desconforto para os alunos.',
    'Empréstimo indevido de cartões de proximidade e crachás físicos entre amigos para treinar de graça sem que a recepcionista consiga notar no balcão de entrada.',
    'Filas extensas de espera na entrada no início da manhã (06h às 08h) e no final da tarde (18h às 21h) por causa de leitores biométricos lentos ou desgastados.',
    'Falta de flexibilidade operacional para autorizar a entrada imediata de clientes que adquiriram diárias de treino avulsas (day-pass) ou aulas experimentais gratuitas no estabelecimento fitness.',
    'Dificuldade para integrar o hardware de catraca existente ao software de gestão fitness em nuvem utilizado pela empresa (como Evo, Tecnofit, Next Fit, SCA ou Pacto).'
  ],
  idealSolutions: [
    {
      solutionSlug: 'catracas',
      title: 'Catracas Pedestal em Aço Inox com Giro Suave',
      reason: 'Construídas com mecânica reforçada em aço escovado e amortecimento hidráulico que suporta milhares de giros diários sem trancos, ruídos incômodos ou desgaste prematuro de peças mecânicas em recepções altamente movimentadas.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais Faciais Rápidos com Inteligência Artificial',
      reason: 'Reconhecem o rosto do aluno em menos de 0,3 segundo mesmo com suor no rosto, boné ou fones de ouvido, garantindo autenticação intransferível e fila zero na entrada da academia.'
    },
    {
      solutionSlug: 'biometria',
      title: 'Leitores Biométricos Digitais Ópticos de Alta Resolução',
      reason: 'Representam a solução mais tradicional e com excelente custo-benefício para academias e estúdios, garantindo que somente o titular matriculado consiga girar o braço da catraca com a impressão digital cadastrada.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Pulseiras de Silicone RFID à Prova de Água',
      reason: 'Ideais para alunos de natação, hidroginástica ou áreas úmidas de saunas, permitindo acesso à catraca e travamento de armários nos vestiários sem preocupação com chaves mecânicas que enferrujam com facilidade.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletromagnéticas em Salas Exclusivas e Vestiários',
      reason: 'Garantem travamento e acesso controlado a estúdios de pilates, áreas de avaliação física ou dependências restritas da academia, integradas às credenciais dos alunos.'
    }
  ],
  projectArchitecture: [
    'Recepção e Bateria de Catracas: Instalação de uma ou duas catracas pedestal em aço inoxidável escovado 304 com giro bidirecional configurado (entrada e saída controladas), acompanhadas de portão lateral para acessibilidade e entrada de cadeirantes.',
    'Balcão de Atendimento e Matrículas: Leitor biométrico de mesa USB ou leitor facial de cadastramento rápido conectado ao computador da recepção para captura de digitais ou foto durante a formalização da matrícula.',
    'Comunicação em Rede com o Software de Gestão: Integração por API nativa ou banco de dados sincronizado com softwares fitness líderes de mercado (Evo, Tecnofit, Next Fit, Pacto, CloudFit, SCA), sem dependência de processos manuais de exportação.',
    'Vestiários e Áreas Úmidas: Implantação de fechaduras para armários acionadas pela mesma credencial ou leitora de proximidade para controle de acesso restrito a áreas como piscina, estúdio de pilates ou sauna.',
    'Proteção Elétrica com Nobreak: Fornecimento de nobreak para proteger a controladora da catraca e o computador da recepção contra oscilações de voltagem, mantendo a operação das catracas ativa mesmo em eventuais apagões.'
  ],
  faqs: [
    {
      question: 'Como funciona o bloqueio automático de alunos com pagamento atrasado?',
      answer: 'A catraca consulta em tempo real o status financeiro do aluno no software fitness. Se a mensalidade estiver vencida além do prazo de carência ou tolerância cadastrado (por exemplo, 3 ou 5 dias), a catraca não gira, emite um sinal sonoro discreto e exibe no display uma mensagem amigável para que o aluno procure a recepção.'
    },
    {
      question: 'O leitor de reconhecimento facial funciona quando o aluno chega suado do treino de corrida?',
      answer: 'Sim. Os terminais de reconhecimento facial modernos utilizam iluminação infravermelha e algoritmos neurais que analisam a estrutura óssea do rosto, não sendo afetados por suor, mudanças de penteado, maquiagem, barba ou uso de acessórios esportivos como fones de ouvido.'
    },
    {
      question: 'A catraca é compatível com o software que a minha academia já utiliza em Curitiba?',
      answer: 'Sim. Nossas controladoras e catracas são compatíveis com os principais softwares de gestão fitness do mercado nacional, incluindo Tecnofit, Evo, Next Fit, Pacto, SCA, CloudFit e muitos outros, permitindo implantação rápida sem necessidade de trocar de sistema administrativo.'
    },
    {
      question: 'Como liberar a entrada de alunos que compraram planos por aplicativos de benefício (Gympass/Wellhub, TotalPass)?',
      answer: 'A integração com aplicativos corporativos de bem-estar pode ser configurada diretamente no software de gestão da academia, liberando a catraca por meio de validação de check-in no aplicativo do usuário (via token ou geolocalização) ou através de crachá/facial previamente associado.'
    },
    {
      question: 'É possível configurar tolerâncias para alunos esquecidos ou aulas experimentais?',
      answer: 'Sim. O sistema permite configurar dias de carência para pagamento, quantidade de créditos liberados e geração de passes temporários ou QR Codes descartáveis válidos para um único dia de treino (day-use) ou aula teste para novos interessados.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'biometria', 'fechaduras-eletromagneticas'],
  relatedSegments: ['escolas-e-universidades', 'condominios-comerciais'],
  whatsappContext: 'catraca e controle de acesso para academia em Curitiba'
};
