import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-sm',
  secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-sm',
  success: 'bg-success-500 hover:bg-success-600 text-white shadow-sm',
  warning: 'bg-warning-500 hover:bg-warning-600 text-white shadow-sm',
  error: 'bg-error-500 hover:bg-error-600 text-white shadow-sm',
  outline: 'bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700 shadow-sm',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs py-1.5 px-3',
  md: 'text-sm py-2 px-4',
  lg: 'text-base py-2.5 px-5',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center 
        font-medium rounded-md transition-colors duration-200
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;