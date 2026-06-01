import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { usePokemonSearch, usePokemonDetails, pokemonKeys } from '../hooks/usePokemonQueries';
import * as pokemonApi from '../api/pokemonApi';
import mockPokemonList from '../__mocks__/list';
import mockPokemonDataList from '../__mocks__/pokemonData';
import mockSearchResults from '../__mocks__/searchResults';

vi.mock('../api/pokemonApi');

describe('usePokemonQueries - Loading Behavior', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });
  });

  afterEach(() => {
    queryClient.clear();
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('should show loading state initially for usePokemonSearch', () => {
    vi.mocked(pokemonApi.fetchAllPokemon).mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve(mockPokemonList), 100))
    );

    const { result } = renderHook(() => usePokemonSearch('', 1, 4), { wrapper });

    expect(result.current.isPending).toBe(true);
    expect(result.current.data).toBeUndefined();
  });

  it('should transition from loading to success state for usePokemonSearch', async () => {
    vi.mocked(pokemonApi.fetchAllPokemon).mockResolvedValue(mockPokemonList);
    vi.mocked(pokemonApi.fetchPokemonResult).mockResolvedValue(mockSearchResults[0]);

    const { result } = renderHook(() => usePokemonSearch('', 1, 4), { wrapper });

    expect(result.current.isPending).toBe(true);

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toBeDefined();
      expect(result.current.data?.results.length).toBeGreaterThan(0);
    });
  });

  it('should show loading state for usePokemonDetails', () => {
    vi.mocked(pokemonApi.fetchPokemonData).mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve(mockPokemonDataList[0]), 100))
    );

    const { result } = renderHook(() => usePokemonDetails('25'), { wrapper });

    expect(result.current.isPending).toBe(true);
    expect(result.current.data).toBeUndefined();
  });

  it('should transition from loading to success state for usePokemonDetails', async () => {
    vi.mocked(pokemonApi.fetchPokemonData).mockResolvedValue(mockPokemonDataList[0]);

    const { result } = renderHook(() => usePokemonDetails('25'), { wrapper });

    expect(result.current.isPending).toBe(true);

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toEqual(mockPokemonDataList[0]);
    });
  });
});

describe('usePokemonQueries - Error Handling', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });
  });

  afterEach(() => {
    queryClient.clear();
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('should handle partial errors in usePokemonSearch results', async () => {
    vi.mocked(pokemonApi.fetchAllPokemon).mockResolvedValue(mockPokemonList);
    vi.mocked(pokemonApi.fetchPokemonResult)
      .mockResolvedValueOnce(mockSearchResults[0])
      .mockRejectedValueOnce(new Error('Failed to fetch pokemon'))
      .mockResolvedValueOnce(mockSearchResults[1]);

    const { result } = renderHook(() => usePokemonSearch('', 1, 4), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data?.errors.length).toBeGreaterThan(0);
      expect(result.current.data?.results.length).toBeGreaterThan(0);
    });
  });

  it('should handle error in usePokemonDetails', async () => {
    const errorMessage = 'Pokemon not found';
    vi.mocked(pokemonApi.fetchPokemonData).mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => usePokemonDetails('999'), { wrapper });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
      expect(result.current.error?.message).toBe(errorMessage);
    });
  });
});

describe('usePokemonQueries - Caching Behavior', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: Infinity,
        },
      },
    });
  });

  afterEach(() => {
    queryClient.clear();
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('should cache usePokemonSearch results', async () => {
    vi.mocked(pokemonApi.fetchAllPokemon).mockResolvedValue(mockPokemonList);
    vi.mocked(pokemonApi.fetchPokemonResult).mockResolvedValue(mockSearchResults[0]);

    const { result: result1 } = renderHook(() => usePokemonSearch('bulb', 1, 4), { wrapper });

    await waitFor(() => {
      expect(result1.current.isSuccess).toBe(true);
    });

    const fetchCallCount1 = vi.mocked(pokemonApi.fetchAllPokemon).mock.calls.length;

    const { result: result2 } = renderHook(() => usePokemonSearch('bulb', 1, 4), { wrapper });

    await waitFor(() => {
      expect(result2.current.isSuccess).toBe(true);
    });

    const fetchCallCount2 = vi.mocked(pokemonApi.fetchAllPokemon).mock.calls.length;

    expect(fetchCallCount2).toBe(fetchCallCount1);
    expect(result1.current.data).toEqual(result2.current.data);
  });

  it('should cache usePokemonDetails results', async () => {
    vi.mocked(pokemonApi.fetchPokemonData).mockResolvedValue(mockPokemonDataList[0]);

    const { result: result1 } = renderHook(() => usePokemonDetails('25'), { wrapper });

    await waitFor(() => {
      expect(result1.current.isSuccess).toBe(true);
    });

    const fetchCallCount1 = vi.mocked(pokemonApi.fetchPokemonData).mock.calls.length;

    const { result: result2 } = renderHook(() => usePokemonDetails('25'), { wrapper });

    await waitFor(() => {
      expect(result2.current.isSuccess).toBe(true);
    });

    const fetchCallCount2 = vi.mocked(pokemonApi.fetchPokemonData).mock.calls.length;

    expect(fetchCallCount2).toBe(fetchCallCount1);
    expect(result1.current.data).toEqual(result2.current.data);
  });

  it('should have separate cache entries for different pokemon details', async () => {
    vi.mocked(pokemonApi.fetchPokemonData)
      .mockResolvedValueOnce(mockPokemonDataList[0])
      .mockResolvedValueOnce(mockPokemonDataList[1]);

    const { result: result1 } = renderHook(() => usePokemonDetails('25'), { wrapper });

    await waitFor(() => {
      expect(result1.current.isSuccess).toBe(true);
    });

    const fetchCallCount1 = vi.mocked(pokemonApi.fetchPokemonData).mock.calls.length;

    const { result: result2 } = renderHook(() => usePokemonDetails('1'), { wrapper });

    await waitFor(() => {
      expect(result2.current.isSuccess).toBe(true);
    });

    const fetchCallCount2 = vi.mocked(pokemonApi.fetchPokemonData).mock.calls.length;

    expect(fetchCallCount2).toBeGreaterThan(fetchCallCount1);
  });

  it('should use placeholder data during refetch', async () => {
    vi.mocked(pokemonApi.fetchAllPokemon).mockResolvedValue(mockPokemonList);
    vi.mocked(pokemonApi.fetchPokemonResult).mockResolvedValue(mockSearchResults[0]);

    const { result: result1 } = renderHook(() => usePokemonSearch('bulb', 1, 4), { wrapper });

    await waitFor(() => {
      expect(result1.current.isSuccess).toBe(true);
    });

    const previousData = result1.current.data;

    vi.mocked(pokemonApi.fetchAllPokemon).mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve(mockPokemonList), 50))
    );

    queryClient.invalidateQueries({
      queryKey: pokemonKeys.list('bulb', 1, 4),
    });

    const { result: result2 } = renderHook(() => usePokemonSearch('bulb', 1, 4), { wrapper });

    expect(result2.current.data).toEqual(previousData);

    await waitFor(() => {
      expect(result2.current.isSuccess).toBe(true);
    });
  });
});
