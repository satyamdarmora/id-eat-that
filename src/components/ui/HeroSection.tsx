"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-golden/30 blur-2xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-sage/30 blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="sticker bg-golden text-deep-plum mb-6 inline-block">
                fresh from the kitchen
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.5rem] sm:text-6xl lg:text-7xl font-heading font-bold text-deep-plum leading-[1.05] sm:leading-[1.1] mb-6"
            >
              Your brain
              <br />
              is{" "}
              <span className="text-primary relative">
                hungry
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8c30-6 60-6 90 0s60 6 90 0"
                    stroke="#F59E0B"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted max-w-lg mb-3 leading-relaxed"
            >
              A psychology blog by{" "}
              <Link
                href="/about"
                className="text-deep-plum font-bold underline decoration-golden decoration-2 underline-offset-4 hover:decoration-coral"
              >
                Chef Pari
              </Link>{" "}
              — bite-sized psych, deep dives, and spicy takes to help you
              understand yourself (and everyone else).
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-handwritten text-2xl text-primary rotate-[-2deg] inline-block mb-8"
            >
              &quot;The id wants what it wants.&quot;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link
                href="/#menu"
                className="bg-golden text-deep-plum font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-coral hover:scale-105 hover:-rotate-1 active:scale-95 transition-all shadow-lg hover:shadow-xl"
              >
                What&apos;s on the menu? →
              </Link>
              <Link
                href="/about"
                className="border-2 border-deep-plum text-deep-plum font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-deep-plum hover:text-cream hover:scale-105 active:scale-95 transition-all"
              >
                Meet the chef
              </Link>
            </motion.div>
          </div>

          {/* Right: Fortune Cookie / Daily Tip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl border-2 border-deep-plum p-6 sm:p-8 shadow-[6px_6px_0_#1A1A1A] sm:shadow-[8px_8px_0_#1A1A1A] relative">
              {/* Badge */}
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-golden text-deep-plum font-heading font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 border-deep-plum rotate-6">
                Today&apos;s Special
              </div>

              <h3 className="font-heading font-bold text-2xl text-deep-plum mb-3">
                🥠 Fortune Cookie
              </h3>
              <p className="text-lg text-muted italic leading-relaxed mb-4">
                &quot;Between stimulus and response there is a space. In that
                space is our power to choose our response.&quot;
              </p>
              <p className="text-sm font-bold text-primary">
                — Viktor Frankl
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-muted uppercase tracking-wider mb-2">
                  Up next
                </p>
                <Link
                  href="/#menu"
                  className="text-deep-plum font-heading font-bold text-lg hover:text-primary transition-colors"
                >
                  Browse the full menu →
                </Link>
                <p className="text-sm text-muted mt-1">
                  6 categories · always something new
                </p>
              </div>
            </div>

            {/* Decorative stickers */}
            <div className="absolute -bottom-6 -left-6 bg-soft-yellow text-deep-plum font-handwritten text-xl px-4 py-2 rounded-2xl border-2 border-golden rotate-[-8deg] hidden sm:block">
              mmm, brainy!
            </div>
            <div className="absolute -top-8 left-8 text-4xl animate-float hidden sm:block">
              🧠
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
