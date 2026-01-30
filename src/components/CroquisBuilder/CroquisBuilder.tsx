import { useState, useRef, useCallback } from 'react';
import styles from './CroquisBuilder.module.scss';

type StreetType = 'cruz' | 'recta' | 't-junction' | 'y-junction' | 'glorieta' | 'curva';
type ElementOwner = 'na' | 'tercero';

interface PlacedElement {
  id: string;
  type: 'car' | 'truck' | 'motorcycle' | 'pedestrian';
  owner?: ElementOwner; // Optional for pedestrians
  x: number;
  y: number;
  rotation: number;
}

const elementLabels = {
  car: 'Vehículo',
  truck: 'Camión',
  motorcycle: 'Moto',
  pedestrian: 'Peatón',
};

// Tipos de intersecciones según Manual de Calles SEDATU 2019
const streetTypeLabels: Record<StreetType, string> = {
  cruz: 'Cruz (+)',
  't-junction': 'T',
  'y-junction': 'Y',
  glorieta: 'Glorieta',
  recta: 'Recta',
  curva: 'Curva',
};

// Vista cenital (desde arriba) de los elementos - Detallados
function TopViewIcon({ type, size = 24, color = 'currentColor' }: { type: string; size?: number; color?: string }) {
  // Colores derivados para detalles
  const darkerColor = color === '#004EC9' ? '#003A96' :
                      color === '#E67E22' ? '#C56A1A' :
                      color === '#9B59B6' ? '#7D4892' : '#1E8449';

  switch (type) {
    case 'car':
      // Vista cenital de auto sedán - Frente arriba
      return (
        <svg width={size} height={size * 1.8} viewBox="0 0 40 72" fill="none">
          {/* Carrocería principal */}
          <rect x="4" y="10" width="32" height="52" rx="6" fill={color} />

          {/* Cofre/Capó (frente) */}
          <rect x="6" y="4" width="28" height="14" rx="4" fill={color} />
          <rect x="6" y="4" width="28" height="6" rx="3" fill={darkerColor} opacity="0.3" />

          {/* Faros delanteros */}
          <rect x="6" y="2" width="8" height="4" rx="1.5" fill="#FFEB3B" />
          <rect x="26" y="2" width="8" height="4" rx="1.5" fill="#FFEB3B" />

          {/* Parabrisas */}
          <rect x="8" y="18" width="24" height="14" rx="2" fill="#87CEEB" opacity="0.7" />
          <line x1="20" y1="18" x2="20" y2="32" stroke="#FFF" strokeWidth="0.5" opacity="0.5" />

          {/* Techo */}
          <rect x="10" y="32" width="20" height="12" rx="1" fill={darkerColor} opacity="0.2" />

          {/* Ventana trasera */}
          <rect x="8" y="44" width="24" height="10" rx="2" fill="#87CEEB" opacity="0.6" />

          {/* Maletero (trasera) */}
          <rect x="6" y="54" width="28" height="12" rx="4" fill={color} />

          {/* Luces traseras */}
          <rect x="6" y="64" width="6" height="3" rx="1" fill="#EF4444" />
          <rect x="28" y="64" width="6" height="3" rx="1" fill="#EF4444" />

          {/* Espejos retrovisores */}
          <rect x="0" y="22" width="4" height="6" rx="1" fill={color} />
          <rect x="36" y="22" width="4" height="6" rx="1" fill={color} />
        </svg>
      );
    case 'truck':
      // Vista cenital de camión - Frente arriba
      return (
        <svg width={size} height={size * 2.2} viewBox="0 0 44 88" fill="none">
          {/* Cabina */}
          <rect x="6" y="4" width="32" height="26" rx="4" fill={color} />

          {/* Faros delanteros */}
          <rect x="6" y="2" width="8" height="4" rx="1.5" fill="#FFEB3B" />
          <rect x="30" y="2" width="8" height="4" rx="1.5" fill="#FFEB3B" />

          {/* Parabrisas cabina */}
          <rect x="10" y="8" width="24" height="12" rx="2" fill="#87CEEB" opacity="0.7" />

          {/* Espejos */}
          <rect x="0" y="12" width="6" height="8" rx="1" fill={color} />
          <rect x="38" y="12" width="6" height="8" rx="1" fill={color} />

          {/* Separación cabina-carga */}
          <rect x="4" y="30" width="36" height="4" fill={darkerColor} opacity="0.4" />

          {/* Área de carga */}
          <rect x="2" y="34" width="40" height="50" rx="2" fill={color} opacity="0.9" />
          <rect x="4" y="36" width="36" height="46" rx="1" fill={darkerColor} opacity="0.15" />

          {/* Líneas de carga */}
          <line x1="4" y1="52" x2="40" y2="52" stroke="#FFF" strokeWidth="1" opacity="0.3" />
          <line x1="4" y1="68" x2="40" y2="68" stroke="#FFF" strokeWidth="1" opacity="0.3" />

          {/* Luces traseras */}
          <rect x="4" y="82" width="8" height="4" rx="1" fill="#EF4444" />
          <rect x="32" y="82" width="8" height="4" rx="1" fill="#EF4444" />
        </svg>
      );
    case 'motorcycle':
      // Vista cenital de moto - Frente arriba
      return (
        <svg width={size * 0.6} height={size * 1.5} viewBox="0 0 24 60" fill="none">
          {/* Rueda delantera */}
          <ellipse cx="12" cy="6" rx="5" ry="6" fill="#333" />
          <ellipse cx="12" cy="6" rx="3" ry="4" fill="#555" />

          {/* Luz delantera */}
          <circle cx="12" cy="2" r="2" fill="#FFEB3B" />

          {/* Horquilla delantera */}
          <rect x="10" y="10" width="4" height="8" fill={color} />

          {/* Manubrio */}
          <rect x="2" y="12" width="20" height="3" rx="1.5" fill={darkerColor} />
          <circle cx="3" cy="13.5" r="2" fill="#333" />
          <circle cx="21" cy="13.5" r="2" fill="#333" />

          {/* Tanque */}
          <ellipse cx="12" cy="22" rx="6" ry="5" fill={color} />
          <ellipse cx="12" cy="21" rx="4" ry="3" fill={darkerColor} opacity="0.3" />

          {/* Asiento */}
          <ellipse cx="12" cy="34" rx="5" ry="8" fill="#333" />
          <ellipse cx="12" cy="33" rx="3" ry="5" fill="#444" />

          {/* Rueda trasera */}
          <ellipse cx="12" cy="52" rx="5" ry="6" fill="#333" />
          <ellipse cx="12" cy="52" rx="3" ry="4" fill="#555" />

          {/* Luz trasera */}
          <rect x="9" y="56" width="6" height="2" rx="1" fill="#EF4444" />
        </svg>
      );
    case 'pedestrian':
      // Vista cenital de peatón - Frente arriba (dirección de caminar)
      return (
        <svg width={size} height={size * 1.2} viewBox="0 0 32 40" fill="none">
          {/* Sombra del cuerpo */}
          <ellipse cx="16" cy="26" rx="8" ry="10" fill={color} opacity="0.3" />

          {/* Cuerpo/Torso */}
          <ellipse cx="16" cy="24" rx="7" ry="9" fill={color} />

          {/* Hombros */}
          <ellipse cx="16" cy="18" rx="9" ry="4" fill={color} />

          {/* Cabeza */}
          <circle cx="16" cy="10" r="7" fill={color} />
          <circle cx="16" cy="9" r="5" fill={darkerColor} opacity="0.2" />

          {/* Indicador de dirección (flecha apuntando al frente) */}
          <path d="M16 0 L12 5 L14.5 5 L14.5 8 L17.5 8 L17.5 5 L20 5 Z" fill="#FFF" opacity="0.8" />

          {/* Pies (indicando movimiento) */}
          <ellipse cx="12" cy="34" rx="3" ry="4" fill={darkerColor} />
          <ellipse cx="20" cy="36" rx="3" ry="4" fill={darkerColor} />
        </svg>
      );
    default:
      return null;
  }
}

