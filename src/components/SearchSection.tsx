import SearchBar from './SearchBar';

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

const SearchSection = ({ onSearch }: SearchSectionProps) => {
  return (
    <section className="w-full px-8 py-6 border-b border-midnight-core flex flex-col items-center gap-4">
      <h1 className="text-heading-lg font-noigrotesk text-stardust tracking-tight">
        Pokémon Search
      </h1>
      <SearchBar onSearch={onSearch} />
    </section>
  );
}

export default SearchSection;
