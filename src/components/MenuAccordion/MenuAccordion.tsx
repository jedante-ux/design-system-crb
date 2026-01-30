import { useState, useRef, useEffect, type ReactNode } from 'react';
import styles from './MenuAccordion.module.scss';

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
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top,
        left: rect.right + 4,
      });
    }
  }, [isOpen]);

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
        ref={buttonRef}
        className={styles.header}
        type="button"
        aria-expanded={isOpen}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
      </button>

      {isOpen && (
        <div
          className={styles.flyout}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
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
