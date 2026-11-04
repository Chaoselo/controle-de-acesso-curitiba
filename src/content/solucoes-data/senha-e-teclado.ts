import { SolutionContent } from '../types';

export const senhaETecladoSolution: SolutionContent = {
  slug: 'senha-e-teclado',
  title: 'Controle de Acesso por Senha e Teclado em Curitiba',
  seoTitle: 'Controle de Acesso por Senha Curitiba | Teclados Digitais',
  metaDescription: 'Instalação de teclados de controle de acesso e senhas digitais em Curitiba e região. Agilidade para portas e áreas restritas. Peça seu orçamento técnico!',
  keyword: 'controle de acesso por senha',
  directAnswer: 'O controle de acesso por teclado numérico permite a liberação de portas e portões através da digitação de senhas eletrônicas personalizadas. Trata-se de uma alternativa funcional e acessível para portas de consultórios, depósitos e áreas técnicas, dispensando o porte constante de chaves físicas. O sistema pode operar de maneira autônoma ou conectado a controladoras em rede, gerando históricos de passagens conforme a configuração adotada.',
  image: {
    src: '/images/controle-senha-e-teclado.webp',
    alt: 'Dedo digitando senha em teclado touch instalado em porta de madeira',
    width: 1200,
    height: 675
  },
  howItWorks: [
    'Digitação na matriz numérica e leitura dos dígitos: O usuário pressiona as teclas de silicone, botões metálicos antivandalismo ou superfície capacitiva de vidro. A cada acionamento, a placa processa o dígito inserido e emite um retorno sonoro ou luminoso confirmando a recepção.',
    'Diferenciação entre senha individual e senha única coletiva: Com senhas individuais, cada usuário possui seu próprio código no sistema, permitindo saber quem exatamente destravou a porta. Com senha única compartilhada por todos, o sistema apenas registra a abertura, perdendo a rastreabilidade sobre a identidade de quem acessou.',
    'Temporização de segurança e bloqueio por tentativas sucessivas: Para conter adivinhações por força bruta, a controladora monitora erros sequenciais de digitação. Ao atingir um limite pré-definido (geralmente de 3 a 5 erros seguidos), o teclado bloqueia novas entradas temporariamente por alguns minutos.',
    'Recurso de senha de coação para emergências veladas: Em modelos que contam com essa função, é possível cadastrar um código para situações de perigo iminente. Ao digitar essa combinação sob coação, o equipamento abre a fechadura normalmente, mas envia silenciosamente um alerta à portaria ou à empresa de monitoramento.',
    'Acionamento de relé e integração multifatorial: Validada a combinação digitada, o microprocessador comuta seu relé para desenergizar a fechadura eletroímã ou emitir pulso para um fecho elétrico. Em setores críticos, o sistema pode exigir autenticação combinada de senha mais cartão RFID para liberar o vão.'
  ],
  whenToChoose: [
    'Salas confidenciais de infraestrutura de TI, racks de servidores e almoxarifados fabris onde colaboradores autorizados precisam entrar com agilidade sem carregar crachás.',
    'Consultórios médicos, clínicas de psicologia e salas de reunião corporativas que exigem controle de fluxo em portas internas com baixo custo inicial de implantação.',
    'Áreas comuns secundárias de condomínios residenciais em Curitiba, como salões de jogos, brinquedotecas e depósitos de materiais de limpeza.',
    'Acessos de contingência em entradas sociais para permitir a abertura por digitação de código caso um morador esqueça seu chaveiro ou cartão RFID.'
  ],
  advantages: [
    'Dispensa o porte de credenciais físicas: Os usuários autorizados não precisam carregar chaveiros, crachás plásticos ou chaves de latão que podem ser esquecidas ou perdidas fora do prédio.',
    'Alteração simples e rápida de combinações: Caso um funcionário seja desligado ou ocorra suspeita de vazamento de código, a senha pode ser redefinida rapidamente na própria placa ou pelo sistema.',
    'Baixo investimento em equipamentos: Teclados numéricos autônomos e escravos representam uma das opções de menor custo de hardware no segmento de segurança física.',
    'Dimensões compactas para esquadrias estreitas: Modelos de perfil estreito (slim) podem ser fixados diretamente sobre montantes de alumínio e batentes com espaço lateral limitado.',
    'Possibilidade de dupla autenticação: Teclados que integram leitor de cartão permitem elevar o padrão de proteção em áreas críticas, exigindo senha e crachá simultaneamente.'
  ],
  limitations: [
    'Compartilhamento indevido de códigos: Senhas são facilmente transferíveis por voz ou mensagem de texto, impossibilitando garantir que apenas o titular original esteja utilizando o código na portaria.',
    'Desgaste visual localizado de teclas mecânicas: Em teclados de borracha ou botões pintados com uso prolongado, os números da combinação sofrem desgaste da tinta, fornecendo pistas visuais a observadores.',
    'Tempo de digitação superior em relação a leitores touchless: Digitar de 4 a 6 dígitos exige parada física completa do usuário, gerando filas pontuais caso haja passagem simultânea de muitas pessoas.',
    'Sensibilidade a intempéries em modelos sem vedação IP: Teclados instalados em áreas externas abertas exigem grau de proteção adequado (como classificação IP65); caso contrário, a umidade curitibana pode oxidar os contatos internos.'
  ],
  integrations: [
    'Fechaduras eletromagnéticas eletroímã e fechos elétricos com molas aéreas de retorno suave.',
    'Botoeiras internas de saída tipo no-touch com acionamento por aproximação de mão sem toque.',
    'Centrais de alarme e sistemas de segurança perimetral integrados para recebimento de sinal de coação.',
    'Controladoras de acesso em rede com comunicação via barramento Wiegand ou conexões seriais.',
    'Fontes de alimentação ininterruptas com nobreak e baterias seladas para suporte durante quedas de luz.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Vistoria do ambiente e classificação climática',
      description: 'Avaliação técnica do vão da porta em Curitiba, verificando se o teclado ficará em área interna protegida ou externa, definindo a necessidade de modelos com vedação estanque IP65.'
    },
    {
      step: '02',
      title: 'Passagem de fiação em dutos embutidos',
      description: 'Lançamento de cabeamento de dados e alimentação elétrica dentro dos perfis da porta ou tubulações embutidas na alvenaria, protegendo os condutores contra cortes intencionais e desgastes mecânicos.'
    },
    {
      step: '03',
      title: 'Instalação mecânica na altura ergonômica',
      description: 'Fixação firme do teclado na parede ou batente a uma altura confortável de operação, instalando a fechadura correspondente e a botoeira interna para saída rápida desobstruída.'
    },
    {
      step: '04',
      title: 'Programação de códigos e limites de tentativas',
      description: 'Substituição das senhas de fábrica, registro das senhas individuais dos usuários autorizados, configuração do código de coação e ajuste do tempo de acionamento do relé.'
    },
    {
      step: '05',
      title: 'Testes de esforço e treinamento de boas práticas',
      description: 'Realização de testes funcionais com bloqueio simulado por erros contínuos de digitação e instrução dos usuários sobre a importância de manter as senhas pessoais sob sigilo.'
    }
  ],
  maintenanceAndSupport: [
    'Higienização regular da superfície das teclas para evitar acúmulo de gordura e sujeira que evidenciem os números mais pressionados.',
    'Verificação dos bips sonoros e retroiluminação dos números para assegurar facilidade de digitação durante o período noturno.',
    'Revisão da fixação mecânica da fechadura eletromagnética e reaperto de parafusos em suportes sujeitos a vibrações de fechamento.',
    'Aferição da tensão elétrica de saída da fonte de alimentação de 12V e teste do estado das baterias do nobreak sob carga.'
  ],
  faqs: [
    {
      question: 'Qual a diferença entre usar uma senha única para todos ou senhas individuais?',
      answer: 'Com uma senha única compartilhada, o condomínio reduz o trabalho de cadastro, mas perde totalmente a capacidade de saber quem abriu a porta em caso de incidentes. Já com senhas individuais vinculadas a cada morador ou colaborador em uma controladora, o sistema registra exatamente o nome do titular e o horário de cada passagem no histórico de eventos.'
    },
    {
      question: 'O teclado de acesso continua operando se houver corte de energia em Curitiba?',
      answer: 'Sim, desde que a instalação inclua uma fonte de alimentação com nobreak e bateria selada de 12V, o que é um padrão essencial nos projetos. Por consumirem pouca corrente, teclados e eletroímãs permanecem operando por horas com a carga da bateria durante interrupções na rede elétrica.'
    },
    {
      question: 'Como funciona na prática o recurso de senha de coação?',
      answer: 'A senha de coação é um código alternativo cadastrado para situações em que a pessoa é rendida e forçada a destravar o portão. Ao digitar esse código, a porta abre normalmente sem levantar suspeita no agressor, mas a controladora envia de forma oculta um alerta de emergência para a portaria ou equipe de monitoramento.'
    },
    {
      question: 'É possível descobrir a combinação de acesso olhando o desgaste dos botões?',
      answer: 'Em teclados com teclas mecânicas plásticas ou de borracha com uso intenso da mesma senha por longos períodos, as teclas mais digitadas podem sofrer desbotamento da tinta. Para contornar esse risco em locais de maior tráfego, recomendamos teclados com painel capacitivo em vidro touch temperado ou a combinação de senha com crachá.'
    },
    {
      question: 'Teclados numéricos podem ser instalados sob chuva e sol em Curitiba?',
      answer: 'Sim, desde que seja especificado um equipamento com índice de proteção apropriado, como certificação IP65 ou IP66, dotado de carcaça metálica selada e resina sobre os circuitos eletrônicos. Modelos sem proteção contra água devem ser restritos estritamente a ambientes internos protegidos de umidade.'
    }
  ],
  relatedSolutions: ['fechaduras-eletromagneticas', 'biometria', 'cartao-e-tag-rfid', 'reconhecimento-facial'],
  relatedSegments: ['empresas-e-escritorios', 'condominios-residenciais', 'clinicas-e-hospitais', 'residencias'],
  relatedCities: ['curitiba', 'pinhais', 'sao-jose-dos-pinhais', 'colombo'],
  whatsappContext: 'controle de acesso por senha e teclado'
};
