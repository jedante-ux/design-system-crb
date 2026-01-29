# Crabi Design System - Brand Guidelines (v01)

**Official design system guidelines for Crabi UI components and visual identity.**

**Keywords**: design system, brand guidelines, UI components, color palette, typography, component design, design tokens, spacing system, React components, CSS modules, TypeScript, accessibility, visual identity, design patterns

---

## Overview

This skill provides comprehensive brand guidelines for developing UI components within the Crabi design system. It ensures visual consistency, accessibility, and professional quality across all interfaces.

### Core Principles

- **Consistency**: Uniform patterns across all components
- **Simplicity**: Clean, focused designs without over-engineering
- **Accessibility**: WCAG-compliant color contrast and interaction states
- **Performance**: Optimized components with smooth transitions

---

## Brand Guidelines

### Color Palette

#### Primary Colors (Brand)
```
Bluecar (Primary):  #004EC9  - Main brand color
Purple:             #585DE4  - Secondary brand color
```

#### Secondary Colors
```
Red:                #FB5F5F  - Error, alerts, danger actions
Yellow:             #F9C131  - Warnings, attention
Brown:              #9D5E5E  - Subtle emphasis
Green:              #1D8474  - Success, positive actions
Blue:               #30AAF5  - Information, links
```

#### Secondary Light Colors (Backgrounds)
```
Red Light:          #FFD6D6  - Error backgrounds
Yellow Light:       #FFF4D8  - Warning backgrounds
Brown Light:        #9C9292  - Subtle backgrounds
Green Light:        #9EC3B6  - Success backgrounds
Blue Light:         #B1E1FF  - Info backgrounds
```

#### Neutral Colors
```
Black:              #1F2236  - Maximum contrast text, headers
Dark Gray:          #585C68  - Primary text
Gray:               #BDBEC2  - Secondary text, disabled states
Mid Gray:           #E5E7EB  - Borders, dividers
Light Gray:         #F1F1F3  - Light backgrounds
Ultra Light Gray:   #FAFAFA  - Very light backgrounds
White:              #FFFFFF  - Main background
Card Dark:          #32354F  - Dark mode cards
```

#### Status Colors (with backgrounds)
```
Success:            #409161  on  #E9FFEF  - Positive states
Warning:            #F9C131  on  #FFF2DD  - Warnings
Error:              #FB5F5F  on  #FFD6D6  - Errors, delete
Info:               #004EC9  on  #B1E1FF  - Information
Purple:             #585DE4  on  #E6EAFF  - Special status
```

### Typography

#### Font Family
- **Primary**: 'Poppins', sans-serif
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

#### Type Scale
```
XS:     9px    - Small badges, labels
SM:     10px   - Small buttons, labels
Base:   13px   - Standard text, buttons
MD:     14px   - Primary text
LG:     16px   - Small headings
XL:     18px   - Medium headings
2XL:    24px   - Large headings
```

#### Line Heights
```
Tight:      1       - Icons, badges
Normal:     1.5     - General text
Relaxed:    1.75    - Long-form text
```

### Spacing System

**Base Unit**: 4px (all spacing must be multiples of 4)

```
1:      4px     - Minimum spacing
2:      6px     - Small gaps
3:      8px     - Medium gaps
4:      10px    - Small padding
5:      12px    - Standard padding
6:      16px    - Medium padding
7:      20px    - Large padding
8:      24px    - Extra large padding
10:     28px    - Very large padding
```

#### Component-Specific Padding
```
Buttons (SM):       6px 10px
Buttons (Base):     10px 16px
Buttons (LG):       12px 24px
Cards:              12px
Cards (LG):         16px 24px
Inputs:             8px 12px
```

### Border Radius
```
SM:         3px     - Small badges, tags
Base:       4px     - Small elements
MD:         6px     - Small buttons, options
LG:         8px     - Buttons, inputs, cards
XL:         12px    - Containers, modals
Full:       50%     - Circular elements
```

