import { ExternalLink, Camera, BellRing, Zap } from 'lucide-react';
import { siteConfig } from '../config/site';

export function OutrosServicosSeguranca() {
  return (
    <section aria-labelledby="outros-servicos-heading" className="bg-slate-100 border-t border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-sky-700 tracking-wider uppercase block mb-1">
              Segurança Eletrônica Completa
            </span>
            <h2 id="outros-servicos-heading" className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Precisa de CFTV, alarmes ou cerca elétrica?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Nossa empresa-mãe, a Intelsecsul, atende Curitiba e região com soluções integradas de monitoramento patrimonial.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://intelsecsul.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:border-slate-400 rounded-md text-xs font-semibold text-slate-800 shadow-sm transition-all"
            >
              <Camera className="w-4 h-4 text-sky-600" aria-hidden="true" />
              <span>Câmeras e CFTV na Intelsecsul</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" aria-hidden="true" />
            </a>

            <a
              href="https://intelsecsul.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:border-slate-400 rounded-md text-xs font-semibold text-slate-800 shadow-sm transition-all"
            >
              <BellRing className="w-4 h-4 text-sky-600" aria-hidden="true" />
              <span>Alarmes e Cerca Elétrica</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
