import type { ReactNode } from 'react';
import styles from './MenuItem.module.css';

export interface MenuItemProps {
  /** Icon to display (24x24px recommended) */
  icon: ReactNode;
  /** Active state - shows white background with border */
  active?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Aria label for accessibility */
  ariaLabel?: string;
  /** Tooltip text to show on hover */
  tooltip?: string;
  /** Optional className */
  className?: string;
}

/**
 * MenuItem - Sidebar menu item with icon (56x56px)
 *
 * Especificaciones Figma:
 * - Size: 55.63px x 55.63px (~56px)
 * - Corner Radius: 18.25px (~18px)
 * - Padding: 15.82px (~16px)
 * - Icon size: 24x24px
 * - Default/Hover: transparent background, black icon
 * - Active: white background, 1px border #F1F2F3, black icon
 * - Tooltip: appears on right side on hover
 */
export function MenuItem({
  icon,
  active = false,
  onClick,
  ariaLabel,
  tooltip,
  className = '',
}: MenuItemProps) {
  const classNames = [
    styles.menuItem,
    active && styles.active,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
      title={tooltip}
      data-tooltip={tooltip}
    >
      <span className={styles.icon}>{icon}</span>
      {tooltip && <span className={styles.tooltip}>{tooltip}</span>}
    </button>
  );
}
