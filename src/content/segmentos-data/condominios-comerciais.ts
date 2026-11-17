import { SegmentContent } from '../types';

export const condominiosComerciaisSegment: SegmentContent = {
  slug: 'condominios-comerciais',
  title: 'Controle de Acesso para Condomínios Comerciais em Curitiba',
  seoTitle: 'Controle de Acesso para Condomínio Comercial Curitiba',
  metaDescription: 'Controle de acesso para edifícios corporativos e estacionamentos comerciais em Curitiba. Catracas, cancelas, fechaduras em portas de vidro e interfonia.',
  keyword: 'controle de acesso para condominios comerciais em Curitiba',
  directAnswer: 'O controle de acesso para condomínios comerciais e edifícios corporativos em Curitiba organiza a circulação de condôminos, colaboradores, visitantes e veículos em recepções e estacionamentos. Combinando catracas de acesso, leitura facial, cartões RFID, fechaduras eletromagnéticas em portas de vidro e cancelas automáticas, o sistema melhora a triagem no saguão e facilita a auditoria predial.',
  image: {
    src: '/images/controle-acesso-segmento-condominio-comercial.webp',
    alt: 'Leitor biométrico com teclado instalado em porta de vidro de área comercial',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Acúmulo de visitantes e filas na recepção nos horários de início de expediente.',
    'Circulação sem registro de pessoas desconhecidas pelos andares e salas comerciais.',
    'Conflito de tráfego entre mensalistas e visitantes rotativos no estacionamento do edifício.',
    'Dificuldade para atualizar cadastros rapidamente quando colaboradores de diferentes conjuntos são desligados.',
    'Portas técnicas, de vidro ou acessos de serviço fora de regulagem ou sem controle de horário.',
    'Necessidade de manutenção ágil em catracas, cancelas e interfones para evitar interrupções na portaria.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'catracas',
      title: 'Catracas Balcão, Pedestal e Flap com Passagem Acessível',
      reason: 'Realizam o bloqueio individualizado na recepção e suportam o fluxo intenso de usuários do edifício, com passagem lateral acessível conforme a ABNT NBR 9050.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais Faciais Integrados às Catracas e Portas de Vidro',
      reason: 'Agilizam a liberação de colaboradores e condôminos fixos sem contato físico e reduzem perdas de crachás.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Cartões RFID de Proximidade e Crachás de Visitantes',
      reason: 'Permitem emitir credenciais provisórias na recepção com recolhimento na urna da catraca de saída e funcionam como alternativa à biometria.'
    },
    {
      solutionSlug: 'cancelas-e-acesso-veicular',
      title: 'Cancelas para Estacionamentos Comerciais e Garagens',
      reason: 'Organizam o fluxo de veículos mensalistas e rotativos com laço indutivo, fotocélulas e leitores compatíveis com a operação do estacionamento.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã em Portas de Vidro e Áreas Técnicas',
      reason: 'Proporcionam travamento silencioso em portas de vidro temperado, halls de pavimentos e salas restritas.'
    }
  ],
  projectArchitecture: [
    'Hall de Entrada e Bateria de Catracas: Dimensionamento de catracas balcão, pedestal ou flap compatíveis com o fluxo do prédio e passagem acessível conforme a NBR 9050.',
    'Portas de Vidro e Salas Restritas: Aplicação de fechaduras eletromagnéticas com suportes próprios, molas aéreas e botoeiras de saída e emergência.',
    'Estacionamento e Garagem: Instalação ou manutenção de cancelas automáticas, laços indutivos, fotocélulas, antenas UHF e interfonia para atendimento nas pistas.',
    'Compatibilidade com Elevadores e Portaria: Avaliação técnica prévia quando houver integração com sistemas de elevadores ou plataformas já existentes no edifício.',
    'Contingência Elétrica e LGPD: Dimensionamento de fonte carregadora com baterias ou nobreak e orientação para tratamento responsável de dados biométricos e placas.'
  ],
  faqs: [
    {
      question: 'Como o sistema controla horários diferentes para funcionários e administração?',
      answer: 'Em geral, é possível configurar faixas horárias por grupo de usuários na controladora ou no sistema, restringindo determinados perfis ao horário comercial enquanto outros perfis permanecem liberados fora do expediente.'
    },
    {
      question: 'Como funciona o recolhimento de crachás de visitantes na saída?',
      answer: 'Catracas com urna coletora embutida permitem que o visitante insira o crachá provisório na fenda ao sair; o leitor valida e libera o giro, retendo o cartão para reaproveitamento.'
    },
    {
      question: 'Vocês atendem estacionamentos e cancelas de prédios comerciais?',
      answer: 'Sim. Realizamos instalação, regulagem, conserto e manutenção preventiva de cancelas, laços indutivos, fotocélulas e controles veiculares para estacionamentos e garagens comerciais.'
    },
    {
      question: 'O controle de acesso pode integrar com os elevadores do prédio?',
      answer: 'Depende da compatibilidade técnica com o comando dos elevadores instalado no edifício. Essa viabilidade é analisada durante a vistoria técnica.'
    },
    {
      question: 'Quais cuidados da LGPD se aplicam em condomínios comerciais com biometria ou reconhecimento facial?',
      answer: 'Dados biométricos são pessoais sensíveis pela LGPD, exigindo finalidade definida, informação clara a condôminos e visitantes, acesso restrito ao sistema e opção de crachá RFID para quem não fornecer biometria. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'cartao-e-tag-rfid', 'cancelas-e-acesso-veicular'],
  relatedSegments: ['empresas-e-escritorios', 'condominios-residenciais'],
  whatsappContext: 'controle de acesso, catracas ou estacionamento para condomínio comercial em Curitiba'
};
