import type {
  PokemonListItem,
  PokemonListResponse,
  PokemonDetail,
  PokemonSpecies,
} from '../types/pokemon'
import type { SearchResult } from '../types/SearchResult'

const BASE = 'https://pokeapi.co/api/v2'

export const fetchAllPokemon = async (signal: AbortSignal): Promise<PokemonListItem[]> => {
  const res = await fetch(`${BASE}/pokemon?limit=2000`, { signal })
  console.log('Fetch all Pokémon response:', res)
  if (!res.ok) throw new Error(`Failed to fetch pokemon list: ${res.status}`)
  const data: PokemonListResponse = await res.json()
  return data.results
}

export const fetchPokemonResult = async (
  item: PokemonListItem,
  signal: AbortSignal
): Promise<SearchResult> => {
  const [detail, species] = await Promise.all([
    fetch(item.url, { signal }).then((r) => {
      if (!r.ok) throw new Error(`Failed to fetch ${item.name}: ${r.status}`)
      return r.json() as Promise<PokemonDetail>
    }),
    fetch(`${BASE}/pokemon-species/${item.name}`, { signal }).then((r) => {
      if (!r.ok) throw new Error(`Failed to fetch species ${item.name}: ${r.status}`)
      return r.json() as Promise<PokemonSpecies>
    }),
  ])

  const flavor = detail.sprites.other['official-artwork'].front_default
  const description =
    species.flavor_text_entries
      .find((e) => e.language.name === 'en')
      ?.flavor_text.replace(/[\n\f]/g, ' ') ?? ''

  return {
    id: String(detail.id),
    name: detail.name,
    description,
    image: flavor,
  }
}
