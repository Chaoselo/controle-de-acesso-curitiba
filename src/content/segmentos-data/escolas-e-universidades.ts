import { SegmentContent } from '../types';

export const escolasEUniversidadesSegment: SegmentContent = {
  slug: 'escolas-e-universidades',
  title: 'Controle de Acesso para Escolas e Faculdades em Curitiba',
  seoTitle: 'Controle de Acesso para Escolas e Faculdades Curitiba',
  metaDescription: 'Segurança estudantil com catracas e controle de acesso escolar em Curitiba. Notificação de entrada e saída e bloqueio de estranhos. Peça orçamento!',
  keyword: 'controle de acesso para escolas e universidades em Curitiba',
  directAnswer: 'O controle de acesso para colégios, escolas infantis e campi universitários em Curitiba organiza o fluxo intenso de estudantes, docentes, funcionários e pais nos horários de entrada e saída de aulas. Combinando catracas com mecanismo de braço antipânico certificado, reconhecimento facial ou cartões escolares e totens de triagem de visitantes, a solução impede a evasão de alunos sem autorização e protege a comunidade escolar com absoluto respeito à LGPD para menores.',
  image: {
    src: '/images/controle-acesso-segmento-escolas-e-faculdades.webp',
    alt: 'Fileira de catracas com terminais faciais em um hall de entrada',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Congestionamento e empurrões no portão escolar nos intervalos críticos de entrada e saída de turnos (manhã, tarde e noite), sobrecarregando inspetores escolares e recepcionistas do colégio.',
    'Risco contínuo de evasão escolar não autorizada de estudantes menores de idade durante o período letivo ou saída acompanhada por adultos não autorizados formalmente pelos pais.',
    'Acesso indevido de pessoas desconhecidas, prestadores informais e vendedores ambulantes aos pátios internos, salas de aula e quadras esportivas sem identificação prévia na guarita principal da escola.',
    'Falta de comunicação rápida e automatizada com os pais ou responsáveis legais quando o aluno entra ou deixa as dependências do estabelecimento de ensino de Curitiba.',
    'Bloqueio ou retenção inadequada de alunos em portas e corredores em caso de simulação ou emergência real de evacuação rápida provocada por princípio de incêndio.',
    'Insegurança jurídica da instituição escolar no manuseio, coleta e tratamento de dados biométricos de menores de idade sem as devidas salvaguardas exigidas pela legislação da LGPD.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'catracas',
      title: 'Catracas Pedestal com Mecanismo de Braço Antipânico',
      reason: 'Asseguram contagem e validação individual de cada estudante no dia a dia e desarmam automaticamente os três braços metálicos para a posição vertical em caso de evacuação de emergência do colégio.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Reconhecimento Facial de Alta Velocidade para Estudantes',
      reason: 'Elimina a dependência de cartões escolares que crianças e jovens frequentemente perdem ou esquecem em casa, permitindo passagem rápida e fluida sem retenção mecânica na fila de entrada da escola.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Cartões RFID Personalizados para Carteirinha de Estudante',
      reason: 'Atuam como solução híbrida física de excelente custo-benefício para identificação visual com foto impressa, controle de acesso às catracas e empréstimo automatizado de livros na biblioteca escolar ou universitária da instituição de ensino.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã em Portões Sociais e Eclusas de Pais',
      reason: 'Garantem que os portões externos permaneçam firmemente travados contra tentativas de empurrão mecânico ou arrombamento, sendo destravados somente após a identificação prévia e visual do visitante pela equipe da secretaria escolar.'
    },
    {
      solutionSlug: 'biometria',
      title: 'Leitores Biométricos em Laboratórios e Salas de Professores',
      reason: 'Garantem controle rigoroso em setores restritos como almoxarifado de provas, salas de tecnologia e departamentos pedagógicos, liberando o acesso apenas para docentes e técnicos autorizados.'
    }
  ],
  projectArchitecture: [
    'Portaria Escolar e Bateria de Catracas: Dimensionamento de bateria de catracas com braços tipo pedestal em aço inox escovado, equipadas com eletroímã antipânico que desarma os braços quando a energia cai ou o alarme soa, mais um portão lateral acessível conforme a NBR 9050.',
    'Secretaria e Balcão de Visitantes: Espaço com vidros de segurança e guichê de atendimento, dotado de scanner de documentos, câmera de alta resolução para fotografia de pais e autorizados a buscar alunos e impressora térmica de etiquetas adesivas provisórias.',
    'Controle de Salas de Professores, TI e Laboratórios: Instalação de fechaduras eletromagnéticas em laboratórios de informática, sala dos professores, almoxarifado de provas e diretoria, com leitores biométricos restritos ao corpo docente.',
    'Integração com Sistema Acadêmico da Instituição: Configuração de rotina de sincronização entre o banco de dados do sistema acadêmico e as controladoras de acesso para atualização automática de matrículas, transferências e trancamentos.',
    'Alimentação Elétrica Ininterrupta e Rota de Fuga: No-breaks inteligentes conectados à rede de alarme de incêndio que desarmam instantaneamente todos os bloqueios mecânicos caso seja acionada a botoeira de pânico de emergência da escola.'
  ],
  faqs: [
    {
      question: 'Quais os cuidados específicos da LGPD com dados biométricos de crianças e adolescentes?',
      answer: 'O artigo 14 da LGPD determina que o tratamento de dados pessoais de crianças e adolescentes deve ser realizado em seu melhor interesse. No caso de biometria ou reconhecimento facial de menores, é obrigatório colher o consentimento específico e em destaque dado por pelo menos um dos pais ou pelo responsável legal no contrato de matrícula. Nossos sistemas armazenam apenas templates criptografados e não fotos abertas. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    },
    {
      question: 'O que é a catraca com braço antipânico e por que ela é obrigatória em escolas?',
      answer: 'A catraca com braço antipânico possui um solenoide especial que, ao perder a alimentação elétrica ou receber sinal da central de alarme de incêndio, faz o braço superior cair automaticamente para a posição vertical. Isso libera completamente o vão de passagem para que centenas de alunos possam evacuar a escola sem qualquer obstáculo em rotas de fuga.'
    },
    {
      question: 'Como a portaria gerencia a liberação de alunos por terceiros ou parentes eventuais?',
      answer: 'O sistema escolar permite cadastrar uma lista restrita de adultos autorizados pelos pais (como avós, tios ou motoristas de van escolar) com suas respectivas fotos e documentos. O porteiro visualiza na tela a foto cadastrada antes de destravar o portão para a saída da criança.'
    },
    {
      question: 'E se o aluno esquecer o crachá ou a carteirinha em casa no dia de aula?',
      answer: 'A instituição pode adotar o reconhecimento facial complementar, onde a própria face do estudante valida a passagem, ou autorizar a recepção a fazer uma liberação manual assistida no sistema, registrando o evento no histórico acadêmico sem reter o aluno do lado de fora do colégio.'
    },
    {
      question: 'É viável utilizar o mesmo sistema em uma grande universidade com múltiplos blocos em Curitiba?',
      answer: 'Sim. Em universidades com milhares de acadêmicos e vários blocos de salas, utilizamos controladoras IP interligadas por rede óptica que sincronizam centenas de catracas simultâneas, permitindo inclusive o controle de acesso diferenciado a cursos noturnos, laboratórios e bibliotecas.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'fechaduras-eletromagneticas', 'biometria'],
  relatedSegments: ['academias', 'condominios-comerciais'],
  whatsappContext: 'controle de acesso para escolas e universidades em Curitiba'
};
