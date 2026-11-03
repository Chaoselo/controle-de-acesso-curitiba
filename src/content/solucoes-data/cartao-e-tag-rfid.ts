import { SolutionContent } from '../types';

export const cartaoETagRfidSolution: SolutionContent = {
  slug: 'cartao-e-tag-rfid',
  title: 'Controle de Acesso por Cartão e Tag RFID em Curitiba',
  seoTitle: 'Controle de Acesso por Cartão e RFID Curitiba | Crachás',
  metaDescription: 'Instalação de controle de acesso por cartão de proximidade e tags RFID em Curitiba e região. Segurança e controle de crachás. Solicite seu orçamento agora!',
  keyword: 'controle de acesso por cartao de proximidade',
  directAnswer: 'O controle de acesso por cartões inteligentes e tags de radiofrequência (RFID) permite a liberação ágil de passagens por aproximação sem contato mecânico. Em Curitiba e Região Metropolitana, a tecnologia é amplamente utilizada em crachás corporativos e condomínios que demandam credenciais econômicas para colaboradores e prestadores. O sistema possibilita o bloqueio imediato de itens extraviados e auditoria de eventos conforme as regras configuradas na controladora predial.',
  // TODO: foto real
  image: {
    src: '/images/cartao-tag-rfid.webp',
    alt: 'Cartões inteligentes e chaveiros de proximidade RFID para controle de acesso corporativo e condominial em Curitiba',
    width: 800,
    height: 600
  },
  howItWorks: [
    'Acoplamento eletromagnético por indução passiva: A antena do leitor gera um campo constante. Ao aproximar o cartão ou chaveiro a poucos centímetros, a bobina interna da credencial capta essa energia por indução magnética, alimentando o microchip sem necessidade de baterias.',
    'Diferenciação técnica entre frequências e protocolos: Tecnologias antigas de 125 kHz transmitem números fixos sem criptografia, possibilitando clonagens com aparelhos simples. Padrões de 13,56 MHz como Mifare Classic reduzem a cópia trivial, embora possuam fragilidades conhecidas; já o MIFARE DESFire atende a projetos com requisitos mais rigorosos.',
    'Compatibilidade técnica entre leitor e credencial: O leitor e as credenciais devem operar obrigatoriamente na mesma faixa de frequência e padrão de modulação. Antenas de 125 kHz não leem cartões de 13,56 MHz, exigindo especificação homogênea ou o uso de leitores híbridos com suporte a múltiplos protocolos.',
    'Transmissão de dados via Wiegand, RS-485 ou OSDP: O leitor converte os dados e os envia para a controladora por cabeamento. As saídas Wiegand transmitem pulsos simples, enquanto barramentos seriais RS-485 e o protocolo supervisionado OSDP oferecem tráfego bidirecional com suporte a criptografia física.',
    'Consulta e autorização na controladora de acesso: A placa central verifica se o cartão possui permissão para a porta solicitada e horário vigente. Havendo conformidade, o relé comuta por alguns segundos para liberar a fechadura ou catraca, gravando data, hora e usuário no histórico de eventos.'
  ],
  whenToChoose: [
    'Empresas e centros corporativos em Curitiba que adotam crachás funcionais com fotografia impressa para identificação visual dos colaboradores.',
    'Condomínios residenciais que buscam uma credencial acessível para prestadores de serviço frequentes, controlando dias e horários de entrada.',
    'Portarias com catracas de visitantes que utilizam coletores mecânicos de cartão na saída para garantir a devolução da credencial.',
    'Acessos veiculares em garagens que combinam tags veiculares passivas UHF de para-brisa com leitores de longo alcance a alguns metros de distância.'
  ],
  advantages: [
    'Bloqueio imediato de credenciais perdidas: Caso um morador ou funcionário perca seu cartão, o operador cancela o cadastro no sistema em poucos cliques, impedindo o destravamento das portas.',
    'Baixo custo de reposição de itens de plástico: Chaveiros em ABS e cartões em PVC possuem valor unitário reduzido, tornando a substituição contínua economicamente viável para grandes equipes.',
    'Possibilidade de personalização gráfica: A superfície de cartões ISO em PVC aceita impressão térmica direta com logomarca da empresa, dados funcionais, código de barras e foto colorida.',
    'Integração facilitada com relógios de ponto: O mesmo cartão de aproximação utilizado para destravar catracas pode ser aproveitado em equipamentos de registro de ponto homologados.',
    'Operação rápida com baixo atrito mecânico: A aproximação suave da credencial ocorre em frações de segundo, minimizando filas em horários de pico sem desgaste mecânico por inserção.'
  ],
  limitations: [
    'Risco de empréstimo indevido entre pessoas: Por ser um objeto físico desvinculado de traços biológicos, um usuário pode entregar voluntariamente seu cartão a terceiros para passagens não autorizadas.',
    'Suscetibilidade a clonagem em modelos desprotegidos: Tecnologias legadas de 125 kHz e padrões básicos sem criptografia forte podem ser duplicados com facilidade; nenhuma tecnologia RFID deve ser anunciada como imune a cópias.',
    'Problemas decorrentes de esquecimento e perda: Usuários que esquecem o crachá em casa geram demandas manuais frequentes na portaria para conferência de identidade e liberações de contingência.',
    'Desgaste estrutural de cartões e bolsas blindadas: Cartões guardados em carteiras com proteção contra radiofrequência exigem remoção manual do bolso, enquanto dobras excessivas podem romper a antena de cobre interna.'
  ],
  integrations: [
    'Catracas mecânicas tipo pedestal e balcão com cofres embutidos para retenção de crachás de visitantes.',
    'Fechaduras eletromagnéticas eletroímã e fechos elétricos em portas de escritórios e áreas técnicas.',
    'Cancelas automáticas veiculares acionadas por antenas UHF para leitura de tags veiculares no para-brisa.',
    'Centrais de controle de acesso multiponto interligadas por barramentos Wiegand, RS-485 ou protocolo OSDP.',
    'Softwares de portaria predial para controle simultâneo de colaboradores, moradores e visitantes temporários.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Definição da frequência de trabalho em Curitiba',
      description: 'Avaliação técnica do imóvel para escolha entre frequência de 125 kHz ou 13,56 MHz Mifare e DESFire, adequando o nível de integridade da credencial às exigências operacionais do cliente.'
    },
    {
      step: '02',
      title: 'Lançamento de cabeamento de dados blindado',
      description: 'Instalação de cabos com malha de blindagem aterrada ligando cada leitor à controladora, prevenindo interferências eletromagnéticas e ruídos em barramentos de comunicação Wiegand ou OSDP.'
    },
    {
      step: '03',
      title: 'Fixação de leitores e montagem de fechaduras',
      description: 'Instalação dos leitores de proximidade em caixas de embutir ou sobrepor ao lado das portas, fixando eletroímãs ou fechos com dimensionamento de força compatível com a esquadria.'
    },
    {
      step: '04',
      title: 'Parametrização de regras e níveis de acesso',
      description: 'Configuração dos grupos de horários, associação de permissões de portas na controladora central e cadastro das chaves de leitura de setores de memória nos cartões corporativos.'
    },
    {
      step: '05',
      title: 'Entrega das credenciais e treinamento local',
      description: 'Emissão dos cartões numerados e codificados, realização de testes operacionais de fluxo nas passagens e instrução detalhada da equipe sobre procedimentos para bloqueio rápido de cartões extraviados.'
    }
  ],
  maintenanceAndSupport: [
    'Verificação semestral do alcance de leitura das antenas para constatar eventual perda de sensibilidade de captação de radiofrequência.',
    'Revisão da integridade mecânica de catracas e verificação dos solenoides coletores de crachás instalados na saída de visitantes.',
    'Auditoria periódica no banco de dados para identificação e bloqueio de credenciais inativas de ex-funcionários ou prestadores antigos.',
    'Testes de retenção de carga da bateria do nobreak para garantir que os leitores continuem alimentados durante quedas de energia.'
  ],
  faqs: [
    {
      question: 'Os cartões de proximidade RFID podem ser clonados comercialmente?',
      answer: 'Sim, a possibilidade de cópia depende diretamente da tecnologia da credencial. Cartões antigos de 125 kHz não possuem criptografia e podem ser duplicados facilmente com leitores portáteis simples. Modelos como Mifare Classic apresentam melhorias, mas possuem vulnerabilidades conhecidas, enquanto tecnologias mais recentes como MIFARE DESFire exigem processos muito mais complexos, embora nenhum cartão deva ser considerado totalmente imune a cópias.'
    },
    {
      question: 'A que distância o usuário precisa aproximar o cartão para abrir a porta?',
      answer: 'Em leitores de pedestres convencionais, a leitura de cartões e chaveiros ocorre tipicamente entre 2 e 8 centímetros da antena. Já para veículos em portões de garagem, são empregadas antenas de longo alcance UHF, capazes de captar a tag adesiva fixada no para-brisa do carro a alguns metros de distância.'
    },
    {
      question: 'O que deve ser feito imediatamente caso um morador perca o seu crachá?',
      answer: 'A administração ou o porteiro deve acessar o software de controle e inativar o número específico daquela credencial no banco de dados. A partir da exclusão ou bloqueio na controladora, o cartão torna-se inoperante em todos os leitores do condomínio, mesmo que alguém tente utilizá-lo na entrada principal.'
    },
    {
      question: 'Qual a diferença entre as comunicações Wiegand e OSDP entre leitor e controladora?',
      answer: 'O protocolo Wiegand é uma conexão unidirecional tradicional que envia os bits do cartão sem criptografia nos fios. Por sua vez, o protocolo OSDP opera sobre comunicação serial RS-485 supervisionada, permitindo transmissão bidirecional com suporte a criptografia de dados, detecção de cortes de cabo e monitoramento do estado do leitor.'
    },
    {
      question: 'O cartão de proximidade precisa de pilhas ou bateria interna para funcionar?',
      answer: 'Não, os cartões e chaveiros de proximidade para pedestres são dispositivos puramente passivos. Toda a energia elétrica exigida pelo chip interno é transmitida por indução eletromagnética através da antena do próprio leitor no instante em que o cartão é aproximado da sua superfície externa.'
    }
  ],
  relatedSolutions: ['biometria', 'reconhecimento-facial', 'catracas', 'cancelas-e-acesso-veicular'],
  relatedSegments: ['condominios-residenciais', 'condominios-comerciais', 'empresas-e-escritorios', 'industrias'],
  relatedCities: ['curitiba', 'pinhais', 'sao-jose-dos-pinhais', 'colombo'],
  whatsappContext: 'controle de acesso por cartão e tag RFID'
};
