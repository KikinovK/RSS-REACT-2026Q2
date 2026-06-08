import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'icon';
  children: ReactNode;
}

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary:
      'px-6 py-3 rounded-(--radius-buttons) bg-guidepost-green border-guidepost-green font-semibold text-deep-space text-body',
    icon: 'h-10 w-10 p-3 bg-transparent rounded-full flex items-center justify-center hover:bg-guidepost-green/10',
  };

  return (
    <button
      {...props}
      type={type}
      className={`${className || ''} ${variantClasses[variant]}   whitespace-nowrap transition-all hover:cursor-pointer hover:brightness-90 active:brightness-75 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

export default Button;
