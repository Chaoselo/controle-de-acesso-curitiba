import { SolutionContent } from '../types';

export const reconhecimentoFacialSolution: SolutionContent = {
  slug: 'reconhecimento-facial',
  title: 'Reconhecimento facial para controle de acesso em Curitiba',
  seoTitle: 'Reconhecimento Facial em Curitiba | Controle de Acesso',
  metaDescription: 'Sistema de reconhecimento facial para controle de acesso em Curitiba: terminais para portas, catracas e cancelas. Instalação e suporte. Peça orçamento!',
  keyword: 'sistema de reconhecimento facial em Curitiba',
  directAnswer: 'Um sistema de reconhecimento facial para controle de acesso identifica traços geométricos do rosto para liberar portas, portões e catracas sem contato físico com o equipamento. Em Curitiba e Região Metropolitana, é adotado em condomínios, empresas, clínicas, escolas e academias que buscam agilidade, praticidade e redução do uso de chaves e crachás, observando os cuidados previstos na LGPD.',
  image: {
    src: '/images/controle-acesso-facial.webp',
    alt: 'Terminal de reconhecimento facial instalado em porta de vidro, com pessoa diante da câmera',
    width: 1200,
    height: 675
  },
  howItWorks: [
    'Detecção por câmeras e sensores infravermelhos: Ao se aproximar do terminal, o usuário entra no campo de leitura. Em geral, os modelos comerciais combinam câmera de luz visível e sensor infravermelho para auxiliar na leitura em ambientes com pouca iluminação.',
    'Verificação de detecção de vivacidade (liveness): Conforme o modelo e o fabricante, o terminal utiliza recursos para distinguir um rosto real de tentativas simples com fotografias impressas ou telas de celular.',
    'Extração de características faciais em template: Na maioria dos equipamentos, o rosto é convertido em um modelo matemático (template) em vez de depender de fotos abertas para validação, variando conforme a tecnologia do fabricante.',
    'Validação em memória local: Em geral, a comparação ocorre diretamente no banco armazenado na memória do próprio terminal, permitindo operação local mesmo quando há oscilação na internet externa.',
    'Acionamento do bloqueio e registro: Confirmada a autorização, o equipamento aciona o relé da fechadura eletromagnética (inclusive em portas de vidro) ou libera a catraca, registrando o evento.'
  ],
  whenToChoose: [
    'Portarias de condomínios residenciais e comerciais em Curitiba onde a passagem sem contato agiliza a entrada de moradores e condôminos.',
    'Empresas, indústrias e escritórios que desejam reduzir custos recorrentes com emissão e reposição de crachás físicos extraviados.',
    'Clínicas, laboratórios e estabelecimentos de saúde que priorizam circulação sem toque em teclados ou leitores biométricos.',
    'Academias e escolas que buscam fluxo organizado em catracas nos horários de entrada e saída.'
  ],
  advantages: [
    'Passagem sem contato físico: O usuário não precisa encostar o dedo nem digitar códigos em superfícies compartilhadas.',
    'Operação local independente da nuvem: Na maioria dos equipamentos comerciais, os cadastros ficam salvos localmente, mantendo a abertura das portas em quedas momentâneas de internet.',
    'Dispensa porte de chaves ou crachás: Reduz problemas cotidianos com esquecimento, perda ou empréstimo de cartões físicos.',
    'Leitura em baixa luminosidade: Com o auxílio de iluminação infravermelha integrada nos modelos compatíveis, funciona também à noite ou em halls pouco iluminados.',
    'Registro de acessos: Armazena histórico de liberações com data, hora e ponto de passagem para gestão do local.'
  ],
  limitations: [
    'Sensibilidade a contraluz solar intensa: Sol direto atrás da pessoa pode dificultar a captura pela câmera, exigindo escolha cuidadosa da posição ou uso de cobertura protetora.',
    'Ocorrência eventual de falsa rejeição: Acessórios que cubram parte expressiva do rosto (como óculos escuros espelhados ou bonés baixos) podem exigir nova tentativa ou ajuste de posição.',
    'Investimento inicial superior ao de teclados ou RFID: Por envolver câmeras, sensores e processamento embarcado, o custo do terminal costuma ser mais elevado.',
    'Necessidade de alimentação elétrica estável: Em instalações com fechaduras eletroímã (fail-safe), requer fonte carregadora e nobreak dimensionados para evitar destravamentos em faltas de energia.'
  ],
  lgpdNote: 'O reconhecimento facial envolve tratamento de dado pessoal sensível nos termos do Artigo 5º, inciso II da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). A conformidade depende de como a empresa ou condomínio trata esses dados: finalidade clara, informação transparente aos titulares, acesso restrito aos cadastros, disponibilização de credencial alternativa (como cartão RFID) e descarte após o término do vínculo. Este texto é informativo e não substitui a orientação de um profissional jurídico.',
  integrations: [
    'Fechaduras eletromagnéticas (eletroímã) em portas de vidro temperado, madeira ou metal.',
    'Catracas pedestal, balcão e flap em recepções comerciais, escolas e academias.',
    'Sistemas de portaria remota ou interfonia IP compatíveis conforme o modelo.',
    'Botoeiras de saída sem toque (no-touch) e botões de emergência para rota de fuga.',
    'Fontes carregadoras com baterias auxiliares e nobreaks.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Vistoria de Posicionamento e Iluminação em Curitiba',
      description: 'Avaliamos presencialmente a incidência solar no vão, os reflexos em portas de vidro, a altura ergonômica de leitura e as condições da infraestrutura elétrica antes do orçamento.'
    },
    {
      step: '02',
      title: 'Infraestrutura de Rede e Alimentação',
      description: 'Lançamos o cabeamento de rede e energia em dutos ou canaletas protegidas, dimensionado conforme a distância entre o ponto de acesso e a central.'
    },
    {
      step: '03',
      title: 'Fixação de Terminal, Fechadura e Mola Aérea',
      description: 'Instalamos o terminal facial em parede, batente ou pedestal, alinhando o eletroímã com o suporte adequado (inclusive para portas de vidro) e regulando a mola aérea.'
    },
    {
      step: '04',
      title: 'Configuração de Regras e Testes',
      description: 'Parametrizamos rede, regras de horários, tempo de abertura do relé e testes práticos de leitura e rota de emergência.'
    },
    {
      step: '05',
      title: 'Cadastramento Inicial e Treinamento',
      description: 'Apoiamos os primeiros cadastros e orientamos porteiros e gestores sobre boas práticas de uso, limpeza da lente e cuidados de privacidade conforme a LGPD.'
    }
  ],
  maintenanceAndSupport: [
    'Limpeza cuidadosa das lentes ópticas e sensores infravermelhos com produto neutro adequado.',
    'Conferência do aperto de suportes, pedestais e conexões de cabeamento.',
    'Verificação periódica das baterias auxiliares do nobreak e da tensão de alimentação.',
    'Atualização de firmware e suporte técnico presencial em Curitiba e Região Metropolitana.'
  ],
  faqs: [
    {
      question: 'O que é um sistema de reconhecimento facial para controle de acesso?',
      answer: 'É um sistema formado por terminal com câmera visível, sensor infravermelho e controladora embarcada que compara o rosto apresentado na entrada com os cadastros autorizados, acionando fechaduras, portões ou catracas sem necessidade de chaves ou toque.'
    },
    {
      question: 'O sistema de reconhecimento facial é seguro contra fotos e vídeos?',
      answer: 'O nível de segurança depende do modelo e da tecnologia embarcada. Terminais com câmera dupla e recurso de prova de vida (liveness) analisam profundidade e resposta infravermelha para dificultar tentativas com fotos impressas ou telas de celular, embora nenhum equipamento dispense a avaliação do risco e da instalação física do local.'
    },
    {
      question: 'Posso usar reconhecimento facial em catraca e cancela?',
      answer: 'Sim em catracas de recepção e portarias de pedestres, onde o usuário para ou se aproxima diretamente diante do terminal. Em cancelas veiculares também pode ser utilizado por meio de totens posicionados ao lado do motorista, dependendo da altura do veículo e das condições de chuva e iluminação — em muitas pistas veiculares, a tag veicular UHF costuma oferecer leitura mais fluida sem precisar alinhar a janela.'
    },
    {
      question: 'O leitor facial continua funcionando se a internet cair?',
      answer: 'Em geral, sim. Na maioria dos modelos comerciais, o banco de templates fica armazenado localmente no próprio terminal, permitindo validar usuários cadastrados mesmo sem conexão externa. Funções remotas pela nuvem, porém, ficam aguardando o restabelecimento da internet.'
    },
    {
      question: 'A foto do meu rosto fica armazenada e quais os cuidados da LGPD?',
      answer: 'Depende do modelo e da configuração adotada. Em muitos equipamentos, o rosto é convertido em um modelo matemático (template), mas cabe ao administrador definir finalidade, limitar acesso, oferecer alternativa como cartão RFID e definir regra de descarte conforme a LGPD. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    }
  ],
  relatedSolutions: ['biometria', 'catracas', 'fechadura-eletronica', 'tag-veicular'],
  relatedSegments: ['condominios-residenciais', 'condominios-comerciais', 'clinicas-e-hospitais', 'academias'],
  relatedCities: ['curitiba', 'pinhais', 'sao-jose-dos-pinhais', 'araucaria'],
  whatsappContext: 'controle de acesso por reconhecimento facial em Curitiba'
};
