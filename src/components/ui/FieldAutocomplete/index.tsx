import {
  useRef,
  useState,
  useEffect,
  useId,
  type ChangeEvent,
  type KeyboardEvent,
  forwardRef,
  useImperativeHandle,
} from 'react';

import { Label, FieldError } from '../FieldInput';

interface FieldAutocompleteProps {
  id?: string;
  label?: string;
  error?: string;
  className?: string;
  value?: string;
  options: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

const filterOptions = (options: string[], query: string): string[] => {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return options;
  return options.filter((option) => option.toLowerCase().includes(trimmed));
};

const FieldAutocomplete = forwardRef<HTMLInputElement, FieldAutocompleteProps>(
  (
    {
      id: providedId,
      label = 'Country',
      error,
      className,
      value = '',
      options,
      placeholder = 'Type to search...',
      onChange,
      onBlur,
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId ?? generatedId;
    const listId = `${id}-listbox`;
    const errorId = `${id}-error`;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const matches = filterOptions(options, value);
    const describedBy = error ? errorId : undefined;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
      setIsOpen(true);
      setActiveIndex(-1);
    };

    const handleSelect = (option: string) => {
      onChange?.(option);
      setIsOpen(false);
      setActiveIndex(-1);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setIsOpen(true);
        setActiveIndex((prev) => (prev < matches.length - 1 ? prev + 1 : 0));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setIsOpen(true);
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : matches.length - 1));
      } else if (event.key === 'Enter' && activeIndex >= 0 && matches[activeIndex]) {
        event.preventDefault();
        handleSelect(matches[activeIndex]);
      } else if (event.key === 'Escape') {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    const handleFocus = () => {
      setIsOpen(true);
    };

    return (
      <div className={`flex flex-col ${className || ''}`}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <div className="relative" ref={containerRef}>
          <input
            ref={inputRef}
            id={id}
            type="text"
            role="combobox"
            autoComplete="off"
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            aria-expanded={isOpen}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={
              activeIndex >= 0 && matches[activeIndex] ? `${id}-opt-${activeIndex}` : undefined
            }
            className={`
              w-full
              px-6
              py-3
              bg-stardust
              text-deep-space
              text-body
              border border-midnight-core
              rounded-(--radius-inputs)
              placeholder:text-deep-space
              outline-none
              transition-all
              focus:border-guidepost-green
              focus:ring-1 focus:ring-guidepost-green
              disabled:opacity-50
              disabled:cursor-not-allowed
              ${error ? 'border-guidepost-green' : ''}
            `}
          />
          {isOpen && matches.length > 0 && (
            <ul
              id={listId}
              role="listbox"
              className="absolute z-10 w-full max-h-60 overflow-auto mt-1 bg-stardust text-deep-space border border-midnight-core rounded-(--radius-inputs) shadow-lg"
            >
              {matches.map((option, index) => {
                const isActive = index === activeIndex;
                return (
                  <li
                    key={option}
                    id={`${id}-opt-${index}`}
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                    onClick={() => handleSelect(option)}
                    className={`
                      px-4 py-2 cursor-pointer text-body-sm
                      ${isActive ? 'bg-guidepost-green/30' : 'hover:bg-guidepost-green/20'}
                    `}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          )}
          {isOpen && matches.length === 0 && (
            <div
              className="absolute z-10 w-full mt-1 bg-stardust text-deep-space/60 border border-midnight-core rounded-(--radius-inputs) shadow-lg px-4 py-2 text-body-sm"
            >
              No matches found
            </div>
          )}
        </div>
        <FieldError id={id}>{error}</FieldError>
      </div>
    );
  }
);

FieldAutocomplete.displayName = 'FieldAutocomplete';

export default FieldAutocomplete;
