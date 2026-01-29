# Design Guidelines - Sistema de Diseño Crabi

Documento completo de directrices de diseño para el desarrollo de componentes del sistema Crabi.

---

## 📐 Principios de Diseño

### Consistencia
- Mantener patrones visuales y de interacción coherentes en todos los componentes
- Usar la misma paleta de colores, tipografía y espaciado
- Aplicar estados de interacción uniformes

### Simplicidad
- Evitar sobre-ingeniería
- Componentes limpios y enfocados
- Jerarquía visual clara

### Accesibilidad
- Contraste de colores accesible
- Estados de hover y focus claramente visibles
- Cursor pointer en elementos clickeables

---

## 🎨 Sistema de Colores

### Colores Principales

#### Azul Primario (Brand)
```css
--primary: #004EC9;           /* Color principal de marca */
--primary-dark: #003A96;      /* Hover/Active states */
--primary-light: #E8F1FC;     /* Backgrounds ligeros */
--primary-lighter: #F0F7FF;   /* Backgrounds muy ligeros */
```

#### Grises Neutrales
```css
--gray-50: #FAFAFA;           /* Backgrounds secundarios */
--gray-100: #F5F5F5;          /* Backgrounds hover */
--gray-200: #E6E8EC;          /* Borders, dividers */
--gray-400: #A3A3A3;          /* Text secundario */
--gray-500: #737373;          /* Text terciario */
--gray-600: #525252;          /* Text principal */
--gray-700: #404040;          /* Text emphasis */
--gray-800: #262626;          /* Backgrounds dark */
--gray-900: #171717;          /* Text máximo contraste */
```

#### Colores Semánticos

**Success / Confirmación**
```css
--success: #27AE60;           /* Verde - estados positivos */
--success-light: #D4F4DD;     /* Background success */
```

**Error / Alerta**
```css
--error: #DC2626;             /* Rojo - errores, eliminar */
--error-light: #FEE2E2;       /* Background error */
--error-lighter: #FEF2F2;     /* Background hover error */
```

**Warning**
```css
--warning: #E67E22;           /* Naranja - advertencias */
--warning-light: #FEF3C7;     /* Background warning */
```

**Info**
```css
--info: #004EC9;              /* Azul - información */
--info-light: #E8F1FC;        /* Background info */
```

#### Colores Funcionales (Croquis Builder)
```css
--vehicle-na: #004EC9;        /* Vehículos NA - azul */
--vehicle-tercero: #9CA3AF;   /* Vehículos 3ero - gris claro */
--pedestrian: #27AE60;        /* Peatones - verde */
--motorcycle: #9B59B6;        /* Motos - morado */
--truck: #E67E22;             /* Camiones - naranja */
```

### Fondos y Superficies
```css
--bg-primary: #FFFFFF;        /* Fondo principal */
--bg-secondary: #FAFAFA;      /* Fondo secundario */
--bg-tertiary: #F0F7FF;       /* Fondo celeste claro */
--surface: #FFFFFF;           /* Superficies elevadas (cards) */
```

---

## 📝 Tipografía

### Familia de Fuentes
```css
font-family: 'Poppins', sans-serif;
```

### Escalas de Tamaño
```css
--text-xs: 9px;      /* Labels muy pequeños, badges */
--text-sm: 10px;     /* Labels, botones pequeños */
--text-base: 13px;   /* Texto base, botones */
--text-md: 14px;     /* Texto principal */
--text-lg: 16px;     /* Headings pequeños */
--text-xl: 18px;     /* Headings medianos */
--text-2xl: 24px;    /* Headings grandes */
```

### Pesos de Fuente
```css
--font-normal: 400;   /* Texto regular */
--font-medium: 500;   /* Texto con énfasis medio */
--font-semibold: 600; /* Botones, headings */
--font-bold: 700;     /* Énfasis máximo, badges */
```

### Altura de Línea
```css
--leading-tight: 1;      /* Iconos, badges */
--leading-normal: 1.5;   /* Texto general */
--leading-relaxed: 1.75; /* Texto largo, párrafos */
```

---

## 📏 Espaciado y Layout

### Sistema de Espaciado (Base 4px)
```css
--spacing-1: 4px;     /* Espacios mínimos */
--spacing-2: 6px;     /* Gaps pequeños */
--spacing-3: 8px;     /* Gaps medianos */
--spacing-4: 10px;    /* Padding pequeño */
--spacing-5: 12px;    /* Padding estándar */
--spacing-6: 16px;    /* Padding medio */
--spacing-7: 20px;    /* Padding grande */
--spacing-8: 24px;    /* Padding extra grande */
--spacing-10: 28px;   /* Padding muy grande */
```

