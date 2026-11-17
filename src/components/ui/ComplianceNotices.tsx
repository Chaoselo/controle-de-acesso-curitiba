interface ComplianceNoticesProps {
  text?: string;
  showIntelbras?: boolean;
  showLgpd?: boolean;
  className?: string;
}

export const INTELBRAS_DISCLAIMER =
  'Intelbras é marca de seus respectivos titulares. A Intelsecsul é uma empresa independente e não é revendedora autorizada da marca.';

export const LGPD_DISCLAIMER =
  'Este texto é informativo e não substitui a orientação de um profissional jurídico.';

export function ComplianceNotices({
  text = '',
  showIntelbras,
  showLgpd,
  className = '',
}: ComplianceNoticesProps) {
  const normalized = text.toLowerCase();
  const hasIntelbras = showIntelbras ?? /\bintelbras\b/.test(normalized);
  const hasPersonalData =
    showLgpd ??
    /(biometr|reconhecimento facial|leitura facial|rosto|placa|lpr|lgpd)/.test(normalized);

  if (!hasIntelbras && !hasPersonalData) {
    return null;
  }

  return (
    <aside
      aria-label="Avisos informativos e de marcas"
      className={`p-4 sm:p-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl text-xs sm:text-sm text-[var(--text-soft)] space-y-2 leading-relaxed ${className}`}
    >
      {hasPersonalData && (
        <p>
          Sistemas com biometria, reconhecimento facial ou leitura de placas envolvem tratamento de dados pessoais (incluindo dados sensíveis) sujeito às diretrizes da LGPD (Lei nº 13.709/2018), exigindo definição de finalidade, acesso restrito e política de descarte pelo controlador.{' '}
          {LGPD_DISCLAIMER}
        </p>
      )}
      {hasIntelbras && <p>{INTELBRAS_DISCLAIMER}</p>}
    </aside>
  );
}
