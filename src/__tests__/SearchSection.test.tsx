import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchSection from '../components/SearchSection';
import { SEARCH_KEY } from '../utils/const';

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

describe('SearchSection - Rendering', () => {
  it('renders heading and SearchBar component', () => {
    render(<SearchSection />);
    expect(screen.getByRole('heading', { name: 'Pokémon Search' })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onSearch prop when search is performed', async () => {
    localStorage.setItem(SEARCH_KEY, 'pikachu');
    render(<SearchSection />);

    expect(screen.getByRole('textbox')).toHaveValue('pikachu');
  });
});
