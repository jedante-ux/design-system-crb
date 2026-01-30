import type { ReactNode } from 'react';
import styles from './BranchInfo.module.scss';

export interface BranchInfoProps {
  title: string;
  subtitle?: string;
  status?: 'active' | 'inactive' | 'pending';
  statusLabel?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface BranchItemProps {
  label: string;
  value: string | ReactNode;
  icon?: ReactNode;
}

export function BranchItem({ label, value, icon }: BranchItemProps) {
  return (
    <div className={styles.branchItem}>
      {icon && <span className={styles.itemIcon}>{icon}</span>}
      <div className={styles.itemContent}>
        <span className={styles.itemLabel}>{label}</span>
        <span className={styles.itemValue}>{value}</span>
      </div>
    </div>
  );
}

export function BranchInfo({
  title,
  subtitle,
  status = 'active',
  statusLabel,
  icon,
  onClick,
}: BranchInfoProps) {
  return (
    <div className={styles.branchInfo} onClick={onClick}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
      {statusLabel && (
        <span className={`${styles.status} ${styles[status]}`}>{statusLabel}</span>
      )}
    </div>
  );
}
