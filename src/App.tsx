import { ContentSections } from "./sections/ContentSections";
import { Hero } from "./sections/Hero";
import { portfolio } from "./data/portfolio";

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a href="#top">{portfolio.name}</a>
        <nav>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>
      <main id="top">
        <Hero />
        <ContentSections />
      </main>
      <footer className="footer">© 2026 {portfolio.name}</footer>
    </div>
  );
}
