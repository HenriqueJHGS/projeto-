import React from 'react';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-16 w-16 text-xl',
};

const statusClasses: Record<string, string> = {
  online: 'bg-success-500',
  offline: 'bg-gray-400',
  away: 'bg-warning-500',
  busy: 'bg-error-500',
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  name,
  size = 'md',
  className = '',
  status,
}) => {
  const initials = name
    ? name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : '';

  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            rounded-full object-cover
            ${sizeClasses[size]}
            ${className}
          `}
        />
      ) : (
        <div
          className={`
            rounded-full flex items-center justify-center
            bg-primary-100 text-primary-700 font-medium
            ${sizeClasses[size]}
            ${className}
          `}
        >
          {initials}
        </div>
      )}
      {status && (
        <div
          className={`
            absolute right-0 bottom-0 transform translate-y-1/4 translate-x-1/4
            rounded-full ring-2 ring-white
            h-1/4 w-1/4
            ${statusClasses[status]}
          `}
        />
      )}
    </div>
  );
};

export default Avatar;