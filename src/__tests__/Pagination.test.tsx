import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pagination from '../components/ui/Pagination'

describe('Pagination - Rendering', () => {
  it('renders correctly with given props', () => {
    const onPageChangeMock = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    expect(screen.getByText('←')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('→')).toBeInTheDocument();

    expect(screen.getByText('Page 2 to 5')).toBeInTheDocument();
  });

  it('calls onPageChange with the correct page number when a page button is clicked', async () => {
    const user = userEvent.setup();
    const onPageChangeMock = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    const page3Button = screen.getByRole('button', { name: 'Page 3' });
    await user.click(page3Button);

    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

  it('renders correctly on first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={() => {}}
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.queryByText('...')).not.toBeInTheDocument()
  })

  it('renders correctly on last page', () => {
    render(
      <Pagination
        currentPage={10}
        totalPages={10}
        onPageChange={() => {}}
      />
    )

    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('renders without ellipsis when pages are small', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={3}
        onPageChange={() => {}}
      />
    )

    expect(screen.queryByText('...')).not.toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('disables prev on first page and next on last page', () => {
    const { rerender } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    )

    expect(screen.getByText('←')).toBeDisabled()

    rerender(
      <Pagination currentPage={10} totalPages={10} onPageChange={() => {}} />
    )

    expect(screen.getByText('→')).toBeDisabled()
  })

  it('calls onPageChange with currentPage - 1 when previous clicked', async () => {
    const user = userEvent.setup()
    const onPageChange = vi.fn()

    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={onPageChange}
      />
    )

    const prevButton = screen.getByRole('button', {
      name: 'Previous page',
    })

    await user.click(prevButton)

    expect(onPageChange).toHaveBeenCalledWith(4)
  })

  it('calls onPageChange with currentPage + 1 when next clicked', async () => {
    const user = userEvent.setup()
    const onPageChange = vi.fn()

    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={onPageChange}
      />
    )

    const nextButton = screen.getByRole('button', {
      name: 'Next page',
    })

    await user.click(nextButton)

    expect(onPageChange).toHaveBeenCalledWith(6)
  })

  it('calls onPageChange with 1 when next clicked', async () => {
    const user = userEvent.setup()
    const onPageChange = vi.fn()

    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={onPageChange}
      />
    )

    const nextButton = screen.getByRole('button', {
      name: 'Page 1',
    })

    await user.click(nextButton)

    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('calls onPageChange with totalPages when next clicked', async () => {
    const user = userEvent.setup()
    const onPageChange = vi.fn()

    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={onPageChange}
      />
    )

    const nextButton = screen.getByRole('button', {
      name: 'Page 10',
    })

    await user.click(nextButton)

    expect(onPageChange).toHaveBeenCalledWith(10)
  })
})
