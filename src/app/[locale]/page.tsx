import { redirect } from 'next/navigation';

const LocaleRootPage = () => {
  redirect('/pokemons?page=1&filter=&limit=4');
};

export default LocaleRootPage;
