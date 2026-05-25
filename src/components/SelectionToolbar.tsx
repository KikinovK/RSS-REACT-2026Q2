import { usePokemonStore } from '../store/usePokemonStore';
import { useSelectionStore } from '../store/useSelectionStore';
import { downloadCSV } from '../utils/csvExport';
import Button from './ui/Button';

const SelectionToolbar = () => {
  const { getSelectedCount, clearSelections } = useSelectionStore();
  const selectedCount = getSelectedCount();
  const { fetchSelectedPokemon } = usePokemonStore();

  if (selectedCount === 0) {
    return null;
  }

  const handleDownload = async () => {
    const selectedItems = useSelectionStore.getState().selectedItems;
    const selectedResults = await fetchSelectedPokemon(
      Array.from(selectedItems),
      new AbortController().signal
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
