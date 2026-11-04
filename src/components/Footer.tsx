import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';
import { siteConfig, isFieldFilled } from '../config/site';
import { whatsappLink, trackWhatsAppClick } from '../lib/whatsapp';
import { trackPhoneClick } from '../lib/analytics';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-petroleum text-slate-300 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Coluna 1: Marca e Posicionamento */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">
                Controle de Acesso Curitiba
              </span>
              <span className="text-xs text-sky-400 font-medium">
                {siteConfig.brandSignature}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Especialistas em projetos, instalação e manutenção de sistemas de controle de acesso físico, catracas de pedestres, cancelas veiculares e fechaduras eletromagnéticas em Curitiba e Região Metropolitana.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappLink('controle de acesso (ainda não sei qual solução escolher)')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('rodape')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-400 text-transparent" aria-hidden="true" />
                <span>WhatsApp: {siteConfig.whatsappFormatted}</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => trackPhoneClick(typeof window !== 'undefined' ? window.location.pathname : undefined)}
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" aria-hidden="true" />
                <span>Telefone: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Informações da empresa que respeitam a regra de não inventar fatos */}
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              {isFieldFilled(siteConfig.cnpj) && (
                <p>CNPJ: {siteConfig.cnpj}</p>
              )}
              {isFieldFilled(siteConfig.address.street) && (
                <p className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden="true" />
                  <span>{siteConfig.address.street}, {siteConfig.address.city} - {siteConfig.address.state}</span>
                </p>
              )}
              {isFieldFilled(siteConfig.openingHours) && (
                <p>Horário: {siteConfig.openingHours}</p>
              )}
            </div>

            {/* Assinatura e link para o site principal da Intelsecsul */}
            <div className="pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Uma unidade especializada da{' '}
                <a
                  href={siteConfig.parentCompany.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline inline-flex items-center gap-1 font-medium"
                >
                  <span>{siteConfig.parentCompany.name}</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>

          {/* Coluna 2: Soluções */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase">
              <Link to="/solucoes/" className="hover:text-sky-400 transition-colors">
                Soluções de Acesso
              </Link>
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/solucoes/biometria/" className="hover:text-white transition-colors">
                  Controle Biométrico
                </Link>
              </li>
              <li>
                <Link to="/solucoes/reconhecimento-facial/" className="hover:text-white transition-colors">
                  Reconhecimento Facial
                </Link>
              </li>
              <li>
                <Link to="/solucoes/cartao-e-tag-rfid/" className="hover:text-white transition-colors">
                  Cartão e Tag RFID
                </Link>
              </li>
              <li>
                <Link to="/solucoes/catracas/" className="hover:text-white transition-colors">
                  Catracas de Acesso
                </Link>
              </li>
              <li>
                <Link to="/solucoes/cancelas-e-acesso-veicular/" className="hover:text-white transition-colors">
                  Cancelas e Acesso Veicular
                </Link>
              </li>
              <li>
                <Link to="/solucoes/fechaduras-eletromagneticas/" className="hover:text-white transition-colors">
                  Fechaduras Eletroímã
                </Link>
              </li>
              <li>
                <Link to="/solucoes/senha-e-teclado/" className="hover:text-white transition-colors">
                  Senhas e Teclados
                </Link>
              </li>
              <li>
                <Link to="/solucoes/interfone-e-video-porteiro/" className="hover:text-white transition-colors">
                  Interfone e Vídeo Porteiro
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Segmentos (8 segmentos) */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase">
              <Link to="/segmentos/" className="hover:text-sky-400 transition-colors">
                Segmentos Atendidos
              </Link>
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/segmentos/condominios-residenciais/" className="hover:text-white transition-colors">
                  Condomínios Residenciais
                </Link>
              </li>
              <li>
                <Link to="/segmentos/condominios-comerciais/" className="hover:text-white transition-colors">
                  Condomínios Comerciais
                </Link>
              </li>
              <li>
                <Link to="/segmentos/empresas-e-escritorios/" className="hover:text-white transition-colors">
                  Empresas e Escritórios
                </Link>
              </li>
              <li>
                <Link to="/segmentos/industrias/" className="hover:text-white transition-colors">
                  Indústrias
                </Link>
              </li>
              <li>
                <Link to="/segmentos/clinicas-e-hospitais/" className="hover:text-white transition-colors">
                  Clínicas e Hospitais
                </Link>
              </li>
              <li>
                <Link to="/segmentos/escolas-e-universidades/" className="hover:text-white transition-colors">
                  Escolas e Universidades
                </Link>
              </li>
              <li>
                <Link to="/segmentos/academias/" className="hover:text-white transition-colors">
                  Academias
                </Link>
              </li>
              <li>
                <Link to="/segmentos/residencias/" className="hover:text-white transition-colors">
                  Residências
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Serviços Especializados (4 serviços) */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase">
              <Link to="/servicos/" className="hover:text-sky-400 transition-colors">
                Serviços Especializados
              </Link>
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/servicos/instalacao-e-projeto/" className="hover:text-white transition-colors">
                  Instalação e Projeto
                </Link>
              </li>
              <li>
                <Link to="/servicos/manutencao/" className="hover:text-white transition-colors">
                  Manutenção de Acesso
                </Link>
              </li>
              <li>
                <Link to="/servicos/locacao/" className="hover:text-white transition-colors">
                  Locação de Equipamentos
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha de Cidades Atendidas na RMC */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-semibold text-white tracking-wider uppercase shrink-0">
              <Link to="/cidades/" className="hover:text-sky-400 transition-colors">
                Cidades Atendidas na RMC:
              </Link>
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
              {siteConfig.citiesServed.map(city => (
                <Link
                  key={city.slug}
                  to={`/cidades/${city.slug}/`}
                  className="hover:text-sky-400 transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Linha divisória e rodapé institucional */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/orcamento/" className="hover:text-slate-300 transition-colors">
              Pedir Orçamento
            </Link>
            <Link to="/sobre/" className="hover:text-slate-300 transition-colors">
              Sobre Nós
            </Link>
            <Link to="/cases/" className="hover:text-slate-300 transition-colors">
              Cases e Projetos
            </Link>
            <Link to="/blog/" className="hover:text-slate-300 transition-colors">
              Blog Especializado
            </Link>
            <Link to="/faq/" className="hover:text-slate-300 transition-colors">
              Perguntas Frequentes (FAQ)
            </Link>
            <Link to="/glossario/" className="hover:text-slate-300 transition-colors">
              Glossário Técnico
            </Link>
            <Link to="/contato/" className="hover:text-slate-300 transition-colors">
              Contato
            </Link>
            <Link to="/politica-de-privacidade/" className="hover:text-slate-300 transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
