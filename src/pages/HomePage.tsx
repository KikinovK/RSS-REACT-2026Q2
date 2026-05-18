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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    limit: itemsPerPage,
    filter: searchQuery,
    page: currentPage
  } = Route.useSearch();
  const navigate = Route.useNavigate();

  const matchRoute = useMatchRoute();
  const isDetailsRouteActive = matchRoute({ to: '/pokemons/$detailId' })
  const detailId = isDetailsRouteActive ? isDetailsRouteActive.detailId : undefined

  const [ , setItemsPerPage] = useLocalStorage<CountItem>(LIMIT_KEY, OPTIONS_COUNT_ITEMS[0]);
  const [ , setSearchQuery] = useLocalStorage<string>(SEARCH_KEY, '');
  const [ , setCurrentPage] = useLocalStorage<number>(PAGE_KEY, 1);

  const abortControllerRef = useRef<AbortController | null>(null);
  const isInitialMount = useRef(true);


  const fetchResults = useCallback (async (allPokemon: PokemonListItem[], query: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const normalized = query.toLowerCase();
    const filtered = allPokemon.filter((p) => p.name.includes(normalized));

    setIsLoading(true);
    setError(null);

    try {
      const settled = await Promise.allSettled(
        filtered.map((item) => fetchPokemonResult(item, controller.signal))
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
    setItemsPerPage(itemsPerPage);
    setSearchQuery(searchQuery);
    setCurrentPage(currentPage);
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
    navigate({ search: { filter: query, page: 1, limit: itemsPerPage } });
    fetchResults(allPokemon, query);
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

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResults = results.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-8 pb-2">
      <ProgressBar isLoading={isLoading} />
      <SearchSection onSearch={handleSearch} query={searchQuery}/>
      <ResultsSection results={paginatedResults} isLoading={isLoading} error={error} />
      {totalPages > 1 && !isLoading && (
        <div className="flex justify-center gap-8 items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <SelectCountItem
            defaultCount={itemsPerPage}
            onSelect={handleSelectCount}
          />
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
