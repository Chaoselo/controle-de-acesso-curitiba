import { SolutionContent } from '../types';

export const cartaoETagRfidSolution: SolutionContent = {
  slug: 'cartao-e-tag-rfid',
  title: 'Controle de Acesso por Cartão e Tag RFID em Curitiba',
  seoTitle: 'Controle de Acesso por Cartão e RFID Curitiba | Crachás',
  metaDescription: 'Instalação de controle de acesso por cartão de proximidade e tags RFID em Curitiba e região. Credenciais para empresas, condomínios e estacionamentos.',
  keyword: 'controle de acesso por cartao de proximidade',
  directAnswer: 'O controle de acesso por cartões de proximidade e tags de radiofrequência (RFID) permite liberar passagens por aproximação sem contato mecânico. Em Curitiba e Região Metropolitana, é muito utilizado em crachás corporativos, credenciais para prestadores e visitantes, além de tags veiculares para estacionamentos e garagens de condomínios, com bloqueio rápido no sistema em caso de perda.',
  image: {
    src: '/images/controle-acesso-tag.webp',
    alt: 'Mão aproximando uma tag de proximidade de um leitor com teclado numérico',
    width: 1200,
    height: 675
  },
  howItWorks: [
    'Indução eletromagnética passiva: O leitor gera um campo magnético de baixa potência. Ao aproximar o cartão ou chaveiro, o microchip interno capta energia do leitor e transmite seu identificador sem precisar de pilhas.',
    'Diferenças entre frequências e tecnologias: Credenciais antigas de 125 kHz transmitem códigos simples sem criptografia, facilitando cópias. Padrões de 13,56 MHz como Mifare Classic oferecem recursos adicionais, embora também tenham limitações conhecidas; já tecnologias como MIFARE DESFire elevam o nível de proteção conforme o projeto.',
    'Compatibilidade entre leitor e credencial: Leitores e cartões precisam operar na mesma frequência e padrão. Antenas de 125 kHz não leem cartões de 13,56 MHz, exigindo definição uniforme ou leitores compatíveis com múltiplos protocolos.',
    'Comunicação com a controladora: O leitor envia a leitura para a placa controladora via padrões como Wiegand, RS-485 ou protocolo supervisionado OSDP.',
    'Validação de regras e registro: A controladora verifica horários e permissões configuradas, aciona a fechadura ou catraca quando autorizado e armazena o registro do evento.'
  ],
  whenToChoose: [
    'Empresas e escritórios em Curitiba que utilizam crachás funcionais impressos para identificação visual e controle de setores.',
    'Condomínios e clubes que precisam de alternativa prática à biometria (em conformidade com boas práticas da LGPD) ou credencial para prestadores temporários.',
    'Recepções com catracas e urna coletora de crachás na saída para controle organizado de visitantes.',
    'Estacionamentos e garagens condominiais que utilizam tags veiculares passivas UHF no para-brisa para abertura ágil de cancelas.'
  ],
  advantages: [
    'Bloqueio rápido de itens extraviados: Se um colaborador ou morador perder o cartão ou chaveiro, o código específico pode ser inativado rapidamente no sistema.',
    'Reposição acessível: Cartões em PVC e chaveiros tag possuem custo unitário baixo em comparação a outros tipos de credencial física.',
    'Personalização visual: Cartões corporativos podem receber impressão com foto, nome e identidade da empresa.',
    'Compatibilidade prática: Podem ser integrados a catracas, fechaduras eletromagnéticas (inclusive em portas de vidro) e sistemas compatíveis do mercado.',
    'Passagem ágil e sem atrito mecânico: A aproximação ocorre rapidamente, evitando desgaste por inserção física de chaves.'
  ],
  limitations: [
    'Possibilidade de empréstimo entre usuários: Por ser um objeto físico sem verificação biométrica, uma pessoa pode entregar seu cartão ou chaveiro a terceiros.',
    'Risco de clonagem conforme a tecnologia: Cartões simples de 125 kHz podem ser copiados com facilidade; mesmo modelos avançados dependem de configuração adequada e nenhuma credencial física está livre do risco de cópia.',
    'Esquecimento ou extravio: Usuários que esquecem o crachá demandam conferência e liberação assistida na recepção ou portaria.',
    'Bloqueio de sinal por carteiras com proteção RFID: Carteiras metalizadas impedem a leitura até que o cartão seja retirado do compartimento.'
  ],
  integrations: [
    'Catracas pedestal, balcão e flap com cofres coletores para visitantes.',
    'Fechaduras eletromagnéticas (eletroímã) e fechos em portas de vidro, madeira ou metal.',
    'Cancelas veiculares automáticas em estacionamentos e garagens com antenas UHF.',
    'Controladoras em rede via protocolos Wiegand, RS-485 ou OSDP.',
    'Terminais híbridos que combinam leitura facial ou biometria digital com cartão RFID.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Definição da Tecnologia e Vistoria em Curitiba',
      description: 'Avaliamos no local o tipo de porta, catraca ou cancela de estacionamento e definimos a frequência mais indicada (125 kHz, 13,56 MHz Mifare ou UHF veicular) antes do orçamento.'
    },
    {
      step: '02',
      title: 'Passagem de Cabeamento Blindado',
      description: 'Instalamos cabos adequados e protegidos entre os leitores, a controladora e a fonte carregadora para evitar interferências de sinal.'
    },
    {
      step: '03',
      title: 'Fixação de Leitores e Travas',
      description: 'Posicionamos os leitores junto às esquadrias (inclusive em montantes de portas de vidro) ou pedestais e alinhamos as fechaduras ou catracas.'
    },
    {
      step: '04',
      title: 'Configuração de Permissões e Horários',
      description: 'Parametrizamos níveis de acesso por setor, horários para prestadores e regras de leitura na controladora.'
    },
    {
      step: '05',
      title: 'Entrega Técnica e Orientação Operacional',
      description: 'Testamos as credenciais em campo e orientamos a equipe responsável sobre cadastro e bloqueio rápido de cartões ou tags perdidas.'
    }
  ],
  maintenanceAndSupport: [
    'Verificação periódica do alcance e sensibilidade de leitura de antenas de pedestres e antenas veiculares UHF.',
    'Inspeção dos coletores de cartões de visitantes e mecanismos das catracas.',
    'Revisão dos cadastros junto ao administrador para bloqueio de credenciais inativas.',
    'Teste das baterias auxiliares e fontes carregadoras contra quedas de energia.'
  ],
  faqs: [
    {
      question: 'Cartões e tags RFID podem ser clonados?',
      answer: 'A suscetibilidade à cópia depende do modelo e da frequência utilizada. Cartões legados de 125 kHz não têm criptografia e podem ser copiados com facilidade; tecnologias como Mifare Classic também apresentam vulnerabilidades conhecidas, enquanto padrões como MIFARE DESFire dificultam a duplicação, dependendo da configuração do sistema.'
    },
    {
      question: 'A que distância o leitor reconhece o cartão ou a tag?',
      answer: 'Depende do modelo do leitor e do tipo de tag. Leitores de pedestres geralmente exigem aproximação a poucos centímetros, enquanto antenas UHF para estacionamentos e garagens leem tags de para-brisa a alguns metros.'
    },
    {
      question: 'O que fazer se alguém perder o crachá ou chaveiro RFID?',
      answer: 'Basta acessar o painel do equipamento ou sistema para inativar o número da credencial perdida, impedindo imediatamente que aquele item abra portas ou catracas.'
    },
    {
      question: 'Qual a diferença entre comunicação Wiegand e OSDP?',
      answer: 'O padrão Wiegand envia pulsos unidirecionais simples entre leitor e controladora, enquanto o OSDP utiliza barramento RS-485 bidirecional com suporte a supervisão de cabo e criptografia, conforme os equipamentos utilizados.'
    },
    {
      question: 'Cartões de proximidade precisam de bateria?',
      answer: 'Não. Cartões, chaveiros e tags passivas recebem energia por indução diretamente do campo gerado pela antena do leitor no momento da aproximação.'
    }
  ],
  relatedSolutions: ['tag-veicular', 'fechadura-eletronica', 'biometria', 'catracas'],
  relatedSegments: ['condominios-residenciais', 'condominios-comerciais', 'empresas-e-escritorios', 'industrias'],
  relatedCities: ['curitiba', 'pinhais', 'sao-jose-dos-pinhais', 'colombo'],
  whatsappContext: 'controle de acesso por cartão e tag RFID'
};
