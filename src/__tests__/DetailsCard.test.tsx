import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import DetailsCard from '../components/DetailsCard';
import { fetchPokemonData } from '../services/pokemonService';
import { PokemonData } from '../types/pokemon';


vi.mock('../services/pokemonService', () => ({
  fetchPokemonData: vi.fn(),
}));

let mockDetailId = '25';
vi.mock('@tanstack/react-router', () => ({
  useParams: () => ({ detailId: mockDetailId }),
}));

const mockPokemon: PokemonData = {
  id: 25,
  name: 'pikachu',
  height: 4,
  weight: 60,
  sprites: {
    front_default: 'https://example.com/pika-normal.png',
    other: {
      'official-artwork': {
        front_default: 'https://example.com/pika-official.png',
      },
    },
  },
  types: [
    { type: { name: 'electric' } },
  ],
  stats: [
    { base_stat: 35, stat: { name: 'hp' } },
    { base_stat: 55, stat: { name: 'attack' } },
  ],
};

describe('DetailsCard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockDetailId = '25';
  });

  it('should display the loading status (Loading...) during mounting', async () => {
    vi.mocked(fetchPokemonData).mockReturnValueOnce(new Promise(() => {}));

    render(<DetailsCard />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should successfully render the Pokemon`s parameters when responding from the API', async () => {
    vi.mocked(fetchPokemonData).mockResolvedValueOnce(mockPokemon);

    render(<DetailsCard />);

    await waitFor(() => {
      expect(screen.getByText('pikachu')).toBeInTheDocument();
    });
    expect(screen.getByText('#025')).toBeInTheDocument();

    expect(screen.getByText('0.4 м')).toBeInTheDocument();
    expect(screen.getByText('6.0 кг')).toBeInTheDocument();

    expect(screen.getByText('electric')).toBeInTheDocument();

    expect(screen.getByText('hp')).toBeInTheDocument();
    expect(screen.getByText('35')).toBeInTheDocument();
    expect(screen.getByText('attack')).toBeInTheDocument();
    expect(screen.getByText('55')).toBeInTheDocument();

    expect(fetchPokemonData).toHaveBeenCalledWith('25', expect.any(AbortSignal));
  });

  it('should correctly display an error if the request failed', async () => {
    const errorMessage = 'Network Error';
    vi.mocked(fetchPokemonData).mockRejectedValueOnce(new Error(errorMessage));

    render(<DetailsCard />);

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    expect(screen.queryByText('pikachu')).not.toBeInTheDocument();
  });

  it('must use normal sprite if "official-artwork" is missing', async () => {
    const pokemonWithoutArt: PokemonData = {
      ...mockPokemon,
      sprites: {
        front_default: 'https://example.com/only-front.png',
        other: {},
      },
    };

    vi.mocked(fetchPokemonData).mockResolvedValueOnce(pokemonWithoutArt);

    render(<DetailsCard />);

    await waitFor(() => {
      expect(screen.getByText('pikachu')).toBeInTheDocument();
    });

    const img = screen.getByAltText('pikachu');
    expect(img).toHaveAttribute('src', 'https://example.com/only-front.png');
  });

  it('should correctly respond to changes in the detailId parameter', async () => {
    vi.mocked(fetchPokemonData).mockResolvedValue(mockPokemon);

    const { rerender } = render(<DetailsCard />);

    await waitFor(() => {
      expect(fetchPokemonData).toHaveBeenCalledWith('25', expect.any(AbortSignal));
    });

    mockDetailId = '1';

    rerender(<DetailsCard />);

    await waitFor(() => {
      expect(fetchPokemonData).toHaveBeenCalledWith('1', expect.any(AbortSignal));
    });
  });
});
