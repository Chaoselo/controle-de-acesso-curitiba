import { siteConfig } from '../config/site';

/**
 * Gera link oficial para WhatsApp com contexto específico da página ou componente
 */
export function whatsappLink(contexto: string): string {
  const mensagem = `Olá! Vim pelo site Controle de Acesso Curitiba e gostaria de atendimento sobre: ${contexto}.`;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export { trackWhatsAppClick } from './analytics';
