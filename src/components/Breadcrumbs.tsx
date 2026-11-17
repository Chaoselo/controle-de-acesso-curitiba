import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem, generateBreadcrumbSchema } from '../lib/schema';
import { siteConfig } from '../config/site';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [
    { name: 'Início', url: `${siteConfig.domain}/` },
    ...items,
  ];

  const schemaJson = JSON.stringify(generateBreadcrumbSchema(fullItems));

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs sm:text-sm text-[var(--text-soft)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Início</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-[var(--text-soft)] shrink-0" aria-hidden="true" />
              {isLast ? (
                <span className="font-medium text-white truncate max-w-[220px] sm:max-w-none" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url.replace(siteConfig.domain, '')}
                  className="hover:text-[var(--accent)] transition-colors truncate max-w-[160px] sm:max-w-none"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
