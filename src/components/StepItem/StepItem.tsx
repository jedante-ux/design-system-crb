import { StepNumber } from '../StepNumber';
import styles from './StepItem.module.scss';

export interface StepItemProps {
  /** Step number (1-9) */
  number: number;
  /** Step label text */
  label: string;
  /** Active state */
  active?: boolean;
  /** Show connecting line (for all steps except last) */
  showLine?: boolean;
  /** Optional className */
  className?: string;
}

/**
 * StepItem - Step indicator with number, label and optional connecting line
 *
 * Especificaciones Figma:
 * - Layout: Horizontal
 * - Gap: 12px
 * - Padding left: 16px
 * - Text: Poppins 600 12px (active) / Poppins 400 12px (inactive)
 * - Text color: #222222
 * - Line: 1px solid connector after text
 */
export function StepItem({
  number,
  label,
  active = false,
  showLine = false,
  className = '',
}: StepItemProps) {
  const classNames = [styles.stepItem, className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <StepNumber number={number} active={active} />
      <span className={active ? styles.labelActive : styles.label}>{label}</span>
      {showLine && <div className={styles.line} />}
    </div>
  );
}
