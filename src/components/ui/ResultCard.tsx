import { Link } from '@tanstack/react-router';
import type { SearchResult } from '../../types/SearchResult';
import PokemonImage from './PokemonImage';
import { Route } from '../../routes/pokemons';

const ResultCard = ({ id, name, description, image }: SearchResult) => {
  const currentSearch = Route.useSearch();
  return (
    <li className="bg-white/6 rounded-(--radius-cards) p-4 flex flex-col gap-3">
      <Link to="/pokemons/$detailId" params={{ detailId: String(id) }} search={currentSearch} aria-label={`View details for ${name}`} >
        {image && <PokemonImage src={image} alt={name} />}
        <h3 className="text-heading-sm font-medium text-stardust capitalize">{name}</h3>
        <p className="text-body-sm text-muted-text leading-relaxed">{description}</p>
      </Link>
    </li>
  );
};

export default ResultCard;
