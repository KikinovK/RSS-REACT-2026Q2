import { useEffect } from 'react';
import { Outlet, useMatchRoute } from '@tanstack/react-router';

import { Route } from '../routes/pokemons';
import SearchSection from '../components/SearchSection';
import ResultsSection from '../components/ResultsSection';
import SelectionToolbar from '../components/SelectionToolbar';
import ProgressBar from '../components/ui/ProgressBar';
import Pagination from '../components/ui/Pagination';
import SelectCountItem from '../components/ui/SelectCountItem';
import Button from '../components/ui/Button';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { usePokemonSearch } from '../hooks/usePokemonQueries';

import { LIMIT_KEY, OPTIONS_COUNT_ITEMS, PAGE_KEY, SEARCH_KEY } from '../utils/const';

import { CountItem } from '../types/CoutItem';
import { useErrorStore } from '../store/useErrorStore';

const HomePage = () => {
  const { limit: itemsPerPage, filter: searchQuery, page: currentPage } = Route.useSearch();
  const navigate = Route.useNavigate();

  const { data, isLoading } = usePokemonSearch(searchQuery, currentPage, itemsPerPage);

  if (data?.errors && data.errors.length > 0) data?.errors.forEach((err) => {
    useErrorStore.getState().addError(err);
  });

  const matchRoute = useMatchRoute();
  const isDetailsRouteActive = matchRoute({ to: '/pokemons/$detailId' });
  const detailId = isDetailsRouteActive ? isDetailsRouteActive.detailId : undefined;

  const [, setItemsPerPage] = useLocalStorage<CountItem>(LIMIT_KEY, OPTIONS_COUNT_ITEMS[0]);
  const [, setSearchQuery] = useLocalStorage<string>(SEARCH_KEY, '');
  const [, setCurrentPage] = useLocalStorage<number>(PAGE_KEY, 1);

  useEffect(() => {
    setItemsPerPage(itemsPerPage);
    setSearchQuery(searchQuery);
    setCurrentPage(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerPage, searchQuery, currentPage]);

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
      <SearchSection />
      <SelectionToolbar />
      <ResultsSection results={data?.results || []} isLoading={isLoading} />
      {data && data.totalPages > 1 && !isLoading && (
        <div className="flex justify-center flex-wrap gap-8 items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={data.totalPages}
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
