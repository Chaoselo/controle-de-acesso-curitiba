import { BlogPostContent } from '../types';

export const funcionaSemInternetContent: BlogPostContent = {
  slug: 'controle-de-acesso-funciona-sem-internet',
  title: 'Controle de Acesso Funciona Sem Internet? Entenda',
  seoTitle: 'Controle de Acesso Funciona Sem Internet? Entenda',
  metaDescription: 'Entenda como sistemas de controle de acesso operam em modo offline em Curitiba, com memória local, sincronização de dados e no-breaks. Saiba mais!',
  author: 'Equipe Controle de Acesso Curitiba',
  publishedDate: '[[PREENCHER: data de publicação]]',
  readTime: '7 min de leitura',
  summary: 'Sistemas profissionais de controle de acesso físico são projetados com inteligência distribuída e continuam operando em modo local mesmo durante interrupções de internet. Graças à memória interna das controladoras e terminais, portas e cancelas validam cadastros ativos localmente, armazenam os registros em buffer e sincronizam os eventos quando a conexão de rede retorna.',
  sections: [
    {
      heading: 'O Que Acontece com a Portaria se a Conexão de Internet Cair?',
      paragraphs: [
        'Com a popularização de serviços em nuvem, aplicativos para moradores e portarias remotas, uma das dúvidas mais frequentes de síndicos, empresários e conselheiros em Curitiba é: "Se a operadora de internet tiver uma instabilidade ou o cabo for rompido na rua, os usuários vão ficar trancados para fora?".',
        'Em geral, não — desde que o sistema seja dimensionado e implantado com arquitetura distribuída e equipamentos profissionais adequados ao projeto.',
        'Ao contrário do que muitos imaginam, um controle de acesso predial bem estruturado não depende de consultas contínuas à nuvem a cada passagem para decidir se destrava ou não uma porta. A seguir, explicamos como funciona a operação em modo autônomo (offline).'
      ],
      subsections: [
        {
          heading: 'Arquitetura Distribuída vs Consulta Centralizada em Nuvem',
          paragraphs: [
            'No mercado de segurança eletrônica existem duas abordagens arquiteturais distintas. A arquitetura centralizada e dependente da nuvem exige que, a cada aproximação de um rosto ou cartão, o leitor envie uma requisição pela internet a um servidor remoto e aguarde a resposta para acionar o relé da fechadura. Caso a internet oscile por alguns segundos, a porta trava ou demora segundos inaceitáveis para abrir.',
            'Por essa razão, a engenharia profissional adota exclusivamente a arquitetura distribuída autônoma. Nela, o servidor ou a nuvem serve apenas para fins de configuração inicial, envio de novos cadastros e extração de relatórios consolidados. Toda a base de regras e templates biométricos é replicada e gravada diretamente na memória física de cada controladora e terminal de acesso instalado na porta.'
          ]
        },
        {
          heading: 'Memória Local Flash Não Volátil nas Controladoras',
          paragraphs: [
            'Terminais de reconhecimento facial e controladoras de acesso contam, em geral, com memória flash não volátil com capacidade para armazenar templates biométricos matemáticos, tags veiculares e tabelas de horários conforme o modelo do equipamento.',
            'Quando um morador ou colaborador posiciona a face ou aproxima o crachá do leitor, a comparação é processada localmente, sem depender da saída pela internet. Se a conexão cair temporariamente, a rotina de quem possui cadastro ativo continua operando.'
          ]
        }
      ]
    },
    {
      heading: 'O Que Acontece com os Registros de Passagem (Logs de Evento)?',
      paragraphs: [
        'Outra preocupação compreensível diz respeito à auditoria: o condomínio ou empresa perde o histórico de quem entrou e saiu durante o período sem internet?',
        'Em geral, não. Cada evento de acesso liberado, porta aberta por mais tempo ou tentativa de passagem sem permissão é gravado em uma fila de buffer local dentro da controladora, com data e hora mantidas pelo relógio interno (RTC) do equipamento.'
      ],
      subsections: [
        {
          heading: 'Ressincronização Automática com o Servidor',
          paragraphs: [
            'Assim que o sinal de internet da operadora retorna, o sistema detecta o restabelecimento da conectividade e inicia a sincronização em segundo plano.',
            'Os eventos acumulados na memória interna da controladora são enviados para o histórico central de gerenciamento conforme a capacidade de memória do equipamento, permitindo a consulta de relatórios pelo síndico ou gestor.'
          ]
        },
        {
          heading: 'O Papel Indispensável do No-break e da Contingência Elétrica',
          paragraphs: [
            'Enquanto a queda de internet não impede a validação local dos cadastros ativos, a falta de energia elétrica compromete a operação caso o projeto não conte com contingência adequada. Como as fechaduras eletromagnéticas costumam operar no modo fail-safe (destravam sem eletricidade para facilitar a saída em emergências), a presença de fontes carregadoras com no-break e baterias ajuda a manter leitores e travas alimentados durante oscilações de energia.',
            'Dimensionamos o banco de baterias conforme a carga dos equipamentos e o tempo de reserva pretendido pelo cliente após o diagnóstico técnico.'
          ]
        }
      ]
    },
    {
      heading: 'Cuidados Especiais em Portarias Remotas e Boas Práticas',
      paragraphs: [
        'Em condomínios que operam com portaria remota ou virtual (sem porteiro físico presencial), a internet cumpre um papel adicional: a transmissão de áudio e vídeo do interfone IP para o operador remoto que autoriza visitantes externos.',
        'Nesses cenários, enquanto os moradores cadastrados continuam entrando normalmente pelo reconhecimento facial ou tag veicular mesmo sem internet, a recepção de visitantes desconhecidos depende da comunicação com a central. Por isso, as boas práticas de engenharia recomendam:',
        'Contratação de links redundantes de internet: manter duas conexões de operadoras distintas que utilizem rotas físicas diferentes (por exemplo, um link principal por fibra óptica e um link secundário via modem 4G/5G com comutação automática failover).',
        'Zeladoria e portaria física com chave de bypass emergencial: manter procedimentos operacionais claros e chaves mestras mecânicas sob custódia segura do síndico ou zelador para liberação manual em contingências extremas.'
      ]
    }
  ],
  internalLinks: [
    { text: 'terminais de reconhecimento facial', url: '/solucoes/reconhecimento-facial/', context: 'Veja a autonomia dos' },
    { text: 'fechaduras eletromagnéticas fail-safe', url: '/solucoes/fechaduras-eletromagneticas/', context: 'Conheça o princípio das' },
    { text: 'serviços de manutenção preventiva periódica', url: '/servicos/manutencao/', context: 'Veja a importância dos' },
    { text: 'consultar nossos especialistas em engenharia de acesso', url: '/orcamento/', context: 'Acesse nossa página de orçamento para' }
  ],
  faqs: [
    {
      question: 'É possível cadastrar novos moradores enquanto o sistema estiver sem internet?',
      answer: 'Se o cadastro for feito localmente na própria rede interna do condomínio via computador conectado ao mesmo switch das controladoras, sim. Apenas comandos remotos enviados pela nuvem aguardam o retorno do link.'
    },
    {
      question: 'O leitor facial perde a hora correta se a internet ficar fora do ar por bastante tempo?',
      answer: 'Em geral não, pois as controladoras profissionais contam com bateria interna para o relógio de tempo real (RTC), dependendo do modelo e do estado do componente.'
    },
    {
      question: 'Cancelas veiculares de estacionamento continuam abrindo com tag UHF sem internet?',
      answer: 'Em instalações configuradas com validação local na controladora, sim: a antena lê a tag no veículo, a controladora verifica o cadastro na memória local e aciona a cancela.'
    }
  ],
  whatsappContext: 'dúvidas sobre funcionamento do controle de acesso sem internet'
};
