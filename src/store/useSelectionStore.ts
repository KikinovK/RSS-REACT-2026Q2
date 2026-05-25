import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SELECTION_STORE_KEY } from '../utils/const';
import { getStoredData, removeStoredData, setStoredData } from '../utils/storage';

interface SelectionState {
  selectedItems: Set<string>;
  toggleItem: (id: string) => void;
  clearSelections: () => void;
  getSelectedCount: () => number;
  isSelected: (id: string) => boolean;
}

export const useSelectionStore = create<SelectionState>()(
  persist(
    (set, get) => ({
      selectedItems: new Set<string>(),

      toggleItem: (id: string) => {
        set((state) => {
          const newSelected = new Set(state.selectedItems);
          if (newSelected.has(id)) {
            newSelected.delete(id);
          } else {
            newSelected.add(id);
          }
          return { selectedItems: newSelected };
        });
      },

      clearSelections: () => {
        set({ selectedItems: new Set<string>() });
      },

      getSelectedCount: () => {
        return get().selectedItems.size;
      },

      isSelected: (id: string) => {
        return get().selectedItems.has(id);
      },
    }),
    {
      name: SELECTION_STORE_KEY,
      storage: {
        getItem: (name) => {
          const item = getStoredData<{ state: { selectedItems: string[] }; version: number }>(name);
          if (!item) return null;
          return {
            state: {
              ...item.state,
              selectedItems: new Set(item.state.selectedItems || []),
            },
            version: item.version,
          };
        },
        setItem: (name, value) => {
          const serialized = {
            state: {
              ...value.state,
              selectedItems: Array.from(value.state.selectedItems),
            },
            version: value.version,
          };
          setStoredData(name, serialized);
        },
        removeItem: (name) => removeStoredData(name),
      },
    }
  )
);
