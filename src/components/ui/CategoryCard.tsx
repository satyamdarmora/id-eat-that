"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CategoryCardProps {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  articleCount: number;
  index: number;
}

export function CategoryCard({
  slug,
  name,
  tagline,
  description,
  icon,
  color,
  borderColor,
  articleCount,
  index,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/category/${slug}`}>
        <div
          className={`category-card ${color} border-2 ${borderColor} rounded-2xl p-6 h-full cursor-pointer`}
        >
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className="font-heading font-bold text-xl text-deep-plum mb-1">
            {name}
          </h3>
          <p className="font-handwritten text-primary text-lg mb-2">
            {tagline}
          </p>
          <p className="text-sm text-muted leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-deep-plum bg-white/60 px-3 py-1 rounded-full">
              {articleCount === 0
                ? "Coming soon"
                : `${articleCount} article${articleCount === 1 ? "" : "s"}`}
            </span>
            <span className="text-primary text-sm font-bold">
              Explore →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