### Shadows (Elevation)
```
SM:     0 1px 3px rgba(0, 0, 0, 0.2)      - Resting elements
MD:     0 2px 8px rgba(0, 0, 0, 0.08)     - Cards, dropdowns
LG:     0 4px 16px rgba(0, 0, 0, 0.12)    - Modals, popovers
Hover:  0 4px 12px rgba(0, 78, 201, 0.3)  - Interaction state
Drag:   drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))  - Dragging
```

---

## Component Patterns

### Button States

#### Primary Button
```css
Default:
  background: #004EC9
  color: #FFFFFF
  transition: all 0.15s ease

Hover:
  background: #585DE4
  transform: translateY(-1px)
  box-shadow: 0 4px 12px rgba(0, 78, 201, 0.3)

Active:
  transform: translateY(0)

Disabled:
  opacity: 0.5
  cursor: not-allowed
  pointer-events: none
```

#### Secondary Button
```css
Default:
  background: #FFFFFF
  border: 1px solid #E5E7EB
  color: #585C68

Hover:
  border-color: #004EC9
  color: #004EC9
  background: #B1E1FF
```

### Interactive Elements

#### Standard Hover
```css
cursor: pointer
transition: all 0.15s ease
```

#### Focus (Accessibility)
```css
outline: 2px solid #004EC9
outline-offset: 2px
```

#### Draggable Elements
```css
Normal: cursor: grab
Dragging:
  cursor: grabbing
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))
  z-index: 100
```

### Cards
```css
background: #FFFFFF
border: 1px solid #E5E7EB
border-radius: 12px
padding: 12px
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
transition: all 0.15s ease

:hover
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12)
  transform: translateY(-2px)
```

### Inputs
```css
width: 100%
padding: 8px 12px
border: 1px solid #E5E7EB
border-radius: 8px
font-family: 'Poppins', sans-serif
font-size: 13px
color: #585C68
transition: all 0.15s ease

:hover
  border-color: #004EC9

:focus
  outline: none
  border-color: #004EC9
  box-shadow: 0 0 0 3px #B1E1FF

:disabled
  background: #FAFAFA
  cursor: not-allowed
  opacity: 0.6
```

---

## Transitions & Animations

### Durations
```
Fast:       0.15s   - Hover, click
Base:       0.2s    - Fade, state changes
Slow:       0.25s   - Complex transitions
Slower:     0.3s    - Smooth animations
```

### Timing Functions
```
Standard:   ease
Ease Out:   ease-out    - Quick entry
Ease In:    ease-in     - Quick exit
```

### Common Transitions
```css
/* Hover states */
transition: all 0.15s ease;

/* Opacity/Visibility */
transition: opacity 0.2s ease;

/* Transform */
transition: transform 0.15s ease;

/* Multiple properties */
transition: opacity 0.2s ease, transform 0.2s ease;
```

---

## Component Development Standards

### File Structure
```
ComponentName/
├── ComponentName.tsx           # Main component
├── ComponentName.module.css    # Scoped styles (CSS Modules)
└── index.ts                    # Barrel export
```

### TypeScript Pattern
```typescript
interface ComponentNameProps {
  /**
   * Variant visual del componente
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';

  /**
   * Si está deshabilitado
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback al hacer click
   */
  onClick?: () => void;
}

export function ComponentName({
  variant = 'primary',
  disabled = false,
  onClick,
}: ComponentNameProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
      onClick={onClick}
    >
      Content
    </button>
  );
}
```

### CSS Modules Naming (BEM-like)
```css
.componentName { }           /* Block */
.componentName__element { }  /* Element */
.componentName--modifier { } /* Modifier */

/* States */
.isActive { }
.isDisabled { }
.isHovered { }
```

---

## Accessibility Requirements

### Minimum Standards
- ✅ Color contrast ratios meet WCAG AA
- ✅ Focus states clearly visible
- ✅ Cursor pointer on all clickable elements
- ✅ ARIA attributes where appropriate
- ✅ Keyboard navigation support
- ✅ Minimum touch target size: 44x44px (mobile)

### ARIA Pattern
```tsx
<button
  aria-disabled={disabled}
  aria-pressed={isActive}
  aria-busy={loading}
  role="button"
>
  Content
</button>
```

---

