import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ariaLabel?: string;
}

const Button = ({ children, type = 'button', ariaLabel, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      aria-label={ariaLabel}
      className={`${className} px-6 py-3 text-deep-space font-medium rounded-(--radius-buttons) text-body whitespace-nowrap transition-all hover:cursor-pointer hover:brightness-90 active:brightness-75 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

export default Button;
