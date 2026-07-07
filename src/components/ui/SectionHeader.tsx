"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  size?: "md" | "lg";
}

export function SectionHeader({
  eyebrow,
  title,
  align = "center",
  size = "lg",
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center" : "text-left";
  const titleSize =
    size === "lg"
      ? "text-3xl sm:text-4xl lg:text-5xl"
      : "text-2xl sm:text-3xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`${alignClasses} mb-10 sm:mb-12`}
    >
      {eyebrow && (
        <span className="font-handwritten text-xl text-primary rotate-[-2deg] inline-block mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading font-bold ${titleSize} text-deep-plum`}>
        {title}
      </h2>
    </motion.div>
  );
}
