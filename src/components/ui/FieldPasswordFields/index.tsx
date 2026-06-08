import { useState, type Ref } from 'react';
import FieldPasswordInput from '../FieldPasswordInput';

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

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const { ref: passwordRef, ...passwordRest } = passwordProps;
  const { ref: confirmPasswordRef, ...confirmPasswordRest } = confirmPasswordProps;

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
          {...passwordRest}
        />
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
