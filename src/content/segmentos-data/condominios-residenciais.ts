import { SegmentContent } from '../types';

export const condominiosResidenciaisSegment: SegmentContent = {
  slug: 'condominios-residenciais',
  title: 'Controle de Acesso para Condomínios Residenciais em Curitiba',
  seoTitle: 'Controle de Acesso para Condomínio em Curitiba | Portarias',
  metaDescription: 'Controle de acesso, fechadura eletrônica, interfone e cancelas para condomínios residenciais em Curitiba e RMC. Instalação e manutenção após diagnóstico.',
  keyword: 'controle de acesso para condominios residenciais em Curitiba',
  directAnswer: 'O controle de acesso para condomínios residenciais em Curitiba organiza a entrada e a saída de moradores, visitantes e prestadores de serviços nas portarias e garagens. O conjunto combina leitores faciais, biometria, tags RFID, fechaduras eletrônicas ou eletroímãs, interfonia e cancelas veiculares — com instalação e manutenção para portarias coletivas (demandas individuais de casas e apartamentos ficam em intelsecsul.com.br).',
  image: {
    src: '/images/controle-acesso-segmento-condominio-residencial.webp',
    alt: 'Leitor com teclado numérico e aproximação de tag na entrada de um condomínio de prédios',
    width: 1200,
    height: 675
  },
  typicalProblems: [
    'Circulação de entregadores e prestadores sem triagem adequada na portaria social ou de serviço.',
    'Uso de controles remotos antigos de código fixo sujeitos a cópia e empréstimo sem controle da administração.',
    'Espera de veículos na entrada da garagem durante horários de maior movimento.',
    'Portas sociais, portões ou portas de vidro da portaria desalinhados por falha de mola aérea ou desgaste da fechadura eletrônica.',
    'Dificuldade do síndico para auditar eventos ou organizar cadastros quando moradores e prestadores mudam ao longo do tempo.',
    'Necessidade de adequação das regras de biometria, rosto e placas de veículos às boas práticas da LGPD.'
  ],
  idealSolutions: [
    {
      solutionSlug: 'reconhecimento-facial',
      title: 'Reconhecimento Facial na Portaria Social',
      reason: 'Permite autenticação sem contato físico ou chaves para moradores, com bloqueio de cadastro quando encerrado o vínculo com o condomínio e opção de cartão para quem preferir.'
    },
    {
      solutionSlug: 'cancelas-e-acesso-veicular',
      title: 'Cancelas Veiculares e Tags UHF de Para-brisa',
      reason: 'Identificam veículos cadastrados à distância, conforme o modelo da antena e da tag, agilizando o fluxo na garagem sem exigir abertura do vidro.'
    },
    {
      solutionSlug: 'fechaduras-eletromagneticas',
      title: 'Fechaduras Eletroímã e Eletrônicas em Portarias e Portas de Vidro',
      reason: 'Proporcionam travamento silencioso em portas sociais, portas de vidro e clausuras (eclusas) de pedestres, com suporte para operação intertravada.'
    },
    {
      solutionSlug: 'cartao-e-tag-rfid',
      title: 'Tags e Chaveiros RFID para Moradores e Prestadores',
      reason: 'Funcionam como credencial prática e alternativa não biométrica (em conformidade com boas práticas da LGPD), com cancelamento rápido em caso de perda.'
    },
    {
      solutionSlug: 'interfone-e-video-porteiro',
      title: 'Interfonia e Vídeo Porteiro Coletivo',
      reason: 'Instalação, conserto e manutenção de interfones e vídeo porteiros para comunicação entre a entrada do condomínio, a portaria e as unidades.'
    }
  ],
  projectArchitecture: [
    'Infraestrutura de Portaria e Garagem: Avaliação de tubulação existente, passagem de cabeamento protegido e dimensionamento elétrico conforme as distâncias do condomínio.',
    'Portaria Social e Clausura de Pedestres: Instalação de fechaduras eletroímã ou eletrônicas em portões e portas de vidro, molas aéreas reguladas, leitores faciais ou RFID e botoeiras de saída e emergência.',
    'Acesso Veicular e Estacionamento Interno: Instalação ou manutenção de cancelas automáticas, laço indutivo de piso, fotocélulas e antenas UHF para tags veiculares.',
    'Interfonia Condominial: Instalação ou conserto de centrais, módulos externos e ramais de interfone e vídeo porteiro.',
    'Contingência Elétrica e Governança: Previsão de fonte carregadora com baterias auxiliares ou nobreak conforme autonomia desejada e orientação para documentação interna conforme a LGPD.'
  ],
  faqs: [
    {
      question: 'Os equipamentos servem para condomínios com portaria presencial ou portaria remota?',
      answer: 'Depende da compatibilidade dos equipamentos com a plataforma escolhida pelo condomínio. Muitos leitores e controladoras usam protocolos padrão como Wiegand, OSDP e TCP/IP, mas a compatibilidade deve ser conferida antes da implantação.'
    },
    {
      question: 'Como organizar a entrada de prestadores de serviços e diaristas no condomínio?',
      answer: 'Em geral, os equipamentos permitem configurar janelas de dias e horários específicos para cada cadastro temporário, bloqueando o acesso fora do período autorizado e registrando tentativas no histórico.'
    },
    {
      question: 'Vocês também fazem manutenção de interfone, catraca ou cancela já existente no condomínio?',
      answer: 'Sim. Realizamos conserto e manutenção preventiva e corretiva de interfones, vídeo porteiros, cancelas, fechaduras eletrônicas e leitores em condomínios de Curitiba e Região Metropolitana.'
    },
    {
      question: 'O atendimento deste site inclui fechaduras para dentro de apartamentos ou casas individuais?',
      answer: 'Não. Este site é voltado ao controle coletivo de condomínios, além de empresas, indústrias, clínicas, escolas, academias, estacionamentos e portas de vidro. Demandas residenciais individuais (casas e apartamentos) são atendidas em intelsecsul.com.br.'
    },
    {
      question: 'Quais cuidados a LGPD exige ao usar biometria, reconhecimento facial ou leitura de placas no condomínio?',
      answer: 'Biometria, geometria facial e placas vinculadas a pessoas são dados pessoais (sendo os biométricos dados sensíveis). O condomínio deve definir finalidade, informar os titulares, restringir o acesso ao sistema, oferecer credencial alternativa (como cartão RFID) e adotar política de descarte. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
    }
  ],
  relatedSolutions: ['reconhecimento-facial', 'tag-veicular', 'cancelas-e-acesso-veicular', 'fechaduras-eletromagneticas'],
  relatedSegments: ['condominios-comerciais', 'empresas-e-escritorios'],
  whatsappContext: 'controle de acesso, fechadura ou interfone para condomínio residencial em Curitiba'
};
