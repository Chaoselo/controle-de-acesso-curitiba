import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../content/types';

interface FaqAccordionProps {
  items: FAQItem[];
  defaultOpenFirst?: boolean;
}

export function FaqAccordion({ items, defaultOpenFirst = false }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={index}
          open={defaultOpenFirst && index === 0 ? true : undefined}
          className="group bg-[var(--surface)] border border-[var(--border)] open:border-[var(--accent)]/40 rounded-2xl transition-colors"
        >
          <summary className="list-none cursor-pointer px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left font-semibold text-base text-white hover:text-[var(--accent)] transition-colors [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown
              className="w-5 h-5 text-[var(--accent)] shrink-0 transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="px-5 sm:px-6 pb-5 pt-0 text-base text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)]/60 mt-1 pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
