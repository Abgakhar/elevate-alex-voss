import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/featured-therapies-rates")({
  head: () => ({
    meta: [
      { title: "Featured Therapies & Rates — Alexandra M Voss, LMT" },
      {
        name: "description",
        content:
          "All sessions charged by time: $25 per 15 minute interval. Music Immersion Massage, myofascial release, gua sha, lymphatic drainage, sports massage and more.",
      },
      { property: "og:title", content: "Featured Therapies & Rates — Alexandra M Voss, LMT" },
      {
        property: "og:description",
        content:
          "No extra charge for deep tissue, advanced modalities, or special services. Sessions from 1/2 hour to 2 hours.",
      },
    ],
  }),
  component: Therapies,
});

const rates = [
  { time: "1/2 hour", price: "$50" },
  { time: "1 hour", price: "$100" },
  { time: "90 minutes", price: "$150" },
  { time: "2 hours", price: "$200" },
];

const therapies = [
  {
    name: "Music Immersion Massage",
    desc: "Stress relief, detoxify, boost immunity, integrate.",
  },
  {
    name: "Vagus Nerve Stimulation",
    desc: "Reduce cortisol levels, decompress cervical spine, relax gastrointestinal tract. Add to any session at no extra charge.",
  },
  {
    name: "Gua Sha",
    desc: "Edging tools remove cellulite, increase mobility, break down scar tissue, restore tissue suppleness and fluid flow.",
  },
  {
    name: "Sports Massage and Kinetic Reprogramming",
    desc: "Increase performance, recovery, injury rehabilitation.",
  },
  {
    name: "Hand and Arm Therapy",
    desc: "Recommended for surgeons, dentists, tattoo artists, chefs, mechanics, construction.",
  },
  {
    name: "Foot and Leg Therapy",
    desc: "Office workers, athletes, wheelchair bound, neuropathy.",
  },
  {
    name: "Lymphatic Drainage",
    desc: "Pain management and relief, post surgery inflammation and scar formation therapy. Add compression leg sleeves (30 minute cycle) at no extra charge.",
  },
  { name: "Pre-Natal Couples Massage Tutorials", desc: "" },
  {
    name: "Post Delivery Massage",
    desc: "Reclaim your posture and alignment after delivery.",
  },
  {
    name: "Facilitated Stretching",
    desc: "Increases range of motion using numerous movement methods.",
  },
  { name: "Aromatherapy", desc: "Individual made to order blends — $10." },
  {
    name: "Hot Towel Hand / Foot Scrubs",
    desc: "$30 add on — $50 stand alone service.",
  },
  {
    name: "Myo-fascial Release and Unwinding",
    desc: "The gold standard of deep bodywork. Advanced multiple certifications in this life changing modality.",
  },
];

function Therapies() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Featured Therapies & Rates"
        title="All sessions are charged by time."
        intro={
          <>
            <p>$25 per each 15 minute interval.</p>
            <p className="mt-2">
              There is no extra charge for deep tissue, advanced modalities, or special services.
            </p>
          </>
        }
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-10 md:py-20">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {rates.map((r, i) => (
              <Reveal
                key={r.time}
                delay={i * 70}
                className="bg-ivory px-7 py-10 transition-colors duration-500 hover:bg-sand/50"
              >
                <p className="eyebrow">{r.time}</p>
                <p className="mt-4 font-display text-5xl leading-none">{r.price}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Cash or Zelle only.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <ul className="grid gap-x-14 gap-y-10 md:grid-cols-2">
            {therapies.map((t, i) => (
              <Reveal
                as="li"
                key={t.name}
                delay={(i % 2) * 60}
                className="border-t border-border pt-6"
              >
                <h2 className="text-2xl leading-snug">{t.name}</h2>
                {t.desc ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                ) : null}
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-16 flex flex-wrap gap-3">
            <a
              href="sms:7755605625"
              className="inline-flex items-center bg-charcoal px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground transition-colors duration-500 hover:bg-clay"
            >
              Text to book
            </a>
            <Link
              to="/exclusive-services"
              className="inline-flex items-center border border-charcoal/30 px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 hover:border-charcoal hover:bg-secondary"
            >
              Exclusive services
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
