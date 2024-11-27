import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  icon: Icon,
  fullWidth,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center space-x-2 font-medium transition rounded-lg';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100',
    ghost: 'hover:bg-gray-100'
  };

  return (
    <button 
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children && <span>{children}</span>}
    </button>
  );
}