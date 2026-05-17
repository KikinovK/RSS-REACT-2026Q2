import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SelectCountItem from '../components/ui/SelectCountItem'

describe('SelectCountItem - Rendering', () => {
  it('renders correctly', () => {
    render(<SelectCountItem onSelect={vi.fn()} defaultCount={12} />)
    expect(screen.getByText('12')).toBeInTheDocument()
  })

  it('calls onSelect with the correct value when an option is selected', async () => {
    const user = userEvent.setup();
  const onSelectMock = vi.fn();

  render(
    <SelectCountItem
      onSelect={onSelectMock}
      defaultCount={12}
    />
  );

  const selectElement = screen.getByRole('combobox');

  await user.selectOptions(selectElement, '20');

  expect(onSelectMock).toHaveBeenCalledWith(20);
  })
})
