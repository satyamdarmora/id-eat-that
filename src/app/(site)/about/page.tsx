"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

const interests = [
  { topic: "Cognitive Biases", flavor: "🌶️ Spicy", detail: "Why your brain lies to you — and how to catch it" },
  { topic: "Social Psychology", flavor: "🍛 Hearty", detail: "How groups shape who we are and what we believe" },
  { topic: "Behavioral Psychology", flavor: "🍿 Snackable", detail: "The science behind your habits, good and bad" },
  { topic: "Positive Psychology", flavor: "🍵 Comforting", detail: "What actually makes people happy (spoiler: not money)" },
  { topic: "Developmental Psych", flavor: "🍰 Sweet", detail: "How we grow, change, and become who we are" },
  { topic: "Abnormal Psychology", flavor: "📖 Deep", detail: "Understanding mental health without the stigma" },
];

const fastFacts = [
  { label: "Name", value: "Pari Darmora" },
  { label: "School", value: "Vasant Valley School, Delhi" },
  { label: "Class", value: "12" },
  { label: "Subjects", value: "Maths, Econ, BSt, Psych, English" },
  { label: "Sibling count", value: "Zero (more on that below)" },
  { label: "Currently obsessed with", value: "Karen Horney" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-soft-yellow py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-golden/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Chef illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
              transition={{ duration: 0.6 }}
              className="relative max-w-sm mx-auto md:mx-0"
            >
              <div className="rounded-3xl overflow-hidden border-2 border-deep-plum shadow-[8px_8px_0_#1A1A1A]">
                <Image
                  src="/chef-pari.png"
                  alt="Illustration of Pari Darmora as a chef, in golden and indigo line-art"
                  width={1086}
                  height={1448}
                  priority
                  className="w-full h-auto block"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-golden text-deep-plum font-handwritten text-lg px-4 py-2 rounded-2xl border-2 border-deep-plum rotate-6 shadow-sm">
                that&apos;s me!
              </div>
              <div className="absolute -top-4 -left-4 bg-cream text-deep-plum font-handwritten text-base px-3 py-1.5 rounded-2xl border-2 border-deep-plum -rotate-6 shadow-sm hidden sm:block">
                Chef Pari 🥄
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="sticker bg-golden text-deep-plum mb-4 inline-block">
                meet the chef
              </span>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl text-deep-plum mb-4">
                Hi, I&apos;m Pari.
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-4">
                I&apos;m a Class 12 student at{" "}
                <strong className="text-deep-plum">Vasant Valley School</strong>{" "}
                in Delhi. My subjects are Maths, Economics, Business Studies,
                English — and the one that hijacked my entire brain: Psychology.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-4">
                Everyone in my stream is gunning for finance. I am too,
                technically. But somewhere between the demand curves and the
                balance sheets, I figured out that <em>every</em> market,
                transaction, dinner-table argument, and bad first date is just
                psychology in a costume.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                So I started cooking. This blog is where I plate it up —
                no jargon, no stuffy lectures. Just the stuff that made me go{" "}
                <em>&quot;wait, THAT&apos;S why?&quot;</em> at 1 AM.
              </p>
              <p className="mt-6 font-handwritten text-2xl text-primary rotate-[-2deg]">
                &quot;The id wants what it wants.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The moment */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-handwritten text-xl text-primary rotate-[-2deg] inline-block mb-2">
              the moment it clicked
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-deep-plum mb-6">
              When I knew I was cooked.
            </h2>

            <div className="bg-white border-2 border-deep-plum rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0_#1A1A1A] space-y-4 text-muted leading-relaxed text-lg">
              <p>
                We were in class, going through the neo-Freudians — Adler,
                Jung, Horney. The chapter hit the section on{" "}
                <strong className="text-deep-plum">only-child characteristics</strong>:
                center of attention, mature for their age, accustomed to adult
                company, occasionally a bit too convinced their opinion is the
                correct one.
              </p>
              <p>
                Reader. I am an only child.
              </p>
              <p>
                It read like a horoscope that had actually done its homework.
                Every line was a polite roast. And for the first time, school
                wasn&apos;t telling me a fact — it was telling me{" "}
                <em>about me</em>. I closed the textbook and went, &quot;okay
                wait. What else does this book know about me that I don&apos;t?&quot;
              </p>
              <p>
                That was the moment psychology stopped being a subject and
                started being a mirror.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The confession */}
      <section className="py-16 sm:py-20 bg-soft-lavender">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-handwritten text-xl text-primary rotate-[-2deg] inline-block mb-2">
              full disclosure
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-deep-plum mb-6">
              I didn&apos;t learn this from a book.
            </h2>

            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                Most of what I know about how people work, I didn&apos;t pick
                up from textbooks. I picked it up from{" "}
                <strong className="text-deep-plum">my dad</strong>, who can
                argue with me for four hours straight about anything — politics,
                relationships, why I think I&apos;m right when I&apos;m clearly
                wrong, why he thinks he&apos;s right when he&apos;s clearly
                wrong.
              </p>
              <p>
                I picked it up from watching my friends fall in love badly,
                fall out of love worse, and explain it all back to me with a
                vocabulary borrowed from Instagram therapists. (No shade. Some
                of them are right.)
              </p>
              <p>
                I picked it up by being the only kid in a room of adults for
                most of my childhood, watching grown-ups perform &quot;normal&quot;
                very poorly.
              </p>
              <p>
                So if you&apos;re here for &quot;I read Freud once and my life
                changed&quot; — sorry, dodo. That&apos;s not the story. The
                story is more like: I&apos;ve been{" "}
                <em>noticing</em> for years, and psych finally gave me the
                vocabulary to describe what I was already seeing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I want */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-deep-plum text-cream rounded-3xl p-8 sm:p-10 border-2 border-deep-plum shadow-[6px_6px_0_#F59E0B]"
          >
            <span className="font-handwritten text-xl text-golden rotate-[-2deg] inline-block mb-2">
              the deal
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              What I want from you.
            </h2>
            <p className="text-cream/80 leading-relaxed text-lg mb-4">
              Read these articles. Walk away{" "}
              <span className="text-golden font-bold">questioning something
              you took for granted.</span>{" "}
              Why you scroll. Why you fight with your mom. Why you fall for
              who you fall for. Why &quot;common sense&quot; is usually just
              common — not sense.
            </p>
            <p className="text-cream/80 leading-relaxed text-lg">
              I don&apos;t want you to agree with me. I want you to{" "}
              <em>argue back</em>. Comment. Email. Text the article to a
              friend with &quot;ok but is this real???&quot;. That&apos;s the
              point.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current obsessions */}
      <section className="py-16 sm:py-20 bg-soft-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-handwritten text-xl text-primary rotate-[-2deg] inline-block mb-2">
              what&apos;s currently on my mind
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-deep-plum">
              Two things I won&apos;t shut up about.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border-2 border-deep-plum rounded-2xl p-6 shadow-[4px_4px_0_#1A1A1A]"
            >
              <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full inline-block mb-3">
                favorite psychologist
              </span>
              <h3 className="font-heading font-bold text-2xl text-deep-plum mb-2">
                Karen Horney
              </h3>
              <p className="text-muted leading-relaxed">
                Freud said women have penis envy. Horney looked at him, the
                entire field, and the century, and said:{" "}
                <em className="text-deep-plum">&quot;Have you considered that
                men have womb envy?&quot;</em> Maybe the obsession with
                building, achieving, leaving a legacy is just compensation for
                not being able to create life. Spicy. Discuss.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white border-2 border-deep-plum rounded-2xl p-6 shadow-[4px_4px_0_#1A1A1A]"
            >
              <span className="text-xs font-bold bg-coral/20 text-coral px-3 py-1 rounded-full inline-block mb-3">
                🌶️ my spicy take
              </span>
              <h3 className="font-heading font-bold text-2xl text-deep-plum mb-2">
                Most &quot;dating advice&quot; is just trauma in a hat.
              </h3>
              <p className="text-muted leading-relaxed">
                Half the &quot;rules&quot; people swear by are class-coded,
                culture-coded, or someone&apos;s personal heartbreak rebranded
                as universal wisdom. My friends and I fight about this
                constantly. A full spicy take is coming — stay seated.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <MarqueeStrip
        words={["CURIOUS", "HUNGRY", "ARGUMENTATIVE", "UNAPOLOGETIC", "DELHI", "ONLY-CHILD ENERGY", "REAL"]}
        bgColor="bg-golden"
        textColor="text-deep-plum"
      />

      {/* Why "Id Eat That"? */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-deep-plum rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0_#1A1A1A]"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-plum mb-4">
              Wait — why &quot;Id Eat That&quot;?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              In Freudian psychology, the{" "}
              <strong className="text-deep-plum">Id</strong> is the most primal
              part of your mind. It&apos;s raw instinct. Pure desire. The voice
              that says &quot;I want that NOW&quot; before your rational brain
              even wakes up.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-deep-plum">&quot;Id Eat That&quot;</strong>{" "}
              is that voice — but for knowledge. It&apos;s the part of you
              that&apos;s unapologetically curious, that devours ideas, that
              can&apos;t stop asking &quot;but why?&quot;
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Also, it&apos;s a pun. Because every good psych blog needs at
              least one Freudian slip.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="sticker bg-golden text-deep-plum">Id = instinct</span>
              <span className="sticker bg-soft-lavender text-primary">Ego = logic</span>
              <span className="sticker bg-soft-sage text-sage">Superego = morals</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fast facts */}
      <section className="py-12 sm:py-16 bg-soft-yellow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="font-handwritten text-xl text-primary rotate-[-2deg] inline-block mb-2">
              the chef in 6 facts
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-deep-plum">
              For the speed-readers.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-deep-plum rounded-2xl overflow-hidden shadow-[4px_4px_0_#1A1A1A]"
          >
            <dl className="divide-y-2 divide-deep-plum/10">
              {fastFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col sm:flex-row sm:items-center px-5 py-4 gap-1 sm:gap-4"
                >
                  <dt className="text-xs font-bold uppercase tracking-wider text-primary sm:w-44 flex-shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="text-deep-plum font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* My Psychology Menu — Interests */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-handwritten text-xl text-primary rotate-[-2deg] inline-block mb-2">
              what I cook up
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-deep-plum">
              My Psychology Menu
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((item, index) => (
              <motion.div
                key={item.topic}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border-2 border-deep-plum/10 rounded-2xl p-5 hover:border-golden transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-lg text-deep-plum">
                    {item.topic}
                  </h3>
                  <span className="text-xs font-bold bg-soft-yellow px-2 py-1 rounded-full">
                    {item.flavor}
                  </span>
                </div>
                <p className="text-sm text-muted">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-plum text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="font-heading font-bold text-3xl text-cream mb-4">
            Ready to eat?
          </h2>
          <p className="text-cream/70 mb-8">
            Start with the menu, pick your flavor, and dig in. I&apos;ll be in
            the kitchen.
          </p>
          <Link
            href="/#menu"
            className="inline-block bg-golden text-deep-plum font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:scale-105 active:scale-95 transition-all"
          >
            Browse the menu →
          </Link>
          <p className="mt-8 font-handwritten text-2xl text-golden rotate-[-2deg]">
            — Chef Pari
          </p>
        </motion.div>
      </section>
    </>
  );
}
