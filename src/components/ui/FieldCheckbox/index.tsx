import { forwardRef, type InputHTMLAttributes } from 'react';
import { Label, FieldError } from '../FieldInput';

interface FieldCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  id: string;
}

const FieldCheckbox = forwardRef<HTMLInputElement, FieldCheckboxProps>(({
  label,
  error,
  id,
  className,
  ...props
}, ref) => {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className={`flex flex-col ${className || ''}`}>
      <div className="flex items-center gap-3">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          id={id}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`
            w-5
            h-5
            bg-stardust
            border border-midnight-core
            rounded-sm
            cursor-pointer
            accent-guidepost-green
            transition-all
            focus:ring-1 focus:ring-guidepost-green
            disabled:opacity-50
            disabled:cursor-not-allowed
          `}
        />
        {label && <Label htmlFor={id} className="mb-0 cursor-pointer">{label}</Label>}
      </div>
      <FieldError id={id}>{error}</FieldError>
    </div>
  );
});

FieldCheckbox.displayName = 'FieldCheckbox';

export default FieldCheckbox;
