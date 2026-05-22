import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';
import { SEARCH_KEY } from '../utils/const';

vi.mock('../assets/icons/search.svg?react', () => ({
  default: () => <svg data-testid="search-icon" />,
}));

describe('Search Component', () => {
  afterEach(() => {
    localStorage.clear();
  });

  beforeEach(() => {
    render(<SearchBar onSearch={vi.fn()} />);
  });

  it('renders search input', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders search button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

describe('Search Component - localStorage', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('displays previously saved search term from localStorage on mount', () => {
    localStorage.setItem(SEARCH_KEY, 'pikachu');
    render(<SearchBar onSearch={vi.fn()} />);
    expect(screen.getByRole('textbox')).toHaveValue('pikachu');
  });

  it('leaves input empty when no saved term exists', () => {
    render(<SearchBar onSearch={vi.fn()} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('overwrites existing localStorage value when new search is performed', async () => {
    localStorage.setItem(SEARCH_KEY, 'pikachu');
    render(<SearchBar onSearch={vi.fn()} />);
    const input = screen.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, 'bulbasaur');
    await userEvent.click(screen.getByRole('button'));
    expect(localStorage.getItem(SEARCH_KEY)).toBe('bulbasaur');
  });
});

describe('Search Component - User Interaction', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('updates input value when user types', async () => {
    render(<SearchBar onSearch={vi.fn()} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'bulbasaur');
    expect(input).toHaveValue('bulbasaur');
  });

  it('saves search term to localStorage when search button is clicked', async () => {
    render(<SearchBar onSearch={vi.fn()} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'bulbasaur');
    await userEvent.click(screen.getByRole('button'));
    expect(localStorage.getItem(SEARCH_KEY)).toBe('bulbasaur');
  });

  it('trims whitespace from search input before saving', async () => {
    render(<SearchBar onSearch={vi.fn()} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '  pikachu  ');
    await userEvent.click(screen.getByRole('button'));
    expect(localStorage.getItem(SEARCH_KEY)).toBe('pikachu');
  });

  it('triggers search callback with correct parameters', async () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '  bulbasaur  ');
    await userEvent.click(screen.getByRole('button'));
    expect(onSearch).toHaveBeenCalledOnce();
    expect(onSearch).toHaveBeenCalledWith('bulbasaur');
  });
});
