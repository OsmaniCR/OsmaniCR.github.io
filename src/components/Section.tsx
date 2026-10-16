import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}>;

export function Section({ children, id, eyebrow, title, intro, className = "" }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section className={`section ${className}`.trim()} id={id} aria-labelledby={titleId}>
      <header className="section__header">
        <p className="eyebrow">{eyebrow}</p>
        <div>
          <h2 id={titleId}>{title}</h2>
          {intro && <p className="section__intro">{intro}</p>}
        </div>
      </header>
      {children}
    </section>
  );
}
