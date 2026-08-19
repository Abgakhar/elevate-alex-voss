import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/bodysense")({
  head: () => ({
    meta: [
      { title: "Body Sense Magazine — Alexandra M Voss, LMT" },
      {
        name: "description",
        content:
          "Body Sense, the client magazine from Associated Bodywork & Massage Professionals, shared by Alexandra M Voss, LMT in Sparks, Nevada.",
      },
      { property: "og:title", content: "Body Sense Magazine — Alexandra M Voss, LMT" },
      {
        property: "og:description",
        content:
          "Past issues of Body Sense magazine, offered to clients of the practice by Alexandra Voss, LMT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BodySense,
});

const issues = [
  "Autumn 2021",
  "Summer 2021",
  "Spring 2021",
  "Winter 2020",
  "Autumn 2020",
  "Summer 2020",
  "Spring 2020",
];

function BodySense() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Bodysense"
        title="Body Sense magazine."
        intro="Issues shared with clients of the practice, published by Associated Bodywork & Massage Professionals."
      />

      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <ul className="border-t border-border">
            {issues.map((issue, i) => (
              <Reveal
                as="li"
                key={issue}
                delay={i * 50}
                className="group border-b border-border transition-colors duration-500 hover:bg-sand/40"
              >
                <a
                  href="https://www.abmp.com/massage-therapy-clients"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-baseline justify-between gap-6 px-1 py-7 md:px-3"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-clay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl md:text-4xl">{issue}</span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
                    Read full issue
                    <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
