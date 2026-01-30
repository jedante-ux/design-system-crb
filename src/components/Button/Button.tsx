import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button type variant from Figma */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Optional icon on the left */
  iconLeft?: ReactNode;
  /** Optional icon on the right */
  iconRight?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  iconLeft,
  iconRight,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={classNames} disabled={disabled} {...props}>
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span className={styles.text}>{children}</span>
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
}
