import { SolutionContent } from '../types';

export const softwareDeGestaoSolution: SolutionContent = {
  slug: 'software-de-gestao',
  title: 'Software de Controle de Acesso em Curitiba',
  seoTitle: 'Software de Controle de Acesso Curitiba | Gestão Portaria',
  metaDescription: 'Software de controle de acesso para condomínios e empresas em Curitiba e RMC. Gestão na nuvem, relatórios e auditoria. Solicite seu orçamento técnico!',
  keyword: 'software de controle de acesso',
  directAnswer: 'O software de controle de acesso centraliza o gerenciamento de cadastros, permissões de portas e auditoria de entradas e saídas de condomínios e empresas. Em Curitiba e Região Metropolitana, a plataforma permite sincronizar regras com controladoras em rede, gerando relatórios de passagens e facilitando a entrada de visitantes. As controladoras físicas continuam operando de forma autônoma na falta de internet, assegurando proteção ininterrupta nas portarias.',
  // TODO: foto real
  image: {
    src: '/images/software-gestao-acesso.webp',
    alt: 'Dashboard de software de controle de acesso em monitor de computador em Curitiba',
    width: 800,
    height: 600
  },
  howItWorks: [
    'Modelos de implantação em servidor local ou nuvem: O sistema pode operar instalado em servidor físico local na guarita ou em nuvem (SaaS). A estrutura local não depende de internet para cadastros rápidos, enquanto a nuvem simplifica manutenções, permite acesso por app para síndicos e centraliza filiais.',
    'Sincronização bidirecional e operação autônoma das controladoras: O software envia as permissões para a memória das placas nas portas e catracas. Em geral, as controladoras operam com autonomia total: mesmo que a internet caia, os usuários sincronizados continuam acessando normalmente.',
    'Cadastro de visitantes com validade temporal programada: A plataforma permite gerar autorizações provisórias com data e faixa de horário de expiração automática. Moradores e porteiros podem emitir convites com QR Code ou cadastrar prestadores temporários, bloqueando o acesso após a vigência.',
    'Modelos de licenciamento e políticas de fabricantes: O investimento pode se dar por licença vitalícia ou planos de mensalidade (SaaS). A compatibilidade entre marcas distintas varia conforme o fabricante, exigindo avaliação técnica prévia para integrar hardwares de linhas diferentes.',
    'Rotinas de auditoria, limpeza de inativos e exportação: O sistema mantém trilhas com registros de tentativas negadas e portas abertas. O software oferece ferramentas para inativação em lote de cadastros obsoletos e exportação estruturada de logs em CSV ou PDF para assembleias e auditorias.'
  ],
  whenToChoose: [
    'Condomínios residenciais em Curitiba com portaria própria ou remota que demandam cadastro ágil de condôminos, prestadores e veículos na garagem.',
    'Centros empresariais e edifícios corporativos que necessitam gerenciar permissões diferenciadas por andares, salas comerciais e horários de expediente.',
    'Parques industriais e centros logísticos na CIC e região que necessitam rastrear turnos operacionais de centenas de colaboradores em catracas e torniquetes.',
    'Empresas que precisam emitir relatórios auditáveis periódicos de passagens para conformidade com normas internas de governança e medicina do trabalho.'
  ],
  advantages: [
    'Autonomia local sem paralisações por falta de internet: Como as regras são gravadas nas placas de acesso, as portas continuam liberando os moradores mesmo com queda na conexão externa.',
    'Emissão ágil de convites QR Code para visitantes: Reduz a formação de filas na portaria ao permitir que moradores enviem chaves temporárias de acesso pelo celular para seus convidados.',
    'Rastreabilidade completa com relatórios exportáveis: Facilita a auditoria de incidentes de segurança com filtros por usuário, porta, intervalo de datas e motivos de bloqueio.',
    'Controle centralizado de múltiplos pontos e filiais: Permite que uma central administrativa gerencie de forma unificada portarias sociais, garagens, academias e filiais corporativas.',
    'Ferramentas para governança de cadastros inativos: Possibilita bloquear automaticamente prestadores temporários vencidos e excluir acessos de funcionários desligados da empresa.'
  ],
  limitations: [
    'Compatibilidade limitada entre fabricantes distintos: A maioria dos softwares corporativos opera de forma nativa apenas com a linha de hardware do próprio fabricante, exigindo módulos de integração para sistemas legados.',
    'Dependência de políticas de licença ou mensalidade contínua: Softwares em nuvem demandam pagamentos periódicos de hospedagem, enquanto softwares locais exigem atenção com rotinas manuais de backup do banco de dados.',
    'Exigência de treinamento dos operadores prediais: A eficiência da gestão depende de porteiros e síndicos bem instruídos para não cadastrar dados genéricos ou duplicados no banco.',
    'Necessidade de rede local cabeada estável: Embora as controladoras operem offline, a sincronização instantânea de novos cadastros e a visualização de eventos em tempo real dependem de switches e rede física em bom estado.'
  ],
  lgpdNote: 'O banco de dados do software de controle de acesso armazena informações pessoais de moradores, colaboradores e visitantes temporários, incluindo nomes, documentos, placas de veículos e histórico de deslocamento. O controlador deve manter políticas ativas de governança conforme a LGPD (Lei nº 13.709/2018), estabelecendo prazos justificados de retenção, perfis restritos de acesso aos operadores da guarita e garantia de descarte seguro de cadastros inativos. Este texto é informativo e não substitui a orientação de um profissional jurídico.',
  integrations: [
    'Controladoras de acesso multiponto interligadas via rede TCP/IP com protocolo proprietário ou aberto.',
    'Terminais de reconhecimento facial para sincronização remota de cadastros e envio de templates.',
    'Baterias de catracas de pedestres e cancelas automáticas de veículos com comunicação em tempo real.',
    'Módulos de recepção de visitantes com webcams para captura de fotos de identificação e leitor de documentos.',
    'Sistemas de circuito fechado de televisão (CFTV) para associação de imagens gravadas aos eventos de porta.'
  ],
  installationSteps: [
    {
      step: '01',
      title: 'Levantamento da topologia e compatibilidade',
      description: 'Análise técnica presencial em Curitiba dos equipamentos existentes, inspecionando marcas e modelos das placas controladoras para definir o sistema mais adequado, seja em servidor local ou nuvem.'
    },
    {
      step: '02',
      title: 'Implantação do servidor e configuração de rede',
      description: 'Instalação do banco de dados no servidor dedicado da guarita ou ativação do ambiente virtual em nuvem, parametrizando endereços IP fixos para comunicação com as placas de porta.'
    },
    {
      step: '03',
      title: 'Estruturação de setores e grupos de horários',
      description: 'Mapeamento detalhado das áreas físicas do condomínio, estabelecendo regras de acesso customizadas para moradores, colaboradores fixos, prestadores de serviços e jornadas de fins de semana.'
    },
    {
      step: '04',
      title: 'Importação do banco e configuração de backup',
      description: 'Migração segura das listas e cadastros existentes de usuários para o novo banco de dados, programando rotinas diárias e automáticas de backup externo para contingência.'
    },
    {
      step: '05',
      title: 'Treinamento operacional e homologação',
      description: 'Treinamento presencial completo dos porteiros, síndicos e gestores patrimoniais em Curitiba, ensinando procedimentos práticos para liberação de convites QR Code e emissão de relatórios de auditoria.'
    }
  ],
  maintenanceAndSupport: [
    'Auditoria periódica de integridade do banco de dados e validação da execução correta de rotinas de backup externo.',
    'Limpeza de cadastros inativos e revisão dos privilégios de acesso dos operadores e porteiros no software.',
    'Aplicação de pacotes de atualização de segurança e melhorias de interface fornecidas pelo desenvolvedor do sistema.',
    'Suporte técnico presencial e remoto em Curitiba para solução ágil de falhas de comunicação com as controladoras.'
  ],
  faqs: [
    {
      question: 'O controle de acesso físico para de funcionar se o software ou a internet caírem?',
      answer: 'Não, as portas e catracas não param de funcionar. As controladoras de hardware profissionais operam de forma autônoma: elas mantêm na memória flash interna todos os usuários cadastrados e as regras de horários. Mesmo que o servidor do software esteja desligado ou sem internet, as permissões são validadas normalmente na borda.'
    },
    {
      question: 'Qual a principal diferença entre um software em nuvem e um instalado em servidor local?',
      answer: 'O software em nuvem (SaaS) permite que síndicos e administradores gerenciem acessos de qualquer computador ou celular, dispensando servidores na portaria e facilitando atualizações. Já o software local fica instalado em uma máquina física no próprio prédio, exigindo controle mais rígido de backups, mas operando independentemente de links externos de internet.'
    },
    {
      question: 'Posso usar o mesmo software com equipamentos de fabricantes diferentes?',
      answer: 'A compatibilidade entre marcas distintas varia muito no mercado de segurança eletrônica. A maioria dos fabricantes desenvolve softwares proprietários voltados primariamente para seus próprios equipamentos. Quando o imóvel possui controladoras de marcas variadas, é necessário adotar softwares abertos de mercado que possuam drivers específicos para cada marca.'
    },
    {
      question: 'Como funciona a exclusão ou bloqueio de usuários inativos no sistema?',
      answer: 'O administrador pode filtrar usuários sem registros de passagem nos últimos meses ou selecionar ex-funcionários e desligá-los com um clique. O software envia instantaneamente o comando de exclusão para todas as controladoras da rede, garantindo que o cartão ou biometria seja rejeitado de forma imediata em todos os leitores.'
    },
    {
      question: 'O software permite exportar relatórios de entrada e saída para comprovação jurídica?',
      answer: 'Sim, a plataforma permite gerar relatórios detalhados contendo data, hora exata, ponto de acesso, nome do titular e tipo de autenticação utilizada. Os dados podem ser exportados em formatos estruturados como CSV, Excel ou PDF assinável, servindo para auditorias de condomínio, apuração de incidentes ou conferência trabalhista.'
    }
  ],
  relatedSolutions: ['catracas', 'reconhecimento-facial', 'cancelas-e-acesso-veicular', 'biometria', 'cartao-e-tag-rfid'],
  relatedSegments: ['condominios-residenciais', 'condominios-comerciais', 'industrias', 'empresas-e-escritorios'],
  relatedCities: ['curitiba', 'pinhais', 'sao-jose-dos-pinhais', 'araucaria'],
  whatsappContext: 'software de controle de acesso para condomínio ou empresa'
};
