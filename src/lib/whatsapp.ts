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

export { trackWhatsAppClick } from './analytics';
