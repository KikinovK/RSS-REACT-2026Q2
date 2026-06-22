'use server';

import { revalidateTag } from 'next/cache';

import { FETCH_KET } from '../utils/const';
import { fetchAllPokemon, fetchPokemonResult } from '../api/pokemonApi';
import { extractLastSegment } from '../utils/utils';
import { generateCSV } from '../utils/csvExport';

export const syncAllData = async () => {
  revalidateTag(FETCH_KET, 'max');
};

export type CsvExportState = { csv: string } | null;

export const exportCsv = async (
  _prevState: CsvExportState,
  formData: FormData
): Promise<CsvExportState> => {
  const idsRaw = formData.get('ids');
  if (!idsRaw || typeof idsRaw !== 'string') return null;

  const ids: string[] = JSON.parse(idsRaw);
  if (ids.length === 0) return null;

  const allPokemon = await fetchAllPokemon();
  const results = await Promise.all(
    ids.map(async (id) => {
      const pokemonItem = allPokemon.find((p) => extractLastSegment(p.url) === id);
      if (!pokemonItem) {
        return { id: '', name: '', description: '', image: '' };
      }
      return fetchPokemonResult(pokemonItem);
    })
  );

  const csv = generateCSV(results);
  return { csv };
};
