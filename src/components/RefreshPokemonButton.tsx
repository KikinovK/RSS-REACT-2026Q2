import { useIsFetching } from '@tanstack/react-query';
import { useInvalidatePokemon } from '../hooks/useInvalidatePokemon';
import { pokemonKeys } from '../hooks/usePokemonQueries';
import Button from './ui/Button';
import RefreshIcon from '../assets/icons/refresh.svg?react';

export const RefreshPokemonButton = () => {
  const { invalidateLists } = useInvalidatePokemon();

  const isFetchingAnyPokemon =
    useIsFetching({
      queryKey: pokemonKeys.all,
    }) > 0;

  const handleRefresh = async () => {
    await invalidateLists();
  };

  return (
    <Button
      onClick={handleRefresh}
      disabled={isFetchingAnyPokemon}
      className={`flex items-center gap-2 bg-guidepost-green ${isFetchingAnyPokemon ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      <RefreshIcon className={`h-4 w-4 ${isFetchingAnyPokemon ? 'animate-spin ' : ''}`} />
      {isFetchingAnyPokemon ? 'Synchronizing...' : 'Refresh Data'}
    </Button>
  );
};
