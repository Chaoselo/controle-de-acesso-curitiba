import { SegmentContent } from '../types';

export const industriasSegment: SegmentContent = {
  slug: 'industrias',
  title: 'Controle de Acesso para Indústrias em Curitiba e Região',
  seoTitle: 'Controle de Acesso Industrial Curitiba e Região | Catracas',
  metaDescription: 'Controle de acesso para indústrias, fábricas e galpões na Grande Curitiba. Torniquetes, catracas, cancelas de estacionamento e biometria. Peça orçamento!',
  keyword: 'controle de acesso para industrias em Curitiba',
  directAnswer: 'O controle de acesso para indústrias e galpões logísticos em Curitiba e Região Metropolitana organiza a entrada de colaboradores, terceirizados e veículos de carga ou passeio nos estacionamentos e docas. Combinando catracas, torniquetes de altura total, cancelas automáticas, fechaduras eletromagnéticas e leitores faciais ou RFID adequados ao ambiente fabril, o sistema auxilia na segurança operacional e no controle das portarias.',
  image: {
    src: '/images/controle-acesso-segmento-industrias.webp',
    alt: 'Trabalhador de capacete diante de terminal facial ao lado de catraca de corpo inteiro em área industrial',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Acúmulo de pessoas e filas nas portarias durante as trocas de turno por equipamentos insuficientes para o fluxo.',
    'Tentativas de passagem dupla ou contorno por cima e por baixo de bloqueios baixos em áreas externas.',
    'Conflito entre circulação de pedestres e tráfego de caminhões, empilhadeiras e veículos de pátio.',
    'Desgaste acelerado de leitores comuns expostos à poeira industrial, umidade ou variação térmica sem proteção adequada.',
    'Dificuldade para controlar a validade do acesso temporário de terceirizados, motoristas e prestadores de manutenção.',
    'Entrada sem permissão em setores operacionais sensíveis como subestações elétricas, depósitos de insumos e áreas técnicas.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'catracas',
      title: 'Torniquetes de Altura Total e Catracas Reforçadas',
      reason: 'Estruturas robustas que organizam a passagem unitária nas trocas de turno e dificultam saltos ou acessos indevidos em perímetros externos.'
    },
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais Faciais para Ambientes Industriais',
      reason: 'Permitem autenticação sem toque físico mesmo quando os operadores utilizam luvas de proteção ou estão com as mãos sujas de graxa ou poeira, escolhendo modelos com proteção adequada ao local.'
    },
    {
      solutionSlug: 'cancelas-e-acesso-veicular',
      title: 'Cancelas Veiculares para Estacionamentos e Docas',
      reason: 'Organizam a entrada de veículos leves no estacionamento e de caminhões nos pátios com laço indutivo e fotocélulas de segurança.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Crachás RFID e Tags Veiculares para Frotas',
      reason: 'Identificam colaboradores, terceirizados e caminhões da frota de forma prática, servindo também como opção não biométrica conforme a LGPD.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã em Almoxarifados e Áreas Restritas',
      reason: 'Ajudam a controlar o acesso a depósitos de ferramentas, subestações e salas administrativas ou portas de vidro da recepção.'
    }
  ],
  projectArchitecture: [
    'Portaria de Pedestres: Dimensionamento de bateria de catracas ou torniquetes de altura total em material resistente à corrosão, com passagem acessível conforme a ABNT NBR 9050.',
    'Guarita e Triagem de Terceiros: Balcão de recepção com interfone ou vídeo porteiro para atendimento de motoristas e registro organizado de prestadores temporários.',
    'Pátio, Docas e Estacionamento: Instalação ou manutenção de cancelas automáticas, laços indutivos no piso, fotocélulas e antenas UHF para veículos autorizados.',
    'Áreas Internas Críticas: Fechaduras eletromagnéticas, botoeiras de emergência e leitores compatíveis em salas técnicas e depósitos.',
    'Proteção Elétrica e Contingência: Caixas de passagem protegidas, cabeamento blindado contra interferências de máquinas e nobreaks dimensionados para o projeto.'
  ],
  faqs: [
    {
      question: 'Os equipamentos resistem à poeira e à umidade comuns em galpões industriais?',
      answer: 'Depende do modelo especificado. Para áreas abertas ou galpões com poeira em suspensão, indicamos equipamentos com grau de proteção IP compatível com o nível de exposição e rotina periódica de manutenção preventiva.'
    },
    {
      question: 'Como dimensionar a portaria para evitar filas nas trocas de turno?',
      answer: 'A quantidade de catracas ou torniquetes é calculada na vistoria técnica de acordo com o número de colaboradores por turno, a janela de chegada e o tipo de leitor escolhido.'
    },
    {
      question: 'Vocês fazem manutenção de torniquetes, catracas e cancelas em indústrias?',
      answer: 'Sim. Prestamos manutenção preventiva e conserto corretivo de catracas, torniquetes, cancelas, laços indutivos e interfones em indústrias e centros logísticos de Curitiba e Região Metropolitana.'
    },
    {
      question: 'Como funciona a liberação em emergências e rotas de fuga?',
      answer: 'Em conformidade com normas aplicáveis do Corpo de Bombeiros, portas de rota de fuga contam com botoeiras de emergência e catracas podem receber mecanismo antipânico, devendo cada caso ser conferido com o responsável técnico de segurança do trabalho.'
    },
    {
      question: 'Quais cuidados da LGPD se aplicam ao controle de acesso industrial?',
      answer: 'Quando houver uso de biometria, reconhecimento facial ou registro de placas de veículos vinculado a motoristas e colaboradores, a empresa deve definir finalidade clara, restringir acessos aos cadastros, disponibilizar opção alternativa como crachá RFID e gerenciar períodos de exclusão. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'cancelas-e-acesso-veicular', 'fechaduras-eletromagneticas'],
  relatedSegments: ['empresas-e-escritorios', 'condominios-comerciais'],
  whatsappContext: 'controle de acesso, torniquetes ou cancelas para indústria em Curitiba e Região'
};
