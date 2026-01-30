import type { ReactNode } from 'react';
import styles from './HeaderStepper.module.scss';

export interface HeaderStepperItem {
  label: string;
  icon?: ReactNode;
  active?: boolean;
}

export interface HeaderStepperProps {
  items: HeaderStepperItem[];
  className?: string;
}

/**
 * HeaderStepper - Breadcrumb style stepper para headers (46px height)
 *
 * Muestra pasos de navegación con iconos opcionales y separadores.
 * Texto: Poppins 400, 14px (regular) / 700, 14px (activo)
 * Activo: #004EC9, Inactivo: #202236
 */
export function HeaderStepper({ items, className = '' }: HeaderStepperProps) {
  const classNames = [styles.headerStepper, className].filter(Boolean).join(' ');

  const separator = (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" className={styles.separator}>
      <path
        d="M10 8L16 13.5L10 19"
        stroke="#004EC9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={classNames}>
      <div className={styles.stepperList}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const itemClassNames = [
            styles.stepperItem,
            item.active && styles.stepperItemActive,
          ].filter(Boolean).join(' ');

          return (
            <div key={index} className={styles.stepperItemWrapper}>
              {item.icon && <span className={styles.stepperIcon}>{item.icon}</span>}
              <span className={itemClassNames}>{item.label}</span>
              {!isLast && <span className={styles.separatorWrapper}>{separator}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
