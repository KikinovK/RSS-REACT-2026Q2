import ResultCard from './ui/ResultCard';
import ErrorMessage from './ui/ErrorMessage';
import type { SearchResult } from '../types/SearchResult';

interface ResultsSectionProps {
  results: SearchResult[];
  isLoading: boolean;
  errors: string[] | null;
}

const ResultsSection  = ({ results, isLoading, errors }: ResultsSectionProps) => {
  return (
    <section className="w-full flex-1 px-8 py-6 flex flex-col gap-4">
      <h2 className="text-heading font-noigrotesk text-stardust">Results</h2>
      {isLoading && <p className="text-body text-muted-text">Loading...</p>}
      {errors && <ErrorMessage messages={errors} />}
      {!isLoading && !errors && results.length === 0 && (
        <p className="text-body text-muted-text">No results found.</p>
      )}
      {!isLoading && results.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {results.map((item) => (
            <ResultCard key={item.id} {...item} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ResultsSection;
