import { SectionHeader } from './SectionHeader';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Fale com a gente',
    description: 'Envie uma mensagem pelo WhatsApp ou formulário informando o tipo de imóvel, portas, catracas ou portões que precisa controlar.',
  },
  {
    number: '02',
    title: 'Receba o orçamento',
    description: 'Avaliamos a sua necessidade e, quando necessário, agendamos visita técnica em Curitiba ou Região Metropolitana para elaborar a proposta.',
  },
  {
    number: '03',
    title: 'Instalação',
    description: 'Nossa equipe técnica própria realiza a passagem de cabos, fixação dos equipamentos, configuração do sistema e testes de funcionamento.',
  },
  {
    number: '04',
    title: 'Suporte após a instalação',
    description: 'Entregamos o sistema com orientações de uso para sua equipe e seguimos disponíveis para manutenção preventiva e suporte técnico.',
  },
];

interface StepsSectionProps {
  background?: 'base' | 'deep';
}

export function StepsSection({ background = 'deep' }: StepsSectionProps) {
  const bgClass = background === 'deep' ? 'bg-[var(--bg-deep)]' : 'bg-[var(--bg)]';

  return (
    <section
      aria-labelledby="como-funciona-heading"
      className={`${bgClass} py-16 sm:py-20 px-4 sm:px-6 border-t border-[var(--border)]`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          headingId="como-funciona-heading"
          kicker="Processo transparente"
          title="Como funciona"
          subtitle="Do primeiro contato à manutenção, um atendimento direto com equipe técnica própria em Curitiba e Região Metropolitana."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 flex flex-col justify-between gap-4"
            >
              <div>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm font-bold text-[var(--accent)] mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
