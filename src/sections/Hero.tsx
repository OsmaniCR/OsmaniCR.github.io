import { ArrowDownRight, ArrowRight, Github, Mail, MapPin } from "lucide-react";
import { portfolio } from "../data/portfolio";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow hero__eyebrow">
          <MapPin size={14} aria-hidden="true" /> {portfolio.location}
        </p>
        <h1 id="hero-title">{portfolio.headline}</h1>
        <p className="hero__role">{portfolio.role}</p>
        <p className="hero__intro">{portfolio.intro}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#proyectos">
            Explorar proyectos <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href={portfolio.emailHref} target="_blank" rel="noreferrer">
            Escribirme <Mail size={18} aria-hidden="true" />
          </a>
          <a className="icon-button" href="https://github.com/OsmaniCR" target="_blank" rel="noreferrer" aria-label="Ver GitHub de Osmani">
            <Github size={20} aria-hidden="true" />
          </a>
        </div>
      </div>

      <aside className="hero__system" aria-label="Resumen profesional">
        <div className="system-card__topline">
          <span>Perfil / 01</span>
          <span className="system-status"><i /> Disponible online</span>
        </div>
        <p className="system-card__label">Mi forma de conectar las piezas</p>
        <div className="system-flow" aria-label="Negocio, arquitectura y producto">
          <span>Negocio</span>
          <ArrowRight size={18} aria-hidden="true" />
          <span>Arquitectura</span>
          <ArrowRight size={18} aria-hidden="true" />
          <span>Producto</span>
        </div>
        <div className="signal-grid">
          {portfolio.signals.map((signal) => (
            <div className="signal" key={signal.value}>
              <strong>{signal.value}</strong>
              <span>{signal.label}</span>
            </div>
          ))}
        </div>
        <div className="system-card__footer">
          <span>{portfolio.name}</span>
          <span>ING / SW</span>
        </div>
      </aside>
    </section>
  );
}
