import { useState, useMemo } from 'react';
import { ShieldCheck, MapPin, Building, KeyRound, DoorClosed, CheckCircle2 } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { ComplianceNotices } from '../components/ui/ComplianceNotices';
import { siteConfig } from '../config/site';
import { trackWhatsAppClick } from '../lib/whatsapp';

export function OrcamentoPage() {
  const [tipoLocal, setTipoLocal] = useState('Condomínio Residencial');
  const [solucao, setSolucao] = useState('Reconhecimento Facial');
  const [quantidade, setQuantidade] = useState('2 a 3 portas (eclusa de pedestres)');
  const [cidade, setCidade] = useState('Curitiba');
  const [observacoes, setObservacoes] = useState('');

  const whatsappContext = `orçamento - ${solucao} (${tipoLocal})`;

  const mensagemFormatada = useMemo(() => {
    let msg = `Olá! Vim pelo site Controle de Acesso Curitiba e gostaria de solicitar um orçamento.\n\n`;
    msg += `Assunto: ${solucao} — ${tipoLocal}\n`;
    msg += `Dados da solicitação:\n`;
    msg += `- Tipo de imóvel / local: ${tipoLocal}\n`;
    msg += `- Solução / serviço desejado: ${solucao}\n`;
    msg += `- Quantidade / vãos: ${quantidade}\n`;
    msg += `- Município: ${cidade} (PR)\n`;
    if (observacoes.trim()) {
      msg += `- Observações: ${observacoes.trim()}\n`;
    }
    msg += `\nAguardo retorno da equipe técnica.`;
    return msg;
  }, [tipoLocal, solucao, quantidade, cidade, observacoes]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(mensagemFormatada)}`;
  }, [mensagemFormatada]);

  const handleActionClick = () => {
    trackWhatsAppClick(`formulario orcamento ${solucao} ${cidade} ${tipoLocal}`, '/orcamento/');
  };

  return (
    <Layout whatsappContext={whatsappContext}>
      <SEOHead
        title="Orçamento de Controle de Acesso em Curitiba | WhatsApp"
        description="Peça orçamento de controle de acesso, fechadura eletrônica, interfone, catraca ou cancela em Curitiba. Responda 4 perguntas e fale no WhatsApp."
        canonicalPath="/orcamento/"
      />

      {/* Hero escuro */}
      <section className="bg-hero-gradient border-b border-[var(--border)] pt-4 pb-10 sm:pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Orçamento', url: `${siteConfig.domain}/orcamento/` },
            ]}
          />
          <div className="mt-4 max-w-2xl space-y-3">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
              Orçamento sem custo · Curitiba e RMC
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Peça seu orçamento de controle de acesso
            </h1>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              Selecione as informações do imóvel abaixo para gerar automaticamente uma mensagem organizada e enviar direto pelo WhatsApp da nossa equipe técnica.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-7 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="tipoLocal" className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-[0.08em] mb-2">
                <Building className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                <span>1. Tipo de imóvel / estabelecimento</span>
              </label>
              <select
                id="tipoLocal"
                value={tipoLocal}
                onChange={(e) => setTipoLocal(e.target.value)}
                className="w-full h-12 px-3.5 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-sm sm:text-base text-white focus:border-[var(--accent)] focus:outline-none"
              >
                <option value="Condomínio Residencial">Condomínio Residencial (Vertical ou Horizontal)</option>
                <option value="Condomínio Comercial / Edifício Corporativo">Condomínio Comercial / Edifício Corporativo</option>
                <option value="Empresa / Escritório">Empresa / Escritório</option>
                <option value="Indústria / Galpão Logístico">Indústria / Galpão Logístico</option>
                <option value="Clínica / Hospital">Clínica / Hospital / Estabelecimento de Saúde</option>
                <option value="Escola / Faculdade">Escola / Faculdade / Centro Educacional</option>
                <option value="Academia / Studio">Academia / Studio Fitness</option>
                <option value="Estacionamento">Estacionamento</option>
                <option value="Loja / Comércio com Porta de Vidro">Loja / Comércio (Porta de Vidro)</option>
              </select>
              <p className="mt-2 text-xs text-[var(--text-soft)]">
                Para casas e apartamentos individuais, o atendimento residencial fica em{' '}
                <a
                  href={siteConfig.parentCompany.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  intelsecsul.com.br
                </a>
                .
              </p>
            </div>

            <div>
              <label htmlFor="solucao" className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-[0.08em] mb-2">
                <KeyRound className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                <span>2. Solução ou serviço pretendido</span>
              </label>
              <select
                id="solucao"
                value={solucao}
                onChange={(e) => setSolucao(e.target.value)}
                className="w-full h-12 px-3.5 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-sm sm:text-base text-white focus:border-[var(--accent)] focus:outline-none"
              >
                <option value="Reconhecimento Facial">Reconhecimento Facial (Touchless)</option>
                <option value="Fechadura eletrônica">Fechadura eletrônica (digital, biométrica ou eletroímã)</option>
                <option value="Tag veicular">Tag veicular UHF (cancela e garagem)</option>
                <option value="Estacionamento">Estacionamento (cancela e controle veicular)</option>
                <option value="Manutenção de catraca">Manutenção de catraca (conserto ou revisão preventiva)</option>
                <option value="Catracas de Pedestres">Catracas de Pedestres (Pedestal, Balcão ou Torniquete)</option>
                <option value="Cancelas Veiculares e Tags UHF">Cancelas Veiculares Automáticas e Laço Indutivo</option>
                <option value="Fechaduras Eletromagnéticas e Eclusas">Fechaduras Eletromagnéticas em Portas e Clausuras</option>
                <option value="Biometria Digital e Cartões RFID">Biometria Digital e Cartões de Proximidade RFID</option>
                <option value="Interfonia e Vídeo Porteiro IP">Instalação ou Conserto de Interfone e Vídeo Porteiro</option>
                <option value="Conserto e Manutenção (Interfone, Catraca, Cancela)">Conserto / Manutenção Geral (Interfone, Cancela, Fechadura)</option>
                <option value="Locação de Equipamentos">Locação de Equipamentos</option>
              </select>
            </div>

            <div>
              <label htmlFor="quantidade" className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-[0.08em] mb-2">
                <DoorClosed className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                <span>3. Quantidade estimada de portas ou acessos</span>
              </label>
              <select
                id="quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                className="w-full h-12 px-3.5 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-sm sm:text-base text-white focus:border-[var(--accent)] focus:outline-none"
              >
                <option value="1 porta individual">1 porta individual (escritório ou sala restrita)</option>
                <option value="2 a 3 portas (eclusa de pedestres)">2 a 3 portas (eclusa de pedestres)</option>
                <option value="4 a 6 portas">4 a 6 portas (portaria social, serviço e garagens)</option>
                <option value="Mais de 6 portas / Projeto corporativo">Mais de 6 portas / Projeto corporativo</option>
                <option value="1 a 2 cancelas veiculares">1 a 2 cancelas veiculares</option>
                <option value="Bateria de catracas (1 a 4 passagens)">Bateria de catracas (1 a 4 passagens)</option>
              </select>
            </div>

            <div>
              <label htmlFor="cidade" className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-[0.08em] mb-2">
                <MapPin className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                <span>4. Município (Curitiba ou RMC)</span>
              </label>
              <select
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="w-full h-12 px-3.5 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-sm sm:text-base text-white focus:border-[var(--accent)] focus:outline-none"
              >
                {siteConfig.citiesServed.map((c) => (
                  <option key={c.slug} value={c.name}>{c.name} (PR)</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="observacoes" className="block text-xs font-bold text-white uppercase tracking-[0.08em] mb-2">
                5. Detalhes adicionais (opcional)
              </label>
              <textarea
                id="observacoes"
                rows={3}
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                placeholder="Exemplo: Porta de vidro temperado, condomínio residencial, precisa incluir nobreak..."
                className="w-full p-3.5 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-sm sm:text-base text-white placeholder:text-[var(--text-soft)] focus:border-[var(--accent)] focus:outline-none"
              />
            </div>
          </div>

          {/* Pré-visualização */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[var(--surface)] text-white p-6 rounded-2xl border border-[var(--border)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-[0.08em]">
                  Pré-visualização do WhatsApp
                </span>
                <span className="text-xs text-[var(--text-soft)]">Atualização em tempo real</span>
              </div>

              <div className="p-4 bg-[var(--bg)] rounded-xl text-xs sm:text-sm font-mono text-[var(--text-muted)] whitespace-pre-wrap leading-relaxed border border-[var(--border)] max-h-60 overflow-y-auto">
                {mensagemFormatada}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleActionClick}
                className="w-full h-[52px] bg-[var(--whatsapp)] hover:bg-whatsapp-dark text-white rounded-xl font-bold text-base transition-colors flex items-center justify-center gap-2.5 shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Enviar orçamento no WhatsApp</span>
              </a>

              <div className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)] pt-2 border-t border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                  <span>Contato direto com equipe técnica própria</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                  <span>Orçamento sem custo em Curitiba e RMC</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                  <span>Sem formulários invasivos nem spam</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl space-y-2 text-sm text-[var(--text-muted)]">
              <p className="font-semibold text-white">Como funciona após o envio?</p>
              <p className="leading-relaxed">
                Nossa equipe analisa as informações enviadas, agenda o diagnóstico técnico no local quando necessário e elabora o orçamento após a avaliação presencial.
              </p>
            </div>

            <ComplianceNotices showLgpd />
          </div>
        </div>
      </section>
    </Layout>
  );
}
