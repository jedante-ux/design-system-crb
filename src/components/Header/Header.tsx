import type { ReactNode } from 'react';
import styles from './Header.module.css';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  backButton?: boolean;
  onBack?: () => void;
  actions?: ReactNode;
  variant?: 'default' | 'simple' | 'with-stepper';
  children?: ReactNode;
}

export function Header({
  title,
  subtitle,
  backButton,
  onBack,
  actions,
  variant = 'default',
  children,
}: HeaderProps) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <div className={styles.left}>
        {backButton && (
          <button className={styles.backButton} onClick={onBack} aria-label="Volver">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 10H5M5 10l5 5M5 10l5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        <div className={styles.titleGroup}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
      </div>
      {children && <div className={styles.center}>{children}</div>}
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}
