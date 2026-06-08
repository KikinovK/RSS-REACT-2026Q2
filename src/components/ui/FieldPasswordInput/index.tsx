import { forwardRef, type InputHTMLAttributes } from 'react';

import FieldInput from '../FieldInput';
import Button from '../Button';

import EyeIcon from '../../../assets/icons/eye-show.svg?react';
import EyeOffIcon from '../../../assets/icons/eye-hide.svg?react';

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  id: string;
  isVisible: boolean;
  onToggleVisibility: () => void;
}

const FieldPasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({
  label,
  error,
  id,
  isVisible,
  onToggleVisibility,
  className,
  ...props
}, ref) => {

  return (

    <FieldInput ref={ref} {...props} id={id} error={error} label={label} className={className} type={isVisible ? 'text' : 'password'}>
      <Button
        type="button"
        variant='icon'
        onClick={onToggleVisibility}
        aria-label={isVisible ? 'Hide password' : 'Show password'}
        aria-pressed={isVisible}
        className="
          absolute
          right-1
          top-1/2
          -translate-y-1/2
          text-cosmic-gray
        "
      >
        {isVisible ? <EyeOffIcon /> : <EyeIcon />}
      </Button>
    </FieldInput>
  );
});

FieldPasswordInput.displayName = 'FieldPasswordInput';

export default FieldPasswordInput;
