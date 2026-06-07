import { forwardRef, type SelectHTMLAttributes } from 'react';
import { Label, FieldError } from '../FieldInput';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface FieldSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  id: string;
  options: SelectOption[];
  placeholder?: string;
}

const FieldSelect = forwardRef<HTMLSelectElement, FieldSelectProps>(({
  label,
  error,
  id,
  className,
  options,
  placeholder,
  ...props
}, ref) => {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className={`flex flex-col ${className || ''}`}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        <select
          {...props}
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`
            w-full
            px-6
            py-3
            bg-stardust
            text-deep-space
            text-body
            border border-midnight-core
            rounded-(--radius-inputs)
            outline-none
            transition-all
            focus:border-guidepost-green
            focus:ring-1 focus:ring-guidepost-green
            disabled:opacity-50
            disabled:cursor-not-allowed
            appearance-none
            cursor-pointer
            ${error ? 'border-guidepost-green' : ''}
          `}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <FieldError id={id}>{error}</FieldError>
    </div>
  );
});

FieldSelect.displayName = 'FieldSelect';

export default FieldSelect;
export { Label, FieldError };
