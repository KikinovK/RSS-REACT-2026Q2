import ResultCard from './ui/ResultCard';
import ErrorMessage from './ui/ErrorMessage';
import type { SearchResult } from '../types/SearchResult';
import { useSelectionStore } from '../store/useSelectionStore';

interface ResultsSectionProps {
  results: SearchResult[];
  isLoading: boolean;
  errors: string[] | null;
}

const ResultsSection = ({ results, isLoading, errors }: ResultsSectionProps) => {
  const { isSelected, toggleItem } = useSelectionStore();

  const handleSelectionChange = (id: string) => {
    toggleItem(id);
  };

  return (
    <section className="w-full flex-1 px-8 py-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-heading font-noigrotesk text-stardust">Results</h2>
      </div>
      {isLoading && <p className="text-body text-muted-text">Loading...</p>}
      {!isLoading && errors && <ErrorMessage messages={errors} />}
      {!isLoading && !errors && results.length === 0 && (
        <p className="text-body text-muted-text">No results found.</p>
      )}
      {!isLoading && results.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {results.map((item) => (
            <ResultCard
              key={item.id}
              {...item}
              isSelected={isSelected(item.id)}
              onSelectionChange={() => handleSelectionChange(item.id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ResultsSection;
