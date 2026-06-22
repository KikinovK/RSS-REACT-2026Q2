'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Link } from '../../i18n/navigation';

import PokemonImage from './PokemonImage';
import Checkbox from './Checkbox';

import { useSelectionStore } from '../../store/useSelectionStore';

import type { SearchResult } from '../../types/SearchResult';

interface ResultCardProps {
  item: SearchResult;
}

const ResultCard = ({ item }: ResultCardProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const { id, name, description, image } = item;

  const { isSelected, toggleItem } = useSelectionStore();

  const searchParams = useSearchParams();
  const currentSearch = searchParams.toString();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const handleSelectionChange = () => {
    toggleItem(id);
  };

  return (
    <li className="bg-black/6 dark:bg-white/6 rounded-(--radius-cards) p-4 flex flex-col gap-3 relative">
      <div className="absolute top-4 left-4 z-10">
        <Checkbox
          checked={isMounted ? isSelected(id) : false}
          onChange={handleSelectionChange}
          ariaLabel={`Select ${name}`}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <Link
        href={`/pokemons/${id}${currentSearch ? `?${currentSearch}` : ''}`}
        className="h-full w-full flex flex-col pl-10"
        aria-label={`View details for ${name}`}
      >
        <div className="relative w-full aspect-square">
          {image && <PokemonImage src={image} alt={name} />}
        </div>
        <h3 className="mb-2 text-center text-heading-sm font-medium text-stardust capitalize">
          {name}
        </h3>
        <p className="text-body-sm text-muted-text leading-relaxed">{description}</p>
      </Link>
    </li>
  );
};

export default ResultCard;
