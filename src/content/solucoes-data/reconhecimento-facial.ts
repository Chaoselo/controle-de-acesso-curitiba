import { SolutionContent } from '../types';

export const reconhecimentoFacialSolution: SolutionContent = {
  slug: 'reconhecimento-facial',
  title: 'Controle de Acesso Facial em Curitiba',
  seoTitle: 'Controle de Acesso Facial em Curitiba | Terminal Touchless',
  metaDescription: 'Instalação de reconhecimento facial para condomínios e empresas em Curitiba e RMC. Terminais touchless com suporte local. Solicite seu orçamento técnico!',
  keyword: 'controle de acesso facial Curitiba',
  directAnswer: 'O controle de acesso por reconhecimento facial identifica a geometria do rosto de pedestres para autorizar a passagem sem contato mecânico com o equipamento. Essa tecnologia é bastante procurada por condomínios e edifícios comerciais que buscam agilidade na portaria social e redução do manuseio de crachás ou chaves físicas. O sistema compara a leitura atual com modelos matemáticos previamente cadastrados, mantendo registros de auditoria em conformidade com as rotinas de segurança local.',
  image: {
    src: '/images/controle-acesso-facial.webp',
    alt: 'Terminal de reconhecimento facial instalado em porta de vidro, com pessoa diante da câmera',
    width: 1200,
    height: 675
  },
  howItWorks: [
    'Detecção e captura por sensores ópticos duplos: Ao se aproximar, o usuário entra no campo de visão das lentes. A maioria dos modelos corporativos conta com câmera visível e sensor infravermelho, capturando traços faciais mesmo no escuro.',
    'Verificação de autenticidade e prova de vida: Para evitar acessos com fotos ou vídeos, o terminal executa a rotina de liveness. Esse recurso varia conforme o fabricante, analisando reflexos da pupila, calor ou textura tridimensional.',
    'Geração do template biométrico vetorial: O processador analisa as distâncias entre marcos anatômicos da face. Em vez de salvar a foto crua, o leitor transforma essas medidas em um vetor numérico criptografado, conforme a tecnologia do fabricante.',
    'Comparação em memória local offline: O terminal compara o template gerado com o banco gravado em sua memória flash. Em geral, opera com autonomia offline, validando permissões sem depender de conexão permanente com servidores externos.',
    'Comutação de contato seco e liberação física: Após a validação positiva, o relé aciona o destravamento da fechadura eletroímã ou libera a catraca. O evento contendo identificador, porta e horário é armazenado em buffer local.'
  ],
  whenToChoose: [
    'Portarias sociais de condomínios residenciais em Curitiba onde o fluxo de moradores com mãos ocupadas por sacolas exige liberação rápida sem contato físico.',
    'Recepções corporativas e edifícios comerciais que demandam eliminação do custo recorrente de reposição de cartões plásticos e perda de chaveiros de proximidade.',
    'Clínicas de saúde, laboratórios e consultórios odontológicos que priorizam protocolos de assepsia e evitam superfícies de toque compartilhado entre pacientes.',
    'Empreendimentos que operam com portaria remota ou mista e necessitam de conferência fotográfica auxiliar e auditoria visual dos acessos de pedestres.'
  ],
  advantages: [
    'Passagem totalmente sem contato físico: O pedestre não toca em teclados ou leitores, o que reduz o desgaste mecânico e assegura comodidade superior durante o acesso diário.',
    'Operação autônoma mesmo com oscilações de conexão: Como o banco de templates reside na placa do leitor, o destravamento não é interrompido caso a internet predial sofra instabilidades.',
    'Identificação que dispensa itens físicos: O usuário não corre o risco de esquecer crachás, perder chaveiros RFID ou sofrer com o desgaste de chaves convencionais.',
    'Leitura eficaz em períodos noturnos: Graças à iluminação por feixes de infravermelho integrado, o equipamento mantém a capacidade de identificação precisa sem demandar holofotes fortes.',
    'Rastreabilidade individual de passagens: Cada acionamento de abertura gera um registro nominativo em buffer, permitindo emissão de relatórios com data, hora e ponto de acesso.'
  ],
  limitations: [
    'Sensibilidade crítica a fontes de contraluz: A incidência direta de luz solar intensa atrás do usuário atrapalha a leitura mais intensamente do que a escuridão, exigindo toldos ou correta orientação física.',
    'Ocorrência de falsas rejeições ou aceitações: Nenhum sistema biométrico é infalível; índices de falsa rejeição (FRR) podem bloquear momentaneamente usuários com adereços pesados, exigindo calibração equilibrada.',
    'Custo inicial de equipamento mais elevado: Por incorporar processamento embarcado, lentes especiais e algoritmos neurais, o valor de aquisição supera o de teclados e leitores de cartão.',
    'Exigência de infraestrutura elétrica estabilizada: Oscilações bruscas de tensão podem reiniciar o sistema; por isso, a presença de fonte ininterrupta com nobreak dedicado é imprescindível.'
  ],
  lgpdNote: 'A geometria facial constitui dado biométrico pessoal sensível nos termos do Artigo 5º, inciso II da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Em nossas implantações, orientamos a configuração dos terminais para armazenamento exclusivo de templates matemáticos criptografados em vez de fotos abertas no banco comum. O controlador do condomínio ou da empresa deve formalizar a base legal correspondente, garantir a transparência do tratamento e estabelecer procedimentos seguros de exclusão após o encerramento do vínculo do titular. Este texto é informativo e não substitui a orientação de um profissional jurídico.',
  integrations: [
    'Fechaduras eletromagnéticas eletroímã com suportes especiais de ancoragem para portas de vidro ou madeira.',
    'Catracas balcão, flap e pedestais com suportes articulados ou totens verticais em aço inoxidável.',
    'Portarias remotas e sistemas de interfonia IP via protocolos de rede locais ou conexões dedicadas.',
    'Botoeiras no-touch de saída infravermelha para garantir rota de saída igualmente livre de toque.',
    'Softwares de controle de acesso para sincronização de cadastros e envio de permissões de visitantes.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Vistoria de insolação e posicionamento em Curitiba',
      description: 'Análise técnica presencial do ângulo solar ao longo do dia no vão da portaria, avaliando reflexos em fachadas de vidro para evitar contraluz direta nas lentes ópticas do equipamento.'
    },
    {
      step: '02',
      title: 'Infraestrutura de cabeamento e duto protegido',
      description: 'Lançamento de cabeamento de rede trançado categoria 6 em cobre puro e linhas de alimentação dedicadas, protegendo a fiação contra intempéries e vandalismo por canaletas ou eletrodutos embutidos.'
    },
    {
      step: '03',
      title: 'Fixação mecânica e alinhamento do eletroímã',
      description: 'Instalação do suporte do terminal facial na altura ergonômica recomendada e fixação milimétrica do eletroímã na folha da porta, regulando molas hidráulicas para fechamento suave sem impactos.'
    },
    {
      step: '04',
      title: 'Parametrização de rede e calibração de vivacidade',
      description: 'Configuração dos parâmetros de IP, ajuste dos limiares de tolerância biométrica do algoritmo liveness e teste das saídas de comando do relé para abertura segura da porta.'
    },
    {
      step: '05',
      title: 'Cadastramento assistido e testes práticos',
      description: 'Acompanhamento da captura dos primeiros templates de moradores ou colaboradores, prestando orientações sobre posicionamento natural, postura e procedimentos em casos de contingência operacional no condomínio.'
    }
  ],
  maintenanceAndSupport: [
    'Limpeza periódica especializada dos vidros das câmeras e sensores infravermelhos com produtos neutros para preservar o índice de transparência óptica.',
    'Revisão dos cabos de dados, reaperto de conexões em bornes e verificação da firmeza mecânica de pedestais sujeitos a trepidações.',
    'Teste de capacidade e autonomia da bateria do nobreak para assegurar funcionamento contínuo durante quedas da rede elétrica pública.',
    'Atualização de pacotes de firmware emitidos pelo fabricante para refinamento de algoritmos e aplicação de correções de segurança cibernética.'
  ],
  faqs: [
    {
      question: 'O leitor facial continua abrindo a porta se a internet predial cair em Curitiba?',
      answer: 'Sim, na grande maioria dos modelos comerciais o acesso de usuários cadastrados continua ocorrendo com total normalidade. O banco de dados com os templates matemáticos fica armazenado na memória interna do próprio terminal, que toma a decisão de abertura de forma autônoma sem depender de servidores em nuvem.'
    },
    {
      question: 'O terminal de reconhecimento facial pode ser enganado com uma foto no celular?',
      answer: 'A eficiência contra fraudes depende do nível do algoritmo de liveness integrado ao modelo instalado. Equipamentos corporativos modernos contam com sensores infravermelhos e algoritmos que avaliam profundidade tridimensional e características da pele, o que dificulta expressivamente tentativas simples de burla com impressões em papel ou fotografias digitais.'
    },
    {
      question: 'A incidência de sol ou escuridão prejudica a leitura do rosto do morador?',
      answer: 'A falta de luz geralmente não é problema, pois os terminais contam com iluminação própria por infravermelho. No entanto, o excesso de claridade e a contraluz solar direta no fundo da pessoa afetam fortemente as câmeras, demandando a instalação em posições abrigadas ou o uso de coberturas protetoras.'
    },
    {
      question: 'A imagem fotográfica do meu rosto fica guardada na memória do equipamento?',
      answer: 'Conforme a tecnologia do fabricante, a maioria dos sistemas corporativos extrai apenas coordenadas geométricas convertidas em vetores matemáticos criptografados, descartando a foto crua. Isso impede que a imagem visual do rosto seja reproduzida caso a memória seja indevidamente consultada por terceiros.'
    },
    {
      question: 'O leitor facial funciona com óculos de grau, barba ou maquiagem do usuário?',
      answer: 'Em geral, alterações cosméticas rotineiras como uso de óculos transparentes de grau, maquiagem habitual ou mudanças na barba não impedem o reconhecimento. Apenas adereços que ocultem áreas essenciais da face, como óculos escuros com lentes espelhadas ou bonés muito rebaixados, podem exigir remoção pontual para liberação.'
    }
  ],
  relatedSolutions: ['biometria', 'catracas', 'fechaduras-eletromagneticas', 'cartao-e-tag-rfid'],
  relatedSegments: ['condominios-residenciais', 'condominios-comerciais', 'clinicas-e-hospitais', 'academias'],
  relatedCities: ['curitiba', 'pinhais', 'sao-jose-dos-pinhais', 'araucaria'],
  whatsappContext: 'controle de acesso por reconhecimento facial'
};
