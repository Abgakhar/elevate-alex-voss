import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/book-a-session")({
  head: () => ({
    meta: [
      { title: "Book a Session — Alexandra M Voss, LMT, Sparks NV" },
      {
        name: "description",
        content:
          "Book by direct text line (775) 560-5625, voicemail receptionist (775) 500-5358, or email request. Scheduling Monday – Saturday, 8am – 6pm in Sparks, Nevada.",
      },
      { property: "og:title", content: "Book a Session — Alexandra M Voss, LMT" },
      {
        property: "og:description",
        content:
          "Request an appointment by text, phone or email. Available times are texted to you; choose your session length and receive a confirmation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookASession,
});

const channels = [
  {
    label: "Direct text line",
    value: "(775) 560-5625",
    href: "sms:7755605625",
    icon: MessageSquare,
    note: "Fastest way to reach the practice.",
  },
  {
    label: "Voicemail receptionist",
    value: "(775) 500-5358",
    href: "tel:7755005358",
    icon: Phone,
    note: "Leave a message and receive a callback.",
  },
  {
    label: "Email request",
    value: "alex.m.voss@gmail.com",
    href: "mailto:alex.m.voss@gmail.com",
    icon: Mail,
    note: "Appointment inquiries and questions.",
  },
];

function BookASession() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Book a Session"
        title="I want to hear from you."
        intro="Available times will be texted to you. Choose your session time and session length, and a confirmation text will be sent."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <ul className="grid gap-px border border-border bg-border md:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal
                as="li"
                key={c.value}
                delay={i * 70}
                className="group bg-ivory px-7 py-10 transition-colors duration-500 hover:bg-sand/50"
              >
                <p className="eyebrow flex items-center gap-2">
                  <c.icon className="size-3" aria-hidden="true" /> {c.label}
                </p>
                <a
                  href={c.href}
                  className="mt-4 inline-flex items-center gap-2 font-display text-[1.75rem] leading-tight"
                >
                  {c.value}
                  <ArrowUpRight className="size-4 translate-y-0 text-clay transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
                <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-sand/40">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">What to send</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
              Three simple reasons to reach out.
            </h2>
          </Reveal>
          <Reveal delay={80} className="space-y-10">
            <div className="border-t border-border pt-6">
              <h3 className="text-2xl">Appointment inquiry</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Now scheduling Monday – Saturday, 8am – 6pm. Sessions run from 1/2 hour to 2 hours —
                $25 per each 15 minute interval. Cash or Zelle only.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-2xl">Leave a comment or testimonial</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Let others know about your experience. Let me know how I can serve you better.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-2xl">Ask a question</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Help me address your concerns on a one on one basis. Tell me your story and your
                health and wellness goals. Let me help you find the information you need hidden in
                all the false information out there.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Studio</p>
            <p className="mt-5 font-display text-3xl leading-relaxed">
              Behavioral Wellness Center
              <br />
              438 Pyramid Highway
              <br />
              Sparks, NV 89431
            </p>
            <a
              href="http://maps.google.com/maps?q=438+Pyramid+Highway,Sparks,NV+89431"
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-6 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay"
            >
              View larger map
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Stay connected</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">Join the mailing list.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Get Extended Time Vouchers for massage services. Join the community of licensed massage
              therapists and students who thrive on opportunities to learn and grow. Be the first to
              hear about new content, products, and upcoming open houses, seminars, and focus groups
              in your town.
            </p>
            <a
              href="mailto:alex.m.voss@gmail.com?subject=Join%20Mailing%20List"
              className="group mt-8 inline-flex items-center gap-2 bg-charcoal px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground transition-colors duration-500 hover:bg-clay"
            >
              Email to join
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
