import { BlogPostContent } from './types';
import { quantoCustaContent } from './blog-data/quanto-custa';
import { biometriaOuFacialContent } from './blog-data/biometria-ou-facial';
import { lgpdContent } from './blog-data/lgpd';
import { comoEscolherCatracaContent } from './blog-data/como-escolher-catraca';
import { passoAPassoCondominioContent } from './blog-data/passo-a-passo-condominio';
import { funcionaSemInternetContent } from './blog-data/funciona-sem-internet';

export const blogPostsList: BlogPostContent[] = [
  quantoCustaContent,
  biometriaOuFacialContent,
  lgpdContent,
  comoEscolherCatracaContent,
  passoAPassoCondominioContent,
  funcionaSemInternetContent
];

export function getBlogPostBySlug(slug: string): BlogPostContent | undefined {
  return blogPostsList.find((p) => p.slug === slug);
}
