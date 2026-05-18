import { createFileRoute } from '@tanstack/react-router';
import HomePage from '../pages/HomePage';
import productsSearchSchema from '../utils/productsSearchSchema';

export const Route = createFileRoute('/pokemons')({
  validateSearch: (search) => productsSearchSchema.parse(search),
  search: {
    middlewares: [
      ({ search, next }) => {
        return next(search);
      },
    ],
  },
  component: HomePage,
});
