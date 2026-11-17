interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  headingId?: string;
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  align = 'left',
  headingId,
}: SectionHeaderProps) {
  const isCentered = align === 'center';

  return (
    <div className={isCentered ? 'text-center max-w-3xl mx-auto mb-10 sm:mb-12' : 'max-w-3xl mb-10 sm:mb-12'}>
      {kicker && (
        <span className="inline-block text-xs font-bold tracking-[0.08em] uppercase text-[var(--accent)] mb-2">
          {kicker}
        </span>
      )}
      <h2
        id={headingId}
        className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-[var(--text-muted)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
