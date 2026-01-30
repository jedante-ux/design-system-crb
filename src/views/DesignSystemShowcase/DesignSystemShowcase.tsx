import { useState } from 'react';
import {
  Button,
  Input,
  CroquisBuilder,
  Stepper,
  AlertMessage,
  Header,
  Navbar,
  BackButton,
  BranchTitle,
  BranchTab,
  UserInfo,
  ActionButton,
  Breadcrumbs,
  HeaderStepper,
  FilterButton,
  FilterGroup,
  BranchInfo,
  Logo,
  LogoIcon,
  Icon,
  Sidebar,

  MenuItem,
  MenuAccordion,
  GalleryImage,
  GalleryModal,
} from '../../components';
import type { IconName } from '../../components/Icon/Icon';
import type { GalleryItem } from '../../components/GalleryModal/GalleryModal';
import styles from './DesignSystemShowcase.module.css';

interface CodeBlockProps {
  code: string;
  title?: string;
}

function CodeBlock({ code, title = 'Usage' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeBlockHeader}>
        <span className={styles.codeBlockTitle}>{title}</span>
        <button className={styles.copyButton} onClick={handleCopy}>
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <pre className={styles.codeBlockContent}>{code}</pre>
    </div>
  );
}

type ComponentKey = 'guidelines' | 'colors' | 'logo' | 'icon' | 'button' | 'navbar' | 'croquis' | 'stepper' | 'alert' | 'header' | 'filter' | 'branch' | 'breadcrumbs' | 'headerstepper' | 'galleryimage' | 'gallerymodal';

interface NavMenuItem {
  key: ComponentKey;
  label: string;
  implemented: boolean;
}

interface MenuCategory {
  id: string;
  label: string;
  icon: IconName;
  items: NavMenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: 'fundamentals',
    label: 'Fundamentos',
    icon: 'file',
    items: [
      { key: 'guidelines', label: 'Design Guidelines', implemented: true },
      { key: 'colors', label: 'Color Palette', implemented: true },
    ],
  },
  {
    id: 'branding',
    label: 'Branding',
    icon: 'star-01',
    items: [
      { key: 'logo', label: 'Logo', implemented: true },
      { key: 'icon', label: 'Icon', implemented: true },
    ],
  },
  {
    id: 'forms',
    label: 'Formularios',
    icon: 'edit-01',
    items: [
      { key: 'button', label: 'Buttons & Inputs', implemented: true },
      { key: 'filter', label: 'Filter Button', implemented: true },
    ],
  },
  {
    id: 'navigation',
    label: 'Navegación',
    icon: 'menu-01',
    items: [
      { key: 'navbar', label: 'Navbar', implemented: true },
      { key: 'header', label: 'Header', implemented: true },
      { key: 'breadcrumbs', label: 'Breadcrumbs', implemented: true },
      { key: 'headerstepper', label: 'Header Stepper', implemented: true },
      { key: 'stepper', label: 'Stepper', implemented: true },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    icon: 'bell-01',
    items: [
      { key: 'alert', label: 'Alert Message', implemented: true },
    ],
  },
  {
    id: 'data',
    label: 'Información',
    icon: 'folder',
    items: [
      { key: 'branch', label: 'Branch Info', implemented: true },
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    icon: 'settings',
    items: [
      { key: 'croquis', label: 'Croquis Builder', implemented: true },
    ],
  },
  {
    id: 'media',
    label: 'Media',
    icon: 'eye-open',
    items: [
      { key: 'galleryimage', label: 'Gallery Image', implemented: true },
      { key: 'gallerymodal', label: 'Gallery Modal', implemented: true },
    ],
  },
];

function ButtonShowcase() {
  const buttonUsageCode = `import { Button, Icon } from '@/components';

// Primary button
<Button variant="primary" onClick={() => console.log('clicked')}>
  Regresar
</Button>

// Secondary button
<Button variant="secondary">
  Cancelar
</Button>

// Ghost button
<Button variant="ghost">
  Ver más
</Button>

// Disabled button
<Button variant="primary" disabled>
  No disponible
</Button>

// With icons
<Button variant="primary" iconLeft={<Icon name="home-01" />}>
  Dashboard
</Button>

<Button variant="primary" iconRight={<Icon name="arrow-right" />}>
  Siguiente
</Button>

<Button variant="secondary" iconLeft={<Icon name="download" />} iconRight={<Icon name="chevron-down" />}>
  Descargar
</Button>`;

  const inputUsageCode = `import { Input, Icon } from '@/components';

// Basic input
<Input placeholder="Escribe aquí..." />

// With label
<Input label="Nombre completo" placeholder="Juan Pérez" />

// With icons
<Input
  label="Buscar"
  placeholder="Buscar..."
  iconLeft={<Icon name="search-01" />}
/>

<Input
  placeholder="Correo electrónico"
  iconRight={<Icon name="mail-01" />}
/>

// With error
<Input
  label="Email"
  placeholder="tu@email.com"
  error={true}
  errorMessage="Email inválido"
/>

// With helper text
<Input
  label="Contraseña"
  type="password"
  helperText="Mínimo 8 caracteres"
/>

// Disabled
<Input label="Campo deshabilitado" placeholder="No editable" disabled />`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Buttons & Inputs</h1>
      <p className={styles.componentDescription}>
        Componentes de interacción: botones con múltiples variantes y campos de entrada de texto.
      </p>

      {/* BUTTONS SECTION */}
      <div style={{ marginTop: '48px', marginBottom: '24px' }}>
        <h2 className={styles.componentTitle} style={{ fontSize: '24px', marginBottom: '16px' }}>Buttons</h2>
        <p className={styles.componentDescription}>
          Botones interactivos con variantes Primary, Secondary y Ghost
        </p>
      </div>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Primary</h2>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Default</span>
              <Button variant="primary">Regresar</Button>
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Disabled</span>
              <Button variant="primary" disabled>Regresar</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Secondary</h2>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Default</span>
              <Button variant="secondary">Text here</Button>
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Disabled</span>
              <Button variant="secondary" disabled>Text here</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Ghost</h2>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Default</span>
              <Button variant="ghost">Text here</Button>
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Disabled</span>
              <Button variant="ghost" disabled>Text here</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Con Iconos</h2>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Icon Left</span>
              <Button variant="primary" iconLeft={<Icon name="home-01" />}>
                Dashboard
              </Button>
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Icon Right</span>
              <Button variant="primary" iconRight={<Icon name="arrow-right" />}>
                Siguiente
              </Button>
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Both Icons</span>
              <Button variant="secondary" iconLeft={<Icon name="download" />} iconRight={<Icon name="chevron-down" />}>
                Descargar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CodeBlock code={buttonUsageCode} title="Uso de Buttons" />

      {/* INPUTS SECTION */}
      <div style={{ marginTop: '64px', marginBottom: '24px' }}>
        <h2 className={styles.componentTitle} style={{ fontSize: '24px', marginBottom: '16px' }}>Inputs</h2>
        <p className={styles.componentDescription}>
          Campos de entrada de texto con labels, iconos y estados de error
        </p>
      </div>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Básico</h2>
        <div className={styles.previewBox}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
            <Input placeholder="Placeholder" />
            <Input label="Label" placeholder="Placeholder" />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Con Iconos</h2>
        <div className={styles.previewBox}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
            <Input
              label="Con icono izquierdo"
              placeholder="Buscar..."
              iconLeft={<Icon name="search-01" />}
            />
            <Input
              label="Con icono derecho"
              placeholder="Correo electrónico"
              iconRight={<Icon name="mail-01" />}
            />
            <Input
              label="Ambos iconos"
              placeholder="Username"
              iconLeft={<Icon name="user-profile-01" />}
              iconRight={<Icon name="chevron-down" />}
            />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Estados</h2>
        <div className={styles.previewBox}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
            <Input
              label="Con valor"
              placeholder="Placeholder"
              defaultValue="Text filled"
            />
            <Input
              label="Con helper text"
              placeholder="Contraseña"
              type="password"
              helperText="Mínimo 8 caracteres"
            />
            <Input
              label="Con error"
              placeholder="email@example.com"
              error={true}
              errorMessage="Email inválido"
            />
            <Input
              label="Deshabilitado"
              placeholder="No editable"
              disabled
            />
          </div>
        </div>
      </section>

      <CodeBlock code={inputUsageCode} title="Uso de Inputs" />
    </div>
  );
}

