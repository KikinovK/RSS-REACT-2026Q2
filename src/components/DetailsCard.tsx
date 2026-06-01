import { useParams } from '@tanstack/react-router';
import ProgressBar from './ui/ProgressBar';
import ErrorMessage from './ui/ErrorMessage';
import PokemonImage from './ui/PokemonImage';
import { usePokemonDetails } from '../hooks/usePokemonQueries';

const DetailsCard = () => {
  const { detailId } = useParams({ from: '/pokemons/$detailId' });

  const { data: pokemon, isLoading, error } = usePokemonDetails(detailId);

  const pokemonImage =
    pokemon?.sprites.other?.['official-artwork']?.front_default || pokemon?.sprites.front_default;

  return (
    <>
      <ProgressBar isLoading={isLoading} />
      <div className="bg-black/6 dark:bg-white/6 rounded-(--radius-cards) p-6 border border-black/10 dark:border-white/10 max-w-md mx-auto flex flex-col gap-6 text-stardust">
        {isLoading && <p className="text-body text-muted-text">Loading...</p>}
        {error && (
          <ErrorMessage messages={[error.message || 'Pokemon not found in the PokeAPI database']} />
        )}
        {!isLoading && !error && !pokemon && (
          <p className="text-body text-muted-text">No results found.</p>
        )}
        {!isLoading && pokemon && (
          <>
            <div className="text-center">
              {pokemonImage && (
                <div className="relative w-full aspect-square">
                  <PokemonImage src={pokemonImage} alt={pokemon.name} />
                </div>
              )}
              <span className="text-body-sm text-muted-text font-mono">
                #{String(pokemon.id).padStart(3, '0')}
              </span>
              <h2 className="text-heading-md font-bold capitalize mt-1 text-stardust">
                {pokemon.name}
              </h2>
            </div>

            <hr className="border-black/10 dark:border-white/10" />

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-black/4 dark:bg-white/4 p-2 rounded-lg">
                <p className="text-body-xs text-muted-text uppercase tracking-wider">Рост</p>
                <p className="text-body-md font-medium">{(pokemon.height / 10).toFixed(1)} м</p>
              </div>
              <div className="bg-black/4 dark:bg-white/4 p-2 rounded-lg">
                <p className="text-body-xs text-muted-text uppercase tracking-wider">Вес</p>
                <p className="text-body-md font-medium">{(pokemon.weight / 10).toFixed(1)} кг</p>
              </div>
            </div>

            <div>
              <h4 className="text-body-sm font-medium text-muted-text mb-2">Тип</h4>
              <div className="flex gap-2 flex-wrap">
                {pokemon.types.map(({ type }) => (
                  <span
                    key={type.name}
                    className="px-3 py-1 text-body-xs font-semibold tracking-wider rounded-full bg-black/10 dark:bg-white/10 border border-black/5 dark:border-white/5 shadow-sm capitalize"
                  >
                    {type.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-body-sm font-medium text-muted-text mb-3">
                Базовые характеристики
              </h4>
              <div className="flex flex-col gap-2.5">
                {pokemon.stats.map(({ base_stat, stat }) => (
                  <div key={stat.name} className="flex items-center gap-4 text-body-sm">
                    <span className="w-24 text-muted-text capitalize truncate">
                      {stat.name.replace('-', ' ')}
                    </span>
                    <span className="w-8 font-mono text-right font-medium">{base_stat}</span>
                    <div className="flex-1 h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-stardust rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((base_stat / 200) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailsCard;
