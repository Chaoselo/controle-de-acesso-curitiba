/**
 * Configurações institucionais do site Controle de Acesso Curitiba
 * 
 * REGRA RIGOROSA DE FATOS:
 * Qualquer dado real não confirmado permanece como "[[PREENCHER: ...]]".
 * Se um dado contiver "[[PREENCHER", a interface omite automaticamente
 * a seção ou campo dependente para garantir veracidade absoluta.
 */

export const siteConfig = {
  name: "Controle de Acesso Curitiba",
  brandSignature: "por Intelsecsul Segurança Eletrônica",
  domain: "https://controledeacessocuritiba.com.br",
  defaultOgImage: "/images/og-image-default.webp",

  // Contato e atendimento
  phone: "(41) 99844-8409",
  phoneRaw: "+5541998448409",
  whatsapp: "5541998448409",
  whatsappFormatted: "(41) 99844-8409",
  email: "[[PREENCHER: Email comercial]]",

  // Empresa mãe / parceira oficial
  parentCompany: {
    name: "Intelsecsul Segurança Eletrônica",
    site: "https://intelsecsul.com.br",
    services: [
      { name: "Câmeras de Segurança (CFTV)", url: "https://intelsecsul.com.br" },
      { name: "Alarmes Monitorados", url: "https://intelsecsul.com.br" },
      { name: "Cerca Elétrica e Concertina", url: "https://intelsecsul.com.br" },
    ]
  },

  // Dados cadastrais e endereço (sujeitos à regra de não-invenção)
  cnpj: "[[PREENCHER: CNPJ da empresa]]",
  address: {
    street: "[[PREENCHER: Logradouro e número]]",
    neighborhood: "[[PREENCHER: Bairro]]",
    city: "Curitiba",
    state: "PR",
    postalCode: "[[PREENCHER: CEP]]",
    country: "BR"
  },
  openingHours: "[[PREENCHER: Horário de funcionamento, ex: Seg a Sex 08:00 às 18:00]]",
  experienceYears: "[[PREENCHER: Anos de mercado]]",
  clientsCount: "[[PREENCHER: Número de clientes atendidos]]",
  certifications: "[[PREENCHER: Certificações técnicas da equipe]]",
  brandPartnerships: "[[PREENCHER: Marcas homologadas / parceiras (ex: Intelbras, Control iD, Linear-HCS, Hikvision)]]",

  // Região Metropolitana atendida
  citiesServed: [
    { name: "Curitiba", slug: "curitiba" },
    { name: "Pinhais", slug: "pinhais" },
    { name: "São José dos Pinhais", slug: "sao-jose-dos-pinhais" },
    { name: "Araucária", slug: "araucaria" },
    { name: "Almirante Tamandaré", slug: "almirante-tamandare" },
    { name: "Colombo", slug: "colombo" },
    { name: "Campo Largo", slug: "campo-largo" },
    { name: "Fazenda Rio Grande", slug: "fazenda-rio-grande" },
    { name: "Campo Magro", slug: "campo-magro" },
    { name: "Quatro Barras", slug: "quatro-barras" },
    { name: "Campina Grande do Sul", slug: "campina-grande-do-sul" },
  ],

  // Menu de navegação principal
  mainNav: [
    { label: "Soluções", href: "/solucoes/" },
    { label: "Segmentos", href: "/segmentos/" },
    { label: "Serviços", href: "/servicos/" },
    { label: "Cidades", href: "/cidades/" },
    { label: "Sobre", href: "/sobre/" },
    { label: "Contato", href: "/contato/" },
  ]
};

/**
 * Função utilitária para verificar se um dado foi preenchido
 * Retorna false se o valor for nulo, indefinido ou contiver o marcador "[[PREENCHER"
 */
export function isFieldFilled(value: string | undefined | null): boolean {
  if (!value) return false;
  return !value.includes("[[PREENCHER");
}