function NavbarShowcase() {
  const usageCode = `import { Navbar, BackButton, BranchTitle, UserInfo, ActionButton } from '@/components';

// Navbar básico con back button y título
<Navbar
  leftContent={
    <>
      <BackButton onClick={() => console.log('go back')} />
      <BranchTitle title="Pólizas" subtitle="Listado de pólizas" />
    </>
  }
  rightContent={
    <>
      <UserInfo userName="Samantha" providerName="Provider Name" />
      <ActionButton
        icon={<LogoutIcon />}
        onClick={() => console.log('logout')}
        ariaLabel="Cerrar sesión"
      />
    </>
  }
/>

// Navbar sin back button
<Navbar
  leftContent={
    <BranchTitle title="Dashboard" />
  }
  rightContent={
    <UserInfo userName="Samantha" providerName="Crabi Insurance" />
  }
/>

// Solo con título y acción
<Navbar
  leftContent={
    <BranchTitle title="Siniestros" subtitle="SA-88951" />
  }
  rightContent={
    <ActionButton
      icon={<MenuIcon />}
      onClick={() => console.log('menu')}
      ariaLabel="Abrir menú"
    />
  }
/>`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Navbar</h1>
      <p className={styles.componentDescription}>
        Header principal de 116px según especificaciones de Figma. Incluye navegación,
        información de usuario y acciones.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Navbar Completo</h2>
        <p className={styles.sectionDescription}>Con back button, título, user info y action button</p>
        <div className={styles.previewBoxFull}>
          <Navbar
            leftContent={
              <>
                <BackButton onClick={() => console.log('go back')} />
                <BranchTitle title="Pólizas" subtitle="KV-1004665" />
              </>
            }
            rightContent={
              <>
                <UserInfo userName="Samantha" providerName="Crabi Insurance" />
                <ActionButton
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5m0 0l-5-5m5 5H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  onClick={() => console.log('logout')}
                  ariaLabel="Cerrar sesión"
                />
              </>
            }
          />
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Sin Back Button</h2>
        <p className={styles.sectionDescription}>Solo título y user info</p>
        <div className={styles.previewBoxFull}>
          <Navbar
            leftContent={<BranchTitle title="Dashboard" />}
            rightContent={<UserInfo userName="Samantha" providerName="Provider Name" />}
          />
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Con Subtítulo</h2>
        <p className={styles.sectionDescription}>Título principal + subtítulo/id</p>
        <div className={styles.previewBoxFull}>
          <Navbar
            leftContent={
              <>
                <BackButton onClick={() => console.log('go back')} />
                <BranchTitle title="Renovación disponible" subtitle="SA-88951" />
              </>
            }
            rightContent={
              <>
                <UserInfo userName="Samantha" />
                <ActionButton
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 1v6m0 6v6M1 12h6m6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  }
                  onClick={() => console.log('settings')}
                  ariaLabel="Configuración"
                />
              </>
            }
          />
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Con Branch Tabs</h2>
        <p className={styles.sectionDescription}>Navbar con tabs de navegación y badges (según Figma "Navbar polizas")</p>
        <div className={styles.previewBoxFull}>
          <Navbar
            leftContent={
              <>
                <BackButton onClick={() => console.log('go back')} />
                <BranchTitle title="Sucursal | Lopez Mateos" />
                <div style={{ width: '1px', height: '57px', backgroundColor: 'transparent' }} />
                <BranchTab label="Todas las polizas" badge="4" active onClick={() => console.log('tab 1')} />
                <BranchTab label="Pendiente de pago" badge="2" onClick={() => console.log('tab 2')} />
                <BranchTab label="Renovación disponible" badge="1" onClick={() => console.log('tab 3')} />
              </>
            }
            rightContent={
              <>
                <UserInfo userName="Samantha" providerName="Provider Name" />
                <ActionButton
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5m0 0l-5-5m5 5H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  onClick={() => console.log('logout')}
                  ariaLabel="Cerrar sesión"
                />
              </>
            }
          />
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Componentes Individuales</h2>
        <p className={styles.sectionDescription}>Back button, user info, action button y branch tabs por separado</p>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Back Button</span>
              <BackButton onClick={() => console.log('back')} />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>User Info</span>
              <UserInfo userName="Samantha" providerName="Crabi" />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Action Button</span>
              <ActionButton
                icon={<span style={{ fontSize: '20px' }}>🚪</span>}
                onClick={() => console.log('action')}
                ariaLabel="Logout"
              />
            </div>
          </div>
          <div className={styles.previewRow} style={{ marginTop: '24px' }}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Branch Tab Active</span>
              <BranchTab label="Todas las polizas" badge="12" active />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Branch Tab</span>
              <BranchTab label="Pendiente de pago" badge="3" />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Sin Badge</span>
              <BranchTab label="Renovación disponible" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Breadcrumbs</h2>
        <p className={styles.sectionDescription}>Navegación de ruta (53px height)</p>
        <div className={styles.previewBoxFull}>
          <Breadcrumbs
            items={[
              { label: 'Lista de siniestros', active: true },
              { label: 'DA-100266' },
            ]}
          />
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Header Stepper</h2>
        <p className={styles.sectionDescription}>Breadcrumb style stepper para headers (46px height)</p>
        <div className={styles.previewBoxFull}>
          <HeaderStepper
            items={[
              {
                label: 'Pólizas',
                icon: (
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor">
                    <rect x="0" y="8" width="5" height="13" />
                    <rect x="8" y="0" width="13" height="13" />
                  </svg>
                ),
              },
              { label: 'Renovación disponible' },
              { label: '1 Selección de coberturas', active: true },
            ]}
          />
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Navbar + Header Stepper</h2>
        <p className={styles.sectionDescription}>Variante "Renovación disponible" (162px total)</p>
        <div className={styles.previewBoxFull}>
          <div>
            <Navbar
              leftContent={
                <>
                  <BackButton onClick={() => console.log('go back')} />
                  <BranchTitle title="Renovación disponible" subtitle="SA-88951" />
                </>
              }
              rightContent={
                <>
                  <UserInfo userName="Samantha" providerName="Provider Name" />
                  <ActionButton
                    icon={
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5m0 0l-5-5m5 5H9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    onClick={() => console.log('logout')}
                    ariaLabel="Cerrar sesión"
                  />
                </>
              }
            />
            <HeaderStepper
              items={[
                {
                  label: 'Pólizas',
                  icon: <span style={{ fontSize: '20px' }}>📄</span>,
                },
                { label: 'Renovación disponible' },
                { label: '1 Selección de coberturas', active: true },
              ]}
            />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Navbar + Breadcrumbs</h2>
        <p className={styles.sectionDescription}>Variante "header simple" (169px total)</p>
        <div className={styles.previewBoxFull}>
          <div>
            <Navbar
              leftContent={
                <>
                  <BackButton onClick={() => console.log('go back')} />
                  <BranchTitle title="Siniestros" />
                </>
              }
              rightContent={
                <>
                  <UserInfo userName="Samantha" providerName="Crabi Insurance" />
                  <ActionButton
                    icon={
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5m0 0l-5-5m5 5H9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    onClick={() => console.log('logout')}
                    ariaLabel="Cerrar sesión"
                  />
                </>
              }
            />
            <Breadcrumbs
              items={[
                { label: 'Lista de siniestros', active: true },
                { label: 'DA-100266' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Navbar + Action Bar</h2>
        <p className={styles.sectionDescription}>Variante "Detalle de poliza" con alertas y filtros (209px total)</p>
        <div className={styles.previewBoxFull}>
          <div>
            <Navbar
              leftContent={
                <>
                  <BackButton onClick={() => console.log('go back')} />
                  <BranchTitle title="Pólizas  KV-1004665" subtitle="Listado de siniestros" />
                </>
              }
              rightContent={
                <>
                  <UserInfo userName="Samantha" providerName="Provider Name" />
                  <ActionButton
                    icon={
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5m0 0l-5-5m5 5H9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    onClick={() => console.log('logout')}
                    ariaLabel="Cerrar sesión"
                  />
                </>
              }
            />
            <div style={{ padding: '16px 24px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E6E8EC', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <AlertMessage variant="error" title="Atención">
                Hay 3 siniestros pendientes de revisión
              </AlertMessage>
              <FilterGroup>
                <FilterButton label="Todos" active onClick={() => console.log('filter')} />
                <FilterButton label="Pendientes" onClick={() => console.log('filter')} />
                <FilterButton label="Aprobados" onClick={() => console.log('filter')} />
              </FilterGroup>
            </div>
          </div>
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

interface ColorSwatchProps {
  name: string;
  hex: string;
  description?: string;
  background?: string;
}

function ColorSwatch({ name, hex, description, background }: ColorSwatchProps) {
  return (
    <div className={styles.colorSwatch}>
      <div
        className={styles.colorBox}
        style={{
          backgroundColor: background || hex,
          border: hex === '#FFFFFF' ? '1px solid #E5E7EB' : 'none'
        }}
      >
        {background && (
          <div
            className={styles.colorCircle}
            style={{ backgroundColor: hex }}
          />
        )}
      </div>
      <div className={styles.colorInfo}>
        <span className={styles.colorName}>{name}</span>
        <span className={styles.colorHex}>{hex}</span>
        {description && <span className={styles.colorDescription}>{description}</span>}
      </div>
    </div>
  );
}

function GuidelinesShowcase() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/DESIGN_GUIDELINES.md';
    link.download = 'DESIGN_GUIDELINES.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.componentShowcase}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div>
          <h1 className={styles.componentTitle}>Design Guidelines</h1>
          <p className={styles.componentDescription}>
            Sistema completo de directrices de diseño para el desarrollo de componentes Crabi.
            <br />
            <span style={{ color: '#737373', fontSize: '13px' }}>Versión 1.0.0 • Última actualización: 2026-01-28</span>
          </p>
        </div>
        <Button
          variant="primary"
          iconLeft={<Icon name="download" size={20} />}
          onClick={handleDownload}
        >
          Descargar Completo
        </Button>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: '#F0F7FF', padding: '20px', borderRadius: '12px', border: '1px solid #004EC9' }}>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#004EC9', marginBottom: '8px' }}>12</div>
          <div style={{ fontSize: '14px', color: '#525252' }}>Componentes</div>
        </div>
        <div style={{ backgroundColor: '#F0F7FF', padding: '20px', borderRadius: '12px', border: '1px solid #004EC9' }}>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#004EC9', marginBottom: '8px' }}>31</div>
          <div style={{ fontSize: '14px', color: '#525252' }}>Iconos Pre-cargados</div>
        </div>
        <div style={{ backgroundColor: '#F0F7FF', padding: '20px', borderRadius: '12px', border: '1px solid #004EC9' }}>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#004EC9', marginBottom: '8px' }}>20+</div>
          <div style={{ fontSize: '14px', color: '#525252' }}>Colores del Sistema</div>
        </div>
        <div style={{ backgroundColor: '#F0F7FF', padding: '20px', borderRadius: '12px', border: '1px solid #004EC9' }}>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#004EC9', marginBottom: '8px' }}>4px</div>
          <div style={{ fontSize: '14px', color: '#525252' }}>Base de Espaciado</div>
        </div>
      </div>

      {/* Principios de Diseño */}
      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>📐 Principios de Diseño</h2>
        <div className={styles.previewBox}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #E6E8EC' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#004EC9' }}>Consistencia</h3>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#525252', fontSize: '14px', lineHeight: '1.6' }}>
                <li>Patrones visuales coherentes</li>
                <li>Paleta unificada de colores</li>
                <li>Estados de interacción uniformes</li>
              </ul>
            </div>
            <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #E6E8EC' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#004EC9' }}>Simplicidad</h3>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#525252', fontSize: '14px', lineHeight: '1.6' }}>
                <li>Evitar sobre-ingeniería</li>
                <li>Componentes enfocados</li>
                <li>Jerarquía visual clara</li>
              </ul>
            </div>
            <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #E6E8EC' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#004EC9' }}>Accesibilidad</h3>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#525252', fontSize: '14px', lineHeight: '1.6' }}>
                <li>Contraste accesible (WCAG)</li>
                <li>Estados hover/focus visibles</li>
                <li>Cursores apropiados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Colores */}
      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>🎨 Sistema de Colores</h2>
        <p className={styles.sectionDescription}>Paleta completa con colores primarios, neutrales y semánticos</p>

        <div className={styles.previewBox} style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#262626' }}>Colores Primarios</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
            <div style={{ padding: '16px', backgroundColor: '#004EC9', borderRadius: '8px', color: 'white', position: 'relative' }}>
              <div style={{ fontSize: '11px', opacity: '0.9', marginBottom: '4px' }}>Primary</div>
              <div style={{ fontSize: '13px', fontWeight: '600', fontFamily: 'monospace' }}>#004EC9</div>
              <button
                onClick={() => copyToClipboard('#004EC9')}
                style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '4px', padding: '4px 8px', color: 'white', cursor: 'pointer', fontSize: '10px' }}
              >
                Copy
              </button>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#585DE4', borderRadius: '8px', color: 'white', position: 'relative' }}>
              <div style={{ fontSize: '11px', opacity: '0.9', marginBottom: '4px' }}>Purple</div>
              <div style={{ fontSize: '13px', fontWeight: '600', fontFamily: 'monospace' }}>#585DE4</div>
              <button
                onClick={() => copyToClipboard('#585DE4')}
                style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '4px', padding: '4px 8px', color: 'white', cursor: 'pointer', fontSize: '10px' }}
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        <div className={styles.previewBox}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#262626' }}>Colores Semánticos</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
            <div style={{ padding: '16px', backgroundColor: '#27AE60', borderRadius: '8px', color: 'white' }}>
              <div style={{ fontSize: '11px', opacity: '0.9' }}>Success</div>
              <div style={{ fontSize: '13px', fontWeight: '600', fontFamily: 'monospace' }}>#27AE60</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#E67E22', borderRadius: '8px', color: 'white' }}>
              <div style={{ fontSize: '11px', opacity: '0.9' }}>Warning</div>
              <div style={{ fontSize: '13px', fontWeight: '600', fontFamily: 'monospace' }}>#E67E22</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#DC2626', borderRadius: '8px', color: 'white' }}>
              <div style={{ fontSize: '11px', opacity: '0.9' }}>Error</div>
              <div style={{ fontSize: '13px', fontWeight: '600', fontFamily: 'monospace' }}>#DC2626</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#004EC9', borderRadius: '8px', color: 'white' }}>
              <div style={{ fontSize: '11px', opacity: '0.9' }}>Info</div>
              <div style={{ fontSize: '13px', fontWeight: '600', fontFamily: 'monospace' }}>#004EC9</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipografía */}
      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>📝 Tipografía</h2>
        <p className={styles.sectionDescription}>Sistema tipográfico basado en Poppins con escalas y pesos definidos</p>

        <div className={styles.previewBox}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#F0F7FF', borderRadius: '6px', marginBottom: '16px' }}>
              <code style={{ fontSize: '13px', color: '#004EC9', fontFamily: 'monospace' }}>font-family: 'Poppins', sans-serif;</code>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #E6E8EC' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Heading Large</div>
              <div style={{ fontSize: '12px', color: '#737373' }}>24px / 700 (bold)</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #E6E8EC' }}>
              <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Heading Medium</div>
              <div style={{ fontSize: '12px', color: '#737373' }}>18px / 600 (semibold)</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #E6E8EC' }}>
              <div style={{ fontSize: '14px', fontWeight: '400', marginBottom: '8px' }}>Body Text Regular</div>
              <div style={{ fontSize: '12px', color: '#737373' }}>14px / 400 (normal)</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #E6E8EC' }}>
              <div style={{ fontSize: '13px', fontWeight: '400', marginBottom: '8px' }}>Small Text</div>
              <div style={{ fontSize: '12px', color: '#737373' }}>13px / 400 (normal)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Espaciado */}
      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>📏 Sistema de Espaciado</h2>
        <p className={styles.sectionDescription}>Basado en múltiplos de 4px para consistencia y armonía visual</p>

        <div className={styles.previewBox}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', padding: '20px', backgroundColor: '#FAFAFA', borderRadius: '8px' }}>
            {[4, 8, 12, 16, 24, 32, 48].map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: `${size}px`, height: `${size * 2}px`, backgroundColor: '#004EC9', borderRadius: '2px' }}></div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#004EC9' }}>{size}px</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#F0F7FF', borderRadius: '8px' }}>
            <code style={{ fontSize: '12px', color: '#004EC9', fontFamily: 'monospace' }}>
              --spacing-1: 4px; --spacing-2: 8px; --spacing-3: 12px; --spacing-4: 16px; --spacing-6: 24px; --spacing-8: 32px;
            </code>
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>🧩 Componentes Disponibles</h2>
        <div className={styles.previewBox}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {['Button', 'Logo', 'Icon', 'Navbar', 'Stepper', 'Header', 'Alert', 'Filter', 'Branch Info', 'Croquis Builder', 'MenuItem', 'Sidebar'].map((comp) => (
              <div key={comp} style={{ padding: '12px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #E6E8EC', fontSize: '13px', color: '#525252' }}>
                ✓ {comp}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div style={{ backgroundColor: '#F0F7FF', padding: '32px', borderRadius: '12px', border: '2px solid #004EC9', textAlign: 'center' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#004EC9' }}>📚 Documento Completo</h3>
        <p style={{ marginBottom: '20px', color: '#525252', fontSize: '14px', maxWidth: '600px', margin: '0 auto 20px' }}>
          Esta vista muestra un resumen de las Design Guidelines. Para acceder al documento completo con todas las
          especificaciones técnicas, variables CSS, patrones de código TypeScript, mejores prácticas y anti-patrones,
          descarga el archivo DESIGN_GUIDELINES.md.
        </p>
        <Button
          variant="primary"
          iconLeft={<Icon name="download" size={20} />}
          onClick={handleDownload}
        >
          Descargar DESIGN_GUIDELINES.md
        </Button>
      </div>
    </div>
  );
}

function ColorPaletteShowcase() {
  const usageCode = `// Usar colores directamente
<div style={{ backgroundColor: '#004EC9', color: '#FFFFFF' }}>
  Primary Button
</div>

// Usar CSS Variables
:root {
  --primary: #004EC9;
  --primary-purple: #585DE4;
  --neutral-black: #1F2236;
}

.myComponent {
  background-color: var(--primary);
  color: var(--neutral-black);
}`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Color Palette</h1>
      <p className={styles.componentDescription}>
        Paleta de colores oficial de Crabi, extraída directamente del diseño en Figma.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Primary Colors</h2>
        <div className={styles.previewBox}>
          <div className={styles.colorGrid}>
            <ColorSwatch name="Bluecar (Primary)" hex="#004EC9" description="Main brand color" />
            <ColorSwatch name="Purple" hex="#585DE4" description="Secondary brand color" />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Secondary Colors</h2>
        <div className={styles.previewBox}>
          <div className={styles.colorGrid}>
            <ColorSwatch name="Red" hex="#FB5F5F" description="Error, alerts, danger" />
            <ColorSwatch name="Yellow" hex="#F9C131" description="Warnings, attention" />
            <ColorSwatch name="Brown" hex="#9D5E5E" description="Subtle emphasis" />
            <ColorSwatch name="Green" hex="#1D8474" description="Success, positive actions" />
            <ColorSwatch name="Blue" hex="#30AAF5" description="Information, links" />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Secondary Light (Backgrounds)</h2>
        <div className={styles.previewBox}>
          <div className={styles.colorGrid}>
            <ColorSwatch name="Red Light" hex="#FFD6D6" description="Error backgrounds" />
            <ColorSwatch name="Yellow Light" hex="#FFF4D8" description="Warning backgrounds" />
            <ColorSwatch name="Brown Light" hex="#9C9292" description="Subtle backgrounds" />
            <ColorSwatch name="Green Light" hex="#9EC3B6" description="Success backgrounds" />
            <ColorSwatch name="Blue Light" hex="#B1E1FF" description="Info backgrounds" />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Neutral Colors</h2>
        <div className={styles.previewBox}>
          <div className={styles.colorGrid}>
            <ColorSwatch name="Black" hex="#1F2236" description="Maximum contrast text" />
            <ColorSwatch name="Dark Gray" hex="#585C68" description="Primary text" />
            <ColorSwatch name="Gray" hex="#BDBEC2" description="Secondary text" />
            <ColorSwatch name="Mid Gray" hex="#E5E7EB" description="Borders, dividers" />
            <ColorSwatch name="Light Gray" hex="#F1F1F3" description="Light backgrounds" />
            <ColorSwatch name="Ultra Light Gray" hex="#FAFAFA" description="Very light backgrounds" />
            <ColorSwatch name="White" hex="#FFFFFF" description="Main background" />
            <ColorSwatch name="Card Dark" hex="#32354F" description="Dark mode cards" />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Status Colors</h2>
        <div className={styles.previewBox}>
          <div className={styles.colorGrid}>
            <ColorSwatch name="Success" hex="#409161" description="Positive states" background="#E9FFEF" />
            <ColorSwatch name="Warning" hex="#F9C131" description="Warnings" background="#FFF2DD" />
            <ColorSwatch name="Error" hex="#FB5F5F" description="Errors, delete" background="#FFD6D6" />
            <ColorSwatch name="Info" hex="#004EC9" description="Information" background="#B1E1FF" />
            <ColorSwatch name="Purple" hex="#585DE4" description="Special status" background="#E6EAFF" />
          </div>
        </div>
      </section>

      <CodeBlock code={usageCode} title="Como usar los colores" />
    </div>
  );
}

function LogoShowcase() {
  const usageCode = `import { Logo, LogoIcon } from '@/components';

// Logo completo azul (default)
<Logo variant="blue" size="medium" />

// Logo blanco (para fondos oscuros)
<Logo variant="white" size="medium" />

// Solo icono "C" - azul
<LogoIcon variant="blue" size={30} />

// Solo icono "C" - blanco (para fondos oscuros)
<LogoIcon variant="white" size={30} />

// Tamaños disponibles (Logo completo)
<Logo size="small" />    // 80px
<Logo size="medium" />   // 120px
<Logo size="large" />    // 160px
<Logo size="xlarge" />   // 200px

// Con ancho personalizado
<Logo width={250} />

// Logo clickeable
<Logo
  size="medium"
  onClick={() => navigate('/')}
/>`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Logo</h1>
      <p className={styles.componentDescription}>
        Logo corporativo de Crabi con variantes de color y tamaños configurables.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Variantes de Color</h2>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Blue (Default)</span>
              <Logo variant="blue" size="medium" />
            </div>
          </div>
          <div className={styles.previewRow} style={{ marginTop: 24, backgroundColor: '#004EC9', padding: '24px', borderRadius: '8px' }}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel} style={{ color: 'white' }}>White</span>
              <Logo variant="white" size="medium" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Tamaños</h2>
        <div className={styles.previewBox}>
          <div className={styles.previewRow} style={{ alignItems: 'flex-end', gap: '24px' }}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Small (80px)</span>
              <Logo size="small" />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Medium (120px)</span>
              <Logo size="medium" />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Large (160px)</span>
              <Logo size="large" />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>XLarge (200px)</span>
              <Logo size="xlarge" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Solo Icono (LogoIcon)</h2>
        <p className={styles.sectionDescription}>Variante reducida mostrando únicamente el icono "C" para espacios pequeños</p>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Blue (30px)</span>
              <LogoIcon variant="blue" size={30} />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Blue (48px)</span>
              <LogoIcon variant="blue" size={48} />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Blue (80px)</span>
              <LogoIcon variant="blue" size={80} />
            </div>
          </div>
          <div className={styles.previewRow} style={{ marginTop: 24, backgroundColor: '#004EC9', padding: '24px', borderRadius: '8px' }}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel} style={{ color: 'white' }}>White (30px)</span>
              <LogoIcon variant="white" size={30} />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel} style={{ color: 'white' }}>White (48px)</span>
              <LogoIcon variant="white" size={48} />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel} style={{ color: 'white' }}>White (80px)</span>
              <LogoIcon variant="white" size={80} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Logo Clickeable</h2>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Con onClick</span>
              <Logo size="medium" onClick={() => alert('Logo clicked!')} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Ancho Personalizado</h2>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>250px</span>
              <Logo width={250} />
            </div>
          </div>
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

