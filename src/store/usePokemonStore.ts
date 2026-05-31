import { create } from 'zustand';
import { fetchAllPokemon, fetchPokemonData, fetchPokemonResult } from '../api/pokemonApi';
import { PokemonData, PokemonListItem } from '../types/pokemon';
import { SearchResult } from '../types/SearchResult';
import { extractLastSegment } from '../utils/utils';

interface PokemonState {
  allPokemon: PokemonListItem[];
  results: SearchResult[];
  pokemonDetails: PokemonData | null;
  totalPages: number;
  isLoading: boolean;
  errors: string[] | null;
  loadAllPokemon: (signal: AbortSignal) => Promise<void>;
  filterAndFetch: (
    query: string,
    page: number,
    limit: number,
    signal: AbortSignal
  ) => Promise<void>;
  fetchPokemon: (pokemonItem: PokemonListItem, signal: AbortSignal) => Promise<SearchResult>;
  fetchSelectedPokemon: (ids: string[], signal: AbortSignal) => Promise<SearchResult[]>;
  fetchDetails: (id: string, signal: AbortSignal) => Promise<void>;
  reset: () => void;
}

export const usePokemonStore = create<PokemonState>()((set, get) => ({
  allPokemon: [],
  results: [],
  pokemonDetails: null,
  totalPages: 0,
  isLoading: false,
  errors: null,

  loadAllPokemon: async (signal: AbortSignal) => {
    set({ isLoading: true });
    try {
      const list = await fetchAllPokemon(signal);
      set({ allPokemon: list, isLoading: false });
    } catch (e) {
      set({ errors: [...(get().errors ?? []), (e as Error).message], isLoading: false });
    }
  },

  fetchPokemon: async (pokemonItem: PokemonListItem, signal: AbortSignal) => {
    set({ isLoading: true });
    try {
      const result = await fetchPokemonResult(pokemonItem, signal);
      return result;
    } catch (e) {
      set({ errors: [...(get().errors ?? []), (e as Error).message], isLoading: false });
    } finally {
      set({ isLoading: false });
    }
    return { id: '', name: '', description: '', image: '' };
  },

  fetchSelectedPokemon: async (ids: string[], signal: AbortSignal) => {
    set({ isLoading: true });
    try {
      const results = await Promise.all(
        ids.map((id) => {
          const pokemonItem = get().allPokemon.find((p) => extractLastSegment(p.url) === id);
          return pokemonItem
            ? get().fetchPokemon(pokemonItem, signal)
            : Promise.resolve({ id: '', name: '', description: '', image: '' });
        })
      );
      return results;
    } catch (e) {
      set({ errors: [...(get().errors ?? []), (e as Error).message] });
    } finally {
      set({ isLoading: false });
    }
    return [];
  },

  filterAndFetch: async (query: string, page: number, limit: number, signal: AbortSignal) => {
    const { allPokemon } = get();
    set({ isLoading: true, errors: null });
    const normalized = query.toLowerCase();

    try {
      const filtered = allPokemon.filter((p) => p.name.includes(normalized));
      const startIndex = (page - 1) * limit;
      const paginated = filtered.slice(startIndex, startIndex + limit);

      const settled = await Promise.allSettled(
        paginated.map((item) => fetchPokemonResult(item, signal))
      );

      const successful = settled
        .filter((r): r is PromiseFulfilledResult<SearchResult> => r.status === 'fulfilled')
        .map((r) => r.value);
      const errors = settled
        .filter(
          (r): r is PromiseRejectedResult =>
            r.status === 'rejected' && r.reason?.name !== 'AbortError'
        )
        .map((r) => r.reason?.message);

      set({
        errors: [...(get().errors ?? []), ...errors],
        results: successful,
        isLoading: false,
        totalPages: Math.ceil(filtered.length / limit),
      });
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        set({ errors: [...(get().errors ?? []), (e as Error).message], isLoading: false });
      }
    }
  },

  fetchDetails: async (id: string, signal: AbortSignal) => {
    set({ pokemonDetails: null, isLoading: true });
      try {
        const result = await fetchPokemonData(id, signal);
        set({ pokemonDetails: result });
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          set({ errors: [...(get().errors ?? []), (e as Error).message], isLoading: false });
        }
      } finally {
        set({ isLoading: false });
      }
  },

  reset: () => set({ allPokemon: [], errors: null, results: [] }),
}));
