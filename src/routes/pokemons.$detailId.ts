import { createFileRoute } from '@tanstack/react-router';
import DetailsCard from '../components/DetailsCard';

export const Route = createFileRoute('/pokemons/$detailId')({
  component: DetailsCard,
});
