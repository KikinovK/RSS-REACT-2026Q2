import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HomePage from '../pages/HomePage'
import { SEARCH_KEY } from '../utils/const'
import mockPokemonList from '../__mocks__/list'
import mockPokemonDetails from '../__mocks__/details'
import { AnchorHTMLAttributes, ReactNode } from 'react'


const mockPokemonDetail = mockPokemonDetails[0]
const mockPokemonSpecies = {
  flavor_text_entries: [
    { language: { name: 'en' }, flavor_text: 'A strange seed was planted on its back at birth.' },
  ],
}

const mockNavigate = vi.fn();

vi.mock('../routes/pokemons', () => {
  return {
    Route: {
      useSearch: () => ({
        limit: 4,
        filter: localStorage.getItem(SEARCH_KEY) || '',
        page: 1,
      }),
      useNavigate: () => mockNavigate,
    },
  };
});

vi.mock('@tanstack/react-router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@tanstack/react-router')>();

  interface MockLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: ReactNode
    to?: string
    params?: Record<string, unknown>
    search?: Record<string, unknown>
  }

  return {
    ...actual,
    Link: ({ children, to, params, search, ...props }: MockLinkProps) => {
      const serializedParams = params ? JSON.stringify(params) : ''
      const serializedSearch = search ? JSON.stringify(search) : ''
      const fakeHref = to ? `${to}${serializedParams}${serializedSearch}` : '#'

      return (
        <a href={fakeHref} {...props}>
          {children}
        </a>
      )
    },
    Outlet: () => <div data-testid="router-outlet" />,
    useMatchRoute: () => {
      return (options?: { to?: string }) => {
        if (options?.to === '/pokemons/$detailId') {
          return { detailId: '1' };
        }
        return null;
      };
    },
  };
});

beforeEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
  localStorage.clear()
})

beforeAll(() => {
  window.scrollTo = vi.fn()
})


describe('HomePage Component - Integration Tests', () => {

  it('makes initial API call on component mount', async () => {
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList.slice(0, 1) }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<HomePage />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())

    expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=2000', expect.any(Object))
    expect(fetchMock).toHaveBeenCalledTimes(3)
  })

  it('handles search term from localStorage on initial load', async () => {
    localStorage.setItem(SEARCH_KEY, 'bulb')

    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList.slice(0, 1) }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<HomePage />)
    await waitFor(() => {expect(screen.queryByText('Loading...')).not.toBeInTheDocument();});
    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())
    expect(screen.getByDisplayValue('bulb')).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledTimes(3)
  })

  it('manages loading states during API calls', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList.slice(0, 1) }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<HomePage />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
  })
})

describe('HomePage Component - API Integration Tests', () => {
  it('calls API with correct parameters', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch')

    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        results: mockPokemonList,
      }),
    } as Response)

    mockPokemonDetails.forEach((pokemon) => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => pokemon,
      } as Response)

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockPokemonSpecies,
      } as Response)
    })

    render(<HomePage />)

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())

    expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=2000', expect.any(Object))
    expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1', expect.any(Object))
    expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-species/bulbasaur', expect.any(Object))
  })

  it('handles successful API responses', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<HomePage />)

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())
    expect(screen.getByText('A strange seed was planted on its back at birth.')).toBeInTheDocument()
  })

  it('handles API error responses', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({ ok: false, status: 500, json: async () => ({}) } as Response)

    render(<HomePage />)

    await waitFor(() => expect(screen.getByText(/Failed to load Pokémon list/i)).toBeInTheDocument())
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })

  it('sets error state when initial fetch rejects with non-AbortError', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network failed'))

    render(<HomePage />)

    await waitFor(() => expect(screen.getByText('Network failed')).toBeInTheDocument())
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })


  it('displays error when pokemon detail fetch fails', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: false, status: 500, json: async () => ({}) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<HomePage />)

    await waitFor(() => expect(screen.getByText(/Failed to load bulbasaur/i)).toBeInTheDocument())
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })

  it('displays error when pokemon species fetch fails', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: false, status: 404, json: async () => ({}) } as Response)

    render(<HomePage />)

    await waitFor(() => expect(screen.getByText(/Failed to load species for bulbasaur/i)).toBeInTheDocument())
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })
})

describe('HomePage Component - State Management Tests', () => {
  it('updates component state based on API responses', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockPokemonList.slice(0, 1) }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)

    render(<HomePage />)

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
  })

  it('manages search term state correctly', async () => {
    const mockFullList = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2' }
    ];

    localStorage.setItem(SEARCH_KEY, 'bulb')

    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({ ok: true, json: async () => ({ results: mockFullList }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonDetail } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => mockPokemonSpecies } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => ({ id: 2, name: 'ivysaur', sprites: { other: { 'official-artwork': { front_default: 'https://example.com/ivysaur.png' } } } }) } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => ({ flavor_text_entries: [{ language: { name: 'en' }, flavor_text: 'When the bulb on its back grows large, it HomePageears to lose the ability to stand on its hind legs.' }] }) } as Response)

    render(<HomePage />)

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

describe('HomePage - Pagination (handlePageChange)', () => {
  it('should change page, trigger navigate with correct search params, and scroll to top', async () => {
    localStorage.setItem(SEARCH_KEY, 'bulb')

    const fetchMock = vi.spyOn(globalThis, 'fetch')

    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        results: mockPokemonList,
      }),
    } as Response)

    mockPokemonDetails.forEach((pokemon) => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => pokemon,
      } as Response)

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockPokemonSpecies,
      } as Response)
    })

    render(<HomePage />);


    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });


    const pageTwoButton = screen.getByRole('button', { name: /2/i });


    fireEvent.click(pageTwoButton);


    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith({
      search: {
        filter: 'bulb',
        page: 2,
        limit: 4,
      },
    });


    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});

describe('HomePage - Items Per Page (handleSelectCount)', () => {
  it('should change items per page limit, reset page to 1, trigger navigate, and scroll to top', async () => {
    localStorage.setItem(SEARCH_KEY, 'bulb');

    const fetchMock = vi.spyOn(globalThis, 'fetch');

    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        results: mockPokemonList,
      }),
    } as Response);

    mockPokemonDetails.forEach((pokemon) => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => pokemon,
      } as Response);

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockPokemonSpecies,
      } as Response);
    });

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: '8' } });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith({
      search: {
        filter: 'bulb',
        page: 1,
        limit: 8,
      },
    });

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
