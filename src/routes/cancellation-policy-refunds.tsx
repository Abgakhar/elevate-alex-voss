import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/cancellation-policy-refunds")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy & Refunds — Alexandra M Voss, LMT" },
      {
        name: "description",
        content:
          "Cancellation policy for classes and sessions: no-shows are not refunded, and cancellations for a full refund are accepted 24 hours prior to start time.",
      },
      { property: "og:title", content: "Cancellation Policy & Refunds — Alexandra M Voss, LMT" },
      {
        property: "og:description",
        content:
          "Our desire is to be effective and fair to all clients. Please review the no-show and late arrival policies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CancellationPolicy,
});

function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Cancellation Policy & Refunds"
        title="Effective and fair to all clients."
        intro="We understand that unanticipated events happen occasionally in everyone’s life. In our desire to be effective and fair to all clients, the following policies are honored."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="border-t border-border pt-7">
              <p className="font-display text-5xl leading-none text-clay/50">01</p>
              <h2 className="mt-5 text-3xl">No-shows</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Anyone who either forgets or consciously chooses to forgo their class session for
                whatever reason will be considered a “no-show” and consequently, will not be
                reimbursed or refunded their tuition. Cancelations for a full refund of tuition will
                only be accepted 24 hours prior to class start time.
              </p>
            </Reveal>
            <Reveal delay={90} className="border-t border-border pt-7">
              <p className="font-display text-5xl leading-none text-clay/50">02</p>
              <h2 className="mt-5 text-3xl">Late arrivals</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Continuing education is based on instructional hours. If you arrive late, you may
                still attend the class session but may lose your eligibility for your certificate.
                Depending upon how late you arrive, your instructor will then determine if there is
                enough time remaining to bring you current through the scheduled breaks. Regardless
                of the loss of certification eligibility, you will be responsible for the “full”
                tuition cost. Out of respect and consideration to your instructor, your therapist
                colleagues, and fellow students, please plan accordingly and be on time.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-16 border-t border-border pt-8">
            <p className="font-display text-3xl md:text-[2.5rem]">We look forward to serving you.</p>
            <a
              href="sms:7755605625"
              className="mt-8 inline-flex items-center bg-charcoal px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground transition-colors duration-500 hover:bg-clay"
            >
              Text to book
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
