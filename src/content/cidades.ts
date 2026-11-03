import { CityContent } from './types';
import { curitibaContent } from './cidades-data/curitiba';
import { pinhaisContent } from './cidades-data/pinhais';
import { saoJoseDosPinhaisContent } from './cidades-data/sao-jose-dos-pinhais';
import { araucariaContent } from './cidades-data/araucaria';
import { almiranteTamandareContent } from './cidades-data/almirante-tamandare';
import { colomboContent } from './cidades-data/colombo';
import { campoLargoContent } from './cidades-data/campo-largo';
import { fazendaRioGrandeContent } from './cidades-data/fazenda-rio-grande';
import { campoMagroContent } from './cidades-data/campo-magro';
import { quatroBarrasContent } from './cidades-data/quatro-barras';
import { campinaGrandeDoSulContent } from './cidades-data/campina-grande-do-sul';

export const cidadesList: CityContent[] = [
  curitibaContent,
  pinhaisContent,
  saoJoseDosPinhaisContent,
  araucariaContent,
  almiranteTamandareContent,
  colomboContent,
  campoLargoContent,
  fazendaRioGrandeContent,
  campoMagroContent,
  quatroBarrasContent,
  campinaGrandeDoSulContent
];

export function getCityBySlug(slug: string): CityContent | undefined {
  return cidadesList.find(c => c.slug === slug);
}
