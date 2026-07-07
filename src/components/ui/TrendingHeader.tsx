"use client";

import { motion } from "framer-motion";

export function TrendingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="flex items-end justify-between mb-8"
    >
      <div>
        <span className="font-handwritten text-xl text-primary rotate-[-2deg] inline-block mb-2">
          hot off the stove
        </span>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-deep-plum">
          What&apos;s Cooking?
        </h2>
      </div>
      <span className="hidden sm:inline text-sm font-bold text-primary cursor-pointer hover:underline">
        View all →
      </span>
    </motion.div>
  );
}
