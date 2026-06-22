'use client';

import { useCallback, useState } from 'react';
import SearchInput from './ui/SearchInput';
import Button from './ui/Button';
import SearchIcon from './ui/icon/SearchIcon';
import { useTranslations } from 'next-intl';

interface SearchBarProps {
  onSearch: (query: string) => void;
  query?: string;
}

const SearchBar = ({ onSearch, query: initialQuery }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery || '');
  const t = useTranslations('search');

  const handleChange = useCallback(
    (value: string) => {
      setQuery(value);
    },
    [setQuery]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = query.trim().replace(/\s+/g, ' ');
    setQuery(normalized);
    onSearch(normalized);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full max-w-2xl">
      <SearchInput value={query} onChange={handleChange} ariaLabel={t('ariaLabel')} placeholder={t('placeholder')} />
      <Button type="submit" ariaLabel={t('buttonAriaLabel')} className="bg-guidepost-green">
        <SearchIcon className="w-5 h-5 text-deep-space" />
      </Button>
    </form>
  );
};

export default SearchBar;
