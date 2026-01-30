import type { ReactNode } from 'react';
import styles from './Breadcrumbs.module.scss';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}

/**
 * Breadcrumbs - Navegación de ruta (53px height)
 *
 * Muestra la ruta de navegación actual con separadores entre items.
 * Items: Poppins 400, 14px
 * Activo: #004EC9, Inactivo: #202236
 */
export function Breadcrumbs({ items, separator, className = '' }: BreadcrumbsProps) {
  const classNames = [styles.breadcrumbs, className].filter(Boolean).join(' ');

  const defaultSeparator = (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.separator}>
      <path
        d="M7 4L12 9L7 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <nav className={classNames} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const itemClassNames = [
            styles.breadcrumbItem,
            item.active && styles.breadcrumbItemActive,
            isLast && styles.breadcrumbItemLast,
          ].filter(Boolean).join(' ');

          return (
            <li key={index} className={styles.breadcrumbListItem}>
              {item.onClick ? (
                <button
                  className={itemClassNames}
                  onClick={item.onClick}
                  type="button"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ) : (
                <span className={itemClassNames} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className={styles.separatorWrapper}>{separator || defaultSeparator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
