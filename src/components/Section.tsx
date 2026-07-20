import type { PropsWithChildren } from "react";

export function Section({ children }: PropsWithChildren) {
  return <section className="section">{children}</section>;
}
