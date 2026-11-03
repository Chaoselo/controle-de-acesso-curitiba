import { SolutionContent } from '../types';

export const cancelasEAcessoVeicularSolution: SolutionContent = {
  slug: 'cancelas-e-acesso-veicular',
  title: 'Cancelas Automáticas e Acesso Veicular em Curitiba',
  seoTitle: 'Cancelas Automáticas em Curitiba | Acesso Veicular e Tags',
  metaDescription: 'Instalação de cancelas automáticas, tags UHF e controle veicular em Curitiba e RMC. Elimine filas e invasões na garagem. Peça seu orçamento no WhatsApp!',
  keyword: 'controle de acesso veicular Curitiba',
  directAnswer: 'O controle de acesso veicular por cancelas automáticas gerencia a entrada e saída de automóveis em garagens condominiais, pátios industriais e estacionamentos. Em Curitiba e Região Metropolitana, a automação com tags adesivas no para-brisa ou controles de código rolante agiliza o fluxo e minimiza a vulnerabilidade de motoristas na via pública. O sistema opera com sensores anti-esmagamento e integração a softwares de portaria para registro auditável de acessos.',
  // TODO: foto real
  image: {
    src: '/images/cancelas-acesso-veicular.webp',
    alt: 'Cancela automática e antena de tag veicular instaladas em entrada de condomínio em Curitiba',
    width: 800,
    height: 600
  },
  howItWorks: [
    'Controles de código rolante versus código fixo: Controles antigos de código fixo possuem frequências estáticas facilmente capturáveis por clonadores. Projetos modernos exigem código rolante (rolling code), em que a chave criptográfica muda a cada acionamento, dificultando a interceptação e cópia.',
    'Identificação por tag veicular passiva UHF: Antenas UHF na entrada emitem feixes para a pista. Ao aproximar o veículo, a antena lê a etiqueta no para-brisa a alguns metros de distância, transmitindo o código sem que o condutor precise abrir o vidro.',
    'Reconhecimento de placas (LPR) e suas limitações: Câmeras OCR capturam imagens das placas para liberação. Essa tecnologia possui limitações físicas: placas com barro, amassadas, ângulos inclinados, chuvas torrenciais e reflexos de faróis desregulados podem degradar o índice de leitura.',
    'Mecanismo de proteção com laço indutivo e fotocélulas: Sob o pavimento da pista instala-se um laço indutivo magnético que detecta a massa metálica do veículo, somado a fotocélulas ópticas. Esse arranjo impede que a haste desça enquanto houver automóvel ou pedestre no vão.',
    'Diferença funcional entre cancela e portão automático: A cancela automática foi concebida para alta velocidade de abertura e retenção dinâmica de fluxo em ciclos rápidos, mas não veda o vão contra pedestres. Por isso, garagens seguras utilizam clausuras combinando a cancela ao portão de fechamento pleno.'
  ],
  whenToChoose: [
    'Condomínios residenciais com alto tráfego veicular no pico, evitando filas na via pública de bairros como Água Verde e Ecoville.',
    'Centros empresariais que necessitam segregar vagas de condôminos fixos e gerenciar o acesso rotativo de visitantes com QR Code no celular.',
    'Pátios industriais e fábricas na CIC ou em São José dos Pinhais para triagem de caminhões e controle de docas de carga.',
    'Estacionamentos comerciais que demandam auditoria de permanência de veículos associada a catracas e cancelas de saída.'
  ],
  advantages: [
    'Abertura rápida e redução de espera: Motores rápidos com inversor realizam o ciclo em poucos segundos, liberando a pista com agilidade.',
    'Eliminação de clonagens por código fixo: A adoção de tags UHF com código único ou controles de código rolante impede o uso de clonadores.',
    'Proteção mecânica com sensores: O intertravamento elétrico com laço indutivo e fotocélulas ativas protege o teto dos carros contra colisões.',
    'Operação de contingência em cortes de luz: O sistema pode ser mantido por nobreaks com baterias ou liberado por destravamento manual.',
    'Gestão flexível para visitantes com QR Code: Permite aos moradores gerar convites de acesso com validade pré-definida para convidados.'
  ],
  limitations: [
    'Vulnerabilidade ao fenômeno da carona veicular: Caso dois veículos trafeguem muito colados (tailgating), o segundo automóvel pode aproveitar a haste erguida para entrar sem validação se não houver clausura ou semáforo.',
    'Ausência de barreira física contra invasão de pedestres: A haste tubular ou articulada impede apenas a passagem de veículos, exigindo portões perimetrais complementares para segurança patrimonial noturna.',
    'Limitações climáticas e visuais em leitores de placa LPR: Como qualquer sistema óptico, câmeras de placa sofrem redução de leitura sob nevoeiro denso, chuvas intensas ou placas desgastadas pelo uso.',
    'Demanda de espaço físico para desaceleração na pista: A instalação de cancelas requer pista com comprimento linear mínimo para posicionamento do laço indutivo antes e depois do ponto de bloqueio.'
  ],
  lgpdNote: 'A placa do veículo, quando associada a um condutor ou morador específico, constitui dado pessoal protegido pela Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). As imagens fotográficas capturadas por câmeras de leitura de placa (LPR) e os registros de horários de entrada e saída na garagem devem ser armazenados com controle restrito de acesso aos gestores prediais, com política definida de descarte e finalidade exclusiva de proteção patrimonial. Este texto é informativo e não substitui a orientação de um profissional jurídico.',
  integrations: [
    'Câmeras de reconhecimento de placa (LPR) com iluminação infravermelha integrada.',
    'Antenas leitoras de tag veicular UHF com pedestais de pista e ajuste de ângulo focal.',
    'Portões automáticos de garagem para formação de clausura veicular com intertravamento.',
    'Laços indutivos magnéticos de piso e fotocélulas de reflexão para proteção anti-esmagamento.',
    'Semáforos de sinalização viária verde e vermelho para orientação do fluxo de motoristas.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Estudo geométrico da pista e raio de giro',
      description: 'Vistoria técnica presencial em Curitiba para medição da largura do vão, altura do teto para hastes articuladas e cálculo do posicionamento das bases das cancelas na pista.'
    },
    {
      step: '02',
      title: 'Corte de piso e instalação do laço indutivo',
      description: 'Corte preciso no pavimento asfáltico ou piso de concreto para inserção dos cabos do sensor de laço magnético, selando as canaletas com resina de poliuretano impermeável.'
    },
    {
      step: '03',
      title: 'Chumbamento da base mecânica da cancela',
      description: 'Construção de base de concreto nivelada com ancoragem por parafusos chumbadores metálicos para sustentação rígida e duradoura do gabinete da cancela contra vibrações contínuas de parada mecânica.'
    },
    {
      step: '04',
      title: 'Ajuste de molas e balanceamento da haste',
      description: 'Calibração mecânica precisa da tensão das molas helicoidais de balanceamento conforme o peso da haste, garantindo movimentação suave sem sobrecarregar o conjunto do motorredutor interno.'
    },
    {
      step: '05',
      title: 'Parametrização da controladora e testes de segurança',
      description: 'Configuração da velocidade de subida e descida no inversor, testes práticos de não fechamento com veículos sobre o laço e treinamento para uso do destravamento manual.'
    }
  ],
  maintenanceAndSupport: [
    'Aferição e reaperto das molas de balanceamento de peso da haste para preservar a vida útil do motorredutor mecânico.',
    'Inspeção do alinhamento das fotocélulas ópticas e teste de sensibilidade do detector de massa metálica do laço indutivo.',
    'Verificação do nível de lubrificação das engrenagens do redutor e reaperto das fixações estruturais da haste tubular.',
    'Teste semestral do banco de baterias do nobreak sob corte simulado de energia e revisão da chave de destravamento manual.'
  ],
  faqs: [
    {
      question: 'A cancela automática pode descer por engano e atingir o teto de um automóvel?',
      answer: 'Em instalações executadas segundo as boas normas de segurança, o risco é eliminado pelo laço indutivo magnético e pelas fotocélulas. Esses sensores monitoram a presença da massa metálica do automóvel sob a haste; enquanto o veículo estiver transitando sobre a área delimitada, o circuito elétrico bloqueia totalmente o comando de descida.'
    },
    {
      question: 'O que ocorre com a cancela veicular caso falte energia elétrica no condomínio?',
      answer: 'Se o sistema possuir fonte ininterrupta com nobreak dimensionado, a cancela continua abrindo e fechando normalmente por diversos ciclos. Na eventualidade de descarregamento total das baterias, o operador pode utilizar uma chave mecânica de destravamento rápido para liberar a haste e deixá-la erguida na vertical.'
    },
    {
      question: 'Qual a diferença entre usar cancela automática ou manter apenas o portão da garagem?',
      answer: 'O portão automático tradicional leva mais tempo para abrir e fechar, gerando riscos de assalto enquanto o morador aguarda na rua. A cancela abre em poucos segundos, dinamizando o fluxo; contudo, ela não fecha o vão contra pedestres, sendo recomendável usar a cancela durante o dia e o portão completo à noite.'
    },
    {
      question: 'O sistema de leitura de placas (LPR) pode substituir completamente a tag adesiva no para-brisa?',
      answer: 'Embora o LPR ofereça excelente comodidade, a leitura óptica pode falhar em dias de tempestades severas, com placas muito amassadas, sujas de barro ou sob reflexo direto de faróis desregulados. Por esse motivo, muitos condomínios em Curitiba utilizam a leitura de placas como complemento à tag UHF, garantindo redundância.'
    },
    {
      question: 'Como funciona o envio de convites de acesso com validade para visitantes?',
      answer: 'O morador utiliza o aplicativo do condomínio para cadastrar o nome e a placa do visitante, gerando um código QR Code temporário ou autorização de placa por período delimitado. Ao chegar, a cancela valida a permissão diretamente no sistema e libera a entrada somente dentro da janela de horário estipulada.'
    }
  ],
  relatedSolutions: ['cartao-e-tag-rfid', 'software-de-gestao', 'reconhecimento-facial', 'fechaduras-eletromagneticas'],
  relatedSegments: ['condominios-residenciais', 'industrias', 'condominios-comerciais', 'empresas-e-escritorios'],
  relatedCities: ['curitiba', 'pinhais', 'araucaria', 'sao-jose-dos-pinhais'],
  whatsappContext: 'cancela automática e controle de acesso veicular'
};
