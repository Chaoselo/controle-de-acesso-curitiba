import { useState, useMemo } from 'react';
import { MessageSquare, ShieldCheck, MapPin, Building, KeyRound, DoorClosed, CheckCircle2 } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig } from '../config/site';
import { trackWhatsAppClick } from '../lib/whatsapp';

export function OrcamentoPage() {
  const [tipoLocal, setTipoLocal] = useState('Condomínio Residencial');
  const [solucao, setSolucao] = useState('Reconhecimento Facial Touchless');
  const [quantidade, setQuantidade] = useState('2 a 3 portas (eclusa de pedestres)');
  const [cidade, setCidade] = useState('Curitiba');
  const [observacoes, setObservacoes] = useState('');

  // Mensagem formatada dinamicamente em tempo real no cliente
  const mensagemFormatada = useMemo(() => {
    let msg = `Olá! Gostaria de solicitar um orçamento pelo site Controle de Acesso Curitiba.\n\n`;
    msg += `📋 *Dados da Solicitação:*\n`;
    msg += `• *Tipo de Imóvel:* ${tipoLocal}\n`;
    msg += `• *Solução Desejada:* ${solucao}\n`;
    msg += `• *Quantidade / Vãos:* ${quantidade}\n`;
    msg += `• *Município:* ${cidade} (PR)\n`;
    if (observacoes.trim()) {
      msg += `• *Observações:* ${observacoes.trim()}\n`;
    }
    msg += `\nAguardo contato da equipe técnica para orientações e dimensionamento.`;
    return msg;
  }, [tipoLocal, solucao, quantidade, cidade, observacoes]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(mensagemFormatada)}`;
  }, [mensagemFormatada]);

  const handleActionClick = () => {
    trackWhatsAppClick(`formulario orcamento ${cidade} ${tipoLocal}`, '/orcamento/');
  };

  return (
    <Layout whatsappContext="orçamento detalhado">
      <SEOHead
        title="Orçamento de Controle de Acesso em Curitiba | Cotação"
        description="Solicite orçamento rápido para controle de acesso em Curitiba e RMC. Catracas, biometria, cancelas e fechaduras com envio direto ao WhatsApp técnico."
        canonicalPath="/orcamento/"
      />

      <Breadcrumbs
        items={[
          { name: 'Orçamento', url: `${siteConfig.domain}/orcamento/` }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
            Cotação Sem Compromisso
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solicitar Orçamento de Controle de Acesso
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Selecione as características do seu imóvel abaixo. O sistema monta a mensagem técnica automaticamente para envio direto ao nosso atendimento via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Formulário Interativo no Cliente */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-5">
            
            {/* 1. Tipo de Imóvel */}
            <div>
              <label htmlFor="tipoLocal" className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                <Building className="w-4 h-4 text-sky-600" />
                <span>1. Tipo de Imóvel / Estabelecimento</span>
              </label>
              <select
                id="tipoLocal"
                value={tipoLocal}
                onChange={(e) => setTipoLocal(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="Condomínio Residencial">Condomínio Residencial (Vertical ou Horizontal)</option>
                <option value="Condomínio Comercial / Edifício Corporativo">Condomínio Comercial / Edifício Corporativo</option>
                <option value="Empresa / Escritório">Empresa / Escritório</option>
                <option value="Indústria / Galpão Logístico">Indústria / Galpão Logístico</option>
                <option value="Clínica / Hospital">Clínica / Hospital / Estabelecimento de Saúde</option>
                <option value="Escola / Faculdade">Escola / Faculdade / Centro Educacional</option>
                <option value="Academia / Studio">Academia / Studio Fitness</option>
                <option value="Residência / Sobrado">Residência Unifamiliar / Sobrado</option>
              </select>
            </div>

            {/* 2. Solução Desejada */}
            <div>
              <label htmlFor="solucao" className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                <KeyRound className="w-4 h-4 text-sky-600" />
                <span>2. Solução Pretendida</span>
              </label>
              <select
                id="solucao"
                value={solucao}
                onChange={(e) => setSolucao(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="Reconhecimento Facial Touchless">Reconhecimento Facial Touchless (Anti-fraude)</option>
                <option value="Catracas de Pedestres">Catracas de Pedestres (Pedestal, Balcão ou Torniquete)</option>
                <option value="Cancelas Veiculares e Tags UHF">Cancelas Veiculares Automáticas com Tags UHF</option>
                <option value="Fechaduras Eletromagnéticas e Eclusas">Fechaduras Eletroímã em Portas e Clausuras</option>
                <option value="Biometria Digital e Cartões RFID">Biometria Digital e Cartões de Proximidade RFID</option>
                <option value="Interfonia e Vídeo Porteiro IP">Interfonia Predial e Vídeo Porteiro IP</option>
                <option value="Manutenção em Sistema Existente">Manutenção Corretiva ou Preventiva em Sistema Atual</option>
                <option value="Projeto Completo de Portaria Integrada">Projeto Completo de Instalação de Portaria</option>
              </select>
            </div>

            {/* 3. Quantidade Estimada */}
            <div>
              <label htmlFor="quantidade" className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                <DoorClosed className="w-4 h-4 text-sky-600" />
                <span>3. Quantidade Estimada de Portas / Vãos / Passagens</span>
              </label>
              <select
                id="quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="1 porta individual">1 porta individual (escritório ou sala restrita)</option>
                <option value="2 a 3 portas (eclusa de pedestres)">2 a 3 portas (eclusa de pedestres em condomínio)</option>
                <option value="4 a 6 portas">4 a 6 portas (portaria social, serviço e garagens)</option>
                <option value="Mais de 6 portas / Projeto corporativo">Mais de 6 portas / Projeto corporativo completo</option>
                <option value="1 a 2 cancelas veiculares">1 a 2 cancelas veiculares para garagem</option>
                <option value="Bateria de catracas (1 a 4 passagens)">Bateria de catracas (1 a 4 passagens de pedestres)</option>
              </select>
            </div>

            {/* 4. Município da Instalação */}
            <div>
              <label htmlFor="cidade" className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>4. Município da Instalação (Curitiba ou RMC)</span>
              </label>
              <select
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {siteConfig.citiesServed.map((c) => (
                  <option key={c.slug} value={c.name}>{c.name} (PR)</option>
                ))}
              </select>
            </div>

            {/* 5. Observações opcionais */}
            <div>
              <label htmlFor="observacoes" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                5. Detalhes Adicionais (opcional)
              </label>
              <textarea
                id="observacoes"
                rows={3}
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                placeholder="Exemplo: Porta de vidro temperado, condomínio com 40 apartamentos no Batel, necessita de nobreak..."
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

          </div>

          {/* Painel de Visualização da Mensagem e Ação */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 shadow-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Pré-visualização do WhatsApp
                </span>
                <span className="text-xs text-slate-400">Tempo real</span>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-lg text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed border border-slate-700/60 max-h-60 overflow-y-auto">
                {mensagemFormatada}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleActionClick}
                className="w-full py-4 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-md font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-white text-transparent" aria-hidden="true" />
                <span>Enviar Orçamento no WhatsApp</span>
              </a>

              <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem intermediários: contato direto com a equipe técnica.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vistoria presencial sem custo para Curitiba e RMC.</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem cadastro prévio invasivo nem spam.</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2 text-xs text-slate-600">
              <p className="font-semibold text-slate-900">Como funciona após o envio?</p>
              <p className="leading-relaxed">
                Nosso consultor técnico analisa os dados enviados, valida a viabilidade preliminar dos equipamentos e pode solicitar fotos do local para agilizar a elaboração da proposta ou agendar a vistoria presencial.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
