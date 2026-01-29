import { useState, type ReactNode } from 'react';
import styles from './MenuAccordion.module.css';

export interface MenuAccordionProps {
  /** Accordion title */
  title: string;
  /** Icon for the accordion header */
  icon?: ReactNode;
  /** Children items */
  children: ReactNode;
  /** Optional className */
  className?: string;
}

export function MenuAccordion({
  title,
  icon,
  children,
  className = '',
}: MenuAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const containerClasses = [
    styles.accordion,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={containerClasses}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={styles.header}
        type="button"
        aria-expanded={isOpen}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
      </button>

      {isOpen && (
        <div className={styles.flyout}>
          <div className={styles.flyoutHeader}>
            {title}
          </div>
          <div className={styles.flyoutContent}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
