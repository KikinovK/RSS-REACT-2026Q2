import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ErrorSimulator from '../components/ErrorSimulator'
import ErrorBoundary from '../components/ErrorBoundary'

describe('ErrorSimulator', () => {
  it('renders simulate error button', () => {
    render(<ErrorSimulator />)
    expect(screen.getByRole('button', { name: 'Simulate error' })).toBeInTheDocument()
  })

  it('throws error when test button is clicked', async () => {
    const user = userEvent.setup()
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<ErrorSimulator />)
    const button = screen.getByRole('button', { name: 'Simulate error' })
    await expect(user.click(button)).rejects.toThrow('Simulated error triggered by user')

    consoleSpy.mockRestore()
  })

  it('triggers error boundary fallback UI', async () => {
    const user = userEvent.setup()
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <ErrorBoundary>
        <ErrorSimulator />
      </ErrorBoundary>
    )

    const button = screen.getByRole('button', { name: 'Simulate error' })
    await user.click(button)

    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(screen.getByText('Simulated error triggered by user')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument()

    consoleSpy.mockRestore()
  })
})
