import { SegmentContent } from '../types';

export const empresasEEscritoriosSegment: SegmentContent = {
  slug: 'empresas-e-escritorios',
  title: 'Controle de Acesso para Empresas e Escritórios em Curitiba',
  seoTitle: 'Controle de Acesso para Empresas em Curitiba | Escritórios',
  metaDescription: 'Controle de acesso para empresas, escritórios e portas de vidro em Curitiba. Biometria, facial, fechadura eletrônica e interfones. Peça orçamento!',
  keyword: 'controle de acesso para empresas e escritorios em Curitiba',
  directAnswer: 'O controle de acesso para empresas e escritórios em Curitiba protege setores internos como TI/CPD, financeiro, almoxarifado e recepções, inclusive em divisórias e portas de vidro. Utilizando leitores biométricos, reconhecimento facial, cartões RFID, senhas e fechaduras eletrônicas ou eletromagnéticas, a organização restringe passagens conforme cada perfil e mantém histórico de acessos.',
  image: {
    src: '/images/controle-acesso-segmento-escritorio.webp',
    alt: 'Leitor de acesso instalado na divisória de vidro de um escritório',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Circulação irrestrita de visitantes ou equipes operacionais em setores sigilosos como servidores de TI, financeiro e arquivos.',
    'Uso de chaves comuns sujeitas a cópias, perda ou dificuldade para recolhimento em desligamentos.',
    'Demora para revogar permissões físicas de colaboradores ou prestadores quando encerram atividades na empresa.',
    'Falta de histórico de quem acessou salas técnicas, estoques e recepções fora do horário comercial.',
    'Portas de vidro temperado ou divisórias corporativas que necessitam de fechadura eletrônica compatível sem furar o vidro.',
    'Necessidade de interfone ou vídeo porteiro na recepção para triagem antes de destravar a entrada.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã e Eletrônicas em Portas de Vidro e Divisórias',
      reason: 'Permitem travamento silencioso e seguro em portas de vidro temperado, madeira ou alumínio com suportes específicos e botoeiras de saída.'
    },
    {
      solutionSlug: 'biometria',
      title: 'Leitores Biométricos em Salas Restritas',
      reason: 'Auxiliam a restringir salas de TI, cofres e estoques apenas aos colaboradores autorizados, mantendo registro de passagens.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais Faciais na Entrada Principal',
      reason: 'Oferecem liberação rápida e sem contato para equipes corporativas na chegada ao escritório.'
    },
    {
      solutionSlug: 'senha-e-teclado',
      title: 'Teclados Numéricos com Senha Individual ou Dupla Verificação',
      reason: 'Solução prática para almoxarifados e salas técnicas, permitindo alterar códigos rapidamente quando necessário.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Cartões e Crachás RFID Corporativos',
      reason: 'Integram identificação visual e liberação de portas ou catracas, além de servir como opção não biométrica conforme boas práticas da LGPD.'
    }
  ],
  projectArchitecture: [
    'Recepção e Porta Principal de Vidro: Instalação de fechadura eletromagnética ou eletrônica adequada à esquadria, mola aérea, leitor facial ou RFID e interfone/vídeo porteiro para atendimento.',
    'Setores Internos Restritos: Aplicação de biometria, teclado de senha ou leitor RFID em salas de servidores, arquivos e financeiro.',
    'Infraestrutura de Cabeamento: Lançamento organizado de cabos de dados e energia protegidos contra danos e interferências.',
    'Controladoras e Regras de Acesso: Parametrização de horários por setor e cadastro de usuários com desativação rápida em desligamentos.',
    'Contingência Elétrica: Fontes carregadoras com baterias auxiliares ou nobreak dimensionado para manter portas travadas durante quedas temporárias de energia.'
  ],
  faqs: [
    {
      question: 'Como revogar o acesso quando um funcionário é desligado?',
      answer: 'O administrador inativa o cadastro do colaborador no painel ou diretamente no equipamento, bloqueando imediatamente sua digital, face, cartão ou senha nos pontos de acesso conectados.'
    },
    {
      question: 'Vocês instalam fechadura eletrônica e leitor de acesso em portas de vidro de escritórios?',
      answer: 'Sim. Utilizamos suportes próprios para vidro temperado, mola aérea hidráulica e passagem organizada dos fios junto ao perfil ou batente, sem precisar furar a folha de vidro.'
    },
    {
      question: 'O controle de acesso físico substitui o relógio de ponto eletrônico (REP)?',
      answer: 'Não. O controle de acesso tem foco em segurança física e restrição de ambientes, enquanto o registro oficial de jornada de trabalho segue regras específicas da legislação trabalhista.'
    },
    {
      question: 'É possível limitar os horários de acesso de equipes terceirizadas?',
      answer: 'Sim. Conforme o equipamento adotado, podem ser criadas faixas horárias específicas para limpeza, manutenção ou prestadores, impedindo a abertura fora do período combinado.'
    },
    {
      question: 'Quais cuidados da LGPD a empresa deve observar com biometria ou reconhecimento facial de funcionários?',
      answer: 'Dados biométricos são classificados como dados pessoais sensíveis pela LGPD. A empresa deve definir finalidade legítima, dar transparência aos titulares, limitar quem acessa os cadastros, disponibilizar meio alternativo como cartão RFID e excluir dados após o desligamento. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    }
  ],
  relatedSolutions: ['fechaduras-eletromagneticas', 'biometria', 'reconhecimento-facial', 'cartao-e-tag-rfid'],
  relatedSegments: ['condominios-comerciais', 'industrias'],
  whatsappContext: 'controle de acesso ou fechadura em porta de vidro para empresa em Curitiba'
};