### Padding de Componentes
```css
/* Botones */
--btn-padding-sm: 6px 10px;      /* Botones pequeños */
--btn-padding-base: 10px 16px;   /* Botones estándar */
--btn-padding-lg: 12px 24px;     /* Botones grandes */

/* Cards / Containers */
--card-padding: 12px;            /* Padding estándar */
--card-padding-lg: 16px 24px;    /* Padding amplio */

/* Inputs */
--input-padding: 8px 12px;       /* Padding inputs */
```

### Gaps
```css
--gap-xs: 4px;    /* Gap mínimo */
--gap-sm: 6px;    /* Gap pequeño (elementos relacionados) */
--gap-md: 8px;    /* Gap medio */
--gap-lg: 12px;   /* Gap grande */
--gap-xl: 16px;   /* Gap extra grande */
```

---

## 🔲 Border Radius

### Radios de Borde
```css
--radius-sm: 3px;     /* Badges, tags pequeños */
--radius-base: 4px;   /* Elementos pequeños */
--radius-md: 6px;     /* Botones pequeños, options */
--radius-lg: 8px;     /* Botones, inputs, cards */
--radius-xl: 12px;    /* Containers, modals */
--radius-full: 50%;   /* Elementos circulares */
```

---

## 🎭 Sombras

### Elevación
```css
/* Sombra suave - elementos en reposo */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.2);

/* Sombra media - cards, dropdowns */
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Sombra grande - modals, popovers */
--shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.12);

/* Sombra hover - interacción */
--shadow-hover: 0 4px 12px rgba(0, 78, 201, 0.3);

/* Drop shadow - elementos arrastrados */
--shadow-drag: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
```

---

## ⚡ Transiciones y Animaciones

### Duraciones
```css
--transition-fast: 0.15s;    /* Hover, click */
--transition-base: 0.2s;     /* Fade, cambios de estado */
--transition-slow: 0.25s;    /* Transiciones complejas */
--transition-slower: 0.3s;   /* Animaciones suaves */
```

### Timing Functions
```css
--ease-in-out: ease;         /* Estándar */
--ease-out: ease-out;        /* Entrada rápida */
--ease-in: ease-in;          /* Salida rápida */
```

### Transiciones Estándar
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

## 🎯 Estados de Componentes

### Botones

#### Estado Normal
```css
background-color: var(--primary);
color: #FFFFFF;
border: none;
cursor: pointer;
transition: all 0.15s ease;
```

#### Estado Hover
```css
background-color: var(--primary-dark);
transform: translateY(-1px);
box-shadow: var(--shadow-hover);
```

#### Estado Active/Click
```css
transform: translateY(0);
```

#### Estado Disabled
```css
opacity: 0.5;
cursor: not-allowed;
pointer-events: none;
```

### Botones Secundarios

#### Normal
```css
background-color: #FFFFFF;
border: 1px solid var(--gray-200);
color: var(--gray-600);
```

#### Hover
```css
border-color: var(--primary);
color: var(--primary);
background-color: var(--primary-lighter);
```

### Elementos Interactivos

#### Normal
```css
cursor: pointer;
transition: all 0.15s ease;
```

#### Hover
```css
filter: brightness(0.95);
/* o específico según el componente */
```

#### Focus (Accessibility)
```css
outline: 2px solid var(--primary);
outline-offset: 2px;
```

### Elementos Arrastrados (Draggable)

#### Normal
```css
cursor: grab;
```

#### Arrastrando
```css
cursor: grabbing;
filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
z-index: 100;
```

---

## 📦 Estructura de Componentes

### Nomenclatura de Clases (CSS Modules)

#### Patrón BEM Simplificado
```css
.componentName { }           /* Bloque principal */
.componentName__element { }  /* Elemento hijo */
.componentName--modifier { } /* Variante/modificador */
```

#### Ejemplos
```css
/* Container */
.container { }

/* Elementos */
.header { }
.body { }
.footer { }

/* Estados */
.isActive { }
.isDisabled { }
.isHovered { }

/* Variantes */
.sizeLarge { }
.variantPrimary { }
.typeButton { }
```

### Estructura de Archivo de Componente

```
ComponentName/
├── ComponentName.tsx         # Componente principal
├── ComponentName.module.css  # Estilos CSS Modules
├── index.ts                  # Export barrel
└── types.ts                  # Tipos TypeScript (opcional)
```

### Patrón de Componente TypeScript

```typescript
import { useState } from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function ComponentName({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children
}: ComponentNameProps) {
  return (
    <button
      className={`
        ${styles.button}
        ${styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`]}
        ${styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}
        ${disabled ? styles.disabled : ''}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

---

## 🧩 Patrones de Diseño Comunes

### Cards

```css
.card {
  background-color: var(--surface);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-xl);
  padding: var(--card-padding);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast) ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  width: 100%;
  padding: var(--input-padding);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-family: 'Poppins', sans-serif;
  font-size: var(--text-base);
  color: var(--gray-600);
  transition: all var(--transition-fast) ease;
}

.input:hover {
  border-color: var(--primary);
}

