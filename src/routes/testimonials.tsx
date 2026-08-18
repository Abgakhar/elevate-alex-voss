import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Alexandra M Voss, LMT, Sparks NV" },
      {
        name: "description",
        content:
          "Client experiences with Music Immersion Massage and therapeutic bodywork by Alexandra Voss, LMT in Sparks, Nevada.",
      },
      { property: "og:title", content: "Testimonials — Alexandra M Voss, LMT" },
      {
        property: "og:description",
        content: "What clients say about Music Immersion Massage and Alexandra's therapeutic work.",
      },
    ],
  }),
  component: Testimonials,
});

const quotes: { name: string; text: string }[] = [
  {
    name: "Bianca M.",
    text: "Music immersion massage is my absolute favorite! Experiencing it with Alex was one of the best experiences I've had when it comes to receiving massage. The music gives the massage a whole different vibe and I feel that the therapist and the client get to connect on a higher level. Like Alex said it is very sedating. There's no way to explain in words to get the feeling across unless you actually experience it yourself. It's a different experience for each and every client. Alex is amazing!",
  },
  {
    name: "Marie B.",
    text: "I just want everyone to know if you have never received a massage from Alexandra your in for a wonderful experience. From the moment the headphones go on the music starts to relax your mind and body. Before you know it you are off in another world. Your body just flows with the music. And when the massage is over you feel so relaxed but energized at the same time. I can not say enough about this kind of massage, but it the way a massage should be! Alexandra your the best! Looking forward to seeing you soon. Thank you, for helping me feel better!",
  },
  {
    name: "Rocky M.",
    text: "This is probably one of the most memorable things to know about you, always finding new techniques and ideas... This is a amazing as nobody's ever heard of it and it's an Alexandra Voss invention. Removing your awareness of the world around you changes the entire bodywork game.",
  },
  {
    name: "Dave Y.",
    text: "I have had the fortunate pleasure of experiencing Alex's music immersion massage and it was so amazing that it put me to sleep while she continued to work on my body... I was shocked that I could relax that much and enjoy the healing touch while being that calm and relaxed. Alex is a very unique and incredible healer!",
  },
  {
    name: "April B.",
    text: "I would only recommend this type of massage if you truly want a healing session. Absolutely wonderful! Out of mind and body experience. Alex puts incredible energy, music and healing hands together to make your body feel incredible. She is an artist!",
  },
  {
    name: "Andrea V.",
    text: "Alex's music immersion massage is completely beyond any type of massage offered by anyone else. If you were to combine floating, music and master massage techniques, you might come close to this experience.",
  },
  {
    name: "Brittany S.",
    text: "By far the most unique massage I have ever received. And the most incredibly relaxing. Nothing like it and no other type of massage or massage therapist has even come close to the feeling I got when I received this immersion massage! A definite must try. So worth it! I haven't gotten full body work in over a year because I know I'll be disappointed because it won't come close to the amazingness of this! A million thanks to my career idol Alex!",
  },
  {
    name: "Amy K.",
    text: "Massages are thoughtfully choreographed and expertly delivered. Sade’ and Zero-Seven are some very good choices for the soundtrack. Alex is without question who I recommend you see if you are looking for the very best in therapeutic massage!",
  },
  {
    name: "Aaron M.",
    text: "It really was incredible. It's like a harmonic re-tuning of the body on a neural level while the massage itself compliments the physiological level of relaxation and stress reduction. Completely amazing. Music can be integrated into every part of the human psyche. It was the most sedating and physiologically intensive massage ever. There are multiple levels of therapy at play in this type of body work.",
  },
  {
    name: "Becci S.",
    text: "I was fortunate enough to experience this type of massage from her. It was the most therapeutic massage for my mind, body and soul. I was able to fully relax and tune out the world.",
  },
  {
    name: "Steve F.",
    text: "Alex gave me one it was amazing and very relaxing! Alex’s skills have gave me a great deal of relief.",
  },
];

function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Testimonials"
        title="In clients’ own words."
        intro="Experiences shared by clients of the practice."
      />

      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
          <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
            {quotes.map((q, i) => (
              <Reveal
                as="figure"
                key={q.name}
                delay={(i % 3) * 70}
                className="mb-8 break-inside-avoid border border-border bg-ivory p-7 transition-shadow duration-500 hover:shadow-soft"
              >
                <blockquote className="text-[1.05rem] leading-relaxed text-foreground/85">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-clay">
                  {q.name}
                </figcaption>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/book-a-session"
              className="inline-flex items-center bg-charcoal px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground transition-colors duration-500 hover:bg-clay"
            >
              Share your experience
            </Link>
            <a
              href="https://www.yelp.com/biz/alexandra-voss-reno"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-charcoal/30 px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 hover:border-charcoal hover:bg-secondary"
            >
              Yelp reviews
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
