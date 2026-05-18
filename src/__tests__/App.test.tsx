import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'

describe('App - Router Integration Tests', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('renders the root layout with header, outlet, and footer', async () => {
    const memoryHistory = createMemoryHistory({
      initialEntries: ['/'],
    })
    const router = createRouter({ routeTree, history: memoryHistory })

    render(<RouterProvider router={router} />)

    await waitFor(() => {
    expect(screen.getByRole('banner')).toBeInTheDocument()  // Header
  })
    expect(screen.getByRole('main')).toBeInTheDocument() // Outlet
    expect(screen.getByRole('contentinfo')).toBeInTheDocument() // Footer
  })

  it('navigates to home page on root route', async () => {
    const memoryHistory = createMemoryHistory({
      initialEntries: ['/'],
    })
    const router = createRouter({ routeTree, history: memoryHistory })

    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' }] }),
      } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => ({ id: 1, name: 'bulbasaur', sprites: { other: { 'official-artwork': { front_default: 'url' } } } }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => ({ flavor_text_entries: [{ language: { name: 'en' }, flavor_text: 'test' }] }) } as Response)

    render(<RouterProvider router={router} />)

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())
  })

  it('navigates to about page', async () => {
    const memoryHistory = createMemoryHistory({
      initialEntries: ['/about'],
    })
    const router = createRouter({ routeTree, history: memoryHistory })

    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByText('About Pokémon Search')).toBeInTheDocument()
    })
  })

  it('shows error boundary when navigation fails', async () => {
    const memoryHistory = createMemoryHistory({
      initialEntries: ['/'],
    })
    const router = createRouter({ routeTree, history: memoryHistory })

    vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network error'))

    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByText('Network error')).toBeInTheDocument()
    })
  })
})
