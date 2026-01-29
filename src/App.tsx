import { Routes, Route, Link } from 'react-router-dom';
import { DesignSystemShowcase } from './views';
import { Button } from './components';
import { colors } from './tokens';
import './App.css';

function Home() {
  return (
    <div className="app">
      <header className="header">
        <h1>Design System</h1>
        <p>Sistema de componentes reutilizables</p>
        <nav className="nav">
          <Link to="/design-system-showcase" className="nav-link">
            Ver Showcase
          </Link>
        </nav>
      </header>

      <main className="main">
        <section className="section">
          <h2>Buttons (Figma)</h2>
          <div className="component-grid">
            <div className="component-group">
              <h3>Variants</h3>
              <div className="button-row">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div className="component-group">
              <h3>States</h3>
              <div className="button-row">
                <Button variant="primary">Enabled</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Colors (Figma)</h2>
          <div className="color-grid">
            <div className="color-swatch">
              <div className="color-box" style={{ backgroundColor: colors.primary.bluecar }} />
              <span className="color-label">Bluecar</span>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ backgroundColor: colors.primary.purple }} />
              <span className="color-label">Purple</span>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ backgroundColor: colors.neutral.gray }} />
              <span className="color-label">Gray</span>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ backgroundColor: colors.neutral.midGray }} />
              <span className="color-label">Mid Gray</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DesignSystemShowcase />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
