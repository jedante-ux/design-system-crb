# ExampleComponent

Componente de ejemplo que demuestra todas las mejores prácticas del sistema de diseño Crabi.

## 📖 Propósito

Este componente sirve como **referencia** para crear nuevos componentes. Implementa:

- ✅ TypeScript con tipos explícitos
- ✅ Props documentadas con JSDoc
- ✅ CSS Modules para encapsulación
- ✅ Estados de interacción completos
- ✅ Transiciones suaves
- ✅ Accesibilidad (ARIA, keyboard)
- ✅ Colores y espaciado del sistema
- ✅ Composición flexible
- ✅ Loading states
- ✅ Efectos visuales (ripple)

## 🎨 Uso Básico

```tsx
import { ExampleComponent } from '@/components';

function App() {
  return (
    <ExampleComponent
      variant="primary"
      size="medium"
      onClick={() => console.log('clicked')}
    >
      Click me
    </ExampleComponent>
  );
}
```

## 📚 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'error'` | `'primary'` | Variante visual |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del componente |
| `disabled` | `boolean` | `false` | Si está deshabilitado |
| `loading` | `boolean` | `false` | Muestra indicador de carga |
| `icon` | `ReactNode` | - | Ícono a mostrar |
| `children` | `ReactNode` | - | Contenido del componente |
| `onClick` | `() => void` | - | Callback al hacer click |
| `onToggle` | `(isActive: boolean) => void` | - | Callback cuando cambia estado activo |
| `className` | `string` | `''` | Clase CSS adicional |

## 🎯 Ejemplos

### Con todas las variantes

```tsx
<ExampleComponent variant="primary">Primary</ExampleComponent>
<ExampleComponent variant="secondary">Secondary</ExampleComponent>
<ExampleComponent variant="success">Success</ExampleComponent>
<ExampleComponent variant="error">Error</ExampleComponent>
```

### Con íconos

```tsx
import { ExampleComponent, CheckIcon, PlusIcon } from '@/components';

<ExampleComponent icon={<CheckIcon />}>
  Save
</ExampleComponent>

<ExampleComponent icon={<PlusIcon />} variant="success">
  Add New
</ExampleComponent>
```

### Diferentes tamaños

```tsx
<ExampleComponent size="small">Small</ExampleComponent>
<ExampleComponent size="medium">Medium</ExampleComponent>
<ExampleComponent size="large">Large</ExampleComponent>
```

### Con loading state

```tsx
const [isLoading, setIsLoading] = useState(false);

const handleSave = async () => {
  setIsLoading(true);
  await saveData();
  setIsLoading(false);
};

<ExampleComponent
  loading={isLoading}
  onClick={handleSave}
>
  Save
</ExampleComponent>
```

### Disabled

```tsx
<ExampleComponent disabled>
  Disabled Button
</ExampleComponent>
```

### Con toggle callback

```tsx
<ExampleComponent
  onToggle={(isActive) => {
    console.log('Active state:', isActive);
  }}
>
  Toggle Me
</ExampleComponent>
```

### Grupo de botones

```tsx
<div style={{ display: 'flex', gap: '12px' }}>
  <ExampleComponent variant="secondary">Cancel</ExampleComponent>
  <ExampleComponent variant="primary">Confirm</ExampleComponent>
</div>
```

## 🎨 Personalización

### Clase CSS adicional

```tsx
<ExampleComponent className="customClass">
  Custom Styled
</ExampleComponent>
```

```css
.customClass {
  min-width: 200px;
  /* Otros estilos personalizados */
}
```

### Ícono personalizado

```tsx
function CustomIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="..." stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

<ExampleComponent icon={<CustomIcon />}>
  Custom Icon
</ExampleComponent>
```

## ♿ Accesibilidad

El componente incluye:

- **Keyboard navigation**: Enter y Espacio para activar
- **ARIA attributes**:
  - `aria-disabled` cuando está deshabilitado o cargando
  - `aria-busy` durante carga
  - `aria-pressed` para estado activo/toggle
- **Focus visible**: Outline azul cuando tiene focus con teclado
- **Tamaño mínimo touch**: 44x44px en móvil

## 🎯 Estados

El componente maneja automáticamente:

- **Hover**: Elevación y cambio de color
- **Active**: Scale down al hacer click
- **Disabled**: Opacidad reducida, cursor not-allowed
- **Loading**: Spinner, cursor wait
- **Focus**: Outline visible para keyboard navigation

## 📐 Estructura CSS

```
ExampleComponent.module.css
├── Base component
├── Variantes (primary, secondary, success, error)
├── Tamaños (small, medium, large)
├── Estados (active, hovered, disabled, loading)
├── Elementos internos (icon, content, loader, spinner, ripple)
├── Focus (accesibilidad)
├── Responsive
└── Utilidades
```

## 🔍 Mejores Prácticas Demostradas

### 1. TypeScript

```typescript
// Tipos explícitos
type Variant = 'primary' | 'secondary' | 'success' | 'error';

// Interface para props con JSDoc
export interface ExampleComponentProps {
  /**
   * Variante visual del componente
   * @default 'primary'
   */
  variant?: Variant;
  // ...
}
```

### 2. CSS siguiendo Guidelines

```css
/* Colores del sistema */
background-color: #004EC9;

/* Espaciado múltiplo de 4px */
padding: 10px 16px;
gap: 8px;

/* Transiciones estándar */
transition: all 0.15s ease;

/* Border radius apropiado */
border-radius: 8px;
```

### 3. Estados de Interacción

```css
/* Hover con elevación */
.component:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 78, 201, 0.3);
}

/* Active con scale */
.active {
  transform: scale(0.98);
}
```

### 4. Composición Flexible

```tsx
// Acepta children
{children && <span className={styles.content}>{children}</span>}

// Acepta íconos
{icon && <div className={styles.icon}>{icon}</div>}
```

### 5. Manejo de Estados

```typescript
const [isActive, setIsActive] = useState(false);
const [isHovered, setIsHovered] = useState(false);

// Limpiar al desmontar
useEffect(() => {
  return () => setIsActive(false);
}, []);
```

## 🚀 Cómo Usar como Plantilla

1. **Copiar la estructura**:
   ```bash
   cp -r src/components/ExampleComponent src/components/TuNuevoComponente
   ```

2. **Renombrar archivos y clases**:
   - `ExampleComponent.tsx` → `TuNuevoComponente.tsx`
   - `ExampleComponent.module.css` → `TuNuevoComponente.module.css`
   - Buscar y reemplazar `ExampleComponent` con `TuNuevoComponente`

3. **Adaptar funcionalidad**:
   - Modificar props según necesidades
   - Ajustar variantes y tamaños
   - Personalizar estados

4. **Mantener estándares**:
   - Colores del sistema
   - Espaciado múltiplo de 4px
   - Transiciones 0.15s-0.25s
   - Cursor pointer en clickeables
   - Estados hover/active/disabled

## 📝 Notas

- Este componente es **solo de ejemplo** y referencia
- No está pensado para uso en producción sin adaptación
- Demuestra patrones, no funcionalidad específica
- Sigue 100% las [Design Guidelines](../../../DESIGN_GUIDELINES.md)

## 🔗 Referencias

- [Design Guidelines](../../../DESIGN_GUIDELINES.md)
- [Design System README](../../../DESIGN_SYSTEM_README.md)
- [Componentes Existentes](../../)

---

**Creado como referencia del sistema de diseño Crabi**
