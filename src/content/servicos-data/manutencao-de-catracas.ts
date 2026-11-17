import { ServiceContent } from '../types';

export const manutencaoDeCatracasService: ServiceContent = {
  slug: 'manutencao-de-catracas',
  title: 'Manutenção de catraca em Curitiba',
  seoTitle: 'Manutenção de Catraca em Curitiba | Conserto e Revisão',
  metaDescription: 'Manutenção de catraca de acesso em Curitiba: conserto, revisão preventiva e troca de peças. Atendimento técnico. Peça orçamento pelo WhatsApp!',
  keyword: 'manutenção de catraca em Curitiba',
  directAnswer: 'Realizamos manutenção preventiva, revisão técnica e conserto de catracas de acesso em Curitiba e Região Metropolitana para empresas, academias, condomínios comerciais, escolas e indústrias. Atendemos catracas de marcas e modelos variados, mediante avaliação técnica, incluindo substituição de peças conforme disponibilidade, ajustes mecânicos, verificação de leitores acoplados e orientação para evitar novas paradas.',
  // TODO: foto real
  image: {
    src: '/images/catraca-de-acesso.webp',
    alt: 'Catracas de acesso em uma recepção',
    width: 1200,
    height: 675
  },
  scope: [
    'Atendimento técnico corretivo e preventivo: atendemos catracas de marcas e modelos variados, mediante avaliação técnica presencial, com foco em modelos pedestal, balcão, flap e torniquetes de recepção ou portaria.',
    'Checklist completo de revisão preventiva: lubrificação adequada do conjunto interno com produto indicado pelo mecanismo, limpeza e alinhamento dos sensores ópticos de passagem e contagem, conferência da fixação da base no piso e dos parafusos estruturais.',
    'Verificação de segurança, energia e rede: teste funcional do modo de emergência e braço antipânico (quando aplicável), medição elétrica da fonte e teste sob carga das baterias do nobreak, além da revisão de cabos de alimentação, comunicação e conectores.',
    'Fornecimento e troca de peças conforme disponibilidade de mercado e do fabricante: solenoides de travamento, molas de retorno, amortecedores hidráulicos, microchaves, correias em modelos flap, placas controladoras e leitores acoplados.',
    'O que fazer enquanto o técnico não chega: não forçar os braços manualmente nem tentar abrir ou desmontar o gabinete ligado; verificar com segurança se o disjuntor ou cabo de alimentação externo está conectado e sinalizar a catraca inoperante mantendo a portinhola acessível ou passagem alternativa devidamente orientada para evitar acidentes.',
    'Quando a catraca inclui leitores biométricos ou de reconhecimento facial para alunos, colaboradores ou visitantes, orientamos também sobre boas práticas de preservação das configurações e respeito aos cuidados de acesso restrito aos cadastros conforme a LGPD.'
  ],
  diagnosticCommonIssues: [
    {
      symptom: 'Catraca não gira ou está travada sem liberar passagem',
      cause: 'Solenoide queimado ou travado por sujeira acumulada, mola de retorno quebrada no mecanismo interno, fusível aberto ou queda do sistema antipânico bloqueando o eixo.',
      fix: 'Desmontagem controlada do miolo mecânico, limpeza técnica, inspeção elétrica das bobinas do solenoide e troca de mola ou solenoide compatível conforme disponibilidade de peças.'
    },
    {
      symptom: 'Leitor valida o usuário, mas a catraca não libera a passagem',
      cause: 'Falha no comando entre o leitor e a placa controladora, relé de acionamento oxidado, cabo de sinal partido dentro da coluna ou inversão de sentido configurado.',
      fix: 'Teste de pulso na saída do leitor até a controladora, revisão das conexões internas de chicote, conferência da parametrização de sentidos e reparo ou troca do módulo defeituoso.'
    },
    {
      symptom: 'Braço da catraca gira livre sem autorização ou sem exigir leitura',
      cause: 'Trava eletromecânica desgastada, lingueta fora de curso, mola frouxa sem retorno para a posição de trava ou travamento permanente em modo de emergência na placa.',
      fix: 'Inspeção do conjunto mecânico de engate, substituição de molas ou batentes gastos e verificação do estado do sinal de emergência ou alarme conectado à placa.'
    },
    {
      symptom: 'Braço solto, com folga excessiva ou fazendo ruído forte ao girar',
      cause: 'Parafusos de fixação do cabeçote ou cubo frouxos, rolamentos ressecados sem lubrificação, desgaste em buchas ou amortecedor hidráulico vazando óleo.',
      fix: 'Reaperto estrutural completo com trava química quando adequado, lubrificação técnica correta, substituição de buchas e revisão ou troca do amortecedor de giro.'
    },
    {
      symptom: 'Leitor acoplado na catraca não lê digital, rosto ou cartão RFID',
      cause: 'Acúmulo de poeira ou gordura na janela óptica/câmera, queda de tensão na fonte compartilhada, dano por descarga elétrica ou falha na antena RFID do topo.',
      fix: 'Higienização com produto seguro para lentes, medição da tensão sob demanda nos terminais e substituição ou reparo do módulo leitor após diagnóstico.'
    },
    {
      symptom: 'Sensor de passagem sujo gerando contagem errada ou travando antes da hora',
      cause: 'Poeira nos emissores e receptores ópticos internos, disco codificador sujo ou desalinhado por vibração após impactos nos braços.',
      fix: 'Limpeza cuidadosa dos sensores ópticos, realinhamento do disco de leitura de posição e testes consecutivos nos dois sentidos de giro.'
    },
    {
      symptom: 'Equipamento desligado por falta de energia ou nobreak descarregado',
      cause: 'Disjuntor desarmado, fonte interna queimada por pico de rede ou baterias do nobreak no fim da vida útil que não sustentam o consumo durante oscilações.',
      fix: 'Medição da rede elétrica de entrada, teste da fonte sob carga e substituição preventiva das baterias auxiliares ou da fonte danificada.'
    },
    {
      symptom: 'Trava eletromecânica (solenoide) aquecendo ou falhando de forma intermitente',
      cause: 'Alinhamento incorreto da lingueta fazendo o solenoide trabalhar sob esforço mecânico constante, tensão incorreta na alimentação ou desgaste do enrolamento da bobina.',
      fix: 'Regulagem fina do curso mecânico para evitar atrito no recuo, conferência da tensão aplicada pela placa e substituição preventiva do conjunto de trava.'
    },
    {
      symptom: 'Falha de comunicação da catraca com a controladora ou rede local',
      cause: 'Cabo de rede ou serial rompido no piso, conector RJ45/RS-485 oxidado por limpeza úmida de piso, mudança de faixa de IP na rede da empresa ou travamento da interface.',
      fix: 'Certificação simples de continuidade e ponto de rede, refazimento de conectores protegidos contra umidade e reconfiguração de endereço IP ou porta na controladora.'
    },
    {
      symptom: 'Perda de configuração, regras de horário ou cadastros na memória',
      cause: 'Bateria interna de retenção da placa controladora esgotada, corrupção de memória por desligamentos bruscos repetidos ou reset involuntário por oscilação elétrica.',
      fix: 'Verificação e troca da célula de memória da placa quando aplicável, restauração do backup de parâmetros do cliente e recomendação de proteção com nobreak.'
    }
  ],
  processSteps: [
    {
      step: '01',
      title: 'Triagem rápida pelo WhatsApp com foto ou vídeo',
      description: 'Você relata o comportamento da catraca e envia foto ou vídeo curto do defeito e da etiqueta ou modelo pelo WhatsApp (41) 99844-8409. Orientamos imediatamente cuidados básicos seguros enquanto organizamos o atendimento, definindo o diagnóstico e o orçamento após avaliação presencial.'
    },
    {
      step: '02',
      title: 'Orientação segura enquanto o técnico não chega',
      description: 'Indicamos não forçar o braço bloqueado nem desligar cabos internos, apenas conferir a alimentação externa e sinalizar o equipamento direcionando o fluxo pela portinhola acessível ou passagem assistida.'
    },
    {
      step: '03',
      title: 'Visita técnica para diagnóstico em campo',
      description: 'Quando necessário, nossa equipe técnica própria vai até a empresa, academia, escola ou condomínio em Curitiba e RMC para abrir a tampa de inspeção, medir tensões e inspecionar mecânica e sensores.'
    },
    {
      step: '04',
      title: 'Orçamento detalhado após o diagnóstico',
      description: 'Identificada a falha e verificada a disponibilidade de eventuais peças de reposição, apresentamos o orçamento discriminando mão de obra e componentes antes de executar a troca.'
    },
    {
      step: '05',
      title: 'Conserto, checklist preventivo e entrega em funcionamento',
      description: 'Executamos o reparo ou a revisão preventiva completa (lubrificação, sensores, fixação, modo de emergência, nobreak e cabos), testamos passagens reais nos dois sentidos e orientamos a recepção sobre boas práticas de conservação.'
    }
  ],
  faqs: [
    {
      question: 'Quanto custa a manutenção de catraca em Curitiba?',
      answer: 'O valor do serviço varia de acordo com vários fatores: tipo de catraca (pedestal, balcão, flap ou torniquete), origem da falha (ajuste mecânico, revisão preventiva, troca de solenoide, placa ou leitor), necessidade de substituição de peças específicas, quantidade de equipamentos no local e deslocamento em Curitiba ou Região Metropolitana. Por isso, o orçamento é definido apenas após o diagnóstico técnico.'
    },
    {
      question: 'Vocês consertam catraca de qualquer marca?',
      answer: 'Atendemos catracas de marcas e modelos variados, mediante avaliação técnica prévia, incluindo equipamentos bastante presentes em academias, escolas, empresas e condomínios comerciais (inclusive atuando de forma independente em marcas conhecidas como Intelbras e outros fabricantes, sem ser assistência técnica autorizada — Intelbras é marca de seus respectivos titulares. A Intelsecsul é uma empresa independente e não é revendedora autorizada da marca). A viabilidade do conserto depende do estado geral e da disponibilidade de peças no mercado.'
    },
    {
      question: 'A catraca travou agora, o que fazer enquanto o técnico não chega?',
      answer: 'Evite forçar os braços ou empurrar a estrutura com força, pois isso pode entortar eixos e agravar o defeito na trava interna. Confira apenas se há energia elétrica no ponto e se ninguém acionou acidentalmente o botão de emergência. Se a catraca não puder ficar liberada com segurança, isole ou sinalize o equipamento e utilize temporariamente a portinhola acessível lateral ou controle manual na recepção até a chegada da equipe.'
    },
    {
      question: 'Com que frequência devo fazer a manutenção preventiva da catraca?',
      answer: 'A periodicidade recomendada depende do volume diário de giros, das condições do ambiente (exposição a poeira ou limpeza úmida no piso) e das instruções do fabricante do equipamento. Em academias, escolas e recepções corporativas de fluxo intenso, revisões periódicas programadas ajudam a identificar desgaste de molas, sujeira em sensores e baterias fracas antes que ocorra parada inesperada.'
    },
    {
      question: 'Vocês fazem manutenção de catraca em academia, escola e condomínio comercial?',
      answer: 'Sim. Atendemos academias, estúdios, escolas, faculdades, edifícios comerciais, clínicas e portarias industriais em Curitiba e na Região Metropolitana. Quando a catraca conta com leitores biométricos ou reconhecimento facial integrados, recomendamos também manter backups atualizados e controle restrito de operadores conforme os cuidados da LGPD (Lei nº 13.709/2018). Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'biometria'],
  relatedServices: ['manutencao', 'instalacao-e-projeto', 'locacao'],
  whatsappContext: 'manutenção de catraca'
};
