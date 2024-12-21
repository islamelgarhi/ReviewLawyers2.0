import React from 'react';
import { cn } from '@/utils/cn';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputField({ label, className, ...props }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-black dark:text-white mb-2">
        {label}
      </label>
      <input
        className={cn(
          "w-full px-4 py-2 rounded-lg transition-all duration-200",
          "bg-white dark:bg-gray-800",
          "border border-gray-300 dark:border-gray-700",
          "text-black dark:text-white",
          "focus:ring-2 focus:ring-primary focus:border-transparent",
          "placeholder:text-gray-400 dark:placeholder:text-gray-500",
          className
        )}
        {...props}
      />
    </div>
  );
}