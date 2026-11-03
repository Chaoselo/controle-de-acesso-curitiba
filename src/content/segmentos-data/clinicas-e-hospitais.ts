import { SegmentContent } from '../types';

export const clinicasEHospitaisSegment: SegmentContent = {
  slug: 'clinicas-e-hospitais',
  title: 'Controle de Acesso para Clínicas e Hospitais em Curitiba',
  seoTitle: 'Controle de Acesso para Clínicas e Hospitais Curitiba',
  metaDescription: 'Acesso seguro e touchless para ambientes de saúde em Curitiba. Fechaduras de emergência, leitores faciais e proteção de farmácias. Orçamento!',
  keyword: 'controle de acesso para clinicas e hospitais em Curitiba',
  directAnswer: 'O controle de acesso para clínicas médicas, laboratórios e hospitais em Curitiba estabelece barreiras sanitárias e de segurança física para proteger pacientes e equipes de saúde. Com tecnologia de autenticação totalmente sem contato físico (touchless), botoeiras infravermelhas e intertravamento de portas em farmácias, centros cirúrgicos e UTIs, o sistema garante conformidade rigorosa com normas da Anvisa e regras da LGPD sobre dados de saúde.',
  // TODO: foto real
  image: {
    src: '/images/segmento-clinicas-hospitais.webp',
    alt: 'Porta hospitalar com fechadura eletromagnética e acionamento touchless sem toque em Curitiba',
    width: 800,
    height: 600
  },
  typicalProblems: [
    'Risco contínuo de contaminação cruzada biológica pelo toque constante de médicos, enfermeiros e pacientes em maçanetas tradicionais, teclados numéricos e sensores de impressão digital não higienizados periodicamente.',
    'Acesso indevido de visitantes ou acompanhantes desavisados a áreas de assepsia estrita, como Unidades de Terapia Intensiva (UTI), alas de isolamento infeccioso e centros cirúrgicos.',
    'Necessidade crítica de blindagem e auditoria rigorosa de acesso à farmácia hospitalar central e ao estoque de medicamentos controlados de alto custo e entorpecentes sujeitos a desvios.',
    'Dificuldade para segregar com rapidez e clareza os fluxos de pacientes ambulatoriais comuns, equipes clínicas de plantão médico e prestadores de manutenção de equipamentos biomédicos.',
    'Passagens estreitas com portas que desrespeitam as normas de acessibilidade universal (ABNT NBR 9050), dificultando a circulação ágil de macas, leitos móveis e cadeiras de rodas.',
    'Preocupações jurídicas com a coleta e o armazenamento de dados biométricos de pacientes e visitantes em conformidade com as restrições da Lei Geral de Proteção de Dados (LGPD).'
  ],
  idealSolutions: [
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Terminais Faciais Touchless com Lente Dupla e Luz Visível',
      reason: 'Permitem autenticação ultra-rápida sem exigir qualquer contato físico dos profissionais de saúde, realizando o reconhecimento facial com alta precisão mesmo se o médico ou enfermeiro estiver de máscara descartável ou touca cirúrgica.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã com Botoeiras No-Touch por Infravermelho',
      reason: 'Asseguram travamento magnético silencioso sem atrito mecânico, sendo acionadas pela simples aproximação da mão a centímetros do sensor sem contato físico, mantendo as condições ideais de desinfecção e assepsia hospitalar permanente.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Crachás de Proximidade RFID Higienizáveis para Colaboradores',
      reason: 'Atuam como credenciais laváveis e higienizáveis com álcool 70% para funcionários de enfermagem e prestadores temporários, podendo ser lidos a curta distância por aproximação sem encostar no leitor de parede.'
    },
    {
      solutionSlug: 'catracas',
      title: 'Catracas Flap com Portas Deslizantes e Passagem Ampla para Macas',
      reason: 'Permitem controle elegante de fluxo na recepção principal e corredores de acesso a enfermarias, abrindo portões com vão de noventa centímetros para passagem suave de cadeirantes e macas hospitalares com comodidade.'
    },
    {
      solutionSlug: 'software-de-gestao',
      title: 'Software de Acesso com Níveis Hospitalares e Gestão de Alas',
      reason: 'Segmenta permissões por perfil assistencial e turno, registrando cada abertura na farmácia central ou almoxarifado em trilhas de auditoria criptografadas em conformidade com as diretrizes da Anvisa e comitês de segurança.'
    }
  ],
  projectArchitecture: [
    'Recepção Principal e Triagem de Pacientes: Implantação de catracas tipo flap ou balcão com portas motorizadas de vidro retrátil e vão especial para acessibilidade, integradas a leitor facial e dispensador de crachás higienizáveis para acompanhantes.',
    'Controle de Alas Críticas (UTI, Centro Cirúrgico e CME): Instalação de fechaduras eletromagnéticas estanques com suportes em inox, intertravamento de eclusas de paramentação e botoeiras no-touch com detecção por infravermelho de 5 a 15 cm de distância.',
    'Segurança e Rastreabilidade da Farmácia Central: Portas blindadas com fechadura eletromagnética de alta retenção (300kgf), leitor de dupla autenticação (cartão + biometria facial) e sensor com aviso sonoro para porta que permaneça aberta além do limite programado.',
    'Acessos Operacionais e Docas de Resíduos: Portões de circulação de resíduos infectantes e docas de suprimentos farmacêuticos protegidos por cancelas com acionamento por tag ou botoeira interna operada exclusivamente pela equipe de higienização.',
    'Rede Dedicada e Nobreak Hospitalar de Alta Confiabilidade: Infraestrutura de cabos blindados Cat6 certificados conectada a no-break online de dupla conversão com redundância, garantindo pleno funcionamento contínuo mesmo durante transições para os geradores a diesel da clínica.'
  ],
  faqs: [
    {
      question: 'Como fica a conformidade do hospital com a LGPD em relação aos dados de saúde?',
      answer: 'Os dados de saúde e as características biométricas são classificados pela LGPD como dados pessoais sensíveis. Nossas soluções não armazenam imagens fotográficas brutas nem dados de prontuário no sistema de acesso físico. As informações biométricas são codificadas em templates matemáticos criptografados de mão única, exclusivamente para identificação do acesso às dependências. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    },
    {
      question: 'O leitor facial funciona com médicos e enfermeiros utilizando máscara cirúrgica ou N95?',
      answer: 'Sim. Os algoritmos de reconhecimento facial de alta precisão que especificamos para a área médica utilizam mapeamento tridimensional da região dos olhos, sobrancelhas e testa, conseguindo validar o profissional de saúde mesmo com máscara cirúrgica, gorro ou protetor facial tipo face shield.'
    },
    {
      question: 'O que a Anvisa e o Corpo de Bombeiros exigem para portas de emergência em hospitais?',
      answer: 'As portas ao longo de rotas de fuga hospitalares não podem impedir a evacuação de pacientes acamados ou da equipe. Por isso, utilizamos fechaduras eletromagnéticas fail-safe integradas à central de alarme de incêndio e botoeiras de emergência que destravam o circuito elétrico instantaneamente ao serem pressionadas.'
    },
    {
      question: 'Como garantir que o sistema não sirva como vetor de transmissão de bactérias e vírus?',
      answer: 'Adotamos a diretriz touchless integral: leitores de reconhecimento facial para autenticação sem contato, botoeiras capacitivas ou ópticas acionadas por simples aproximação da mão a até 10 centímetros de distância e suportes laváveis com soluções hospitalares padronizadas.'
    },
    {
      question: 'Como é controlado o acesso de acompanhantes de pacientes internados?',
      answer: 'Na recepção de internação, o acompanhante recebe uma pulseira RFID descartável ou cartão de aproximação temporário vinculado estritamente ao leito do paciente e ao horário estabelecido para visitas médicas. Ao término do período ou na alta hospitalar, a credencial é invalidada no software.'
    }
  ],
  relatedSolutions: ['reconhecimento-facial', 'fechaduras-eletromagneticas', 'catracas', 'software-de-gestao'],
  relatedSegments: ['empresas-e-escritorios', 'condominios-comerciais'],
  whatsappContext: 'controle de acesso para clínica ou hospital em Curitiba'
};
