import { BlogPostContent } from '../types';

export const funcionaSemInternetContent: BlogPostContent = {
  slug: 'controle-de-acesso-funciona-sem-internet',
  title: 'Controle de Acesso Funciona Sem Internet? Entenda',
  seoTitle: 'Controle de Acesso Funciona Sem Internet? Entenda',
  metaDescription: 'Entenda como sistemas de controle de acesso operam em modo offline em Curitiba, com memória local, sincronização de dados e no-breaks. Saiba mais!',
  author: 'Equipe Controle de Acesso Curitiba',
  publishedDate: '[[PREENCHER: data de publicação]]',
  readTime: '7 min de leitura',
  summary: 'Sistemas profissionais de controle de acesso físico são projetados com inteligência distribuída e continuam operando normalmente mesmo durante interrupções completas de internet. Graças à memória local não volátil de controladoras e terminais faciais, as portas e cancelas validam moradores em milissegundos, armazenam os logs em buffer e sincronizam automaticamente os eventos assim que a conexão de rede é restabelecida.',
  sections: [
    {
      heading: 'O Que Acontece com a Portaria se a Conexão de Internet Cair?',
      paragraphs: [
        'Com a popularização de serviços em nuvem, aplicativos de celular para moradores e portarias remotas virtuais, uma das dúvidas mais frequentes de síndicos, empresários e conselheiros em Curitiba é: "Se a operadora de internet tiver uma instabilidade ou o cabo de fibra óptica for rompido na rua, os moradores vão ficar trancados para fora do condomínio?".',
        'A resposta técnica direta e categórica é: não, desde que o sistema tenha sido dimensionado e implantado por engenharia especializada com arquitetura distribuída e equipamentos profissionais homologados.',
        'Ao contrário do que muitos imaginam, um controle de acesso predial seguro não depende de consultas contínuas à nuvem a cada segundo para decidir se destrava ou não uma porta. A seguir, explicamos em detalhes como funciona a operação em modo autônomo (offline) e por que ela garante segurança ininterrupta.'
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
            'Terminais de reconhecimento facial modernos e controladoras de acesso contam com chips de memória flash não volátil com capacidade para armazenar dezenas de milhares de templates biométricos matemáticos, tags veiculares e tabelas de horários de permissão.',
            'Quando um morador ou colaborador posiciona a face ou aproxima o crachá do leitor, o algoritmo de comparação processa a validação localmente em menos de 0,3 segundo, sem enviar um único pacote de dados para fora da rede local. Se a internet cair por uma hora, um dia ou uma semana inteira, a rotina de quem possui cadastro ativo não sofre qualquer impacto.'
          ]
        }
      ]
    },
    {
      heading: 'O Que Acontece com os Registros de Passagem (Logs de Evento)?',
      paragraphs: [
        'Outra preocupação compreensível diz respeito à auditoria: o condomínio perde o histórico de quem entrou e saiu durante o período em que a internet esteve desconectada?',
        'A resposta é não. Cada evento de acesso liberado, porta forçada ou tentativa de passagem não autorizada é gravado instantaneamente em uma fila de buffer local dentro da controladora, com data e hora exatas sincronizadas pelo relógio interno (RTC) do equipamento.'
      ],
      subsections: [
        {
          heading: 'Ressincronização Automática com o Servidor',
          paragraphs: [
            'Assim que o sinal de internet da operadora retorna, o sistema de gerenciamento detecta o restabelecimento da conectividade e inicia uma sincronização silenciosa em segundo plano.',
            'Todos os milhares de eventos acumulados na memória interna da controladora são descarregados para o banco de dados central sem qualquer perda de informação, permitindo a emissão de relatórios completos de auditoria para o síndico ou gestor de segurança.'
          ]
        },
        {
          heading: 'O Papel Indispensável do No-break e da Contingência Elétrica',
          paragraphs: [
            'Enquanto a queda de internet não impede a validação local dos usuários, a falta de energia elétrica pode, sim, comprometer a operação caso o projeto não conte com contingência adequada. Como as fechaduras eletromagnéticas são do tipo fail-safe (destravam sem eletricidade para permitir fuga em incêndios), a presença de no-breaks senoidais com baterias seladas é o pilar que mantém todo o sistema energizado durante tempestades em Curitiba.',
            'Dimensionamos bancos de baterias para manter os leitores faciais, as controladoras e os eletroímãs operando ininterruptamente por horas durante apagões da concessionária pública.'
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
      question: 'O leitor facial perde a hora correta se a internet ficar fora do ar por dias?',
      answer: 'Não. As controladoras profissionais possuem bateria interna tipo moeda (RTC) que mantém o relógio de hardware rodando com precisão por anos mesmo sem conexão externa.'
    },
    {
      question: 'Cancelas veiculares de garagem continuam abrindo com tag UHF sem internet?',
      answer: 'Sim, com total normalidade. A antena lê a tag colada no para-brisa, a controladora valida o código na memória local e comanda o motor da cancela em menos de um segundo.'
    }
  ],
  whatsappContext: 'dúvidas sobre funcionamento do controle de acesso sem internet'
};
