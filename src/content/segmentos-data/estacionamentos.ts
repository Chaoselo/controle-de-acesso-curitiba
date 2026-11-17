import { SegmentContent } from '../types';

export const estacionamentosSegment: SegmentContent = {
  slug: 'estacionamentos',
  title: 'Cancela e controle de acesso para estacionamento em Curitiba',
  seoTitle: 'Cancela para Estacionamento em Curitiba | Controle de Acesso',
  metaDescription: 'Cancela para estacionamento em Curitiba com tag, leitura de placa e controle de acesso. Projeto, instalação e manutenção. Peça orçamento pelo WhatsApp!',
  keyword: 'cancela para estacionamento em Curitiba',
  directAnswer: 'O controle de acesso para estacionamentos em Curitiba organiza pistas de entrada e saída com cancelas automáticas, tags veiculares UHF, leitura de placas (LPR), sensores de proteção e controle de acesso para pedestres. Projetamos, instalamos e prestamos manutenção corretiva e preventiva para estacionamentos comerciais, corporativos, hospitalares e condominiais após avaliação presencial. Para portão automático residencial, o atendimento fica no site da Intelsecsul.',
  // TODO: foto real
  image: {
    src: '/images/cancela-automatica.webp',
    alt: 'Cancela automática na entrada de um estacionamento',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Formação de filas na entrada em horários de pico por acionamento manual lento na guarita ou falta de credenciais automáticas para mensalistas.',
    'Entrada de veículos não autorizados aproveitando a subida da haste atrás de outro carro ou em áreas sem controle físico delimitado.',
    'Dificuldade para controlar mensalistas, convênios e colaboradores com bloqueio ágil quando um vínculo é encerrado.',
    'Desgaste acelerado de cancelas, molas quebradas, hastes entortadas por batidas e sensores desalinhados por falta de manutenção preventiva.',
    'Risco de conflito entre carros em manobra e pedestres que atravessam a pista por falta de sinalização visual ou acesso separado por catraca e porta controlada.',
    'Atenção à LGPD quando placas de veículos e registros fotográficos ficam armazenados em nome de mensalistas ou motoristas identificados.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'cancelas-e-acesso-veicular',
      title: 'Cancela Automática com Braço Adequado ao Vão',
      reason: 'Instalação de cancelas com haste linear para áreas abertas ou braço articulado para subsolos de teto baixo, sempre combinadas a laço indutivo de piso e fotocélula de segurança.'
    },
    {
      solutionSlug: 'tag-veicular',
      title: 'Tag Veicular UHF para Mensalistas e Frotas',
      reason: 'Permite liberar mensalistas, médicos, professores ou colaboradores cadastrados sem parada obrigatória na cabine, com bloqueio individual rápido em caso de inadimplência ou saída.'
    },
    {
      solutionSlug: 'catracas',
      title: 'Acesso Controlado de Pedestres por Catraca ou Porta',
      reason: 'Separa o fluxo de pessoas que entram a pé ou retornam ao estacionamento após validar acesso, evitando circulação indevida pelas pistas de veículos.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Cartões RFID, Controle Rolling Code e Botoeiras de Apoio',
      reason: 'Opções complementares para operação assistida na guarita, motoristas eventuais ou veículos cuja película metálica bloqueie leitura UHF no para-brisa.'
    }
  ],
  projectArchitecture: [
    'Etapa 01 — Levantamento de pistas e fluxos: Medimos largura e altura útil de entrada e saída, raios de curva, posição da guarita, separação de pedestres e condições de visibilidade para leitura de placas ou tags antes de elaborar o orçamento após o diagnóstico.',
    'Etapa 02 — Infraestrutura civil, laço indutivo e energia: Planejamos as bases firmes para os gabinetes das cancelas, corte e selagem do piso para o laço indutivo magnético, passagens de dutos para fotocélulas, semáforos e ponto elétrico com proteção contra surtos e nobreak.',
    'Etapa 03 — Montagem das cancelas, sensores e contingência: Instalamos as cancelas com haste reta ou articulada, calibramos molas de balanceamento e configuramos a operação de nobreak (quando previsto no projeto) além do destravamento mecânico manual para manter a pista operacional ou liberada em faltas prolongadas de energia.',
    'Etapa 04 — Identificação veicular e compatibilidade de cobrança: Integramos antenas UHF para tag veicular, controle remoto de código rolante (rolling code) ou câmeras de leitura de placa (LPR), considerando que câmeras LPR sofrem influência de chuva intensa, neblina, placas danificadas e faróis. Para estacionamento com cobrança é preciso verificar a compatibilidade com o sistema de cobrança já usado.',
    'Etapa 05 — Sinalização viária, testes e manutenção contínua: Validamos o bloqueio de descida sobre veículos pelo laço indutivo e fotocélula, conferimos sinaleiros sonoros/visuais, testamos a rota de pedestres, orientamos os operadores sobre manutenção preventiva (limpeza de sensores, reaperto, molas e baterias) e reforçamos os cuidados da LGPD quando placas e cadastros identificam motoristas ou mensalistas.'
  ],
  faqs: [
    {
      question: 'Qual cancela é ideal para estacionamento?',
      answer: 'A escolha depende diretamente da largura da pista, da altura do teto (subsolos exigem haste articulada enquanto pátios externos usam haste reta), do volume diário de ciclos nos horários de pico e da exposição ao clima. Em locais de movimento intenso, dimensiona-se o equipamento para suportar ciclos frequentes com balanceamento correto de molas e proteção elétrica, definição sempre confirmada após diagnóstico técnico.'
    },
    {
      question: 'Um estacionamento com cancela precisa de laço indutivo?',
      answer: 'É altamente recomendável combinar laço indutivo embutido no piso com fotocélula lateral. Enquanto a fotocélula detecta obstrução em uma linha específica de feixe, o laço indutivo reconhece a massa metálica do veículo sob a área da haste, reduzindo muito o risco de a cancela descer sobre o teto ou capô durante uma passagem lenta ou parada na fila, além de poder acionar o fechamento automático logo após o carro cruzar a via.'
    },
    {
      question: 'Quanto custa instalar cancela e controle de acesso em estacionamento?',
      answer: 'O investimento varia conforme múltiplos fatores do projeto: número de vias (entrada e saída separadas ou pista única reversível), largura dos vãos, tipo de braço (reto ou articulado), forma de identificação (tag UHF, leitura de placa, controle de código rolante ou botoeira), inclusão de sensores (laço indutivo e fotocélula), necessidade de obra civil, corte de piso e inclusão de nobreak. O orçamento completo é fechado somente após a vistoria no local.'
    },
    {
      question: 'Dá para integrar a cancela com leitura de placa (LPR) ou software de cobrança?',
      answer: 'Depende dos equipamentos e da plataforma envolvidos. Câmeras LPR podem atuar em conjunto com tags UHF para facilitar a identificação ou dupla conferência, tendo em mente limitações ambientais como chuva forte, sujeira na placa, amassados ou reflexo de faróis. Além disso, para estacionamento com cobrança é preciso verificar a compatibilidade com o sistema de cobrança já usado antes de fechar qualquer aquisição. Quando houver armazenamento de placas vinculadas a pessoas físicas identificadas (mensalistas ou moradores), aplicam-se os cuidados da LGPD (finalidade clara, acesso restrito e política de exclusão). Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    },
    {
      question: 'Vocês fazem manutenção de cancela de estacionamento já instalada? E portão residencial?',
      answer: 'Sim, atendemos manutenção corretiva e preventiva de cancelas, substituição de hastes danificadas, regulagem de molas, revisão de centrais, laços indutivos, fotocélulas e antenas de tag veicular em estacionamentos de Curitiba e Região Metropolitana. Importante: portão automático residencial fica no site da Intelsecsul (intelsecsul.com.br/servicos/portao-automatico/).'
    }
  ],
  relatedSolutions: ['cancelas-e-acesso-veicular', 'tag-veicular', 'catracas', 'cartao-e-tag-rfid'],
  relatedSegments: ['condominios-comerciais', 'empresas-e-escritorios', 'condominios-residenciais', 'industrias'],
  whatsappContext: 'cancela para estacionamento'
};
