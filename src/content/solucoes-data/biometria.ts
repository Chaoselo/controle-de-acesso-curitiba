import { SolutionContent } from '../types';

export const biometriaSolution: SolutionContent = {
  slug: 'biometria',
  title: 'Controle de acesso biométrico em Curitiba',
  seoTitle: 'Controle de Acesso Biométrico em Curitiba | Leitor Digital',
  metaDescription: 'Controle de acesso por biometria em Curitiba: leitores de impressão digital para portas, catracas e fechaduras. Instalação e manutenção. Peça orçamento!',
  keyword: 'controle de acesso biométrico em Curitiba',
  directAnswer: 'O controle de acesso biométrico utiliza a impressão digital de cada indivíduo para autenticar e liberar a passagem por portas, catracas ou portões com agilidade. Em Curitiba e Região Metropolitana, é uma tecnologia consolidada para empresas, condomínios, clínicas, academias e indústrias que buscam substituir chaves físicas e crachás emprestados, mantendo registro de entradas e saídas.',
  image: {
    src: '/images/controle-acesso-biometria.webp',
    alt: 'Dedo sendo posicionado em leitor biométrico de impressão digital instalado na parede',
    width: 1200,
    height: 675
  },
  howItWorks: [
    'Captura óptica ou capacitiva: Quando o usuário posiciona a ponta do dedo na área de leitura, o sensor captura o relevo da impressão digital. Em leitores ópticos, feixes de LED iluminam o prisma; em leitores capacitivos, uma matriz de sensores lê variações elétricas da pele, ajudando a dificultar o uso de moldes simples.',
    'Conversão algorítmica em modelo matemático: Na maioria dos equipamentos, a imagem da impressão digital não é guardada: ela é convertida em um modelo matemático (template biométrico), que costuma ser protegido por criptografia. O tratamento exato varia conforme o modelo e o fabricante.',
    'Comparação e validação em banco de dados: O leitor compara o template gerado no momento da leitura com a biblioteca de usuários cadastrada na memória local ou na controladora, liberando ou bloqueando a passagem conforme as regras definidas.',
    'Comando elétrico de abertura da barreira física: Confirmada a permissão, o relé da controladora aciona o destravamento de uma fechadura eletrônica, eletroímã (inclusive em portas de vidro) ou libera o giro de uma catraca.',
    'Registro de eventos: A controladora grava internamente data, hora, ponto de acesso e identificador do usuário, sincronizando os registros com o sistema de gestão quando conectado em rede.'
  ],
  whenToChoose: [
    'Empresas e escritórios em Curitiba que precisam restringir o acesso a salas técnicas, servidores (CPD/TI), financeiro, estoque e almoxarifado.',
    'Condomínios que desejam controlar acessos de áreas compartilhadas, portarias e dependências de serviço sem depender exclusivamente de chaves mecânicas.',
    'Academias, clínicas e escolas que buscam uma identificação individual prática integrada a catracas ou portas internas.',
    'Ambientes internos ou protegidos contra chuva direta que pedem uma solução consolidada e de manutenção acessível.'
  ],
  advantages: [
    'Identificação individual: A impressão digital ajuda a evitar o empréstimo indevido de chaves ou crachás entre usuários, reduzindo entradas sem registro.',
    'Tecnologia consolidada: Trata-se de uma opção madura, com equipamentos e opções variadas conforme o porte da operação.',
    'Praticidade no dia a dia: Em geral, os leitores processam a validação rapidamente, evitando que o usuário precise carregar chaves.',
    'Operação autônoma local: Conforme o modelo, os cadastros ficam armazenados na memória do equipamento, permitindo continuidade mesmo em oscilações da rede externa.',
    'Compatibilidade de integração: Muitos modelos utilizam padrões comuns de mercado, como Wiegand e OSDP, facilitando a conexão com fechaduras e catracas.'
  ],
  limitations: [
    'Exigência de contato físico: O sensor demanda toque direto do dedo, o que pode tornar o reconhecimento facial ou a tag RFID preferíveis em ambientes com exigência sanitária.',
    'Variação de leitura conforme a pele: Pessoas idosas, crianças ou profissionais que manuseiam produtos químicos e ferramentas podem ter digitais gastas ou ressecadas, exigindo cadastro alternativo.',
    'Sensibilidade a exposição climática direta: Em áreas abertas sob chuva e sol forte, é necessário escolher equipamento com vedação compatível com o ambiente ou proteção física adequada.',
    'Limpeza periódica do prisma: Poeira e oleosidade acumuladas no sensor podem causar falhas de leitura se não houver higienização regular.',
    'Dependência de contingência elétrica: Quando associado a fechaduras eletroímã (fail-safe), o conjunto depende de fonte carregadora com bateria auxiliar ou nobreak para não destravar em quedas de energia.'
  ],
  lgpdNote: 'A impressão digital é classificada como dado pessoal sensível pela Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Na maioria dos equipamentos, a leitura é convertida em um modelo matemático (template) em vez de armazenar a imagem da digital, variando conforme o fabricante. O controlador local (empresa ou condomínio) deve definir finalidade específica, informar os titulares, restringir o acesso aos cadastros, prever meio alternativo para quem não puder ou optar por não cadastrar a biometria e estabelecer política de descarte. Este texto é informativo e não substitui a orientação de um profissional jurídico.',
  integrations: [
    'Fechaduras eletromagnéticas (eletroímã) para portas de madeira, metal e portas de vidro temperado.',
    'Fechos elétricos e fechaduras solenoide conforme a esquadria.',
    'Catracas pedestal, balcão e torniquetes industriais.',
    'Controladoras em rede para regras de horários e registro de eventos.',
    'Botoeiras de saída sem toque (no-touch) e molas aéreas hidráulicas.',
    'Fontes carregadoras com baterias auxiliares e nobreaks.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Vistoria Técnica e Diagnóstico em Curitiba',
      description: 'Avaliamos no local o tipo de porta (inclusive portas de vidro), o fluxo diário de usuários, a infraestrutura de tubulação e as condições da rede elétrica antes de definir o orçamento.'
    },
    {
      step: '02',
      title: 'Passagem de Cabeamento e Alimentação',
      description: 'Executamos o lançamento de cabos de dados e alimentação com bitola compatível com a distância até a fonte e a controladora, utilizando eletrodutos ou canaletas.'
    },
    {
      step: '03',
      title: 'Instalação Mecânica de Fechaduras e Suportes',
      description: 'Fixamos e alinhamos fechaduras eletromagnéticas, suportes próprios para portas de vidro ou batentes convencionais e molas aéreas para fechamento suave.'
    },
    {
      step: '04',
      title: 'Parametrização do Equipamento',
      description: 'Configuramos as regras de horário, o tempo de acionamento do relé conforme o tipo de passagem e o comportamento de emergência.'
    },
    {
      step: '05',
      title: 'Cadastramento Inicial e Orientação Operacional',
      description: 'Acompanhamos os cadastros iniciais das digitais, orientamos sobre alternativas de acesso (como cartão ou senha) e treinamos a equipe responsável no local.'
    }
  ],
  maintenanceAndSupport: [
    'Limpeza periódica do sensor óptico ou capacitivo com pano macio para preservar a leitura.',
    'Verificação e ajuste de suportes de fechaduras, atraque magnético e molas aéreas.',
    'Teste preventivo das baterias auxiliares e fontes carregadoras em simulação de queda de energia.',
    'Revisão de cadastros, logs e atualização de firmware conforme orientação do fabricante.',
    'Atendimento de conserto e manutenção presencial em Curitiba e Região Metropolitana.'
  ],
  faqs: [
    {
      question: 'O que é controle de acesso biométrico?',
      answer: 'É a tecnologia que identifica o usuário pela impressão digital para liberar ou bloquear portas, catracas e fechaduras eletrônicas em empresas, condomínios, clínicas e academias, gerando histórico de passagens sem depender exclusivamente de chaves mecânicas.'
    },
    {
      question: 'O leitor biométrico funciona com dedo úmido, sujo ou ressecado?',
      answer: 'Pode apresentar falhas ou exigir mais de uma tentativa. Umidade excessiva, poeira, calos ou pele muito ressecada alteram o contraste da digital no prisma óptico; sensores capacitivos costumam lidar um pouco melhor com pele seca, dependendo do modelo. Por isso, recomendamos cadastrar mais de um dedo e manter cartão RFID ou senha como acesso alternativo.'
    },
    {
      question: 'Qual a diferença entre biometria de digital e reconhecimento facial?',
      answer: 'A biometria de impressão digital requer encostar o dedo no sensor do leitor ou da fechadura biométrica, geralmente com menor custo inicial. O reconhecimento facial valida o rosto à distância sem contato físico, agilizando fluxos maiores em portarias e catracas, e ambas requerem cuidados específicos de proteção de dados sensíveis conforme a LGPD. Para portas individuais, confira também nossa solução de Fechadura Eletrônica.'
    },
    {
      question: 'O leitor biométrico continua funcionando se faltar energia elétrica?',
      answer: 'Sim, desde que o projeto inclua fonte carregadora com bateria auxiliar ou nobreak dimensionado para os equipamentos. A autonomia varia conforme o consumo do conjunto e a capacidade das baterias instaladas.'
    },
    {
      question: 'A imagem da impressão digital fica salva no equipamento?',
      answer: 'Na maioria dos equipamentos, a imagem da impressão digital não é guardada: ela é convertida em um modelo matemático (template biométrico), que costuma ser protegido por criptografia. O tratamento exato depende do modelo e do fabricante. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    }
  ],
  relatedSolutions: ['fechadura-eletronica', 'reconhecimento-facial', 'catracas', 'fechaduras-eletromagneticas'],
  relatedSegments: ['empresas-e-escritorios', 'condominios-residenciais', 'academias'],
  relatedCities: ['curitiba', 'pinhais', 'sao-jose-dos-pinhais'],
  whatsappContext: 'controle de acesso biométrico para empresa ou condomínio'
};
