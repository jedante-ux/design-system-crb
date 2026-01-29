import styles from './Stepper.module.css';

export interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export interface StepProps {
  number: number;
  label: string;
  status: 'completed' | 'active' | 'pending';
  onClick?: () => void;
}

export function Step({ number, label, status, onClick }: StepProps) {
  return (
    <button
      className={`${styles.step} ${styles[status]}`}
      onClick={onClick}
      disabled={status === 'pending'}
    >
      <span className={styles.stepNumber}>{number}</span>
      <span className={styles.stepLabel}>{label}</span>
    </button>
  );
}

export function Stepper({ steps, currentStep, onStepClick }: StepperProps) {
  return (
    <div className={styles.stepper}>
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        let status: 'completed' | 'active' | 'pending';

        if (stepNumber < currentStep) {
          status = 'completed';
        } else if (stepNumber === currentStep) {
          status = 'active';
        } else {
          status = 'pending';
        }

        return (
          <div key={index} className={styles.stepWrapper}>
            <Step
              number={stepNumber}
              label={label}
              status={status}
              onClick={() => onStepClick?.(stepNumber)}
            />
            {index < steps.length - 1 && (
              <div className={`${styles.connector} ${stepNumber < currentStep ? styles.connectorCompleted : ''}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
