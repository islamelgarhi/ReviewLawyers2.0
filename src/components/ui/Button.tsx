import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  icon, 
  fullWidth,
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2',
        variant === 'primary' && 'bg-primary text-black hover:bg-primary/90',
        variant === 'secondary' && 'bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}