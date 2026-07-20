import { Card } from "../components/Card";
import { Chip } from "../components/Chip";
import { Section } from "../components/Section";
import { portfolio } from "../data/portfolio";

export function ContentSections() {
  return (
    <>
      <Section>
        <h2>Perfil profesional</h2>
        <div className="grid grid--2">
          {portfolio.profile.map((item) => (
            <Card key={item}>
              <p>{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2>Especialidades</h2>
        <div className="grid grid--4">
          {portfolio.specialties.map((item) => (
            <Card key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 id="proyectos">Casos de estudio</h2>
        <div className="stack">
          {portfolio.caseStudies.map((study) => (
            <Card key={study.title}>
              <h3>{study.title}</h3>
              <dl className="case-study">
                <div>
                  <dt>Problema</dt>
                  <dd>{study.problem}</dd>
                </div>
                <div>
                  <dt>Solución</dt>
                  <dd>{study.solution}</dd>
                </div>
                <div>
                  <dt>Arquitectura</dt>
                  <dd>{study.architecture}</dd>
                </div>
                <div>
                  <dt>Impacto</dt>
                  <dd>{study.impact}</dd>
                </div>
                <div>
                  <dt>Desafíos técnicos</dt>
                  <dd>{study.challenges}</dd>
                </div>
                <div>
                  <dt>Aprendizajes</dt>
                  <dd>{study.learnings}</dd>
                </div>
              </dl>
              <div className="chips">
                {study.technologies.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2>Stack tecnológico</h2>
        <div className="stack-grid">
          {Object.entries(portfolio.stack).map(([group, items]) => (
            <Card key={group}>
              <h3>{group}</h3>
              <div className="chips">
                {items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2>Cómo trabajo</h2>
        <ol className="process">
          {portfolio.process.map((item, index) => (
            <li key={item}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2>Servicios</h2>
        <div className="grid grid--3">
          {portfolio.services.map((item) => (
            <Card key={item}>
              <p>{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2>Experiencia y enfoque</h2>
        <div className="chips">
          {portfolio.expertiseAreas.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </Section>

      <Section>
        <h2 id="contacto">Contacto</h2>
        <div className="contact">
          <div className="contact__links">
            {portfolio.links.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                {link.label}: {link.href}
              </a>
            ))}
          </div>
          <form className="contact__form">
            <label>
              Nombre
              <input type="text" placeholder="Tu nombre" />
            </label>
            <label>
              Correo
              <input type="email" placeholder="tu@email.com" />
            </label>
            <label>
              Mensaje
              <textarea rows={5} placeholder="Cuéntame sobre tu proyecto" />
            </label>
            <button className="button button--primary" type="button">
              Formulario visual
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
