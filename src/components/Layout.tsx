import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { OutrosServicosSeguranca } from './OutrosServicosSeguranca';
import { WhatsAppFloating } from './WhatsAppFloating';
import { MobileBottomBar } from './MobileBottomBar';
import { CookieBanner } from './CookieBanner';

interface LayoutProps {
  children: ReactNode;
  whatsappContext?: string;
  hideOutrosServicos?: boolean;
}

export function Layout({
  children,
  whatsappContext = 'controle de acesso em Curitiba',
  hideOutrosServicos = false
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-sky-500 selection:text-white pb-14 sm:pb-0">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      {!hideOutrosServicos && <OutrosServicosSeguranca />}
      <Footer />
      <WhatsAppFloating context={whatsappContext} />
      <MobileBottomBar context={whatsappContext} />
      <CookieBanner />
    </div>
  );
}
