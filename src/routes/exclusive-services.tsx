import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import musicImmersion from "@/assets/music-immersion.jpg";
import linens from "@/assets/hands-therapy.jpg";

export const Route = createFileRoute("/exclusive-services")({
  head: () => ({
    meta: [
      { title: "Exclusive Services — Music Immersion, Neuro-Reflexive Bodywork" },
      {
        name: "description",
        content:
          "Music Immersion Massage, Neuro-Reflexive Stretching and Performance Training, sports massage and arm, wrist and hand therapy with Alexandra Voss, LMT.",
      },
      { property: "og:title", content: "Exclusive Services — Alexandra M Voss, LMT" },
      {
        property: "og:description",
        content:
          "Where neuroscience meets movement: signature bodywork developed by Alexandra Voss in Sparks, Nevada.",
      },
    ],
  }),
  component: Exclusive,
});

function Exclusive() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Exclusive Services"
        title="Pain may express itself in one or two locations. But it anchors itself throughout your entire body."
      />

      {/* Music Immersion */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Signature</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
              Music Immersion Massage
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>Full somatic immersion into your inner world.</p>
              <p>
                This playlist driven massage is delivered with both of us in high end surround sound
                headphones.
              </p>
              <p>
                There is no distractions from outside noise, no talking, just 90 minutes of floating
                mind and body.
              </p>
              <p>Deep pressure techniques swim in your soft tissue along with the music.</p>
              <p className="font-display text-2xl text-foreground">
                It is the Ultimate Relaxation Massage.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <img
              src={musicImmersion}
              alt="Headphones on folded linen beside a brass bowl"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-[300px] w-full object-cover md:h-[440px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Neuro-reflexive */}
      <section className="border-b border-border bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-clay-foreground/70">Where Neuroscience Meets Movement</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
              Neuro-Reflexive Stretching and Performance Training
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-16 gap-y-6 text-base leading-relaxed text-charcoal-foreground/75 md:grid-cols-2">
            <Reveal className="space-y-5">
              <p>
                Neuro-Reflexive Bodywork, developed by Alexandra Voss, uses the reflexive arcs of the
                spinal cord to communicate with the skeletal and muscular pathways that are
                determined by gravity.
              </p>
              <p>
                It exploits the balance counter balance paradigms that keep you upright during every
                movement that you make, every moment of your life.
              </p>
              <p>
                Your spinal cord makes moment to moment choices and responses to your mass in space,
                balancing you against the force of gravity.
              </p>
            </Reveal>
            <Reveal delay={80} className="space-y-5">
              <p>
                Your cerebellum, or little brain, has as many connections as your entire cerebrum. It
                is the store house for movement patterns like walking, driving your car, playing the
                guitar, and many more subtle and almost unnoticeable everyday movements like bringing
                a fork to your mouth, or turning a doorknob.
              </p>
              <p>
                We interact with this world using the language that it understands: muscle length,
                tendon tension, and gravity. Telling a body to stand up straight is a temporary and
                transient command. It has no holding power, because it is engaging the wrong part of
                the nervous system.
              </p>
              <p className="font-display text-2xl text-charcoal-foreground">
                Unlock your body&rsquo;s full potential by optimizing your response to gravity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Performance</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
              Sports Massage and Performance Therapy
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Sports massage restores function. It balances your body in gravity.
            </p>
            <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              {[
                "Feel better",
                "Move better",
                "Sleep better",
                "Heal faster",
                "Recover from injury or heavy workouts faster",
                "Reduce inflammation",
                "Say “goodbye” to chronic pain",
                "Advance human performance therapy",
              ].map((item) => (
                <li
                  key={item}
                  className="bg-ivory px-6 py-5 text-sm transition-colors duration-500 hover:bg-sand/50"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="https://www.youtube.com/watch?v=xESKFYO9LTI"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay"
              >
                Watch the sports massage video
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <img
              src={linens}
              alt="Folded ivory linens on a massage table"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-[320px] w-full object-cover md:h-[520px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Arm wrist hand */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Precision Work</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
              Arm, Wrist &amp; Hand Therapy
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We all depend on our hands. Surgeons, dentists, tattoo artists, carpenters, mechanics,
              musicians — keeping them in top condition will extend your career and keep you
              performing at a professional level.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="font-display text-2xl italic">But, did you know&hellip;</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Arm unwinding, elbow &amp; wrist alignment, and hand opening are critical components
                to alleviate and eliminate:
              </p>
              <ul className="mt-6 space-y-3 text-base">
                {[
                  "Neck pain",
                  "Shoulder pain",
                  "Rib pain",
                  "Headaches",
                  "Breathing restrictions",
                  "Low back pain",
                  "Dysfunctional walking patterns",
                ].map((s) => (
                  <li key={s} className="border-b border-border/70 pb-3">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="self-center border border-border bg-ivory p-8 md:p-12">
              <p className="font-display text-3xl italic">It&rsquo;s true.</p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                For most clients that are only getting temporary results from chronic pain, this may
                well be the missing component to their treatment plans.
              </p>
              <a
                href="sms:7755605625"
                className="mt-8 inline-flex items-center bg-charcoal px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground transition-colors duration-500 hover:bg-clay"
              >
                Text to book
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
