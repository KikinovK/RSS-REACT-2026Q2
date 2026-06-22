import { redirect } from 'next/navigation';

const RootPage = () => {
  redirect('/en/pokemons?page=1&filter=&limit=4');
};

export default RootPage;
