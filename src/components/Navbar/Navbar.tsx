import type { ReactNode } from 'react';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  /**
   * Contenido de la sección izquierda (branch info)
   */
  leftContent?: ReactNode;
  /**
   * Contenido de la sección derecha (user info + actionables)
   */
  rightContent?: ReactNode;
  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Navbar - Header principal de 116px con layout horizontal
 *
 * Header basado en especificaciones de Figma con sección izquierda para
 * navegación/branch info y sección derecha para user info + acciones.
 */
export function Navbar({ leftContent, rightContent, className = '' }: NavbarProps) {
  const classNames = [styles.navbar, className].filter(Boolean).join(' ');

  return (
    <header className={classNames}>
      {leftContent && <div className={styles.leftSection}>{leftContent}</div>}
      {rightContent && <div className={styles.rightSection}>{rightContent}</div>}
    </header>
  );
}

export interface BackButtonProps {
  onClick?: () => void;
  className?: string;
}

/**
 * BackButton - Botón circular con flecha de regreso (48x48px)
 */
export function BackButton({ onClick, className = '' }: BackButtonProps) {
  const classNames = [styles.backButton, className].filter(Boolean).join(' ');

  return (
    <button className={classNames} onClick={onClick} type="button" aria-label="Regresar">
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
        <path
          d="M6 1L1 6M1 6L6 11M1 6H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export interface BranchTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * BranchTitle - Título y subtítulo de la sección/página actual
 */
export function BranchTitle({ title, subtitle, className = '' }: BranchTitleProps) {
  const classNames = [styles.branchTitle, className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </div>
  );
}

export interface UserInfoProps {
  userName: string;
  providerName?: string;
  profilePicture?: ReactNode;
  className?: string;
}

/**
 * Extrae las iniciales del nombre del usuario
 * @param name - Nombre completo del usuario
 * @returns Las primeras dos iniciales en mayúsculas
 */
function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * UserInfo - Información del usuario con foto de perfil o iniciales
 */
export function UserInfo({ userName, providerName, profilePicture, className = '' }: UserInfoProps) {
  const classNames = [styles.userInfo, className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <div className={styles.profilePicture}>
        {profilePicture || (
          <span className={styles.initials}>{getInitials(userName)}</span>
        )}
      </div>
      <div className={styles.userDetails}>
        <span className={styles.userName}>{userName}</span>
        {providerName && <span className={styles.providerName}>{providerName}</span>}
      </div>
    </div>
  );
}

export interface ActionButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

/**
 * ActionButton - Botón de acción (56x56px) para logout u otras acciones
 */
export function ActionButton({ icon, onClick, ariaLabel, className = '' }: ActionButtonProps) {
  const classNames = [styles.actionButton, className].filter(Boolean).join(' ');

  return (
    <button className={classNames} onClick={onClick} type="button" aria-label={ariaLabel}>
      {icon}
    </button>
  );
}

export interface BranchTabProps {
  label: string;
  badge?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * BranchTab - Tab de navegación en navbar con badge opcional
 *
 * Tabs con texto, badge count y estado activo.
 * Texto: Poppins 600, 18px
 */
export function BranchTab({ label, badge, active = false, onClick, className = '' }: BranchTabProps) {
  const classNames = [
    styles.branchTab,
    active && styles.branchTabActive,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={classNames} onClick={onClick} type="button">
      <span className={styles.branchTabLabel}>{label}</span>
      {badge && (
        <span className={styles.branchTabBadge}>
          <span className={styles.branchTabBadgeText}>{badge}</span>
        </span>
      )}
    </button>
  );
}
