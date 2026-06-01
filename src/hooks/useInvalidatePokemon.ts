import { useQueryClient } from '@tanstack/react-query';
import { pokemonKeys } from './usePokemonQueries';

export const useInvalidatePokemon = () => {
  const queryClient = useQueryClient();

  const invalidateAll = () => {
    queryClient.invalidateQueries({ queryKey: pokemonKeys.all });
  };

  const invalidateDetails = (id: string) => {
    queryClient.invalidateQueries({ queryKey: pokemonKeys.detail(id) });
  };

  const invalidateLists = () => {
    queryClient.removeQueries({ queryKey: pokemonKeys.allBase() });

    queryClient.invalidateQueries({ queryKey: pokemonKeys.lists() });
  };

  return { invalidateAll, invalidateDetails, invalidateLists };
};
