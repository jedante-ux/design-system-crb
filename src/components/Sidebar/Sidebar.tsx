import type { ReactNode } from 'react';
import styles from './Sidebar.module.scss';

export interface SidebarProps {
  /** Logo element (56x56px recommended) */
  logo?: ReactNode;
  /** Menu items container */
  children: ReactNode;
  /** Optional className */
  className?: string;
}

/**
 * Sidebar - Full height sidebar menu (108px width)
 *
 * Especificaciones Figma:
 * - Width: 108px
 * - Height: 100vh (full screen height)
 * - Background: white (#FFFFFF)
 * - Padding: 24px top/bottom, 16px left/right
 * - Gap between logo and menu: 48px
 * - Layout: Vertical
 */
export function Sidebar({ logo, children, className = '' }: SidebarProps) {
  const classNames = [styles.sidebar, className].filter(Boolean).join(' ');

  return (
    <aside className={classNames}>
      {logo && <div className={styles.logoContainer}>{logo}</div>}
      <nav className={styles.menuContainer}>{children}</nav>
    </aside>
  );
}

export interface MenuGroupProps {
  /** Menu items */
  children: ReactNode;
  /** Optional className */
  className?: string;
}

/**
 * MenuGroup - Container for menu items with background
 *
 * Especificaciones Figma:
 * - Width: 63px (fit content + padding)
 * - Background: #FAFAFA
 * - Corner Radius: 16px
 * - Padding: 4px
 * - Layout: Vertical with auto gap
 */
export function MenuGroup({ children, className = '' }: MenuGroupProps) {
  const classNames = [styles.menuGroup, className].filter(Boolean).join(' ');

  return <div className={classNames}>{children}</div>;
}
