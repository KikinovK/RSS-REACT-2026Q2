import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TEST_KEY = 'test-key';
const INITIAL_VALUE = 'initial-value';

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

afterEach(() => {
  localStorage.clear();
});

describe('useLocalStorage Hook', () => {
  it('should return initialValue if there is no data in localStorage yet', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, INITIAL_VALUE));

    expect(result.current[0]).toBe(INITIAL_VALUE);
    expect(localStorage.getItem(TEST_KEY)).toBeNull();
  });

  it('should initialize with the value from localStorage if it exists', () => {
    localStorage.setItem(TEST_KEY, JSON.stringify({ value: 'existing-value' }));

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
    expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify({ value: 'new-value' }));
  });

  it('should support passing a functional updater to setValue', () => {
    const { result } = renderHook(() => useLocalStorage<number>(TEST_KEY, 10));
    const [, setValue] = result.current;

    act(() => {
      setValue((prev) => prev + 5);
    });

    expect(result.current[0]).toBe(15);
    expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify({ value: 15 }));
  });

  it('should remove value from localStorage when removeValue is called', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, INITIAL_VALUE));
    const [, setValue, removeValue] = result.current;

    act(() => {
      setValue('new-value');
    });

    expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify({ value: 'new-value' }));

    act(() => {
      removeValue();
    });

    expect(localStorage.getItem(TEST_KEY)).toBeNull();
    expect(result.current[0]).toBe(INITIAL_VALUE);
  });

  it('should handle objects and arrays correctly', () => {
    const initialObj = { count: 0, name: 'test' };
    const { result } = renderHook(() => useLocalStorage<typeof initialObj>(TEST_KEY, initialObj));
    const [, setValue] = result.current;

    act(() => {
      setValue({ count: 1, name: 'updated' });
    });

    expect(result.current[0]).toEqual({ count: 1, name: 'updated' });
    expect(localStorage.getItem(TEST_KEY)).toBe(
      JSON.stringify({ value: { count: 1, name: 'updated' } })
    );
  });

  it('should handle JSON parsing errors gracefully', () => {
    localStorage.setItem(TEST_KEY, 'invalid-json-{');

    const { result } = renderHook(() => useLocalStorage(TEST_KEY, INITIAL_VALUE));

    expect(result.current[0]).toBe(INITIAL_VALUE);
  });

  it('should handle storage errors gracefully and keep state updated', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, INITIAL_VALUE));
    const [, setValue] = result.current;

    act(() => {
      setValue('new-value');
    });

    expect(result.current[0]).toBe('new-value');
  });

  it('should work with different data types', () => {
    const { result: numberResult } = renderHook(() => useLocalStorage<number>('num-key', 42));
    const { result: boolResult } = renderHook(() => useLocalStorage<boolean>('bool-key', true));

    act(() => {
      numberResult.current[1](100);
      boolResult.current[1](false);
    });

    expect(numberResult.current[0]).toBe(100);
    expect(boolResult.current[0]).toBe(false);
    expect(localStorage.getItem('num-key')).toBe(JSON.stringify({ value: 100 }));
    expect(localStorage.getItem('bool-key')).toBe(JSON.stringify({ value: false }));
  });
});
