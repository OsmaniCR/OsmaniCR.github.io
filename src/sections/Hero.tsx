import { ArrowRight, Github, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__eyebrow">Portafolio personal</div>
      <h1>{portfolio.name}</h1>
      <p className="hero__role">{portfolio.role}</p>
      <p className="hero__intro">{portfolio.intro}</p>
      <div className="hero__actions">
        <a className="button button--primary" href="#proyectos">
          Ver proyectos <ArrowRight size={18} />
        </a>
        <a className="button button--secondary" href="#contacto">
          Contactar <Mail size={18} />
        </a>
        <a className="button button--ghost" href="https://github.com/OsmaniCR" target="_blank" rel="noreferrer">
          GitHub <Github size={18} />
        </a>
      </div>
    </section>
  );
}
