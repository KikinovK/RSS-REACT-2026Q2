import { forwardRef, type InputHTMLAttributes, type LabelHTMLAttributes, type ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  id: string;
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor: string;
}

interface FieldErrorProps {
  children: ReactNode;
  id: string;
}

const Label = ({ children, htmlFor, className, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className={`block text-stardust text-body-sm font-medium mb-2 ${className || ''}`}
    >
      {children}
    </label>
  );
};

const FieldError = ({ children, id }: FieldErrorProps) => {
  if (!children) return null;

  return (
    <p
      id={`${id}-error`}
      role="alert"
      className="text-guidepost-green text-caption mt-2"
    >
      {children}
    </p>
  );
};

const FieldInput = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  id,
  className,
  ...props
}, ref) => {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className={`flex flex-col ${className || ''}`}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
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
      <FieldError id={id}>{error}</FieldError>
    </div>
  );
});

FieldInput.displayName = 'FieldInput';

export default FieldInput;
export { Label, FieldError };
