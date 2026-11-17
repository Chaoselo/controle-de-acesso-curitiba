import { ServiceContent } from '../types';

export const manutencaoService: ServiceContent = {
  slug: 'manutencao',
  title: 'Manutenção e Conserto de Controle de Acesso em Curitiba',
  seoTitle: 'Conserto e Manutenção de Interfone, Catraca e Cancela Curitiba',
  metaDescription: 'Conserto e manutenção de interfone, catraca, cancela, fechadura eletrônica e controle de acesso em Curitiba. Empresas, condomínios e estacionamentos.',
  keyword: 'manutencao de controle de acesso Curitiba',
  directAnswer: 'Realizamos conserto e manutenção preventiva e corretiva de interfone, catraca, cancela, fechadura eletrônica e leitores de acesso em Curitiba e Região Metropolitana. Atendemos empresas, condomínios, indústrias, clínicas, escolas, academias, estacionamentos e portas de vidro, com diagnósticos em equipamentos Intelbras e de outros fabricantes — atuando como assistência técnica independente.',
  image: {
    src: '/images/manutencao-de-acesso.webp',
    alt: 'Técnico de capacete e luvas realizando manutenção em equipamento instalado na parede',
    width: 1200,
    height: 675
  },
  scope: [
    'Conserto e manutenção de interfone e vídeo porteiro em portarias de condomínios, edifícios comerciais, empresas e clínicas.',
    'Manutenção preventiva e corretiva de catracas pedestal, balcão e torniquetes, com revisão de solenoides, molas, amortecedores e sensores ópticos.',
    'Conserto e regulagem de cancelas de estacionamento e garagens, incluindo laço indutivo, fotocélulas, hastes e placas de comando.',
    'Ajuste e reparo de fechadura eletrônica e fechadura eletromagnética em portas de madeira, metal e portas de vidro com alinhamento de atraque e mola aérea.',
    'Testes de fontes carregadoras, substituição de baterias auxiliares desgastadas e conferência de fiação com queda de tensão.',
    'Atendimento avulso ou por manutenção periódica para equipamentos Intelbras e demais marcas disponíveis no mercado.'
  ],
  diagnosticCommonIssues: [
    {
      symptom: 'Interfone ou vídeo porteiro com chiado, sem chamada ou sem destravar a porta',
      cause: 'Fiação oxidada ou rompida em conduítes com umidade, fonte de alimentação com tensão reduzida ou falha no relé de acionamento da fechadura.',
      fix: 'Teste de continuidade e tensão na linha, revisão de conexões, ajuste ou substituição de módulo externo, monofone ou placa de comando compatível.'
    },
    {
      symptom: 'Catraca travada ou girando livre sem validar o acesso',
      cause: 'Solenoide de destravamento emperrado, desgaste em molas e microchaves, sensor óptico sujo ou falha na placa controladora.',
      fix: 'Limpeza interna do mecanismo, lubrificação técnica adequada, regulagem de molas e sensores ou substituição do componente avariado conforme o modelo.'
    },
    {
      symptom: 'Cancela de estacionamento sem resposta, com haste desalinhada ou falha no sensor',
      cause: 'Mola de balanceamento desregulada, problema no detector de massa metálica do laço indutivo, fotocélula obstruída ou falha na central eletrônica.',
      fix: 'Limpeza e realinhamento de fotocélulas, aferição do laço indutivo de piso, regulagem mecânica da haste e reparo ou troca da central conforme diagnóstico.'
    },
    {
      symptom: 'Fechadura eletroímã em porta de vidro ou batente soltando ao empurrar',
      cause: 'Queda de tensão no cabeamento, suporte em U ou bloco de atraque desalinhado, mola aérea desregulada ou oxidação superficial nas faces metálicas.',
      fix: 'Medição de tensão na saída da fonte e nos bornes da fechadura, limpeza das superfícies de contato, reaperto correto do atraque e regulagem da mola aérea.'
    },
    {
      symptom: 'Leitor facial lento ou com erro de leitura na portaria',
      cause: 'Acúmulo de poeira ou gordura na lente óptica, contraluz solar direta no vão ou desatualização de cadastro e firmware.',
      fix: 'Higienização da lente com produto adequado, ajuste de posicionamento ou instalação de proteção contra contraluz e revisão das configurações no equipamento.'
    },
    {
      symptom: 'Cartão ou tag RFID exigindo encostar no leitor para funcionar',
      cause: 'Incompatibilidade entre tecnologia de credencial e leitor (por exemplo 125 kHz e 13,56 MHz Mifare), interferência elétrica no cabo ou perda de sensibilidade da antena.',
      fix: 'Verificação da frequência das credenciais, revisão de blindagem e aterramento do cabeamento ou substituição do leitor com defeito.'
    },
    {
      symptom: 'Tag veicular de estacionamento não abre a cancela à distância',
      cause: 'Antena UHF desalinhada em relação à pista, película metálica no para-brisa bloqueando o sinal ou tag danificada.',
      fix: 'Reorientação da antena leitora, teste de alcance e orientação de posicionamento correto da tag no vidro do veículo.'
    },
    {
      symptom: 'Botoeira de saída não libera a fechadura da clausura ou porta de vidro',
      cause: 'Desgaste mecânico do botão, oxidação nos contatos internos ou rompimento no cabo de interligação.',
      fix: 'Teste de continuidade no condutor e substituição por botoeira convencional ou sem toque (no-touch) compatível com o conjunto.'
    },
    {
      symptom: 'Sistema reiniciando ou portas destravando em quedas de energia',
      cause: 'Baterias auxiliares do no-break ou da fonte carregadora no fim da vida útil ou carregador sem retenção de carga.',
      fix: 'Teste sob carga elétrica e substituição preventiva das baterias seladas compatíveis com a autonomia desejada no projeto.'
    }
  ],
  processSteps: [
    {
      step: '01',
      title: 'Relato do Problema pelo WhatsApp',
      description: 'Você informa o equipamento com falha (interfone, catraca, cancela, fechadura ou leitor) e, se possível, envia foto ou vídeo pelo WhatsApp (41) 99844-8409 para triagem inicial.'
    },
    {
      step: '02',
      title: 'Vistoria e Diagnóstico no Local',
      description: 'Nossa equipe técnica própria comparece ao imóvel em Curitiba ou Região Metropolitana com instrumentos de medição para identificar a causa elétrica ou mecânica da falha.'
    },
    {
      step: '03',
      title: 'Orçamento após o Diagnóstico',
      description: 'Com o diagnóstico concluído, apresentamos os fatores envolvidos e o orçamento para conserto, regulagem ou substituição de peças antes da execução.'
    },
    {
      step: '04',
      title: 'Execução do Conserto e Testes',
      description: 'Realizamos os ajustes mecânicos, revisão de cabos, troca de componentes e testes práticos de abertura, fechamento e sensores de segurança.'
    },
    {
      step: '05',
      title: 'Orientação Preventiva',
      description: 'Orientamos síndicos, gestores ou operadores de estacionamento sobre cuidados simples no dia a dia e periodicidade recomendada para revisões preventivas.'
    }
  ],
  faqs: [
    {
      question: 'Vocês fazem conserto de interfone, catraca e cancela que não foram instalados pela sua equipe?',
      answer: 'Sim. Avaliamos e prestamos manutenção corretiva e preventiva na maioria dos sistemas instalados em empresas, condomínios e estacionamentos, incluindo equipamentos Intelbras e de outras marcas. Fazemos o diagnóstico no local para verificar disponibilidade de peças e viabilidade do reparo.'
    },
    {
      question: 'Como funciona o atendimento para manutenção de equipamentos Intelbras?',
      answer: 'Realizamos instalação, configuração e conserto de interfones, vídeo porteiros, fechaduras eletrônicas e controladoras Intelbras. A Intelsecsul atua como prestadora de serviços independente e não é revendedora autorizada nem assistência técnica autorizada da marca.'
    },
    {
      question: 'Vocês atendem manutenção de cancelas e sistemas de estacionamentos?',
      answer: 'Sim. Realizamos diagnóstico, regulagem e conserto de cancelas, laços indutivos, fotocélulas, antenas de tag veicular e catracas de acesso em estacionamentos comerciais, condomínios e pátios empresariais.'
    },
    {
      question: 'Qual a periodicidade recomendada para manutenção preventiva?',
      answer: 'A frequência ideal depende do volume de passagens e da exposição ao clima, sendo em geral mensal ou bimestral em condomínios, estacionamentos e empresas de maior movimento para revisar baterias, molas aéreas, fechaduras e sensores.'
    },
    {
      question: 'Qual o valor de uma manutenção corretiva ou conserto?',
      answer: 'O preço varia conforme o tipo de equipamento, deslocamento, necessidade de substituição de peças ou reparo de cabeamento. Por isso, o orçamento é informado após o diagnóstico técnico.'
    }
  ],
  relatedSolutions: ['catracas', 'cancelas-e-acesso-veicular', 'interfone-e-video-porteiro', 'fechaduras-eletromagneticas'],
  relatedServices: ['manutencao-de-catracas', 'instalacao-e-projeto', 'locacao'],
  whatsappContext: 'conserto ou manutenção de interfone, catraca, cancela ou controle de acesso em Curitiba'
};
