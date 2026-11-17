import { ServiceContent } from './types';
import { instalacaoEProjetoService } from './servicos-data/instalacao-e-projeto';
import { manutencaoService } from './servicos-data/manutencao';
import { manutencaoDeCatracasService } from './servicos-data/manutencao-de-catracas';
import { locacaoService } from './servicos-data/locacao';
export const servicosList: ServiceContent[] = [
  instalacaoEProjetoService,
  manutencaoService,
  manutencaoDeCatracasService,
  locacaoService
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return servicosList.find(s => s.slug === slug);
}
