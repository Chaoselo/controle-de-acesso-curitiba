import { siteConfig } from '../config/site';

/**
 * Gera link oficial para WhatsApp com contexto específico da página ou componente
 * Formato especificado:
 * https://wa.me/5541998448409?text= + encodeURIComponent("Olá! Vim pelo site Controle de Acesso Curitiba e preciso de orçamento para " + contexto + ".")
 */
export function whatsappLink(contexto: string): string {
  const mensagem = `Olá! Vim pelo site Controle de Acesso Curitiba e preciso de orçamento para ${contexto}.`;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Dispara evento de analytics GA4 ao clicar no WhatsApp
 */
export function trackWhatsAppClick(contexto: string, pagePath?: string): void {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'whatsapp_click', {
      page_location: pagePath || window.location.pathname,
      lead_context: contexto,
      send_to_number: siteConfig.whatsapp
    });
  }
}
