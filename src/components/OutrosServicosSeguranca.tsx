import { ExternalLink, Camera, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

export function OutrosServicosSeguranca() {
  return (
    <section
      aria-labelledby="outros-servicos-heading"
      className="bg-[var(--bg)] border-t border-[var(--border)] py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[var(--accent)] tracking-[0.08em] uppercase block mb-1.5">
              Grupo Intelsecsul Segurança Eletrônica
            </span>
            <h2 id="outros-servicos-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Precisa também de câmeras, alarme ou cerca elétrica?
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 leading-relaxed">
              Conheça os outros sites da empresa para sistemas de CFTV, alarmes monitorados e proteção perimetral em Curitiba e Região Metropolitana.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={siteConfig.parentCompany.cftvSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)]/60 rounded-xl text-sm font-semibold text-white transition-colors"
            >
              <Camera className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <span>CFTV Curitiba</span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--text-soft)]" aria-hidden="true" />
            </a>

            <a
              href={siteConfig.parentCompany.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)]/60 rounded-xl text-sm font-semibold text-white transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <span>Site Intelsecsul</span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--text-soft)]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
