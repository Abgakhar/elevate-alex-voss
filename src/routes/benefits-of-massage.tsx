import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/benefits-of-massage")({
  head: () => ({
    meta: [
      { title: "Benefits of Massage — Alexandra M Voss, LMT" },
      {
        name: "description",
        content:
          "Massage is an effective tool for managing stress: decreased anxiety, enhanced sleep quality, greater energy, improved concentration and circulation.",
      },
      { property: "og:title", content: "Benefits of Massage — Alexandra M Voss, LMT" },
      {
        property: "og:description",
        content:
          "How bodywork addresses stress, pain, immunity, flexibility and recovery — from a licensed massage therapist in Sparks, NV.",
      },
    ],
  }),
  component: Benefits,
});

const stress = [
  "Decreased anxiety.",
  "Enhanced sleep quality.",
  "Greater energy.",
  "Improved concentration.",
  "Increased circulation.",
  "Reduced fatigue.",
];

const health: { lead: string; rest: string }[] = [
  { lead: "Alleviate low-back pain", rest: "and improve range of motion." },
  {
    lead: "Assist with shorter, easier labor for expectant mothers",
    rest: "and shorten maternity hospital stays.",
  },
  { lead: "Ease medication dependence", rest: "." },
  {
    lead: "Enhance immunity",
    rest: "by stimulating lymph flow—the body's natural defense system.",
  },
  { lead: "Exercise and stretch weak, tight, or atrophied muscles", rest: "." },
  {
    lead: "Help athletes of any level",
    rest: "prepare for, and recover from, strenuous workouts.",
  },
  {
    lead: "Improve the condition of the body's largest organ",
    rest: "—the skin.",
  },
  { lead: "Increase joint flexibility", rest: "." },
  { lead: "Lessen depression and anxiety", rest: "." },
  {
    lead: "Promote tissue regeneration",
    rest: ", reducing scar tissue and stretch marks.",
  },
  {
    lead: "Pump oxygen and nutrients into tissues and vital organs",
    rest: ", improving circulation.",
  },
  { lead: "Reduce postsurgery adhesions and swelling", rest: "." },
  { lead: "Reduce spasms and cramping", rest: "." },
  {
    lead: "Relax and soften injured, tired, and overused muscles",
    rest: ".",
  },
  {
    lead: "Release endorphins",
    rest: "—amino acids that work as the body's natural painkiller.",
  },
  { lead: "Relieve migraine pain", rest: "." },
];

function Benefits() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Benefits of Massage"
        title="Experts estimate that upwards of ninety percent of disease is stress-related."
        intro="And perhaps nothing ages us faster, internally and externally, than high stress. Massage is an effective tool for managing this stress, which translates into:"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-10 md:py-20">
          <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {stress.map((s, i) => (
              <Reveal
                as="li"
                key={s}
                delay={(i % 3) * 60}
                className="bg-ivory px-7 py-8 font-display text-2xl leading-snug transition-colors duration-500 hover:bg-sand/50"
              >
                {s.replace(".", "")}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Targeted Relief</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
              Massage can also help specifically address a number of health issues. Bodywork can:
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-x-14 gap-y-6 md:grid-cols-2">
            {health.map((h, i) => (
              <Reveal
                as="li"
                key={h.lead}
                delay={(i % 2) * 50}
                className="border-t border-border pt-5 text-base leading-relaxed text-muted-foreground"
              >
                <span className="font-medium text-foreground">{h.lead}</span>
                {h.rest === "." ? "." : ` ${h.rest}`}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
