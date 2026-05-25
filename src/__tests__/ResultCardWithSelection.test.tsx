import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import ResultCard from '../components/ui/ResultCard';

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

describe('ResultCard', () => {
  const mockCardProps = {
    id: '1',
    name: 'bulbasaur',
    description: 'A strange seed was planted on its back at birth.',
    image: 'https://example.com/bulbasaur.png',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders pokemon name and description', () => {
    render(<ResultCard {...mockCardProps} />);

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(
      screen.getByText('A strange seed was planted on its back at birth.')
    ).toBeInTheDocument();
  });

  it('renders with link to details page', () => {
    render(<ResultCard {...mockCardProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', expect.stringContaining('/pokemons/$detailId'));
    expect(link).toHaveAttribute('aria-label', 'View details for bulbasaur');
  });

  it('renders unchecked checkbox by default', () => {
    render(<ResultCard {...mockCardProps} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
  });

  it('renders checked checkbox when isSelected is true', () => {
    render(<ResultCard {...mockCardProps} isSelected={true} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('calls onSelectionChange when checkbox is clicked', async () => {
    const user = userEvent.setup();
    const onSelectionChange = vi.fn();

    render(<ResultCard {...mockCardProps} onSelectionChange={onSelectionChange} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(onSelectionChange).toHaveBeenCalledTimes(1);
  });

  it('should prevent event propagation when checkbox is clicked', async () => {
    const user = userEvent.setup();
    const onSelectionChange = vi.fn();

    render(<ResultCard {...mockCardProps} onSelectionChange={onSelectionChange} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(onSelectionChange).toHaveBeenCalled();
  });

  it('renders image with alt text', () => {
    render(<ResultCard {...mockCardProps} />);

    const images = screen.getAllByAltText('bulbasaur');
    expect(images.length).toBeGreaterThan(0);
  });

  it('renders checkbox with correct aria-label', () => {
    render(<ResultCard {...mockCardProps} />);

    const checkbox = screen.getByLabelText('Select bulbasaur');
    expect(checkbox).toBeInTheDocument();
  });

  it('has checkbox positioned absolutely on card', () => {
    const { container } = render(<ResultCard {...mockCardProps} />);

    const listItem = container.querySelector('li');
    expect(listItem).toHaveClass('relative');

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox?.parentElement).toHaveClass('absolute', 'top-4', 'left-4', 'z-10');
  });

  it('applies left padding to content when checkbox is present', () => {
    const { container } = render(<ResultCard {...mockCardProps} />);

    const link = container.querySelector('a');
    expect(link).toHaveClass('pl-10');
  });

  it('clicking card does not trigger selection change', async () => {
    const onSelectionChange = vi.fn();

    render(<ResultCard {...mockCardProps} onSelectionChange={onSelectionChange} />);

    expect(onSelectionChange).not.toHaveBeenCalled();
  });

  it('handles missing image gracefully', () => {
    const cardWithoutImage = { ...mockCardProps, image: '' };
    render(<ResultCard {...cardWithoutImage} />);

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText(mockCardProps.description)).toBeInTheDocument();
  });
});
