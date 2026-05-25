import { Link } from '@tanstack/react-router';
import type { SearchResult } from '../../types/SearchResult';
import PokemonImage from './PokemonImage';
import Checkbox from './Checkbox';
import { Route } from '../../routes/pokemons';

interface ResultCardProps extends SearchResult {
  isSelected?: boolean;
  onSelectionChange?: () => void;
}

const ResultCard = ({
  id,
  name,
  description,
  image,
  isSelected = false,
  onSelectionChange,
}: ResultCardProps) => {
  const currentSearch = Route.useSearch();

  const handleCheckboxChange = () => {
    onSelectionChange?.();
  };

  return (
    <li className="bg-black/6 dark:bg-white/6 rounded-(--radius-cards) p-4 flex flex-col gap-3 relative">
      <div className="absolute top-4 left-4 z-10">
        <Checkbox
          checked={isSelected}
          onChange={handleCheckboxChange}
          ariaLabel={`Select ${name}`}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <Link
        to="/pokemons/$detailId"
        params={{ detailId: String(id) }}
        search={currentSearch}
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
