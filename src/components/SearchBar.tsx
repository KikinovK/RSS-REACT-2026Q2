import { useCallback, useEffect } from 'react';
import SearchInput from './ui/SearchInput';
import Button from './ui/Button';
import SearchIcon from '../assets/icons/search.svg?react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { SEARCH_KEY } from '../utils/const';

interface SearchBarProps {
  onSearch: (query: string) => void;
  query?: string;
}

const SearchBar = ({ onSearch, query: initialQuery }: SearchBarProps) => {
  const [query, setQuery] = useLocalStorage(SEARCH_KEY, '');

  useEffect(() => {
    setQuery(initialQuery || query);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback((value: string) => {
    setQuery(value);
  }, [setQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = query.trim().replace(/\s+/g, ' ');
    setQuery(normalized);
    onSearch(normalized);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full max-w-2xl">
      <SearchInput value={query} onChange={handleChange} ariaLabel="Search Pokémon" />
        <Button type="submit" ariaLabel="Search" className='bg-guidepost-green'>
          <SearchIcon className="w-5 h-5 text-deep-space" />
        </Button>
    </form>
  );
}

export default SearchBar;
