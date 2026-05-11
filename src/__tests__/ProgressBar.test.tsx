import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProgressBar from '../components/ui/ProgressBar'

describe('ProgressBar - Rendering', () => {
  it('renders when isLoading is true', () => {
    render(<ProgressBar isLoading={true} />)
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute('aria-label', 'Loading search results');
    expect(progressBar).toHaveAttribute('aria-valuetext', 'Loading');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    expect(progressBar).toHaveAttribute('aria-busy', 'true');
  })

  it('does not render when isLoading is false', () => {
    render(<ProgressBar isLoading={false} />)
    const progressBar = screen.queryByRole('progressbar');
    expect(progressBar).not.toBeInTheDocument();
  })
})
