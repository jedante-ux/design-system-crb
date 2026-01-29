export const colors = {
  // Primary - from Figma
  primary: {
    bluecar: '#004EC9',
    purple: '#585DE4',
  },
  // Secondary - from Figma
  secondary: {
    blue: '#004EC9',
  },
  // Neutral - from Figma
  neutral: {
    white: '#FFFFFF',
    midGray: '#E6E8EC',
    gray: '#BEBFC2',
    dark: '#262626',
  },
  // Semantic
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const;

export type Colors = typeof colors;
