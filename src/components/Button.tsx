// src/components/Button/Button.tsx
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
