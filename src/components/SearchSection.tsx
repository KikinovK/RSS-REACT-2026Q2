'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from '../i18n/navigation';
import { useRef } from 'react';
import SearchBar from './SearchBar';
import { useTranslations } from 'next-intl';

const SearchSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('search');

  const searchQuery = searchParams.get('filter') || '';

  const isInitialMount = useRef(true);

  const handleSearch = (query: string) => {
    if (query === searchQuery && !isInitialMount.current) return;
    isInitialMount.current = false;

    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set('filter', query);
    } else {
      params.delete('filter');
    }

    params.set('page', '1');

    router.push(`/pokemons?${params.toString()}`);
  };

  return (
    <section className="w-full px-8 py-6 border-b border-midnight-core flex flex-col items-center gap-4">
      <h1 className="text-heading-lg font-noigrotesk text-stardust tracking-tight">{t('title')}</h1>
      <SearchBar onSearch={handleSearch} query={searchQuery} />
    </section>
  );
};

export default SearchSection;
