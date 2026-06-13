// src/components/Button.tsx
import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  // Leverage simple template literals or the 'clsx' package for heavy conditional logic
  const className = `${styles.btn} ${variant === 'secondary' ? styles.secondary : ''}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
