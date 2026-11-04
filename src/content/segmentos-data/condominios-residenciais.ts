import { SegmentContent } from '../types';

export const condominiosResidenciaisSegment: SegmentContent = {
  slug: 'condominios-residenciais',
  title: 'Controle de Acesso para Condomínios Residenciais em Curitiba',
  seoTitle: 'Controle de Acesso para Condomínio em Curitiba | Residencial',
  metaDescription: 'Controle de acesso para condomínios residenciais em Curitiba. Biometria, facial, catracas e cancelas para portarias seguras. Peça orçamento no WhatsApp!',
  keyword: 'controle de acesso para condominios residenciais em Curitiba',
  directAnswer: 'O controle de acesso para condomínios residenciais em Curitiba automatiza a entrada e a saída de moradores, visitantes, prestadores de serviços e entregadores com segurança auditável. O sistema substitui chaves mecânicas e controles convencionais por leitores faciais, biometria digital e tags veiculares no para-brisa, operando de forma integrada à portaria presencial ou remota. Isso reduz vulnerabilidades perimetrais e assegura o registro fiel de cada evento nas portarias e garagens.',
  image: {
    src: '/images/controle-acesso-segmento-condominio-residencial.webp',
    alt: 'Leitor com teclado numérico e aproximação de tag na entrada de um condomínio de prédios',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Entrada recorrente de entregadores de delivery e encomendas direto aos blocos sem retenção na portaria, gerando circulação desnecessária de pessoas desconhecidas nas áreas íntimas dos edifícios.',
    'Uso de controles remotos convencionais de garagem que podem ser facilmente clonados em chaveiros da cidade ou emprestados para terceiros sem autorização prévia da administração condominial.',
    'Formação de longas filas de veículos na via pública nos horários de pico matutino e vespertino, aumentando a vulnerabilidade dos moradores a abordagens durante a espera pelo acionamento manual.',
    'Portas de pedestres mantidas abertas ou desajustadas por falha de molas hidráulicas desreguladas ou negligência de moradores, anulando completamente a eficácia do investimento em segurança patrimonial preventiva do condomínio.',
    'Falta de registros históricos confiáveis e fotos de passagens para que o síndico e o conselho possam auditar incidentes, danos a bens comuns ou desvios de conduta interna.',
    'Conflitos no cadastramento de novos moradores e prestadores eventuais devido à falta de regras claras de governança e adequação documental aos termos da LGPD no condomínio.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Reconhecimento Facial Touchless na Portaria Social',
      reason: 'Permite autenticação em frações de segundo sem necessidade de contato físico ou chaves, bloqueando automaticamente o acesso caso o inquilino ou morador finalize seu vínculo contratual com a unidade residencial.'
    },
    {
      solutionSlug: 'cancelas-e-acesso-veicular',
      title: 'Cancelas Rápidas e Tags Veiculares UHF de Para-brisa',
      reason: 'Identifica o automóvel do morador a metros de distância pela tag adesiva autodestrutiva, liberando a cancela sem exigir abertura de vidro e reduzindo o tempo de exposição na rua em Curitiba.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã em Clausura de Pedestres (Eclusa)',
      reason: 'Assegura que a segunda porta de pedestres permaneça mecanicamente travada até que o primeiro portão esteja devidamente fechado e trancado, impedindo invasões por empurrão ou carona forçada no acesso social do edifício.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Tags e Chaveiros RFID para Moradores e Serviços',
      reason: 'Oferecem uma alternativa prática e econômica para abertura de portões e portas de pedestres por simples aproximação, com fácil cancelamento em caso de perda ou extravio.'
    },
    {
      solutionSlug: 'interfone-e-video-porteiro',
      title: 'Interfonia IP e Vídeo Porteiro Integrado',
      reason: 'Garante comunicação de áudio cristalino e vídeo em alta resolução entre o visitante no portão externo e a portaria ou o morador no apartamento, com suporte para direcionamento simultâneo a smartphones.'
    }
  ],
  projectArchitecture: [
    'Infraestrutura e Eletrodutos: Lançamento de cabeamento estruturado Cat6 em eletrodutos galvanizados e blindados, interligando a portaria social, o portão de serviço, a lixeira e os acessos veiculares à guarita central ou ao rack de rede.',
    'Clausura de Pedestres (Gaiola): Instalação de duas portas sequenciais com fechaduras eletromagnéticas de 280kgf, suportes de fixação reforçados, molas aéreas de alto tráfego, leitores faciais na entrada externa e botoeiras no-touch de saída com intertravamento elétrico físico.',
    'Controle de Acesso Veicular na Garagem: Posicionamento de antenas receptoras UHF na rampa de entrada e saída, laços indutivos embutidos no piso para detecção de massa metálica, fotocélulas antiesmagamento e cancelas automáticas de ciclo contínuo.',
    'Central de Processamento e Controladoras IP: Servidor ou controladora local autônoma com capacidade de processamento offline para armazenamento de templates biométricos e banco de dados criptografado, operando com sincronização para portaria presencial ou remota.',
    'Sistema de Contingência Energética e Governança: Banco de baterias estacionárias com no-break senoidal de longa autonomia para suportar quedas de energia na rede da Copel, aliado ao treinamento presencial da equipe de portaria e entrega do termo de conformidade com a LGPD aprovado em assembleia.'
  ],
  faqs: [
    {
      question: 'O sistema de controle de acesso atende condomínios que pretendem migrar para portaria remota em Curitiba?',
      answer: 'Sim. Todos os equipamentos e controladoras que especificamos utilizam protocolos abertos de mercado, como Wiegand e OSDP, além de conexões IP nativas. Isso significa que, se o condomínio opera hoje com portaria física presencial e decidir contratar uma empresa de portaria remota ou mista no futuro, a infraestrutura já instalada poderá ser integralmente reaproveitada sem novos investimentos em hardware.'
    },
    {
      question: 'Como é administrado o acesso de prestadores de serviços, empregados domésticos e diaristas?',
      answer: 'A administração ou o próprio morador cadastra o prestador no sistema com delimitação restrita de dias da semana e faixas de horários permitidas (por exemplo, terças e quintas-feiras das 08h00 às 17h00). Fora dessa janela temporal programada, o leitor facial ou biométrico recusa a liberação automaticamente, registrando a tentativa no histórico de eventos.'
    },
    {
      question: 'É necessário aprovação prévia em assembleia para implantar biometria e reconhecimento facial?',
      answer: 'Sim, a aprovação em assembleia de condôminos é altamente recomendada para definir as regras de convivência, a política de tratamento de dados pessoais conforme a LGPD e a destinação de verba orçamentária. Nossa equipe disponibiliza termos técnicos de apoio e documentação descritiva para embasar a apresentação do síndico aos moradores antes da votação.'
    },
    {
      question: 'Como funciona a eclusa de pedestres caso ocorra falta de energia elétrica prolongada no bairro?',
      answer: 'Dimensionamos bancos de no-break com baterias estacionárias que mantêm as fechaduras eletromagnéticas e as controladoras operando normalmente por horas durante apagões. Como os eletroímãs são sistemas do tipo fail-safe, se a energia esgotar por completo, as portas destravam automaticamente por norma de emergência, dispondo também de cilindro mecânico com chave de segurança do síndico.'
    },
    {
      question: 'Como é protegida a privacidade e o banco de dados dos moradores segundo a LGPD?',
      answer: 'Tratamos a biometria e a imagem facial como dados pessoais sensíveis. Os leitores convertem os traços do usuário em um template numérico hash criptografado e não guardam fotos abertas na memória. A base de cadastros fica restrita aos operadores autorizados e os relatórios de passagens são descartados periodicamente conforme a política interna aprovada pelo condomínio. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    }
  ],
  relatedSolutions: ['reconhecimento-facial', 'cancelas-e-acesso-veicular', 'fechaduras-eletromagneticas', 'interfone-e-video-porteiro'],
  relatedSegments: ['condominios-comerciais', 'residencias'],
  whatsappContext: 'controle de acesso para condomínio residencial em Curitiba'
};
