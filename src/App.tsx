import { ContentSections } from "./sections/ContentSections";
import { Hero } from "./sections/Hero";
import { portfolio } from "./data/portfolio";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="page-grid" aria-hidden="true" />
      <div className="app-shell">
        <header className="topbar">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <span className="brand__mark">OC.</span>
            <span className="brand__name">{portfolio.shortName}</span>
          </a>
          <nav aria-label="Navegación principal">
            <a href="#experiencia">Experiencia</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#stack">Stack</a>
            <a className="nav-cta" href="#contacto">Contacto</a>
          </nav>
        </header>
        <main id="contenido">
          <Hero />
          <ContentSections />
        </main>
        <footer className="footer">
          <span>© 2026 {portfolio.name}</span>
          <span>Diseñado y construido con intención.</span>
        </footer>
      </div>
    </>
  );
}
