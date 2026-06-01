import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import { SEARCH_KEY } from '../utils/const';
import mockPokemonList from '../__mocks__/list';
import mockPokemonDetails from '../__mocks__/details';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import mockPokemonSpecies from '../__mocks__/species';
import { renderWithProviders } from './test-utils';


const getMockFetch = (url: string) => {
  if (url.includes('/pokemon?') || url.endsWith('/pokemon')) {
    return Promise.resolve({
      ok: true,
      json: async () => ({ results: mockPokemonList }),
    } as Response);
  }

  if (url.includes('/pokemon/')) {
    const foundPokemon = mockPokemonDetails.find(
      (p) => url.includes(`/${p.name}`) || url.includes(`/${p.id}`)
    );

    return Promise.resolve({
      ok: true,
      json: async () => foundPokemon || mockPokemonDetails[0],
    } as Response);
  }

  if (url.includes('/pokemon-species/')) {
    const foundPokemon = mockPokemonSpecies.find((_, index) => url.includes(`/${index + 1}`));

    return Promise.resolve({
      ok: true,
      json: async () => foundPokemon || mockPokemonSpecies[0],
    } as Response);
  }

  return Promise.reject(new Error(`Unhandled fetch call to: ${url}`));
};

const mockNavigate = vi.fn();

vi.mock('../routes/pokemons', () => {
  return {
    Route: {
      useSearch: () => {
        let filter = '';
        try {
          const stored = localStorage.getItem(SEARCH_KEY);
          const data = stored ? JSON.parse(stored) : {};
          filter = data.value || '';
        } catch {
          filter = '';
        }

        return {
          limit: 4,
          filter,
          page: 1,
        };
      },
      useNavigate: () => mockNavigate,
    },
  };
});

vi.mock('@tanstack/react-router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@tanstack/react-router')>();

  interface MockLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: ReactNode;
    to?: string;
    params?: Record<string, unknown>;
    search?: Record<string, unknown>;
  }

  return {
    ...actual,
    Link: ({ children, to, params, search, ...props }: MockLinkProps) => {
      const serializedParams = params ? JSON.stringify(params) : '';
      const serializedSearch = search ? JSON.stringify(search) : '';
      const fakeHref = to ? `${to}${serializedParams}${serializedSearch}` : '#';

      return (
        <a href={fakeHref} {...props}>
          {children}
        </a>
      );
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
  vi.restoreAllMocks();
  vi.clearAllMocks();
  localStorage.clear();
  vi.unstubAllGlobals();
});

beforeAll(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('HomePage Component - Integration Tests', () => {
  it('makes initial API call on component mount', async () => {
    const fetchMock = vi.fn(getMockFetch);

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument());

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('https://pokeapi.co/api/v2/pokemon?limit=2000'),
      expect.any(Object)
    );
    expect(fetchMock).toHaveBeenCalledTimes(9);
  });

  it('handles search term from localStorage on initial load', async () => {
    localStorage.setItem(SEARCH_KEY, JSON.stringify({ value: 'bulb' }));

    const fetchMock = vi.fn(getMockFetch);

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument());
    expect(screen.getByDisplayValue('bulb')).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(9);
  });

  it('manages loading states during API calls', async () => {
    const fetchMock = vi.fn(getMockFetch);

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });
});

describe('HomePage Component - API Integration Tests', () => {
  it('calls API with correct parameters', async () => {
    const fetchMock = vi.fn(getMockFetch);

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

    await screen.findByText('bulbasaur');

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('https://pokeapi.co/api/v2/pokemon?limit=2000'),
      expect.any(Object)
    );
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('https://pokeapi.co/api/v2/pokemon/1'),
      expect.any(Object)
    );
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('https://pokeapi.co/api/v2/pokemon-species/1'),
      expect.any(Object)
    );
  });

  it('handles successful API responses', async () => {
    const fetchMock = vi.fn(getMockFetch);

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument());
    expect(
      screen.getByText('A strange seed was planted on its back at birth.')
    ).toBeInTheDocument();
  });

  it('handles API error responses', async () => {
    const fetchMock = vi.fn().mockImplementation((url) => {
      if (url.includes('/pokemon?') || url.endsWith('/pokemon')) {
        return Promise.resolve({ ok: false, status: 500, json: async () => ({}) } as Response);
      }
      return getMockFetch(url);
    });

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

    await waitFor(() =>
      expect(screen.getByText(/Failed to load Pokémon list/i)).toBeInTheDocument()
    );
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('sets error state when initial fetch rejects with non-AbortError', async () => {
    const fetchMock = vi.fn().mockRejectedValueOnce(new Error('Network failed'));

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

    await waitFor(() => expect(screen.getByText('Network failed')).toBeInTheDocument());
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('displays error when pokemon detail fetch fails', async () => {
    const fetchMock = vi.fn().mockImplementation((url) => {
      if (url.includes('/pokemon/1')) {
        return Promise.resolve({ ok: false, status: 500, json: async () => ({}) } as Response);
      }
      return getMockFetch(url);
    });

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

    await waitFor(() => expect(screen.getByText(/Failed to load bulbasaur/i)).toBeInTheDocument());
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('displays error when pokemon species fetch fails', async () => {
    const fetchMock = vi.fn().mockImplementation((url) => {
      if (url.includes('/pokemon-species/1')) {
        return Promise.resolve({ ok: false, status: 404, json: async () => ({}) } as Response);
      }
      return getMockFetch(url);
    });

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

    await waitFor(() =>
      expect(screen.getByText(/Failed to load species for bulbasaur/i)).toBeInTheDocument()
    );
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});

describe('HomePage Component - State Management Tests', () => {
  it('updates component state based on API responses', async () => {
    const fetchMock = vi.fn(getMockFetch);

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });
});

describe('HomePage - Pagination (handlePageChange)', () => {
  it('should change page, trigger navigate with correct search params, and scroll to top', async () => {
    localStorage.setItem(SEARCH_KEY, JSON.stringify({ value: 'bulb' }));

    const fetchMock = vi.fn(getMockFetch);

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

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
    localStorage.setItem(SEARCH_KEY, JSON.stringify({ value: 'bulb' }));

    const fetchMock = vi.fn(getMockFetch);

    vi.stubGlobal('fetch', fetchMock);

    renderWithProviders(<HomePage />);

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
