import { SolutionContent } from '../types';

export const biometriaSolution: SolutionContent = {
  slug: 'biometria',
  title: 'Controle de Acesso Biométrico em Curitiba',
  seoTitle: 'Controle de Acesso Biométrico Curitiba | Instalação',
  metaDescription: 'Instalação de controle de acesso biométrico em Curitiba. Leitores de impressão digital para empresas e condomínios com suporte local. Peça orçamento!',
  keyword: 'controle de acesso biometrico Curitiba',
  directAnswer: 'O controle de acesso biométrico utiliza a impressão digital única de cada indivíduo para autenticar e liberar a passagem por portas, catracas ou portões em frações de segundo. Em Curitiba e Região Metropolitana, é uma das tecnologias mais consolidadas para condomínios residenciais e empresas que buscam eliminar chaves físicas e cartões emprestados. A solução assegura registro auditável de horários de entrada e saída com alto custo-benefício de implantação.',
  image: {
    src: '/images/controle-acesso-biometria.webp',
    alt: 'Dedo sendo posicionado em leitor biométrico de impressão digital instalado na parede',
    width: 1200,
    height: 675
  },
  howItWorks: [
    'Captura óptica ou capacitiva de alta resolução: Quando o usuário encosta a ponta do dedo na área de leitura, o sensor captura a geometria das cristas e vales da impressão digital. Em leitores ópticos, feixes de LED iluminam a superfície do prisma de vidro; em leitores capacitivos, uma matriz de microcapacitores mede variações diminutas de carga elétrica causadas pelo contato da pele humana, o que dificulta o uso de moldes artificiais.',
    'Conversão algorítmica em vetor matemático criptografado: Na maioria dos equipamentos, a imagem da impressão digital não é guardada: ela é convertida em um modelo matemático (template biométrico), que costuma ser protegido por criptografia. O tratamento exato depende do fabricante.',
    'Comparação e validação em banco de dados: O leitor compara o template gerado no momento da leitura com a biblioteca de usuários previamente cadastrada. No modo 1:N (identificação direta), o sistema varre a memória em geral em menos de 0,5 segundo; no modo 1:1 (autenticação com digitação de ID ou aproximação de crachá), o tempo de resposta cai para frações imperceptíveis de segundo.',
    'Comando elétrico de abertura da barreira física: Confirmada a autorização de passagem, o relé da controladora comuta seu contato de normalmente fechado (NF) para aberto, ou envia um pulso de comando via protocolo Wiegand ou OSDP para uma placa remota. Isso interrompe temporariamente a energia de uma fechadura eletroímã ou aciona o solenoide mecânico de uma catraca.',
    'Auditoria, sincronização e armazenamento de eventos em buffer: Simultaneamente à liberação física, a controladora grava internamente um evento contendo o número identificador do usuário, data e hora exatas, tipo de autenticação e status do evento. Esses dados são transmitidos em tempo real ao sistema de controle via rede TCP/IP ou armazenados em memória não volátil caso a conexão esteja offline.'
  ],
  whenToChoose: [
    'Condomínios residenciais verticais e horizontais em Curitiba que buscam eliminar de vez o risco de cópia clandestina de chaves de portarias sociais, salões de festas, academias e áreas de lazer.',
    'Empresas e escritórios comerciais que necessitam restringir o acesso a setores estratégicos confidenciais, tais como salas de servidores (CPD/TI), departamentos de controladoria, estoque e almoxarifado de insumos.',
    'Portarias com fluxo constante de moradores e colaboradores onde o custo recorrente de reposição de cartões plásticos e tags perdidos ou desgastados se tornou excessivo para o orçamento condominial.',
    'Ambientes internos ou áreas semiexternas protegidas de intempéries diretas que demandam uma tecnologia madura, de manutenção acessível e peças de reposição abundantes no mercado nacional.'
  ],
  advantages: [
    'Identificação estritamente intransferível: A impressão digital é inerente ao indivíduo e não pode ser emprestada para vizinhos ou entregue a prestadores sem registro, acabando com a passagem carona não autorizada.',
    'Excelente relação custo-benefício de implantação: Trata-se de uma tecnologia madura, com equipamentos e peças de substituição com valor de investimento significativamente inferior ao de sistemas faciais complexos.',
    'Velocidade e conforto operacional: Terminais modernos processam e liberam a passagem em aproximadamente 300 a 500 milissegundos, evitando a formação de filas desagradáveis em horários de pico.',
    'Capacidade ampla de armazenamento local: A maioria dos modelos corporativos instalados em Curitiba comporta de 1.000 a mais de 10.000 digitais em memória própria, operando com total autonomia sem depender de servidor ativo.',
    'Comunicação padronizada e interoperabilidade: Conexão nativa com fechaduras eletromagnéticas, catracas de pedestres e centrais de alarme através dos protocolos Wiegand 26/34 bits e OSDP supervisionado.'
  ],
  limitations: [
    'Exigência de contato físico superficial: O sensor demanda toque direto da pele sobre o prisma, o que em ambientes hospitalares, laboratórios ou períodos pós-pandêmicos pode gerar preferência por métodos touchless.',
    'Variação na legibilidade da digital em certos grupos: Pessoas idosas, crianças muito pequenas ou trabalhadores da construção civil e limpeza que manuseiam solventes químicos podem apresentar digitais gastas ou ressecadas, exigindo cadastro de dedo alternativo.',
    'Sensibilidade a intempéries climáticas diretas: Leitores sem classificação de proteção IP65 ou superior não devem ser expostos diretamente à chuva ou à incidência solar intensa do verão curitibano sem abrigo protetor.',
    'Necessidade de manutenção e limpeza periódica do sensor: O acúmulo de oleosidade e poeira sobre o vidro óptico pode degradar o índice de rejeição falsa ao longo dos meses se não houver limpeza com pano de microfibra.',
    'Dependência de infraestrutura elétrica ininterrupta: Como as fechaduras de segurança (eletroímãs) operam em modo fail-safe para segurança contra incêndios, o sistema requer no-break dedicado para não abrir em quedas de energia.'
  ],
  lgpdNote: 'A impressão digital é categorizada expressamente como dado biométrico pessoal sensível conforme o Artigo 5º, inciso II da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Em nossos projetos em Curitiba e Região Metropolitana, utilizamos leitores homologados que convertem a leitura em templates matemáticos criptografados de sentido único (hash unidirecional), tornando tecnicamente impossível a reconstituição da imagem original da digital humana. Orientamos condomínios e empresas sobre a documentação necessária, a política interna de descarte após desligamento de funcionários ou mudança de condôminos, e a definição da base legal pertinente para proteção patrimonial e segurança física. Este texto é informativo e não substitui a orientação de um profissional jurídico.',
  integrations: [
    'Fechaduras Eletromagnéticas (Eletroímãs de 150kgf a 300kgf com suportes ajustáveis LZ)',
    'Fechaduras Solenoide com pino em aço inoxidável e fechos elétricos de embutir',
    'Catracas Pedestais, Balcões e Torniquetes industriais com braço mecânico de retenção',
    'Controladoras TCP/IP e Servidores Locais com banco de dados em rede',
    'Botoeiras de Saída No-Touch infravermelhas e molas aéreas hidráulicas de fechamento suave',
    'Centrais de Alarme de Intrusão e No-breaks senoidais com baterias seladas de ciclo profundo'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Vistoria Técnica e Mapeamento de Vãos em Curitiba',
      description: 'Engenheiro ou técnico avalia in loco o tipo de porta (vidro temperado com furação ou sem recorte, madeira maciça ou caixilho de alumínio), o volume diário de passagens e a disponibilidade de pontos elétricos estabilizados.'
    },
    {
      step: '02',
      title: 'Passagem de Cabeamento Estruturado e Alimentação',
      description: 'Lançamento de cabos de rede UTP Cat6 em cobre puro homologados pela Anatel e cabos flexíveis de alimentação de bitola calculada para evitar perda de tensão em percursos longos entre a guarita e os pontos de acesso.'
    },
    {
      step: '03',
      title: 'Fixação Mecânica e Alinhamento de Fechaduras',
      description: 'Instalação milimétrica de suportes de atraque LZ, fechaduras eletroímã e molas aéreas hidráulicas com regulagem de velocidade de fechamento e travamento final para evitar batidas bruscas e vibrações no batente.'
    },
    {
      step: '04',
      title: 'Parametrização da Controladora e Regras de Segurança',
      description: 'Configuração dos parâmetros de rede IP, definição do tempo de liberação do relé (geralmente entre 3 e 5 segundos), cadastramento de senhas de contingência e sincronização de data e hora com servidor NTP.'
    },
    {
      step: '05',
      title: 'Cadastramento Assistido e Treinamento de Portaria',
      description: 'Acompanhamento do cadastramento das impressões digitais dos usuários iniciais com instrução de posicionamento do dedo e treinamento completo para síndicos, porteiros ou gestores administrativos de TI.'
    }
  ],
  maintenanceAndSupport: [
    'Limpeza técnica programada dos prismas e sensores ópticos com soluções neutras não abrasivas para preservar a camada protetora.',
    'Aferição e reaperto mecânico de parafusos de fixação em suportes LZ de fechaduras eletromagnéticas e braços articulados de molas aéreas.',
    'Teste preventivo de carga e capacidade de retenção de baterias seladas do no-break sob simulação de corte de energia da rede elétrica pública.',
    'Auditoria de integridade dos bancos de templates, verificação de logs de erros e atualização periódica de firmware de segurança dos terminais.',
    'Atendimento preventivo e suporte emergencial presencial para chamados em Curitiba e Região Metropolitana.'
  ],
  faqs: [
    {
      question: 'O leitor biométrico continua funcionando se faltar energia elétrica na empresa ou condomínio em Curitiba?',
      answer: 'Sim, desde que o sistema tenha sido instalado com uma fonte de alimentação ininterrupta (no-break com bateria selada de 12V), que é item mandatório em todos os nossos projetos em Curitiba. A autonomia da bateria é calculada conforme o consumo dos leitores e eletroímãs, mantendo o travamento e a autenticação das portas em funcionamento pleno por horas durante quedas na rede pública.'
    },
    {
      question: 'O que fazer caso uma pessoa tenha a impressão digital desgastada, úmida ou com ferimentos temporários?',
      answer: 'Nossos técnicos orientam sempre o cadastramento preventivo de pelo menos dois dedos por indivíduo (por exemplo, indicador direito e indicador esquerdo). Além disso, os terminais profissionais utilizados operam em modo híbrido: caso haja impossibilidade momentânea de leitura biométrica, o usuário pode ser liberado por cartão de proximidade RFID de contingência ou senha pessoal cadastrada na mesma controladora.'
    },
    {
      question: 'A imagem visual da minha digital fica salva na memória do equipamento ou no computador da portaria?',
      answer: 'Na maioria dos equipamentos, a imagem da impressão digital não é guardada: ela é convertida em um modelo matemático (template biométrico), que costuma ser protegido por criptografia. O tratamento exato depende do fabricante.'
    },
    {
      question: 'Quantos usuários podem ser registrados em um mesmo leitor biométrico?',
      answer: 'Em geral, a capacidade de armazenamento varia conforme o modelo do leitor e o porte da controladora selecionada, oscilando entre 1.000 e 10.000 templates em memória autônoma offline. Para a vasta maioria dos edifícios residenciais e empresas de médio porte em Curitiba, essa capacidade suporta confortavelmente moradores, funcionários, prestadores fixos e prestadores temporários com ampla margem de crescimento.'
    },
    {
      question: 'Qual a diferença técnica prática entre um sensor biométrico óptico e um sensor capacitivo?',
      answer: 'O sensor óptico funciona através de uma microcâmera acoplada a um prisma iluminado por LEDs, sendo extremamente resistente mecanicamente contra riscos e atos de vandalismo em locais com fluxo intenso. O sensor capacitivo, por sua vez, opera com uma matriz de circuitos que medem a capacitância elétrica natural da pele, conferindo maior precisão na leitura de digitais levemente ressecadas e dimensões físicas mais delgadas, embora com custo ligeiramente superior.'
    }
  ],
  relatedSolutions: ['reconhecimento-facial', 'catracas', 'fechaduras-eletromagneticas', 'cartao-e-tag-rfid'],
  relatedSegments: ['condominios-residenciais', 'empresas-e-escritorios', 'academias'],
  relatedCities: ['curitiba', 'pinhais', 'sao-jose-dos-pinhais'],
  whatsappContext: 'controle de acesso biométrico para empresa ou condomínio'
};
