import { useState, useEffect, useRef } from 'react';
import styles from './ExampleComponent.module.css';

/**
 * Variantes visuales del componente
 */
type Variant = 'primary' | 'secondary' | 'success' | 'error';

/**
 * Tamaños disponibles
 */
type Size = 'small' | 'medium' | 'large';

/**
 * Props del componente ExampleComponent
 */
export interface ExampleComponentProps {
  /**
   * Variante visual del componente
   * @default 'primary'
   */
  variant?: Variant;

  /**
   * Tamaño del componente
   * @default 'medium'
   */
  size?: Size;

  /**
   * Si el componente está deshabilitado
   * @default false
   */
  disabled?: boolean;

  /**
   * Si muestra un indicador de carga
   * @default false
   */
  loading?: boolean;

  /**
   * Ícono a mostrar (SVG como ReactNode)
   */
  icon?: React.ReactNode;

  /**
   * Texto o contenido del componente
   */
  children?: React.ReactNode;

  /**
   * Callback cuando se hace click
   */
  onClick?: () => void;

  /**
   * Callback cuando cambia el estado activo
   */
  onToggle?: (isActive: boolean) => void;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * ExampleComponent - Componente de ejemplo siguiendo Design Guidelines
 *
 * Este componente demuestra todas las mejores prácticas del sistema de diseño:
 * - TypeScript con tipos explícitos
 * - Props documentadas con JSDoc
 * - Estados de interacción (hover, active, disabled, loading)
 * - Transiciones suaves
 * - CSS Modules para encapsulación
 * - Accesibilidad (ARIA attributes)
 * - Composición flexible con children e iconos
 *
 * @example
 * ```tsx
 * <ExampleComponent
 *   variant="primary"
 *   size="medium"
 *   icon={<Icon />}
 *   onClick={() => console.log('clicked')}
 * >
 *   Click me
 * </ExampleComponent>
 * ```
 *
 * @example Con loading state
 * ```tsx
 * <ExampleComponent
 *   variant="success"
 *   loading={true}
 * >
 *   Loading...
 * </ExampleComponent>
 * ```
 */
export function ExampleComponent({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  children,
  onClick,
  onToggle,
  className = '',
}: ExampleComponentProps) {
  // Estado local
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const componentRef = useRef<HTMLButtonElement>(null);

  // Manejar click
  const handleClick = () => {
    if (disabled || loading) return;

    const newActiveState = !isActive;
    setIsActive(newActiveState);

    onClick?.();
    onToggle?.(newActiveState);
  };

  // Manejar keyboard (accessibility)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  // Limpiar estado al desmontar
  useEffect(() => {
    return () => {
      setIsActive(false);
    };
  }, []);

  // Clases CSS dinámicas
  const componentClasses = [
    styles.component,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    isActive && styles.active,
    isHovered && styles.hovered,
    disabled && styles.disabled,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={componentRef}
      className={componentClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      aria-pressed={isActive}
      type="button"
    >
      {/* Indicador de carga */}
      {loading && (
        <div className={styles.loader}>
          <div className={styles.spinner} />
        </div>
      )}

      {/* Ícono */}
      {icon && !loading && <div className={styles.icon}>{icon}</div>}

      {/* Contenido */}
      {children && <span className={styles.content}>{children}</span>}

      {/* Ripple effect opcional */}
      {isActive && !disabled && (
        <span className={styles.ripple} />
      )}
    </button>
  );
}

/**
 * Ícono de ejemplo - Checkmark
 */
export function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M16.6 5L7.5 14.1L3.4 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Ícono de ejemplo - Plus
 */
export function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 4V16M4 10H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
