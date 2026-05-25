import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectionToolbar from '../components/SelectionToolbar';
import { useSelectionStore } from '../store/useSelectionStore';

describe('SelectionToolbar', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    useSelectionStore.setState({ selectedItems: new Set<string>() });
  });

  it('should not render when no items are selected', () => {
    const { container } = render(<SelectionToolbar />);

    expect(container.firstChild).toBeNull();
  });

  it('should render when items are selected', () => {
    useSelectionStore.setState({ selectedItems: new Set(['1', '2']) });

    render(<SelectionToolbar />);

    expect(screen.getByText(/2 item\(s\) selected/)).toBeInTheDocument();
  });

  it('should display correct count of selected items', () => {
    useSelectionStore.setState({ selectedItems: new Set(['1', '2', '3']) });

    render(<SelectionToolbar />);

    expect(screen.getByText(/3 item\(s\) selected/)).toBeInTheDocument();
  });

  it('should display "1 item(s) selected" for single selection', () => {
    useSelectionStore.setState({ selectedItems: new Set(['1']) });

    render(<SelectionToolbar />);

    expect(screen.getByText(/1 item\(s\) selected/)).toBeInTheDocument();
  });

  it('should render Clear button', () => {
    useSelectionStore.setState({ selectedItems: new Set(['1']) });

    render(<SelectionToolbar />);

    expect(screen.getByRole('button', { name: 'Clear selections' })).toBeInTheDocument();
  });

  it('should call clearSelections when Clear button is clicked', async () => {
    const user = userEvent.setup();
    useSelectionStore.setState({ selectedItems: new Set(['1', '2']) });

    render(<SelectionToolbar />);

    const clearButton = screen.getByRole('button', { name: 'Clear selections' });
    await user.click(clearButton);

    expect(useSelectionStore.getState().getSelectedCount()).toBe(0);
  });

  it('should hide when all items are cleared', () => {
    useSelectionStore.setState({ selectedItems: new Set(['1', '2']) });

    const { rerender } = render(<SelectionToolbar />);
    expect(screen.getByText(/2 item\(s\) selected/)).toBeInTheDocument();

    useSelectionStore.setState({ selectedItems: new Set<string>() });
    rerender(<SelectionToolbar />);

    expect(screen.queryByText(/item\(s\) selected/)).not.toBeInTheDocument();
  });

  it('should display selected count in green color', () => {
    useSelectionStore.setState({ selectedItems: new Set(['1', '2']) });

    render(<SelectionToolbar />);

    const countSpan = screen.getByText(/2 item\(s\) selected/);
    expect(countSpan).toHaveClass('text-guidepost-green');
  });
});
