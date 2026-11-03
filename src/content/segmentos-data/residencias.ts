import { SegmentContent } from '../types';

export const residenciasSegment: SegmentContent = {
  slug: 'residencias',
  title: 'Controle de Acesso Residencial em Curitiba',
  seoTitle: 'Fechaduras Digitais e Acesso Residencial Curitiba',
  metaDescription: 'Fechaduras digitais, vídeo porteiros e controle de acesso residencial em Curitiba. Praticidade e segurança para sua família. Solicite orçamento!',
  keyword: 'controle de acesso para residencias em Curitiba',
  directAnswer: 'O controle de acesso residencial para casas térreas, sobrados e condomínios fechados horizontais em Curitiba combina fechaduras digitais biométricas, vídeo porteiros IP conectados a smartphone e automação de portões. O sistema permite que a família dispense totalmente o uso de molhos de chaves físicas pesadas, atenda encomendas e entregas remotamente à distância pelo celular e libere prestadores de serviço com senhas temporárias seguras.',
  // TODO: foto real
  image: {
    src: '/images/segmento-residencias.webp',
    alt: 'Fechadura digital biométrica e vídeo porteiro instalados em residência em Curitiba',
    width: 800,
    height: 600
  },
  typicalProblems: [
    'Esquecimento recorrente ou perda de chaves de metal convencionais na rua ou no trabalho, exigindo serviços caros de chaveiro de plantão e substituição contínua de miolos de fechaduras.',
    'Dificuldade para receber entregadores de compras online, encomendas expressas dos Correios e correspondências registradas quando não há nenhum familiar presente no domicílio durante a semana.',
    'Falta de controle rigoroso e registros auditáveis sobre horários de entrada e saída de diaristas, jardineiros, pedreiros e outros prestadores de reformas esporádicas no imóvel residencial.',
    'Necessidade incômoda de ir até o portão externo sob chuva ou frio intenso de Curitiba apenas para verificar quem está tocando a campainha no muro da rua.',
    'Portão social de pedestres ou portão basculante de garagem esquecidos encostados ou destravados por distração de familiares, expondo o patrimônio a invasões e furtos oportunistas.',
    'Fechaduras elétricas simples de sobrepor que travam com frequência ou emitem zumbidos incômodos devido a desalinhamento de batente provocado pela umidade do clima de Curitiba.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Digitais e Eletroímãs de Alta Segurança',
      reason: 'Oferecem travamento silencioso e automático ao encostar a folha no batente, com abertura prática por impressão digital, senha touch numérica protegida ou aplicativo móvel, dispensando carregar molhos de chaves pesadas no bolso.'
    },
    {
      solutionSlug: 'interfone-e-video-porteiro',
      title: 'Vídeo Porteiro IP Wi-Fi com Atendimento no Celular',
      reason: 'Transmite imagem colorida em alta definição e possibilita conversar com o visitante e destravar o portão pelo aplicativo no smartphone onde você estiver, mesmo quando estiver viajando fora de Curitiba.'
    },
    {
      solutionSlug: 'biometria',
      title: 'Leitores Biométricos Digitais Embutidos para Residências',
      reason: 'Garantem identificação imediata dos membros da família com simples toque do dedo indicador ou polegar, apresentando alta resistência a intempéries climáticas e memória interna protegida para cadastramento de dezenas de impressões digitais.'
    },
    {
      solutionSlug: 'senha-e-teclado',
      title: 'Teclados Touch Antiespionagem com Senha Temporária',
      reason: 'Permitem gerar senhas de uso único ou senhas com validade cronometrada para diaristas ou técnicos de manutenção predial, expirando automaticamente o código após o término do horário determinado pelo morador.'
    },
    {
      solutionSlug: 'cancelas-e-acesso-veicular',
      title: 'Automação Rápida de Portão com Controle Anticlonagem',
      reason: 'Proporciona abertura rápida do portão veicular basculante ou deslizante por receptores com tecnologia de código rolante anticlonagem ou tags veiculares coladas no para-brisa que não podem ser clonadas em chaveiros da cidade.'
    }
  ],
  projectArchitecture: [
    'Portão Social Frontal e Perímetro Externo: Instalação de painel externo de vídeo porteiro com câmera grande-angular e visão noturna infravermelha, integrado a fechadura elétrica de embutir ou eletroímã com suporte de proteção contra chuva.',
    'Porta Principal da Casa (Entrada Social): Instalação e alinhamento milimétrico de fechadura digital de embutir com leitor biométrico, teclado numérico iluminado, alarme de arrombamento e cilindro mecânico oculto de emergência.',
    'Portão de Garagem e Estacionamento: Automatização com motor de alta velocidade e central receptora de radiofrequência com criptografia rolling code, além de sensor óptico fotocélula para proteção contra fechamento sobre o automóvel.',
    'Comunicação de Rede e Conectividade Doméstica: Lançamento de cabo de rede Cat6 ou repetidor Wi-Fi dedicado para conectar a tela interna do vídeo porteiro e a fechadura ao roteador de internet residencial com segurança de firewall.',
    'Alimentação Elétrica Ininterrupta de Segurança: Instalação de mini-nobreak compacto dedicado para os portões e câmeras de entrada, garantindo que os acessos continuem operando mesmo durante temporais com apagões em Curitiba.'
  ],
  faqs: [
    {
      question: 'A fechadura digital funciona se faltar energia elétrica na residência?',
      answer: 'Sim. A maioria das fechaduras digitais residenciais opera com pilhas alcalinas AA com autonomia que varia de 10 a 14 meses. Quando a carga fica baixa, o dispositivo emite avisos sonoros e visuais semanas antes do esgotamento. Caso as pilhas acabem por completo, é possível encostar uma bateria comum de 9V nos contatos de emergência externos ou usar a chave mecânica reserva.'
    },
    {
      question: 'Consigo atender o vídeo porteiro e abrir o portão mesmo quando estiver viajando?',
      answer: 'Sim. Com o vídeo porteiro IP conectado à rede de internet da sua residência, toda vez que alguém toca a campainha no portão da rua, o aplicativo no smartphone dos moradores toca como uma chamada de vídeo. Você visualiza a imagem em tempo real, conversa com a pessoa e pode acionar o destravamento com um toque na tela.'
    },
    {
      question: 'Como funciona a criação de senhas para diaristas ou prestadores de serviços?',
      answer: 'Pelo aplicativo no smartphone ou direto no teclado da fechadura, você pode cadastrar senhas temporárias com horário restrito (por exemplo, válida apenas às terças-feiras entre 08h e 17h) ou senhas descartáveis de uso único que perdem a validade imediatamente após a primeira abertura.'
    },
    {
      question: 'A fechadura avisa se alguém tentar forçar a porta ou errar a senha várias vezes?',
      answer: 'Sim. As fechaduras digitais possuem sensor de arrombamento que dispara um alarme sonoro estridente no local se a porta for forçada fisicamente ou se houver 5 tentativas consecutivas de senha incorreta, bloqueando o teclado por alguns minutos e enviando notificação no aplicativo.'
    },
    {
      question: 'É possível instalar fechadura digital em portas pivotantes de madeira maciça ou vidro?',
      answer: 'Sim. Existem modelos específicos com trincos rolete reforçados projetados especialmente para portas pivotantes pesadas com puxadores em inox, bem como suportes em U especiais para portas de vidro temperado sem necessidade de furos na folha.'
    }
  ],
  relatedSolutions: ['fechaduras-eletromagneticas', 'interfone-e-video-porteiro', 'biometria', 'senha-e-teclado'],
  relatedSegments: ['condominios-residenciais', 'empresas-e-escritorios'],
  whatsappContext: 'controle de acesso residencial em Curitiba'
};
