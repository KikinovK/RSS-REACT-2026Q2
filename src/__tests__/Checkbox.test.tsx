import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '../components/ui/Checkbox';

describe('Checkbox', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders unchecked by default', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('renders with checked state when provided', () => {
    render(<Checkbox checked={true} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('renders with aria-label', () => {
    render(<Checkbox ariaLabel="Select pokemon" />);

    const checkbox = screen.getByLabelText('Select pokemon');
    expect(checkbox).toBeInTheDocument();
  });

  it('calls onChange callback when checked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Checkbox checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('calls onChange callback when unchecked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Checkbox checked={true} onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('accepts custom className', () => {
    const { container } = render(<Checkbox className="custom-class" />);

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toHaveClass('custom-class');
  });

  it('forwards other input attributes', () => {
    render(<Checkbox disabled={true} data-testid="custom-checkbox" />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.disabled).toBe(true);
    expect(screen.getByTestId('custom-checkbox')).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    const { container } = render(<Checkbox />);

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toHaveClass('w-5', 'h-5', 'rounded-lg', 'border-2');
  });

  it('applies focus ring styling', () => {
    const { container } = render(<Checkbox />);

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toHaveClass('focus:ring-2', 'focus:ring-guidepost-green');
  });
});
