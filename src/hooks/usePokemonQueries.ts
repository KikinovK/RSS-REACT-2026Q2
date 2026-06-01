import { useQuery } from '@tanstack/react-query';
import { fetchAllPokemon, fetchPokemonData, fetchPokemonResult } from '../api/pokemonApi';
import { SearchResult } from '../types/SearchResult';
import { queryClient } from '../config/queryClient';

export const pokemonKeys = {
  all: ['pokemon'] as const,
  allBase: () => [...pokemonKeys.all, 'base-list'] as const,
  lists: () => [...pokemonKeys.all, 'list'] as const,
  list: (query: string, page: number, limit: number) =>
    [...pokemonKeys.lists(), { query, page, limit }] as const,
  details: () => [...pokemonKeys.all, 'detail'] as const,
  detail: (id: string) => [...pokemonKeys.details(), id] as const,
};

export const usePokemonDetails = (id: string) => {
  return useQuery({
    queryKey: pokemonKeys.detail(id),
    queryFn: ({ signal }) => fetchPokemonData(id, signal),
    enabled: !!id,
  });
};

export const usePokemonSearch = (query: string, page: number, limit: number) => {
  return useQuery({
    queryKey: pokemonKeys.list(query, page, limit),
    queryFn: async ({ signal }) => {
      const allPokemon = await queryClient.fetchQuery({
        queryKey: pokemonKeys.allBase(),
        queryFn: ({ signal }) => fetchAllPokemon(signal),
      });

      const normalized = query.toLowerCase();
      const filtered = allPokemon.filter((p) => p.name.includes(normalized));

      const startIndex = (page - 1) * limit;
      const paginated = filtered.slice(startIndex, startIndex + limit);

      const settled = await Promise.allSettled(
        paginated.map((item) => fetchPokemonResult(item, signal))
      );

      const successful = settled
        .filter((r): r is PromiseFulfilledResult<SearchResult> => r.status === 'fulfilled')
        .map((r) => r.value);

      const errors: string[] = settled
        .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
        .map((r) => r.reason?.message || 'Unknown error');

      return {
        results: successful,
        totalPages: Math.ceil(filtered.length / limit),
        errors,
      };
    },
    placeholderData: (previousData) => previousData,
  });
};
