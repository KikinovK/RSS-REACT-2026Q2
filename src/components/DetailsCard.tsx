import { useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import ProgressBar from './ui/ProgressBar';
import ErrorMessage from './ui/ErrorMessage';
import PokemonImage from './ui/PokemonImage';
import { PokemonData } from '../types/pokemon';
import { fetchPokemonData } from '../services/pokemonService';

const DetailsCard = () => {
  const { detailId } = useParams({ from: '/pokemons/$detailId' });

  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const init = async () => {
      setIsLoading(true);
      try {
        const result = await fetchPokemonData(detailId, controller.signal);
        setPokemon(result);
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          setError((e as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    init();

    return () => controller.abort();
  }, [detailId]);

  const pokemonImage =
    pokemon?.sprites.other?.['official-artwork']?.front_default ||
    pokemon?.sprites.front_default;

  return (
    <>
    <ProgressBar isLoading={isLoading} />
      <div className="bg-white/6 rounded-(--radius-cards) p-6 border border-white/10 max-w-md mx-auto flex flex-col gap-6 text-stardust">
        {isLoading && <p className="text-body text-muted-text">Loading...</p>}
        {error && <ErrorMessage messages={[error|| 'Pokemon not found in the PokeAPI database']} />}
        {!isLoading && !error && !pokemon && (
          <p className="text-body text-muted-text">No results found.</p>
        )}
        {!isLoading && pokemon  && (
          <>
            <div className="text-center">
              {pokemonImage && (
                <div className="relative w-full aspect-square">
                  <PokemonImage
                    src={pokemonImage}
                    alt={pokemon.name}
                  />
                </div>
              )}
              <span className="text-body-sm text-muted-text font-mono">#{String(pokemon.id).padStart(3, '0')}</span>
              <h2 className="text-heading-md font-bold capitalize mt-1 text-stardust">{pokemon.name}</h2>
            </div>

            <hr className="border-white/10" />

            {/* Основные параметры */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/4 p-2 rounded-lg">
                <p className="text-body-xs text-muted-text uppercase tracking-wider">Рост</p>
                <p className="text-body-md font-medium">{(pokemon.height / 10).toFixed(1)} м</p>
              </div>
              <div className="bg-white/4 p-2 rounded-lg">
                <p className="text-body-xs text-muted-text uppercase tracking-wider">Вес</p>
                <p className="text-body-md font-medium">{(pokemon.weight / 10).toFixed(1)} кг</p>
              </div>
            </div>

            {/* Типы покемона */}
            <div>
              <h4 className="text-body-sm font-medium text-muted-text mb-2">Тип</h4>
              <div className="flex gap-2 flex-wrap">
                {pokemon.types.map(({ type }) => (
                  <span
                    key={type.name}
                    className="px-3 py-1 text-body-xs font-semibold tracking-wider rounded-full bg-white/10 border border-white/5 shadow-sm capitalize"
                  >
                    {type.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Базовые характеристики */}
            <div>
              <h4 className="text-body-sm font-medium text-muted-text mb-3">Базовые характеристики</h4>
              <div className="flex flex-col gap-2.5">
                {pokemon.stats.map(({ base_stat, stat }) => (
                  <div key={stat.name} className="flex items-center gap-4 text-body-sm">
                    {/* Название статы */}
                    <span className="w-24 text-muted-text capitalize truncate">{stat.name.replace('-', ' ')}</span>
                    {/* Числовое значение */}
                    <span className="w-8 font-mono text-right font-medium">{base_stat}</span>
                    {/* Прогресс-бар */}
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-stardust rounded-full transition-all duration-500"
                        // Ограничиваем макс ширину (условно 255 — максимальная базовая стата в игре)
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
