import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:grid-cols-3 md:px-10 md:py-20">
        <div>
          <p className="font-display text-3xl leading-tight">Alexandra M Voss</p>
          <p className="mt-3 text-sm text-charcoal-foreground/70">
            Providing High Quality Therapy and LIVE Continuing Education for Nevada
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-charcoal-foreground/60">
            Alexandra Voss LMT NV4126
          </p>
          <a
            href="http://www.abmp.com/"
            target="_blank"
            rel="noreferrer"
            className="link-underline mt-3 inline-block text-xs text-charcoal-foreground/70"
          >
            Associated Bodywork &amp; Massage Professionals — Certified Member
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <p className="eyebrow text-charcoal-foreground/50">Studio</p>
          <p className="text-charcoal-foreground/85">
            Behavioral Wellness Center
            <br />
            438 Pyramid Highway
            <br />
            Sparks, NV 89431
          </p>
          <p className="text-charcoal-foreground/85">Monday – Saturday, 8am – 6pm</p>
          <a href="tel:7755605625" className="link-underline block">
            (775) 560-5625 — direct text line
          </a>
          <a href="tel:7755005358" className="link-underline block">
            (775) 500-5358 — voicemail receptionist
          </a>
          <a href="mailto:alex.m.voss@gmail.com" className="link-underline block">
            alex.m.voss@gmail.com
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <p className="eyebrow text-charcoal-foreground/50">Explore</p>
          {[
            { to: "/featured-therapies-rates", label: "Therapies & Rates" },
            { to: "/exclusive-services", label: "Exclusive Services" },
            { to: "/testimonials", label: "Testimonials" },
            { to: "/benefits-of-massage", label: "Benefits of Massage" },
            { to: "/frequently-asked-questions", label: "Frequently Asked Questions" },
            { to: "/bodysense", label: "Body Sense Magazine" },
            { to: "/cancellation-policy-refunds", label: "Cancellation Policy & Refunds" },
            { to: "/book-a-session", label: "Book a Session" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline block text-charcoal-foreground/80"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-3 text-xs">
            <a
              href="http://facebook.com/Vossapproachseminars"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              Facebook
            </a>
            <a
              href="https://www.yelp.com/biz/alexandra-voss-reno"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              Yelp Reviews
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-charcoal-foreground/10 px-5 py-6 text-center text-[0.7rem] tracking-wide text-charcoal-foreground/50 md:px-10">
        © Copyright 2026 Alexandra M Voss. All rights reserved.
      </div>
    </footer>
  );
}