// Colores para los botones de selección
const elementColors = {
  car: '#004EC9',
  truck: '#E67E22',
  motorcycle: '#9B59B6',
  pedestrian: '#27AE60',
};

// Colores según propietario (para vehículos en el canvas)
const ownerColors = {
  na: '#004EC9',      // Azul para NA
  tercero: '#9CA3AF', // Gris claro para 3ero
};

function ElementButton({
  type,
  isActive,
  onSelect,
  onOwnerSelect,
  showOwnerDropdown = true
}: {
  type: 'car' | 'truck' | 'motorcycle' | 'pedestrian';
  isActive: boolean;
  onSelect: () => void;
  onOwnerSelect: (owner: ElementOwner) => void;
  showOwnerDropdown?: boolean;
}) {
  return (
    <div className={styles.elementButtonWrapper}>
      <button
        className={`${styles.elementButton} ${isActive ? styles.elementButtonActive : ''}`}
        onClick={onSelect}
      >
        <div className={styles.elementButtonIcon}>
          <TopViewIcon type={type} size={20} color={elementColors[type]} />
        </div>
        <span className={styles.elementButtonLabel}>{elementLabels[type]}</span>
      </button>
      {isActive && showOwnerDropdown && (
        <div className={styles.ownerDropdown}>
          <button
            className={`${styles.ownerOption} ${styles.ownerOptionNA}`}
            onClick={() => onOwnerSelect('na')}
          >
            NA
          </button>
          <button
            className={`${styles.ownerOption} ${styles.ownerOptionTercero}`}
            onClick={() => onOwnerSelect('tercero')}
          >
            3ero
          </button>
        </div>
      )}
    </div>
  );
}

function OwnerTag({ owner }: { owner?: ElementOwner }) {
  if (!owner) return null;
  return (
    <span className={`${styles.ownerTag} ${owner === 'na' ? styles.ownerTagNA : styles.ownerTagTercero}`}>
      {owner === 'na' ? 'NA' : '3ero'}
    </span>
  );
}

