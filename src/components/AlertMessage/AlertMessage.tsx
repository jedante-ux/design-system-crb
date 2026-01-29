import type { ReactNode } from 'react';
import styles from './AlertMessage.module.css';

export interface AlertMessageProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  icon?: ReactNode;
}

function DefaultIcon({ variant }: { variant: string }) {
  switch (variant) {
    case 'success':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="10" cy="10" r="8" />
          <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'warning':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 3L2 17h16L10 3z" strokeLinejoin="round" />
          <path d="M10 8v4M10 14v1" strokeLinecap="round" />
        </svg>
      );
    case 'error':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="10" cy="10" r="8" />
          <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="10" cy="10" r="8" />
          <path d="M10 6v5M10 13v1" strokeLinecap="round" />
        </svg>
      );
  }
}

export function AlertMessage({
  variant = 'info',
  title,
  children,
  onClose,
  icon,
}: AlertMessageProps) {
  return (
    <div className={`${styles.alert} ${styles[variant]}`}>
      <div className={styles.iconWrapper}>
        {icon || <DefaultIcon variant={variant} />}
      </div>
      <div className={styles.content}>
        {title && <span className={styles.title}>{title}</span>}
        <span className={styles.message}>{children}</span>
      </div>
      {onClose && (
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
