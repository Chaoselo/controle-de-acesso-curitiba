import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { getAllStaticRoutes, AppRoutes } from '../src/routes';
import { siteConfig } from '../src/config/site';

const DIST_DIR = path.resolve('dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

interface PendingItem {
  file: string;
  line: number;
  content: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function findPendingItems(dir: string): PendingItem[] {
  const results: PendingItem[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        results.push(...findPendingItems(fullPath));
      }
    } else if (entry.isFile() && /\.(ts|tsx|json|html|md)$/.test(entry.name)) {
      const fileContent = fs.readFileSync(fullPath, 'utf-8');
      const lines = fileContent.split('\n');
      lines.forEach((line, idx) => {
        const trimmed = line.trim();
        if (trimmed.includes('[[PREENCHER:') && !trimmed.startsWith('//') && !trimmed.startsWith('*') && !trimmed.startsWith('{/*')) {
          results.push({
            file: path.relative(process.cwd(), fullPath),
            line: idx + 1,
            content: trimmed
          });
        }
      });
    }
  }

  return results;
}

async function runPrerender() {
  console.log('\n🚀 Iniciando processo de Pré-renderização Estática (SSG)...');

  if (!fs.existsSync(INDEX_HTML_PATH)) {
    throw new Error('dist/index.html não encontrado. Execute "vite build" antes do prerender.');
  }

  const template = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');
  const routes = getAllStaticRoutes();

  // Adiciona a página 404 estática
  routes.push({
    path: '/404/',
    title: 'Página Não Encontrada (404) | Controle de Acesso Curitiba',
    description: 'A página que você procura não foi encontrada. Acesse nossas soluções de controle de acesso em Curitiba.',
    element: React.createElement(AppRoutes),
    priority: '0.1',
    changefreq: 'yearly',
    ogType: 'website'
  });

  let generatedCount = 0;
  const fixedOgImageUrl = `${siteConfig.domain}/og-default.jpg`;

  for (const route of routes) {
    // Normaliza rota com barra final
    const normalizedPath = route.path.endsWith('/') ? route.path : `${route.path}/`;
    const canonicalUrl = `${siteConfig.domain}${normalizedPath}`;
    const is404 = normalizedPath === '/404/';

    // Renderiza componente para string HTML
    const appHtml = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: [normalizedPath] },
        React.createElement(AppRoutes)
      )
    );

    const escapedTitle = escapeHtml(route.title);
    const escapedDesc = escapeHtml(route.description);
    const ogType = route.ogType || 'website';

    // Substitui e injeta metadados no HTML do template usando SEMPRE funções de substituição
    let html = template;

    // 1. Injeta HTML pré-renderizado no container root
    html = html.replace(
      '<div id="root"></div>',
      () => `<div id="root">${appHtml}</div>`
    );

    // 2. Atualiza Title
    html = html.replace(
      /<title>.*?<\/title>/,
      () => `<title>${escapedTitle}</title>`
    );

    // 3. Atualiza Meta Description
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      () => `<meta name="description" content="${escapedDesc}" />`
    );

    // 4. Atualiza Canonical URL e Robots para 404
    if (is404) {
      html = html.replace(
        /\s*<link rel="canonical" href=".*?" \/>/,
        () => ''
      );
      html = html.replace(
        /<meta name="robots" content=".*?" \/>/,
        () => '<meta name="robots" content="noindex, follow" />'
      );
    } else {
      html = html.replace(
        /<link rel="canonical" href=".*?" \/>/,
        () => `<link rel="canonical" href="${canonicalUrl}" />`
      );
    }

    // 5. Atualiza OpenGraph (sempre og-default.jpg em todas as páginas)
    html = html.replace(
      /<meta property="og:type" content=".*?" \/>/,
      () => `<meta property="og:type" content="${ogType}" />`
    );
    html = html.replace(
      /<meta property="og:title" content=".*?" \/>/,
      () => `<meta property="og:title" content="${escapedTitle}" />`
    );
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/,
      () => `<meta property="og:description" content="${escapedDesc}" />`
    );
    html = html.replace(
      /<meta property="og:url" content=".*?" \/>/,
      () => `<meta property="og:url" content="${canonicalUrl}" />`
    );
    html = html.replace(
      /<meta property="og:image" content=".*?" \/>/,
      () => `<meta property="og:image" content="${fixedOgImageUrl}" />`
    );
    html = html.replace(
      /<meta property="og:image:alt" content=".*?" \/>/,
      () => `<meta property="og:image:alt" content="${escapedTitle}" />`
    );

    // 6. Atualiza Twitter (sempre og-default.jpg)
    html = html.replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      () => `<meta name="twitter:title" content="${escapedTitle}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      () => `<meta name="twitter:description" content="${escapedDesc}" />`
    );
    html = html.replace(
      /<meta name="twitter:image" content=".*?" \/>/,
      () => `<meta name="twitter:image" content="${fixedOgImageUrl}" />`
    );

    // Grava o arquivo de destino
    if (normalizedPath === '/') {
      fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html, 'utf-8');
    } else if (normalizedPath === '/404/') {
      fs.writeFileSync(path.join(DIST_DIR, '404.html'), html, 'utf-8');
    } else {
      const targetDir = path.join(DIST_DIR, normalizedPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
    }

    generatedCount++;
  }

  console.log(`✅ [SSG] ${generatedCount} páginas estáticas pré-renderizadas com sucesso.`);

  // Gerar sitemap.xml (sem a tag <lastmod>)
  const sitemapUrls = routes
    .filter(r => r.path !== '/404/')
    .map(r => {
      const norm = r.path.endsWith('/') ? r.path : `${r.path}/`;
      return `  <url>
    <loc>${siteConfig.domain}${norm}</loc>
    <changefreq>${r.changefreq || 'monthly'}</changefreq>
    <priority>${r.priority || '0.7'}</priority>
  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`✅ [SITEMAP] sitemap.xml gerado com ${routes.length - 1} URLs (sem lastmod).`);

  // Gerar robots.txt com a linha Sitemap (permite /favicon.* e /og-default.jpg)
  const robotsTxt = `# robots.txt para https://controledeacessocuritiba.com.br
User-agent: *
Allow: /
Disallow: /404
Disallow: /404.html

Sitemap: ${siteConfig.domain}/sitemap.xml
`;

  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf-8');
  console.log(`✅ [ROBOTS] robots.txt gerado com referência ao sitemap.`);

  // Scanner de [[PREENCHER]] pendentes
  console.log('\n======================================================');
  console.log('📋 AUDITORIA DE DADOS PENDENTES ([[PREENCHER]])');
  console.log('======================================================');

  const pending = findPendingItems(path.resolve('src'));
  if (pending.length === 0) {
    console.log('Nenhum dado pendente encontrado! Todos os dados confirmados.');
  } else {
    console.log(`Encontrados ${pending.length} pontos aguardando dados reais da empresa:`);
    pending.forEach((p, idx) => {
      console.log(`  ${(idx + 1).toString().padStart(2, '0')}. [${p.file}:${p.line}] ${p.content}`);
    });
    console.log('\nLembrete: Os componentes omitem automaticamente seções dependentes.');
  }
  console.log('======================================================\n');
}

runPrerender().catch(err => {
  console.error('❌ Falha na pré-renderização estática:', err);
  process.exit(1);
});
