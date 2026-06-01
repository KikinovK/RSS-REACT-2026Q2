import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { THEME_KEY } from '../utils/const';

const ThemeConsumer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p data-testid="current-theme">{theme}</p>
      <button onClick={toggleTheme} data-testid="toggle-button">
        Toggle Theme
      </button>
    </div>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    document.documentElement.className = '';
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('should initialize with default light theme when no theme is stored', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const currentTheme = screen.getByTestId('current-theme');
    expect(currentTheme).toHaveTextContent('light');
    const storedTheme = JSON.parse(localStorage.getItem(THEME_KEY) || 'null');
    expect(storedTheme).toBe('light');
  });

  it('should toggle theme from light to dark and back to light', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const currentTheme = screen.getByTestId('current-theme');
    const toggleButton = screen.getByTestId('toggle-button');

    expect(currentTheme).toHaveTextContent('light');

    await user.click(toggleButton);
    await waitFor(() => {
      expect(currentTheme).toHaveTextContent('dark');
    });

    await user.click(toggleButton);
    await waitFor(() => {
      expect(currentTheme).toHaveTextContent('light');
    });
  });

  it('should persist theme to localStorage when toggled', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const toggleButton = screen.getByTestId('toggle-button');

    await user.click(toggleButton);

    await waitFor(() => {
      const storedTheme = JSON.parse(localStorage.getItem(THEME_KEY) || 'null');
      expect(storedTheme).toBe('dark');
    });

    await user.click(toggleButton);

    await waitFor(() => {
      const storedTheme = JSON.parse(localStorage.getItem(THEME_KEY) || 'null');
      expect(storedTheme).toBe('light');
    });
  });

  it('should load theme from localStorage on initialization', () => {
    localStorage.setItem(THEME_KEY, JSON.stringify('dark'));

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const currentTheme = screen.getByTestId('current-theme');
    expect(currentTheme).toHaveTextContent('dark');
  });

  it('should apply dark class to document element when theme is dark', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const toggleButton = screen.getByTestId('toggle-button');

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    await user.click(toggleButton);

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    await user.click(toggleButton);

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
  });
});
