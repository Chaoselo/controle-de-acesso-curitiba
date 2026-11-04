import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import SolutionsIndex from './pages/SolutionsIndex';
import SegmentsIndex from './pages/SegmentsIndex';
import ServicesIndex from './pages/ServicesIndex';
import CitiesIndex from './pages/CitiesIndex';
import { SolutionDetailPage } from './pages/SolutionDetail';
import { SegmentDetailPage } from './pages/SegmentDetail';
import { ServiceDetailPage } from './pages/ServiceDetail';
import { CityDetailPage } from './pages/CityDetail';
import { OrcamentoPage } from './pages/Orcamento';
import { SobrePage } from './pages/Sobre';
import { ContatoPage } from './pages/Contato';
import { CasesPage } from './pages/Cases';
import { FaqPage } from './pages/Faq';
import { GlossarioPage } from './pages/Glossario';
import { PrivacidadePage } from './pages/Privacidade';
import { BlogPage } from './pages/Blog';
import { PostDetailPage } from './pages/PostDetail';
import { NotFoundPage } from './pages/NotFound';

import { solucoesList } from './content/solucoes';
import { segmentosList } from './content/segmentos';
import { servicosList } from './content/servicos';
import { cidadesList } from './content/cidades';
import { blogPostsList } from './content/blog';

export interface StaticRouteItem {
  path: string;
  title: string;
  description: string;
  element: React.ReactElement;
  priority?: string;
  changefreq?: string;
  image?: string;
  ogType?: 'website' | 'article';
}

/**
 * Manifesto central de todas as rotas estáticas do site
 */
