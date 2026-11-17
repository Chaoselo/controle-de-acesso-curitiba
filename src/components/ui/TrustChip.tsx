import { CheckCircle2 } from 'lucide-react';

interface TrustChipProps {
  label: string;
}

export function TrustChip({ label }: TrustChipProps) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-sm font-semibold text-white">
      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
