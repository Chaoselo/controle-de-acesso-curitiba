import { SegmentContent } from '../types';

export const escolasEUniversidadesSegment: SegmentContent = {
  slug: 'escolas-e-universidades',
  title: 'Controle de Acesso para Escolas e Faculdades em Curitiba',
  seoTitle: 'Controle de Acesso para Escolas e Faculdades Curitiba',
  metaDescription: 'Catracas, fechaduras eletrônicas, interfonia e controle de acesso para escolas e faculdades em Curitiba. Segurança na portaria e cuidados com a LGPD.',
  keyword: 'controle de acesso para escolas e universidades em Curitiba',
  directAnswer: 'O controle de acesso para escolas, colégios e instituições de ensino em Curitiba organiza a entrada e saída de estudantes, professores, funcionários e visitantes nos horários de maior movimento. Combinando catracas com recurso antipânico, fechaduras eletromagnéticas em portões e portas de vidro, interfonia e leitores RFID ou faciais, o sistema apoia a triagem na portaria respeitando os cuidados especiais da LGPD para menores.',
  image: {
    src: '/images/controle-acesso-segmento-escolas-e-faculdades.webp',
    alt: 'Fileira de catracas com terminais faciais em um hall de entrada',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Acúmulo de pessoas na portaria escolar nos horários de entrada e saída dos turnos.',
    'Necessidade de evitar a entrada de pessoas sem identificação prévia nos pátios e corredores internos.',
    'Controle cuidadoso da saída de alunos e da identificação de responsáveis e visitantes na secretaria.',
    'Adaptação de rotas de emergência para que catracas e portas não obstruam a saída em situações de evacuação.',
    'Exigência de atenção rigorosa à LGPD no tratamento de dados de crianças e adolescentes.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'catracas',
      title: 'Catracas com Braço Antipânico e Passagem Acessível',
      reason: 'Ajudam a organizar a passagem unitária nos horários de entrada e permitem o desarme do braço em emergências, acompanhadas de passagem lateral conforme a ABNT NBR 9050.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Cartões RFID para Carteirinha Escolar e Crachás',
      reason: 'Servem como identificação prática de alunos, colaboradores e visitantes, além de evitar a coleta de dados biométricos de menores quando a escola optar por não utilizá-los.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Reconhecimento Facial (Quando Adotado pela Instituição)',
      reason: 'Reduz transtornos com esquecimento ou perda de carteirinhas em campi maiores, exigindo cumprimento rigoroso do consentimento específico para menores conforme a LGPD.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã em Portões, Salas de Professores e Portas de Vidro',
      reason: 'Mantêm portões sociais e salas pedagógicas ou laboratórios fechados até a liberação pela secretaria ou usuário autorizado.'
    },
    {
      solutionSlug: 'interfone-e-video-porteiro',
      title: 'Interfone e Vídeo Porteiro na Secretaria e Portaria',
      reason: 'Facilita a comunicação visual com pais e visitantes no portão externo antes de destravar a entrada.'
    }
  ],
  projectArchitecture: [
    'Portaria Principal: Bateria de catracas dimensionada para o fluxo dos turnos, com mecanismo antipânico quando especificado e portão acessível conforme a ABNT NBR 9050.',
    'Secretaria e Recepção de Visitantes: Interfone ou vídeo porteiro, porta com fechadura eletromagnética e controle provisório de visitantes.',
    'Salas Restritas e Laboratórios: Fechaduras eletrônicas ou eletroímãs em laboratórios, secretarias e arquivos.',
    'Estacionamento Escolar: Cancelas automáticas e controle de acesso veicular quando a instituição possui pátio de embarque ou estacionamento interno.',
    'Contingência Elétrica e LGPD para Menores: Nobreaks para continuidade em faltas de energia e orientações sobre consentimento dos responsáveis e uso de credenciais alternativas.'
  ],
  faqs: [
    {
      question: 'Quais cuidados a LGPD exige para controle de acesso de crianças e adolescentes?',
      answer: 'O artigo 14 da LGPD estabelece que o tratamento de dados de crianças e adolescentes deve observar seu melhor interesse, exigindo consentimento específico e em destaque de pelo menos um dos pais ou responsável legal para dados de crianças e cuidados proporcionais para menores, além de oferecer alternativa como cartão RFID. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    },
    {
      question: 'Para que serve o braço antipânico em catracas escolares?',
      answer: 'Em modelos equipados com esse mecanismo, o braço desarma e abaixa ao receber comando de emergência ou perder alimentação elétrica, liberando o vão de passagem em rotas de evacuação.'
    },
    {
      question: 'Como lidar quando o aluno esquece o crachá ou carteirinha?',
      answer: 'A portaria ou secretaria pode realizar liberação assistida mediante conferência visual e registro no controle interno, sem barrar indevidamente o estudante.'
    },
    {
      question: 'Vocês também fazem manutenção de catracas e interfones já instalados em escolas?',
      answer: 'Sim. Realizamos conserto e manutenção preventiva de catracas, fechaduras eletrônicas, interfones e cancelas em instituições de ensino de Curitiba e Região Metropolitana.'
    },
    {
      question: 'O controle de acesso funciona em faculdades com vários blocos?',
      answer: 'Sim, conforme o dimensionamento da rede e das controladoras no diagnóstico técnico, é possível organizar múltiplos acessos e perfis de usuários.'
    }
  ],
  relatedSolutions: ['catracas', 'cartao-e-tag-rfid', 'fechaduras-eletromagneticas', 'interfone-e-video-porteiro'],
  relatedSegments: ['academias', 'condominios-comerciais'],
  whatsappContext: 'controle de acesso ou catraca para escola ou faculdade em Curitiba'
};