function StepperShowcase() {
  const [currentStep, setCurrentStep] = useState(2);
  const steps = ['Datos personales', 'Vehiculo', 'Cobertura', 'Pago', 'Confirmacion'];

  const usageCode = `import { Stepper } from '@/components';
import { useState } from 'react';

function MyComponent() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    'Datos personales',
    'Vehiculo',
    'Cobertura',
    'Pago',
    'Confirmacion'
  ];

  return (
    <Stepper
      steps={steps}
      currentStep={currentStep}
      onStepClick={setCurrentStep}
    />
  );
}`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Stepper</h1>
      <p className={styles.componentDescription}>
        Componente para mostrar progreso en procesos de multiples pasos.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Default</h2>
        <div className={styles.previewBox}>
          <Stepper steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />
        </div>
        <div className={styles.controls}>
          <Button variant="secondary" onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}>
            Anterior
          </Button>
          <Button variant="primary" onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}>
            Siguiente
          </Button>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Estados</h2>
        <div className={styles.previewBox}>
          <div className={styles.previewRow}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Paso 1</span>
              <Stepper steps={['Inicio', 'Medio', 'Fin']} currentStep={1} />
            </div>
          </div>
          <div className={styles.previewRow} style={{ marginTop: 24 }}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Paso 3 (Completado)</span>
              <Stepper steps={['Inicio', 'Medio', 'Fin']} currentStep={3} />
            </div>
          </div>
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

