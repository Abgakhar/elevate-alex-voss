import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/frequently-asked-questions")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Massage with Alexandra M Voss" },
      {
        name: "description",
        content:
          "What to expect from your session: draping, undressing, what areas are worked, how you'll feel afterward, and when massage may be inadvisable.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Alexandra M Voss, LMT" },
      {
        property: "og:description",
        content: "Answers to common questions about massage and bodywork sessions.",
      },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    q: "Where will my massage or bodywork session take place?",
    a: "Your massage or bodywork session will take place in a warm, comfortable, quiet room. Soft music may be played to help you relax. You will lie on a table especially designed for your comfort.",
  },
  {
    q: "Must I be completely undressed?",
    a: "Most massage and bodywork techniques are traditionally performed with the client unclothed; however, some of the most profound restorative bodywork is done completely clothed. Wearing a loose tee shirt and gym shorts allows me to work in 3 dimensions and turn the body multiple times without having to negotiate and adjusting sheets.",
  },
  {
    q: "Will the practitioner be present when I disrobe?",
    a: "The practitioner will leave the room while you undress, relax onto the table, and cover yourself with a clean sheet or towel.",
  },
  {
    q: "Will I be covered during the session?",
    a: "You will be properly draped at all times to keep you warm and comfortable. Only the area being worked on will be exposed.",
  },
  {
    q: "What parts of my body will be massaged?",
    a: "A typical full-body session will include work on your back, hips, legs, feet, chest, arms, hands, head, neck, and shoulders.",
  },
  {
    q: "What will the massage or bodywork feel like?",
    a: "A relaxing Swedish massage is often a baseline for clients. In a general Swedish massage, your session may start with broad, flowing strokes that will help calm your nervous system and relax exterior muscle tension. As your body becomes relaxed, pressure will gradually be increased to relax specific areas and relieve areas of muscular tension. Often, a light oil or lotion is used to allow your muscles to be massaged without causing excessive friction to the skin. The oil also helps hydrate your skin. You should communicate immediately if you feel any discomfort so that another approach may be taken. Massage and bodywork are most effective when your body is not bracing in anticipation of pain.",
  },
  {
    q: "Are there different kinds of massage and bodywork?",
    a: "There are numerous types of massage and bodywork; various techniques utilize different strokes, including basic rubbing strokes, rocking movement, posture and movement re-education, application of pressure to specific points, and more. We can discuss which methods may be most appropriate for you.",
  },
  {
    q: "What should I do during the massage or bodywork session?",
    a: "Once a session style has been decided, I will give you any instructions that you will need to insure a successful session.",
  },
  {
    q: "How will I feel after the massage or bodywork session?",
    a: "Most people feel very relaxed. Some experience freedom from long-term aches and pains developed from tension or repetitive activity. After an initial period of feeling slowed down, people often experience increased energy, heightened awareness, and greater productivity which can last for days.",
  },
  {
    q: "What are the benefits of massage and bodywork?",
    a: "Massage and bodywork can help release chronic muscular tension and pain, improve circulation, increase joint flexibility, reduce mental and physical fatigue and stress, promote faster healing of injured muscular tissue, improve posture, and reduce blood pressure. Massage and bodywork is also known to promote better sleep, improve concentration, reduce anxiety and create an overall sense of well-being.",
  },
  {
    q: "Are there any medical conditions that would make massage or bodywork inadvisable?",
    a: "Yes. That's why it's imperative that, before you begin your session, the practitioner asks general health questions. It is very important that you inform the practitioner of any health problems or medications you are taking. If you are under a doctor's care, it is strongly advised that you receive a written recommendation for massage or bodywork prior to any session. Depending on the condition, approval from your doctor may be required.",
  },
];

function Faq() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="Everything you may want to know before your first session."
      />

      <section>
        <div className="mx-auto max-w-[900px] px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-xl leading-snug hover:no-underline md:text-2xl">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal className="mt-12">
            <a
              href="sms:7755605625"
              className="inline-flex items-center bg-charcoal px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground transition-colors duration-500 hover:bg-clay"
            >
              Still have a question? Text me
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
