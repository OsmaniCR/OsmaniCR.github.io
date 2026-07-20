import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Card } from "../components/Card";
import { Chip } from "../components/Chip";
import { Section } from "../components/Section";
import { portfolio } from "../data/portfolio";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Correo: Mail,
};

export function ContentSections() {
  return (
    <>
      <Section
        id="perfil"
        eyebrow="Perfil"
        title="Ingeniería con contexto de negocio."
        intro="No separo la solución técnica del proceso que debe mejorar. Esa mirada me permite construir productos útiles, mantenibles y preparados para evolucionar."
        className="profile-section"
      >
        <div className="profile-grid">
          {portfolio.profile.map((item, index) => (
            <div className="profile-point" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="especialidades"
        eyebrow="Capacidades"
        title="De la lógica central al último despliegue."
        intro="Un perfil transversal para resolver sistemas completos sin perder profundidad en las decisiones críticas."
      >
        <div className="specialty-grid">
          {portfolio.specialties.map((item, index) => (
            <Card className="specialty-card" key={item.title}>
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="experiencia"
        eyebrow="Trayectoria"
        title="Experiencia construyendo y explicando sistemas."
        intro="Software empresarial, healthtech y docencia: tres contextos que moldearon una forma de trabajar técnica, clara y orientada a resultados."
      >
        <div className="timeline">
          {portfolio.experience.map((item) => (
            <article className="timeline__item" key={`${item.organization}-${item.period}`}>
              <div className="timeline__meta">
                <span>{item.period}</span>
                <span><MapPin size={13} aria-hidden="true" /> {item.location}</span>
              </div>
              <div className="timeline__content">
                <p className="timeline__org">{item.organization}</p>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
                <div className="chips">
                  {item.technologies.map((tech) => <Chip key={tech}>{tech}</Chip>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="proyectos"
        eyebrow="Trabajo seleccionado"
        title="Casos donde la arquitectura sirve a la operación."
        intro="Una selección de sistemas profesionales presentada de forma anónima. No se enlazan repositorios públicos porque varios corresponden a ejercicios técnicos, pruebas de selección o contextos con restricciones de publicación."
      >
        <div className="case-grid">
          {portfolio.caseStudies.map((study, index) => (
            <Card className={`case-card ${index === 0 ? "case-card--featured" : ""}`} key={study.title}>
              <header className="case-card__header">
                <div>
                  <span className="case-card__number">{study.number}</span>
                  <p className="case-card__eyebrow">{study.eyebrow}</p>
                </div>
              </header>
              <h3>{study.title}</h3>
              <p className="case-card__summary">{study.summary}</p>
              <div className="case-impact">
                <span>Impacto</span>
                <p>{study.impact}</p>
              </div>
              <div className="chips">
                {study.technologies.map((tech) => <Chip key={tech}>{tech}</Chip>)}
              </div>
              <details className="case-details">
                <summary>Ver decisiones técnicas</summary>
                <dl>
                  <div><dt>Problema</dt><dd>{study.problem}</dd></div>
                  <div><dt>Solución</dt><dd>{study.solution}</dd></div>
                  <div><dt>Arquitectura</dt><dd>{study.architecture}</dd></div>
                  <div><dt>Desafíos</dt><dd>{study.challenges}</dd></div>
                  <div><dt>Aprendizaje</dt><dd>{study.learnings}</dd></div>
                </dl>
              </details>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="stack"
        eyebrow="Herramientas"
        title="Tecnología elegida según el problema."
        intro="Un stack amplio con especial profundidad en Python, productos web, datos e infraestructura basada en contenedores."
      >
        <div className="stack-grid">
          {portfolio.stack.map((group) => (
            <article className="stack-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="proceso"
        eyebrow="Método"
        title="Un proceso que reduce incertidumbre."
        intro="Primero entendemos el sistema; luego avanzamos en entregas pequeñas, verificables y listas para operar."
      >
        <ol className="process">
          {portfolio.process.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="servicios"
        eyebrow="Colaboración"
        title="Dónde puedo aportar más valor."
      >
        <div className="services-grid">
          {portfolio.services.map((service) => (
            <Card className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ArrowUpRight size={22} aria-hidden="true" />
            </Card>
          ))}
        </div>
      </Section>

      <section className="contact-section" id="contacto" aria-labelledby="contact-title">
        <div className="contact__copy">
          <p className="eyebrow">Contacto</p>
          <h2 id="contact-title">¿Tienes un sistema complejo por aterrizar?</h2>
          <p>Conversemos sobre el problema, el contexto y la mejor forma de convertirlo en software útil.</p>
          <a className="contact__email" href={portfolio.emailHref} target="_blank" rel="noreferrer">
            {portfolio.email} <ArrowUpRight size={24} aria-hidden="true" />
          </a>
        </div>
        <div className="contact__links">
          {portfolio.links.map((link) => {
            const Icon = socialIcons[link.label as keyof typeof socialIcons];
            return (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                <Icon size={20} aria-hidden="true" />
                <span><strong>{link.label}</strong><small>{link.description}</small></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
