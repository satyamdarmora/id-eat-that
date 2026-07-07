"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  mood: "fun" | "serious" | "spicy";
  readTime: string;
  date?: string;
  reactions: {
    mindblown: number;
    lightbulb: number;
    felt: number;
    thinking: number;
  };
  index?: number;
  variant?: "default" | "featured";
  layout?: "scroll" | "grid";
}

const moodConfig = {
  fun: { bg: "bg-golden/20", text: "text-deep-plum", label: "🎉 Fun" },
  serious: { bg: "bg-primary/10", text: "text-primary", label: "📖 Deep" },
  spicy: { bg: "bg-coral/20", text: "text-coral", label: "🌶️ Spicy" },
};

const categoryColors: Record<string, string> = {
  Appetizers: "bg-soft-yellow text-deep-plum",
  "Main Course": "bg-golden/20 text-deep-plum",
  "Comfort Food": "bg-soft-sage text-sage",
  "Spicy Takes": "bg-coral/10 text-coral",
  Desserts: "bg-soft-lavender text-lavender",
  "Chef's Table": "bg-soft-yellow text-deep-plum",
};

export function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  mood,
  readTime,
  reactions,
  index = 0,
  variant = "default",
  layout = "scroll",
}: ArticleCardProps) {
  const totalReactions =
    reactions.mindblown + reactions.lightbulb + reactions.felt + reactions.thinking;
  const moodStyle = moodConfig[mood];

  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
      >
        <Link href={`/${slug}`}>
          <div className="bg-white border-2 border-deep-plum rounded-3xl overflow-hidden shadow-[6px_6px_0_#1A1A1A] hover:shadow-[8px_8px_0_#F59E0B] transition-shadow group">
            {/* Gradient image placeholder */}
            <div className="h-48 sm:h-64 bg-gradient-to-br from-primary via-golden to-coral relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">🧠</span>
              </div>
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[category] || "bg-white text-deep-plum"}`}>
                  {category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${moodStyle.bg} ${moodStyle.text}`}>
                  {moodStyle.label}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-plum mb-3 leading-tight">
                {title}
              </h2>
              <p className="text-muted leading-relaxed mb-4">{excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">{readTime}</span>
                {totalReactions > 0 ? (
                  <div className="flex items-center gap-2 text-sm">
                    <span>🧠 {reactions.mindblown}</span>
                    <span>💡 {reactions.lightbulb}</span>
                    <span>❤️ {reactions.felt}</span>
                    <span className="text-muted">· {totalReactions} reactions</span>
                  </div>
                ) : (
                  <span className="text-sm font-handwritten text-primary">
                    fresh out the kitchen 🍳
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  const sizeClasses =
    layout === "scroll"
      ? "min-w-[280px] sm:min-w-[300px] max-w-[360px] flex-shrink-0"
      : "w-full";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
      className={sizeClasses}
    >
      <Link href={`/${slug}`}>
        <div className="article-card bg-white border-2 border-deep-plum/20 rounded-2xl overflow-hidden h-full hover:border-golden transition-colors group">
          {/* Compact gradient placeholder */}
          <div className="h-36 bg-gradient-to-br from-soft-yellow to-soft-lavender relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              {mood === "fun" ? "🎉" : mood === "spicy" ? "🌶️" : "📖"}
            </div>
            <div className="absolute top-3 left-3">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[category] || "bg-white text-deep-plum"}`}>
                {category}
              </span>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-heading font-bold text-lg text-deep-plum mb-2 leading-snug line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-3">
              {excerpt}
            </p>

            <div className="flex items-center justify-between text-xs text-muted">
              <span>{readTime}</span>
              <span>
                {totalReactions > 0 ? `${totalReactions} reactions` : "fresh 🍳"}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
