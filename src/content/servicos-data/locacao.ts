import { ServiceContent } from '../types';

export const locacaoService: ServiceContent = {
  slug: 'locacao',
  title: 'Locação de Controle de Acesso em Curitiba',
  seoTitle: 'Locação de Catracas e Controle de Acesso em Curitiba',
  metaDescription: 'Locação de catracas e equipamentos de controle de acesso em Curitiba sob consulta para empresas, obras e eventos. Consulte disponibilidade no WhatsApp.',
  keyword: 'aluguel de controle de acesso',
  directAnswer: 'Disponibilizamos locação de equipamentos de controle de acesso em Curitiba e Região Metropolitana mediante consulta e avaliação técnica do projeto. A modalidade atende demandas pontuais ou contratuais de empresas, eventos, feiras, canteiros de obras e estacionamentos que preferem contratar catracas, cancelas ou terminais de acesso por período determinado.',
  image: {
    src: '/images/servico-locacao.webp',
    alt: 'Catracas pedestal em aço inoxidável disponibilizadas para locação em Curitiba',
    width: 1900,
    height: 1080
  },
  scope: [
    'Disponibilização de catracas de acesso e leitores conforme a necessidade operacional e disponibilidade em estoque.',
    'Atendimento para demandas temporárias de eventos corporativos, feiras, congressos e canteiros de obras em Curitiba e Região Metropolitana.',
    'Opção de montagem sobre bases móveis ou estruturas adaptadas quando não é possível perfurar o piso do local.',
    'Configuração inicial dos equipamentos para leitura de credenciais compatíveis com a operação contratada.',
    'Assistência técnica para manutenção dos equipamentos locados nos termos definidos em contrato.'
  ],
  processSteps: [
    {
      step: '01',
      title: 'Levantamento da Necessidade',
      description: 'Avaliamos o tipo de evento, obra, empresa ou estacionamento em Curitiba, a quantidade de passagens necessária e as condições de energia e espaço do local.'
    },
    {
      step: '02',
      title: 'Definição do Conjunto de Equipamentos',
      description: 'Indicamos os equipamentos disponíveis e compatíveis com o controle pretendido — como catracas com leitura por cartão RFID, biometria ou reconhecimento facial, conforme o caso.'
    },
    {
      step: '03',
      title: 'Diagnóstico e Proposta Comercial',
      description: 'Com base no diagnóstico da aplicação e no período de uso desejado, elaboramos a proposta com as condições de locação, instalação e suporte técnico.'
    },
    {
      step: '04',
      title: 'Entrega, Montagem e Testes',
      description: 'Realizamos o transporte, posicionamento dos equipamentos, interligação elétrica segura e testes práticos de funcionamento junto aos responsáveis no local.'
    },
    {
      step: '05',
      title: 'Suporte Durante o Contrato',
      description: 'Prestamos acompanhamento técnico para operação e manutenção dos equipamentos locados conforme as condições estabelecidas na proposta.'
    }
  ],
  faqs: [
    {
      question: 'Quando a locação de controle de acesso costuma ser procurada?',
      answer: 'A locação é geralmente procurada para eventos corporativos, feiras, congressos, obras temporárias ou empresas que desejam evitar a imobilização inicial de capital na compra de catracas ou equipamentos.'
    },
    {
      question: 'Quem realiza a manutenção dos equipamentos durante a locação?',
      answer: 'As condições de manutenção preventiva, corretiva e eventual substituição de peças por desgaste natural ou uso inadequado são detalhadas previamente na proposta e no contrato de locação.'
    },
    {
      question: 'É possível instalar catracas locadas sem furar o piso?',
      answer: 'Sim. Conforme a viabilidade do local, podem ser utilizadas bases metálicas de apoio que dispensam furação permanente em pisos nobres ou áreas locadas.'
    },
    {
      question: 'Como funciona o controle de acesso em canteiros de obras?',
      answer: 'Conforme o equipamento escolhido, o sistema registra entradas e saídas de colaboradores e terceirizados por credenciais como cartão ou biometria, ajudando a organizar a portaria da obra.'
    },
    {
      question: 'Qual o valor da locação de catracas ou equipamentos?',
      answer: 'O valor depende de fatores como quantidade de equipamentos, tecnologia embarcada, complexidade da montagem, período de contratação e localização em Curitiba ou Região Metropolitana. O orçamento é elaborado após o diagnóstico.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'cancelas-e-acesso-veicular', 'biometria'],
  relatedServices: ['instalacao-e-projeto', 'manutencao'],
  whatsappContext: 'consulta sobre locação de controle de acesso em Curitiba'
};
