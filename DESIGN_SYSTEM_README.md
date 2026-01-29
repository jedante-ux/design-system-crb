# Sistema de Diseño Crabi

Bienvenido al sistema de diseño de Crabi. Este documento te guiará en el uso de las guidelines y la creación de nuevos componentes.

## 📖 Documentación

- **[DESIGN_GUIDELINES.md](./DESIGN_GUIDELINES.md)** - Guía completa de diseño con todos los estándares, colores, tipografía, espaciado, y patrones

## 🚀 Inicio Rápido

### 1. Crear un Nuevo Componente

```bash
# Estructura recomendada
src/components/
├── NuevoComponente/
│   ├── NuevoComponente.tsx
│   ├── NuevoComponente.module.css
│   └── index.ts
```

### 2. Plantilla de Componente

**NuevoComponente.tsx**
```typescript
import { useState } from 'react';
import styles from './NuevoComponente.module.css';

interface NuevoComponenteProps {
  /**
   * Variante visual del componente
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';

  /**
   * Tamaño del componente
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Si está deshabilitado
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback cuando se hace click
   */
  onClick?: () => void;

  /**
   * Contenido del componente
   */
  children?: React.ReactNode;
}

/**
 * NuevoComponente - Descripción breve del componente
 *
 * @example
 * ```tsx
 * <NuevoComponente variant="primary" size="medium">
 *   Contenido
 * </NuevoComponente>
 * ```
 */
export function NuevoComponente({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children
}: NuevoComponenteProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setIsActive(!isActive);
    onClick?.();
  };

  return (
    <div
      className={`
        ${styles.container}
        ${styles[variant]}
        ${styles[size]}
        ${isActive ? styles.active : ''}
        ${disabled ? styles.disabled : ''}
      `.trim()}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
```

**NuevoComponente.module.css**
```css
/* Container Base */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

/* Variantes */
.primary {
  background-color: #004EC9;
  color: #FFFFFF;
  border: none;
}

.secondary {
  background-color: #FFFFFF;
  color: #525252;
  border: 1px solid #E6E8EC;
}

/* Tamaños */
.small {
  padding: 6px 10px;
  font-size: 10px;
}

.medium {
  padding: 10px 16px;
  font-size: 13px;
}

.large {
  padding: 12px 24px;
  font-size: 14px;
}

/* Estados */
.container:hover:not(.disabled) {
  transform: translateY(-1px);
}

.primary:hover:not(.disabled) {
  background-color: #003A96;
  box-shadow: 0 4px 12px rgba(0, 78, 201, 0.3);
}

.secondary:hover:not(.disabled) {
  border-color: #004EC9;
  color: #004EC9;
  background-color: #F0F7FF;
}

.active {
  transform: scale(0.98);
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

**index.ts**
```typescript
export { NuevoComponente } from './NuevoComponente';
export type { NuevoComponenteProps } from './NuevoComponente';
```

### 3. Exportar el Componente

En `src/components/index.ts`:
```typescript
export * from './NuevoComponente';
```

### 4. Usar el Componente

```typescript
import { NuevoComponente } from '@/components';

