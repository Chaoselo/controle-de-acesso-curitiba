import { SolutionContent } from './types';
import { biometriaSolution } from './solucoes-data/biometria';
import { reconhecimentoFacialSolution } from './solucoes-data/reconhecimento-facial';
import { cartaoETagRfidSolution } from './solucoes-data/cartao-e-tag-rfid';
import { senhaETecladoSolution } from './solucoes-data/senha-e-teclado';
import { catracasSolution } from './solucoes-data/catracas';
import { cancelasEAcessoVeicularSolution } from './solucoes-data/cancelas-e-acesso-veicular';
import { fechadurasEletromagneticasSolution } from './solucoes-data/fechaduras-eletromagneticas';
import { interfoneEVideoPorteiroSolution } from './solucoes-data/interfone-e-video-porteiro';
import { fechaduraEletronicaSolution } from './solucoes-data/fechadura-eletronica';
import { tagVeicularSolution } from './solucoes-data/tag-veicular';

export const solucoesList: SolutionContent[] = [
  biometriaSolution,
  reconhecimentoFacialSolution,
  cartaoETagRfidSolution,
  senhaETecladoSolution,
  catracasSolution,
  cancelasEAcessoVeicularSolution,
  fechadurasEletromagneticasSolution,
  interfoneEVideoPorteiroSolution,
  fechaduraEletronicaSolution,
  tagVeicularSolution
];

export function getSolutionBySlug(slug: string): SolutionContent | undefined {
  return solucoesList.find(s => s.slug === slug);
}
