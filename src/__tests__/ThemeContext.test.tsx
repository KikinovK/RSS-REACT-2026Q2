import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { THEME_KEY } from '../utils/const';

// Test component that uses the theme hook
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

    // Проверяем начальную тему (light)
    expect(currentTheme).toHaveTextContent('light');

    // Переключаемся на dark
    await user.click(toggleButton);
    await waitFor(() => {
      expect(currentTheme).toHaveTextContent('dark');
    });

    // Переключаемся обратно на light
    await user.click(toggleButton);
    await waitFor(() => {
      expect(currentTheme).toHaveTextContent('light');
    });
  });

  // Test 3: Сохранение темы в localStorage
  it('should persist theme to localStorage when toggled', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const toggleButton = screen.getByTestId('toggle-button');

    // Переключаемся на dark
    await user.click(toggleButton);

    // Проверяем, что темная тема сохранена в localStorage
    await waitFor(() => {
      const storedTheme = JSON.parse(localStorage.getItem(THEME_KEY) || 'null');
      expect(storedTheme).toBe('dark');
    });

    // Переключаемся на light
    await user.click(toggleButton);

    // Проверяем, что светлая тема сохранена в localStorage
    await waitFor(() => {
      const storedTheme = JSON.parse(localStorage.getItem(THEME_KEY) || 'null');
      expect(storedTheme).toBe('light');
    });
  });

  // Test 4: Загрузка темы из localStorage при инициализации
  it('should load theme from localStorage on initialization', () => {
    // Предварительно сохраняем dark тему в localStorage
    localStorage.setItem(THEME_KEY, JSON.stringify('dark'));

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    // Проверяем, что компонент использует сохраненную тему
    const currentTheme = screen.getByTestId('current-theme');
    expect(currentTheme).toHaveTextContent('dark');
  });

  // Test 5: Применение CSS класса 'dark' к документу при переключении темы
  it('should apply dark class to document element when theme is dark', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const toggleButton = screen.getByTestId('toggle-button');

    // В начале класс 'dark' не должен быть добавлен
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Переключаемся на dark
    await user.click(toggleButton);

    // Проверяем, что класс 'dark' добавлен
    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    // Переключаемся обратно на light
    await user.click(toggleButton);

    // Проверяем, что класс 'dark' удален
    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
  });
});
