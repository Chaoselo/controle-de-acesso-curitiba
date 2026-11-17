import { SolutionContent } from '../types';

export const tagVeicularSolution: SolutionContent = {
  slug: 'tag-veicular',
  title: 'Tag veicular para controle de acesso em Curitiba',
  seoTitle: 'Tag Veicular em Curitiba | Controle de Acesso de Veículos',
  metaDescription: 'Tag veicular em Curitiba para condomínios, empresas e estacionamentos: abra a cancela sem parar. Instalação e suporte. Peça orçamento pelo WhatsApp!',
  keyword: 'tag veicular em Curitiba',
  directAnswer: 'A tag veicular utiliza identificação por radiofrequência UHF para liberar cancelas e portões coletivos de forma automática quando o carro cadastrado se aproxima da pista, sem o motorista precisar abrir o vidro ou acionar controle remoto manual. Em Curitiba e Região Metropolitana, implantamos e prestamos suporte em sistemas com tag veicular integrados a cancelas automáticas e estacionamentos, incluindo orientação de testes para vidros com película.',
  // TODO: foto real
  image: {
    src: '/images/controle-acesso-tag.webp',
    alt: 'Tag de acesso sendo aproximada de um leitor',
    width: 1200,
    height: 675
  },
  howItWorks: [
    'Etiqueta UHF no para-brisa: Uma tag adesiva é fixada na parte interna do vidro dianteiro (ou em formato próprio para retrovisor/farol, quando o para-brisa exige alternativa). Ela contém um microchip com identificador exclusivo vinculado a um veículo ou unidade cadastrada.',
    'Antena leitora e placa controladora: Uma antena UHF instalada em pedestal ou suporte na lateral da pista emite sinal de radiofrequência na zona de aproximação. Ao capturar o código da tag, o leitor repassa a informação para a controladora de acesso, que valida permissões e aciona a cancela ou portão.',
    'Variação de alcance conforme projeto: O alcance de leitura não é único para todos os locais; ele varia conforme o modelo da tag, a potência e a regulagem da antena, o ângulo da pista e eventuais interferências metálicas na estrutura ao redor.',
    'Tags passivas versus tags ativas: A grande maioria das portarias e estacionamentos emprega tags passivas, que são adesivos leves sem bateria alimentados pela própria onda emitida pela antena. Em alguns sistemas voltados a pátios logísticos ou vias amplas que demandam maior distância de leitura, podem ser utilizadas tags ativas com bateria interna, dependendo da compatibilidade da controladora.',
    'Vidros com película ou metalizados: Películas automotivas de controle térmico com componentes metálicos e para-brisas atérmicos podem atenuar ou bloquear o sinal UHF. Por isso, carros com esse tipo de vidro exigem teste prático antes da fixação definitiva, buscando pontos livres na área pontilhada próxima ao retrovisor ou adotando modelo alternativo externo.',
    'Cadastro, bloqueio imediato e acesso temporário: Se um veículo for vendido ou uma tag se perder, a administração inativa apenas aquele número no sistema, interrompendo a liberação imediatamente sem interferir nos demais usuários. Para visitantes, prestadores de serviços e frotas eventuais, é possível emitir tags temporárias removíveis ou usar validação de apoio pela guarita.',
    'Integração com acesso veicular e pedestres: O mesmo ambiente gerenciador pode unificar cancelas automáticas (veja nossa solução de cancelas e acesso veicular), portões de garagem, áreas de estacionamentos e portarias de pedestres com catracas ou leitores.'
  ],
  whenToChoose: [
    'Condomínios residenciais verticais e horizontais em Curitiba que buscam agilidade na entrada da garagem e redução da exposição do motorista na via pública.',
    'Estacionamentos rotativos ou de mensalistas com alto fluxo em horários de entrada e saída que desejam evitar retenção nas pistas.',
    'Empresas, centros comerciais e condomínios empresariais com controle diferenciado para diretores, colaboradores e vagas reservadas.',
    'Indústrias e pátios de logística na Região Metropolitana que precisam registrar entrada e saída de automóveis internos e caminhões de frota cadastrada.',
    'Locais que desejam integrar o controle de veículos às catracas de pedestres e fechaduras eletrônicas na mesma rotina administrativa.'
  ],
  advantages: [
    'Abertura sem contato manual: O motorista não precisa procurar controle remoto no console nem baixar o vidro em dias de chuva ou frio em Curitiba.',
    'Desgaste e risco de extravio reduzidos: Por ser aplicada de forma fixa no vidro e muitas vezes concebida com corte autodestrutivo na remoção, a tag dificulta o empréstimo casual entre veículos diferentes.',
    'Bloqueio seletivo ágil: Em caso de venda do carro, saída de funcionário ou extravio de tag móvel, basta desativar a credencial no sistema sem reprogramar toda a base de moradores.',
    'Maior organização do histórico: Permite acompanhar horários de passagem por veículo ou unidade dentro das políticas definidas pelo empreendimento.',
    'Integração flexível: Funciona em conjunto com cancelas rápidas, portões automatizados de condomínio, semáforos e sensores de pista.'
  ],
  limitations: [
    'Sensibilidade a películas e vidros metalizados: Para-brisas atérmicos e películas metalizadas podem reduzir significativamente o alcance, exigindo teste prévio no local e posicionamento alternativo.',
    'Proteção contra cópia e fraude depende da tecnologia: Embora ofereça mais controle do que códigos fixos antigos, nenhuma credencial é imune a fraudes; a segurança adicional varia conforme a criptografia da tag/antena e, em áreas críticas, recomenda-se combinar a tag com leitura de placa (LPR) ou câmera de monitoramento.',
    'Necessidade de geometria correta da pista: Antenas mal anguladas podem ler veículos passando na rua ou na faixa ao lado, exigindo ajuste de potência e ângulo na instalação.',
    'Risco de passagem em comboio se não houver disciplina de pista ou sensores e fechamento coordenados entre cancela e portão.'
  ],
  lgpdNote: 'Quando uma tag veicular e eventuais registros de passagem ou placas de veículos são vinculados a moradores, colaboradores ou mensalistas identificados, há tratamento de dados pessoais regulado pela Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). O condomínio ou empresa responsável deve definir claramente a finalidade de segurança e organização da garagem, restringir a consulta dos registros a pessoas autorizadas pela administração e estabelecer política de exclusão quando o usuário deixar o local. Este texto é informativo e não substitui a orientação de um profissional jurídico.',
  integrations: [
    'Cancelas automáticas de abertura ágil e portões deslizantes ou basculantes em portarias coletivas.',
    'Laços indutivos de piso e fotocélulas de proteção para evitar fechamento da haste sobre o veículo.',
    'Câmeras de leitura automática de placas (LPR) e sistemas de vídeo para dupla verificação em portarias críticas.',
    'Catracas de acesso e leitores faciais ou biométricos de pedestres compartilhando o cadastro geral do empreendimento.',
    'Estacionamentos comerciais e corporativos mediante avaliação prévia de compatibilidade técnica.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Vistoria da pista e teste em vidros com película',
      description: 'Inspecionamos a entrada de veículos em Curitiba, avaliamos pontos de interferência metálica, largura de faixa e realizamos testes de leitura inclusive em veículos com película escura ou metalizada para definir antena e orçamento após o diagnóstico.'
    },
    {
      step: '02',
      title: 'Base de pedestal e infraestrutura cabeada',
      description: 'Preparamos o ponto de fixação da antena UHF em posição protegida contra colisões e lançamos cabos de alimentação e comunicação adequados até a central e controladora.'
    },
    {
      step: '03',
      title: 'Fixação, regulagem e angulação da antena UHF',
      description: 'Instalamos o leitor em altura compatível com carros ou caminhões e calibramos a potência de transmissão para captar veículos somente na zona correta de entrada.'
    },
    {
      step: '04',
      title: 'Integração com cancela, portão e sensores',
      description: 'Interligamos a controladora ao comando da cancela ou portão existente, validando laço indutivo, fotocélulas e regras de abertura ou sentido único.'
    },
    {
      step: '05',
      title: 'Cadastro das tags e orientação operacional',
      description: 'Cadastramos o lote inicial de tags vinculadas aos veículos, testamos em movimento controlado e orientamos porteiros e administradores sobre fixação correta no vidro, tags temporárias e bloqueio imediato.'
    }
  ],
  maintenanceAndSupport: [
    'Reaperto e conferência do ângulo das antenas UHF expostas a vibrações, vento ou pequenos esbarrões em garagens.',
    'Vedação e revisão periódica de conexões e prensa-cabos expostos à chuva e umidade.',
    'Testes combinados de laço indutivo, fotocélula e acionamento da cancela vinculada à controladora.',
    'Apoio técnico na conferência de leituras irregulares em novos modelos de veículos com para-brisas metalizados e orientação para limpeza de cadastros antigos.'
  ],
  faqs: [
    {
      question: 'O que é tag veicular e como funciona na prática?',
      answer: 'A tag veicular é uma etiqueta com chip de radiofrequência UHF colada no para-brisa do veículo. Quando o carro se aproxima da antena instalada na portaria ou no estacionamento, o leitor identifica o código cadastrado e a controladora aciona a abertura da cancela ou do portão automaticamente, sem precisar tirar controle do carro. Para entender a parte mecânica da pista, confira também nossa página de cancelas e acesso veicular e a página do segmento de estacionamentos.'
    },
    {
      question: 'A tag veicular funciona em vidro com película (insulfilm) ou vidro metalizado?',
      answer: 'Películas comuns tintadas costumam permitir a passagem do sinal com bom desempenho, mas películas com partículas metálicas e vidros originalmente atérmicos ou blindados podem reduzir drasticamente ou bloquear a leitura UHF. Nesses casos, é indispensável fazer teste no local antes da instalação da tag: muitas vezes posiciona-se a etiqueta na faixa pontilhada próxima ao espelho retrovisor ou utiliza-se uma tag externa específica para farol ou suporte adequado.'
    },
    {
      question: 'Posso usar a mesma tag veicular em dois carros diferentes?',
      answer: 'Em geral, não. As tags adesivas de para-brisa possuem antena fina impressa sobre substrato projetado para romper ou perder sintonia caso seja descolada e colada novamente em outro carro. Além disso, o objetivo do sistema é vincular cada credencial a um automóvel específico para controle de vagas e segurança da portaria. Quando há necessidade de alternar carros eventuais, a administração costuma utilizar tags específicas para cada placa ou modelos removíveis de controle temporário conforme regra interna.'
    },
    {
      question: 'Perdi a tag ou troquei de carro, e agora?',
      answer: 'Se o veículo foi vendido, trocou o vidro ou uma tag temporária foi perdida, informe imediatamente a administração ou portaria responsável. O número daquela tag antiga pode ser bloqueado e excluído rapidamente no painel de controle, evitando que o novo proprietário ou terceiros utilizem a credencial na entrada, e uma nova tag é vinculada ao veículo atualizado.'
    },
    {
      question: 'Qual a diferença entre tag veicular UHF e controle remoto comum?',
      answer: 'O controle remoto convencional depende de bateria interna e acionamento manual pelo botão; modelos antigos de código fixo também facilitam clonagem e costumam ser emprestados ou esquecidos dentro de carros estacionados na rua. Já a tag UHF passiva não usa bateria, fica fixada ao vidro do veículo, libera a cancela por aproximação sem que o motorista abaixe o vidro e oferece gestão individualizada de bloqueio por veículo ou usuário — embora a proteção efetiva contra cópia dependa da tecnologia empregada e, em entradas críticas, seja recomendada combinação com câmera LPR ou conferência visual.'
    }
  ],
  relatedSolutions: ['cancelas-e-acesso-veicular', 'cartao-e-tag-rfid', 'fechadura-eletronica', 'catracas'],
  relatedSegments: ['condominios-residenciais', 'industrias', 'estacionamentos'],
  relatedCities: ['curitiba', 'araucaria', 'sao-jose-dos-pinhais'],
  whatsappContext: 'tag veicular para condomínio ou empresa'
};
