"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CoverStoryProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  mood: "fun" | "serious" | "spicy";
  readTime: string;
  date?: string;
  featured?: boolean;
}

const moodConfig = {
  fun: { label: "🎉 Fun Read", cls: "bg-golden/20 text-deep-plum" },
  serious: { label: "📖 Deep Dive", cls: "bg-primary/10 text-primary" },
  spicy: { label: "🌶️ Spicy", cls: "bg-coral/20 text-coral" },
};

const moodEmoji = { fun: "🎉", serious: "🧠", spicy: "🌶️" };

export function CoverStory({
  slug,
  title,
  excerpt,
  category,
  mood,
  readTime,
  date,
  featured,
}: CoverStoryProps) {
  const m = moodConfig[mood] ?? moodConfig.serious;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
    >
      <Link href={`/${slug}`} className="block group">
        <article className="relative grid md:grid-cols-2 bg-white border-2 border-deep-plum rounded-3xl overflow-hidden shadow-[8px_8px_0_#1A1A1A] transition-shadow duration-300 hover:shadow-[12px_12px_0_#F59E0B]">
          {/* Cover panel */}
          <div className="relative min-h-[220px] md:min-h-[340px] bg-gradient-to-br from-primary via-golden to-coral flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 dot-grid" aria-hidden />
            <span className="text-7xl sm:text-8xl drop-shadow-[3px_3px_0_rgba(26,26,26,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              {moodEmoji[mood] ?? "🧠"}
            </span>
            {/* Corner ribbon */}
            <div className="absolute top-6 -left-12 w-44 rotate-[-45deg] bg-deep-plum text-golden text-[11px] font-bold tracking-[0.2em] uppercase text-center py-1.5 shadow-md">
              {featured ? "Today's Special" : "The Feature"}
            </div>
          </div>

          {/* Text side */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest bg-soft-yellow text-deep-plum px-3 py-1 rounded-full border border-deep-plum">
                {category}
              </span>
              <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${m.cls}`}>
                {m.label}
              </span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-deep-plum leading-tight mb-3">
              {title}
            </h2>
            <p className="text-muted leading-relaxed mb-6 line-clamp-3">
              {excerpt}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-golden flex items-center justify-center text-base border-2 border-deep-plum">
                👩‍🍳
              </div>
              <p className="text-xs text-muted">
                <span className="font-bold text-deep-plum">Chef Pari</span>
                {date ? ` · ${date}` : ""} · {readTime}
              </p>
            </div>

            <span className="font-bold text-deep-plum inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Read the full story <span aria-hidden>→</span>
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
