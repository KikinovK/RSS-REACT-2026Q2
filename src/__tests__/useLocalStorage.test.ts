import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../hooks/useLocalStorage';

  const TEST_KEY = 'test-key';
  const INITIAL_VALUE = 'initial-value';

  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

describe('useLocalStorage Hook', () => {

  it('should return initialValue if there is no data in localStorage yet', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, INITIAL_VALUE));

    expect(result.current[0]).toBe(INITIAL_VALUE);
    expect(localStorage.getItem(TEST_KEY)).toBeNull();
  });

  it('should initialize with the value from localStorage if it exists', () => {
    localStorage.setItem(TEST_KEY, 'existing-value');

    const { result } = renderHook(() => useLocalStorage(TEST_KEY, INITIAL_VALUE));

    expect(result.current[0]).toBe('existing-value');
  });

  it('should update state and write value to localStorage when setValue is called', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, INITIAL_VALUE));
    const [, setValue] = result.current;

    act(() => {
      setValue('new-value');
    });

    expect(result.current[0]).toBe('new-value');
    expect(localStorage.getItem(TEST_KEY)).toBe('new-value');
  });

  it('should support passing a functional updater to setValue', () => {
    const { result } = renderHook(() => useLocalStorage<number>(TEST_KEY, 10));
    const [, setValue] = result.current;

    act(() => {
      setValue((prev) => prev + 5);
    });

    expect(result.current[0]).toBe(15);
    expect(localStorage.getItem(TEST_KEY)).toBe('15');
  });
});
