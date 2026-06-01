import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';
import { ThemeProvider } from '../context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('App - Router Integration Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  const mockFetchSuccess = () => {
    vi.stubGlobal('fetch', vi.fn((url: string) => {
      if (url.includes('/pokemon?')) {
        return Promise.resolve({
          ok: true,
          json: async () => ({ results: [] }),
        } as Response);
      }
      return Promise.resolve({
        ok: true,
        json: async () => ({}),
      } as Response);
    }));
  };

  const createTestRouter = () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false, staleTime: Infinity }
      }
    });

    const memoryHistory = createMemoryHistory({
      initialEntries: ['/'],
    });

    const router = createRouter({
      routeTree,
      history: memoryHistory,
      context: { queryClient }
    });

    return { queryClient, router };
  };

  it('renders the root layout with header, outlet, and footer', async () => {
    mockFetchSuccess();

    const { queryClient, router } = createTestRouter();

    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    }, { timeout: 3000 });
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('navigates to about page', async () => {
    mockFetchSuccess();

    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } }
    });

    const memoryHistory = createMemoryHistory({
      initialEntries: ['/about'],
    });

    const router = createRouter({
      routeTree,
      history: memoryHistory,
      context: { queryClient }
    });

    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('About Pokémon Search')).toBeInTheDocument();
    });
  });
});
