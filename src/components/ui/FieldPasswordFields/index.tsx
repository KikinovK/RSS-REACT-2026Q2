import { useState, type Ref } from 'react';
import FieldPasswordInput from '../FieldPasswordInput';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

interface PasswordFieldProps extends Omit<React.ComponentProps<typeof FieldPasswordInput>, 'isVisible' | 'onToggleVisibility' | 'id' | 'label' | 'error'> {
  ref?: Ref<HTMLInputElement>;
}

interface FieldPasswordFieldsProps {
  passwordId: string;
  confirmPasswordId: string;
  passwordLabel?: string;
  confirmPasswordLabel?: string;
  passwordError?: string;
  confirmPasswordError?: string;
  passwordProps?: PasswordFieldProps;
  confirmPasswordProps?: PasswordFieldProps;
  className?: string;
}

const FieldPasswordFields = ({
  passwordId,
  confirmPasswordId,
  passwordLabel = 'Password',
  confirmPasswordLabel = 'Confirm Password',
  passwordError,
  confirmPasswordError,
  passwordProps = {},
  confirmPasswordProps = {},
  className = '',
}: FieldPasswordFieldsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [localPasswordValue, setLocalPasswordValue] = useState('');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLocalPasswordValue(e.target.value);
    passwordProps.onChange?.(e);
  };

  const { ref: passwordRef, ...passwordRest } = passwordProps;
  const { ref: confirmPasswordRef, ...confirmPasswordRest } = confirmPasswordProps;

  const passwordValue = passwordRest.value !== undefined ? String(passwordRest.value) : localPasswordValue;

  return (
    <div className={className}>
      <div className="mb-4">
        <FieldPasswordInput
          id={passwordId}
          label={passwordLabel}
          error={passwordError}
          isVisible={isVisible}
          onToggleVisibility={toggleVisibility}
          ref={passwordRef}
          onChange={handlePasswordChange}
          {...passwordRest}
        />
        <PasswordStrengthIndicator password={passwordValue} />
      </div>
      <div>
        <FieldPasswordInput
          id={confirmPasswordId}
          label={confirmPasswordLabel}
          error={confirmPasswordError}
          isVisible={isVisible}
          onToggleVisibility={toggleVisibility}
          ref={confirmPasswordRef}
          {...confirmPasswordRest}
        />
      </div>
    </div>
  );
};

export default FieldPasswordFields;
