import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-sand/40">
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] md:text-6xl">{title}</h1>
          {intro ? (
            <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {intro}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
