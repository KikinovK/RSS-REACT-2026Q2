import SearchSection from '../../../components/SearchSection';
import SelectionToolbar from '../../../components/SelectionToolbar';
import productsSearchSchema from '../../../utils/productsSearchSchema';
import { fetchPokemons } from '../../../api/pokemonApi';
import PokemonsClientEffects from './PokemonsClientEffects';
import { PokemonsControls } from './PokemonsControls';
import DetailsModalContainer from './DetailsModalContainer';
import ResultsSectionServer from './ResultsSectionServer';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ searchParams, params }: PageProps) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const validatedSearch = productsSearchSchema.parse(resolvedSearchParams);
  const { limit: itemsPerPage, filter: searchQuery, page: currentPage } = validatedSearch;

  let data = null;
  let error = null;
  try {
    data = await fetchPokemons(searchQuery, currentPage, itemsPerPage);
  } catch (err) {
    error = err instanceof Error && err.message || 'Failed to fetch data';
  }

  const detailId = resolvedParams.slug && resolvedParams.slug[0] ? resolvedParams.slug[0] : undefined;

  return (
    <div className="space-y-8 pb-2">
      <PokemonsClientEffects serverErrors={data?.errors || (error ? [error] : [])} />
      <SearchSection />
      <SelectionToolbar />
      <ResultsSectionServer results={data?.results || []} />
      {data && data.totalPages > 1  && (
        <div className="flex justify-center flex-wrap gap-8 items-center">
          <PokemonsControls
            currentPage={currentPage}
            totalPages={data.totalPages}
            itemsPerPage={itemsPerPage}
            searchQuery={searchQuery}
          />
        </div>
      )}
      {detailId && (
        <DetailsModalContainer
          detailId={detailId}
          searchQuery={searchQuery}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      )}
    </div>
  );
};

export default Page;