## Features

### Smart Color Application
- Primary brand color (#004EC9) applied consistently
- Semantic colors for feedback (success, error, warning)
- Neutral grays for hierarchy and structure
- Functional colors for domain-specific elements

### Typography System
- Poppins for all UI text
- Consistent type scale (9px - 24px)
- Appropriate weights for emphasis
- Optimal line heights for readability

### Spacing Consistency
- 4px base unit system
- Predictable, scalable spacing
- Component-specific padding standards
- Harmonious visual rhythm

### Transition Standards
- Fast interactions (0.15s)
- Smooth state changes (0.2s)
- Complex animations (0.25s-0.3s)
- Consistent timing functions

### Component Reusability
- TypeScript interfaces for type safety
- CSS Modules for style encapsulation
- Composable, flexible patterns
- Clear prop documentation with JSDoc

---

## Technical Details

### CSS Variables (Recommended)
```css
:root {
  /* Primary Colors */
  --primary: #004EC9;
  --primary-purple: #585DE4;

  /* Secondary Colors */
  --secondary-red: #FB5F5F;
  --secondary-yellow: #F9C131;
  --secondary-brown: #9D5E5E;
  --secondary-green: #1D8474;
  --secondary-blue: #30AAF5;

  /* Secondary Light */
  --secondary-red-light: #FFD6D6;
  --secondary-yellow-light: #FFF4D8;
  --secondary-brown-light: #9C9292;
  --secondary-green-light: #9EC3B6;
  --secondary-blue-light: #B1E1FF;

  /* Neutral Colors */
  --neutral-black: #1F2236;
  --neutral-dark-gray: #585C68;
  --neutral-gray: #BDBEC2;
  --neutral-mid-gray: #E5E7EB;
  --neutral-light-gray: #F1F1F3;
  --neutral-ultra-light: #FAFAFA;
  --neutral-white: #FFFFFF;
  --neutral-card-dark: #32354F;

  /* Status Colors */
  --status-success: #409161;
  --status-success-bg: #E9FFEF;
  --status-warning: #F9C131;
  --status-warning-bg: #FFF2DD;
  --status-error: #FB5F5F;
  --status-error-bg: #FFD6D6;
  --status-info: #004EC9;
  --status-info-bg: #B1E1FF;
  --status-purple: #585DE4;
  --status-purple-bg: #E6EAFF;

  /* Spacing */
  --spacing-4: 10px;
  --spacing-5: 12px;
  --spacing-6: 16px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;

  /* Transitions */
  --transition-fast: 0.15s;
  --transition-base: 0.2s;
}
```

### CSS Modules Configuration
- Automatic in Vite/React projects
- Class names scoped to component
- Prevents global style collisions

### Import Pattern
```typescript
import styles from './Component.module.css';

<div className={styles.container}>
  <div className={`${styles.element} ${isActive && styles.active}`}>
    Content
  </div>
</div>
```

---

## Best Practices

### DO ✅
- Use design tokens (colors, spacing, etc.)
- Follow the 4px spacing system
- Apply proper transition durations
- Include hover/focus/active states
- Write accessible markup
- Document props with JSDoc
- Use CSS Modules for styles
- Test responsive behavior

### DON'T ❌
- Use hardcoded color values
- Use inline styles (except dynamic values)
- Use !important in CSS
- Create overly complex components
- Skip accessibility considerations
- Use magic numbers without variables
- Mix global and scoped styles
- Ignore hover/focus states

---

## Version History

**v01** - Initial release (2026-01-28)
- Comprehensive color palette
- Typography system
- Spacing standards
- Component patterns
- Accessibility guidelines
- Development standards

---

## Related Resources

- **DESIGN_GUIDELINES.md** - Extended documentation with examples
- **DESIGN_SYSTEM_README.md** - Quick start guide
- **ExampleComponent/** - Reference implementation
- **Component Showcase** - Live examples at `/design-system-showcase`

---

## License

Part of Crabi Design System
Internal use only - Proprietary

---

**Maintained by**: Crabi Development Team
**Last Updated**: 2026-01-28
**Skill Version**: 01
