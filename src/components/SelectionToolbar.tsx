import { useQueryClient } from '@tanstack/react-query';
import { useSelectionStore } from '../store/useSelectionStore';
import { downloadCSV } from '../utils/csvExport';
import Button from './ui/Button';
import { fetchAllPokemon, fetchPokemonResult } from '../api/pokemonApi';
import { extractLastSegment } from '../utils/utils';
import { pokemonKeys } from '../hooks/usePokemonQueries';

const SelectionToolbar = () => {
  const queryClient = useQueryClient();
  const { getSelectedCount, clearSelections } = useSelectionStore();
  const selectedCount = getSelectedCount();

  if (selectedCount === 0) {
    return null;
  }

  const handleDownload = async () => {
    const selectedItems = useSelectionStore.getState().selectedItems;
    const selectedIds = Array.from(selectedItems);

    const allPokemon = await queryClient.ensureQueryData({
      queryKey: pokemonKeys.all,
      queryFn: ({ signal }) => fetchAllPokemon(signal),
    });
    const selectedResults = await Promise.all(
      selectedIds.map((id) => {
        const pokemonItem = allPokemon.find((p) => extractLastSegment(p.url) === id);

        if (!pokemonItem) return Promise.resolve({ id: '', name: '', description: '', image: '' });

        return queryClient.fetchQuery({
          queryKey: ['pokemon', 'detail', id],
          queryFn: ({ signal }) => fetchPokemonResult(pokemonItem, signal),
        });
      })
    );

    downloadCSV(selectedResults);
  };

  if (selectedCount === 0) {
    return null;
  }

  return (
    <div
      className="
      fixed bottom-0 left-0 right-0 z-50
      w-full px-8 py-4
      bg-midnight-core/90 backdrop-blur-sm
      border-t border-midnight-core
      flex items-center justify-between gap-4
    "
    >
      <div className="flex items-center gap-2">
        <span className="text-body font-medium text-guidepost-green">
          {selectedCount} item(s) selected
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Button
          onClick={clearSelections}
          className="bg-guidepost-green"
          ariaLabel="Clear selections"
        >
          Unselect all
        </Button>
        <Button
          onClick={handleDownload}
          className="bg-guidepost-green"
          ariaLabel="Download selected items"
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default SelectionToolbar;
