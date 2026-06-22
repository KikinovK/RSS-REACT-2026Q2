import ResultCard from '../../../components/ui/ResultCard';
import { SearchResult } from '../../../types/SearchResult';

interface ResultsProps {
  results: SearchResult[];
}

export default function ResultsSectionServer({ results }: ResultsProps) {
  if (results.length === 0) {
    return <div className="text-stardust/60 text-center py-10">No objects found for your request.</div>;
  }

  return (
    <section className="w-full flex-1 px-8 py-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-heading font-noigrotesk text-stardust">Results</h2>
      </div>
      {results.length === 0 && (
        <p className="text-body text-muted-text">No results found.</p>
      )}
      {results.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {results.map((item) => (
            <ResultCard
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
