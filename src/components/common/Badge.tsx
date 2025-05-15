import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'default';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700',
  success: 'bg-success-100 text-success-700',
  warning: 'bg-warning-100 text-warning-700',
  error: 'bg-error-100 text-error-700',
  info: 'bg-gray-100 text-gray-700',
  default: 'bg-gray-100 text-gray-700',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
  lg: 'text-base px-3 py-1',
};

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  return (
    <span
      className={`
        inline-flex items-center justify-center 
        font-medium rounded-full
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {text}
    </span>
  );
};

export default Badge;