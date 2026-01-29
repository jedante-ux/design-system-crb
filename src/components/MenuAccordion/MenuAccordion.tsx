import { useState, type ReactNode } from 'react';
import styles from './MenuAccordion.module.css';
import { Icon } from '../Icon';

export interface MenuAccordionProps {
  /** Accordion title */
  title: string;
  /** Icon for the accordion header */
  icon?: ReactNode;
  /** Children items */
  children: ReactNode;
  /** Initially open state */
  defaultOpen?: boolean;
  /** Optional className */
  className?: string;
}

export function MenuAccordion({
  title,
  icon,
  children,
  defaultOpen = false,
  className = '',
}: MenuAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const containerClasses = [
    styles.accordion,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <button
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.title}>{title}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
          <Icon name="chevron-down" size={16} />
        </span>
        <span className={styles.tooltip}>{title}</span>
      </button>

      {isOpen && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
}
