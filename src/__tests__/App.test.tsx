import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { SEARCH_KEY } from '../utils/const'

const mockPokemonList = [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' }]
const mockPokemonDetail = {
  id: 1,
  name: 'bulbasaur',
  sprites: { other: { 'official-artwork': { front_default: 'https://example.com/bulbasaur.png' } } },
}
const mockPokemonSpecies = {
  flavor_text_entries: [
    { language: { name: 'en' }, flavor_text: 'A strange seed was planted on its back at birth.' },
  ],
}

describe('App Component - Integration Tests', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('makes initial API call on component mount', async () => {
    const fetchMock = vi
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<App />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())

    expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=2000', expect.any(Object))
    expect(fetchMock).toHaveBeenCalledTimes(3)
  })

  it('handles search term from localStorage on initial load', async () => {
    localStorage.setItem(SEARCH_KEY, 'bulb')

    const fetchMock = vi
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<App />)

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())
    expect(screen.getByDisplayValue('bulb')).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledTimes(3)
  })

  it('manages loading states during API calls', async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<App />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
  })
})

describe('App Component - API Integration Tests', () => {
  it('calls API with correct parameters', async () => {
    const fetchMock = vi
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<App />)

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())

    expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=2000', expect.any(Object))
    expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1', expect.any(Object))
    expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-species/bulbasaur', expect.any(Object))
  })

  it('handles successful API responses', async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<App />)

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())
    expect(screen.getByText('A strange seed was planted on its back at birth.')).toBeInTheDocument()
  })

  it('handles API error responses', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: false, status: 500, json: async () => ({}) } as Response)

    render(<App />)

    await waitFor(() => expect(screen.getByText(/Failed to load Pokémon list/i)).toBeInTheDocument())
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })

  it('sets error state when initial fetch rejects with non-AbortError', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network failed'))

    render(<App />)

    await waitFor(() => expect(screen.getByText('Network failed')).toBeInTheDocument())
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })

  it('displays error when pokemon detail fetch fails', async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: false, status: 500, json: async () => ({}) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<App />)

    await waitFor(() => expect(screen.getByText(/Failed to load bulbasaur/i)).toBeInTheDocument())
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })

  it('displays error when pokemon species fetch fails', async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: false, status: 404, json: async () => ({}) } as Response)

    render(<App />)

    await waitFor(() => expect(screen.getByText(/Failed to load species for bulbasaur/i)).toBeInTheDocument())
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })
})

describe('App Component - State Management Tests', () => {
  it('updates component state based on API responses', async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<App />)

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
  })

  it('manages search term state correctly', async () => {
    const mockFullList = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2' }
    ];

    localStorage.setItem(SEARCH_KEY, 'bulb')

    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockFullList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => ({ id: 2, name: 'ivysaur', sprites: { other: { 'official-artwork': { front_default: 'https://example.com/ivysaur.png' } } } }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => ({ flavor_text_entries: [{ language: { name: 'en' }, flavor_text: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.' }] }) } as Response)

    render(<App />)

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())
    expect(screen.getByDisplayValue('bulb')).toBeInTheDocument()

    const input = screen.getByRole('textbox', { name: 'Search Pokémon' })
    await userEvent.clear(input)
    await userEvent.type(input, 'ivy')
    await userEvent.click(screen.getByRole('button', { name: 'Search' }))

    await waitFor(() => expect(screen.getByText('ivysaur')).toBeInTheDocument())
    expect(screen.queryByText('bulbasaur')).not.toBeInTheDocument()
  })
})
