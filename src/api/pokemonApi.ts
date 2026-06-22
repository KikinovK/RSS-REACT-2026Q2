import type {
  PokemonListItem,
  PokemonListResponse,
  PokemonDetail,
  PokemonSpecies,
  PokemonData,
} from '../types/pokemon';
import type { SearchResult } from '../types/SearchResult';
import { ApiError } from '../utils/ApiError';
import { FETCH_KET } from '../utils/const';

const BASE = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (
  searchQuery: string,
  currentPage: number,
  itemsPerPage: number
) => {
  const allPokemons = await fetchAllPokemon();

  const normalized = searchQuery.toLowerCase();
  const filtered = allPokemons.filter((p) => p.name.includes(normalized));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  const settled = await Promise.allSettled(paginated.map((item) => fetchPokemonResult(item)));

  const successful = settled
    .filter((r): r is PromiseFulfilledResult<SearchResult> => r.status === 'fulfilled')
    .map((r) => r.value);

  const errors: string[] = settled
    .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
    .map((r) => r.reason?.message || 'Unknown error');

  return {
    results: successful,
    totalPages: Math.ceil(filtered.length / itemsPerPage),
    errors,
  };
};

export const fetchAllPokemon = async (): Promise<PokemonListItem[]> => {
  const res = await fetch(`${BASE}/pokemon?limit=2000`, { next: { tags: [FETCH_KET] } });
  if (!res.ok) throw new ApiError(res.status, 'Failed to load Pokémon list');
  const data: PokemonListResponse = await res.json();
  return data.results;
};

export const fetchPokemonResult = async (item: PokemonListItem): Promise<SearchResult> => {
  const detailResponse = await fetch(item.url, { next: { tags: [FETCH_KET] } });
  if (!detailResponse.ok) {
    throw new ApiError(detailResponse.status, `Failed to load ${item.name}`);
  }
  const detail = await (detailResponse.json() as Promise<PokemonDetail>);

  const speciesResponse = await fetch(detail.species.url, { next: { tags: [FETCH_KET] } });
  if (!speciesResponse.ok) {
    throw new ApiError(speciesResponse.status, `Failed to load species for ${item.name}`);
  }
  const species = await (speciesResponse.json() as Promise<PokemonSpecies>);

  const flavor = detail.sprites.other['official-artwork'].front_default;
  const description =
    species.flavor_text_entries
      .find((e) => e.language.name === 'en')
      ?.flavor_text.replace(/[\n\f]/g, ' ') ?? '';

  return {
    id: String(detail.id),
    name: detail.name,
    description,
    image: flavor,
  };
};

export const fetchPokemonData = async (id: string): Promise<PokemonData> => {
  const res = await fetch(`${BASE}/pokemon/${id}`, { next: { tags: [FETCH_KET] } });
  if (!res.ok) throw new ApiError(res.status, 'Failed to load Pokémon details');
  return res.json() as Promise<PokemonData>;
};
