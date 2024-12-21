import React from 'react';
import { cn } from '@/utils/cn';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export function IconButton({ icon, className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        'p-2 rounded-lg transition-colors hover:bg-primary/10',
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
}