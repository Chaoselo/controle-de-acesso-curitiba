import { ServiceContent } from '../types';

export const manutencaoService: ServiceContent = {
  slug: 'manutencao',
  title: 'Manutenção de Controle de Acesso em Curitiba',
  seoTitle: 'Manutenção de Controle de Acesso Curitiba | Preventiva',
  metaDescription: 'Manutenção preventiva e corretiva de controle de acesso em Curitiba. Reparo de catracas, fechaduras eletroímã, leitores e cancelas. Peça atendimento!',
  keyword: 'manutencao de controle de acesso Curitiba',
  directAnswer: 'A assistência técnica e manutenção preventiva e corretiva de controle de acesso em Curitiba mantém condomínios, centros comerciais e indústrias operando de forma contínua e segura. Nossa equipe realiza diagnósticos elétricos, ajustes mecânicos de alinhamento, testes de retenção em eletroímãs, calibração de sensores ópticos em catracas e substituição de baterias de no-break desgastadas, evitando que portarias fiquem abertas ou bloqueadas indevidamente.',
  image: {
    src: '/images/manutencao-de-acesso.webp',
    alt: 'Técnico de capacete e luvas realizando manutenção em equipamento instalado na parede',
    width: 1200,
    height: 675
  },
  scope: [
    'Contratos mensais de manutenção preventiva com rotina de visitas programadas e relatórios de conformidade técnica.',
    'Atendimento corretivo ágil para restabelecimento emergencial de portas clausuradas, catracas travadas e cancelas veiculares inoperantes.',
    'Testes de retenção de carga e substituição preventiva de baterias seladas de no-break e fontes de alimentação flutuantes de 12V/13,8V.',
    'Higienização técnica de lentes ópticas de terminais faciais, leitores biométricos e fotocélulas de segurança antiesmagamento.',
    'Revisão mecânica completa de solenoides, molas de tração, rolamentos de giro e microchaves de fim de curso em catracas e torniquetes.',
    'Atualização de firmwares de controladoras de portas, auditoria de integridade do banco de dados e backup preventivo de cadastros.'
  ],
  diagnosticCommonIssues: [
    {
      symptom: 'Leitor facial não reconhece o usuário ou apresenta lentidão excessiva de leitura',
      cause: 'Acúmulo de poeira e gordura no vidro da lente, incidência solar direta frontal gerando contraluz ofuscante (backlight) ou firmware desatualizado com memória de templates sobrecarregada.',
      fix: 'Limpeza especializada com produto neutro para óptica, instalação de pala protetora antirreflexo no topo do terminal ou ajuste do ângulo de inclinação do suporte e calibração de sensibilidade de exposição.'
    },
    {
      symptom: 'Catraca mecânica travada com braço rígido sem girar após autenticação positiva',
      cause: 'Solenoide de destravamento emperrado por resíduos secos, microchave mecânica com contato desgastado ou relé de acionamento da placa controladora colado ou danificado.',
      fix: 'Desmontagem técnica da carcaça, limpeza profunda do mecanismo, lubrificação com spray sintético não condutivo, regulagem das molas de tração e substituição da microchave ou placa com defeito.'
    },
    {
      symptom: 'Cartão ou tag RFID apresentando erro de leitura ou exigindo colar fisicamente no leitor',
      cause: 'Incompatibilidade de radiofrequência (leitor Mifare 13,56 MHz tentando ler cartão 125 kHz EM), cabeamento Wiegand com ruído eletromagnético ou quebra de antena interna do leitor.',
      fix: 'Análise de frequência com analisador de bancada RFID, substituição de cabo sem blindagem por cabo de par trançado blindado aterrado e substituição da leitora com perda de sensibilidade.'
    },
    {
      symptom: 'Fechadura eletroímã soltando com facilidade ao empurrar ou falhando intermitente',
      cause: 'Tensão elétrica insuficiente abaixo de 11V DC na ponta da linha (queda de voltagem por bitola fina), bloco de atraque com parafuso central excessivamente apertado ou oxidação nas lâminas de ferro.',
      fix: 'Ajuste da fonte chaveada para 13,8V, substituição de fiação subdimensionada por cabos de bitola correta, remoção de ferrugem com lixa fina e reaperto da placa de atraque mantendo a borracha de flexibilidade.'
    },
    {
      symptom: 'Tag veicular de para-brisa não abre a cancela ou exige parar a centímetros da guarita',
      cause: 'Antena receptora UHF descalibrada ou desalinhada em relação à rampa de rolamento, película solar com base metálica bloqueando o sinal de radiofrequência ou perda de ganho do transmissor.',
      fix: 'Reorientação do lóbulo de irradiação da antena na pista, reinstalação da tag adesiva na faixa de retícula pontilhada do para-brisa (área sem bloqueio térmico) ou calibração de potência de emissão no leitor.'
    },
    {
      symptom: 'Botoeira de saída não destrava o eletroímã da porta de pedestres na clausura',
      cause: 'Rompimento mecânico do botão interno por excesso de força de usuários, oxidação dos contatos secos (NF) ou quebra de cabo na tubulação entre a botoeira e a controladora.',
      fix: 'Substituição do botão físico desgastado por botoeira no-touch touchless em aço inoxidável e teste de continuidade elétrica com multímetro no condutor elétrico da linha.'
    },
    {
      symptom: 'Alarme sonoro de porta aberta disparando continuamente mesmo com o portão encostado',
      cause: 'Sensor magnético reed-switch descalibrado com folga excessiva entre as partes (acima de 5mm), imã quebrado por batida de porta ou cabo do sensor em curto-circuito.',
      fix: 'Realinhamento do sensor magnético em relação à folha da porta, ajuste da mola aérea hidráulica para fechar a porta no batente sem recuo e substituição do sensor magnético avariado.'
    },
    {
      symptom: 'Cancela veicular descendo sobre o teto do veículo ou batendo no capô durante a passagem',
      cause: 'Laço indutivo de piso descalibrado na sensibilidade, cabo do laço cortado na junta de dilatação da calçada ou fotocélula de barreira com espelho reflexivo sujo ou desalinhado.',
      fix: 'Limpeza e alinhamento do feixe óptico da fotocélula de segurança, calibração do módulo detector de massa metálica no painel da cancela e vedação do laço com massa asfáltica polimérica.'
    },
    {
      symptom: 'Intertravamento de eclusa travado com ambas as portas trancadas impedindo a circulação',
      cause: 'Sensor de status de uma das portas indicando falso fechamento, travamento lógico da placa de intertravamento ou falha no circuito de reset manual da guarita.',
      fix: 'Checagem dos LEDs de diagnóstico da controladora de eclusa, substituição de sensor defeituoso que impede o ciclo e instalação de chave seletora de emergência para liberação assistida.'
    },
    {
      symptom: 'Sistema de controle de acesso reiniciando ou apagando imediatamente quando a luz da Copel cai',
      cause: 'Baterias seladas de chumbo-ácido do no-break completamente secas, sulfatadas ou com mais de 2 anos de uso, incapazes de reter carga sob demanda.',
      fix: 'Teste de carga sob esforço com medidor resistivo de baterias, descarte ecológico das unidades danificadas e instalação de novas baterias estacionárias seladas de ciclo profundo.'
    },
    {
      symptom: 'Teclado numérico touch com teclas falhando ou números apagados e sem resposta ao toque',
      cause: 'Infiltração de água da chuva na membrana capacitiva por falta de vedação de silicone no perímetro externo ou desgaste natural por atrito contínuo em teclas mecânicas.',
      fix: 'Substituição do teclado por modelo blindado antivandalismo com classificação IP66, vedação perimetral com silicone neutro e reprogramação das matrizes de senhas.'
    },
    {
      symptom: 'Painel do sistema perde comunicação com as controladoras de portas e catracas',
      cause: 'Conflito de endereço IP na rede local, cabo de rede Cat6 danificado por roedores em tubulações ou travamento de porta TCP na placa de rede da controladora.',
      fix: 'Atribuição de IP fixo fora da faixa de DHCP do roteador, crimpagem de novos conectores RJ45 blindados e reinicialização a frio das placas controladoras de portas.'
    }
  ],
  processSteps: [
    {
      step: '01',
      title: 'Abertura de Chamado e Triagem Prévia',
      description: 'O cliente relata o defeito ou o comportamento anômalo ao nosso suporte técnico via WhatsApp. Nossa engenharia faz uma triagem preliminar dos sintomas para despachar o técnico já com peças e ferramentas de reposição compatíveis.'
    },
    {
      step: '02',
      title: 'Deslocamento e Diagnóstico em Campo',
      description: 'Nosso técnico comparece ao local em Curitiba munido de multímetro calibrado, analisadores de radiofrequência e peças sobressalentes, executando medições elétricas de tensão, corrente de atraque de eletroímãs e integridade de cabos.'
    },
    {
      step: '03',
      title: 'Reparo Imediato e Substituição de Componentes',
      description: 'Realizamos os ajustes de fixação mecânica, trocas de baterias desgastadas, regulagem de molas hidráulicas ou substituição de placas controladoras e sensores ópticos, reativando o sistema sem deixar a portaria desprotegida.'
    },
    {
      step: '04',
      title: 'Testes de Esforço e Validação de Segurança',
      description: 'Executamos testes exaustivos de acionamento repetido, simulação de queda de energia na chave geral, verificação de sensores de alarme de porta aberta e validação de passagem em todas as credenciais ativas do condomínio.'
    },
    {
      step: '05',
      title: 'Relatório Técnico e Recomendações Preventivas',
      description: 'Emitimos a Ordem de Serviço digital detalhada contendo a descrição exata das intervenções efetuadas, leituras elétricas aferidas, peças aplicadas e orientações técnicas para o síndico ou gestor de segurança predial.'
    }
  ],
  faqs: [
    {
      question: 'Vocês atendem equipamentos de marcas que não foram instaladas por vocês?',
      answer: 'Sim! Atendemos e realizamos manutenção em praticamente todas as marcas consagradas de controle de acesso do mercado brasileiro (como Intelbras, Control iD, Linear-HCS, ZKTeco, Henry, Nice, PPA e outras). Nossa equipe faz uma vistoria prévia para avaliar a controladora e fechaduras existentes e assumir o contrato de assistência preventiva ou corretiva.'
    },
    {
      question: 'Qual a periodicidade ideal recomendada para manutenção preventiva em condomínios?',
      answer: 'Para condomínios residenciais e centros comerciais em Curitiba, a periodicidade ideal é mensal ou bimestral. Nesse intervalo, verificamos o nível de carga e sulfatação de baterias de no-break, calibramos o óleo de molas aéreas que sofrem com as baixas temperaturas do inverno curitibano e limpamos sensores de passagem antes que causem travamentos.'
    },
    {
      question: 'Como funciona o contrato de manutenção preventiva em comparação a chamados avulsos?',
      answer: 'O contrato mensal oferece previsibilidade orçamentária, visitas periódicas com check-list preventivo completo, prioridade no atendimento de chamados emergenciais e descontos expressivos em peças de reposição. Já o chamado avulso atende situações pontuais de quebra para clientes que ainda não possuem vínculo contratual de manutenção.'
    },
    {
      question: 'Por que fechaduras eletroímã perdem a força de atração com o passar dos meses?',
      answer: 'A perda de força costuma decorrer de três fatores principais: oxidação superficial nas lâminas de ferro silício do eletroímã provocada pela umidade, queda de voltagem na fonte de alimentação colmeia por envelhecimento de capacitores ou aperto inadequado do parafuso central do bloco de atraque, impedindo o acoplamento magnético plano e total da porta.'
    },
    {
      question: 'O que fazer caso a catraca de acesso da academia trave no horário de maior fluxo?',
      answer: 'Em situações de emergência de travamento mecânico, o operador pode acionar a chave mecânica de desarme ou desligar o circuito do relé para que a catraca opere em modo livre de passagem (giro solto), garantindo que os alunos continuem entrando até a chegada do técnico especializado.'
    }
  ],
  relatedSolutions: ['catracas', 'fechaduras-eletromagneticas', 'reconhecimento-facial', 'cancelas-e-acesso-veicular'],
  relatedServices: ['instalacao-e-projeto', 'locacao'],
  whatsappContext: 'manutenção de controle de acesso em Curitiba'
};
