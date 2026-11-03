import { ServiceContent } from '../types';

export const modernizacaoService: ServiceContent = {
  slug: 'modernizacao',
  title: 'Modernização de Controle de Acesso em Curitiba',
  seoTitle: 'Modernização de Controle de Acesso Curitiba | Retrofit',
  metaDescription: 'Troca e retrofit de controle de acesso antigo em Curitiba. Substitua cartões e chaves por reconhecimento facial e tags. Solicite orçamento no WhatsApp!',
  keyword: 'troca e modernizacao de controle de acesso',
  directAnswer: 'A modernização e retrofit de sistemas de controle de acesso em Curitiba substitui interfonia analógica ruidosa, cartões legados sem criptografia de 125 kHz e fechaduras elétricas obsoletas por tecnologias contemporâneas como reconhecimento facial touchless e credenciais seguras. O projeto prioriza o aproveitamento inteligente da tubulação, eletroímãs e portas existentes, reduzindo custos de implantação e eliminando vulnerabilidades sem paralisar a portaria.',
  // TODO: foto real
  image: {
    src: '/images/servico-modernizacao.webp',
    alt: 'Técnico realizando retrofit e modernização de painel de controle de acesso em Curitiba',
    width: 800,
    height: 600
  },
  scope: [
    'Auditoria técnica detalhada de fechaduras, eletrodutos, cabeamento estruturado e portas existentes para identificar componentes perfeitamente reaproveitáveis.',
    'Substituição de cartões e tags legados de 125 kHz (vulneráveis à cópia clandestina em chaveiros da cidade) por tecnologias criptografadas como MIFARE DESFire ou reconhecimento facial.',
    'Retrofit completo de interfonia predial analógica multipar com chiado para centrais de vídeo porteiro IP com suporte a atendimento direto em smartphones.',
    'Migração, saneamento e unificação de bancos de dados legados e cadastros de usuários para softwares modernos de controle de acesso em nuvem ou servidores locais.',
    'Instalação de novas controladoras de portas com protocolos abertos, saídas Wiegand e conexões OSDP seguras, permitindo compatibilidade nativa com sistemas de portaria remota.',
    'Substituição de fontes analógicas antigas e transformadores pesados por fontes chaveadas colmeia de 13,8V com no-break inteligente e baterias seladas novas.',
    'Padronização de eletrodutos e reorganização de quadros de fiação primária com identificação de bornes para facilitar futuras manutenções e auditorias prediais.'
  ],
  processSteps: [
    {
      step: '01',
      title: 'Auditoria Técnica do Parque de Equipamentos Atual',
      description: 'Nossa equipe inspeciona minuciosamente o estado físico das portas, batentes, eletrodutos e fiação existentes no imóvel em Curitiba, separando os itens que estão em bom estado para reaproveitamento econômico daqueles que precisam ser trocados.'
    },
    {
      step: '02',
      title: 'Elaboração do Plano de Transição sem Paradas',
      description: 'Estruturamos um cronograma de implantação em fases que garante que o condomínio ou empresa nunca fique com a portaria vulnerável ou desprotegida durante as obras, mantendo sistemas paralelos de contingência ativos durante as substituições.'
    },
    {
      step: '03',
      title: 'Substituição das Centrais e Instalação de Leitores',
      description: 'Montamos os novos quadros de comando com placas controladoras IP, substituímos leitores lentos de cartões ou biometria antiga por terminais de reconhecimento facial touchless e instalamos novos sensores magnéticos de alinhamento.'
    },
    {
      step: '04',
      title: 'Migração de Dados e Cadastramento Assistido',
      description: 'Exportamos a base de usuários do sistema antigo para a nova plataforma ou realizamos mutirão de cadastramento presencial assistido para captura biométrica e fotográfica dos moradores e funcionários, entregando novas credenciais.'
    },
    {
      step: '05',
      title: 'Homologação Final e Descomissionamento do Legado',
      description: 'Realizamos os testes finais de esforço, corte de energia e tempos de resposta, desativando e removendo de forma limpa e organizada os cabos mortos e aparelhos obsoletos que não têm mais utilidade na portaria.'
    }
  ],
  faqs: [
    {
      question: 'Por que é urgente substituir os cartões de proximidade antigos de 125 kHz?',
      answer: 'Os cartões e chaveiros tradicionais de 125 kHz (padrão EM4100) transmitem seu código de identificação em texto aberto sem nenhuma camada de criptografia. Atualmente, qualquer pessoa pode adquirir copiadores portáteis de baixo custo pela internet ou em chaveiros e clonar o cartão do condomínio em menos de dez segundos. A modernização para MIFARE DESFire com chaves de criptografia trocadas ou terminais de reconhecimento facial restabelece o controle real e auditável de quem entra no condomínio.'
    },
    {
      question: 'A portaria do condomínio fica desprotegida ou aberta durante a troca dos equipamentos?',
      answer: 'De forma alguma. Nosso método de retrofit em Curitiba segue um protocolo rigoroso de transição em paralelo. Instalamos os novos cabeamentos e a nova controladora enquanto o sistema legado permanece funcionando. A chave de corte de um sistema para o outro é executada em poucos minutos, frequentemente em horários de menor movimento, sem abrir mão da segurança física dos acessos em nenhum momento.'
    },
    {
      question: 'É possível reaproveitar as fechaduras eletroímã e as portas existentes?',
      answer: 'Sim, desde que estejam em boas condições estruturais. Quando os eletroímãs mantêm a força de retenção magnética adequada e as molas hidráulicas estão íntegras, nós limpamos os contatos, regulamos os suportes de fixação e trocamos apenas a controladora e os leitores externos, gerando uma economia expressiva no orçamento total do projeto sem comprometer a eficiência técnica e a confiabilidade operacional.'
    },
    {
      question: 'Como funciona a modernização de interfonia analógica predial antiga?',
      answer: 'Substituímos o painel analógico externo de botões desgastados por um painel digital IP antivandalismo com câmera integrada e leitor de acesso. Dependendo da bitola e integridade dos cabos existentes nos conduítes, podemos utilizar conversores IP de 2 fios para levar sinal de vídeo e áudio de alta definição aos apartamentos sem precisar passar nova fiação em todo o prédio, reduzindo significativamente o custo da obra.'
    },
    {
      question: 'O novo sistema pode ser gerenciado de forma remota pelo síndico ou administradora?',
      answer: 'Sim. As plataformas modernas de controle de acesso contam com interfaces web e aplicativos dedicados para smartphones e computadores. O síndico ou gestor de segurança pode cadastrar visitantes, consultar relatórios de passagens de qualquer local e abrir portões remotamente em situações autorizadas com total registro de logs e fotos dos eventos para prestação de contas aos condôminos.'
    }
  ],
  relatedSolutions: ['reconhecimento-facial', 'cartao-e-tag-rfid', 'interfone-e-video-porteiro', 'software-de-gestao'],
  relatedServices: ['instalacao-e-projeto', 'manutencao', 'locacao'],
  whatsappContext: 'modernização e retrofit de controle de acesso em Curitiba'
};
