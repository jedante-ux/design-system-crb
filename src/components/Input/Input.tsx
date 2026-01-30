import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Optional label */
  label?: string;
  /** Optional icon on the left */
  iconLeft?: ReactNode;
  /** Optional icon on the right */
  iconRight?: ReactNode;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Helper text */
  helperText?: string;
}

export function Input({
  label,
  iconLeft,
  iconRight,
  error = false,
  errorMessage,
  helperText,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const containerClasses = [
    styles.container,
    className,
  ].filter(Boolean).join(' ');

  const inputWrapperClasses = [
    styles.inputWrapper,
    error && styles.error,
    props.disabled && styles.disabled,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      <div className={inputWrapperClasses}>
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}

        <input
          id={inputId}
          className={styles.input}
          {...props}
        />

        {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      </div>

      {(errorMessage || helperText) && (
        <span className={error ? styles.errorText : styles.helperText}>
          {error ? errorMessage : helperText}
        </span>
      )}
    </div>
  );
}
