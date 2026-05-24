import { Route } from '../routes/pokemons';
import SearchBar from './SearchBar';
import { useRef } from 'react';

const SearchSection = () => {
  const { filter: searchQuery } = Route.useSearch();
  const navigate = Route.useNavigate();
  const isInitialMount = useRef(true);

  const handleSearch = (query: string) => {
    if (query === searchQuery && !isInitialMount.current) return;
    isInitialMount.current = false;
    navigate({
      search: (prev) => ({
        ...prev,
        filter: query,
      }),
    });
  };

  return (
    <section className="w-full px-8 py-6 border-b border-midnight-core flex flex-col items-center gap-4">
      <h1 className="text-heading-lg font-noigrotesk text-stardust tracking-tight">
        Pokémon Search
      </h1>
      <SearchBar onSearch={handleSearch} query={searchQuery} />
    </section>
  );
};

export default SearchSection;
