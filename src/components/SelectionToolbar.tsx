import { useSelectionStore } from '../store/useSelectionStore';
import Button from './ui/Button';

const SelectionToolbar = () => {
  const { getSelectedCount, clearSelections } = useSelectionStore();
  const selectedCount = getSelectedCount();

  if (selectedCount === 0) {
    return null;
  }

  return (
    <div className="w-full px-8 py-4 bg-midnight-core/50 border-b border-midnight-core flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-body font-medium text-guidepost-green">
          {selectedCount} item(s) selected
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Button
          onClick={clearSelections}
          className="bg-transparent border border-midnight-core text-stardust hover:bg-midnight-core/50"
          ariaLabel="Clear selections"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default SelectionToolbar;