.input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-light);
}

.input:disabled {
  background-color: var(--gray-50);
  cursor: not-allowed;
  opacity: 0.6;
}
```

### Dropdowns / Popovers

```css
.dropdown {
  position: absolute;
  background-color: var(--surface);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: 4px;
  z-index: 100;
}

/* Flecha del dropdown */
.dropdown::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--surface);
}

.dropdown::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: var(--gray-200);
}
```

### Tags / Badges

```css
.tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 5px;
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.tagPrimary {
  background-color: var(--primary);
  color: #FFFFFF;
}

.tagSecondary {
  background-color: var(--gray-200);
  color: var(--gray-700);
}
```

### Loaders / Spinners

```css
.loader {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--gray-200);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

---

## 🎬 Transiciones entre Vistas

### Fade In / Out

```css
.fadeIn {
  opacity: 0;
  transform: scale(1.02);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.visible {
  opacity: 1;
  transform: scale(1);
}

.fadeOut {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
```

### Slide In / Out

```css
.slideIn {
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.slideInActive {
  transform: translateX(0);
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

### Media Queries
```css
/* Tablet and up */
@media (min-width: 768px) {
  /* Estilos tablet */
}

/* Desktop and up */
@media (min-width: 1024px) {
  /* Estilos desktop */
}
```

---

## ⚠️ Elementos de Retroalimentación

### Hints / Tooltips

```css
.hint {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: var(--surface);
  padding: 20px 28px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-md);
  opacity: 0;
  transition: opacity var(--transition-base) ease;
  pointer-events: none;
}

.container:hover .hint {
  opacity: 1;
}
```

### Mensajes de Alerta

```css
.alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  border: 1px solid;
}

.alertSuccess {
  background-color: var(--success-light);
  border-color: var(--success);
  color: var(--success);
}

.alertError {
  background-color: var(--error-light);
  border-color: var(--error);
  color: var(--error);
}

.alertWarning {
  background-color: var(--warning-light);
  border-color: var(--warning);
  color: var(--warning);
}

.alertInfo {
  background-color: var(--info-light);
  border-color: var(--info);
  color: var(--info);
}
```

---

## 🎨 Iconografía

### Tamaños de Iconos
```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-base: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
--icon-2xl: 64px;
```

### Estilo de Iconos
- Preferir SVG inline para máxima flexibilidad
- Stroke width: 2px (estándar)
- Stroke linecap: round
- Stroke linejoin: round
- Color heredable del padre con `currentColor`

```tsx
// Ejemplo de icono
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path
    d="M..."
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
```

---

## 🧪 Testing y Validación

### Checklist de Componente Nuevo

- [ ] Tipografía usando Poppins
- [ ] Colores del sistema de diseño
- [ ] Espaciado consistente (múltiplos de 4px)
- [ ] Border radius apropiado
- [ ] Estados hover/active/disabled
- [ ] Transiciones suaves (0.15s - 0.25s)
- [ ] Cursor pointer en elementos clickeables
- [ ] Sombras cuando sea necesario
- [ ] Responsive design considerado
- [ ] Accesibilidad (contraste, focus states)
- [ ] CSS Modules para encapsulación
- [ ] Props TypeScript tipadas
- [ ] Documentación JSDoc

---

## 📚 Recursos y Referencias

### Paleta de Colores Completa
Ver sección "Sistema de Colores" para valores exactos.

### Fuente
- **Google Fonts:** [Poppins](https://fonts.google.com/specimen/Poppins)
- **Weights usados:** 400, 500, 600, 700

### Herramientas Recomendadas
- **Contrast Checker:** [WebAIM](https://webaim.org/resources/contrastchecker/)
- **CSS Modules:** Automático en Vite/React
- **TypeScript:** Tipos estrictos en componentes

---

## 🔄 Versionado

**Versión:** 1.0.0
**Última actualización:** 2026-01-28
**Mantenedor:** Equipo Crabi

---

## 📝 Notas Adicionales

### Buenas Prácticas

1. **No usar valores hardcoded:** Usar siempre variables CSS o valores del sistema
2. **Mobile First:** Diseñar primero para móvil, luego expandir
3. **Accesibilidad primero:** Considerar desde el inicio
4. **Componentes pequeños:** Mejor múltiples componentes pequeños que uno grande
5. **Reutilización:** Extraer patrones comunes en componentes compartidos
6. **Documentación:** JSDoc en funciones y props complejas

### Anti-Patrones a Evitar

❌ Inline styles (excepto dinámicos)
❌ !important en CSS
❌ Colores hardcoded
❌ Magic numbers (usar variables)
❌ Componentes monolíticos
❌ Estados globales innecesarios
❌ Transiciones muy lentas (>300ms)
❌ Animaciones excesivas

---

**Documento vivo:** Este guideline se actualiza conforme evoluciona el sistema de diseño.
