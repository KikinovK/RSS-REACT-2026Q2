import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ResultsSection from '../components/ResultsSection'
import type { SearchResult } from '../types/SearchResult'
import { ApiError } from '../utils/ApiError'
import { SEARCH_KEY } from '../utils/const'
import { AnchorHTMLAttributes, ReactNode } from 'react'

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

const mockResults: SearchResult[] = [
  { id: '1', name: 'bulbasaur', description: 'A strange seed.', image: '' },
  { id: '2', name: 'charmander', description: 'A fire lizard.', image: '' },
  { id: '3', name: 'squirtle', description: 'A water turtle.', image: '' },
]

describe('ResultsSection - Rendering', () => {
  it('renders correct number of items when data is provided', () => {
    render(<ResultsSection results={mockResults} isLoading={false} error={null} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('displays "no results" message when data array is empty', () => {
    render(<ResultsSection results={[]} isLoading={false} error={null} />)
    expect(screen.getByText('No results found.')).toBeInTheDocument()
  })

  it('shows loading state while fetching data', () => {
    render(<ResultsSection results={[]} isLoading={true} error={null} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})

describe('ResultsSection - Data Display', () => {
  it('correctly displays item names and descriptions', () => {
    render(<ResultsSection results={mockResults} isLoading={false} error={null} />)
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('A strange seed.')).toBeInTheDocument()
    expect(screen.getByText('charmander')).toBeInTheDocument()
    expect(screen.getByText('A fire lizard.')).toBeInTheDocument()
  })

  it('handles missing or undefined data gracefully', () => {
    const incompleteResults: SearchResult[] = [
      { id: '1', name: 'bulbasaur', description: '', image: '' },
    ]
    render(<ResultsSection results={incompleteResults} isLoading={false} error={null} />)
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })
})

describe('ResultsSection - Error Handling', () => {
  it('displays error message when API call fails', () => {
    render(<ResultsSection results={[]} isLoading={false} error="Server error. Please try again later." />)
    expect(screen.getByText('Server error. Please try again later.')).toBeInTheDocument()
  })

  it.each([
    [400, 'Bad request. Please check your search query.'],
    [404, 'Not found. The requested resource does not exist.'],
    [500, 'Server error. Please try again later.'],
    [503, 'Service unavailable. Please try again later.'],
  ])('shows appropriate error message for HTTP %i status code', (status, expectedMessage) => {
    const error = new ApiError(status)
    render(<ResultsSection results={[]} isLoading={false} error={error.message} />)
    expect(screen.getByText(expectedMessage)).toBeInTheDocument()
  })
})
