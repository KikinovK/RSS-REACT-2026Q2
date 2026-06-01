import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import ResultsSection from '../components/ResultsSection';
import { useSelectionStore } from '../store/useSelectionStore';
import type { SearchResult } from '../types/SearchResult';

vi.mock('@tanstack/react-router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@tanstack/react-router')>();

  interface MockLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: ReactNode;
    to?: string;
    params?: Record<string, unknown>;
    search?: Record<string, unknown>;
  }

  return {
    ...actual,
    Link: ({ children, to, params, search, ...props }: MockLinkProps) => {
      const serializedParams = params ? JSON.stringify(params) : '';
      const serializedSearch = search ? JSON.stringify(search) : '';
      const fakeHref = to ? `${to}${serializedParams}${serializedSearch}` : '#';

      return (
        <a href={fakeHref} {...props}>
          {children}
        </a>
      );
    },
  };
});

vi.mock('../routes/pokemons', () => {
  return {
    Route: {
      useSearch: () => ({
        limit: 4,
        filter: '',
        page: 1,
      }),
    },
  };
});

describe('ResultsSection with Selection', () => {
  const mockResults: SearchResult[] = [
    {
      id: '1',
      name: 'bulbasaur',
      description: 'A strange seed.',
      image: 'https://example.com/1.png',
    },
    {
      id: '2',
      name: 'ivysaur',
      description: 'The seed grows.',
      image: 'https://example.com/2.png',
    },
    {
      id: '3',
      name: 'venusaur',
      description: 'The flower blooms.',
      image: 'https://example.com/3.png',
    },
  ];

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    useSelectionStore.setState({ selectedItems: new Set<string>() });
  });

  it('renders results list', () => {
    render(<ResultsSection results={mockResults} isLoading={false} />);

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('ivysaur')).toBeInTheDocument();
    expect(screen.getByText('venusaur')).toBeInTheDocument();
  });

  it('renders Results heading', () => {
    render(<ResultsSection results={mockResults} isLoading={false} />);

    expect(screen.getByText('Results')).toBeInTheDocument();
  });

  it('does not show selection count when no items are selected', () => {
    render(<ResultsSection results={mockResults} isLoading={false} />);

    expect(screen.queryByText(/selected$/)).not.toBeInTheDocument();
  });

  it('toggles item selection when checkbox is clicked', async () => {
    const user = userEvent.setup();

    render(<ResultsSection results={mockResults} isLoading={false} />);

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);

    expect(useSelectionStore.getState().isSelected('1')).toBe(true);
    expect(useSelectionStore.getState().getSelectedCount()).toBe(1);
  });

  it('handles selection of multiple items', async () => {
    const user = userEvent.setup();

    render(<ResultsSection results={mockResults} isLoading={false} />);

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    await user.click(checkboxes[1]);
    await user.click(checkboxes[2]);

    expect(useSelectionStore.getState().getSelectedCount()).toBe(3);
    expect(useSelectionStore.getState().isSelected('1')).toBe(true);
    expect(useSelectionStore.getState().isSelected('2')).toBe(true);
    expect(useSelectionStore.getState().isSelected('3')).toBe(true);
  });

  it('handles deselection of items', async () => {
    const user = userEvent.setup();

    useSelectionStore.setState({ selectedItems: new Set(['1', '2']) });

    render(<ResultsSection results={mockResults} isLoading={false} />);

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);

    expect(useSelectionStore.getState().isSelected('1')).toBe(false);
    expect(useSelectionStore.getState().isSelected('2')).toBe(true);
    expect(useSelectionStore.getState().getSelectedCount()).toBe(1);
  });

  it('renders checkboxes in checked state for selected items', () => {
    useSelectionStore.setState({ selectedItems: new Set(['1', '2']) });

    render(<ResultsSection results={mockResults} isLoading={false} />);

    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
    expect(checkboxes[0].checked).toBe(true);
    expect(checkboxes[1].checked).toBe(true);
    expect(checkboxes[2].checked).toBe(false);
  });

  it('displays loading state', () => {
    render(<ResultsSection results={[]} isLoading={true} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays empty state message', () => {
    render(<ResultsSection results={[]} isLoading={false} />);

    expect(screen.getByText('No results found.')).toBeInTheDocument();
  });

  it('does not show results when loading', () => {
    const { container } = render(
      <ResultsSection results={mockResults} isLoading={true} />
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const resultsList = container.querySelector('ul');
    expect(resultsList).not.toBeInTheDocument();
  });

  it('renders grid layout with correct structure', () => {
    const { container } = render(
      <ResultsSection results={mockResults} isLoading={false} />
    );

    const ul = container.querySelector('ul');
    expect(ul).toHaveClass('grid', 'grid-cols-1', 'sm:grid-cols-2');

    const items = container.querySelectorAll('li');
    expect(items).toHaveLength(3);
  });
});
