"use client";

import { useRouter } from '../../../../i18n/navigation';

import Pagination from '../../../../components/ui/Pagination';
import SelectCountItem from '../../../../components/ui/SelectCountItem';

import { CountItem } from '../../../../types/CoutItem';

interface ControlsProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: CountItem;
  searchQuery: string;
}

export function PokemonsControls({ currentPage, totalPages, itemsPerPage, searchQuery }: ControlsProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/pokemons?filter=${searchQuery}&page=${page}&limit=${itemsPerPage}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCount = (count: CountItem) => {
    if (count === itemsPerPage) return;
    router.push(`/pokemons?filter=${searchQuery}&page=1&limit=${count}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <SelectCountItem defaultCount={itemsPerPage} onSelect={handleSelectCount} />
    </>
  );
}
