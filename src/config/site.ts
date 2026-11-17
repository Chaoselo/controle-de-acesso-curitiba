/**
 * Configurações institucionais do site Controle de Acesso Curitiba
 * 
 * REGRA RIGOROSA DE FATOS:
 * Qualquer dado real não confirmado permanece como "[[PREENCHER: ...]]".
 * Se um dado contiver "[[PREENCHER", a interface omite automaticamente
 * a seção ou campo dependente para manter precisão factual.
 */

export const siteConfig = {
  name: "Controle de Acesso Curitiba",
  brandSignature: "Unidade especializada Intelsecsul Segurança Eletrônica",
  domain: "https://controledeacessocuritiba.com.br",
  defaultOgImage: "/og-default.jpg",

  // Contato e atendimento
  phone: "(41) 99844-8409",
  phoneRaw: "+5541998448409",
  whatsapp: "5541998448409",
  whatsappFormatted: "(41) 99844-8409",
  email: "[[PREENCHER: Email comercial]]",

  // Empresa mãe / sites do mesmo grupo
  parentCompany: {
    name: "Intelsecsul Segurança Eletrônica",
    site: "https://intelsecsul.com.br",
    cftvSite: "https://cftvcuritiba.com.br",
    googleReviewUrl: "https://share.google/dNAmcesFz6QV1vroW",
    services: [
      { name: "Câmeras de Segurança (CFTV)", url: "https://cftvcuritiba.com.br" },
      { name: "Alarmes Monitorados", url: "https://intelsecsul.com.br" },
      { name: "Cerca Elétrica e Concertina", url: "https://intelsecsul.com.br" },
    ]
  },

  // Dados cadastrais e endereço (sujeitos à regra de não-invenção)
  cnpj: "52.535.434/0001-90",
  address: {
    street: "[[PREENCHER: Logradouro e número]]",
    neighborhood: "[[PREENCHER: Bairro]]",
    city: "Curitiba",
    state: "PR",
    postalCode: "[[PREENCHER: CEP]]",
    country: "BR"
  },
  openingHours: "Segunda a Sexta: 08:00 às 18:00",
  experienceYears: "[[PREENCHER: Anos de mercado]]",
  clientsCount: "[[PREENCHER: Número de clientes atendidos]]",
  certifications: "[[PREENCHER: Certificações técnicas da equipe]]",
  brandPartnerships: "[[PREENCHER: Marcas com as quais trabalha]]",

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

  // Selos institucionais oficiais da empresa
  trustBadges: [
    "Equipe técnica própria",
    "Orçamento sem custo",
    "Atendimento em toda a Região Metropolitana",
    "Suporte após a instalação",
  ],

  // Menu de navegação principal
  mainNav: [
    { label: "Soluções", href: "/solucoes/" },
    { label: "Serviços", href: "/servicos/" },
    { label: "Locais", href: "/segmentos/" },
    { label: "Cidades", href: "/cidades/" },
    { label: "Blog", href: "/blog/" },
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
