import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import PokemonImage from '../components/ui/PokemonImage'

describe('PokemonImage - Rendering', () => {
  it('renders image with correct src and alt', () => {
    render(<PokemonImage src="https://example.com/pikachu.png" alt="Pikachu" />)
    const img = screen.getByAltText('Pikachu')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://example.com/pikachu.png')
  })

  it('shows loading state initially', () => {
    render(<PokemonImage src="https://example.com/pikachu.png" alt="Pikachu" />)
    expect(screen.getByRole('img')).toHaveClass('opacity-0')
  })

  it('displays fallback image when the source fails to load', () => {
  render(<PokemonImage src="https://invalid-link.com/photo.png" alt="Pikachu" />);

  const img = screen.getByAltText('Pikachu');

  fireEvent.error(img);

  expect(img).toHaveAttribute('src', 'https://placehold.co/400x400?text=No+Image&font=roboto&bg=ffffff&fg=000000');
  });

  it('shows image with full opacity after successful load', () => {
  render(<PokemonImage src="https://example.com/pikachu.png" alt="Pikachu" />);

  const img = screen.getByAltText('Pikachu');

  expect(img).toHaveClass('opacity-0');

  fireEvent.load(img);

  expect(img).toHaveClass('opacity-100');
});

it('removes skeleton loader after image is loaded', () => {
  const { container } = render(
    <PokemonImage src="https://example.com/pikachu.png" alt="Pikachu" />
  );

  const skeleton = container.querySelector('.animate-pulse');
  expect(skeleton).toBeInTheDocument();

  const img = screen.getByAltText('Pikachu');
  fireEvent.load(img);

  expect(skeleton).not.toBeInTheDocument();
});
})
