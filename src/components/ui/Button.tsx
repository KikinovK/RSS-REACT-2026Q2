import { Component } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

class Button extends Component<ButtonProps> {
  render() {
    const { children, onClick, disabled, type = 'button' } = this.props;
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="px-6 py-3 bg-guidepost-green text-deep-space font-medium rounded-[var(--radius-buttons)] text-body whitespace-nowrap transition-all hover:cursor-pointer hover:brightness-90 active:brightness-75 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {children}
      </button>
    );
  }
}

export default Button;
