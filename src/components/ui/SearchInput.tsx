import { Component } from 'react';

interface SearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
}

class SearchInput extends Component<SearchInputProps> {
  render() {
    const { value, onChange, placeholder = 'Search...', ariaLabel = 'Search Pokémon' } = this.props;
    return (
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={(e) => onChange?.(e.target.value)}
        className="flex-1 px-6 py-3 bg-stardust text-deep-space placeholder-deep-space border border-midnight-core rounded-[var(--radius-inputs)] outline-none focus:ring-2 focus:ring-guidepost-green text-body"
      />
    );
  }
}

export default SearchInput;
