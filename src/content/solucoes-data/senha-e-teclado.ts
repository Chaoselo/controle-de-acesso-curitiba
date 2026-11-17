import { SolutionContent } from '../types';

export const senhaETecladoSolution: SolutionContent = {
  slug: 'senha-e-teclado',
  title: 'Controle de Acesso por Senha e Teclado em Curitiba',
  seoTitle: 'Controle de Acesso por Senha Curitiba | Teclados Digitais',
  metaDescription: 'Instalação de teclados de controle de acesso e senhas digitais em Curitiba para empresas, clínicas, portas de vidro e condomínios. Peça orçamento!',
  keyword: 'controle de acesso por senha',
  directAnswer: 'O controle de acesso por teclado numérico libera portas e passagens por meio da digitação de códigos eletrônicos individuais ou setoriais. Em Curitiba e Região Metropolitana, é uma alternativa prática e econômica para portas internas de clínicas, escritórios, estoques, áreas técnicas e portas de vidro, podendo operar de forma autônoma ou integrada a controladoras.',
  image: {
    src: '/images/controle-senha-e-teclado.webp',
    alt: 'Dedo digitando senha em teclado touch instalado em porta de madeira',
    width: 1200,
    height: 675
  },
  howItWorks: [
    'Leitura na matriz numérica: O usuário digita sua combinação em teclado mecânico, antivandalismo ou superfície touch capacitiva, conforme o modelo escolhido.',
    'Senha individual versus senha compartilhada: Quando cada usuário recebe um código próprio em equipamento com memória de eventos, o sistema identifica quem abriu a porta; já uma senha única coletiva dispensa cadastros individuais, mas não diferencia os acessos.',
    'Bloqueio temporário após erros consecutivos: Conforme o modelo, o teclado interrompe novas tentativas por alguns minutos após sucessivos erros de digitação, dificultando adivinhações.',
    'Senha de coação (quando disponível): Alguns modelos permitem configurar um código específico que libera a abertura em situações de emergência e envia alerta silencioso para uma central ou receptor compatível.',
    'Acionamento de fechaduras e combinação de fatores: Ao confirmar a senha, o equipamento aciona a fechadura eletromagnética (inclusive em portas de vidro) ou fecho elétrico, podendo também exigir cartão RFID em dupla autenticação.'
  ],
  whenToChoose: [
    'Salas de TI, arquivos, estoques e almoxarifados de empresas e indústrias em Curitiba.',
    'Portas internas e consultórios em clínicas médicas e escritórios comerciais.',
    'Áreas comuns de condomínios com acesso restrito a colaboradores ou condôminos autorizados.',
    'Acesso de apoio em portarias como alternativa caso o usuário esteja sem cartão ou haja falha temporária em outro método.'
  ],
  advantages: [
    'Dispensa chaves ou crachás físicos: Reduz problemas com perda ou esquecimento de objetos para acesso diário.',
    'Alteração prática de códigos: Em caso de desligamento de colaborador ou suspeita de compartilhamento, a senha pode ser alterada rapidamente.',
    'Investimento acessível: Costuma exigir menor custo inicial em comparação a terminais biométricos ou faciais.',
    'Modelos compactos: Versões estreitas (slim) se adaptam facilmente a perfis de alumínio e montantes próximos a portas de vidro.',
    'Opção de dupla verificação: Modelos híbridos combinam senha numérica e cartão de proximidade no mesmo equipamento.'
  ],
  limitations: [
    'Compartilhamento entre pessoas: Uma senha pode ser repassada verbalmente ou por mensagem a terceiros, sem assegurar que apenas o titular original a utilizou.',
    'Desgaste de teclas em modelos simples: Em teclados de borracha ou plástico com código único muito utilizado, teclas mais pressionadas podem marcar com o tempo.',
    'Fluxo mais lento que leitura sem toque: Digitar o código exige parada em frente à porta, sendo menos ágil para locais com grande circulação simultânea.',
    'Proteção contra clima em área externa: Locais expostos à chuva requerem modelos com vedação compatível com área externa.'
  ],
  integrations: [
    'Fechaduras eletromagnéticas (eletroímã) e fechos elétricos com molas aéreas.',
    'Botoeiras de saída convencionais ou sem toque (no-touch).',
    'Centrais de alarme compatíveis para sinalização de eventos, quando aplicável.',
    'Controladoras de acesso via comunicação Wiegand ou conexões seriais.',
    'Fontes carregadoras com baterias auxiliares contra quedas de energia.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Vistoria Técnica e Escolha do Modelo',
      description: 'Avaliamos o local da porta em Curitiba (interno ou exposto ao clima), o tipo de folha — inclusive portas de vidro — e a fiação necessária antes do orçamento.'
    },
    {
      step: '02',
      title: 'Infraestrutura e Passagem de Cabos',
      description: 'Lançamos cabos protegidos em tubulação ou canaleta adequada até a fonte e a fechadura.'
    },
    {
      step: '03',
      title: 'Fixação do Teclado e da Fechadura',
      description: 'Instalamos o teclado em altura ergonômica, alinhamos a fechadura eletromagnética ou elétrica e posicionamos a botoeira de saída.'
    },
    {
      step: '04',
      title: 'Programação de Senhas e Temporização',
      description: 'Alteramos senhas padrão de fábrica, cadastramos os códigos definidos e regulamos o tempo de abertura do relé.'
    },
    {
      step: '05',
      title: 'Testes e Orientação de Uso',
      description: 'Validamos aberturas, fechamento pela mola aérea e orientamos o responsável sobre cadastro, alteração e exclusão de senhas.'
    }
  ],
  maintenanceAndSupport: [
    'Limpeza periódica do teclado para evitar marcas de dedos que revelem dígitos mais usados.',
    'Conferência da retroiluminação e do retorno sonoro ou visual das teclas.',
    'Reaperto de suportes de fechadura e ajuste de mola aérea em portas de maior circulação.',
    'Medição da fonte de alimentação e conferência das baterias auxiliares.'
  ],
  faqs: [
    {
      question: 'É melhor usar uma senha única para todos ou senhas individuais?',
      answer: 'Quando o equipamento permite e há necessidade de rastrear quem abriu a porta, senhas individuais são mais indicadas porque permitem registrar o usuário e excluir apenas o código de quem sair da empresa ou condomínio.'
    },
    {
      question: 'O teclado de acesso continua funcionando se faltar energia?',
      answer: 'Sim, desde que o projeto utilize fonte carregadora com bateria auxiliar ou nobreak dimensionado para o consumo do teclado e da fechadura. A autonomia depende das baterias instaladas.'
    },
    {
      question: 'Como funciona a senha de coação?',
      answer: 'Depende do modelo instalado. Quando disponível e interligado a uma central compatível, o código de coação libera a porta normalmente enquanto envia um sinal silencioso de alerta.'
    },
    {
      question: 'É possível descobrir a senha pelas marcas nos botões?',
      answer: 'Em teclados mecânicos ou de borracha que usam sempre a mesma combinação, o desgaste pode ocorrer com o tempo. Teclados touch de vidro, alteração periódica de códigos ou dupla autenticação com cartão ajudam a reduzir esse problema.'
    },
    {
      question: 'Teclados numéricos podem ser instalados em áreas externas com chuva?',
      answer: 'Sim, desde que seja especificado um modelo próprio para uso externo com grau de vedação adequado às intempéries.'
    }
  ],
  relatedSolutions: ['fechadura-eletronica', 'fechaduras-eletromagneticas', 'biometria', 'cartao-e-tag-rfid'],
  relatedSegments: ['empresas-e-escritorios', 'condominios-residenciais', 'clinicas-e-hospitais', 'condominios-comerciais'],
  relatedCities: ['curitiba', 'pinhais', 'sao-jose-dos-pinhais', 'colombo'],
  whatsappContext: 'controle de acesso por senha e teclado em Curitiba'
};
