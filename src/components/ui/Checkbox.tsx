import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  ariaLabel?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({ ariaLabel, checked = false, onChange, className = '', ...props }: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      aria-label={ariaLabel}
      className={`
        w-5 h-5
        rounded-lg
        border-2
        border-midnight-core
        bg-stardust
        cursor-pointer
        transition-all
        checked:bg-guidepost-green
        checked:border-guidepost-green
        focus:ring-2
        focus:ring-guidepost-green
        focus:outline-none
        ${className}
      `}
      {...props}
    />
  );
};

export default Checkbox;