function HeaderShowcase() {
  const usageCode = `import { Header, Button, Stepper } from '@/components';

// Header básico
<Header
  title="Polizas"
  subtitle="Gestiona todas tus polizas"
  actions={<Button variant="primary">Nueva poliza</Button>}
/>

// Header con botón de regreso
<Header
  title="Detalle de poliza"
  subtitle="POL-2024-001234"
  backButton
  onBack={() => navigate(-1)}
  actions={
    <>
      <Button variant="secondary">Editar</Button>
      <Button variant="primary">Renovar</Button>
    </>
  }
/>

// Header simple
<Header title="Configuracion" variant="simple" />

// Header con Stepper (para flujos multi-paso)
<Header
  title="Cotización de Seguro"
  subtitle="Completa los datos para tu cotización"
  variant="with-stepper"
>
  <Stepper
    steps={['Datos', 'Vehiculo', 'Cobertura', 'Pago', 'Confirmación']}
    currentStep={2}
  />
</Header>`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Header</h1>
      <p className={styles.componentDescription}>
        Componente de encabezado para paginas con diferentes variantes.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Default</h2>
        <div className={styles.previewBoxFull}>
          <Header
            title="Polizas"
            subtitle="Gestiona todas tus polizas"
            actions={<Button variant="primary">Nueva poliza</Button>}
          />
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Con boton de regreso</h2>
        <div className={styles.previewBoxFull}>
          <Header
            title="Detalle de poliza"
            subtitle="POL-2024-001234"
            backButton
            onBack={() => alert('Volver')}
            actions={
              <>
                <Button variant="secondary">Editar</Button>
                <Button variant="primary">Renovar</Button>
              </>
            }
          />
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Simple</h2>
        <div className={styles.previewBoxFull}>
          <Header title="Configuracion" variant="simple" />
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Con Stepper (Cotizador)</h2>
        <div className={styles.previewBoxFull}>
          <Header
            title="Cotización de Seguro"
            subtitle="Completa los datos para tu cotización"
            variant="with-stepper"
          >
            <Stepper
              steps={['Datos', 'Vehiculo', 'Cobertura', 'Pago', 'Confirmación']}
              currentStep={2}
            />
          </Header>
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

function BreadcrumbsShowcase() {
  const usageCode = `import { Breadcrumbs } from '@/components';

// Breadcrumbs básico
<Breadcrumbs
  items={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Pólizas', onClick: () => navigate('/polizas') },
    { label: 'Detalle' },
  ]}
/>

// Con items activos
<Breadcrumbs
  items={[
    { label: 'Inicio', onClick: () => console.log('Inicio') },
    { label: 'Categorías', onClick: () => console.log('Categorías') },
    { label: 'Actual', active: true },
  ]}
/>`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Breadcrumbs</h1>
      <p className={styles.componentDescription}>
        Navegación de migas de pan para mostrar la jerarquía de ubicación.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Ejemplo</h2>
        <div className={styles.previewBox}>
          <Breadcrumbs
            items={[
              { label: 'Home', onClick: () => console.log('Home') },
              { label: 'Pólizas', onClick: () => console.log('Pólizas') },
              { label: 'Detalle' },
            ]}
          />
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}



function HeaderStepperShowcase() {
  const usageCode = `import { HeaderStepper } from '@/components';

// Stepper básico con pasos
<HeaderStepper
  items={[
    { label: 'Datos Personales' },
    { label: 'Información Vehicular', active: true },
    { label: 'Cobertura' },
    { label: 'Pago' },
  ]}
/>

// Con iconos personalizados
<HeaderStepper
  items={[
    { label: 'Inicio', icon: <Icon name="check-01" /> },
    { label: 'Proceso', active: true, icon: <Icon name="clock-01" /> },
    { label: 'Final', icon: <Icon name="star-01" /> },
  ]}
/>`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Header Stepper</h1>
      <p className={styles.componentDescription}>
        Indicador de progreso para flujos multi-paso en el header.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Ejemplo</h2>
        <div className={styles.previewBox}>
          <HeaderStepper
            items={[
              { label: 'Datos Personales' },
              { label: 'Información Vehicular', active: true },
              { label: 'Cobertura' },
              { label: 'Pago' },
            ]}
          />
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}





function AlertShowcase() {
  const usageCode = `import { AlertMessage } from '@/components';

// Alert de información
<AlertMessage variant="info" title="Informacion">
  Tu poliza sera renovada automaticamente el 15 de febrero.
</AlertMessage>

// Alert de éxito
<AlertMessage variant="success" title="Exito">
  El pago ha sido procesado correctamente.
</AlertMessage>

// Alert de advertencia
<AlertMessage variant="warning" title="Advertencia">
  Tu poliza vence en 7 dias. Recuerda renovarla.
</AlertMessage>

// Alert de error
<AlertMessage variant="error" title="Error">
  No se pudo procesar el pago. Intenta nuevamente.
</AlertMessage>

// Con botón de cerrar
<AlertMessage
  variant="info"
  onClose={() => console.log('Cerrado')}
>
  Este mensaje puede ser cerrado por el usuario.
</AlertMessage>`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Alert Message</h1>
      <p className={styles.componentDescription}>
        Mensajes de alerta para notificar al usuario sobre diferentes estados.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Variantes</h2>
        <div className={styles.alertStack}>
          <AlertMessage variant="info" title="Informacion">
            Tu poliza sera renovada automaticamente el 15 de febrero.
          </AlertMessage>
          <AlertMessage variant="success" title="Exito">
            El pago ha sido procesado correctamente.
          </AlertMessage>
          <AlertMessage variant="warning" title="Advertencia">
            Tu poliza vence en 7 dias. Recuerda renovarla.
          </AlertMessage>
          <AlertMessage variant="error" title="Error">
            No se pudo procesar el pago. Intenta nuevamente.
          </AlertMessage>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Con boton de cerrar</h2>
        <div className={styles.alertStack}>
          <AlertMessage variant="info" onClose={() => alert('Cerrar')}>
            Este mensaje puede ser cerrado por el usuario.
          </AlertMessage>
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

function FilterShowcase() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['all']);

  const toggleFilter = (filter: string) => {
    if (filter === 'all') {
      setActiveFilters(['all']);
    } else {
      const newFilters = activeFilters.filter(f => f !== 'all');
      if (newFilters.includes(filter)) {
        setActiveFilters(newFilters.filter(f => f !== filter));
      } else {
        setActiveFilters([...newFilters, filter]);
      }
    }
  };

  const usageCode = `import { FilterButton, FilterGroup } from '@/components';
import { useState } from 'react';

function Filters() {
  const [activeFilters, setActiveFilters] = useState(['all']);

  const toggleFilter = (filter: string) => {
    if (filter === 'all') {
      setActiveFilters(['all']);
    } else {
      const newFilters = activeFilters.filter(f => f !== 'all');
      if (newFilters.includes(filter)) {
        setActiveFilters(newFilters.filter(f => f !== filter));
      } else {
        setActiveFilters([...newFilters, filter]);
      }
    }
  };

  return (
    <FilterGroup>
      <FilterButton
        label="Todos"
        active={activeFilters.includes('all')}
        onClick={() => toggleFilter('all')}
      />
      <FilterButton
        label="Activas"
        active={activeFilters.includes('active')}
        onClick={() => toggleFilter('active')}
      />
      <FilterButton
        label="Vencidas"
        active={activeFilters.includes('expired')}
        onClick={() => toggleFilter('expired')}
      />
    </FilterGroup>
  );
}`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Filter Button</h1>
      <p className={styles.componentDescription}>
        Botones de filtro para segmentar contenido.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Grupo de filtros</h2>
        <div className={styles.previewBox}>
          <FilterGroup>
            <FilterButton
              label="Todos"
              active={activeFilters.includes('all')}
              onClick={() => toggleFilter('all')}
            />
            <FilterButton
              label="Activas"
              count={24}
              active={activeFilters.includes('active')}
              onClick={() => toggleFilter('active')}
            />
            <FilterButton
              label="Pendientes"
              count={5}
              active={activeFilters.includes('pending')}
              onClick={() => toggleFilter('pending')}
            />
            <FilterButton
              label="Vencidas"
              count={2}
              active={activeFilters.includes('expired')}
              onClick={() => toggleFilter('expired')}
            />
          </FilterGroup>
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

function BranchShowcase() {
  const usageCode = `import { BranchInfo } from '@/components';

// Branch activa
<BranchInfo
  title="Sucursal Centro"
  subtitle="Av. Principal #123"
  status="active"
  statusLabel="Activa"
  icon={<span>🏢</span>}
/>

// Branch pendiente
<BranchInfo
  title="Sucursal Norte"
  subtitle="Calle 45 #678"
  status="pending"
  statusLabel="Pendiente"
  icon={<span>🏢</span>}
/>

// Branch inactiva
<BranchInfo
  title="Sucursal Sur"
  subtitle="Av. Sur #901"
  status="inactive"
  statusLabel="Inactiva"
  icon={<span>🏢</span>}
/>`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Branch Info</h1>
      <p className={styles.componentDescription}>
        Tarjetas de informacion para sucursales o entidades.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Estados</h2>
        <div className={styles.branchGrid}>
          <BranchInfo
            title="Sucursal Centro"
            subtitle="Av. Principal #123"
            status="active"
            statusLabel="Activa"
            icon={<span>🏢</span>}
          />
          <BranchInfo
            title="Sucursal Norte"
            subtitle="Calle 45 #678"
            status="pending"
            statusLabel="Pendiente"
            icon={<span>🏢</span>}
          />
          <BranchInfo
            title="Sucursal Sur"
            subtitle="Av. Sur #901"
            status="inactive"
            statusLabel="Inactiva"
            icon={<span>🏢</span>}
          />
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

function CroquisShowcase() {
  const usageCode = `import { CroquisBuilder } from '@/components';

// Croquis Builder interactivo
<CroquisBuilder />

// El componente incluye:
// - Drag and drop de vehículos y elementos
// - Rotación de elementos
// - Herramientas de dibujo
// - Panel de elementos disponibles
// - Canvas interactivo para posicionar elementos`;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Croquis Builder</h1>
      <p className={styles.componentDescription}>
        Herramienta interactiva para crear croquis de accidentes de transito.
      </p>

      <section className={styles.variantSection}>
        <CroquisBuilder />
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

function IconShowcase() {
  const usageCode = `import { Icon } from '@/components';

// Basic usage
<Icon name="check-01" />

// Custom size
<Icon name="search-01" size={32} />

// Custom color
<Icon name="heart" color="#FF0000" />

// Custom stroke width
<Icon name="star-01" strokeWidth={3} />

// With onClick
<Icon name="trash-01" onClick={() => console.log('delete')} />

// All available icons (31 pre-loaded)
const icons = [
  'check-01', 'x-01', 'plus-01', 'minus-circle-contained',
  'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
  'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down',
  'search-01', 'menu-01', 'home-01', 'user-profile-01',
  'mail-01', 'bell-01', 'settings', 'logout-01',
  'calendar-01', 'clock-01', 'file', 'folder',
  'heart', 'star-01', 'eye-open', 'eye-closed',
  'trash-01', 'edit-01', 'download'
];`;

  const allIcons = [
    { name: 'check-01', label: 'Check' },
    { name: 'x-01', label: 'Close' },
    { name: 'plus-01', label: 'Plus' },
    { name: 'minus-circle-contained', label: 'Minus Circle' },
    { name: 'arrow-left', label: 'Arrow Left' },
    { name: 'arrow-right', label: 'Arrow Right' },
    { name: 'arrow-up', label: 'Arrow Up' },
    { name: 'arrow-down', label: 'Arrow Down' },
    { name: 'chevron-left', label: 'Chevron Left' },
    { name: 'chevron-right', label: 'Chevron Right' },
    { name: 'chevron-up', label: 'Chevron Up' },
    { name: 'chevron-down', label: 'Chevron Down' },
    { name: 'search-01', label: 'Search' },
    { name: 'menu-01', label: 'Menu' },
    { name: 'home-01', label: 'Home' },
    { name: 'user-profile-01', label: 'User' },
    { name: 'mail-01', label: 'Mail' },
    { name: 'bell-01', label: 'Bell' },
    { name: 'settings', label: 'Settings' },
    { name: 'logout-01', label: 'Logout' },
    { name: 'calendar-01', label: 'Calendar' },
    { name: 'clock-01', label: 'Clock' },
    { name: 'file', label: 'File' },
    { name: 'folder', label: 'Folder' },
    { name: 'heart', label: 'Heart' },
    { name: 'star-01', label: 'Star' },
    { name: 'eye-open', label: 'Eye Open' },
    { name: 'eye-closed', label: 'Eye Closed' },
    { name: 'trash-01', label: 'Trash' },
    { name: 'edit-01', label: 'Edit' },
    { name: 'download', label: 'Download' },
  ] as const;

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Icon</h1>
      <p className={styles.componentDescription}>
        Sistema de iconos basado en Figma con 870 iconos disponibles en 20 categorías. Este showcase incluye los 31 iconos más comunes pre-cargados.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Todos los iconos (31 pre-cargados)</h2>
        <div className={styles.iconGrid}>
          {allIcons.map((icon) => (
            <div key={icon.name} className={styles.iconItem}>
              <div className={styles.iconPreview}>
                <Icon name={icon.name} size={24} />
              </div>
              <span className={styles.iconLabel}>{icon.label}</span>
              <span className={styles.iconName}>{icon.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Tamaños</h2>
        <div className={styles.previewBox}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Icon name="star-01" size={16} />
            <Icon name="star-01" size={24} />
            <Icon name="star-01" size={32} />
            <Icon name="star-01" size={48} />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Colores</h2>
        <div className={styles.previewBox}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Icon name="heart" color="#004EC9" />
            <Icon name="heart" color="#E63946" />
            <Icon name="heart" color="#2A9D8F" />
            <Icon name="heart" color="#F77F00" />
            <Icon name="heart" color="#202236" />
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Stroke Width</h2>
        <div className={styles.previewBox}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Icon name="check-01" strokeWidth={1} />
            <Icon name="check-01" strokeWidth={2} />
            <Icon name="check-01" strokeWidth={3} />
            <Icon name="check-01" strokeWidth={4} />
          </div>
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

function PlaceholderShowcase({ name }: { name: string }) {
  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>{name}</h1>
      <div className={styles.placeholder}>
        <p>Componente pendiente de implementar</p>
      </div>
    </div>
  );
}

function GalleryImageShowcase() {
  const usageCode = `import { GalleryImage } from '@/components';

// Small
<GalleryImage status="small" src="image.jpg" />

// Medium
<GalleryImage status="medium" src="image.jpg" />

// High
<GalleryImage status="high" src="image.jpg" />

// With Cancel/Delete
<GalleryImage 
  status="small-cancel" 
  src="image.jpg" 
  onDelete={() => console.log('deleted')} 
/>

// With View Action
<GalleryImage 
  status="medium" 
  src="image.jpg" 
  onView={() => console.log('view')} 
/>`;

  const placeholderImage = "https://images.unsplash.com/photo-1579353977828-2a4eab54c86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80";

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Gallery Image</h1>
      <p className={styles.componentDescription}>
        Componente para visualizar imagenes en galerias con diferentes tamaños y opciones de eliminar.
        Basado en el componente "Gallery-image" de Figma.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Variantes de Tamaño</h2>
        <div className={styles.previewBox}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap' }}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Small (Status=small)</span>
              <GalleryImage status="small" src={placeholderImage} label="Lado Izquierdo" />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Medium (Status=Medium)</span>
              <GalleryImage status="medium" src={placeholderImage} label="Nombre de foto" />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>High (Status=High)</span>
              <GalleryImage status="high" src={placeholderImage} label="Documento Frontal" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Variantes con Cancelar</h2>
        <p className={styles.sectionDescription}>Incluyen botón de eliminar/cancelar en la esquina superior derecha</p>
        <div className={styles.previewBox}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap' }}>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Small Cancel</span>
              <GalleryImage
                status="small-cancel"
                src={placeholderImage}
                label="Lado Izquierdo"
                onDelete={() => alert('Delete clicked')}
              />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>Square Cancel</span>
              <GalleryImage
                status="square-cancel"
                src={placeholderImage}
                label="Foto Evidencia"
                onDelete={() => alert('Delete clicked')}
              />
            </div>
            <div className={styles.previewItem}>
              <span className={styles.stateLabel}>High Cancel</span>
              <GalleryImage
                status="high-cancel"
                src={placeholderImage}
                label="Documento Reverso"
                onDelete={() => alert('Delete clicked')}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Interacción</h2>
        <p className={styles.sectionDescription}>Hover para ver acciones (Delete y View)</p>
        <div className={styles.previewBox}>
          <div className={styles.previewItem}>
            <span className={styles.stateLabel}>With View Action</span>
            <GalleryImage
              status="medium"
              src={placeholderImage}
              label="Tarjeta Circulación"
              onView={() => alert('View clicked')}
              onDelete={() => alert('Delete clicked')}
            />
          </div>
        </div>
      </section>

      <CodeBlock code={usageCode} />
    </div>
  );
}

function GalleryModalShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModalType, setCurrentModalType] = useState<'images' | 'mixed'>('images');

  const usageCode = `import { GalleryModal } from '@/components';
import type { GalleryItem } from '@/components';

// Define gallery items
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://example.com/image1.jpg',
    thumbnail: 'https://example.com/thumb1.jpg',
    name: 'Lado Izquierdo',
  },
  {
    id: '2',
    type: 'image',
    url: 'https://example.com/image2.jpg',
    name: 'Lado Derecho',
  },
  {
    id: '3',
    type: 'pdf',
    url: 'https://example.com/document.pdf',
    name: 'Document.pdf',
  },
];

// Use the modal
const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>
  Ver Galería
</Button>

<GalleryModal
  items={galleryItems}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  initialIndex={0}
  title="Documentos de vehículo y reparación"
/>`;

  const imageItems: GalleryItem[] = [
    {
      id: '1',
      type: 'image',
      url: 'https://via.placeholder.com/800x600/0066FF/FFFFFF?text=Lado+Izquierdo',
      thumbnail: 'https://via.placeholder.com/200x150/0066FF/FFFFFF?text=Lado+Izquierdo',
      name: 'Lado Izquierdo',
    },
    {
      id: '2',
      type: 'image',
      url: 'https://via.placeholder.com/800x600/FF6B6B/FFFFFF?text=Lado+Derecho',
      thumbnail: 'https://via.placeholder.com/200x150/FF6B6B/FFFFFF?text=Lado+Derecho',
      name: 'Lado Derecho',
    },
    {
      id: '3',
      type: 'image',
      url: 'https://via.placeholder.com/800x600/4ECDC4/FFFFFF?text=Parte+Frontal',
      thumbnail: 'https://via.placeholder.com/200x150/4ECDC4/FFFFFF?text=Parte+Frontal',
      name: 'Parte Frontal',
    },
  ];

  const mixedItems: GalleryItem[] = [
    {
      id: '1',
      type: 'image',
      url: 'https://via.placeholder.com/800x600/0066FF/FFFFFF?text=Foto+Vehiculo',
      name: 'Foto del Vehículo',
    },
    {
      id: '2',
      type: 'pdf',
      url: 'https://react.dev/images/home/conf2021/cover.svg',
      name: 'React Documentation.pdf',
    },
    {
      id: '3',
      type: 'image',
      url: 'https://via.placeholder.com/800x600/FF6B6B/FFFFFF?text=Identificacion',
      name: 'Identificación',
    },
  ];

  const handleOpenModal = (type: 'images' | 'mixed') => {
    setCurrentModalType(type);
    setIsOpen(true);
  };

  return (
    <div className={styles.componentShowcase}>
      <h1 className={styles.componentTitle}>Gallery Modal</h1>
      <p className={styles.componentDescription}>
        Modal para visualizar galerías de imágenes y documentos PDF con navegación, zoom, rotación y controles.
        Incluye thumbnails navegables y funcionalidad completa de visor de PDFs.
        Basado en el componente "modal" de Figma.
      </p>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Galería de Imágenes</h2>
        <p className={styles.sectionDescription}>Modal con solo imágenes y navegación</p>
        <div className={styles.previewBox}>
          <Button variant="primary" onClick={() => handleOpenModal('images')}>
            Abrir Galería de Imágenes
          </Button>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Galería Mixta</h2>
        <p className={styles.sectionDescription}>Modal con imágenes y documentos PDF</p>
        <div className={styles.previewBox}>
          <Button variant="primary" onClick={() => handleOpenModal('mixed')}>
            Abrir Galería Mixta (Imágenes + PDF)
          </Button>
        </div>
      </section>

      <section className={styles.variantSection}>
        <h2 className={styles.sectionTitle}>Características</h2>
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <strong>Navegación:</strong> Flechas laterales para navegar entre items, thumbnails clicables
          </div>
          <div className={styles.feature}>
            <strong>Visor de Imágenes:</strong> Visualización optimizada con tamaño máximo responsive
          </div>
          <div className={styles.feature}>
            <strong>Visor de PDF:</strong> Controles completos de navegación de páginas, zoom (50%-200%), rotación
          </div>
          <div className={styles.feature}>
            <strong>Acciones:</strong> Descargar y imprimir documentos directamente desde el modal
          </div>
          <div className={styles.feature}>
            <strong>Responsive:</strong> Se adapta a diferentes tamaños de pantalla
          </div>
        </div>
      </section>

      <CodeBlock code={usageCode} />

      {/* Render the modal */}
      <GalleryModal
        items={currentModalType === 'images' ? imageItems : mixedItems}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialIndex={0}
        title="Documentos de vehículo y reparación"
      />
    </div>
  );
}

export function DesignSystemShowcase() {
  const [activeComponent, setActiveComponent] = useState<ComponentKey>('guidelines');

  const renderContent = () => {
    switch (activeComponent) {
      case 'guidelines':
        return <GuidelinesShowcase />;
      case 'colors':
        return <ColorPaletteShowcase />;
      case 'logo':
        return <LogoShowcase />;
      case 'icon':
        return <IconShowcase />;
      case 'button':
        return <ButtonShowcase />;
      case 'navbar':
        return <NavbarShowcase />;
      case 'stepper':
        return <StepperShowcase />;
      case 'header':
        return <HeaderShowcase />;
      case 'alert':
        return <AlertShowcase />;
      case 'filter':
        return <FilterShowcase />;
      case 'branch':
        return <BranchShowcase />;
      case 'croquis':
        return <CroquisShowcase />;
      case 'breadcrumbs':
        return <BreadcrumbsShowcase />;
      case 'headerstepper':
        return <HeaderStepperShowcase />;
      case 'galleryimage':
        return <GalleryImageShowcase />;
      case 'gallerymodal':
        return <GalleryModalShowcase />;
      default:
        // Find label from all categories
        const allItems = menuCategories.flatMap(cat => cat.items);
        const item = allItems.find(m => m.key === activeComponent);
        return <PlaceholderShowcase name={item?.label || ''} />;
    }
  };

  // Map component keys to icons
  const getIconForComponent = (key: ComponentKey): IconName => {
    const iconMap: Record<ComponentKey, IconName> = {
      'guidelines': 'file',
      'colors': 'star-01',
      'logo': 'home-01',
      'icon': 'heart',
      'button': 'plus-01',
      'navbar': 'menu-01',
      'stepper': 'chevron-right',
      'header': 'folder',
      'alert': 'bell-01',
      'filter': 'search-01',
      'branch': 'user-profile-01',
      'croquis': 'edit-01',
      'breadcrumbs': 'arrow-right',
      'headerstepper': 'chevron-down',
      'galleryimage': 'eye-open',
      'gallerymodal': 'eye-open',
    };
    return iconMap[key] || 'star-01';
  };

  return (
    <div className={styles.container}>
      <Sidebar
        logo={
          <div className={styles.sidebarLogo}>
            <svg width="20" height="22" viewBox="0 0 148 159" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 79.1954C0 35.3714 32.9876 0 84.8026 0C109.603 0 128.786 6.66308 146.031 23.8728C148.84 26.5761 148.563 29.6221 145.715 32.3254L116.208 61.3384C113.4 64.0417 110.235 63.7751 107.427 60.4246C101.455 53.7615 94.8492 51.6674 86.0683 51.6674C70.682 51.6674 60.0026 63.7751 60.0026 79.1954C60.0026 94.6157 70.682 107.295 86.0683 107.295C94.8492 107.295 101.455 104.858 107.427 98.2328C110.235 94.9203 113.4 94.6157 116.208 97.319L145.715 126.332C148.523 129.035 148.84 132.081 145.715 135.089C128.746 152.032 109.286 159 84.763 159C32.948 159 0 123.324 0 79.1954Z" fill="white" />
            </svg>
          </div>
        }
      >
        {menuCategories.map((category) => (
          <MenuAccordion
            key={category.id}
            title={category.label}
            icon={<Icon name={category.icon} size={24} />}

          >
            {category.items.map((item) => (
              <MenuItem
                key={item.key}
                icon={<Icon name={getIconForComponent(item.key)} size={20} />}
                label={item.label}
                variant="flyout"
                active={activeComponent === item.key}
                onClick={() => setActiveComponent(item.key)}
                ariaLabel={item.label}
              />
            ))}
          </MenuAccordion>
        ))}
      </Sidebar>
      <main className={styles.main}>
        {renderContent()}
      </main>
    </div>
  );
}
