import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchSection from '../components/SearchSection'

describe('SearchSection - Rendering', () => {
  it('renders heading and SearchBar component', () => {
    render(<SearchSection onSearch={vi.fn()} />)
    expect(screen.getByRole('heading', { name: 'Pokémon Search' })).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onSearch prop when search is performed', async () => {
    const mockOnSearch = vi.fn()
    render(<SearchSection onSearch={mockOnSearch} />)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'pikachu')
    await userEvent.click(button)

    expect(mockOnSearch).toHaveBeenCalledWith('pikachu')
  })
})
