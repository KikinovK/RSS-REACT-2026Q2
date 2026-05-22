import type {
  PokemonListItem,
  PokemonListResponse,
  PokemonDetail,
  PokemonSpecies,
  PokemonData,
} from '../types/pokemon';
import type { SearchResult } from '../types/SearchResult';
import { ApiError } from '../utils/ApiError';

const BASE = 'https://pokeapi.co/api/v2';

export const fetchAllPokemon = async (signal: AbortSignal): Promise<PokemonListItem[]> => {
  const res = await fetch(`${BASE}/pokemon?limit=2000`, { signal });
  if (!res.ok) throw new ApiError(res.status, 'Failed to load Pokémon list');
  const data: PokemonListResponse = await res.json();
  return data.results;
};

export const fetchPokemonResult = async (
  item: PokemonListItem,
  signal: AbortSignal
): Promise<SearchResult> => {
  const detailResponse = await fetch(item.url, { signal });
  if (!detailResponse.ok) {
    throw new ApiError(detailResponse.status, `Failed to load ${item.name}`);
  }
  const detail = await (detailResponse.json() as Promise<PokemonDetail>);

  const speciesResponse = await fetch(detail.species.url, { signal });
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

export const fetchPokemonData = async (id: string,
  signal: AbortSignal): Promise<PokemonData> => {
  const res = await fetch(`${BASE}/pokemon/${id}`, { signal });
  if (!res.ok) throw new ApiError(res.status, 'Failed to load Pokémon details');
  return res.json() as Promise<PokemonData>;
};
