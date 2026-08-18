import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageSquare, MapPin, Clock, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import heroStudio from "@/assets/hero-studio.jpg";
import musicImmersion from "@/assets/music-immersion.jpg";
import redLight from "@/assets/red-light.jpg";
import linens from "@/assets/hands-therapy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexandra M Voss LMT — Massage Therapy in Sparks, NV" },
      {
        name: "description",
        content:
          "Licensed massage therapy in Sparks, NV. Music Immersion Massage, myofascial release, sports and lymphatic work. Now offering red light therapy. Book by text.",
      },
      { property: "og:title", content: "Alexandra M Voss LMT — Massage Therapy in Sparks, NV" },
      {
        property: "og:description",
        content:
          "High quality therapeutic bodywork at the Behavioral Wellness Center, 438 Pyramid Highway, Sparks NV. Monday–Saturday, 8am–6pm.",
      },
    ],
  }),
  component: Home,
});

const rates = [
  { time: "1/2 hour", price: "$50" },
  { time: "1 hour", price: "$100" },
  { time: "90 minutes", price: "$150" },
  { time: "2 hours", price: "$200" },
];

const featured = [
  {
    name: "Music Immersion Massage",
    note: "Stress relief, detoxify, boost immunity, integrate",
  },
  {
    name: "Myo-fascial Release and Unwinding",
    note: "The gold standard of deep bodywork — advanced multiple certifications",
  },
  {
    name: "Sports Massage and Kinetic Reprogramming",
    note: "Increase performance, recovery, injury rehabilitation",
  },
  {
    name: "Lymphatic Drainage",
    note: "Pain management, post surgery inflammation and scar formation therapy",
  },
  {
    name: "Vagus Nerve Stimulation",
    note: "Reduce cortisol, decompress cervical spine — add to any session at no extra charge",
  },
  {
    name: "Hand, Arm, Foot and Leg Therapy",
    note: "For surgeons, dentists, tattoo artists, chefs, mechanics, office workers, athletes",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 pt-14 pb-16 md:px-10 md:pt-20 md:pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <p className="eyebrow">Licensed Massage Therapy · Sparks, Nevada</p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.02] md:text-[4.25rem] md:leading-[0.98]">
              Unleash your body&rsquo;s potential.
              <span className="block italic text-clay">Free your mind. Feed your soul.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
              Providing high quality therapy and LIVE continuing education for Nevada. Now booking
              appointments in the new wellness location — extended hours to welcome new and
              existing clients to the beautiful new studio.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="sms:7755605625"
                className="inline-flex items-center gap-2 bg-charcoal px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground transition-colors duration-500 hover:bg-clay"
              >
                <MessageSquare className="size-3.5" aria-hidden="true" />
                Text to book
              </a>
              <Link
                to="/featured-therapies-rates"
                className="inline-flex items-center gap-2 border border-charcoal/30 px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 hover:border-charcoal hover:bg-secondary"
              >
                Therapies &amp; rates
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-y-6 border-t border-border pt-8 text-sm sm:grid-cols-3">
              <div>
                <dt className="eyebrow">Since</dt>
                <dd className="mt-1.5 font-display text-2xl">2004</dd>
              </div>
              <div>
                <dt className="eyebrow">Hours</dt>
                <dd className="mt-1.5 font-display text-2xl">Mon–Sat</dd>
              </div>
              <div>
                <dt className="eyebrow">License</dt>
                <dd className="mt-1.5 font-display text-2xl">NV4126</dd>
              </div>
            </dl>
          </div>

          <Reveal className="relative">
            <img
              src={heroStudio}
              alt="Warmly lit massage studio with cream linens and candlelight"
              width={1600}
              height={1104}
              className="h-[380px] w-full object-cover md:h-[600px]"
            />
            <div className="absolute -bottom-6 left-4 max-w-[16rem] border border-border bg-ivory p-5 shadow-soft md:-left-10 md:bottom-8">
              <p className="eyebrow flex items-center gap-2">
                <Sparkles className="size-3" aria-hidden="true" /> New
              </p>
              <p className="mt-2 font-display text-xl leading-snug">
                Now offering Red Light Therapy in a bigger, relaxed studio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Welcome + booking flow */}
      <section className="border-b border-border bg-sand/40">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Welcome</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.75rem]">
              A calm, simple way to schedule your session.
            </h2>
          </Reveal>
          <Reveal delay={80} className="space-y-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              My new AI assistant will take your appointment request. Available times will be texted
              to you. Choose your session time and session length, and a confirmation text will be
              sent.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-t border-border pt-5">
                <p className="eyebrow flex items-center gap-2">
                  <Clock className="size-3" aria-hidden="true" /> Appointment schedule
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Now scheduling Monday – Saturday, 8am – 6pm.
                </p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="eyebrow">Payment</p>
                <p className="mt-3 text-sm text-muted-foreground">Cash or Zelle only.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:7755605625"
                className="inline-flex items-center gap-2 bg-clay px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay-foreground transition-opacity duration-500 hover:opacity-90"
              >
                <Phone className="size-3.5" aria-hidden="true" /> (775) 560-5625
              </a>
              <Link
                to="/book-a-session"
                className="inline-flex items-center border border-charcoal/30 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 hover:border-charcoal"
              >
                All booking options
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rates */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Session Rates</p>
              <h2 className="mt-5 max-w-xl text-3xl leading-tight md:text-[2.75rem]">
                All sessions are charged by time — $25 per each 15 minute interval.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              There is no extra charge for deep tissue, advanced modalities, or special services.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      {/* Featured therapies */}
      <section className="border-b border-border bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay-foreground/70">Featured Therapies</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.75rem]">
              Treatment plans built to yield noticeable results in efficient time frames.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {featured.map((f, i) => (
              <Reveal
                as="li"
                key={f.name}
                delay={i * 60}
                className="border-t border-charcoal-foreground/15 pt-6"
              >
                <h3 className="text-2xl leading-snug">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-foreground/70">{f.note}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-14">
            <Link
              to="/featured-therapies-rates"
              className="inline-flex items-center border border-charcoal-foreground/30 px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 hover:bg-charcoal-foreground/10"
            >
              See the full list of therapies
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Music immersion feature */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={musicImmersion}
              alt="Over-ear headphones resting on folded ivory linen beside a brass bowl"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-[300px] w-full object-cover md:h-[460px]"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Signature Session</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.75rem]">
              Music Immersion Massage
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>Full somatic immersion into your inner world.</p>
              <p>
                This playlist driven massage is delivered with both of us in high end surround sound
                headphones. There is no distraction from outside noise, no talking, just 90 minutes
                of floating mind and body.
              </p>
              <p>Deep pressure techniques swim in your soft tissue along with the music.</p>
              <p className="font-display text-2xl text-foreground">
                It is the Ultimate Relaxation Massage.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/exclusive-services"
                className="inline-flex items-center border border-charcoal/30 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 hover:border-charcoal hover:bg-secondary"
              >
                Exclusive services
              </Link>
              <a
                href="https://www.youtube.com/watch?v=nzvhOziKnuc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center border border-charcoal/30 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 hover:border-charcoal hover:bg-secondary"
              >
                Watch the video
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video */}
      <section className="border-b border-border bg-sand/40">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Video</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.75rem]">
              See the work before you feel it.
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              { id: "nzvhOziKnuc", title: "Music Immersion Massage" },
              { id: "xESKFYO9LTI", title: "Sports Massage" },
            ].map((v) => (
              <figure key={v.id} className="border border-border bg-ivory p-3">
                <div className="aspect-video w-full bg-secondary">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="size-full"
                  />
                </div>
                <figcaption className="px-2 pt-4 pb-1 text-sm text-muted-foreground">
                  {v.title} — Alex Voss
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Red light + practitioner */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Now Offering</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.75rem]">Red Light Therapy</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Available in the new, bigger and more relaxed studio — joining the professional
              wellness practitioners at the Behavioral Wellness Center in Sparks.
            </p>
            <img
              src={redLight}
              alt="Warm red light therapy glow across a calm treatment room"
              width={1408}
              height={912}
              loading="lazy"
              className="mt-8 h-[240px] w-full object-cover md:h-[300px]"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">About Your Practitioner</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.75rem]">Alexandra Voss, LMT</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Alexandra Voss has been a practicing Licensed Massage Therapist and member of ABMP
              since 2004. Education: BS Neuroscience, AS Biology, AA University Sciences.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Along with her private practice in Reno, NV she is the CEO of Voss Approach Seminars
              and has consistently shown a commitment to the advancement of massage therapy and the
              quality of education offered to students entering the field.
            </p>
            <Link
              to="/about-the-practitioner"
              className="link-underline mt-7 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay"
            >
              Read more about Alexandra
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-b border-border bg-sand/40">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">In Clients&rsquo; Words</p>
            <blockquote className="mt-7 text-2xl leading-snug md:text-[2.15rem]">
              &ldquo;By far the most unique massage I have ever received. And the most incredibly
              relaxing. Nothing like it and no other type of massage or massage therapist has even
              come close to the feeling I got when I received this immersion massage!&rdquo;
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Brittany S.
            </p>
            <Link
              to="/testimonials"
              className="link-underline mt-8 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay"
            >
              Read all testimonials
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Location / CTA */}
      <section>
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="size-3" aria-hidden="true" /> Office Location
            </p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.75rem]">
              A new, bigger, relaxed studio.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Joining the professional wellness practitioners at:
            </p>
            <p className="mt-4 font-display text-2xl leading-relaxed">
              Behavioral Wellness Center
              <br />
              438 Pyramid Highway
              <br />
              Sparks, NV 89431
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="http://maps.google.com/maps?q=438+Pyramid+Highway,Sparks,NV+89431"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center bg-charcoal px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground transition-colors duration-500 hover:bg-clay"
              >
                Open in maps
              </a>
              <a
                href="sms:7755605625"
                className="inline-flex items-center border border-charcoal/30 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 hover:border-charcoal"
              >
                Text for availability
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <img
              src={linens}
              alt="Folded ivory linens on a massage table in warm daylight"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-[320px] w-full object-cover md:h-[480px]"
            />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
