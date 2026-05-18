import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ResultCard from '../components/ui/ResultCard'
import { SEARCH_KEY } from '../utils/const';
import { AnchorHTMLAttributes, ReactNode } from 'react';

vi.mock('../routes/pokemons', () => {
  return {
    Route: {
      useSearch: () => ({
        limit: 4,
        filter: localStorage.getItem(SEARCH_KEY) || '',
        page: 1,
      }),
    },
  };
});

vi.mock('@tanstack/react-router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@tanstack/react-router')>()

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
  }
})

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
