import { useCallback, useEffect, useRef, useState } from 'react';
import SearchSection from '../components/SearchSection';
import ResultsSection from '../components/ResultsSection';
import ProgressBar from '../components/ui/ProgressBar';
import Pagination from '../components/ui/Pagination';
import { fetchAllPokemon, fetchPokemonResult } from '../services/pokemonService';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LIMIT_KEY, OPTIONS_COUNT_ITEMS, PAGE_KEY, SEARCH_KEY } from '../utils/const';
import SelectCountItem from '../components/ui/SelectCountItem';
import { Route } from '../routes/pokemons';
import type { PokemonListItem } from '../types/pokemon';
import type { SearchResult } from '../types/SearchResult';
import { CountItem } from '../types/CoutItem';
import { Outlet, useMatchRoute } from '@tanstack/react-router';
import Button from '../components/ui/Button';

const HomePage = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonListItem[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[] | null>(null);

  const { limit: itemsPerPage, filter: searchQuery, page: currentPage } = Route.useSearch();
  const navigate = Route.useNavigate();

  const matchRoute = useMatchRoute();
  const isDetailsRouteActive = matchRoute({ to: '/pokemons/$detailId' });
  const detailId = isDetailsRouteActive ? isDetailsRouteActive.detailId : undefined;

  const [, setItemsPerPage] = useLocalStorage<CountItem>(LIMIT_KEY, OPTIONS_COUNT_ITEMS[0]);
  const [, setSearchQuery] = useLocalStorage<string>(SEARCH_KEY, '');
  const [, setCurrentPage] = useLocalStorage<number>(PAGE_KEY, 1);

  const abortControllerRef = useRef<AbortController | null>(null);
  const isInitialMount = useRef(true);

  const fetchResults = useCallback(
    async (
      allPokemon: PokemonListItem[],
      query: string,
      currentPage: number,
      itemsPerPage: number
    ) => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;

      const normalized = query.toLowerCase();
      const filtered = allPokemon.filter((p) => p.name.includes(normalized));
      const startIndex = (currentPage - 1) * itemsPerPage;
      const filteredPaginated = filtered.slice(startIndex, startIndex + itemsPerPage);

      setTotalPages(Math.ceil(filtered.length / itemsPerPage));
      setIsLoading(true);
      setError(null);

      try {
        const settled = await Promise.allSettled(
          filteredPaginated.map((item) => fetchPokemonResult(item, controller.signal))
        );

        const successfulResults = settled
          .filter((r): r is PromiseFulfilledResult<SearchResult> => r.status === 'fulfilled')
          .map((r) => r.value);

        const errors = settled
          .filter(
            (r): r is PromiseRejectedResult =>
              r.status === 'rejected' && r.reason?.name !== 'AbortError'
          )
          .map((r) => r.reason?.message);

        setResults(successfulResults);
        if (errors.length > 0) setError((prev) => [...(prev ?? []), ...errors]);
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          setError((prev) => [...(prev ?? []), (e as Error).message]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    },
    []
  );

  useEffect(() => {
    console.log('add to local storage');
    setItemsPerPage(itemsPerPage);
    setSearchQuery(searchQuery);
    setCurrentPage(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerPage, searchQuery, currentPage]);

  useEffect(() => {
    if (allPokemon.length > 0) return;

    const controller = new AbortController();

    const loadAllPokemon = async () => {
      console.log('loadAllPokemon');
      setIsLoading(true);

      try {
        const list = await fetchAllPokemon(controller.signal);
        setAllPokemon(list);
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          setError((prev) => [...(prev ?? []), (e as Error).message]);
          setIsLoading(false);
        }
      }
    };

    loadAllPokemon();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (allPokemon.length === 0) return;

    const controller = new AbortController();

    const runFiltering = async () => {
      console.log('runFiltering');
      setIsLoading(true);
      setError(null);

      try {
        await fetchResults(allPokemon, searchQuery, currentPage, itemsPerPage);
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          setError((prev) => [...(prev ?? []), (e as Error).message]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    runFiltering();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPokemon, currentPage, itemsPerPage, searchQuery]);

  const handleSearch = (query: string) => {
    if (query === searchQuery && !isInitialMount.current) return;

    isInitialMount.current = false;
    setSearchQuery(query);
    navigate({ search: { filter: query, page: 1, limit: itemsPerPage } });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate({ search: { filter: searchQuery, page, limit: itemsPerPage } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCount = (count: CountItem) => {
    if (count === itemsPerPage) return;

    setItemsPerPage(count);
    navigate({ search: { filter: searchQuery, page: 1, limit: count } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseDetails = () => {
    navigate({
      to: '/pokemons',
      search: {
        filter: searchQuery,
        page: currentPage,
        limit: itemsPerPage,
      },
    });
  };

  return (
    <div className="space-y-8 pb-2">
      <ProgressBar isLoading={isLoading} />
      <SearchSection onSearch={handleSearch} query={searchQuery} />
      <ResultsSection results={results} isLoading={isLoading} errors={error} />
      {totalPages > 1 && !isLoading && (
        <div className="flex justify-center flex-wrap gap-8 items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <SelectCountItem defaultCount={itemsPerPage} onSelect={handleSelectCount} />
        </div>
      )}
      {detailId && (
        <div className="fixed top-0 right-0 w-full md:w-lg h-full  bg-deep-space  shadow-lg p-10 overflow-auto z-100">
          <Button
            onClick={handleCloseDetails}
            className="absolute top-4 right-4 text-stardust hover:text-guidepost-green text-xl font-bold cursor-pointer transition-colors"
            ariaLabel="Close details"
          >
            ✕
          </Button>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default HomePage;
