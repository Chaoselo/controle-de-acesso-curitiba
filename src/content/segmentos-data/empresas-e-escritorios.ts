import { SegmentContent } from '../types';

export const empresasEEscritoriosSegment: SegmentContent = {
  slug: 'empresas-e-escritorios',
  title: 'Controle de Acesso para Empresas e Escritórios em Curitiba',
  seoTitle: 'Controle de Acesso para Empresas em Curitiba | Escritórios',
  metaDescription: 'Segurança e controle de acesso para empresas e escritórios em Curitiba. Restrição de setores, TI, financeiro e portas protegidas. Orçamento no WhatsApp!',
  keyword: 'controle de acesso para empresas e escritorios em Curitiba',
  directAnswer: 'O controle de acesso para empresas e escritórios em Curitiba protege ativos estratégicos, dados corporativos e áreas restritas como CPD, financeiro e almoxarifado. Através de leitores biométricos digitais, reconhecimento facial, fechaduras eletromagnéticas e controle de níveis de permissão em software, a empresa restringe a circulação interna de pessoas não autorizadas e obtém trilhas de auditoria completas para conformidade e segurança.',
  // TODO: foto real
  image: {
    src: '/images/segmento-empresas-escritorios.webp',
    alt: 'Porta de CPD corporativo com fechadura eletroímã e leitor de acesso em Curitiba',
    width: 800,
    height: 600
  },
  typicalProblems: [
    'Circulação irrestrita de funcionários de áreas operacionais em departamentos críticos e sigilosos como tesouraria, sala de servidores de TI e diretoria sem qualquer tipo de barreira física.',
    'Uso de chaves mecânicas tradicionais que são frequentemente esquecidas em mesas, extraviadas ou copiadas por funcionários sem o conhecimento ou a autorização prévia da gestão.',
    'Dificuldade e demora para revogar de forma imediata o acesso físico de colaboradores recém-desligados da companhia, gerando riscos de acesso indevido às instalações ou cópia de arquivos confidenciais.',
    'Falta de registros auditáveis de data e horário de entrada em salas de arquivo fiscal e servidores de tecnologia, dificultando a elucidação de incidentes de segurança da informação ou sumiço de equipamentos.',
    'Portas internas de divisórias e painéis de gesso acartonado (drywall) danificadas por fechaduras inadequadas ou trincos instalados sem dimensionamento correto de alinhamento e esforço mecânico.',
    'Falta de integração entre o sistema de controle de acesso físico e as rotinas de gestão de recursos humanos para apuração de ponto eletrônico e controle de jornada de trabalho.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'biometria',
      title: 'Leitores Biométricos Digitais em Áreas Críticas',
      reason: 'Oferecem validação biométrica intransferível para salas com restrição máxima, como CPDs corporativos e cofres, garantindo que somente funcionários expressamente designados pela diretoria de departamento tenham a porta liberada com registro cronológico.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais Faciais na Entrada Principal da Empresa',
      reason: 'Proporcionam entrada rápida e higiênica sem necessidade de qualquer contato físico para o time corporativo, operando com alta velocidade de leitura mesmo em dias de intenso movimento de colaboradores no início do expediente.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã de 150kgf a 280kgf com Mola Aérea',
      reason: 'Asseguram travamento silencioso e altamente confiável em portas de vidro, madeira ou divisórias de alumínio, sem peças móveis sujeitas a desgaste mecânico rápido e com destravamento imediato por botoeira no-touch sem toque.'
    },
    {
      solutionSlug: 'senha-e-teclado',
      title: 'Teclados Numéricos com Senha Individual e Coação',
      reason: 'Atuam como solução prática ou segundo fator de autenticação para estoques, almoxarifados e salas de arquivo, permitindo alteração instantânea de senhas pelo gestor sem necessidade de despesas com novos crachás físicos.'
    },
    {
      solutionSlug: 'software-de-gestao',
      title: 'Software Centralizado com Trilhas de Auditoria',
      reason: 'Centraliza a gestão de permissões por departamento, possibilita exclusão de acessos com um único clique no desligamento de funcionários e exporta relatórios detalhados em formatos PDF e planilhas eletrônicas para auditoria.'
    }
  ],
  projectArchitecture: [
    'Perímetro de Recepção e Entrada Principal: Instalação de terminal de reconhecimento facial touchless integrado a fechadura eletromagnética de 280kgf em porta social de vidro temperado, com mola aérea hidráulica de amortecimento regulada para fechamento suave.',
    'Segregação Setorial Interna: Aplicação de leitores biométricos e teclados numéricos nos acessos ao data center (CPD), departamento financeiro, departamento de recursos humanos e estoque de alto valor agregado.',
    'Infraestrutura de Cabeamento de Rede e Alimentação: Lançamento de cabeamento blindado Cat6 e eletrocalhas metálicas fechadas, mantendo a fiação protegida contra interferências eletromagnéticas e tentativas de sabotagem física.',
    'Central de Processamento e Controladoras IP: Montagem de rack com painel de comando abrigando controladoras de portas modulares com comunicação TCP/IP nativa e backup de dados em memória não volátil contra falhas de conexão.',
    'Sistema de Contingência e No-Break: Instalação de fontes de alimentação colmeia de 13,8V com flutuador de carga acopladas a baterias seladas para garantir autonomia ininterrupta às fechaduras durante quedas na rede da Copel em Curitiba.'
  ],
  faqs: [
    {
      question: 'O que a empresa deve fazer imediatamente quando um colaborador é desligado?',
      answer: 'Basta que o administrador do sistema acesse o software de controle de acesso no computador ou navegador e marque o cadastro do funcionário como inativo. Automaticamente, o comando de bloqueio é propagado para todas as controladoras e terminais biométricos da empresa em tempo real, cancelando imediatamente a autorização de abertura em todas as portas.'
    },
    {
      question: 'Como proteger a sala de servidores e CPD atendendo a normas de auditoria e compliance?',
      answer: 'Para ambientes de tecnologia e CPD, instalamos fechaduras eletromagnéticas robustas com sensores de porta aberta integrados, leitor biométrico de alta precisão e botão de saída de emergência tipo quebre o vidro. O sistema registra cada segundo de abertura e gera alertas sonoros na recepção caso a porta permaneça calçada ou entreaberta.'
    },
    {
      question: 'O sistema de controle de acesso substitui o relógio de ponto eletrônico (REP)?',
      answer: 'Não. O controle de acesso físico tem a finalidade primordial de segurança patrimonial e restrição de áreas. O relógio de ponto eletrônico obedece a normas trabalhistas específicas do Ministério do Trabalho (Portaria 671). Entretanto, os softwares modernos de acesso permitem exportar relatórios de passagens para cruzar dados com a apuração de horas do RH.'
    },
    {
      question: 'É possível restringir horários para que equipes terceirizadas não entrem fora do combinado?',
      answer: 'Sim. É comum criar perfis com restrição rígida para equipes de limpeza terceirizada, estagiários e fornecedores de suporte. O sistema pode autorizar a entrada unicamente em horários pré-estabelecidos (como de segunda a sexta das 18h30 às 22h00), recusando a abertura e notificando a segurança em qualquer outro período.'
    },
    {
      question: 'Quais tipos de relatórios gerenciais o sistema fornece para a diretoria?',
      answer: 'A diretoria pode gerar relatórios de ocupação em tempo real, registros cronológicos de acessos por colaborador ou porta específica, relatórios de tentativas de acessos negados por falta de permissão, além de logs de auditoria detalhados que mostram quem cadastrou ou alterou permissões no sistema.'
    }
  ],
  relatedSolutions: ['biometria', 'reconhecimento-facial', 'fechaduras-eletromagneticas', 'software-de-gestao'],
  relatedSegments: ['condominios-comerciais', 'industrias'],
  whatsappContext: 'controle de acesso para empresas e escritórios em Curitiba'
};
