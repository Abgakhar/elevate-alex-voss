import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import linens from "@/assets/hands-therapy.jpg";

export const Route = createFileRoute("/about-the-practitioner")({
  head: () => ({
    meta: [
      { title: "About the Practitioner — Alexandra Voss, LMT NV4126" },
      {
        name: "description",
        content:
          "Alexandra Voss has practiced as a Licensed Massage Therapist and ABMP member since 2004. BS Neuroscience, AS Biology, AA University Sciences.",
      },
      { property: "og:title", content: "About the Practitioner — Alexandra Voss, LMT" },
      {
        property: "og:description",
        content:
          "Licensed Massage Therapist since 2004, CEO of Voss Approach Seminars, committed to advancing massage therapy education in Nevada.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="About Your Practitioner"
        title="Alexandra Voss, LMT NV4126"
        intro="Providing high quality therapy and LIVE continuing education for Nevada."
      />

      <section>
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              <span className="font-display text-2xl text-foreground">Alexandra Voss</span> has been
              a practicing Licensed Massage Therapist and member of ABMP since 2004.
            </p>
            <p>
              Along with her private practice in Reno, NV she is the CEO of Voss Approach Seminars
              and has consistently shown a commitment to the advancement of massage therapy and the
              quality of education offered to students eager to enter this important field.
            </p>
            <p>
              Voss Approach Seminars offers Live full day seminars that will take the basic industry
              education into tried and tested treatment plans that yield noticeable results in
              efficient time frames.
            </p>
            <p>
              Aspiring massage therapy students preparing for the MBLEX, as well as seasoned
              professionals, can keep up and expand their knowledge base in Anatomy &amp;
              Physiology, Kinesiology, Pathology, and more by visiting and using my Facebook page —
              The Bodywork Library.
            </p>
            <a
              href="http://Facebook.com/thebodyworklibrary"
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay"
            >
              Facebook.com/thebodyworklibrary
            </a>
          </Reveal>

          <Reveal delay={80} className="space-y-8">
            <div className="border border-border bg-ivory p-8">
              <p className="eyebrow">Education</p>
              <ul className="mt-4 space-y-2 font-display text-xl">
                <li>BS Neuroscience</li>
                <li>AS Biology</li>
                <li>AA University Sciences</li>
              </ul>
            </div>
            <img
              src={linens}
              alt="Folded ivory linens on a massage table in warm daylight"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-[340px] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
