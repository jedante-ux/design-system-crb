/**
 * LogoIcon - Solo el icono "C" del logo de Crabi
 *
 * Versión simplificada del logo mostrando únicamente la "C"
 * para usar en espacios reducidos como el sidebar.
 */

export interface LogoIconProps {
  /** Color variant */
  variant?: 'blue' | 'white';
  /** Size in pixels */
  size?: number;
  /** Optional className */
  className?: string;
}

export function LogoIcon({ variant = 'blue', size = 30, className = '' }: LogoIconProps) {
  const fillColor = variant === 'white' ? '#FFFFFF' : '#004EC9';

  // Calculate proportional height based on original aspect ratio (20:23)
  const aspectRatio = 23 / 20;
  const height = size * aspectRatio;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Crabi Icon"
    >
      <path
        d="M0 11.4559C0 5.11662 4.45778 0 11.4598 0C14.8112 0 17.4035 0.963841 19.734 3.4533C20.1135 3.84435 20.076 4.28496 19.6912 4.67601L15.7038 8.87284C15.3243 9.26389 14.8967 9.22534 14.5172 8.74066C13.7101 7.77682 12.8175 7.4739 11.6309 7.4739C9.55162 7.4739 8.10846 9.22534 8.10846 11.4559C8.10846 13.6865 9.55162 15.5206 11.6309 15.5206C12.8175 15.5206 13.7101 15.1681 14.5172 14.2098C14.8967 13.7306 15.3243 13.6865 15.7038 14.0776L19.6912 18.2744C20.0707 18.6655 20.1135 19.1061 19.6912 19.5412C17.3982 21.9921 14.7684 23 11.4545 23C4.45243 23 0 17.8393 0 11.4559Z"
        fill={fillColor}
      />
    </svg>
  );
}