export function getAllStaticRoutes(): StaticRouteItem[] {
  const defaultImage = '/images/og-image-default.webp';

  const routes: StaticRouteItem[] = [
    {
      path: '/',
      title: 'Controle de Acesso em Curitiba | Instalação e Manutenção',
      description: 'Especialistas em controle de acesso em Curitiba e RMC. Instalação e manutenção de catracas, biometria, facial e cancelas para condomínios. Peça orçamento!',
      element: <HomePage />,
      priority: '1.0',
      changefreq: 'weekly',
      image: '/images/controle-de-acesso-curitiba-homepage.webp',
      ogType: 'website'
    },
    {
      path: '/solucoes/',
      title: 'Soluções de Controle de Acesso em Curitiba e Região',
      description: 'Conheça as soluções de controle de acesso em Curitiba: biometria, facial, cartão, senha, catracas, cancelas, fechaduras e interfone. Peça orçamento!',
      element: <SolutionsIndex />,
      priority: '0.9',
      changefreq: 'weekly',
      image: '/images/controle-acesso-biometria.webp',
      ogType: 'website'
    },
    {
      path: '/segmentos/',
      title: 'Segmentos de Controle de Acesso em Curitiba e Região',
      description: 'Conheça os segmentos atendidos em controle de acesso em Curitiba e RMC. Soluções para condomínios, empresas, indústrias, escolas, clínicas e academias.',
      element: <SegmentsIndex />,
      priority: '0.9',
      changefreq: 'weekly',
      image: '/images/controle-acesso-segmento-condominio-residencial.webp',
      ogType: 'website'
    },
    {
      path: '/servicos/',
      title: 'Serviços de Controle de Acesso em Curitiba | Manutenção',
      description: 'Conheça nossos serviços de controle de acesso em Curitiba e Região Metropolitana: projetos e instalação, manutenção preventiva e locação de equipamentos.',
      element: <ServicesIndex />,
      priority: '0.9',
      changefreq: 'weekly',
      image: '/images/instalacao-e-projeto-controle-de-acesso.webp',
      ogType: 'website'
    },
    {
      path: '/cidades/',
      title: 'Cidades Atendidas | Controle de Acesso Curitiba e RMC',
      description: 'Atendimento técnico de controle de acesso em Curitiba e 10 cidades da Região Metropolitana. Catracas, biometria, cancelas e fechaduras eletroímã.',
      element: <CitiesIndex />,
      priority: '0.9',
      changefreq: 'weekly',
      image: '/images/cidade-curitiba.webp',
      ogType: 'website'
    },
    {
      path: '/orcamento/',
      title: 'Orçamento de Controle de Acesso em Curitiba | Cotação',
      description: 'Solicite orçamento rápido para controle de acesso em Curitiba e RMC. Catracas, biometria, cancelas e fechaduras com envio direto ao WhatsApp técnico.',
      element: <OrcamentoPage />,
      priority: '0.9',
      changefreq: 'monthly',
      image: defaultImage,
      ogType: 'website'
    },
    {
      path: '/sobre/',
      title: 'Sobre Nós | Controle de Acesso Curitiba por Intelsecsul',
      description: 'Conheça a Controle de Acesso Curitiba, divisão especializada da Intelsecsul Segurança Eletrônica em Curitiba e Região Metropolitana. Peça seu orçamento!',
      element: <SobrePage />,
      priority: '0.7',
      changefreq: 'monthly',
      image: defaultImage,
      ogType: 'website'
    },
    {
      path: '/contato/',
      title: 'Contato | Controle de Acesso Curitiba',
      description: 'Entre em contato com nossos especialistas em controle de acesso em Curitiba e Região Metropolitana. WhatsApp (41) 99844-8409 e atendimento técnico.',
      element: <ContatoPage />,
      priority: '0.8',
      changefreq: 'monthly',
      image: defaultImage,
      ogType: 'website'
    },
    {
      path: '/cases/',
      title: 'Projetos e Aplicações | Controle de Acesso Curitiba',
      description: 'Conheça aplicações e estruturas de projetos de controle de acesso em condomínios residenciais, comerciais e indústrias em Curitiba e RMC. Saiba mais!',
      element: <CasesPage />,
      priority: '0.7',
      changefreq: 'monthly',
      image: defaultImage,
      ogType: 'website'
    },
    {
      path: '/faq/',
      title: 'Perguntas Frequentes | Controle de Acesso Curitiba',
      description: 'Tire suas dúvidas sobre sistemas de controle de acesso, biometria, facial, catracas e fechaduras eletromagnéticas em Curitiba e Região Metropolitana.',
      element: <FaqPage />,
      priority: '0.7',
      changefreq: 'monthly',
      image: defaultImage,
      ogType: 'website'
    },
    {
      path: '/glossario/',
      title: 'Glossário de Controle de Acesso | Termos Técnicos Curitiba',
      description: 'Aprenda o significado dos principais termos de segurança eletrônica e controle de acesso: biometria, eclusas, eletroímã, OSDP, Wiegand e RFID.',
      element: <GlossarioPage />,
      priority: '0.6',
      changefreq: 'monthly',
      image: defaultImage,
      ogType: 'website'
    },
    {
      path: '/politica-de-privacidade/',
      title: 'Política de Privacidade e LGPD | Controle de Acesso Curitiba',
      description: 'Termos de privacidade, tratamento de dados de contato e conformidade com a LGPD em projetos de controle de acesso biométrico em Curitiba e RMC. Confira!',
      element: <PrivacidadePage />,
      priority: '0.4',
      changefreq: 'yearly',
      image: defaultImage,
      ogType: 'website'
    },
    {
      path: '/blog/',
      title: 'Blog e Artigos Técnicos | Controle de Acesso Curitiba',
      description: 'Artigos técnicos, guias para síndicos e boas práticas sobre controle de acesso, biometria, LGPD, cancelas e catracas em Curitiba e RMC. Acesse agora!',
      element: <BlogPage />,
      priority: '0.8',
      changefreq: 'weekly',
      image: defaultImage,
      ogType: 'website'
    }
  ];

  // Soluções
  solucoesList.forEach((solucao) => {
    routes.push({
      path: `/solucoes/${solucao.slug}/`,
      title: solucao.seoTitle,
      description: solucao.metaDescription,
      element: <SolutionDetailPage />,
      priority: solucao.slug === 'biometria' ? '0.9' : '0.8',
      changefreq: 'monthly',
      image: solucao.image?.src || defaultImage,
      ogType: 'website'
    });
  });

  // Segmentos
  segmentosList.forEach((segmento) => {
    routes.push({
      path: `/segmentos/${segmento.slug}/`,
      title: segmento.seoTitle,
      description: segmento.metaDescription,
      element: <SegmentDetailPage />,
      priority: segmento.slug === 'condominios-residenciais' ? '0.9' : '0.8',
      changefreq: 'monthly',
      image: segmento.image?.src || defaultImage,
      ogType: 'website'
    });
  });

  // Serviços
  servicosList.forEach((servico) => {
    routes.push({
      path: `/servicos/${servico.slug}/`,
      title: servico.seoTitle,
      description: servico.metaDescription,
      element: <ServiceDetailPage />,
      priority: '0.8',
      changefreq: 'monthly',
      image: servico.image?.src || defaultImage,
      ogType: 'website'
    });
  });

  // Cidades
  cidadesList.forEach((cidade) => {
    routes.push({
      path: `/cidades/${cidade.slug}/`,
      title: cidade.seoTitle,
      description: cidade.metaDescription,
      element: <CityDetailPage />,
      priority: cidade.slug === 'curitiba' ? '0.9' : '0.7',
      changefreq: 'monthly',
      image: cidade.image?.src || defaultImage,
      ogType: 'website'
    });
  });

  // Posts do Blog
  blogPostsList.forEach((post) => {
    routes.push({
      path: `/blog/${post.slug}/`,
      title: post.seoTitle,
      description: post.metaDescription,
      element: <PostDetailPage />,
      priority: '0.7',
      changefreq: 'monthly',
      image: defaultImage,
      ogType: 'article'
    });
  });

  return routes;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solucoes" element={<SolutionsIndex />} />
      <Route path="/solucoes/" element={<SolutionsIndex />} />
      <Route path="/solucoes/:slug" element={<SolutionDetailPage />} />
      <Route path="/solucoes/:slug/" element={<SolutionDetailPage />} />
      
      <Route path="/segmentos" element={<SegmentsIndex />} />
      <Route path="/segmentos/" element={<SegmentsIndex />} />
      <Route path="/segmentos/:slug" element={<SegmentDetailPage />} />
      <Route path="/segmentos/:slug/" element={<SegmentDetailPage />} />

      <Route path="/servicos" element={<ServicesIndex />} />
      <Route path="/servicos/" element={<ServicesIndex />} />
      <Route path="/servicos/:slug" element={<ServiceDetailPage />} />
      <Route path="/servicos/:slug/" element={<ServiceDetailPage />} />

      <Route path="/cidades" element={<CitiesIndex />} />
      <Route path="/cidades/" element={<CitiesIndex />} />
      <Route path="/cidades/:slug" element={<CityDetailPage />} />
      <Route path="/cidades/:slug/" element={<CityDetailPage />} />

      <Route path="/orcamento" element={<OrcamentoPage />} />
      <Route path="/orcamento/" element={<OrcamentoPage />} />

      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/sobre/" element={<SobrePage />} />

      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/contato/" element={<ContatoPage />} />

      <Route path="/cases" element={<CasesPage />} />
      <Route path="/cases/" element={<CasesPage />} />

      <Route path="/faq" element={<FaqPage />} />
      <Route path="/faq/" element={<FaqPage />} />

      <Route path="/glossario" element={<GlossarioPage />} />
      <Route path="/glossario/" element={<GlossarioPage />} />

      <Route path="/politica-de-privacidade" element={<PrivacidadePage />} />
      <Route path="/politica-de-privacidade/" element={<PrivacidadePage />} />

      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<PostDetailPage />} />
      <Route path="/blog/:slug/" element={<PostDetailPage />} />

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/404/" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
