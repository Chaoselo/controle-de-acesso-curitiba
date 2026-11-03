import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

interface ImageSpec {
  fileName: string;
  width: number;
  height: number;
  title: string;
  subtitle: string;
}

const images: ImageSpec[] = [
  {
    fileName: 'hero-controle-acesso-curitiba.webp',
    width: 1200,
    height: 800,
    title: 'Controle de Acesso em Curitiba',
    subtitle: 'Instalação e Manutenção Especializada'
  },
  {
    fileName: 'solucao-biometria-curitiba.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso Biométrico',
    subtitle: 'Leitor Digital e Eletroímã em Porta'
  },
  {
    fileName: 'segmento-condominio-residencial.webp',
    width: 800,
    height: 600,
    title: 'Condomínios Residenciais',
    subtitle: 'Portaria Segura, Clausuras e Intertravamento'
  },
  {
    fileName: 'cidade-curitiba-acesso.webp',
    width: 800,
    height: 600,
    title: 'Atendimento Técnico em Curitiba',
    subtitle: 'Todos os bairros e Região Metropolitana'
  },
  {
    fileName: 'cidade-curitiba.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Curitiba',
    subtitle: 'Edifícios corporativos, condomínios e indústrias'
  },
  {
    fileName: 'cidade-pinhais.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Pinhais',
    subtitle: 'Indústrias, comércios e condomínios horizontais'
  },
  {
    fileName: 'cidade-sao-jose-dos-pinhais.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em São José dos Pinhais',
    subtitle: 'Polo automotivo, logística e complexos residenciais'
  },
  {
    fileName: 'cidade-araucaria.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Araucária',
    subtitle: 'Polo petroquímico, indústrias e condomínios'
  },
  {
    fileName: 'cidade-almirante-tamandare.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Almirante Tamandaré',
    subtitle: 'Condomínios residenciais e empresas da região norte'
  },
  {
    fileName: 'cidade-colombo.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Colombo',
    subtitle: 'Centros comerciais, condomínios e logística'
  },
  {
    fileName: 'cidade-campo-largo.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Campo Largo',
    subtitle: 'Indústrias de cerâmica, porcelana e condomínios BR-277'
  },
  {
    fileName: 'cidade-fazenda-rio-grande.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Fazenda Rio Grande',
    subtitle: 'Loteamentos fechados, condomínios e parque fabril'
  },
  {
    fileName: 'cidade-campo-magro.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Campo Magro',
    subtitle: 'Chácaras residenciais, condomínios e portarias'
  },
  {
    fileName: 'cidade-quatro-barras.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Quatro Barras',
    subtitle: 'Centros logísticos BR-116 e condomínios fechados'
  },
  {
    fileName: 'cidade-campina-grande-do-sul.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso em Campina Grande do Sul',
    subtitle: 'Polos industriais, saúde e condomínios'
  },
  {
    fileName: 'catracas-acesso.webp',
    width: 800,
    height: 600,
    title: 'Catracas de Acesso',
    subtitle: 'Pedestal, Balcão e Flap em Aço Inox'
  },
  {
    fileName: 'reconhecimento-facial.webp',
    width: 800,
    height: 600,
    title: 'Reconhecimento Facial',
    subtitle: 'Terminal Touchless com Inteligência Artificial'
  },
  {
    fileName: 'cartao-tag-rfid.webp',
    width: 800,
    height: 600,
    title: 'Cartões e Tags RFID',
    subtitle: 'Proximidade 125 kHz e Mifare 13,56 MHz'
  },
  {
    fileName: 'senha-teclado-acesso.webp',
    width: 800,
    height: 600,
    title: 'Controle de Acesso por Senha',
    subtitle: 'Teclados Autônomos e Matrizes Numéricas'
  },
  {
    fileName: 'cancelas-acesso-veicular.webp',
    width: 800,
    height: 600,
    title: 'Cancelas e Acesso Veicular',
    subtitle: 'Braços Articulados, Lineares e Antenas UHF'
  },
  {
    fileName: 'fechaduras-eletromagneticas.webp',
    width: 800,
    height: 600,
    title: 'Fechaduras Eletromagnéticas',
    subtitle: 'Eletroímãs 150kgf a 300kgf e Suportes LZ'
  },
  {
    fileName: 'software-gestao-acesso.webp',
    width: 800,
    height: 600,
    title: 'Software de Gestão de Acesso',
    subtitle: 'Monitoramento em Tempo Real e Logs Auditáveis'
  },
  {
    fileName: 'interfone-video-porteiro.webp',
    width: 800,
    height: 600,
    title: 'Interfonia e Vídeo Porteiro IP',
    subtitle: 'Painéis Externos e Comunicação Predial'
  },
  {
    fileName: 'segmento-condominios-residenciais.webp',
    width: 800,
    height: 600,
    title: 'Condomínios Residenciais',
    subtitle: 'Portaria Segura, Clausuras e Intertravamento'
  },
  {
    fileName: 'segmento-condominios-comerciais.webp',
    width: 800,
    height: 600,
    title: 'Condomínios Comerciais',
    subtitle: 'Catracas de Alto Padrão e Recepção de Visitantes'
  },
  {
    fileName: 'segmento-empresas-escritorios.webp',
    width: 800,
    height: 600,
    title: 'Empresas e Escritórios',
    subtitle: 'Restrição de Setores, TI, Financeiro e Auditoria'
  },
  {
    fileName: 'segmento-industrias.webp',
    width: 800,
    height: 600,
    title: 'Indústrias e Centros Logísticos',
    subtitle: 'Torniquetes Pesados, Troca de Turno e Cancelas'
  },
  {
    fileName: 'segmento-clinicas-hospitais.webp',
    width: 800,
    height: 600,
    title: 'Clínicas e Hospitais',
    subtitle: 'Acesso Touchless, Alas Restritas e Acessibilidade'
  },
  {
    fileName: 'segmento-escolas-universidades.webp',
    width: 800,
    height: 600,
    title: 'Escolas e Faculdades',
    subtitle: 'Catracas Antipânico e Segurança para Estudantes'
  },
  {
    fileName: 'segmento-academias.webp',
    width: 800,
    height: 600,
    title: 'Academias e Centros Esportivos',
    subtitle: 'Bloqueio de Inadimplência e Fluxo de Pico'
  },
  {
    fileName: 'segmento-residencias.webp',
    width: 800,
    height: 600,
    title: 'Residências e Casas',
    subtitle: 'Fechaduras Digitais e Vídeo Porteiros IP'
  },
  {
    fileName: 'servico-instalacao-projeto.webp',
    width: 800,
    height: 600,
    title: 'Instalação e Projeto de Acesso',
    subtitle: 'Cabeamento Estruturado, Eclusas e Parametrização'
  },
  {
    fileName: 'servico-manutencao.webp',
    width: 800,
    height: 600,
    title: 'Manutenção Preventiva e Corretiva',
    subtitle: 'Diagnóstico Rápido e Troca de Componentes'
  },
  {
    fileName: 'servico-locacao.webp',
    width: 800,
    height: 600,
    title: 'Locação de Catracas e Equipamentos',
    subtitle: 'Sem Capex Inicial com Suporte e Peças Inclusos'
  },
  {
    fileName: 'servico-modernizacao.webp',
    width: 800,
    height: 600,
    title: 'Modernização e Retrofit de Acesso',
    subtitle: 'Substituição de Chaves e Cartões Antigos'
  },
  {
    fileName: 'og-image-default.webp',
    width: 1200,
    height: 630,
    title: 'Controle de Acesso Curitiba',
    subtitle: 'Instalação e Manutenção por Intelsecsul Segurança Eletrônica'
  }
];

