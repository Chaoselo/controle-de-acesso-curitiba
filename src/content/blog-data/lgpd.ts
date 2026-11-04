import { BlogPostContent } from '../types';

export const lgpdContent: BlogPostContent = {
  slug: 'controle-de-acesso-e-lgpd',
  title: 'Controle de Acesso e LGPD: Guia para Condomínios',
  seoTitle: 'Controle de Acesso e LGPD: Guia para Condomínios',
  metaDescription: 'Saiba como adequar o controle de acesso biométrico e facial à LGPD em condomínios e empresas de Curitiba. Cuidados com dados sensíveis e segurança.',
  author: 'Equipe Controle de Acesso Curitiba',
  publishedDate: '[[PREENCHER: data de publicação]]',
  readTime: '8 min de leitura',
  summary: 'A implementação de tecnologias de reconhecimento facial e biometria digital em condomínios e empresas deve atender com rigor aos preceitos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Como a biometria é classificada como dado pessoal sensível, síndicos e gestores em Curitiba precisam adotar equipamentos com criptografia irreversível por templates, fornecer meios alternativos de acesso e garantir a governança adequada de registros.',
  sections: [
    {
      heading: 'O Que a LGPD Exige no Controle de Acesso Físico?',
      paragraphs: [
        'A entrada em vigor da Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018) transformou a gestão de portarias em todo o Brasil. O que antes era tratado de maneira informal — como cadernos de papel com anotações de CPF ou planilhas desprotegidas com fotos de visitantes — passou a exigir estrita conformidade técnica e jurídica.',
        'Em condomínios residenciais e edifícios corporativos em Curitiba, a busca por maior segurança através de reconhecimento facial e biometria digital gerou dúvidas recorrentes: o condomínio pode exigir a biometria dos moradores? É obrigatório colher termo de consentimento assinado de cada morador? Como devem ser tratados os dados de entregadores e prestadores de serviço?',
        'Para esclarecer essas questões, apresentamos as diretrizes essenciais de governança, ressaltando desde logo: este texto é informativo e não substitui a orientação de um profissional jurídico.'
      ],
      subsections: [
        {
          heading: 'Enquadramento da Biometria como Dado Pessoal Sensível',
          paragraphs: [
            'Conforme estabelece o Artigo 5º, inciso II da LGPD, os dados biométricos — o que abrange tanto as minúcias de impressões digitais quanto as características geométricas da face — são categorizados expressamente como dados pessoais sensíveis. Esse status confere a eles um nível de proteção legal significativamente superior ao de dados comuns como nome e e-mail.',
            'O motivo dessa proteção especial é evidente: enquanto uma senha numérica vazada pode ser alterada em segundos, um indivíduo não pode trocar sua impressão digital ou a estrutura de sua face caso haja um vazamento de banco de dados. Portanto, qualquer tratamento indevido de biometria acarreta riscos elevados de segurança e pesadas sanções regulatórias da ANPD (Autoridade Nacional de Proteção de Dados).'
          ]
        },
        {
          heading: 'Bases Legais Aplicáveis ao Controle de Portaria',
          paragraphs: [
            'Para que o condomínio ou empresa colete e processe dados de acesso de forma lícita, a operação deve estar fundamentada em uma das hipóteses legais previstas nos Artigos 7º e 11 da LGPD. As bases mais frequentemente utilizadas na segurança predial são:',
            '1. Proteção da vida ou da incolumidade física do titular ou de terceiros (Art. 7º, VII e Art. 11, II, "e"): o controle de portaria visa resguardar a integridade física de quem reside ou trabalha no edifício contra invasões de criminosos.',
            '2. Legítimo interesse do controlador (Art. 7º, IX): aplicável para a salvaguarda e vigilância do patrimônio comum do condomínio.',
            '3. Consentimento específico e destacado (Art. 11, I): embora o consentimento seja uma base comum, a doutrina jurídica recomenda fundamentar a operação prioritariamente na proteção da vida e segurança patrimonial aprovada coletivamente em convenção ou assembleia de condôminos.'
          ]
        }
      ]
    },
    {
      heading: 'Segurança Técnica: Templates Matemáticos vs Fotos Abertas',
      paragraphs: [
        'A principal garantia de conformidade técnica está na escolha da arquitetura dos equipamentos instalados. Leitores biométricos e terminais faciais profissionais homologados não armazenam fotografias completas de alta resolução dos moradores.',
        'Em vez disso, o algoritmo do leitor extrai coordenadas vetoriais específicas e as submete a um algoritmo criptográfico de dispersão (hash) de sentido único, gerando um código alfanumérico denominado template biométrico.',
        'Mesmo na hipótese remota de um invasor obter acesso à memória física da controladora, esse código matemático é irreversível: não é possível recompor o rosto ou a digital da pessoa a partir do arquivo matemático. Esse mecanismo elimina o risco de uso indevido da imagem do titular fora do contexto da portaria.'
      ],
      subsections: [
        {
          heading: 'Obrigação de Oferecer Alternativa Não Biométrica',
          paragraphs: [
            'Um dos princípios fundamentais da LGPD é a não discriminação e a proporcionalidade. O condomínio ou estabelecimento não pode barrar ou impedir o acesso de um condômino, prestador ou visitante que não possa ou prefira não cadastrar seus dados biométricos.',
            'A administração deve obrigatoriamente disponibilizar um método alternativo de autenticação — como cartão de proximidade RFID de tecnologia Mifare criptografada, tag veicular ou chaveiro digital. A recusa do morador em cadastrar a face não pode gerar constrangimento nem cobrança de taxas discriminatórias.'
          ]
        },
        {
          heading: 'Tratamento de Dados de Menores de Idade',
          paragraphs: [
            'O Artigo 14 da LGPD estipula regras rígidas para o tratamento de dados pessoais de crianças e adolescentes. O cadastro biométrico de menores em portarias condominiais exige o consentimento específico e em destaque fornecido por pelo menos um dos pais ou pelo responsável legal.',
            'As fichas de cadastramento do condomínio devem conter campo próprio para a assinatura dos pais, descrevendo claramente a finalidade restrita de segurança predial.'
          ]
        }
      ]
    },
    {
      heading: 'Boas Práticas de Governança para Síndicos e Administradoras',
      paragraphs: [
        'Para assegurar tranquilidade jurídica ao empreendimento, recomenda-se a adoção de um protocolo formal de governança de dados:',
        'Defina prazos de retenção de dados: registros de entrada e saída de moradores e visitantes não devem ser guardados indefinidamente. Estabeleça uma política de descarte automático após o período necessário para fins de segurança (geralmente entre 30 e 90 dias, salvo determinação judicial).',
        'Controle o acesso administrativo ao sistema: apenas funcionários treinados e autorizados da portaria ou administração devem possuir senhas nominais de acesso ao sistema de cadastro, com registro de log de quem visualizou ou alterou os dados.',
        'Formalize termos com terceirizadas: ao contratar empresas de portaria remota ou manutenção técnica, exija cláusulas de confidencialidade e responsabilidade solidária com a LGPD nos contratos de prestação de serviços.'
      ]
    }
  ],
  internalLinks: [
    { text: 'política de privacidade e LGPD', url: '/politica-de-privacidade/', context: 'Consulte nossa' },
    { text: 'leitores biométricos digitais', url: '/solucoes/biometria/', context: 'Entenda a segurança dos' },
    { text: 'condomínios residenciais', url: '/segmentos/condominios-residenciais/', context: 'Veja a implantação em' },
    { text: 'planejar uma instalação adequada às normas', url: '/orcamento/', context: 'Acesse nossa página de orçamento para' }
  ],
  faqs: [
    {
      question: 'O síndico pode ser responsabilizado por vazamento de dados no condomínio?',
      answer: 'Sim. Na qualidade de representante legal e gestor do condomínio (controlador dos dados), o síndico responde pela ausência de medidas razoáveis de segurança e governança adotadas na portaria.'
    },
    {
      question: 'O condomínio pode exigir que visitantes forneçam a biometria facial?',
      answer: 'A coleta pode ser solicitada como protocolo de segurança predial, mas deve ser facultada a apresentação de documento de identificação com conferência presencial caso o visitante recuse o cadastro biométrico.'
    },
    {
      question: 'Os funcionários da portaria podem ter acesso livre às fotos dos condôminos?',
      answer: 'Não. O acesso deve ser restrito e protegido por perfis de usuário com senhas individuais, ficando vedado o download, cópia ou compartilhamento de cadastros por aplicativos de mensagens.'
    }
  ],
  whatsappContext: 'dúvidas sobre controle de acesso e adequação à LGPD'
};
