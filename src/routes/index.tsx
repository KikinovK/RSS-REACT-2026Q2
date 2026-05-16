/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import SearchSection from '../components/SearchSection';
import ResultsSection from '../components/ResultsSection';
import ProgressBar from '../components/ui/ProgressBar';
import { fetchAllPokemon, fetchPokemonResult } from '../services/pokemonService';
import type { PokemonListItem } from '../types/pokemon';
import type { SearchResult } from '../types/SearchResult';
import { useLocalStorage } from '../utils/useLocalStorage';
import { SEARCH_KEY } from '../utils/const';

export const HomePage = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonListItem[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useLocalStorage<string>(SEARCH_KEY, '');

  const abortControllerRef = useRef<AbortController | null>(null);
  const isInitialMount = useRef(true);

  const fetchResults = useCallback (async (allPokemon: PokemonListItem[], query: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const normalized = query.toLowerCase();
    const filtered = normalized
      ? allPokemon.filter((p) => p.name.includes(normalized))
      : allPokemon.slice(0, 20);

    setIsLoading(true);
    setError(null);

    try {
      const settled = await Promise.allSettled(
        filtered.slice(0, 20).map((item) => fetchPokemonResult(item, controller.signal))
      );

      const successfulResults = settled
        .filter((r): r is PromiseFulfilledResult<SearchResult> => r.status === 'fulfilled')
        .map((r) => r.value);

      const firstError = settled.find(
        (r): r is PromiseRejectedResult => r.status === 'rejected' && r.reason?.name !== 'AbortError'
      );

      setResults(successfulResults);
      if (firstError) setError(firstError.reason?.message);
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setError((e as Error).message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const init = async () => {
      setIsLoading(true);
      try {
        const list = await fetchAllPokemon(controller.signal);
        setAllPokemon(list);
        await fetchResults(list, searchQuery);
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          setError((e as Error).message);
          setIsLoading(false);
        }
      }
    };

    init();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (query: string) => {
    if (query === searchQuery && !isInitialMount.current) return;

    isInitialMount.current = false;
    setSearchQuery(query);
    fetchResults(allPokemon, query);
  };

  return (
    <div className="space-y-8">
      <ProgressBar isLoading={isLoading} />
      <SearchSection onSearch={handleSearch} />
      <ResultsSection results={results} isLoading={isLoading} error={error} />
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: HomePage,
});