async function generate() {
  for (const img of images) {
    const svg = `
      <svg width="${img.width}" height="${img.height}" viewBox="0 0 ${img.width} ${img.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0B1F2A" />
            <stop offset="100%" stop-color="#143447" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="${img.width}" height="${img.height}" fill="url(#bgGrad)" />
        <rect width="${img.width}" height="${img.height}" fill="url(#grid)" />
        <circle cx="${img.width * 0.85}" cy="${img.height * 0.2}" r="${img.height * 0.35}" fill="#0284C7" opacity="0.08" />
        <circle cx="${img.width * 0.15}" cy="${img.height * 0.8}" r="${img.height * 0.3}" fill="#25D366" opacity="0.05" />
        
        <!-- Border -->
        <rect x="24" y="24" width="${img.width - 48}" height="${img.height - 48}" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" rx="16" />
        
        <!-- Content -->
        <g transform="translate(60, ${img.height / 2 - 20})">
          <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="bold" fill="#FFFFFF">${img.title}</text>
          <text x="0" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#94A3B8">${img.subtitle}</text>
        </g>
        
        <!-- Branding footer -->
        <text x="60" y="${img.height - 60}" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#64748B">
          controledeacessocuritiba.com.br · Intelsecsul Segurança Eletrônica · (41) 99844-8409
        </text>
      </svg>
    `;

    const filePath = path.join(outDir, img.fileName);
    await sharp(Buffer.from(svg))
      .webp({ quality: 90 })
      .toFile(filePath);

    console.log(`Generated WebP placeholder: ${img.fileName} (${img.width}x${img.height})`);
  }
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
