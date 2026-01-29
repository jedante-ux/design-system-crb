import type { ReactNode } from 'react';
import styles from './FilterButton.module.css';

export interface FilterButtonProps {
  label: string;
  active?: boolean;
  icon?: ReactNode;
  count?: number;
  onClick?: () => void;
}

export interface FilterGroupProps {
  children: ReactNode;
}

export function FilterButton({ label, active = false, icon, count, onClick }: FilterButtonProps) {
  return (
    <button
      className={`${styles.filterButton} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {count !== undefined && <span className={styles.count}>{count}</span>}
    </button>
  );
}

export function FilterGroup({ children }: FilterGroupProps) {
  return <div className={styles.filterGroup}>{children}</div>;
}
