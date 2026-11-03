import { useEffect } from 'react';
import { siteConfig } from '../config/site';
import { generateWebSiteSchema, generateLocalBusinessSchema } from '../lib/schema';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string; // e.g. "/solucoes/biometria/"
  ogImage?: string;
  ogType?: 'website' | 'article';
  schemaData?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage = siteConfig.defaultOgImage,
  ogType = 'website',
  schemaData
}: SEOHeadProps) {
  // Garante barra final no canonical absoluto
  const normalizedPath = canonicalPath.endsWith('/') ? canonicalPath : `${canonicalPath}/`;
  const canonicalUrl = `${siteConfig.domain}${normalizedPath}`;
  const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${siteConfig.domain}${ogImage}`;

  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large');

    // 4. Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 5. Open Graph
    const setMetaProperty = (prop: string, content: string) => {
      let meta = document.querySelector(`meta[property="${prop}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', prop);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaProperty('og:title', title);
    setMetaProperty('og:description', description);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:image', fullOgImageUrl);
    setMetaProperty('og:type', ogType);
    setMetaProperty('og:site_name', siteConfig.name);
    setMetaProperty('og:locale', 'pt_BR');

    // 6. Twitter Card
    const setMetaName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', title);
    setMetaName('twitter:description', description);
    setMetaName('twitter:image', fullOgImageUrl);
  }, [title, description, canonicalUrl, fullOgImageUrl, ogType]);

  // Monta schemas JSON-LD para renderização no SSR e cliente
  const schemas: Record<string, unknown>[] = [
    generateWebSiteSchema(),
    generateLocalBusinessSchema()
  ];

  if (schemaData) {
    if (Array.isArray(schemaData)) {
      schemas.push(...schemaData);
    } else {
      schemas.push(schemaData);
    }
  }

  return (
    <>
      {schemas.map((item, idx) => (
        <script
          key={`schema-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
