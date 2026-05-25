import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
      name: 'pokemon-selection-store',
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          if (!item) return null;
          try {
            const parsed = JSON.parse(item);
            return {
              state: {
                ...parsed.state,
                selectedItems: new Set(parsed.state.selectedItems || []),
              },
              version: parsed.version,
            };
          } catch {
            return null;
          }
        },
        setItem: (name, value) => {
          const serialized = {
            state: {
              ...value.state,
              selectedItems: Array.from(value.state.selectedItems),
            },
            version: value.version,
          };
          localStorage.setItem(name, JSON.stringify(serialized));
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
