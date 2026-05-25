import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useSelectionStore } from '../store/useSelectionStore';
import { SELECTION_STORE_KEY } from '../utils/const';

describe('useSelectionStore', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    useSelectionStore.setState({ selectedItems: new Set<string>() });
  });

  describe('toggleItem', () => {
    it('should add item to selectedItems when not selected', () => {
      const { result } = renderHook(() => useSelectionStore());

      act(() => {
        result.current.toggleItem('1');
      });

      expect(result.current.isSelected('1')).toBe(true);
      expect(result.current.getSelectedCount()).toBe(1);
    });

    it('should remove item from selectedItems when already selected', () => {
      const { result } = renderHook(() => useSelectionStore());

      act(() => {
        result.current.toggleItem('1');
        result.current.toggleItem('1');
      });

      expect(result.current.isSelected('1')).toBe(false);
      expect(result.current.getSelectedCount()).toBe(0);
    });

    it('should handle multiple items independently', () => {
      const { result } = renderHook(() => useSelectionStore());

      act(() => {
        result.current.toggleItem('1');
        result.current.toggleItem('2');
        result.current.toggleItem('3');
      });

      expect(result.current.isSelected('1')).toBe(true);
      expect(result.current.isSelected('2')).toBe(true);
      expect(result.current.isSelected('3')).toBe(true);
      expect(result.current.getSelectedCount()).toBe(3);
    });
  });

  describe('isSelected', () => {
    it('should return false for unselected items', () => {
      const { result } = renderHook(() => useSelectionStore());

      expect(result.current.isSelected('1')).toBe(false);
    });

    it('should return true for selected items', () => {
      const { result } = renderHook(() => useSelectionStore());

      act(() => {
        result.current.toggleItem('1');
      });

      expect(result.current.isSelected('1')).toBe(true);
    });
  });

  describe('getSelectedCount', () => {
    it('should return 0 when no items are selected', () => {
      const { result } = renderHook(() => useSelectionStore());

      expect(result.current.getSelectedCount()).toBe(0);
    });

    it('should return correct count of selected items', () => {
      const { result } = renderHook(() => useSelectionStore());

      act(() => {
        result.current.toggleItem('1');
        result.current.toggleItem('2');
      });

      expect(result.current.getSelectedCount()).toBe(2);
    });

    it('should decrease count when item is deselected', () => {
      const { result } = renderHook(() => useSelectionStore());

      act(() => {
        result.current.toggleItem('1');
        result.current.toggleItem('2');
        result.current.toggleItem('1');
      });

      expect(result.current.getSelectedCount()).toBe(1);
    });
  });

  describe('clearSelections', () => {
    it('should clear all selected items', () => {
      const { result } = renderHook(() => useSelectionStore());

      act(() => {
        result.current.toggleItem('1');
        result.current.toggleItem('2');
        result.current.toggleItem('3');
      });

      expect(result.current.getSelectedCount()).toBe(3);

      act(() => {
        result.current.clearSelections();
      });

      expect(result.current.getSelectedCount()).toBe(0);
      expect(result.current.isSelected('1')).toBe(false);
      expect(result.current.isSelected('2')).toBe(false);
      expect(result.current.isSelected('3')).toBe(false);
    });

    it('should work on empty selections', () => {
      const { result } = renderHook(() => useSelectionStore());

      act(() => {
        result.current.clearSelections();
      });

      expect(result.current.getSelectedCount()).toBe(0);
    });
  });

  describe('persistence', () => {
    it('should persist selected items to localStorage', () => {
      const { result: result1 } = renderHook(() => useSelectionStore());

      act(() => {
        result1.current.toggleItem('1');
        result1.current.toggleItem('2');
      });

      const stored = localStorage.getItem(SELECTION_STORE_KEY);
      expect(stored).toBeTruthy();
      const parsed = JSON.parse(stored!);
      expect(parsed.state.selectedItems).toContain('1');
      expect(parsed.state.selectedItems).toContain('2');
    });

    it('should restore selected items from localStorage', async () => {
      const testData = {
        state: {
          selectedItems: ['1', '2', '3'],
        },
        version: 0,
      };

      localStorage.setItem(SELECTION_STORE_KEY, JSON.stringify(testData));

      const { result } = renderHook(() => useSelectionStore());

      await useSelectionStore.persist.rehydrate();

      await waitFor(() => {
        const state = useSelectionStore.getState();
        expect(state.selectedItems.size).toBe(3);
        expect(result.current.getSelectedCount()).toBe(3);
      });

      expect(result.current.isSelected('1')).toBe(true);
      expect(result.current.isSelected('2')).toBe(true);
      expect(result.current.isSelected('3')).toBe(true);
    });
  });
});
