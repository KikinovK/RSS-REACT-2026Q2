import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';

describe('App - Router Integration Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('renders the root layout with header, outlet, and footer', async () => {
    const memoryHistory = createMemoryHistory({
      initialEntries: ['/'],
    });
    const router = createRouter({ routeTree, history: memoryHistory });

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    });
    expect(screen.getByRole('main')).toBeInTheDocument(); // Outlet
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('navigates to about page', async () => {
    const memoryHistory = createMemoryHistory({
      initialEntries: ['/about'],
    });
    const router = createRouter({ routeTree, history: memoryHistory });

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByText('About Pokémon Search')).toBeInTheDocument();
    });
  });

  it('shows error boundary when navigation fails', async () => {
    const memoryHistory = createMemoryHistory({
      initialEntries: ['/'],
    });
    const router = createRouter({ routeTree, history: memoryHistory });

    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network error'));

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByText('Network error')).toBeInTheDocument();
    });
  });
});
