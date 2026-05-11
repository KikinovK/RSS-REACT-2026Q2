import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ResultCard from '../components/ui/ResultCard'

describe('ResultCard - Rendering', () => {
  it('renders name and description, image correctly', () => {
    render(<ResultCard id="1" name="pikachu" description="An electric mouse." image="https://example.com/pika.png" />)
    const img = screen.getByAltText('pikachu');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/pika.png');
    expect(screen.getByText('pikachu')).toBeInTheDocument()
    expect(screen.getByText('An electric mouse.')).toBeInTheDocument()

  })

  it('handles missing image gracefully', () => {
    render(<ResultCard id="2" name="bulbasaur" description="A strange seed." image="" />)
    const img = screen.queryByRole('img');

    expect(img).not.toBeInTheDocument();
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('A strange seed.')).toBeInTheDocument()
  })

  it('handles empty description gracefully', () => {
    render(<ResultCard id="3" name="charmander" description="" image="" />)
    expect(screen.getByText('charmander')).toBeInTheDocument()
    expect(screen.getByText('', { selector: 'p' })).toBeInTheDocument()
  })
})
