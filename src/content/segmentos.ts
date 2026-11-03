import { SegmentContent } from './types';
import { condominiosResidenciaisSegment } from './segmentos-data/condominios-residenciais';
import { condominiosComerciaisSegment } from './segmentos-data/condominios-comerciais';
import { empresasEEscritoriosSegment } from './segmentos-data/empresas-e-escritorios';
import { industriasSegment } from './segmentos-data/industrias';
import { clinicasEHospitaisSegment } from './segmentos-data/clinicas-e-hospitais';
import { escolasEUniversidadesSegment } from './segmentos-data/escolas-e-universidades';
import { academiasSegment } from './segmentos-data/academias';
import { residenciasSegment } from './segmentos-data/residencias';

export const segmentosList: SegmentContent[] = [
  condominiosResidenciaisSegment,
  condominiosComerciaisSegment,
  empresasEEscritoriosSegment,
  industriasSegment,
  clinicasEHospitaisSegment,
  escolasEUniversidadesSegment,
  academiasSegment,
  residenciasSegment
];

export function getSegmentBySlug(slug: string): SegmentContent | undefined {
  return segmentosList.find(s => s.slug === slug);
}
