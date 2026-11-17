import { SegmentContent } from '../types';

export const academiasSegment: SegmentContent = {
  slug: 'academias',
  title: 'Catraca para academia em Curitiba',
  seoTitle: 'Catraca para Academia em Curitiba | Controle de Acesso',
  metaDescription: 'Catraca para academia em Curitiba com biometria, reconhecimento facial ou cartão. Projeto, instalação e manutenção. Peça orçamento pelo WhatsApp!',
  keyword: 'catraca para academia em Curitiba',
  directAnswer: 'O controle de acesso para academias, estúdios e centros esportivos em Curitiba organiza a entrada de alunos por meio de catracas integradas a leitores biométricos digitais, reconhecimento facial ou cartões RFID, além de fechaduras em portas de vidro e controle do estacionamento quando houver. Também realizamos conserto e manutenção preventiva de catracas já instaladas.',
  image: {
    src: '/images/controle-acesso-segmento-academias.webp',
    alt: 'Catracas com terminais de leitura na entrada de uma academia',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Entrada de usuários com cadastro vencido ou sem registro na recepção nos horários de maior movimento.',
    'Sobrecarga da recepcionista para conferir manualmente quem está liberado para treinar nos horários de pico.',
    'Empréstimo de cartões ou chaveiros entre conhecidos quando não há identificação individual.',
    'Lentidão na entrada por leitores antigos desgastados ou catracas sem manutenção mecânica.',
    'Catracas travadas que precisam de conserto ágil para não prejudicar o atendimento aos alunos.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'catracas',
      title: 'Catracas Pedestal ou Balcão com Passagem Acessível',
      reason: 'Organizam a entrada individual na recepção com giro suave e suporte para manutenção contínua, acompanhadas de passagem lateral acessível conforme a ABNT NBR 9050.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais de Reconhecimento Facial',
      reason: 'Agilizam a entrada sem contato físico e reduzem o uso de cartões, observando os cuidados da LGPD.'
    },
    {
      solutionSlug: 'biometria',
      title: 'Leitores Biométricos Digitais',
      reason: 'Opção tradicional e econômica para identificação individual vinculada à catraca.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Cartões, Chaveiros e Pulseiras RFID',
      reason: 'Alternativa prática não biométrica para alunos que preferirem não cadastrar biometria ou para modalidades com contato com água.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletromagnéticas em Portas de Vidro e Salas Exclusivas',
      reason: 'Controlam portas de vidro da entrada ou salas de modalidades específicas integradas às credenciais dos alunos.'
    }
  ],
  projectArchitecture: [
    'Recepção e Catracas: Instalação ou manutenção de catraca compatível com o espaço da academia e passagem lateral acessível conforme a NBR 9050.',
    'Compatibilidade com Software da Academia: A integração com o sistema financeiro ou de gestão da academia depende da compatibilidade técnica do equipamento e deve ser conferida antes da compra.',
    'Salas Internas e Portas de Vidro: Fechaduras eletroímã em portas de vidro temperado ou divisórias de estúdios integrados.',
    'Estacionamento para Alunos: Instalação ou manutenção de cancela automática quando a academia possui estacionamento próprio.',
    'Proteção Elétrica e LGPD: Nobreak para proteger controladoras em oscilações de energia e orientação sobre consentimento e credencial alternativa conforme a LGPD.'
  ],
  faqs: [
    {
      question: 'Quanto custa uma catraca para academia em Curitiba?',
      answer: 'O valor varia de acordo com fatores como o modelo da catraca (pedestal ou balcão), o tipo de leitor escolhido (biometria digital, reconhecimento facial ou cartão RFID), a inclusão de passagem acessível lateral conforme a NBR 9050, a infraestrutura elétrica/de rede existente e a quantidade de vias. O orçamento completo é fechado após o diagnóstico técnico.'
    },
    {
      question: 'É melhor usar biometria, reconhecimento facial ou cartão na academia?',
      answer: 'Depende do fluxo de alunos e da operação da recepção. A biometria digital é econômica, mas exige toque no sensor e pode falhar com mãos úmidas; o reconhecimento facial agiliza a entrada sem toque e dispensa crachás; já o cartão ou chaveiro RFID funciona como alternativa prática e não biométrica para quem preferir, observando sempre os cuidados da LGPD.'
    },
    {
      question: 'A catraca é compatível com o sistema da minha academia?',
      answer: 'Depende do equipamento e da forma como o software gerencia a liberação ou o protocolo de comunicação. Informe o nome do sistema utilizado na solicitação de orçamento pelo WhatsApp para verificarmos a compatibilidade técnica antes da contratação.'
    },
    {
      question: 'Vocês fazem conserto e manutenção de catracas em academias de Curitiba?',
      answer: 'Sim. Realizamos atendimento corretivo e preventivo para catracas travadas, falhas de solenoide, microchaves, sensores ópticos, placas e leitores biométricos ou faciais.'
    },
    {
      question: 'Quais cuidados da LGPD a academia precisa ter com biometria e reconhecimento facial?',
      answer: 'Impressão digital e reconhecimento facial são dados pessoais sensíveis pela LGPD. A academia deve informar a finalidade ao aluno, limitar o acesso ao sistema, excluir cadastros inativos conforme política interna e disponibilizar alternativa não biométrica como cartão RFID. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'biometria', 'fechaduras-eletromagneticas'],
  relatedSegments: ['escolas-e-universidades', 'condominios-comerciais'],
  whatsappContext: 'catraca, manutenção ou controle de acesso para academia em Curitiba'
};
