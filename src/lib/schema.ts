import { siteConfig, isFieldFilled } from '../config/site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    "url": siteConfig.domain,
    "name": siteConfig.name,
    "description": "Especialistas em instalação e manutenção de controle de acesso em Curitiba e Região Metropolitana.",
    "publisher": {
      "@id": `${siteConfig.domain}/#organization`
    },
    "inLanguage": "pt-BR"
  };
}

export function generateLocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.domain}/#organization`,
    "name": siteConfig.name,
    "url": siteConfig.domain,
    "telephone": siteConfig.phone,
    "areaServed": siteConfig.citiesServed.map(c => ({
      "@type": "AdministrativeArea",
      "name": `${c.name}, PR`
    })),
    "parentOrganization": {
      "@type": "Organization",
      "name": siteConfig.parentCompany.name,
      "url": siteConfig.parentCompany.site
    }
  };

  // Somente incluir endereço se todos os campos forem preenchidos
  if (
    isFieldFilled(siteConfig.address.street) &&
    isFieldFilled(siteConfig.address.postalCode)
  ) {
    schema["address"] = {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": "BR"
    };
  }

  if (isFieldFilled(siteConfig.cnpj)) {
    schema["taxID"] = siteConfig.cnpj;
  }

  if (isFieldFilled(siteConfig.openingHours)) {
    schema["openingHours"] = siteConfig.openingHours;
  }

  return schema;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": params.name,
    "description": params.description,
    "url": params.url,
    "serviceType": params.serviceType,
    "provider": {
      "@id": `${siteConfig.domain}/#organization`
    },
    "areaServed": siteConfig.citiesServed.map(c => ({
      "@type": "AdministrativeArea",
      "name": `${c.name}, PR`
    }))
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
