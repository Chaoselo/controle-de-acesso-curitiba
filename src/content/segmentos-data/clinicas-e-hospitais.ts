import { SegmentContent } from '../types';

export const clinicasEHospitaisSegment: SegmentContent = {
  slug: 'clinicas-e-hospitais',
  title: 'Controle de Acesso para Clínicas e Hospitais em Curitiba',
  seoTitle: 'Controle de Acesso para Clínicas e Hospitais Curitiba',
  metaDescription: 'Acesso sem toque e seguro para clínicas, consultórios e hospitais em Curitiba. Portas de vidro, fechaduras eletroímã, leitores faciais e interfonia.',
  keyword: 'controle de acesso para clinicas e hospitais em Curitiba',
  directAnswer: 'O controle de acesso para clínicas médicas, laboratórios e hospitais em Curitiba organiza a circulação de pacientes, acompanhantes e equipes assistenciais, protegendo áreas restritas como farmácia, estoque de medicamentos e salas de procedimento. Com autenticação sem contato físico (touchless), botoeiras no-touch e fechaduras eletroímã silenciosas — inclusive em portas de vidro — o sistema apoia rotinas de higiene e cuidados da LGPD.',
  image: {
    src: '/images/controle-acesso-segmento-clinicas-e-hospitais.webp',
    alt: 'Leitor de acesso com digital e teclado na parede de um corredor hospitalar',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Contato frequente de colaboradores e visitantes com maçanetas, teclados e sensores comuns em áreas de atendimento de saúde.',
    'Circulação indevida de acompanhantes ou visitantes em alas restritas, consultórios, centros de procedimento e áreas internas.',
    'Necessidade de controlar e registrar o acesso a estoques de insumos, arquivos médicos e farmácias.',
    'Portas de vidro ou divisórias de clínicas que exigem fechadura eletrônica silenciosa sem impacto que incomode pacientes.',
    'Passagens que precisam respeitar as dimensões de acessibilidade para macas e cadeiras de rodas (ABNT NBR 9050).',
    'Exigência de atenção redobrada ao tratamento de dados pessoais e biométricos conforme a LGPD.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais Faciais Sem Toque (Touchless)',
      reason: 'Permitem que médicos, enfermeiros e equipe passem sem encostar as mãos em leitores ou teclados compartilhados.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã em Portas de Vidro com Botoeira No-Touch',
      reason: 'Proporcionam travamento silencioso em portas de vidro temperado ou convencionais, com destravamento ao aproximar a mão do sensor sem toque.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Crachás de Proximidade RFID Higienizáveis',
      reason: 'Podem ser usados por aproximação sem encostar no leitor e funcionam como alternativa não biométrica quando necessário.'
    },
    {
      solutionSlug: 'interfone-e-video-porteiro',
      title: 'Interfone e Vídeo Porteiro na Recepção',
      reason: 'Permite identificar pacientes e entregadores na entrada externa ou porta principal de clínicas antes de acionar a fechadura pela recepção.'
    },
    {
      solutionSlug: 'catracas',
      title: 'Catracas com Passagem Ampla Acessível',
      reason: 'Organizam a triagem na recepção principal de unidades maiores mantendo vão lateral acessível para cadeirantes e macas.'
    }
  ],
  projectArchitecture: [
    'Recepção e Porta Principal: Fechadura eletromagnética em porta de vidro ou convencional acionada por interfone/vídeo porteiro, botoeira da recepção ou leitor RFID/facial.',
    'Áreas Internas e Farmácia: Controle de acesso por reconhecimento facial, biometria ou senha em depósitos de materiais, almoxarifado e salas restritas, com registro de passagens.',
    'Saída Sem Contato e Rotas de Fuga: Botoeiras no-touch por aproximação para saída cotidiana e botões de emergência para rotas de fuga conforme normas aplicáveis.',
    'Estacionamento de Pacientes e Equipe: Cancelas automáticas e controle veicular quando a clínica ou hospital dispõe de estacionamento próprio.',
    'Contingência Elétrica e Privacidade: Fontes carregadoras com baterias auxiliares e orientação sobre governança de dados sensíveis pela LGPD.'
  ],
  faqs: [
    {
      question: 'Quais cuidados da LGPD se aplicam ao controle de acesso em clínicas e hospitais?',
      answer: 'Dados biométricos são dados pessoais sensíveis pela LGPD (Lei nº 13.709/2018), e ambientes de saúde exigem atenção redobrada à separação entre controle físico de portas e informações de prontuário. É importante definir finalidade, restringir acessos aos cadastros e oferecer alternativa como cartão RFID. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    },
    {
      question: 'O leitor facial funciona quando profissionais usam máscara ou touca?',
      answer: 'Depende do modelo e da configuração do algoritmo de reconhecimento facial. Na avaliação técnica, especificamos modelos compatíveis com o ambiente e as condições de uso da clínica.'
    },
    {
      question: 'Como funcionam as fechaduras em portas de emergência de clínicas?',
      answer: 'Em rotas de fuga, fechaduras eletromagnéticas fail-safe costumam ser integradas a botões de emergência e, quando aplicável, à central de incêndio para liberar a passagem em evacuações, observando sempre as exigências do responsável técnico e do Corpo de Bombeiros.'
    },
    {
      question: 'É possível abrir a porta de vidro sem encostar em botões?',
      answer: 'Sim. Botoeiras infravermelhas sem toque (no-touch) liberam a fechadura pela aproximação da mão, sem contato físico com a superfície.'
    },
    {
      question: 'Como organizar o acesso de acompanhantes ou visitantes?',
      answer: 'Conduzindo o cadastro na recepção com crachás de proximidade temporários ou liberação assistida conforme as regras internas do estabelecimento.'
    }
  ],
  relatedSolutions: ['reconhecimento-facial', 'fechaduras-eletromagneticas', 'interfone-e-video-porteiro', 'cartao-e-tag-rfid'],
  relatedSegments: ['empresas-e-escritorios', 'condominios-comerciais'],
  whatsappContext: 'controle de acesso ou fechadura para clínica ou hospital em Curitiba'
};
