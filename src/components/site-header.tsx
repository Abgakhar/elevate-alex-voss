import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about-the-practitioner", label: "Practitioner" },
  { to: "/featured-therapies-rates", label: "Therapies & Rates" },
  { to: "/exclusive-services", label: "Exclusive Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/benefits-of-massage", label: "Benefits" },
  { to: "/frequently-asked-questions", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-500",
        scrolled ? "border-border bg-ivory/95 backdrop-blur-sm" : "border-transparent bg-ivory",
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-4 md:px-10 md:py-6">
        <Link to="/" className="group flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl leading-none tracking-tight md:text-[1.75rem]">
            Alexandra M Voss
          </span>
          <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground lg:inline">
            Bodyworks
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-clay" }}
              className="link-underline text-[0.8rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:7755605625"
            className="hidden items-center gap-2 border border-charcoal bg-charcoal px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal-foreground transition-colors duration-500 hover:bg-clay hover:border-clay md:inline-flex"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            (775) 560-5625
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <Menu className="size-4 rotate-90" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 z-50 flex flex-col bg-ivory lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-2xl">Alexandra M Voss</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center border border-border"
            >
              <X className="size-4" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-1 px-6 pb-16">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-clay" }}
                className="border-b border-border/70 py-4 font-display text-3xl"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/book-a-session"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center bg-charcoal px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal-foreground"
            >
              Book a Session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
