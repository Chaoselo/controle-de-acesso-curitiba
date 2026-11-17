import { Link } from 'react-router-dom';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface PhotoCardProps {
  to: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  ctaLabel?: string;
  compact?: boolean;
}

export function PhotoCard({
  to,
  title,
  description,
  imageSrc,
  imageAlt,
  icon: Icon,
  ctaLabel = 'Ver detalhes e orçamento',
  compact = false,
}: PhotoCardProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 h-full"
    >
      {/* 16:9 visual slot with subtle dark gradient fade */}
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-deep)]">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--surface)]/30 to-[var(--surface)]"
        />
      </div>

      {/* Overlapping icon badge */}
      <div className="px-5 relative z-10 -mt-5 mb-3">
        <div className="w-10 h-10 rounded-xl bg-[var(--bg)] border border-[var(--border)] group-hover:border-[var(--accent)]/50 flex items-center justify-center shadow-lg transition-colors">
          <Icon className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />
        </div>
      </div>

      {/* Text content */}
      <div className="px-5 pb-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className={`font-semibold text-white group-hover:text-[var(--accent)] transition-colors leading-snug ${compact ? 'text-lg' : 'text-xl'}`}>
            {title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[var(--text-muted)] line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-3.5 border-t border-[var(--border)] flex items-center justify-between text-sm font-semibold text-[var(--accent)]">
          <span>{ctaLabel}</span>
          <ChevronRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
