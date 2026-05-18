import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../pages/NotFoundPage';

describe('NotFoundPage Component', () => {
  it('should successfully render the 404 header text', () => {
    render(<NotFoundPage />);

    const heading = screen.getByRole('heading', { name: /404 not found page/i, level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it('should display the warning emoji ⚠️', () => {
    render(<NotFoundPage />);

    const emoji = screen.getByText('⚠️');

    expect(emoji).toBeInTheDocument();
  });

  it('должен содержать правильные базовые CSS-классы для структуры', () => {
    const { container } = render(<NotFoundPage />);

    const rootDiv = container.firstChild as HTMLElement;

    expect(rootDiv).toHaveClass('min-h-screen');
    expect(rootDiv).toHaveClass('flex');
    expect(rootDiv).toHaveClass('flex-col');
  });
});
