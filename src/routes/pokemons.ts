import { createFileRoute } from '@tanstack/react-router';
import HomePage from '../pages/HomePage';
import productsSearchSchema from '../utils/productsSearchSchema';
import { pokemonKeys } from '../hooks/usePokemonQueries';
import { fetchAllPokemon, fetchPokemonResult } from '../api/pokemonApi';
import { SearchResult } from '../types/SearchResult';
import { useErrorStore } from '../store/useErrorStore';

export const Route = createFileRoute('/pokemons')({
  validateSearch: (search) => productsSearchSchema.parse(search),

  loaderDeps: ({ search: { filter, page, limit } }) => ({ filter, page, limit }),

  loader: async ({ context, deps: { filter, page, limit } }) => {
    const queryClient = context.queryClient;

    try {
      return await queryClient.ensureQueryData({
        queryKey: pokemonKeys.list(filter, page, limit),
        queryFn: async ({ signal }) => {
          const allPokemon = await fetchAllPokemon(signal);
          const normalized = filter.toLowerCase();
          const filtered = allPokemon.filter((p) => p.name.includes(normalized));
          const startIndex = (page - 1) * limit;
          const paginated = filtered.slice(startIndex, startIndex + limit);

          const settled = await Promise.allSettled(
            paginated.map((item) => fetchPokemonResult(item, signal))
          );

          return {
            results: settled
              .filter((r): r is PromiseFulfilledResult<SearchResult> => r.status === 'fulfilled')
              .map((r) => r.value),
            totalPages: Math.ceil(filtered.length / limit),
          };
        },
      });
    } catch (error) {
      useErrorStore.getState().addError(`${error instanceof Error ? error.message : 'Failed to load Pokémon data'}`);
      return [];
    }
  },

  component: HomePage,
});