function StreetCanvas({ streetType, elements, onElementMove, onElementRotate, onElementDelete }: {
  streetType: StreetType;
  elements: PlacedElement[];
  onElementMove: (id: string, x: number, y: number) => void;
  onElementRotate: (id: string, rotation: number) => void;
  onElementDelete: (id: string) => void;
}) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [rotating, setRotating] = useState<string | null>(null);
  const [rotationStart, setRotationStart] = useState<{ angle: number; elementRotation: number } | null>(null);

  const handleMouseDown = (e: React.MouseEvent, elementId: string) => {
    e.preventDefault();
    const element = elements.find(el => el.id === elementId);
    if (element && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left - element.x,
        y: e.clientY - rect.top - element.y,
      });
      setDragging(elementId);
    }
  };

  const handleRotateStart = (e: React.MouseEvent, elementId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const element = elements.find(el => el.id === elementId);
    if (element && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const centerX = element.x;
      const centerY = element.y;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
      setRotating(elementId);
      setRotationStart({ angle, elementRotation: element.rotation });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = Math.max(20, Math.min(rect.width - 20, e.clientX - rect.left - dragOffset.x));
      const y = Math.max(20, Math.min(rect.height - 20, e.clientY - rect.top - dragOffset.y));
      onElementMove(dragging, x, y);
    }

    if (rotating && rotationStart && canvasRef.current) {
      const element = elements.find(el => el.id === rotating);
      if (element) {
        const rect = canvasRef.current.getBoundingClientRect();
        const centerX = element.x;
        const centerY = element.y;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const currentAngle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
        const deltaAngle = currentAngle - rotationStart.angle;
        let newRotation = rotationStart.elementRotation + deltaAngle;
        // Normalizar a 0-360
        newRotation = ((newRotation % 360) + 360) % 360;
        onElementRotate(rotating, newRotation);
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
    setRotating(null);
    setRotationStart(null);
  };

  const renderStreetPattern = () => {
    // Dimensiones del canvas (relativas)
    const roadWidth = 110;
    const strokeColor = '#004EC9';
    const fillColor = '#FFFFFF';
    const strokeWidth = 2;

    switch (streetType) {
      case 'cruz':
        // Intersección en Cruz (+) - forma única
        return (
          <svg className={styles.streetSvg} viewBox="0 0 400 500" preserveAspectRatio="none">
            <path
              d={`
                M 0 ${250 - roadWidth/2}
                L ${200 - roadWidth/2} ${250 - roadWidth/2}
                L ${200 - roadWidth/2} 0
                L ${200 + roadWidth/2} 0
                L ${200 + roadWidth/2} ${250 - roadWidth/2}
                L 400 ${250 - roadWidth/2}
                L 400 ${250 + roadWidth/2}
                L ${200 + roadWidth/2} ${250 + roadWidth/2}
                L ${200 + roadWidth/2} 500
                L ${200 - roadWidth/2} 500
                L ${200 - roadWidth/2} ${250 + roadWidth/2}
                L 0 ${250 + roadWidth/2}
                Z
              `}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Línea central horizontal */}
            <line x1="0" y1="250" x2={200 - roadWidth/2} y2="250" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
            <line x1={200 + roadWidth/2} y1="250" x2="400" y2="250" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
            {/* Línea central vertical */}
            <line x1="200" y1="0" x2="200" y2={250 - roadWidth/2} stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
            <line x1="200" y1={250 + roadWidth/2} x2="200" y2="500" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
          </svg>
        );
      case 'recta':
        // Calle recta vertical
        return (
          <svg className={styles.streetSvg} viewBox="0 0 400 500" preserveAspectRatio="none">
            <rect
              x={200 - roadWidth/2}
              y="0"
              width={roadWidth}
              height="500"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <line x1="200" y1="0" x2="200" y2="500" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
          </svg>
        );
      case 't-junction':
        // Intersección en T - un solo path unificado
        return (
          <svg className={styles.streetSvg} viewBox="0 0 400 500" preserveAspectRatio="none">
            <path
              d={`
                M 0 ${250 - roadWidth/2}
                L 400 ${250 - roadWidth/2}
                L 400 ${250 + roadWidth/2}
                L ${200 + roadWidth/2} ${250 + roadWidth/2}
                L ${200 + roadWidth/2} 500
                L ${200 - roadWidth/2} 500
                L ${200 - roadWidth/2} ${250 + roadWidth/2}
                L 0 ${250 + roadWidth/2}
                Z
              `}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Líneas centrales */}
            <line x1="0" y1="250" x2={200 - roadWidth/2} y2="250" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
            <line x1={200 + roadWidth/2} y1="250" x2="400" y2="250" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
            <line x1="200" y1={250 + roadWidth/2} x2="200" y2="500" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
          </svg>
        );
      case 'y-junction':
        // Intersección en Y - un solo path unificado
        const angle = 35;
        const rad = angle * Math.PI / 180;
        const legLength = 280;
        // Puntos exteriores de las ramas diagonales
        const leftOuterX = 200 - roadWidth/2 - legLength * Math.sin(rad);
        const leftInnerX = 200 + roadWidth/2 - legLength * Math.sin(rad);
        const rightOuterX = 200 + roadWidth/2 + legLength * Math.sin(rad);
        const rightInnerX = 200 - roadWidth/2 + legLength * Math.sin(rad);
        const legEndY = 250 + legLength * Math.cos(rad);
        return (
          <svg className={styles.streetSvg} viewBox="0 0 400 500" preserveAspectRatio="none">
            <path
              d={`
                M ${200 - roadWidth/2} 0
                L ${200 + roadWidth/2} 0
                L ${200 + roadWidth/2} 250
                L ${rightOuterX} ${legEndY}
                L ${rightInnerX} ${legEndY}
                L 200 ${250 + roadWidth/2 * 1.5}
                L ${leftInnerX} ${legEndY}
                L ${leftOuterX} ${legEndY}
                L ${200 - roadWidth/2} 250
                Z
              `}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Línea central superior */}
            <line x1="200" y1="0" x2="200" y2="240" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
          </svg>
        );
      case 'glorieta':
        // Glorieta/Rotonda
        const outerRadius = 85;
        const innerRadius = 34;
        return (
          <svg className={styles.streetSvg} viewBox="0 0 400 500" preserveAspectRatio="none">
            {/* Cruz de calles */}
            <path
              d={`
                M 0 ${250 - roadWidth/2}
                L ${200 - outerRadius} ${250 - roadWidth/2}
                A ${outerRadius} ${outerRadius} 0 0 1 ${200 - roadWidth/2} ${250 - outerRadius}
                L ${200 - roadWidth/2} 0
                L ${200 + roadWidth/2} 0
                L ${200 + roadWidth/2} ${250 - outerRadius}
                A ${outerRadius} ${outerRadius} 0 0 1 ${200 + outerRadius} ${250 - roadWidth/2}
                L 400 ${250 - roadWidth/2}
                L 400 ${250 + roadWidth/2}
                L ${200 + outerRadius} ${250 + roadWidth/2}
                A ${outerRadius} ${outerRadius} 0 0 1 ${200 + roadWidth/2} ${250 + outerRadius}
                L ${200 + roadWidth/2} 500
                L ${200 - roadWidth/2} 500
                L ${200 - roadWidth/2} ${250 + outerRadius}
                A ${outerRadius} ${outerRadius} 0 0 1 ${200 - outerRadius} ${250 + roadWidth/2}
                L 0 ${250 + roadWidth/2}
                Z
              `}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Centro de la glorieta */}
            <circle cx="200" cy="250" r={innerRadius} fill="#E8F4FD" stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Líneas centrales */}
            <line x1="0" y1="250" x2={200 - outerRadius - 10} y2="250" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
            <line x1={200 + outerRadius + 10} y1="250" x2="400" y2="250" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
            <line x1="200" y1="0" x2="200" y2={250 - outerRadius - 10} stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
            <line x1="200" y1={250 + outerRadius + 10} x2="200" y2="500" stroke={strokeColor} strokeWidth="3" strokeDasharray="20,20" />
          </svg>
        );
      case 'curva':
        // Curva
        const curveRadius = 120;
        return (
          <svg className={styles.streetSvg} viewBox="0 0 400 500" preserveAspectRatio="none">
            <path
              d={`
                M ${200 - roadWidth/2} 0
                L ${200 + roadWidth/2} 0
                L ${200 + roadWidth/2} ${250 - curveRadius}
                A ${curveRadius - roadWidth/2} ${curveRadius - roadWidth/2} 0 0 0 ${200 + curveRadius} ${250 + roadWidth/2}
                L 400 ${250 + roadWidth/2}
                L 400 ${250 - roadWidth/2}
                L ${200 + curveRadius + roadWidth} ${250 - roadWidth/2}
                A ${curveRadius + roadWidth/2} ${curveRadius + roadWidth/2} 0 0 1 ${200 - roadWidth/2} ${250 - curveRadius - roadWidth}
                Z
              `}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={canvasRef}
      className={styles.canvas}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.streetPattern}>
        {renderStreetPattern()}
      </div>
      {elements.map((element) => (
        <div
          key={element.id}
          className={`${styles.placedElement} ${dragging === element.id ? styles.dragging : ''} ${selectedElement === element.id ? styles.selected : ''}`}
          style={{
            left: element.x,
            top: element.y,
            transform: `translate(-50%, -50%) rotate(${element.rotation}deg)`,
          }}
          onMouseDown={(e) => handleMouseDown(e, element.id)}
          onClick={() => setSelectedElement(selectedElement === element.id ? null : element.id)}
        >
          <TopViewIcon
            type={element.type}
            size={36}
            color={element.owner ? ownerColors[element.owner] : elementColors[element.type]}
          />
          <OwnerTag owner={element.owner} />
          <div className={styles.elementActions}>
            <button
              className={`${styles.actionBtn} ${styles.rotateBtn} ${rotating === element.id ? styles.rotating : ''}`}
              onMouseDown={(e) => handleRotateStart(e, element.id)}
              title="Arrastrar para rotar"
            >
              ↻
            </button>
            <button
              className={`${styles.actionBtn} ${styles.deleteBtn}`}
              onClick={(e) => {
                e.stopPropagation();
                onElementDelete(element.id);
              }}
              title="Eliminar"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

interface CroquisBuilderProps {
  onCancel?: () => void;
  onGenerate?: (svgDataUrl: string) => void;
}

export function CroquisBuilder({ onCancel, onGenerate }: CroquisBuilderProps = {}) {
  const [isBuilderActive, setIsBuilderActive] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [streetType, setStreetType] = useState<StreetType>('cruz');
  const [elements, setElements] = useState<PlacedElement[]>([]);
  const [activeElementType, setActiveElementType] = useState<'car' | 'truck' | 'motorcycle' | 'pedestrian' | null>(null);
  const [generatedSvg, setGeneratedSvg] = useState<string | null>(null);
  const [savedElements, setSavedElements] = useState<PlacedElement[]>([]);
  const [savedStreetType, setSavedStreetType] = useState<StreetType>('cruz');

  const handleCreateCroquis = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsBuilderActive(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const handleElementSelect = (type: 'car' | 'truck' | 'motorcycle' | 'pedestrian') => {
    // Pedestrians and motorcycles are added directly as "tercero" without owner selection
    if (type === 'pedestrian' || type === 'motorcycle') {
      const newElement: PlacedElement = {
        id: `${type}-${Date.now()}`,
        type,
        owner: 'tercero',
        x: 150 + Math.random() * 100,
        y: 180 + Math.random() * 100,
        rotation: 0,
      };
      setElements([...elements, newElement]);
      setActiveElementType(null);
    } else {
      setActiveElementType(activeElementType === type ? null : type);
    }
  };

  const handleOwnerSelect = (type: 'car' | 'truck' | 'motorcycle', owner: ElementOwner) => {
    const newElement: PlacedElement = {
      id: `${type}-${Date.now()}`,
      type,
      owner,
      x: 150 + Math.random() * 100,
      y: 180 + Math.random() * 100,
      rotation: 0,
    };
    setElements([...elements, newElement]);
    setActiveElementType(null);
  };

  const handleElementMove = (id: string, x: number, y: number) => {
    setElements(elements.map(el =>
      el.id === id ? { ...el, x, y } : el
    ));
  };

  const handleElementRotate = (id: string, rotation: number) => {
    setElements(elements.map(el =>
      el.id === id ? { ...el, rotation } : el
    ));
  };

  const handleElementDelete = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
  };

  const handleClear = () => {
    setElements([]);
  };

  const generateCroquisSvg = useCallback(() => {
    const width = 400;
    const height = 500;
    const roadWidth = 110;
    const strokeColor = '#004EC9';
    const fillColor = '#FFFFFF';
    const bgColor = '#F0F7FF';

    // Generate street path based on type
    const getStreetPath = () => {
      switch (streetType) {
        case 'cruz':
          return `
            <path d="M 0 ${250 - roadWidth/2} L ${200 - roadWidth/2} ${250 - roadWidth/2} L ${200 - roadWidth/2} 0 L ${200 + roadWidth/2} 0 L ${200 + roadWidth/2} ${250 - roadWidth/2} L 400 ${250 - roadWidth/2} L 400 ${250 + roadWidth/2} L ${200 + roadWidth/2} ${250 + roadWidth/2} L ${200 + roadWidth/2} 500 L ${200 - roadWidth/2} 500 L ${200 - roadWidth/2} ${250 + roadWidth/2} L 0 ${250 + roadWidth/2} Z" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>
            <line x1="0" y1="250" x2="${200 - roadWidth/2}" y2="250" stroke="${strokeColor}" stroke-width="3" stroke-dasharray="20,20"/>
            <line x1="${200 + roadWidth/2}" y1="250" x2="400" y2="250" stroke="${strokeColor}" stroke-width="3" stroke-dasharray="20,20"/>
            <line x1="200" y1="0" x2="200" y2="${250 - roadWidth/2}" stroke="${strokeColor}" stroke-width="3" stroke-dasharray="20,20"/>
            <line x1="200" y1="${250 + roadWidth/2}" x2="200" y2="500" stroke="${strokeColor}" stroke-width="3" stroke-dasharray="20,20"/>
          `;
        case 'recta':
          return `
            <rect x="${200 - roadWidth/2}" y="0" width="${roadWidth}" height="500" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>
            <line x1="200" y1="0" x2="200" y2="500" stroke="${strokeColor}" stroke-width="3" stroke-dasharray="20,20"/>
          `;
        case 't-junction':
          return `
            <path d="M 0 ${250 - roadWidth/2} L 400 ${250 - roadWidth/2} L 400 ${250 + roadWidth/2} L ${200 + roadWidth/2} ${250 + roadWidth/2} L ${200 + roadWidth/2} 500 L ${200 - roadWidth/2} 500 L ${200 - roadWidth/2} ${250 + roadWidth/2} L 0 ${250 + roadWidth/2} Z" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>
            <line x1="0" y1="250" x2="${200 - roadWidth/2}" y2="250" stroke="${strokeColor}" stroke-width="3" stroke-dasharray="20,20"/>
            <line x1="${200 + roadWidth/2}" y1="250" x2="400" y2="250" stroke="${strokeColor}" stroke-width="3" stroke-dasharray="20,20"/>
            <line x1="200" y1="${250 + roadWidth/2}" x2="200" y2="500" stroke="${strokeColor}" stroke-width="3" stroke-dasharray="20,20"/>
          `;
        case 'glorieta':
          const outerRadius = 85;
          const innerRadius = 34;
          return `
            <path d="M 0 ${250 - roadWidth/2} L ${200 - outerRadius} ${250 - roadWidth/2} A ${outerRadius} ${outerRadius} 0 0 1 ${200 - roadWidth/2} ${250 - outerRadius} L ${200 - roadWidth/2} 0 L ${200 + roadWidth/2} 0 L ${200 + roadWidth/2} ${250 - outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 ${200 + outerRadius} ${250 - roadWidth/2} L 400 ${250 - roadWidth/2} L 400 ${250 + roadWidth/2} L ${200 + outerRadius} ${250 + roadWidth/2} A ${outerRadius} ${outerRadius} 0 0 1 ${200 + roadWidth/2} ${250 + outerRadius} L ${200 + roadWidth/2} 500 L ${200 - roadWidth/2} 500 L ${200 - roadWidth/2} ${250 + outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 ${200 - outerRadius} ${250 + roadWidth/2} L 0 ${250 + roadWidth/2} Z" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>
            <circle cx="200" cy="250" r="${innerRadius}" fill="#E8F4FD" stroke="${strokeColor}" stroke-width="2"/>
          `;
        default:
          return '';
      }
    };

    // Generate vehicle SVG based on type
    const getVehicleSvg = (element: PlacedElement) => {
      const color = element.owner ? ownerColors[element.owner] : elementColors[element.type];
      const darkerColor = color === '#004EC9' ? '#003A96' : color === '#9CA3AF' ? '#6B7280' : '#1E8449';

      const transform = `translate(${element.x}, ${element.y}) rotate(${element.rotation})`;

      switch (element.type) {
        case 'car':
          // Vista cenital realista de carro
          return `
            <g transform="${transform}">
              <g transform="translate(-18, -28)">
                <!-- Cuerpo principal del carro -->
                <ellipse cx="18" cy="28" rx="16" ry="24" fill="${color}"/>
                <!-- Contorno más oscuro -->
                <ellipse cx="18" cy="28" rx="16" ry="24" fill="none" stroke="${darkerColor}" stroke-width="2"/>

                <!-- Parabrisas delantero -->
                <ellipse cx="18" cy="12" rx="12" ry="8" fill="#333333" opacity="0.7"/>

                <!-- Parabrisas trasero -->
                <ellipse cx="18" cy="44" rx="12" ry="8" fill="#333333" opacity="0.7"/>

                <!-- Ventanas laterales (centro) -->
                <rect x="6" y="22" width="24" height="12" rx="2" fill="#333333" opacity="0.5"/>

                <!-- Espejo izquierdo -->
                <rect x="2" y="20" width="4" height="6" rx="2" fill="${darkerColor}"/>

                <!-- Espejo derecho -->
                <rect x="30" y="20" width="4" height="6" rx="2" fill="${darkerColor}"/>

                <!-- Luces traseras -->
                <ellipse cx="8" cy="50" rx="3" ry="2" fill="#DC2626"/>
                <ellipse cx="28" cy="50" rx="3" ry="2" fill="#DC2626"/>

                <!-- Luces delanteras -->
                <ellipse cx="8" cy="6" rx="3" ry="2" fill="#FDE047"/>
                <ellipse cx="28" cy="6" rx="3" ry="2" fill="#FDE047"/>
              </g>
            </g>
          `;
        case 'truck':
          // Vista cenital de camión/truck
          return `
            <g transform="${transform}">
              <g transform="translate(-20, -36)">
                <!-- Cabina del camión -->
                <rect x="6" y="4" width="28" height="20" rx="4" fill="${color}"/>
                <rect x="6" y="4" width="28" height="20" rx="4" fill="none" stroke="${darkerColor}" stroke-width="2"/>

                <!-- Parabrisas cabina -->
                <rect x="10" y="8" width="20" height="10" rx="2" fill="#333333" opacity="0.7"/>

                <!-- Espejos cabina -->
                <rect x="2" y="12" width="4" height="6" rx="2" fill="${darkerColor}"/>
                <rect x="34" y="12" width="4" height="6" rx="2" fill="${darkerColor}"/>

                <!-- Caja/cargo del camión -->
                <rect x="4" y="26" width="32" height="40" rx="3" fill="${color}" opacity="0.95"/>
                <rect x="4" y="26" width="32" height="40" rx="3" fill="none" stroke="${darkerColor}" stroke-width="2"/>

                <!-- Luces delanteras -->
                <rect x="8" y="2" width="6" height="3" rx="1" fill="#FDE047"/>
                <rect x="26" y="2" width="6" height="3" rx="1" fill="#FDE047"/>

                <!-- Luces traseras -->
                <rect x="8" y="66" width="6" height="4" rx="1" fill="#DC2626"/>
                <rect x="26" y="66" width="6" height="4" rx="1" fill="#DC2626"/>
              </g>
            </g>
          `;
        case 'motorcycle':
          // Vista cenital de motocicleta
          return `
            <g transform="${transform}">
              <g transform="translate(-10, -24)">
                <!-- Rueda delantera -->
                <ellipse cx="10" cy="6" rx="6" ry="4" fill="#1F2937"/>
                <ellipse cx="10" cy="6" rx="4" ry="2.5" fill="#374151"/>

                <!-- Horquilla y manubrio -->
                <rect x="8" y="10" width="4" height="8" rx="1" fill="${darkerColor}"/>
                <rect x="4" y="10" width="12" height="2" rx="1" fill="${darkerColor}"/>

                <!-- Tanque y asiento -->
                <ellipse cx="10" cy="24" rx="7" ry="10" fill="${color}"/>
                <ellipse cx="10" cy="24" rx="5" ry="8" fill="${darkerColor}" opacity="0.3"/>

                <!-- Conductor (vista desde arriba) -->
                <circle cx="10" cy="20" r="4" fill="#4B5563"/>

                <!-- Rueda trasera -->
                <ellipse cx="10" cy="42" rx="6" ry="4" fill="#1F2937"/>
                <ellipse cx="10" cy="42" rx="4" ry="2.5" fill="#374151"/>

                <!-- Luz trasera -->
                <rect x="8" y="45" width="4" height="2" rx="1" fill="#DC2626"/>

                <!-- Luz delantera -->
                <ellipse cx="10" cy="4" rx="2" ry="1.5" fill="#FDE047"/>
              </g>
            </g>
          `;
        case 'pedestrian':
          // Vista cenital (desde arriba) de una persona
          return `
            <g transform="${transform}">
              <g transform="translate(-12, -16)">
                <!-- Cabeza -->
                <circle cx="12" cy="8" r="6" fill="${color}"/>
                <!-- Cuerpo/torso -->
                <ellipse cx="12" cy="18" rx="8" ry="6" fill="${color}"/>
                <!-- Brazos extendidos -->
                <ellipse cx="12" cy="18" rx="14" ry="4" fill="${darkerColor}" opacity="0.8"/>
                <!-- Piernas -->
                <ellipse cx="10" cy="26" rx="3" ry="5" fill="${darkerColor}"/>
                <ellipse cx="14" cy="26" rx="3" ry="5" fill="${darkerColor}"/>
              </g>
            </g>
          `;
        default:
          return '';
      }
    };

    // Generate label for each element
    const getElementLabel = (element: PlacedElement): string => {
      let labelText = '';

      if (element.type === 'pedestrian') {
        labelText = 'Peatón';
      } else if (element.owner === 'na') {
        labelText = 'NA';
      } else if (element.owner === 'tercero') {
        labelText = '3ero';
      }

      if (!labelText) return '';

      // Position label above the element
      const labelX = element.x;
      const labelY = element.y - 40;

      return `
        <g>
          <!-- Background rect for label -->
          <rect x="${labelX - 20}" y="${labelY - 10}" width="40" height="20" rx="4" fill="#202236" opacity="0.9"/>
          <!-- Label text -->
          <text x="${labelX}" y="${labelY + 3}"
                font-family="Poppins, sans-serif"
                font-size="12"
                font-weight="600"
                fill="#FFFFFF"
                text-anchor="middle">
            ${labelText}
          </text>
        </g>
      `;
    };

    const elementsSvg = elements.map(el => `
      ${getVehicleSvg(el)}
      ${getElementLabel(el)}
    `).join('');

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <rect width="${width}" height="${height}" fill="${bgColor}"/>
        ${getStreetPath()}
        ${elementsSvg}
      </svg>
    `;

    // Save current state before generating
    setSavedElements(elements);
    setSavedStreetType(streetType);

    // Store SVG content as data URL
    const svgDataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgContent)))}`;
    setGeneratedSvg(svgDataUrl);

    // Call onGenerate if provided
    if (onGenerate) {
      onGenerate(svgDataUrl);
    }
  }, [streetType, elements, onGenerate]);

  const handleCancel = () => {
    setElements([]);
    setStreetType('cruz');
    setIsBuilderActive(false);
    setGeneratedSvg(null);
    if (onCancel) {
      onCancel();
    }
  };

  const handleRestore = () => {
    // Reset to initial state
    setElements([]);
    setStreetType('cruz');
    setGeneratedSvg(null);
    setSavedElements([]);
    setSavedStreetType('cruz');
  };

  const handleEdit = () => {
    // Return to editing mode with saved elements
    setElements(savedElements);
    setStreetType(savedStreetType);
    setGeneratedSvg(null);
  };

  const handleDownload = () => {
    if (!generatedSvg) return;

    const link = document.createElement('a');
    link.href = generatedSvg;
    link.download = 'croquis.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Generated SVG view
  if (generatedSvg) {
    return (
      <div className={styles.container}>
        <div className={styles.generatedView}>
          <div className={styles.generatedHeader}>
            <h3 className={styles.generatedTitle}>Croquis Generado</h3>
            <div className={styles.generatedActions}>
              <button className={styles.restoreButton} onClick={handleRestore}>
                Restaurar
              </button>
              <button className={styles.editButton} onClick={handleEdit}>
                Editar
              </button>
              <button className={styles.downloadButton} onClick={handleDownload}>
                Descargar
              </button>
            </div>
          </div>
          <div className={styles.generatedContent}>
            <img src={generatedSvg} alt="Croquis generado" className={styles.generatedImage} />
          </div>
        </div>
      </div>
    );
  }

  // Placeholder view
  if (!isBuilderActive) {
    return (
      <div className={styles.container}>
        <div className={`${styles.placeholderView} ${isTransitioning ? styles.fadeOut : ''}`}>
          <div className={styles.placeholderIcon}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              {/* Icono de croquis/mapa */}
              <rect x="8" y="8" width="48" height="48" rx="8" fill="#E8F1FC" stroke="#004EC9" strokeWidth="2"/>
              <path d="M20 20 L44 20 L44 28 L36 28 L36 44 L28 44 L28 28 L20 28 Z" fill="#004EC9" opacity="0.3"/>
              <circle cx="24" cy="40" r="4" fill="#004EC9"/>
              <circle cx="40" cy="36" r="3" fill="#9CA3AF"/>
              <path d="M16 32 L48 32" stroke="#004EC9" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M32 16 L32 48" stroke="#004EC9" strokeWidth="2" strokeDasharray="4,4"/>
            </svg>
          </div>
          <p className={styles.placeholderText}>Crea un croquis del siniestro</p>
          <button
            className={styles.createCroquisBtn}
            onClick={handleCreateCroquis}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Crear Croquis
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Builder content with fade in */}
      <div className={`${styles.builderContent} ${isTransitioning ? styles.fadeIn : styles.visible}`}>
      {/* Selector de tipo de calle - ARRIBA */}
      <div className={styles.streetSelector}>
        <div className={styles.streetOptions}>
          {(Object.keys(streetTypeLabels) as StreetType[]).map((type) => (
            <button
              key={type}
              className={`${styles.streetOption} ${streetType === type ? styles.streetOptionActive : ''}`}
              onClick={() => setStreetType(type)}
            >
              {streetTypeLabels[type]}
            </button>
          ))}
        </div>
        <button className={styles.clearBtn} onClick={handleClear}>
          Limpiar
        </button>
      </div>

      {/* Canvas del croquis - CENTRO */}
      <div className={styles.canvasWrapper}>
        <StreetCanvas
          streetType={streetType}
          elements={elements}
          onElementMove={handleElementMove}
          onElementRotate={handleElementRotate}
          onElementDelete={handleElementDelete}
        />
        {elements.length === 0 && (
          <div className={styles.canvasHint}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.canvasHintIcon}>
              <path d="M12 4V16M12 16L7 11M12 16L17 11" stroke="#004EC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 20H19" stroke="#004EC9" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Agrega elementos usando los botones de abajo</span>
          </div>
        )}
      </div>

      {/* Elementos para agregar - ABAJO */}
      <div className={styles.elementsBar}>
        <ElementButton
          type="car"
          isActive={activeElementType === 'car'}
          onSelect={() => handleElementSelect('car')}
          onOwnerSelect={(owner) => handleOwnerSelect('car', owner)}
        />
        <ElementButton
          type="truck"
          isActive={activeElementType === 'truck'}
          onSelect={() => handleElementSelect('truck')}
          onOwnerSelect={(owner) => handleOwnerSelect('truck', owner)}
        />
        <ElementButton
          type="motorcycle"
          isActive={activeElementType === 'motorcycle'}
          onSelect={() => handleElementSelect('motorcycle')}
          onOwnerSelect={(owner) => handleOwnerSelect('motorcycle', owner)}
        />
        <ElementButton
          type="pedestrian"
          isActive={false}
          onSelect={() => handleElementSelect('pedestrian')}
          onOwnerSelect={() => {}}
          showOwnerDropdown={false}
        />
      </div>

      {/* Botones de acción - FOOTER */}
      <div className={styles.actionsBar}>
        <button className={styles.cancelBtn} onClick={handleCancel}>
          Cancelar
        </button>
        <button className={styles.generateBtn} onClick={generateCroquisSvg}>
          Generar Croquis
        </button>
      </div>
      </div>
    </div>
  );
}
