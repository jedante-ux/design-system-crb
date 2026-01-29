export interface StepNumberProps {
  /** Number to display (1-9) */
  number: number;
  /** Active state - filled with primary color */
  active?: boolean;
  /** Optional className */
  className?: string;
}

/**
 * StepNumber - Circular step number indicator (30x30px)
 *
 * Especificaciones Figma:
 * - Size: 30x30px
 * - Border radius: 1000px (circular)
 * - Active: Background #004EC9, Text white Poppins 700 14px
 * - Inactive: Background white, Border 1px #BEBFC2, Text #595C68 Poppins 400 14px
 * - Padding: 10px
 */
export function StepNumber({ number, active = false, className = '' }: StepNumberProps) {
  const baseStyles: React.CSSProperties = {
    width: '30px',
    height: '30px',
    borderRadius: '1000px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: active ? 700 : 400,
    lineHeight: 1,
    transition: 'all 0.15s ease',
  };

  const activeStyles: React.CSSProperties = {
    backgroundColor: '#004EC9',
    color: '#FFFFFF',
  };

  const inactiveStyles: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    border: '1px solid #BEBFC2',
    color: '#595C68',
  };

  const styles = {
    ...baseStyles,
    ...(active ? activeStyles : inactiveStyles),
  };

  return (
    <div className={className} style={styles}>
      {number}
    </div>
  );
}
