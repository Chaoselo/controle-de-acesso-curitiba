import { FAQItem } from './types';

export const generalFaqList: FAQItem[] = [
  {
    question: 'O que é um sistema de controle de acesso e para que serve?',
    answer: 'Um sistema de controle de acesso é uma solução eletrônica e mecânica que gerencia, autentica e restringe a entrada e saída de pessoas e veículos em portas, portões, catracas e garagens. Ele substitui chaves manuais por tecnologias como biometria digital, reconhecimento facial, cartões RFID ou senhas, gerando relatórios auditáveis com data, hora e ponto exato de cada passagem.'
  },
  {
    question: 'Qual a diferença entre Controle de Acesso Curitiba e Intelsecsul?',
    answer: 'A Controle de Acesso Curitiba é uma divisão especializada da Intelsecsul Segurança Eletrônica com foco exclusivo no nicho de controle de acesso físico, catracas, cancelas veiculares, biometria e fechaduras eletromagnéticas. Os demais serviços de segurança patrimonial — como câmeras de monitoramento (CFTV), alarmes monitorados e cerca elétrica — permanecem disponíveis através do site principal da empresa (intelsecsul.com.br).'
  },
  {
    question: 'Quais cidades da Região Metropolitana de Curitiba são atendidas?',
    answer: 'Atendemos Curitiba e mais 10 municípios da Região Metropolitana: Pinhais, São José dos Pinhais, Araucária, Almirante Tamandaré, Colombo, Campo Largo, Fazenda Rio Grande, Campo Magro, Quatro Barras e Campina Grande do Sul, com suporte presencial para condomínios residenciais, comerciais e indústrias.'
  },
  {
    question: 'Como funciona a solicitação de orçamento e a vistoria técnica?',
    answer: 'Você pode pedir orçamento pelo WhatsApp (41) 99844-8409 ou pelo formulário. Fazemos uma triagem inicial e, quando necessário, agendamos uma visita técnica para avaliar o local.'
  },
  {
    question: 'Os sistemas continuam funcionando durante quedas de energia elétrica em Curitiba?',
    answer: 'Em projetos de controle de acesso, o ideal é prever nobreak ou baterias para manter leitores, controladoras e fechaduras funcionando por algum tempo em quedas de energia. A autonomia depende do dimensionamento e do consumo dos equipamentos, e o comportamento das portas sem energia (travadas ou liberadas) depende do tipo de fechadura e das regras de saída de emergência.'
  },
  {
    question: 'Os equipamentos de biometria e reconhecimento facial estão em conformidade com a LGPD?',
    answer: 'Biometria e reconhecimento facial envolvem dado pessoal sensível, e a conformidade com a LGPD depende de como o condomínio ou a empresa trata esses dados: finalidade definida, informação aos titulares, acesso restrito aos cadastros e prazo de guarda. Em geral, os equipamentos convertem a digital ou o rosto em um modelo matemático (template) em vez de guardar a imagem, mas o tratamento exato varia conforme o fabricante. Este texto é informativo e não substitui a orientação de um profissional jurídico.'
  },
  {
    question: 'Qual a diferença entre fechadura eletroímã (fail-safe) e fecho elétrico (fail-secure)?',
    answer: 'A fechadura eletromagnética é do tipo fail-safe: necessita de corrente elétrica contínua para manter a porta travada; se a energia for cortada ou o alarme de incêndio for acionado, ela destrava imediatamente, garantindo a rota de fuga. Já os fechos do tipo fail-secure permanecem mecanicamente travados mesmo sem energia, sendo indicados para cofres ou ambientes onde a contenção perimetral é mandatória.'
  },
  {
    question: 'Como os sistemas de controle de acesso atendem às normas do Corpo de Bombeiros?',
    answer: 'As portas em rotas de fuga devem permitir a saída em emergência, por exemplo com botão de emergência (quebra-vidro) ou liberação automática da fechadura em caso de comando de alarme. As exigências variam conforme o local e devem ser conferidas com o responsável técnico e com as normas de segurança contra incêndio aplicáveis.'
  },
  {
    question: 'Os equipamentos são compatíveis com empresas de portaria remota e virtual?',
    answer: 'Depende da compatibilidade. Muitos equipamentos usam protocolos comuns de mercado, como Wiegand, OSDP e comunicação IP, mas a integração com um software ou uma central de portaria remota específica deve ser verificada antes da compra.'
  },
  {
    question: 'Qual a diferença entre manutenção preventiva periódica e corretiva?',
    answer: 'A manutenção preventiva envolve visitas programadas para limpeza de sensores ópticos, calibração mecânica de molas aéreas, testes de retenção magnética, verificação de baterias de no-break e atualização de firmware, prevenindo paradas inesperadas. A manutenção corretiva é o atendimento emergencial para diagnosticar e consertar falhas já ocorridas.'
  },
  {
    question: 'Quais as vantagens da tag veicular adesiva UHF em relação ao controle remoto comum?',
    answer: 'A tag veicular UHF é colada no para-brisa e lida por uma antena a alguns metros de distância, conforme o modelo e a antena, permitindo abrir a cancela sem o motorista parar. Não usa pilhas. Como qualquer credencial RFID, a proteção contra cópia depende da tecnologia, e a tag perdida pode ser bloqueada no sistema. Algumas tags têm lacre que se rompe ao serem removidas, mas isso varia conforme o modelo.'
  },
  {
    question: 'Quanto tempo leva a instalação de controle de acesso em um condomínio?',
    answer: 'O prazo depende do número de pontos, da infraestrutura existente (eletrodutos, cabos e energia) e da obra necessária. A visita técnica avalia o local e define o cronograma.'
  },
  {
    question: 'Quais as garantias fornecidas para os equipamentos e para a instalação?',
    answer: 'A garantia depende do fabricante de cada equipamento e das condições do serviço contratado. Essas condições constam na proposta.'
  },
  {
    question: 'O projeto contempla regras de acessibilidade da norma ABNT NBR 9050?',
    answer: 'O projeto deve prever passagem acessível para cadeirantes e pessoas com mobilidade reduzida, seguindo a ABNT NBR 9050, incluindo a largura livre da passagem e a altura de leitores e botoeiras. As medidas são definidas no levantamento do local.'
  }
];