function App() {
  return (
    <NuevoComponente
      variant="primary"
      size="medium"
      onClick={() => console.log('clicked')}
    >
      Click me
    </NuevoComponente>
  );
}
```

## 🎨 Variables CSS Globales

Crea un archivo `src/styles/variables.css`:

```css
:root {
  /* Colores */
  --primary: #004EC9;
  --primary-dark: #003A96;
  --primary-light: #E8F1FC;
  --primary-lighter: #F0F7FF;

  --gray-50: #FAFAFA;
  --gray-200: #E6E8EC;
  --gray-400: #A3A3A3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-800: #262626;

  --error: #DC2626;
  --error-light: #FEE2E2;
  --success: #27AE60;
  --warning: #E67E22;

  /* Espaciado */
  --spacing-1: 4px;
  --spacing-2: 6px;
  --spacing-3: 8px;
  --spacing-4: 10px;
  --spacing-5: 12px;
  --spacing-6: 16px;
  --spacing-7: 20px;
  --spacing-8: 24px;

  /* Border Radius */
  --radius-sm: 3px;
  --radius-base: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 50%;

  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-hover: 0 4px 12px rgba(0, 78, 201, 0.3);

  /* Transiciones */
  --transition-fast: 0.15s;
  --transition-base: 0.2s;
  --transition-slow: 0.25s;

  /* Tipografía */
  --font-family: 'Poppins', sans-serif;
  --text-xs: 9px;
  --text-sm: 10px;
  --text-base: 13px;
  --text-md: 14px;
  --text-lg: 16px;
}
```

Importar en `src/main.tsx`:
```typescript
import './styles/variables.css';
```

## ✅ Checklist Pre-Commit

Antes de hacer commit de un nuevo componente, verifica:

- [ ] Sigue la estructura de carpetas estándar
- [ ] Usa TypeScript con tipos explícitos
- [ ] Props documentadas con JSDoc
- [ ] CSS Modules (no inline styles)
- [ ] Colores del sistema de diseño
- [ ] Espaciado múltiplo de 4px
- [ ] Border radius apropiado
- [ ] Font family Poppins
- [ ] Estados hover/active/disabled
- [ ] Transiciones suaves (0.15s-0.25s)
- [ ] Cursor pointer en clickeables
- [ ] Componente exportado en index
- [ ] README actualizado si es necesario

## 📊 Componentes Existentes

### Componentes UI Base
- **Button** - Botón con variantes y tamaños
- **Accordion** - Acordeón expandible
- **AlertMessage** - Mensajes de alerta
- **FilterButton** - Botón de filtro
- **MenuItem** - Item de menú
- **SideMenu** - Menú lateral
- **Header** - Encabezado
- **Stepper** - Indicador de pasos
- **BranchInfo** - Información de sucursal

### Componentes Especializados
- **CroquisBuilder** - Constructor de croquis de siniestros

## 🎯 Patrones Comunes

### Estado de Carga (Loading)

```typescript
const [isLoading, setIsLoading] = useState(false);

{isLoading && (
  <div className={styles.loader}>
    <div className={styles.spinner} />
  </div>
)}
```

```css
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #E6E8EC;
  border-top-color: #004EC9;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Modal/Dialog

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
```

```css
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

.modal {
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  animation: slideUp 0.25s ease;
}

.closeBtn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #737373;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Dropdown

```typescript
const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

return (
  <div ref={dropdownRef} className={styles.dropdownContainer}>
    <button onClick={() => setIsOpen(!isOpen)}>
      Toggle Dropdown
    </button>
    {isOpen && (
      <div className={styles.dropdown}>
        {/* Contenido */}
      </div>
    )}
  </div>
);
```

## 🐛 Debugging de Estilos

### Herramientas
1. **React DevTools** - Inspeccionar componentes y props
2. **CSS Modules Class Names** - Verificar que las clases se apliquen
3. **Console warnings** - TypeScript te alertará de errores

### Problemas Comunes

**Estilos no se aplican:**
```typescript
// ❌ Incorrecto
<div className="container">

// ✅ Correcto
<div className={styles.container}>
```

**Clases condicionales:**
```typescript
// ❌ Incorrecto
<div className={isActive && styles.active}>

// ✅ Correcto
<div className={isActive ? styles.active : ''}>

// ✅ Mejor con múltiples clases
<div className={`${styles.base} ${isActive ? styles.active : ''}`}>
```

## 🔗 Enlaces Útiles

- [Documentación Design Guidelines](./DESIGN_GUIDELINES.md)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)

## 💬 Soporte

Para preguntas o sugerencias sobre el sistema de diseño, contacta al equipo de desarrollo.

---

**Última actualización:** 2026-01-28
